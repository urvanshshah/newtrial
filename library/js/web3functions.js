////////////////////// Truncate function /////////////////
var truncate = function(fullStr, strLen, separator) {
    if (fullStr.length <= strLen) return fullStr;

    separator = separator || '...';

    var sepLen = separator.length,
        charsToShow = strLen - sepLen,
        frontChars = Math.ceil(charsToShow / 2),
        backChars = Math.floor(charsToShow / 2);

    return fullStr.substr(0, frontChars) +
        separator +
        fullStr.substr(fullStr.length - backChars);
};

function strtodec(amount, dec) {
    var stringf = "";
    for (var i = 0; i < dec; i++) {
        stringf = stringf + "0";
    }
    return amount + stringf;
}

///// seconds to days /////
function secondsToDhms(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " min, " : " min, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " sec" : " sec") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}

///// seconds to days /////
function secondsToD(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " day " : " days ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
    return dDisplay;
}

/////////////////// set decimals function //////////////////
function setDecimals(number, decimals) {
    number = number.toString();
    let numberAbs = number.split('.')[0]
    let numberDecimals = number.split('.')[1] ? number.split('.')[1] : '';
    while (numberDecimals.length < decimals) {
        numberDecimals += "0";
    }
    return numberAbs + numberDecimals;
}

function openAccount() {
    document.getElementById("accountPanel").style.right = "0rem";
}

function closeAccount() {
    document.getElementById("accountPanel").style.right = "-25rem";
}

const accountContainer = document.querySelector("#balances");
const vestingContainer = document.querySelector("#vesting");

function clearPanel() {
    vestingContainer.innerHTML = '';
    accountContainer.innerHTML = '';
}


/////////////////// Calc BNBPrice Function //////////////////
async function calcBNBPrice() {
    var web3 = new Web3(provider);
    let bnbToSend = web3.utils.toWei("1", "ether");
    let amountOut;
    try {
        let router = await new web3.eth.Contract(routerAbi, pancakeSwapRouterAddress);
        amountOut = await router.methods.getAmountsOut(bnbToSend, [BNBTokenAddress, BUSDTokenAddress]).call();
        amountOut = web3.utils.fromWei(amountOut[1]);
    } catch (error) {}
    if (!amountOut) return 0;
    return amountOut;
}

/////////////////// Calc Amount of Tokens to send //////////////////
async function calcBNBtoToken(amountBNBToToken, TokenAddress) {
    if (TokenAddress != BNBTokenAddress) {
        var web3 = new Web3(provider);
        let bnbToTokenAmount = web3.utils.toWei("" + amountBNBToToken + "", "ether");
        console.log(bnbToTokenAmount);
        let amountOut;
        try {
            let router = await new web3.eth.Contract(routerAbi, pancakeSwapRouterAddress);
            amountOut = await router.methods.getAmountsOut(bnbToTokenAmount, [BNBTokenAddress, TokenAddress]).call();
            amountOut = web3.utils.fromWei(amountOut[1]);
        } catch (error) {}
        if (!amountOut) return 0;
        return amountOut;
    }
}

/////////////////// realtime token conversion //////////////////
async function calcTokens() {
    var selectedToken = $("#selectToken").val();
    console.log(selectedToken);
    var web3 = new Web3(provider);
    var inputUsdAmount = $("#inputUsdAmount").val();
    console.log(inputUsdAmount);
    var BNBPrice = await calcBNBPrice();
    console.log(BNBPrice);
    $("#BNBPrice").text("BNB price: " + BNBPrice);
    var amountBNB = inputUsdAmount / BNBPrice;
    console.log(amountBNB);
    $("#inputBNBAmount").val(amountBNB);
    if (selectToken != "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c") {
        var amountToken = await calcBNBtoToken(amountBNB, selectedToken);
        console.log(amountToken);
        $("#inputAmount").val(amountToken);
    }
    setTimeout(calcTokens, 60000); // Calculation refreshes every minute
}



/////////////////// Get latest block Functie ///////////
async function getLatestBlock() {
    let blockArray = await web3.eth.getBlock("latest");
    return blockArray;
}

async function startSwap() {
    let block = await getLatestBlock();
    console.log("Gas Limit:" + block.gasLimit / block.transactions.length);
    const gLimit = block.gasLimit / block.transactions.length;


    let res = buyToken(selectedAccount, amountToExchange)
        .catch(e => {
            console.error("Error in sell:", e);
            process.exit(1);
        });
    console.log(res);
    await sleep(10000 + Math.random().toFixed(4) * 10000);
}

async function buyToken(targetAccount, amount) {
    let fromTokenAbi = await getContractABI(fromToken);
    let privateKey = Buffer.from(targetAccount.privateKey.slice(2), 'hex');
    let fromTokenContract = new web3.eth.Contract(fromTokenAbi, fromToken, {
        from: targetAccount.address
    });
    let fromTokenSymbol = await fromTokenContract.methods.symbol().call();
    let fromTokenDec = await fromTokenContract.methods.decimals().call();
    let tokenAmount = setDecimals(amount, fromTokenDec);
    let amountToSell = web3.utils.toBN(web3.utils.toHex(tokenAmount));

    console.log('Swapping ' + amount + ' ' + fromTokenSymbol + ' with ' + fromTokenDec + ' decimals for BNB to pancakeswap for address ' + Account.address);

    // Approve Token spend
    let approveTokenSpendData = fromTokenContract.methods.approve(pancakeSwapRouterAddress, amountToSell);

    // Get count of approve transaction
    let count = await web3.eth.getTransactionCount(targetAccount.address);


    let rawTransactionApprove = {
        "from": targetAccount.address,
        "gasPrice": web3.utils.toHex(10000000000),
        "gasLimit": web3.utils.toHex(100000),
        "to": fromToken,
        "value": "0x0",
        "data": approveTokenSpendData.encodeABI(),
        "nonce": web3.utils.toHex(count)
    };
    let transactionApprove = new Tx(rawTransactionApprove, {
        'common': BSC_FORK
    });
    transactionApprove.sign(privateKey)

    let resultApprove = await web3.eth.sendSignedTransaction('0x' + transactionApprove.serialize().toString('hex'));
    let gasPrice = 10000000000;
    let gasLimit = 2900000;
    if (toToken != BNBTokenAddress && fromToken != BNBTokenAddress) {
        var amountOut = await routerContract.methods.getAmountsOut(amountToSell, [fromToken, BNBTokenAddress, toToken]).call();
        amountOut = web3.utils.fromWei(amountOut[2]);
    } else {
        var amountOut = await routerContract.methods.getAmountsOut(amountToSell, [fromToken, toToken]).call();
        amountOut = web3.utils.fromWei(amountOut[1]);
    }

    /////// Get decimals and symbol of output token ////////////////
    let toTokenDec = await toTokenContract.methods.decimals().call();
    let toTokenSymbol = await toTokenContract.methods.symbol().call();

    ////// Convert amount out with the correct decimals ////
    let amountOutMin = setDecimals(amountOut.toString(), toTokenDec);
    console.log("You will receive: " + amountOut / (1 ** toTokenDec) + ' ' + toTokenSymbol);


    count = await web3.eth.getTransactionCount(targetAccount.address);
    /////////////////////// Check which methode to use /////////////////////
    if (fromToken == BNBTokenAddress) {
        var data = routerContract.methods.swapExactETHForTokensSupportingFeeOnTransferTokens(
            web3.utils.toBN(amountOutMin.toString()), [fromToken, toToken],
            targetAccount.address,
            web3.utils.toHex(Math.round(Date.now() / 1000) + 60 * 20),
        );
        var rawTransaction = {
            "from": targetAccount.address,
            "gasPrice": web3.utils.toHex(gasPrice),
            "gasLimit": web3.utils.toHex(gasLimit),
            "to": pancakeSwapRouterAddress,
            "value": web3.utils.toHex(amountToSell),
            "data": data.encodeABI(),
            "nonce": web3.utils.toHex(count)
        };
    } else if (toToken == BNBTokenAddress) {
        var data = routerContract.methods.swapExactTokensForETHSupportingFeeOnTransferTokens(
            amountToSell,
            web3.utils.toBN(amountOutMin.toString()), [fromToken, toToken],
            targetAccount.address,
            web3.utils.toHex(Math.round(Date.now() / 1000) + 60 * 20),
        );
        var rawTransaction = {
            "from": targetAccount.address,
            "gasPrice": web3.utils.toHex(gasPrice),
            "gasLimit": web3.utils.toHex(gasLimit),
            "to": pancakeSwapRouterAddress,
            "value": web3.utils.toHex(0),
            "data": data.encodeABI(),
            "nonce": web3.utils.toHex(count)
        };
    } else if (toToken != BNBTokenAddress && fromToken != BNBTokenAddress) {
        var data = routerContract.methods.swapExactTokensForTokens(
            amountToSell,
            web3.utils.toBN(amountOutMin.toString()), [fromToken, BNBTokenAddress, toToken],
            targetAccount.address,
            web3.utils.toHex(Math.round(Date.now() / 1000) + 60 * 20),
        );
        var rawTransaction = {
            "from": targetAccount.address,
            "gasPrice": web3.utils.toHex(gasPrice),
            "gasLimit": web3.utils.toHex(gasLimit),
            "to": pancakeSwapRouterAddress,
            "value": web3.utils.toHex(0),
            "data": data.encodeABI(),
            "nonce": web3.utils.toHex(count)
        };
    }
}