! function(e, i) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery)
}(window, function(t, e) {
    "use strict";
    var i = Array.prototype.slice,
        n = t.console,
        c = void 0 === n ? function() {} : function(t) {
            n.error(t)
        };

    function r(u, l, h) {
        (h = h || e || t.jQuery) && (l.prototype.option || (l.prototype.option = function(t) {
            h.isPlainObject(t) && (this.options = h.extend(!0, this.options, t))
        }), h.fn[u] = function(t) {
            if ("string" != typeof t) return a = t, this.each(function(t, e) {
                var i = h.data(e, u);
                i ? (i.option(a), i._init()) : (i = new l(e, a), h.data(e, u, i))
            }), this;
            var n, r, s, o, a, e = i.call(arguments, 1);
            return r = e, o = "$()." + u + '("' + (n = t) + '")', (t = this).each(function(t, e) {
                var i = h.data(e, u);
                i ? (e = i[n]) && "_" != n.charAt(0) ? (i = e.apply(i, r), s = void 0 === s ? i : s) : c(o + " is not a valid method") : c(u + " not initialized. Cannot call methods, i.e. " + o)
            }), void 0 !== s ? s : t
        }, s(h))
    }

    function s(t) {
        t && !t.bridget && (t.bridget = r)
    }
    return s(e || t.jQuery), r
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                t = i[t] = i[t] || [];
            return -1 == t.indexOf(e) && t.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this
        }
    }, e.off = function(t, e) {
        t = this._events && this._events[t];
        if (t && t.length) {
            e = t.indexOf(e);
            return -1 != e && t.splice(e, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], r = 0; r < i.length; r++) {
                var s = i[r];
                n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e)
            }
            return this
        }
    }, e.allOff = function() {
        delete this._events, delete this._onceEvents
    }, t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";

    function f(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }
    var e = "undefined" == typeof console ? function() {} : function(t) {
            console.error(t)
        },
        p = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        D = p.length;

    function g(t) {
        t = getComputedStyle(t);
        return t || e("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), t
    }
    var m, v = !1;

    function y(t) {
        if (v || (v = !0, (d = document.createElement("div")).style.width = "200px", d.style.padding = "1px 2px 3px 4px", d.style.borderStyle = "solid", d.style.borderWidth = "1px 2px 3px 4px", d.style.boxSizing = "border-box", (c = document.body || document.documentElement).appendChild(d), h = g(d), m = 200 == Math.round(f(h.width)), y.isBoxSizeOuter = m, c.removeChild(d)), (t = "string" == typeof t ? document.querySelector(t) : t) && "object" == typeof t && t.nodeType) {
            var e = g(t);
            if ("none" == e.display) return function() {
                for (var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, e = 0; e < D; e++) t[p[e]] = 0;
                return t
            }();
            var i = {};
            i.width = t.offsetWidth, i.height = t.offsetHeight;
            for (var n = i.isBorderBox = "border-box" == e.boxSizing, r = 0; r < D; r++) {
                var s = p[r],
                    o = e[s],
                    o = parseFloat(o);
                i[s] = isNaN(o) ? 0 : o
            }
            var a = i.paddingLeft + i.paddingRight,
                u = i.paddingTop + i.paddingBottom,
                l = i.marginLeft + i.marginRight,
                h = i.marginTop + i.marginBottom,
                c = i.borderLeftWidth + i.borderRightWidth,
                d = i.borderTopWidth + i.borderBottomWidth,
                t = n && m,
                n = f(e.width);
            !1 !== n && (i.width = n + (t ? 0 : a + c));
            n = f(e.height);
            return !1 !== n && (i.height = n + (t ? 0 : u + d)), i.innerWidth = i.width - (a + c), i.innerHeight = i.height - (u + d), i.outerWidth = i.width + l, i.outerHeight = i.height + h, i
        }
    }
    return y
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var i = function() {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i] + "MatchesSelector";
            if (t[n]) return n
        }
    }();
    return function(t, e) {
        return t[i](e)
    }
}),
function(e, i) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector)
}(window, function(i, s) {
    var u = {
            extend: function(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            },
            modulo: function(t, e) {
                return (t % e + e) % e
            }
        },
        e = Array.prototype.slice;
    u.makeArray = function(t) {
        return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t]
    }, u.removeFrom = function(t, e) {
        e = t.indexOf(e); - 1 != e && t.splice(e, 1)
    }, u.getParent = function(t, e) {
        for (; t.parentNode && t != document.body;)
            if (t = t.parentNode, s(t, e)) return t
    }, u.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, u.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, u.filterFindElements = function(t, n) {
        t = u.makeArray(t);
        var r = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement)
                if (n) {
                    s(t, n) && r.push(t);
                    for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++) r.push(e[i])
                } else r.push(t)
        }), r
    }, u.debounceMethod = function(t, e, n) {
        n = n || 100;
        var r = t.prototype[e],
            s = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[s];
            clearTimeout(t);
            var e = arguments,
                i = this;
            this[s] = setTimeout(function() {
                r.apply(i, e), delete i[s]
            }, n)
        }
    }, u.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, u.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var l = i.console;
    return u.htmlInit = function(o, a) {
        u.docReady(function() {
            var t = u.toDashed(a),
                n = "data-" + t,
                e = document.querySelectorAll("[" + n + "]"),
                t = document.querySelectorAll(".js-" + t),
                t = u.makeArray(e).concat(u.makeArray(t)),
                r = n + "-options",
                s = i.jQuery;
            t.forEach(function(t) {
                var e = t.getAttribute(n) || t.getAttribute(r);
                try {
                    i = e && JSON.parse(e)
                } catch (e) {
                    return void(l && l.error("Error parsing " + n + " on " + t.className + ": " + e))
                }
                var i = new o(t, i);
                s && s.data(t, a, i)
            })
        })
    }, u
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(t) {
        return e(0, t)
    }) : "object" == typeof module && module.exports ? module.exports = e(0, require("get-size")) : (t.Flickity = t.Flickity || {}, t.Flickity.Cell = e(0, t.getSize))
}(window, function(t, e) {
    function i(t, e) {
        this.element = t, this.parent = e, this.create()
    }
    var n = i.prototype;
    return n.create = function() {
        this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0
    }, n.destroy = function() {
        this.unselect(), this.element.style.position = "";
        var t = this.parent.originSide;
        this.element.style[t] = "", this.element.removeAttribute("aria-hidden")
    }, n.getSize = function() {
        this.size = e(this.element)
    }, n.setPosition = function(t) {
        this.x = t, this.updateTarget(), this.renderPosition(t)
    }, n.updateTarget = n.setDefaultTarget = function() {
        var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
    }, n.renderPosition = function(t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t)
    }, n.select = function() {
        this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden")
    }, n.unselect = function() {
        this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true")
    }, n.wrapShift = function(t) {
        this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
    }, n.remove = function() {
        this.element.parentNode.removeChild(this.element)
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {}, t.Flickity.Slide = e())
}(window, function() {
    "use strict";

    function t(t) {
        this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
    }
    var e = t.prototype;
    return e.addCell = function(t) {
        var e;
        this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length && (this.x = t.x, e = this.isOriginLeft ? "marginLeft" : "marginRight", this.firstMargin = t.size[e])
    }, e.updateTarget = function() {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft",
            e = this.getLastCell(),
            t = e ? e.size[t] : 0,
            t = this.outerWidth - (this.firstMargin + t);
        this.target = this.x + this.firstMargin + t * this.parent.cellAlign
    }, e.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }, e.select = function() {
        this.cells.forEach(function(t) {
            t.select()
        })
    }, e.unselect = function() {
        this.cells.forEach(function(t) {
            t.unselect()
        })
    }, e.getCellElements = function() {
        return this.cells.map(function(t) {
            return t.element
        })
    }, t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function(t) {
        return e(0, t)
    }) : "object" == typeof module && module.exports ? module.exports = e(0, require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.animatePrototype = e(0, t.fizzyUIUtils))
}(window, function(t, e) {
    var i = {
        startAnimation: function() {
            this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
        },
        animate: function() {
            this.applyDragForce(), this.applySelectedAttraction();
            var t, e = this.x;
            this.integratePhysics(), this.positionSlider(), this.settle(e), this.isAnimating && (t = this, requestAnimationFrame(function() {
                t.animate()
            }))
        },
        positionSlider: function() {
            var t = this.x;
            this.options.wrapAround && 1 < this.cells.length && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), this.dispatchScrollEvent()
        },
        setTranslateX: function(t, e) {
            t += this.cursorPosition, t = this.options.rightToLeft ? -t : t;
            t = this.getPositionValue(t);
            this.slider.style.transform = e ? "translate3d(" + t + ",0,0)" : "translateX(" + t + ")"
        },
        dispatchScrollEvent: function() {
            var t, e = this.slides[0];
            e && (e = (t = -this.x - e.target) / this.slidesWidth, this.dispatchEvent("scroll", null, [e, t]))
        },
        positionSliderAtSelected: function() {
            this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
        },
        getPositionValue: function(t) {
            return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
        },
        settle: function(t) {
            this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, 2 < this.restingFrames && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
        },
        shiftWrapCells: function(t) {
            var e = this.cursorPosition + t;
            this._shiftCells(this.beforeShiftCells, e, -1);
            t = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
            this._shiftCells(this.afterShiftCells, t, 1)
        },
        _shiftCells: function(t, e, i) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.wrapShift(0 < e ? i : 0), e -= r.size.outerWidth
            }
        },
        _unshiftCells: function(t) {
            if (t && t.length)
                for (var e = 0; e < t.length; e++) t[e].wrapShift(0)
        },
        integratePhysics: function() {
            this.x += this.velocity, this.velocity *= this.getFrictionFactor()
        },
        applyForce: function(t) {
            this.velocity += t
        },
        getFrictionFactor: function() {
            return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        },
        getRestingPosition: function() {
            return this.x + this.velocity / (1 - this.getFrictionFactor())
        },
        applyDragForce: function() {
            var t;
            this.isDraggable && this.isPointerDown && (t = this.dragX - this.x - this.velocity, this.applyForce(t))
        },
        applySelectedAttraction: function() {
            var t;
            this.isDraggable && this.isPointerDown || this.isFreeScrolling || !this.slides.length || (t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction, this.applyForce(t))
        }
    };
    return i
}),
function(o, a) {
    var t;
    "function" == typeof define && define.amd ? define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function(t, e, i, n, r, s) {
        return a(o, t, e, i, n, r, s)
    }) : "object" == typeof module && module.exports ? module.exports = a(o, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate")) : (t = o.Flickity, o.Flickity = a(o, o.EvEmitter, o.getSize, o.fizzyUIUtils, t.Cell, t.Slide, t.animatePrototype))
}(window, function(n, t, e, o, i, a, r) {
    var s = n.jQuery,
        u = n.getComputedStyle,
        l = n.console;

    function h(t, e) {
        for (t = o.makeArray(t); t.length;) e.appendChild(t.shift())
    }
    var c = 0,
        d = {};

    function f(t, e) {
        var i = o.getQueryElement(t);
        if (i) {
            if (this.element = i, this.element.flickityGUID) {
                var n = d[this.element.flickityGUID];
                return n && n.option(e), n
            }
            s && (this.$element = s(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e), this._create()
        } else l && l.error("Bad element for Flickity: " + (i || t))
    }
    f.defaults = {
        accessibility: !0,
        cellAlign: "center",
        freeScrollFriction: .075,
        friction: .28,
        namespaceJQueryEvents: !0,
        percentPosition: !0,
        resize: !0,
        selectedAttraction: .025,
        setGallerySize: !0
    }, f.createMethods = [];
    var p = f.prototype;
    o.extend(p, t.prototype), p._create = function() {
        var t, e = this.guid = ++c;
        for (t in this.element.flickityGUID = e, (d[e] = this).selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && n.addEventListener("resize", this), this.options.on) {
            var i = this.options.on[t];
            this.on(t, i)
        }
        f.createMethods.forEach(function(t) {
            this[t]()
        }, this), this.options.watchCSS ? this.watchCSS() : this.activate()
    }, p.option = function(t) {
        o.extend(this.options, t)
    }, p.activate = function() {
        this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), h(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready"))
    }, p._createSlider = function() {
        var t = document.createElement("div");
        t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
    }, p._filterFindCellElements = function(t) {
        return o.filterFindElements(t, this.options.cellSelector)
    }, p.reloadCells = function() {
        this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
    }, p._makeCells = function(t) {
        return this._filterFindCellElements(t).map(function(t) {
            return new i(t, this)
        }, this)
    }, p.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }, p.getLastSlide = function() {
        return this.slides[this.slides.length - 1]
    }, p.positionCells = function() {
        this._sizeCells(this.cells), this._positionCells(0)
    }, p._positionCells = function(t) {
        this.maxCellHeight = (t = t || 0) && this.maxCellHeight || 0;
        var e, i = 0;
        0 < t && (i = (e = this.cells[t - 1]).x + e.size.outerWidth);
        for (var n = this.cells.length, r = t; r < n; r++) {
            var s = this.cells[r];
            s.setPosition(i), i += s.size.outerWidth, this.maxCellHeight = Math.max(s.size.outerHeight, this.maxCellHeight)
        }
        this.slideableWidth = i, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
    }, p._sizeCells = function(t) {
        t.forEach(function(t) {
            t.getSize()
        })
    }, p.updateSlides = function() {
        var n, r, s;
        this.slides = [], this.cells.length && (n = new a(this), this.slides.push(n), r = "left" == this.originSide ? "marginRight" : "marginLeft", s = this._getCanCellFit(), this.cells.forEach(function(t, e) {
            var i;
            n.cells.length && (i = n.outerWidth - n.firstMargin + (t.size.outerWidth - t.size[r]), s.call(this, e, i) || (n.updateTarget(), n = new a(this), this.slides.push(n))), n.addCell(t)
        }, this), n.updateTarget(), this.updateSelectedSlide())
    }, p._getCanCellFit = function() {
        var t = this.options.groupCells;
        if (!t) return function() {
            return !1
        };
        if ("number" == typeof t) {
            var e = parseInt(t, 10);
            return function(t) {
                return t % e != 0
            }
        }
        var t = "string" == typeof t && t.match(/^(\d+)%$/),
            i = t ? parseInt(t[1], 10) / 100 : 1;
        return function(t, e) {
            return e <= (this.size.innerWidth + 1) * i
        }
    }, p._init = p.reposition = function() {
        this.positionCells(), this.positionSliderAtSelected()
    }, p.getSize = function() {
        this.size = e(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
    };
    var D = {
        center: {
            left: .5,
            right: .5
        },
        left: {
            left: 0,
            right: 1
        },
        right: {
            right: 0,
            left: 1
        }
    };
    return p.setCellAlign = function() {
        var t = D[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
    }, p.setGallerySize = function() {
        var t;
        this.options.setGallerySize && (t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight, this.viewport.style.height = t + "px")
    }, p._getWrapShiftCells = function() {
        var t, e;
        this.options.wrapAround && (this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells), t = this.cursorPosition, e = this.cells.length - 1, this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1))
    }, p._getGapCells = function(t, e, i) {
        for (var n = []; 0 < t;) {
            var r = this.cells[e];
            if (!r) break;
            n.push(r), e += i, t -= r.size.outerWidth
        }
        return n
    }, p._containSlides = function() {
        var t, e, i, n, r, s;
        this.options.contain && !this.options.wrapAround && this.cells.length && (t = (e = this.options.rightToLeft) ? "marginRight" : "marginLeft", e = e ? "marginLeft" : "marginRight", i = this.slideableWidth - this.getLastCell().size[e], n = i < this.size.innerWidth, r = this.cursorPosition + this.cells[0].size[t], s = i - this.size.innerWidth * (1 - this.cellAlign), this.slides.forEach(function(t) {
            n ? t.target = i * this.cellAlign : (t.target = Math.max(t.target, r), t.target = Math.min(t.target, s))
        }, this))
    }, p.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        this.emitEvent(t, n), s && this.$element && (n = t += this.options.namespaceJQueryEvents ? ".flickity" : "", e && ((e = new s.Event(e)).type = t, n = e), this.$element.trigger(n, i))
    }, p.select = function(t, e, i) {
        this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = o.modulo(t, this.slides.length)), this.slides[t] && (e = this.selectedIndex, this.selectedIndex = t, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != e && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect")))
    }, p._wrapSelect = function(t) {
        var e = this.slides.length;
        if (!(this.options.wrapAround && 1 < e)) return t;
        var i = o.modulo(t, e),
            n = Math.abs(i - this.selectedIndex),
            r = Math.abs(i + e - this.selectedIndex),
            i = Math.abs(i - e - this.selectedIndex);
        !this.isDragSelect && r < n ? t += e : !this.isDragSelect && i < n && (t -= e), t < 0 ? this.x -= this.slideableWidth : e <= t && (this.x += this.slideableWidth)
    }, p.previous = function(t, e) {
        this.select(this.selectedIndex - 1, t, e)
    }, p.next = function(t, e) {
        this.select(this.selectedIndex + 1, t, e)
    }, p.updateSelectedSlide = function() {
        var t = this.slides[this.selectedIndex];
        t && (this.unselectSelectedSlide(), (this.selectedSlide = t).select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
    }, p.unselectSelectedSlide = function() {
        this.selectedSlide && this.selectedSlide.unselect()
    }, p.selectInitialIndex = function() {
        var t = this.options.initialIndex;
        if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
        else {
            if (t && "string" == typeof t)
                if (this.queryCell(t)) return void this.selectCell(t, !1, !0);
            var e = 0;
            t && this.slides[t] && (e = t), this.select(e, !1, !0)
        }
    }, p.selectCell = function(t, e, i) {
        t = this.queryCell(t);
        t && (t = this.getCellSlideIndex(t), this.select(t, e, i))
    }, p.getCellSlideIndex = function(t) {
        for (var e = 0; e < this.slides.length; e++)
            if (-1 != this.slides[e].cells.indexOf(t)) return e
    }, p.getCell = function(t) {
        for (var e = 0; e < this.cells.length; e++) {
            var i = this.cells[e];
            if (i.element == t) return i
        }
    }, p.getCells = function(t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            t = this.getCell(t);
            t && e.push(t)
        }, this), e
    }, p.getCellElements = function() {
        return this.cells.map(function(t) {
            return t.element
        })
    }, p.getParentCell = function(t) {
        var e = this.getCell(t);
        return e || (t = o.getParent(t, ".flickity-slider > *"), this.getCell(t))
    }, p.getAdjacentCellElements = function(t, e) {
        if (!t) return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (i <= 1 + 2 * t) return this.getCellElements();
        for (var n = [], r = e - t; r <= e + t; r++) {
            var s = this.options.wrapAround ? o.modulo(r, i) : r,
                s = this.slides[s];
            s && (n = n.concat(s.getCellElements()))
        }
        return n
    }, p.queryCell = function(t) {
        if ("number" == typeof t) return this.cells[t];
        if ("string" == typeof t) {
            if (t.match(/^[#.]?[\d/]/)) return;
            t = this.element.querySelector(t)
        }
        return this.getCell(t)
    }, p.uiChange = function() {
        this.emitEvent("uiChange")
    }, p.childUIPointerDown = function(t) {
        "touchstart" != t.type && t.preventDefault(), this.focus()
    }, p.onresize = function() {
        this.watchCSS(), this.resize()
    }, o.debounceMethod(f, "onresize", 150), p.resize = function() {
        var t;
        this.isActive && (this.getSize(), this.options.wrapAround && (this.x = o.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize"), t = this.selectedElements && this.selectedElements[0], this.selectCell(t, !1, !0))
    }, p.watchCSS = function() {
        this.options.watchCSS && (-1 != u(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
    }, p.onkeydown = function(t) {
        var e = document.activeElement && document.activeElement != this.element;
        !this.options.accessibility || e || (t = f.keyboardHandlers[t.keyCode]) && t.call(this)
    }, f.keyboardHandlers = {
        37: function() {
            var t = this.options.rightToLeft ? "next" : "previous";
            this.uiChange(), this[t]()
        },
        39: function() {
            var t = this.options.rightToLeft ? "previous" : "next";
            this.uiChange(), this[t]()
        }
    }, p.focus = function() {
        var t = n.pageYOffset;
        this.element.focus({
            preventScroll: !0
        }), n.pageYOffset != t && n.scrollTo(n.pageXOffset, t)
    }, p.deactivate = function() {
        this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function(t) {
            t.destroy()
        }), this.element.removeChild(this.viewport), h(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
    }, p.destroy = function() {
        this.deactivate(), n.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), s && this.$element && s.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete d[this.guid]
    }, o.extend(p, r), f.data = function(t) {
        t = (t = o.getQueryElement(t)) && t.flickityGUID;
        return t && d[t]
    }, o.htmlInit(f, "flickity"), s && s.bridget && s.bridget("flickity", f), f.setJQuery = function(t) {
        s = t
    }, f.Cell = i, f.Slide = a, f
}),
function(e, i) {
    "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.Unipointer = i(e, e.EvEmitter)
}(window, function(n, t) {
    function e() {}
    t = e.prototype = Object.create(t.prototype);
    t.bindStartEvent = function(t) {
        this._bindStartEvent(t, !0)
    }, t.unbindStartEvent = function(t) {
        this._bindStartEvent(t, !1)
    }, t._bindStartEvent = function(t, e) {
        var i = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener",
            e = "mousedown";
        n.PointerEvent ? e = "pointerdown" : "ontouchstart" in n && (e = "touchstart"), t[i](e, this)
    }, t.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, t.getTouch = function(t) {
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (i.identifier == this.pointerIdentifier) return i
        }
    }, t.onmousedown = function(t) {
        var e = t.button;
        e && 0 !== e && 1 !== e || this._pointerDown(t, t)
    }, t.ontouchstart = function(t) {
        this._pointerDown(t, t.changedTouches[0])
    }, t.onpointerdown = function(t) {
        this._pointerDown(t, t)
    }, t._pointerDown = function(t, e) {
        t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
    }, t.pointerDown = function(t, e) {
        this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
    };
    var i = {
        mousedown: ["mousemove", "mouseup"],
        touchstart: ["touchmove", "touchend", "touchcancel"],
        pointerdown: ["pointermove", "pointerup", "pointercancel"]
    };
    return t._bindPostStartEvents = function(t) {
        t && ((t = i[t.type]).forEach(function(t) {
            n.addEventListener(t, this)
        }, this), this._boundPointerEvents = t)
    }, t._unbindPostStartEvents = function() {
        this._boundPointerEvents && (this._boundPointerEvents.forEach(function(t) {
            n.removeEventListener(t, this)
        }, this), delete this._boundPointerEvents)
    }, t.onmousemove = function(t) {
        this._pointerMove(t, t)
    }, t.onpointermove = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
    }, t.ontouchmove = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e)
    }, t._pointerMove = function(t, e) {
        this.pointerMove(t, e)
    }, t.pointerMove = function(t, e) {
        this.emitEvent("pointerMove", [t, e])
    }, t.onmouseup = function(t) {
        this._pointerUp(t, t)
    }, t.onpointerup = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
    }, t.ontouchend = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e)
    }, t._pointerUp = function(t, e) {
        this._pointerDone(), this.pointerUp(t, e)
    }, t.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e])
    }, t._pointerDone = function() {
        this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
    }, t._pointerReset = function() {
        this.isPointerDown = !1, delete this.pointerIdentifier
    }, t.pointerDone = function() {}, t.onpointercancel = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
    }, t.ontouchcancel = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e)
    }, t._pointerCancel = function(t, e) {
        this._pointerDone(), this.pointerCancel(t, e)
    }, t.pointerCancel = function(t, e) {
        this.emitEvent("pointerCancel", [t, e])
    }, e.getPointerPoint = function(t) {
        return {
            x: t.pageX,
            y: t.pageY
        }
    }, e
}),
function(e, i) {
    "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("unipointer")) : e.Unidragger = i(e, e.Unipointer)
}(window, function(s, t) {
    function e() {}
    var i = e.prototype = Object.create(t.prototype);
    i.bindHandles = function() {
        this._bindHandles(!0)
    }, i.unbindHandles = function() {
        this._bindHandles(!1)
    }, i._bindHandles = function(t) {
        for (var e = (t = void 0 === t || t) ? "addEventListener" : "removeEventListener", i = t ? this._touchActionValue : "", n = 0; n < this.handles.length; n++) {
            var r = this.handles[n];
            this._bindStartEvent(r, t), r[e]("click", this), s.PointerEvent && (r.style.touchAction = i)
        }
    }, i._touchActionValue = "none", i.pointerDown = function(t, e) {
        this.okayPointerDown(t) && (this.pointerDownPointer = {
            pageX: e.pageX,
            pageY: e.pageY
        }, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]))
    };
    var n = {
            TEXTAREA: !0,
            INPUT: !0,
            SELECT: !0,
            OPTION: !0
        },
        r = {
            radio: !0,
            checkbox: !0,
            button: !0,
            submit: !0,
            image: !0,
            file: !0
        };
    return i.okayPointerDown = function(t) {
        var e = n[t.target.nodeName],
            t = r[t.target.type],
            t = !e || t;
        return t || this._pointerReset(), t
    }, i.pointerDownBlur = function() {
        var t = document.activeElement;
        t && t.blur && t != document.body && t.blur()
    }, i.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
    }, i._dragPointerMove = function(t, e) {
        var i = {
            x: e.pageX - this.pointerDownPointer.pageX,
            y: e.pageY - this.pointerDownPointer.pageY
        };
        return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
    }, i.hasDragStarted = function(t) {
        return 3 < Math.abs(t.x) || 3 < Math.abs(t.y)
    }, i.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
    }, i._dragPointerUp = function(t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
    }, i._dragStart = function(t, e) {
        this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e)
    }, i.dragStart = function(t, e) {
        this.emitEvent("dragStart", [t, e])
    }, i._dragMove = function(t, e, i) {
        this.isDragging && this.dragMove(t, e, i)
    }, i.dragMove = function(t, e, i) {
        t.preventDefault(), this.emitEvent("dragMove", [t, e, i])
    }, i._dragEnd = function(t, e) {
        this.isDragging = !1, setTimeout(function() {
            delete this.isPreventingClicks
        }.bind(this)), this.dragEnd(t, e)
    }, i.dragEnd = function(t, e) {
        this.emitEvent("dragEnd", [t, e])
    }, i.onclick = function(t) {
        this.isPreventingClicks && t.preventDefault()
    }, i._staticClick = function(t, e) {
        this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
            delete this.isIgnoringMouseUp
        }.bind(this), 400)))
    }, i.staticClick = function(t, e) {
        this.emitEvent("staticClick", [t, e])
    }, e.getPointerPoint = t.getPointerPoint, e
}),
function(n, r) {
    "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(t, e, i) {
        return r(n, t, e, i)
    }) : "object" == typeof module && module.exports ? module.exports = r(n, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : n.Flickity = r(n, n.Flickity, n.Unidragger, n.fizzyUIUtils)
}(window, function(i, t, e, s) {
    s.extend(t.defaults, {
        draggable: ">1",
        dragThreshold: 3
    }), t.createMethods.push("_createDrag");
    var n = t.prototype;
    s.extend(n, e.prototype), n._touchActionValue = "pan-y";
    var r = "createTouch" in document,
        o = !1;
    n._createDrag = function() {
        this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), r && !o && (i.addEventListener("touchmove", function() {}), o = !0)
    }, n.onActivateDrag = function() {
        this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
    }, n.onDeactivateDrag = function() {
        this.unbindHandles(), this.element.classList.remove("is-draggable")
    }, n.updateDraggable = function() {
        ">1" == this.options.draggable ? this.isDraggable = 1 < this.slides.length : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
    }, n.bindDrag = function() {
        this.options.draggable = !0, this.updateDraggable()
    }, n.unbindDrag = function() {
        this.options.draggable = !1, this.updateDraggable()
    }, n._uiChangeDrag = function() {
        delete this.isFreeScrolling
    }, n.pointerDown = function(t, e) {
        this.isDraggable ? this.okayPointerDown(t) && (this._pointerDownPreventDefault(t), this.pointerDownFocus(t), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = u(), i.addEventListener("scroll", this), this._pointerDownDefault(t, e)) : this._pointerDownDefault(t, e)
    }, n._pointerDownDefault = function(t, e) {
        this.pointerDownPointer = {
            pageX: e.pageX,
            pageY: e.pageY
        }, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e])
    };
    var a = {
        INPUT: !0,
        TEXTAREA: !0,
        SELECT: !0
    };

    function u() {
        return {
            x: i.pageXOffset,
            y: i.pageYOffset
        }
    }
    return n.pointerDownFocus = function(t) {
        a[t.target.nodeName] || this.focus()
    }, n._pointerDownPreventDefault = function(t) {
        var e = "touchstart" == t.type,
            i = "touch" == t.pointerType,
            n = a[t.target.nodeName];
        e || i || n || t.preventDefault()
    }, n.hasDragStarted = function(t) {
        return Math.abs(t.x) > this.options.dragThreshold
    }, n.pointerUp = function(t, e) {
        delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e)
    }, n.pointerDone = function() {
        i.removeEventListener("scroll", this), delete this.pointerDownScroll
    }, n.dragStart = function(t, e) {
        this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), i.removeEventListener("scroll", this), this.dispatchEvent("dragStart", t, [e]))
    }, n.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i)
    }, n.dragMove = function(t, e, i) {
        var n, r;
        this.isDraggable && (t.preventDefault(), this.previousDragX = this.dragX, r = this.options.rightToLeft ? -1 : 1, this.options.wrapAround && (i.x %= this.slideableWidth), n = this.dragStartPosition + i.x * r, !this.options.wrapAround && this.slides.length && (n = (n = (r = Math.max(-this.slides[0].target, this.dragStartPosition)) < n ? .5 * (n + r) : n) < (r = Math.min(-this.getLastSlide().target, this.dragStartPosition)) ? .5 * (n + r) : n), this.dragX = n, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i]))
    }, n.dragEnd = function(t, e) {
        var i, n;
        this.isDraggable && (this.options.freeScroll && (this.isFreeScrolling = !0), i = this.dragEndRestingSelect(), this.options.freeScroll && !this.options.wrapAround ? (n = this.getRestingPosition(), this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target) : this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect()), delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e]))
    }, n.dragEndRestingSelect = function() {
        var t = this.getRestingPosition(),
            e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
            i = this._getClosestResting(t, e, 1),
            e = this._getClosestResting(t, e, -1);
        return (i.distance < e.distance ? i : e).index
    }, n._getClosestResting = function(t, e, i) {
        for (var n = this.selectedIndex, r = 1 / 0, s = this.options.contain && !this.options.wrapAround ? function(t, e) {
                return t <= e
            } : function(t, e) {
                return t < e
            }; s(e, r) && (r = e, null !== (e = this.getSlideDistance(-t, n += i)));) e = Math.abs(e);
        return {
            distance: r,
            index: n - i
        }
    }, n.getSlideDistance = function(t, e) {
        var i = this.slides.length,
            n = this.options.wrapAround && 1 < i,
            r = n ? s.modulo(e, i) : e,
            r = this.slides[r];
        if (!r) return null;
        i = n ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (r.target + i)
    }, n.dragEndBoostSelect = function() {
        if (void 0 === this.previousDragX || !this.dragMoveTime || 100 < new Date - this.dragMoveTime) return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
            e = this.previousDragX - this.dragX;
        return 0 < t && 0 < e ? 1 : t < 0 && e < 0 ? -1 : 0
    }, n.staticClick = function(t, e) {
        var i = this.getParentCell(t.target),
            n = i && i.element,
            i = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [e, n, i])
    }, n.onscroll = function() {
        var t = u(),
            e = this.pointerDownScroll.x - t.x,
            t = this.pointerDownScroll.y - t.y;
        (3 < Math.abs(e) || 3 < Math.abs(t)) && this._pointerDone()
    }, t
}),
function(t, n) {
    "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function(t, e, i) {
        return n(0, t, e, i)
    }) : "object" == typeof module && module.exports ? module.exports = n(0, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : n(0, t.Flickity, t.Unipointer, t.fizzyUIUtils)
}(window, function(t, e, i, n) {
    "use strict";
    var r = "http://www.w3.org/2000/svg";

    function s(t, e) {
        this.direction = t, this.parent = e, this._create()
    }(s.prototype = Object.create(i.prototype))._create = function() {
        this.isEnabled = !0, this.isPrevious = -1 == this.direction;
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = this.element = document.createElement("button");
        e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
        t = this.createSVG();
        e.appendChild(t), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    }, s.prototype.activate = function() {
        this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
    }, s.prototype.deactivate = function() {
        this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this)
    }, s.prototype.createSVG = function() {
        var t = document.createElementNS(r, "svg");
        t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");
        var e, i = document.createElementNS(r, "path"),
            e = "string" != typeof(e = this.parent.options.arrowShape) ? "M " + e.x0 + ",50 L " + e.x1 + "," + (e.y1 + 50) + " L " + e.x2 + "," + (e.y2 + 50) + " L " + e.x3 + ",50  L " + e.x2 + "," + (50 - e.y2) + " L " + e.x1 + "," + (50 - e.y1) + " Z" : e;
        return i.setAttribute("d", e), i.setAttribute("class", "arrow"), this.isLeft || i.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(i), t
    }, s.prototype.handleEvent = n.handleEvent, s.prototype.onclick = function() {
        var t;
        this.isEnabled && (this.parent.uiChange(), t = this.isPrevious ? "previous" : "next", this.parent[t]())
    }, s.prototype.enable = function() {
        this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
    }, s.prototype.disable = function() {
        this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
    }, s.prototype.update = function() {
        var t = this.parent.slides;
        this.parent.options.wrapAround && 1 < t.length ? this.enable() : (t = t.length ? t.length - 1 : 0, t = this.isPrevious ? 0 : t, this[this.parent.selectedIndex == t ? "disable" : "enable"]())
    }, s.prototype.destroy = function() {
        this.deactivate(), this.allOff()
    }, n.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: {
            x0: 10,
            x1: 60,
            y1: 50,
            x2: 70,
            y2: 40,
            x3: 30
        }
    }), e.createMethods.push("_createPrevNextButtons");
    n = e.prototype;
    return n._createPrevNextButtons = function() {
        this.options.prevNextButtons && (this.prevButton = new s(-1, this), this.nextButton = new s(1, this), this.on("activate", this.activatePrevNextButtons))
    }, n.activatePrevNextButtons = function() {
        this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
    }, n.deactivatePrevNextButtons = function() {
        this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
    }, e.PrevNextButton = s, e
}),
function(t, n) {
    "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function(t, e, i) {
        return n(0, t, e, i)
    }) : "object" == typeof module && module.exports ? module.exports = n(0, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : n(0, t.Flickity, t.Unipointer, t.fizzyUIUtils)
}(window, function(t, e, i, n) {
    function r(t) {
        this.parent = t, this._create()
    }(r.prototype = Object.create(i.prototype))._create = function() {
        this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    }, r.prototype.activate = function() {
        this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder)
    }, r.prototype.deactivate = function() {
        this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder)
    }, r.prototype.setDots = function() {
        var t = this.parent.slides.length - this.dots.length;
        0 < t ? this.addDots(t) : t < 0 && this.removeDots(-t)
    }, r.prototype.addDots = function(t) {
        for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, r = n + t, s = n; s < r; s++) {
            var o = document.createElement("li");
            o.className = "dot", o.setAttribute("aria-label", "Page dot " + (s + 1)), e.appendChild(o), i.push(o)
        }
        this.holder.appendChild(e), this.dots = this.dots.concat(i)
    }, r.prototype.removeDots = function(t) {
        this.dots.splice(this.dots.length - t, t).forEach(function(t) {
            this.holder.removeChild(t)
        }, this)
    }, r.prototype.updateSelected = function() {
        this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
    }, r.prototype.onTap = r.prototype.onClick = function(t) {
        t = t.target;
        "LI" == t.nodeName && (this.parent.uiChange(), t = this.dots.indexOf(t), this.parent.select(t))
    }, r.prototype.destroy = function() {
        this.deactivate(), this.allOff()
    }, e.PageDots = r, n.extend(e.defaults, {
        pageDots: !0
    }), e.createMethods.push("_createPageDots");
    n = e.prototype;
    return n._createPageDots = function() {
        this.options.pageDots && (this.pageDots = new r(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
    }, n.activatePageDots = function() {
        this.pageDots.activate()
    }, n.updateSelectedPageDots = function() {
        this.pageDots.updateSelected()
    }, n.updatePageDots = function() {
        this.pageDots.setDots()
    }, n.deactivatePageDots = function() {
        this.pageDots.deactivate()
    }, e.PageDots = r, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity)
}(window, function(t, e, i) {
    function n(t) {
        this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
    }(n.prototype = Object.create(t.prototype)).play = function() {
        "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()))
    }, n.prototype.tick = function() {
        var t, e;
        "playing" == this.state && (t = "number" == typeof(t = this.parent.options.autoPlay) ? t : 3e3, (e = this).clear(), this.timeout = setTimeout(function() {
            e.parent.next(!0), e.tick()
        }, t))
    }, n.prototype.stop = function() {
        this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
    }, n.prototype.clear = function() {
        clearTimeout(this.timeout)
    }, n.prototype.pause = function() {
        "playing" == this.state && (this.state = "paused", this.clear())
    }, n.prototype.unpause = function() {
        "paused" == this.state && this.play()
    }, n.prototype.visibilityChange = function() {
        this[document.hidden ? "pause" : "unpause"]()
    }, n.prototype.visibilityPlay = function() {
        this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
    }, e.extend(i.defaults, {
        pauseAutoPlayOnHover: !0
    }), i.createMethods.push("_createPlayer");
    e = i.prototype;
    return e._createPlayer = function() {
        this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
    }, e.activatePlayer = function() {
        this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
    }, e.playPlayer = function() {
        this.player.play()
    }, e.stopPlayer = function() {
        this.player.stop()
    }, e.pausePlayer = function() {
        this.player.pause()
    }, e.unpausePlayer = function() {
        this.player.unpause()
    }, e.deactivatePlayer = function() {
        this.player.stop(), this.element.removeEventListener("mouseenter", this)
    }, e.onmouseenter = function() {
        this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
    }, e.onmouseleave = function() {
        this.player.unpause(), this.element.removeEventListener("mouseleave", this)
    }, i.Player = n, i
}),
function(t, i) {
    "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(t, e) {
        return i(0, t, e)
    }) : "object" == typeof module && module.exports ? module.exports = i(0, require("./flickity"), require("fizzy-ui-utils")) : i(0, t.Flickity, t.fizzyUIUtils)
}(window, function(t, e, n) {
    var i = e.prototype;
    return i.insert = function(t, e) {
        var i, n, r, s, o = this._makeCells(t);
        o && o.length && (s = this.cells.length, e = void 0 === e ? s : e, r = o, n = document.createDocumentFragment(), r.forEach(function(t) {
            n.appendChild(t.element)
        }), i = n, (t = e == s) ? this.slider.appendChild(i) : (r = this.cells[e].element, this.slider.insertBefore(i, r)), 0 === e ? this.cells = o.concat(this.cells) : t ? this.cells = this.cells.concat(o) : (s = this.cells.splice(e, s - e), this.cells = this.cells.concat(o).concat(s)), this._sizeCells(o), this.cellChange(e, !0))
    }, i.append = function(t) {
        this.insert(t, this.cells.length)
    }, i.prepend = function(t) {
        this.insert(t, 0)
    }, i.remove = function(t) {
        var i, t = this.getCells(t);
        t && t.length && (i = this.cells.length - 1, t.forEach(function(t) {
            t.remove();
            var e = this.cells.indexOf(t);
            i = Math.min(e, i), n.removeFrom(this.cells, t)
        }, this), this.cellChange(i, !0))
    }, i.cellSizeChange = function(t) {
        t = this.getCell(t);
        t && (t.getSize(), t = this.cells.indexOf(t), this.cellChange(t))
    }, i.cellChange = function(t, e) {
        var i = this.selectedElement;
        this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
        i = this.getCell(i);
        i && (this.selectedIndex = this.getCellSlideIndex(i)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected()
    }, e
}),
function(t, i) {
    "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function(t, e) {
        return i(0, t, e)
    }) : "object" == typeof module && module.exports ? module.exports = i(0, require("./flickity"), require("fizzy-ui-utils")) : i(0, t.Flickity, t.fizzyUIUtils)
}(window, function(t, e, r) {
    "use strict";
    e.createMethods.push("_createLazyload");
    var i = e.prototype;

    function n(t, e) {
        this.img = t, this.flickity = e, this.load()
    }
    return i._createLazyload = function() {
        this.on("select", this.lazyLoad)
    }, i.lazyLoad = function() {
        var e, t = this.options.lazyLoad;
        t && (t = this.getAdjacentCellElements("number" == typeof t ? t : 0), e = [], t.forEach(function(t) {
            t = function(t) {
                if ("IMG" == t.nodeName) {
                    var e = t.getAttribute("data-flickity-lazyload"),
                        i = t.getAttribute("data-flickity-lazyload-src"),
                        n = t.getAttribute("data-flickity-lazyload-srcset");
                    if (e || i || n) return [t]
                }
                t = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
                return r.makeArray(t)
            }(t);
            e = e.concat(t)
        }), e.forEach(function(t) {
            new n(t, this)
        }, this))
    }, n.prototype.handleEvent = r.handleEvent, n.prototype.load = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this);
        var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
            e = this.img.getAttribute("data-flickity-lazyload-srcset");
        this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset")
    }, n.prototype.onload = function(t) {
        this.complete(t, "flickity-lazyloaded")
    }, n.prototype.onerror = function(t) {
        this.complete(t, "flickity-lazyerror")
    }, n.prototype.complete = function(t, e) {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img),
            i = i && i.element;
        this.flickity.cellSizeChange(i), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, i)
    }, e.LazyLoader = n, e
}),
function(t) {
    "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], t) : "object" == typeof module && module.exports && (module.exports = t(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
}((window, function(t) {
    return t
})),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils)
}(window, function(i, n) {
    i.createMethods.push("_createAsNavFor");
    var t = i.prototype;
    return t._createAsNavFor = function() {
        this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
        var t, e = this.options.asNavFor;
        e && (t = this, setTimeout(function() {
            t.setNavCompanion(e)
        }))
    }, t.setNavCompanion = function(t) {
        t = n.getQueryElement(t);
        var e, t = i.data(t);
        t && t != this && (this.navCompanion = t, (e = this).onNavCompanionSelect = function() {
            e.navCompanionSelect()
        }, t.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0))
    }, t.navCompanionSelect = function(t) {
        var e, i, n = this.navCompanion && this.navCompanion.selectedCells;
        n && (i = n[0], e = this.navCompanion.cells.indexOf(i), i = e + n.length - 1, n = Math.floor((n = this.navCompanion.cellAlign, (i - e) * n + e)), this.selectCell(n, !1, t), this.removeNavSelectedElements(), n >= this.cells.length || (i = this.cells.slice(e, 1 + i), this.navSelectedElements = i.map(function(t) {
            return t.element
        }), this.changeNavSelectedClass("add")))
    }, t.changeNavSelectedClass = function(e) {
        this.navSelectedElements.forEach(function(t) {
            t.classList[e]("is-nav-selected")
        })
    }, t.activateAsNavFor = function() {
        this.navCompanionSelect(!0)
    }, t.removeNavSelectedElements = function() {
        this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements)
    }, t.onNavStaticClick = function(t, e, i, n) {
        "number" == typeof n && this.navCompanion.selectCell(n)
    }, t.deactivateAsNavFor = function() {
        this.removeNavSelectedElements()
    }, t.destroyAsNavFor = function() {
        this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
    }, i
}),
function(e, i) {
    "use strict";
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.imagesLoaded = i(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    var s = e.jQuery,
        o = e.console;

    function a(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }
    var u = Array.prototype.slice;

    function l(t, e, i) {
        if (!(this instanceof l)) return new l(t, e, i);
        var n, r = t;
        (r = "string" == typeof t ? document.querySelectorAll(t) : r) ? (this.elements = (n = r, Array.isArray(n) ? n : "object" == typeof n && "number" == typeof n.length ? u.call(n) : [n]), this.options = a({}, this.options), "function" == typeof e ? i = e : a(this.options, e), i && this.on("always", i), this.getImages(), s && (this.jqDeferred = new s.Deferred), setTimeout(this.check.bind(this))) : o.error("Bad element for imagesLoaded " + (r || t))
    }(l.prototype = Object.create(t.prototype)).options = {}, l.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, l.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && h[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var r = i[n];
                this.addImage(r)
            }
            if ("string" == typeof this.options.background)
                for (var s = t.querySelectorAll(this.options.background), n = 0; n < s.length; n++) {
                    var o = s[n];
                    this.addElementBackgroundImages(o)
                }
        }
    };
    var h = {
        1: !0,
        9: !0,
        11: !0
    };

    function i(t) {
        this.img = t
    }

    function n(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }
    return l.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                var r = n && n[2];
                r && this.addBackground(r, t), n = i.exec(e.backgroundImage)
            }
    }, l.prototype.addImage = function(t) {
        t = new i(t);
        this.images.push(t)
    }, l.prototype.addBackground = function(t, e) {
        e = new n(t, e);
        this.images.push(e)
    }, l.prototype.check = function() {
        var n = this;

        function e(t, e, i) {
            setTimeout(function() {
                n.progress(t, e, i)
            })
        }
        this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function(t) {
            t.once("progress", e), t.check()
        }) : this.complete()
    }, l.prototype.progress = function(t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && o && o.log("progress: " + i, t, e)
    }, l.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred && (t = this.hasAnyBroken ? "reject" : "resolve", this.jqDeferred[t](this))
    }, (i.prototype = Object.create(t.prototype)).check = function() {
        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
    }, i.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, i.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
    }, i.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, i.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, i.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, (n.prototype = Object.create(i.prototype)).check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, n.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, n.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, (l.makeJQueryPlugin = function(t) {
        (t = t || e.jQuery) && ((s = t).fn.imagesLoaded = function(t, e) {
            return new l(this, t, e).jqDeferred.promise(s(this))
        })
    })(), l
}),
function(t, i) {
    "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(t, e) {
        return i(0, t, e)
    }) : "object" == typeof module && module.exports ? module.exports = i(0, require("flickity"), require("imagesloaded")) : t.Flickity = i(0, t.Flickity, t.imagesLoaded)
}(window, function(t, e, n) {
    "use strict";
    e.createMethods.push("_createImagesLoaded");
    var i = e.prototype;
    return i._createImagesLoaded = function() {
        this.on("activate", this.imagesLoaded)
    }, i.imagesLoaded = function() {
        var i;
        this.options.imagesLoaded && n((i = this).slider).on("progress", function(t, e) {
            e = i.getParentCell(e.img), i.cellSizeChange(e && e.element), i.options.freeScroll || i.positionSliderAtSelected()
        })
    }, e
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";

    function i(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function b(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function k(t) {
        return "string" == typeof t
    }

    function c(t) {
        return "function" == typeof t
    }

    function F(t) {
        return "number" == typeof t
    }

    function r(t) {
        return void 0 === t
    }

    function w(t) {
        return "object" == typeof t
    }

    function z(t) {
        return !1 !== t
    }

    function e() {
        return "undefined" != typeof window
    }

    function S(t) {
        return c(t) || k(t)
    }

    function n(t) {
        return (wt = ft(t, he)) && hi
    }

    function P(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function A(t, e) {
        return !e && console.warn(t)
    }

    function s(t, e) {
        return t && (he[t] = e) && wt && (wt[t] = e) || he
    }

    function T() {
        return 0
    }

    function O(t) {
        var e, i, n = t[0];
        if (w(n) || c(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
            for (i = me.length; i-- && !me[i].targetTest(n););
            e = me[i]
        }
        for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new ze(t[i], e))) || t.splice(i, 1);
        return t
    }

    function L(t) {
        return t._gsap || O(vt(t))[0]._gsap
    }

    function o(t, e, i) {
        return (i = t[e]) && c(i) ? t[e]() : r(i) && t.getAttribute && t.getAttribute(e) || i
    }

    function f(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function I(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function M(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }

    function N() {
        var t, e, i = de.length,
            n = de.slice(0);
        for (fe = {}, t = de.length = 0; t < i; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function a(t, e, i, n) {
        de.length && N(), t.render(e, i, n), de.length && N()
    }

    function u(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(ue).length < 2 ? e : k(t) ? t.trim() : t
    }

    function l(t) {
        return t
    }

    function R(t, e) {
        for (var i in e) i in t || (t[i] = e[i]);
        return t
    }

    function h(t, e) {
        for (var i in e) i in t || "duration" === i || "ease" === i || (t[i] = e[i])
    }

    function d(t, e) {
        for (var i in e) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (t[i] = w(e[i]) ? d(t[i] || (t[i] = {}), e[i]) : e[i]);
        return t
    }

    function j(t, e) {
        var i, n = {};
        for (i in t) i in e || (n[i] = t[i]);
        return n
    }

    function B(t) {
        var e = t.parent || xt,
            i = t.keyframes ? h : R;
        if (z(t.inherit))
            for (; e;) i(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    }

    function p(t, e, i, n) {
        void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
        var r = e._prev,
            s = e._next;
        r ? r._next = s : t[i] === e && (t[i] = s), s ? s._prev = r : t[n] === e && (t[n] = r), e._next = e._prev = e.parent = null
    }

    function q(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
    }

    function D(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var i = t; i;) i._dirty = 1, i = i.parent;
        return t
    }

    function g(t) {
        return t._repeat ? pt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function m(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function C(t) {
        return t._end = M(t._start + (t._tDur / Math.abs(t._ts || t._rts || Gt) || 0))
    }

    function v(t, e) {
        var i = t._dp;
        return i && i.smoothChildTiming && t._ts && (t._start = M(i._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), C(t), i._dirty || D(i, t)), t
    }

    function y(t, e) {
        var i;
        if ((e._time || e._initted && !e._dur) && (i = m(t.rawTime(), e), (!e._dur || mt(0, e.totalDuration(), i) - e._tTime > Gt) && e.render(i, !0)), D(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (i = t; i._dp;) 0 <= i.rawTime() && i.totalTime(i._tTime), i = i._dp;
            t._zTime = -Gt
        }
    }

    function W(t, e, i, n) {
        return e.parent && q(e), e._start = M((F(i) ? i : i || t !== xt ? gt(t, i, e) : t._time) + e._delay), e._end = M(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
            function(t, e, i, n, r) {
                void 0 === i && (i = "_first");
                var s, o = t[n = void 0 === n ? "_last" : n];
                if (r)
                    for (s = e[r]; o && o[r] > s;) o = o._prev;
                o ? (e._next = o._next, o._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = o, e.parent = e._dp = t
            }(t, e, "_first", "_last", t._sort ? "_start" : 0), Dt(e) || (t._recent = e), n || y(t, e), t
    }

    function U(t, e) {
        return (he.ScrollTrigger || P("scrollTrigger", e)) && he.ScrollTrigger.create(e, t)
    }

    function _(t, e, i, n) {
        return Re(t, e), !t._initted || !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && At !== Fe.frame && (de.push(t), t._lazy = [e, n])
    }

    function x(t, e, i, n) {
        var r = t._repeat,
            s = M(e) || 0,
            e = t._tTime / t._tDur;
        return e && !n && (t._time *= s / t._dur), t._dur = s, t._tDur = r ? r < 0 ? 1e10 : M(s * (r + 1) + t._rDelay * r) : s, e && !n ? v(t, t._tTime = t._tDur * e) : t.parent && C(t), i || D(t.parent, t), t
    }

    function E(t) {
        return t instanceof Ie ? D(t) : x(t, t._dur)
    }

    function X(t, e, i) {
        var n, r, s = F(e[1]),
            o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
            a = e[o];
        if (s && (a.duration = e[1]), a.parent = i, t) {
            for (n = a, r = i; r && !("immediateRender" in n);) n = r.vars.defaults || {}, r = z(r.vars.inherit) && r.parent;
            a.immediateRender = z(n.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[o - 1]
        }
        return new Ye(e[0], a, e[1 + o])
    }

    function Y(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function H(t) {
        if ("string" != typeof t) return "";
        var e = le.exec(t);
        return e ? t.substr(e.index + e[0].length) : ""
    }

    function V(t, e) {
        return t && w(t) && "length" in t && (!e && !t.length || t.length - 1 in t && w(t[0])) && !t.nodeType && t !== Et
    }

    function G(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }

    function Q(t) {
        if (c(t)) return t;
        var f = w(t) ? t : {
                each: t
            },
            p = Pe(f.ease),
            D = f.from || 0,
            g = parseFloat(f.base) || 0,
            m = {},
            t = 0 < D && D < 1,
            v = isNaN(D) || t,
            y = f.axis,
            _ = D,
            C = D;
        return k(D) ? _ = C = {
                center: .5,
                edges: .5,
                end: 1
            }[D] || 0 : !t && v && (_ = D[0], C = D[1]),
            function(t, e, i) {
                var n, r, s, o, a, u, l, h, c = (i || f).length,
                    d = m[c];
                if (!d) {
                    if (!(h = "auto" === f.grid ? 0 : (f.grid || [1, Vt])[1])) {
                        for (u = -Vt; u < (u = i[h++].getBoundingClientRect().left) && h < c;);
                        h--
                    }
                    for (d = m[c] = [], n = v ? Math.min(h, c) * _ - .5 : D % h, r = v ? c * C / h - .5 : D / h | 0, l = Vt, a = u = 0; a < c; a++) s = a % h - n, o = r - (a / h | 0), d[a] = o = y ? Math.abs("y" === y ? o : s) : Zt(s * s + o * o), u < o && (u = o), o < l && (l = o);
                    "random" === D && G(d), d.max = u - l, d.min = l, d.v = c = (parseFloat(f.amount) || parseFloat(f.each) * (c < h ? c - 1 : y ? "y" === y ? c / h : h : Math.max(h, c / h)) || 0) * ("edges" === D ? -1 : 1), d.b = c < 0 ? g - c : g, d.u = H(f.amount || f.each) || 0, p = p && c < 0 ? ke(p) : p
                }
                return c = (d[t] - d.min) / d.max || 0, M(d.b + (p ? p(c) : c) * d.v) + d.u
            }
    }

    function K(i) {
        var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
        return function(t) {
            var e = Math.round(parseFloat(t) / i) * i * n;
            return (e - e % 1) / n + (F(t) ? 0 : H(t))
        }
    }

    function $(u, t) {
        var l, h, e = ie(u);
        return !e && w(u) && (l = e = u.radius || Vt, u.values ? (u = vt(u.values), (h = !F(u[0])) && (l *= l)) : u = K(u.increment)), Y(t, e ? c(u) ? function(t) {
            return h = u(t), Math.abs(h - t) <= l ? h : t
        } : function(t) {
            for (var e, i, n = parseFloat(h ? t.x : t), r = parseFloat(h ? t.y : 0), s = Vt, o = 0, a = u.length; a--;)(e = h ? (e = u[a].x - n) * e + (i = u[a].y - r) * i : Math.abs(u[a] - n)) < s && (s = e, o = a);
            return o = !l || s <= l ? u[o] : t, h || o === t || F(t) ? o : o + H(t)
        } : K(u))
    }

    function Z(t, e, i, n) {
        return Y(ie(t) ? !e : !0 === i ? !!(i = 0) : !n, function() {
            return ie(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * n) / n
        })
    }

    function J(e, i, t) {
        return Y(t, function(t) {
            return e[~~i(t)]
        })
    }

    function tt(t) {
        for (var e, i, n, r, s = 0, o = ""; ~(e = t.indexOf("random(", s));) n = t.indexOf(")", e), r = "[" === t.charAt(e + 7), i = t.substr(e + 7, n - e - 7).match(r ? ue : ne), o += t.substr(s, e - s) + Z(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5), s = n + 1;
        return o + t.substr(s, t.length - s)
    }

    function et(t, e, i) {
        var n, r, s, o = t.labels,
            a = Vt;
        for (n in o)(r = o[n] - e) < 0 == !!i && r && a > (r = Math.abs(r)) && (s = n, a = r);
        return s
    }

    function it(t) {
        return q(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && _t(t, "onInterrupt"), t
    }

    function nt(t, e, i) {
        return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * Ce + .5 | 0
    }

    function rt(t, e, i) {
        var n, r, s, o, a, u, l, h = t ? F(t) ? [t >> 16, t >> 8 & Ce, t & Ce] : 0 : xe.black;
        if (!h) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), xe[t]) h = xe[t];
            else if ("#" === t.charAt(0)) {
                if (9 === (t = t.length < 6 ? "#" + (n = t.charAt(1)) + n + (r = t.charAt(2)) + r + (s = t.charAt(3)) + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "") : t).length) return [(h = parseInt(t.substr(1, 6), 16)) >> 16, h >> 8 & Ce, h & Ce, parseInt(t.substr(7), 16) / 255];
                h = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & Ce, t & Ce]
            } else if ("hsl" === t.substr(0, 3))
                if (h = l = t.match(ne), e) {
                    if (~t.indexOf("=")) return h = t.match(re), i && h.length < 4 && (h[3] = 1), h
                } else o = +h[0] % 360 / 360, a = h[1] / 100, n = 2 * (u = h[2] / 100) - (r = u <= .5 ? u * (a + 1) : u + a - u * a), 3 < h.length && (h[3] *= 1), h[0] = nt(o + 1 / 3, n, r), h[1] = nt(o, n, r), h[2] = nt(o - 1 / 3, n, r);
            else h = t.match(ne) || xe.transparent;
            h = h.map(Number)
        }
        return e && !l && (n = h[0] / Ce, r = h[1] / Ce, s = h[2] / Ce, u = ((t = Math.max(n, r, s)) + (e = Math.min(n, r, s))) / 2, t === e ? o = a = 0 : (l = t - e, a = .5 < u ? l / (2 - t - e) : l / (t + e), o = t === n ? (r - s) / l + (r < s ? 6 : 0) : t === r ? (s - n) / l + 2 : (n - r) / l + 4, o *= 60), h[0] = ~~(o + .5), h[1] = ~~(100 * a + .5), h[2] = ~~(100 * u + .5)), i && h.length < 4 && (h[3] = 1), h
    }

    function st(t) {
        var e = [],
            i = [],
            n = -1;
        return t.split(Ee).forEach(function(t) {
            t = t.match(se) || [];
            e.push.apply(e, t), i.push(n += t.length + 1)
        }), e.c = i, e
    }

    function ot(t, e, i) {
        var n, r, s, o, a = "",
            u = (t + a).match(Ee),
            l = e ? "hsla(" : "rgba(",
            h = 0;
        if (!u) return t;
        if (u = u.map(function(t) {
                return (t = rt(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), i && (s = st(t), (n = i.c).join(a) !== s.c.join(a)))
            for (o = (r = t.replace(Ee, "1").split(se)).length - 1; h < o; h++) a += r[h] + (~n.indexOf(h) ? u.shift() || l + "0,0,0,0)" : (s.length ? s : u.length ? u : i).shift());
        if (!r)
            for (o = (r = t.split(Ee)).length - 1; h < o; h++) a += r[h] + u[h];
        return a + r[o]
    }

    function at(t) {
        var e = t.join(" ");
        if (Ee.lastIndex = 0, Ee.test(e)) return e = be.test(e), t[1] = ot(t[1], e), t[0] = ot(t[0], e, st(t[1])), !0
    }

    function ut(t, e) {
        for (var i, n = t._first; n;) n instanceof Ie ? ut(n, e) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === e || (n.timeline ? ut(n.timeline, e) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = e)), n = n._next
    }

    function lt(t, e, i, n) {
        void 0 === i && (i = function(t) {
            return 1 - e(1 - t)
        }), void 0 === n && (n = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var r, s = {
            easeIn: e,
            easeOut: i,
            easeInOut: n
        };
        return f(t, function(t) {
            for (var e in Se[t] = he[t] = s, Se[r = t.toLowerCase()] = i, s) Se[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Se[t + "." + e] = s[e]
        }), 1
    }

    function ht(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }

    function ct(i, t, e) {
        function n(t) {
            return 1 === t ? 1 : r * Math.pow(2, -10 * t) * te((t - s) * o) + 1
        }
        var r = 1 <= t ? t : 1,
            s = (o = (e || (i ? .3 : .45)) / (t < 1 ? t : 1)) / Qt * (Math.asin(1 / r) || 0),
            t = "out" === i ? n : "in" === i ? function(t) {
                return 1 - n(1 - t)
            } : ht(n),
            o = Qt / o;
        return t.config = function(t, e) {
            return ct(i, t, e)
        }, t
    }

    function dt(e, i) {
        function n(t) {
            return t ? --t * t * ((i + 1) * t + i) + 1 : 0
        }
        void 0 === i && (i = 1.70158);
        var t = "out" === e ? n : "in" === e ? function(t) {
            return 1 - n(1 - t)
        } : ht(n);
        return t.config = function(t) {
            return dt(e, t)
        }, t
    }

    function ft(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function pt(t, e) {
        return e = Math.floor(t /= e), t && e === t ? e - 1 : e
    }

    function Dt(t) {
        return "isFromStart" === (t = t.data) || "isStart" === t
    }

    function gt(t, e, i) {
        var n, r, s, o = t.labels,
            a = t._recent || ye,
            u = t.duration() >= Vt ? a.endTime(!1) : t._dur;
        return k(e) && (isNaN(e) || e in o) ? (r = e.charAt(0), s = "%" === e.substr(-1), n = e.indexOf("="), "<" === r || ">" === r ? (0 <= n && (e = e.replace(/=/, "")), ("<" === r ? a._start : a.endTime(0 <= a._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (n < 0 ? a : i).totalDuration() / 100 : 1)) : n < 0 ? (e in o || (o[e] = u), o[e]) : (r = parseFloat(e.charAt(n - 1) + e.substr(n + 1)), s && i && (r = r / 100 * (ie(i) ? i[0] : i).totalDuration()), 1 < n ? gt(t, e.substr(0, n - 1), i) + r : u + r)) : null == e ? u : +e
    }

    function mt(t, e, i) {
        return i < t ? t : e < i ? e : i
    }

    function vt(t, e, i) {
        return !k(t) || i || !bt && we() ? ie(t) ? (n = i, void 0 === r && (r = []), t.forEach(function(t) {
            return k(t) && !n || V(t, 1) ? r.push.apply(r, vt(t)) : r.push(t)
        }) || r) : V(t) ? _e.call(t, 0) : t ? [t] : [] : _e.call((e || Ft).querySelectorAll(t), 0);
        var n, r
    }

    function yt(e, t, i, n, r) {
        var s = t - e,
            o = n - i;
        return Y(r, function(t) {
            return i + ((t - e) / s * o || 0)
        })
    }

    function _t(t, e, i) {
        var n = t.vars,
            r = n[e];
        return r && (e = n[e + "Params"], t = n.callbackScope || t, i && de.length && N(), e ? r.apply(t, e) : r.call(t))
    }
    var Ct, xt, Et, bt, Ft, wt, St, At, Tt, kt, Pt, Mt, Bt, zt, Ot, Lt, It, Nt, Rt, jt, qt, Wt, Ut, Xt, Yt = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        Ht = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        Vt = 1e8,
        Gt = 1 / Vt,
        Qt = 2 * Math.PI,
        Kt = Qt / 4,
        $t = 0,
        Zt = Math.sqrt,
        Jt = Math.cos,
        te = Math.sin,
        ee = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        ie = Array.isArray,
        ne = /(?:-?\.?\d|\.)+/gi,
        re = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        se = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        oe = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        ae = /[+-]=-?[.\d]+/,
        ue = /[^,'"\[\]\s]+/gi,
        le = /[\d.+\-=]+(?:e[-+]\d*)*/i,
        he = {},
        ce = {},
        de = [],
        fe = {},
        pe = {},
        De = {},
        ge = 30,
        me = [],
        ve = "",
        ye = {
            _start: 0,
            endTime: T,
            totalDuration: T
        },
        _e = [].slice,
        Ce = 255,
        xe = {
            aqua: [0, Ce, Ce],
            lime: [0, Ce, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Ce],
            navy: [0, 0, 128],
            white: [Ce, Ce, Ce],
            olive: [128, 128, 0],
            yellow: [Ce, Ce, 0],
            orange: [Ce, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Ce, 0, 0],
            pink: [Ce, 192, 203],
            cyan: [0, Ce, Ce],
            transparent: [Ce, Ce, Ce, 0]
        },
        Ee = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in xe) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        be = /hsl[a]?\(/,
        Fe = (Lt = Date.now, It = 500, Nt = 33, Rt = Lt(), jt = Rt, Wt = qt = 1e3 / 240, Bt = {
            time: 0,
            frame: 0,
            tick: function() {
                Me(!0)
            },
            deltaRatio: function(t) {
                return zt / (1e3 / (t || 60))
            },
            wake: function() {
                St && (!bt && e() && (Et = bt = window, Ft = Et.document || {}, he.gsap = hi, (Et.gsapVersions || (Et.gsapVersions = [])).push(hi.version), n(wt || Et.GreenSockGlobals || !Et.gsap && Et || {}), Mt = Et.requestAnimationFrame), kt && Bt.sleep(), Pt = Mt || function(t) {
                    return setTimeout(t, Wt - 1e3 * Bt.time + 1 | 0)
                }, Tt = 1, Me(2))
            },
            sleep: function() {
                (Mt ? Et.cancelAnimationFrame : clearTimeout)(kt), Tt = 0, Pt = T
            },
            lagSmoothing: function(t, e) {
                It = t || 1e8, Nt = Math.min(e, It, 0)
            },
            fps: function(t) {
                qt = 1e3 / (t || 240), Wt = 1e3 * Bt.time + qt
            },
            add: function(t) {
                Ut.indexOf(t) < 0 && Ut.push(t), we()
            },
            remove: function(t) {
                ~(t = Ut.indexOf(t)) && Ut.splice(t, 1) && t <= Ot && Ot--
            },
            _listeners: Ut = []
        }),
        we = function() {
            return !Tt && Fe.wake()
        },
        Se = {},
        Ae = /^[\d.\-M][\d.\-,\s]/,
        Te = /["']/g,
        ke = function(e) {
            return function(t) {
                return 1 - e(1 - t)
            }
        },
        Pe = function(t, e) {
            return t && (c(t) ? t : Se[t] || (s = ((i = t) + "").split("("), (o = Se[s[0]]) && 1 < s.length && o.config ? o.config.apply(null, ~i.indexOf("{") ? [function(t) {
                for (var e, i, n, r = {}, s = t.substr(1, t.length - 3).split(":"), o = s[0], a = 1, u = s.length; a < u; a++) i = s[a], e = a !== u - 1 ? i.lastIndexOf(",") : i.length, n = i.substr(0, e), r[o] = isNaN(n) ? n.replace(Te, "").trim() : +n, o = i.substr(e + 1).trim();
                return r
            }(s[1])] : (r = (n = i).indexOf("(") + 1, t = n.indexOf(")"), s = n.indexOf("(", r), n.substring(r, ~s && s < t ? n.indexOf(")", t + 1) : t).split(",").map(u))) : Se._CE && Ae.test(i) ? Se._CE("", i) : o)) || e;
            var i, n, r, s, o
        };

    function Me(t) {
        var e, i, n, r = Lt() - jt,
            s = !0 === t;
        if (It < r && (Rt += r - Nt), (0 < (r = (i = (jt += r) - Rt) - Wt) || s) && (n = ++Bt.frame, zt = i - 1e3 * Bt.time, Bt.time = i /= 1e3, Wt += r + (qt <= r ? 4 : qt - r), e = 1), s || (kt = Pt(Me)), e)
            for (Ot = 0; Ot < Ut.length; Ot++) Ut[Ot](i, zt, n, t)
    }

    function Be(t) {
        return t < 1 / 2.75 ? Xt * t * t : t < .7272727272727273 ? Xt * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? Xt * (t -= 2.25 / 2.75) * t + .9375 : Xt * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    f("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var i = e < 5 ? e + 1 : e;
        lt(t + ",Power" + (i - 1), e ? function(t) {
            return Math.pow(t, i)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, i)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
        })
    }), Se.Linear.easeNone = Se.none = Se.Linear.easeIn, lt("Elastic", ct("in"), ct("out"), ct()), Xt = 7.5625, lt("Bounce", function(t) {
        return 1 - Be(1 - t)
    }, Be), lt("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), lt("Circ", function(t) {
        return -(Zt(1 - t * t) - 1)
    }), lt("Sine", function(t) {
        return 1 === t ? 1 : 1 - Jt(t * Kt)
    }), lt("Back", dt("in"), dt("out"), dt()), Se.SteppedEase = Se.steps = he.SteppedEase = {
        config: function(t, e) {
            var i = 1 / (t = void 0 === t ? 1 : t),
                n = t + (e ? 0 : 1),
                r = e ? 1 : 0;
            return function(t) {
                return ((n * mt(0, .99999999, t) | 0) + r) * i
            }
        }
    }, Ht.ease = Se["quad.out"], f("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return ve += t + "," + t + "Params,"
    });
    var ze = function(t, e) {
            this.id = $t++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : o, this.set = e ? e.getSetter : ni
        },
        Oe = ((jn = Le.prototype).delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, jn.duration = function(t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, jn.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0, x(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, jn.totalTime = function(t, e) {
            if (we(), !arguments.length) return this._tTime;
            var i = this._dp;
            if (i && i.smoothChildTiming && this._ts) {
                for (v(this, t), !i._dp || i.parent || y(i, this); i && i.parent;) i.parent._time !== i._start + (0 <= i._ts ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && W(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === Gt || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), a(this, t, e)), this
        }, jn.time = function(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + g(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }, jn.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, jn.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + g(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, jn.iteration = function(t, e) {
            var i = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? pt(this._tTime, i) + 1 : 1
        }, jn.timeScale = function(t) {
            if (!arguments.length) return this._rts === -Gt ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? m(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -Gt ? 0 : this._rts,
                function(t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent
                }(this.totalTime(mt(-this._delay, this._tDur, e), !0)), C(this), this
        }, jn.paused = function(t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (we(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== Gt && (this._tTime -= Gt)))), this) : this._ps
        }, jn.startTime = function(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return !e || !e._sort && this.parent || W(e, this, t - this._delay), this
            }
            return this._start
        }, jn.endTime = function(t) {
            return this._start + (z(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, jn.rawTime = function(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? m(e.rawTime(t), this) : this._tTime : this._tTime
        }, jn.globalTime = function(t) {
            for (var e = this, i = arguments.length ? t : e.rawTime(); e;) i = e._start + i / (e._ts || 1), e = e._dp;
            return i
        }, jn.repeat = function(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, E(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, jn.repeatDelay = function(t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t, E(this), e ? this.time(e) : this
            }
            return this._rDelay
        }, jn.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, jn.seek = function(t, e) {
            return this.totalTime(gt(this, t), z(e))
        }, jn.restart = function(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, z(e))
        }, jn.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, jn.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, jn.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, jn.resume = function() {
            return this.paused(!1)
        }, jn.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -Gt : 0)), this) : this._rts < 0
        }, jn.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -Gt, this
        }, jn.isActive = function() {
            var t, e = this.parent || this._dp,
                i = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - Gt))
        }, jn.eventCallback = function(t, e, i) {
            var n = this.vars;
            return 1 < arguments.length ? (e ? (n[t] = e, i && (n[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
        }, jn.then = function(n) {
            var r = this;
            return new Promise(function(e) {
                function t() {
                    var t = r.then;
                    r.then = null, c(i) && (i = i(r)) && (i.then || i === r) && (r.then = t), e(i), r.then = t
                }
                var i = c(n) ? n : l;
                r._initted && 1 === r.totalProgress() && 0 <= r._ts || !r._tTime && r._ts < 0 ? t() : r._prom = t
            })
        }, jn.kill = function() {
            it(this)
        }, Le);

    function Le(t) {
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, x(this, +t.duration, 1, 1), this.data = t.data, Tt || Fe.wake()
    }
    R(Oe.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -Gt,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Ie = function(n) {
        function t(t, e) {
            var i;
            return (i = n.call(this, t = void 0 === t ? {} : t) || this).labels = {}, i.smoothChildTiming = !!t.smoothChildTiming, i.autoRemoveChildren = !!t.autoRemoveChildren, i._sort = z(t.sortChildren), xt && W(t.parent || xt, b(i), e), t.reversed && i.reverse(), t.paused && i.paused(!0), t.scrollTrigger && U(b(i), t.scrollTrigger), i
        }
        i(t, n);
        var e = t.prototype;
        return e.to = function(t, e, i) {
            return X(0, arguments, this), this
        }, e.from = function(t, e, i) {
            return X(1, arguments, this), this
        }, e.fromTo = function(t, e, i, n) {
            return X(2, arguments, this), this
        }, e.set = function(t, e, i) {
            return e.duration = 0, e.parent = this, B(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ye(t, e, gt(this, i), 1), this
        }, e.call = function(t, e, i) {
            return W(this, Ye.delayedCall(0, t, e), i)
        }, e.staggerTo = function(t, e, i, n, r, s, o) {
            return i.duration = e, i.stagger = i.stagger || n, i.onComplete = s, i.onCompleteParams = o, i.parent = this, new Ye(t, i, gt(this, r)), this
        }, e.staggerFrom = function(t, e, i, n, r, s, o) {
            return i.runBackwards = 1, B(i).immediateRender = z(i.immediateRender), this.staggerTo(t, e, i, n, r, s, o)
        }, e.staggerFromTo = function(t, e, i, n, r, s, o, a) {
            return n.startAt = i, B(n).immediateRender = z(n.immediateRender), this.staggerTo(t, e, n, r, s, o, a)
        }, e.render = function(t, e, i) {
            var n, r, s, o, a, u, l, h, c, d, f = this._time,
                p = this._dirty ? this.totalDuration() : this._tDur,
                D = this._dur,
                g = t <= 0 ? 0 : M(t),
                m = this._zTime < 0 != t < 0 && (this._initted || !D);
            if ((g = this !== xt && p < g && 0 <= t ? p : g) !== this._tTime || i || m) {
                if (f !== this._time && D && (g += this._time - f, t += this._time - f), n = g, h = this._start, a = !(l = this._ts), m && (D || (f = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
                    if (v = this._yoyo, o = D + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, i);
                    if (n = M(g % o), g === p ? (s = this._repeat, n = D) : ((s = ~~(g / o)) && s === g / o && (n = D, s--), D < n && (n = D)), c = pt(this._tTime, o), v && 1 & s && (n = D - n, d = 1), s !== (c = !f && this._tTime && c !== s ? s : c) && !this._lock) {
                        var m = v && 1 & c,
                            v = m === (v && 1 & s),
                            f = (m = s < c ? !m : m) ? 0 : D;
                        if (this._lock = 1, this.render(f || (d ? 0 : M(s * o)), e, !D)._lock = 0, this._tTime = g, !e && this.parent && _t(this, "onRepeat"), this.vars.repeatRefresh && !d && (this.invalidate()._lock = 1), f && f !== this._time || a != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (D = this._dur, p = this._tDur, v && (this._lock = 2, this.render(f = m ? D : -1e-4, !0), this.vars.repeatRefresh && !d && this.invalidate()), this._lock = 0, !this._ts && !a) return this;
                        ut(this, d)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (u = function(t, e, i) {
                        var n;
                        if (e < i)
                            for (n = t._first; n && n._start <= i;) {
                                if (!n._dur && "isPause" === n.data && n._start > e) return n;
                                n = n._next
                            } else
                                for (n = t._last; n && n._start >= i;) {
                                    if (!n._dur && "isPause" === n.data && n._start < e) return n;
                                    n = n._prev
                                }
                    }(this, M(f), M(n))) && (g -= n - (n = u._start)), this._tTime = g, this._time = n, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, f = 0), !f && n && !e && (_t(this, "onStart"), this._tTime !== g)) return this;
                if (f <= n && 0 <= t)
                    for (y = this._first; y;) {
                        if (r = y._next, (y._act || n >= y._start) && y._ts && u !== y) {
                            if (y.parent !== this) return this.render(t, e, i);
                            if (y.render(0 < y._ts ? (n - y._start) * y._ts : (y._dirty ? y.totalDuration() : y._tDur) + (n - y._start) * y._ts, e, i), n !== this._time || !this._ts && !a) {
                                u = 0, r && (g += this._zTime = -Gt);
                                break
                            }
                        }
                        y = r
                    } else
                        for (var y = this._last, _ = t < 0 ? t : n; y;) {
                            if (r = y._prev, (y._act || _ <= y._end) && y._ts && u !== y) {
                                if (y.parent !== this) return this.render(t, e, i);
                                if (y.render(0 < y._ts ? (_ - y._start) * y._ts : (y._dirty ? y.totalDuration() : y._tDur) + (_ - y._start) * y._ts, e, i), n !== this._time || !this._ts && !a) {
                                    u = 0, r && (g += this._zTime = _ ? -Gt : Gt);
                                    break
                                }
                            }
                            y = r
                        }
                if (u && !e && (this.pause(), u.render(f <= n ? 0 : -Gt)._zTime = f <= n ? 1 : -1, this._ts)) return this._start = h, C(this), this.render(t, e, i);
                this._onUpdate && !e && _t(this, "onUpdate", !0), (g === p && p >= this.totalDuration() || !g && f) && (h !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && D || !(g === p && 0 < this._ts || !g && this._ts < 0) || q(this, 1), e || t < 0 && !f || !g && !f && p || (_t(this, g === p && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || g < p && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, e.add = function(t, e) {
            var i = this;
            if (F(e) || (e = gt(this, e, t)), !(t instanceof Oe)) {
                if (ie(t)) return t.forEach(function(t) {
                    return i.add(t, e)
                }), this;
                if (k(t)) return this.addLabel(t, e);
                if (!c(t)) return this;
                t = Ye.delayedCall(0, t)
            }
            return this !== t ? W(this, t, e) : this
        }, e.getChildren = function(t, e, i, n) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === n && (n = -Vt);
            for (var r = [], s = this._first; s;) s._start >= n && (s instanceof Ye ? e && r.push(s) : (i && r.push(s), t && r.push.apply(r, s.getChildren(!0, e, i)))), s = s._next;
            return r
        }, e.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
                if (e[i].vars.id === t) return e[i]
        }, e.remove = function(t) {
            return k(t) ? this.removeLabel(t) : c(t) ? this.killTweensOf(t) : (p(this, t), t === this._recent && (this._recent = this._last), D(this))
        }, e.totalTime = function(t, e) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = M(Fe.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), n.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
        }, e.addLabel = function(t, e) {
            return this.labels[t] = gt(this, e), this
        }, e.removeLabel = function(t) {
            return delete this.labels[t], this
        }, e.addPause = function(t, e, i) {
            i = Ye.delayedCall(0, e || T, i);
            return i.data = "isPause", this._hasPause = 1, W(this, i, gt(this, t))
        }, e.removePause = function(t) {
            var e = this._first;
            for (t = gt(this, t); e;) e._start === t && "isPause" === e.data && q(e), e = e._next
        }, e.killTweensOf = function(t, e, i) {
            for (var n = this.getTweensOf(t, i), r = n.length; r--;) qe !== n[r] && n[r].kill(t, e);
            return this
        }, e.getTweensOf = function(t, e) {
            for (var i, n = [], r = vt(t), s = this._first, o = F(e); s;) s instanceof Ye ? function(t, e) {
                for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i;);
                return n < i
            }(s._targets, r) && (o ? (!qe || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && n.push(s) : (i = s.getTweensOf(r, e)).length && n.push.apply(n, i), s = s._next;
            return n
        }, e.tweenTo = function(t, e) {
            e = e || {};
            var i, n = this,
                r = gt(n, t),
                s = e.startAt,
                o = e.onStart,
                a = e.onStartParams,
                t = e.immediateRender,
                u = Ye.to(n, R({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: r,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((r - (s && "time" in s ? s.time : n._time)) / n.timeScale()) || Gt,
                    onStart: function() {
                        var t;
                        n.pause(), i || (t = e.duration || Math.abs((r - (s && "time" in s ? s.time : n._time)) / n.timeScale()), u._dur !== t && x(u, t, 0, 1).render(u._time, !0, !0), i = 1), o && o.apply(u, a || [])
                    }
                }, e));
            return t ? u.render(0) : u
        }, e.tweenFromTo = function(t, e, i) {
            return this.tweenTo(e, R({
                startAt: {
                    time: gt(this, t)
                }
            }, i))
        }, e.recent = function() {
            return this._recent
        }, e.nextLabel = function(t) {
            return void 0 === t && (t = this._time), et(this, gt(this, t))
        }, e.previousLabel = function(t) {
            return void 0 === t && (t = this._time), et(this, gt(this, t), 1)
        }, e.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + Gt)
        }, e.shiftChildren = function(t, e, i) {
            void 0 === i && (i = 0);
            for (var n, r = this._first, s = this.labels; r;) r._start >= i && (r._start += t, r._end += t), r = r._next;
            if (e)
                for (n in s) s[n] >= i && (s[n] += t);
            return D(this)
        }, e.invalidate = function() {
            var t = this._first;
            for (this._lock = 0; t;) t.invalidate(), t = t._next;
            return n.prototype.invalidate.call(this)
        }, e.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), D(this)
        }, e.totalDuration = function(t) {
            var e, i, n, r = 0,
                s = this,
                o = s._last,
                a = Vt;
            if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
            if (s._dirty) {
                for (n = s.parent; o;) e = o._prev, o._dirty && o.totalDuration(), a < (i = o._start) && s._sort && o._ts && !s._lock ? (s._lock = 1, W(s, o, i - o._delay, 1)._lock = 0) : a = i, i < 0 && o._ts && (r -= i, (!n && !s._dp || n && n.smoothChildTiming) && (s._start += i / s._ts, s._time -= i, s._tTime -= i), s.shiftChildren(-i, !1, -1 / 0), a = 0), o._end > r && o._ts && (r = o._end), o = e;
                x(s, s === xt && s._time > r ? s._time : r, 1, 1), s._dirty = 0
            }
            return s._tDur
        }, t.updateRoot = function(t) {
            if (xt._ts && (a(xt, m(t, xt)), At = Fe.frame), Fe.frame >= ge) {
                ge += Yt.autoSleep || 120;
                var e = xt._first;
                if ((!e || !e._ts) && Yt.autoSleep && Fe._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Fe.sleep()
                }
            }
        }, t
    }(Oe);

    function Ne(t, e, i, n, r, s) {
        var o, a, u, l;
        if (pe[t] && !1 !== (o = new pe[t]).init(r, o.rawVars ? e[t] : function(t, e, i, n, r) {
                if (!w(t = c(t) ? je(t, r, e, i, n) : t) || t.style && t.nodeType || ie(t) || ee(t)) return k(t) ? je(t, r, e, i, n) : t;
                var s, o = {};
                for (s in t) o[s] = je(t[s], r, e, i, n);
                return o
            }(e[t], n, r, s, i), i, n, s) && (i._pt = a = new si(i._pt, r, t, 0, 1, o.render, o, 0, o.priority), i !== li))
            for (u = i._ptLookup[i._targets.indexOf(r)], l = o._props.length; l--;) u[o._props[l]] = a;
        return o
    }
    R(Ie.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });

    function Re(t, e) {
        var i, n, r, s, o, a, u, l, h, c, d, f, p, D = t.vars,
            g = D.ease,
            m = D.startAt,
            v = D.immediateRender,
            y = D.lazy,
            _ = D.onUpdate,
            C = D.onUpdateParams,
            x = D.callbackScope,
            E = D.runBackwards,
            b = D.yoyoEase,
            F = D.keyframes,
            w = D.autoRevert,
            S = t._dur,
            A = t._startAt,
            T = t._targets,
            k = t.parent,
            P = k && "nested" === k.data ? k.parent._targets : T,
            M = "auto" === t._overwrite && !Ct,
            B = t.timeline;
        if (t._ease = Pe(g = !(!B || F && g) ? "none" : g, Ht.ease), t._yEase = b ? ke(Pe(!0 === b ? g : b, Ht.ease)) : 0, b && t._yoyo && !t._repeat && (b = t._yEase, t._yEase = t._ease, t._ease = b), t._from = !B && !!D.runBackwards, !B) {
            if (f = (l = T[0] ? L(T[0]).harness : 0) && D[l.prop], i = j(D, ce), A && A.render(-1, !0).kill(), m)
                if (q(t._startAt = Ye.set(T, R({
                        data: "isStart",
                        overwrite: !1,
                        parent: k,
                        immediateRender: !0,
                        lazy: z(y),
                        startAt: null,
                        delay: 0,
                        onUpdate: _,
                        onUpdateParams: C,
                        callbackScope: x,
                        stagger: 0
                    }, m))), e < 0 && !v && !w && t._startAt.render(-1, !0), v) {
                    if (0 < e && !w && (t._startAt = 0), S && e <= 0) return void(e && (t._zTime = e))
                } else !1 === w && (t._startAt = 0);
            else if (E && S)
                if (A) w || (t._startAt = 0);
                else if (r = R({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: (v = e ? !1 : v) && z(y),
                    immediateRender: v,
                    stagger: 0,
                    parent: k
                }, i), f && (r[l.prop] = f), q(t._startAt = Ye.set(T, r)), e < 0 && t._startAt.render(-1, !0), v) {
                if (!e) return
            } else Re(t._startAt, Gt);
            for (t._pt = 0, y = S && z(y) || y && !S, n = 0; n < T.length; n++) {
                if (u = (o = T[n])._gsap || O(T)[n]._gsap, t._ptLookup[n] = c = {}, fe[u.id] && de.length && N(), d = P === T ? n : P.indexOf(o), l && !1 !== (h = new l).init(o, f || i, t, d, P) && (t._pt = s = new si(t._pt, o, h.name, 0, 1, h.render, h, 0, h.priority), h._props.forEach(function(t) {
                        c[t] = s
                    }), h.priority && (a = 1)), !l || f)
                    for (r in i) pe[r] && (h = Ne(r, i, t, d, o, P)) ? h.priority && (a = 1) : c[r] = s = We.call(t, o, r, "get", i[r], d, P, 0, D.stringFilter);
                t._op && t._op[n] && t.kill(o, t._op[n]), M && t._pt && (qe = t, xt.killTweensOf(o, c, t.globalTime(e)), p = !t.parent, qe = 0), t._pt && y && (fe[u.id] = 1)
            }
            a && ri(t), t._onInit && t._onInit(t)
        }
        t._onUpdate = _, t._initted = (!t._op || t._pt) && !p
    }

    function je(t, e, i, n, r) {
        return c(t) ? t.call(e, i, n, r) : k(t) && ~t.indexOf("random(") ? tt(t) : t
    }
    var qe, We = function(t, e, i, n, r, s, o, a, u) {
            c(n) && (n = n(r || 0, t, s));
            var l, r = t[e],
                s = "get" !== i ? i : c(r) ? u ? t[e.indexOf("set") || !c(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : r,
                i = c(r) ? u ? Ke : Qe : Ge;
            if (k(n) && ("=" === (n = ~n.indexOf("random(") ? tt(n) : n).charAt(1) && (!(l = parseFloat(s) + parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) + (H(s) || 0)) && 0 !== l || (n = l))), s !== n) return isNaN(s * n) || "" === n ? (r || e in t || P(e, n), function(t, e, i, n, r, s, o) {
                var a, u, l, h, c, d = new si(this._pt, t, e, 0, 1, Je, null, r),
                    f = 0,
                    p = 0;
                for (d.b = i, d.e = n, i += "", (r = ~(n += "").indexOf("random(")) && (n = tt(n)), s && (s(s = [i, n], t, e), i = s[0], n = s[1]), a = i.match(oe) || []; c = oe.exec(n);) l = c[0], h = n.substring(f, c.index), u ? u = (u + 1) % 5 : "rgba(" === h.substr(-5) && (u = 1), l !== a[p++] && (c = parseFloat(a[p - 1]) || 0, d._pt = {
                    _next: d._pt,
                    p: h || 1 === p ? h : ",",
                    s: c,
                    c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - c,
                    m: u && u < 4 ? Math.round : 0
                }, f = oe.lastIndex);
                return d.c = f < n.length ? n.substring(f, n.length) : "", d.fp = o, (ae.test(n) || r) && (d.e = 0), this._pt = d
            }.call(this, t, e, s, n, i, a || Yt.stringFilter, u)) : (l = new si(this._pt, t, e, +s || 0, n - (s || 0), "boolean" == typeof r ? Ze : $e, 0, i), u && (l.fp = u), o && l.modifier(o, this, t), this._pt = l)
        },
        Ue = ve + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Xe = (Ue + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        Ye = function(E) {
            function r(t, e, i, n) {
                var r;
                "number" == typeof e && (i.duration = e, e = i, i = null);
                var s, o, a, u, l, h, c, d, f = (r = E.call(this, n ? e : B(e)) || this).vars,
                    p = f.duration,
                    D = f.delay,
                    g = f.immediateRender,
                    m = f.stagger,
                    v = f.overwrite,
                    y = f.keyframes,
                    _ = f.defaults,
                    n = f.scrollTrigger,
                    C = f.yoyoEase,
                    f = e.parent || xt,
                    x = (ie(t) || ee(t) ? F(t[0]) : "length" in e) ? [t] : vt(t);
                if (r._targets = x.length ? O(x) : A("GSAP target " + t + " not found. https://greensock.com", !Yt.nullTargetWarn) || [], r._ptLookup = [], r._overwrite = v, y || m || S(p) || S(D)) {
                    if (e = r.vars, (s = r.timeline = new Ie({
                            data: "nested",
                            defaults: _ || {}
                        })).kill(), s.parent = s._dp = b(r), s._start = 0, y) B(R(s.vars.defaults, {
                        ease: "none"
                    })), m ? x.forEach(function(i, n) {
                        return y.forEach(function(t, e) {
                            return s.to(i, t, e ? ">" : n * m)
                        })
                    }) : y.forEach(function(t) {
                        return s.to(x, t, ">")
                    });
                    else {
                        if (u = x.length, c = m ? Q(m) : T, w(m))
                            for (l in m) ~Ue.indexOf(l) && ((d = d || {})[l] = m[l]);
                        for (o = 0; o < u; o++) {
                            for (l in a = {}, e) Xe.indexOf(l) < 0 && (a[l] = e[l]);
                            a.stagger = 0, C && (a.yoyoEase = C), d && ft(a, d), h = x[o], a.duration = +je(p, b(r), o, h, x), a.delay = (+je(D, b(r), o, h, x) || 0) - r._delay, !m && 1 === u && a.delay && (r._delay = D = a.delay, r._start += D, a.delay = 0), s.to(h, a, c(o, h, x))
                        }
                        s.duration() ? p = D = 0 : r.timeline = 0
                    }
                    p || r.duration(p = s.duration())
                } else r.timeline = 0;
                return !0 !== v || Ct || (qe = b(r), xt.killTweensOf(x), qe = 0), W(f, b(r), i), e.reversed && r.reverse(), e.paused && r.paused(!0), (g || !p && !y && r._start === M(f._time) && z(g) && function t(e) {
                    return !e || e._ts && t(e.parent)
                }(b(r)) && "nested" !== f.data) && (r._tTime = -Gt, r.render(Math.max(0, -D))), n && U(b(r), n), r
            }
            i(r, E);
            var t = r.prototype;
            return t.render = function(t, e, i) {
                var n, r, s, o, a, u, l, h, c, d = this._time,
                    f = this._tDur,
                    p = this._dur,
                    D = f - Gt < t && 0 <= t ? f : t < Gt ? 0 : t;
                if (p) {
                    if (D !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                        if (n = D, h = this.timeline, this._repeat) {
                            if (o = p + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, i);
                            if (n = M(D % o), D === f ? (s = this._repeat, n = p) : ((s = ~~(D / o)) && s === D / o && (n = p, s--), p < n && (n = p)), (u = this._yoyo && 1 & s) && (c = this._yEase, n = p - n), a = pt(this._tTime, o), n === d && !i && this._initted) return this;
                            s !== a && (h && this._yEase && ut(h, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = i = 1, this.render(M(o * s), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (_(this, t < 0 ? t : n, i, e)) return this._tTime = 0, this;
                            if (p !== this._dur) return this.render(t, e, i)
                        }
                        if (this._tTime = D, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (c || this._ease)(n / p), this._from && (this.ratio = l = 1 - l), n && !d && !e && (_t(this, "onStart"), this._tTime !== D)) return this;
                        for (r = this._pt; r;) r.r(l, r.d), r = r._next;
                        h && h.render(t < 0 ? t : !n && u ? -Gt : h._dur * l, e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i), _t(this, "onUpdate")), this._repeat && s !== a && this.vars.onRepeat && !e && this.parent && _t(this, "onRepeat"), D !== this._tDur && D || this._tTime !== D || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && p || !(D === this._tDur && 0 < this._ts || !D && this._ts < 0) || q(this, 1), e || t < 0 && !d || !D && !d || (_t(this, D === f ? "onComplete" : "onReverseComplete", !0), !this._prom || D < f && 0 < this.timeScale() || this._prom()))
                    }
                } else ! function(t, e, i, n) {
                    var r, s, o, a = t.ratio,
                        u = e < 0 || !e && (!t._start && function t(e) {
                            e = e.parent;
                            return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || t(e))
                        }(t) && (t._initted || !Dt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Dt(t)) ? 0 : 1,
                        l = t._rDelay,
                        h = 0;
                    if (l && t._repeat && (h = mt(0, t._tDur, e), s = pt(h, l), o = pt(t._tTime, l), t._yoyo && 1 & s && (u = 1 - u), s !== o && (a = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== a || n || t._zTime === Gt || !e && t._zTime) {
                        if (t._initted || !_(t, e, n, i)) {
                            for (o = t._zTime, t._zTime = e || (i ? Gt : 0), i = i || e && !o, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = h, r = t._pt; r;) r.r(u, r.d), r = r._next;
                            t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !i && _t(t, "onUpdate"), h && t._repeat && !i && t.parent && _t(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && q(t, 1), i || (_t(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                        }
                    } else t._zTime || (t._zTime = e)
                }(this, t, e, i);
                return this
            }, t.targets = function() {
                return this._targets
            }, t.invalidate = function() {
                return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), E.prototype.invalidate.call(this)
            }, t.kill = function(t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? it(this) : this;
                if (this.timeline) {
                    var i = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, qe && !0 !== qe.vars.overwrite)._first || it(this), this.parent && i !== this.timeline.totalDuration() && x(this, this._dur * this.timeline._tDur / i, 0, 1), this
                }
                var n, r, s, o, a, u, l, h = this._targets,
                    c = t ? vt(t) : h,
                    d = this._ptLookup,
                    t = this._pt;
                if ((!e || "all" === e) && function(t, e) {
                        for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i];);
                        return i < 0
                    }(h, c)) return "all" === e && (this._pt = 0), it(this);
                for (n = this._op = this._op || [], "all" !== e && (k(e) && (a = {}, f(e, function(t) {
                        return a[t] = 1
                    }), e = a), e = function(t, e) {
                        var i, n, r, s, t = t[0] ? L(t[0]).harness : 0,
                            o = t && t.aliases;
                        if (!o) return e;
                        for (n in i = ft({}, e), o)
                            if (n in i)
                                for (r = (s = o[n].split(",")).length; r--;) i[s[r]] = i[n];
                        return i
                    }(h, e)), l = h.length; l--;)
                    if (~c.indexOf(h[l]))
                        for (a in r = d[l], "all" === e ? (n[l] = e, o = r, s = {}) : (s = n[l] = n[l] || {}, o = e), o)(u = r && r[a]) && ("kill" in u.d && !0 !== u.d.kill(a) || p(this, u, "_pt"), delete r[a]), "all" !== s && (s[a] = 1);
                return this._initted && !this._pt && t && it(this), this
            }, r.to = function(t, e, i) {
                return new r(t, e, i)
            }, r.from = function(t, e) {
                return X(1, arguments)
            }, r.delayedCall = function(t, e, i, n) {
                return new r(e, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: e,
                    onReverseComplete: e,
                    onCompleteParams: i,
                    onReverseCompleteParams: i,
                    callbackScope: n
                })
            }, r.fromTo = function(t, e, i) {
                return X(2, arguments)
            }, r.set = function(t, e) {
                return e.duration = 0, e.repeatDelay || (e.repeat = 0), new r(t, e)
            }, r.killTweensOf = function(t, e, i) {
                return xt.killTweensOf(t, e, i)
            }, r
        }(Oe);

    function He(t, e, i) {
        return t.setAttribute(e, i)
    }

    function Ve(t, e, i, n) {
        n.mSet(t, e, n.m.call(n.tween, i, n.mt), n)
    }
    R(Ye.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), f("staggerTo,staggerFrom,staggerFromTo", function(i) {
        Ye[i] = function() {
            var t = new Ie,
                e = _e.call(arguments, 0);
            return e.splice("staggerFromTo" === i ? 5 : 4, 0, 0), t[i].apply(t, e)
        }
    });

    function Ge(t, e, i) {
        return t[e] = i
    }

    function Qe(t, e, i) {
        return t[e](i)
    }

    function Ke(t, e, i, n) {
        return t[e](n.fp, i)
    }

    function $e(t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    }

    function Ze(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }

    function Je(t, e) {
        var i = e._pt,
            n = "";
        if (!t && e.b) n = e.b;
        else if (1 === t && e.e) n = e.e;
        else {
            for (; i;) n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + n, i = i._next;
            n += e.c
        }
        e.set(e.t, e.p, n, e)
    }

    function ti(t, e) {
        for (var i = e._pt; i;) i.r(t, i.d), i = i._next
    }

    function ei(t, e, i, n) {
        for (var r, s = this._pt; s;) r = s._next, s.p === n && s.modifier(t, e, i), s = r
    }

    function ii(t) {
        for (var e, i, n = this._pt; n;) i = n._next, n.p === t && !n.op || n.op === t ? p(this, n, "_pt") : n.dep || (e = 1), n = i;
        return !e
    }
    var ni = function(t, e) {
            return c(t[e]) ? Qe : r(t[e]) && t.setAttribute ? He : Ge
        },
        ri = function(t) {
            for (var e, i, n, r, s = t._pt; s;) {
                for (e = s._next, i = n; i && i.pr > s.pr;) i = i._next;
                (s._prev = i ? i._prev : r) ? s._prev._next = s: n = s, (s._next = i) ? i._prev = s : r = s, s = e
            }
            t._pt = n
        },
        si = (oi.prototype.modifier = function(t, e, i) {
            this.mSet = this.mSet || this.set, this.set = Ve, this.m = t, this.mt = i, this.tween = e
        }, oi);

    function oi(t, e, i, n, r, s, o, a, u) {
        this.t = e, this.s = n, this.c = r, this.p = i, this.r = s || $e, this.d = o || this, this.set = a || Ge, this.pr = u || 0, (this._next = t) && (t._prev = this)
    }
    f(ve + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ce[t] = 1
    }), he.TweenMax = he.TweenLite = Ye, he.TimelineLite = he.TimelineMax = Ie, xt = new Ie({
        sortChildren: !1,
        defaults: Ht,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), Yt.stringFilter = at;
    var ai = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            e.forEach(function(t) {
                var e = (t = !t.name && t.default || t).name,
                    i = c(t),
                    n = e && !i && t.init ? function() {
                        this._props = []
                    } : t,
                    r = {
                        init: T,
                        render: ti,
                        add: We,
                        kill: ii,
                        modifier: ei,
                        rawVars: 0
                    },
                    i = {
                        targetTest: 0,
                        get: 0,
                        getSetter: ni,
                        aliases: {},
                        register: 0
                    };
                if (we(), t !== n) {
                    if (pe[e]) return;
                    R(n, R(j(t, r), i)), ft(n.prototype, ft(r, j(t, i))), pe[n.prop = e] = n, t.targetTest && (me.push(n), ce[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                s(e, n), t.register && t.register(hi, n, si)
            })
        },
        timeline: function(t) {
            return new Ie(t)
        },
        getTweensOf: function(t, e) {
            return xt.getTweensOf(t, e)
        },
        getProperty: function(n, t, e, i) {
            var r = L((n = k(n) ? vt(n)[0] : n) || {}).get,
                s = e ? l : u;
            return "native" === e && (e = ""), n && (t ? s((pe[t] && pe[t].get || r)(n, t, e, i)) : function(t, e, i) {
                return s((pe[t] && pe[t].get || r)(n, t, e, i))
            })
        },
        quickSetter: function(i, e, n) {
            if (1 < (i = vt(i)).length) {
                var r = i.map(function(t) {
                        return hi.quickSetter(t, e, n)
                    }),
                    s = r.length;
                return function(t) {
                    for (var e = s; e--;) r[e](t)
                }
            }
            i = i[0] || {};
            var o = pe[e],
                a = L(i),
                u = a.harness && (a.harness.aliases || {})[e] || e,
                l = o ? function(t) {
                    var e = new o;
                    li._pt = 0, e.init(i, n ? t + n : t, li, 0, [i]), e.render(1, e), li._pt && ti(1, li)
                } : a.set(i, u);
            return o ? l : function(t) {
                return l(i, u, n ? t + n : t, a, 1)
            }
        },
        isTweening: function(t) {
            return 0 < xt.getTweensOf(t, !0).length
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = Pe(t.ease, Ht.ease)), d(Ht, t || {})
        },
        config: function(t) {
            return d(Yt, t || {})
        },
        registerEffect: function(t) {
            var n = t.name,
                r = t.effect,
                e = t.plugins,
                s = t.defaults,
                t = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !pe[t] && !he[t] && A(n + " effect requires " + t + " plugin.")
            }), De[n] = function(t, e, i) {
                return r(vt(t), R(e || {}, s), i)
            }, t && (Ie.prototype[n] = function(t, e, i) {
                return this.add(De[n](t, w(e) ? e : (i = e) && {}, this), i)
            })
        },
        registerEase: function(t, e) {
            Se[t] = Pe(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? Pe(t, e) : Se
        },
        getById: function(t) {
            return xt.getById(t)
        },
        exportRoot: function(t, e) {
            var i, n, r = new Ie(t = void 0 === t ? {} : t);
            for (r.smoothChildTiming = z(t.smoothChildTiming), xt.remove(r), r._dp = 0, r._time = r._tTime = xt._time, i = xt._first; i;) n = i._next, !e && !i._dur && i instanceof Ye && i.vars.onComplete === i._targets[0] || W(r, i, i._start - i._delay), i = n;
            return W(xt, r, 0), r
        },
        utils: {
            wrap: function t(e, i, n) {
                var r = i - e;
                return ie(e) ? J(e, t(0, e.length), i) : Y(n, function(t) {
                    return (r + (t - e) % r) % r + e
                })
            },
            wrapYoyo: function t(e, i, n) {
                var r = i - e,
                    s = 2 * r;
                return ie(e) ? J(e, t(0, e.length - 1), i) : Y(n, function(t) {
                    return e + (r < (t = (s + (t - e) % s) % s || 0) ? s - t : t)
                })
            },
            distribute: Q,
            random: Z,
            snap: $,
            normalize: function(t, e, i) {
                return yt(t, e, 0, 1, i)
            },
            getUnit: H,
            clamp: function(e, i, t) {
                return Y(t, function(t) {
                    return mt(e, i, t)
                })
            },
            splitColor: rt,
            toArray: vt,
            selector: function(i) {
                return i = vt(i)[0] || A("Invalid scope") || {},
                    function(t) {
                        var e = i.current || i.nativeElement || i;
                        return vt(t, e.querySelectorAll ? e : e === i ? A("Invalid scope") || Ft.createElement("div") : i)
                    }
            },
            mapRange: yt,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function(e, i) {
                return function(t) {
                    return e(parseFloat(t)) + (i || H(t))
                }
            },
            interpolate: function t(e, i, n, r) {
                var s = isNaN(e + i) ? 0 : function(t) {
                    return (1 - t) * e + t * i
                };
                if (!s) {
                    var o, a, u, l, h, c = k(e),
                        d = {};
                    if (!0 === n && (r = 1) && (n = null), c) e = {
                        p: e
                    }, i = {
                        p: i
                    };
                    else if (ie(e) && !ie(i)) {
                        for (u = [], l = e.length, h = l - 2, a = 1; a < l; a++) u.push(t(e[a - 1], e[a]));
                        l--, s = function(t) {
                            t *= l;
                            var e = Math.min(h, ~~t);
                            return u[e](t - e)
                        }, n = i
                    } else r || (e = ft(ie(e) ? [] : {}, e));
                    if (!u) {
                        for (o in i) We.call(d, e, o, "get", i[o]);
                        s = function(t) {
                            return ti(t, d), c ? e.p : e
                        }
                    }
                }
                return Y(n, s)
            },
            shuffle: G
        },
        install: n,
        effects: De,
        ticker: Fe,
        updateRoot: Ie.updateRoot,
        plugins: pe,
        globalTimeline: xt,
        core: {
            PropTween: si,
            globals: s,
            Tween: Ye,
            Timeline: Ie,
            Animation: Oe,
            getCache: L,
            _removeLinkedListItem: p,
            suppressOverwrites: function(t) {
                return Ct = t
            }
        }
    };

    function ui(t, r) {
        return {
            name: t,
            rawVars: 1,
            init: function(t, n, e) {
                e._onInit = function(t) {
                    var e, i;
                    if (k(n) && (e = {}, f(n, function(t) {
                            return e[t] = 1
                        }), n = e), r) {
                        for (i in e = {}, n) e[i] = r(n[i]);
                        n = e
                    }! function(t, e) {
                        var i, n, r, s = t._targets;
                        for (i in e)
                            for (n = s.length; n--;)(r = (r = t._ptLookup[n][i]) && r.d) && (r._pt && (r = function(t, e) {
                                for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
                                return i
                            }(r, i)), r && r.modifier && r.modifier(e[i], t, s[n], i))
                    }(t, n)
                }
            }
        }
    }
    f("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return ai[t] = Ye[t]
    }), Fe.add(Ie.updateRoot);
    var li = ai.to({}, {
            duration: 0
        }),
        hi = ai.registerPlugin({
            name: "attr",
            init: function(t, e, i, n, r) {
                var s, o;
                for (s in e)(o = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], n, r, 0, 0, s)) && (o.op = s), this._props.push(s)
            }
        }, {
            name: "endArray",
            init: function(t, e) {
                for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i])
            }
        }, ui("roundProps", K), ui("modifiers"), ui("snap", $)) || ai;

    function ci(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function di(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function fi(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function pi(t, e) {
        t = e.s + e.c * t;
        e.set(e.t, e.p, ~~(t + (t < 0 ? -.5 : .5)) + e.u, e)
    }

    function Di(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function gi(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function mi(t, e, i) {
        return t.style[e] = i
    }

    function vi(t, e, i) {
        return t.style.setProperty(e, i)
    }

    function yi(t, e, i) {
        return t._gsap[e] = i
    }

    function _i(t, e, i) {
        return t._gsap.scaleX = t._gsap.scaleY = i
    }

    function Ci(t, e, i, n, r) {
        t = t._gsap;
        t.scaleX = t.scaleY = i, t.renderTransform(r, t)
    }

    function xi(t, e, i, n, r) {
        t = t._gsap;
        t[e] = i, t.renderTransform(r, t)
    }

    function Ei(t, e) {
        e = Wi.createElementNS ? Wi.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Wi.createElement(t);
        return e.style ? e : Wi.createElement(t)
    }

    function bi(t, e, i) {
        var n = getComputedStyle(t);
        return n[e] || n.getPropertyValue(e.replace(mn, "-$1").toLowerCase()) || n.getPropertyValue(e) || !i && bi(t, bn(e) || e, 1) || ""
    }

    function Fi() {
        "undefined" != typeof window && window.document && (Ui = (Wi = window.document).documentElement, Yi = Ei("div") || {
            style: {}
        }, Ei("div"), Cn = bn(Cn), xn = Cn + "Origin", Yi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Vi = !!bn("perspective"), Xi = 1)
    }

    function wi(t) {
        var e, i = Ei("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            n = this.parentNode,
            r = this.nextSibling,
            s = this.style.cssText;
        if (Ui.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = wi
        } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
        return n && (r ? n.insertBefore(this, r) : n.appendChild(this)), Ui.removeChild(i), this.style.cssText = s, e
    }

    function Si(t, e) {
        for (var i = e.length; i--;)
            if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
    }

    function Ai(e) {
        var i;
        try {
            i = e.getBBox()
        } catch (t) {
            i = wi.call(e, !0)
        }
        return !(i = !(i && (i.width || i.height) || e.getBBox === wi) ? wi.call(e, !0) : i) || i.width || i.x || i.y ? i : {
            x: +Si(e, ["x", "cx", "x1"]) || 0,
            y: +Si(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function Ti(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Ai(t))
    }

    function ki(t, e) {
        e && (t = t.style, e in fn && e !== xn && (e = Cn), t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(mn, "-$1").toLowerCase())) : t.removeAttribute(e))
    }

    function Pi(t, e, i, n, r, s) {
        s = new si(t._pt, e, i, 0, 1, s ? gi : Di);
        return (t._pt = s).b = n, s.e = r, t._props.push(i), s
    }

    function Mi(t, e, i, n) {
        var r, s = parseFloat(i) || 0,
            o = (i + "").trim().substr((s + "").length) || "px",
            a = Yi.style,
            u = vn.test(e),
            l = "svg" === t.tagName.toLowerCase(),
            h = (l ? "client" : "offset") + (u ? "Width" : "Height"),
            c = "px" === n,
            d = "%" === n;
        return n === o || !s || Fn[n] || Fn[o] ? s : ("px" === o || c || (s = Mi(t, e, i, "px")), i = t.getCTM && Ti(t), !d && "%" !== o || !fn[e] && !~e.indexOf("adius") ? (a[u ? "width" : "height"] = 100 + (c ? o : n), n = ~e.indexOf("adius") || "em" === n && t.appendChild && !l ? t : t.parentNode, (l = (n = !(n = i ? (t.ownerSVGElement || {}).parentNode : n) || n === Wi || !n.appendChild ? Wi.body : n)._gsap) && d && l.width && u && l.time === Fe.time ? I(s / l.width * 100) : (!d && "%" !== o || (a.position = bi(t, "position")), n === t && (a.position = "static"), n.appendChild(Yi), r = Yi[h], n.removeChild(Yi), a.position = "absolute", u && d && ((l = L(n)).time = Fe.time, l.width = n[h]), I(c ? r * s / 100 : r && s ? 100 / r * s : 0))) : (r = i ? t.getBBox()[u ? "width" : "height"] : t[h], I(d ? s / r * 100 : s / 100 * r)))
    }

    function Bi(t, e, i, n) {
        var r;
        return Xi || Fi(), e in _n && "transform" !== e && ~(e = _n[e]).indexOf(",") && (e = e.split(",")[0]), fn[e] && "transform" !== e ? (r = kn(t, n), r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : Pn(bi(t, xn)) + " " + r.zOrigin + "px") : (r = t.style[e]) && "auto" !== r && !n && !~(r + "").indexOf("calc(") || (r = Sn[e] && Sn[e](t, e, i) || bi(t, e) || o(t, e) || ("opacity" === e ? 1 : 0)), i && !~(r + "").trim().indexOf(" ") ? Mi(t, e, r, i) + i : r
    }

    function zi(t, e, i, n) {
        var r;
        i && "none" !== i || ((s = (r = bn(e, t, 1)) && bi(t, r, 1)) && s !== i ? (e = r, i = s) : "borderColor" === e && (i = bi(t, "borderTopColor")));
        var s, o, a, u, l, h, c, d, f, p, D = new si(this._pt, t.style, e, 0, 1, Je),
            g = 0,
            m = 0;
        if (D.b = i, D.e = n, i += "", "auto" == (n += "") && (t.style[e] = n, n = bi(t, e) || n, t.style[e] = i), at(s = [i, n]), n = s[1], o = (i = s[0]).match(se) || [], (n.match(se) || []).length) {
            for (; h = se.exec(n);) d = h[0], c = n.substring(g, h.index), u ? u = (u + 1) % 5 : "rgba(" !== c.substr(-5) && "hsla(" !== c.substr(-5) || (u = 1), d !== (l = o[m++] || "") && (a = parseFloat(l) || 0, f = l.substr((a + "").length), (p = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), h = parseFloat(d), d = d.substr((h + "").length), g = se.lastIndex - d.length, d || (d = d || Yt.units[e] || f, g === n.length && (n += d, D.e += d)), f !== d && (a = Mi(t, e, l, d) || 0), D._pt = {
                _next: D._pt,
                p: c || 1 === m ? c : ",",
                s: a,
                c: p ? p * h : h - a,
                m: u && u < 4 || "zIndex" === e ? Math.round : 0
            });
            D.c = g < n.length ? n.substring(g, n.length) : ""
        } else D.r = "display" === e && "none" === n ? gi : Di;
        return ae.test(n) && (D.e = 0), this._pt = D
    }

    function Oi(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var i, n, r, s = e.t,
                o = s.style,
                a = e.u,
                e = s._gsap;
            if ("all" === a || !0 === a) o.cssText = "", n = 1;
            else
                for (r = (a = a.split(",")).length; - 1 < --r;) i = a[r], fn[i] && (n = 1, i = "transformOrigin" === i ? xn : Cn), ki(s, i);
            n && (ki(s, Cn), e && (e.svg && s.removeAttribute("transform"), kn(s, 1), e.uncache = 1))
        }
    }

    function Li(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function Ii(t) {
        t = bi(t, Cn);
        return Li(t) ? An : t.substr(7).match(re).map(I)
    }

    function Ni(t, e) {
        var i, n, r, s = t._gsap || L(t),
            o = t.style,
            a = Ii(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (a = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? An : a : (a !== An || t.offsetParent || t === Ui || s.svg || (n = o.display, o.display = "block", (s = t.parentNode) && t.offsetParent || (r = 1, i = t.nextSibling, Ui.appendChild(t)), a = Ii(t), n ? o.display = n : ki(t, "display"), r && (i ? s.insertBefore(t, i) : s ? s.appendChild(t) : Ui.removeChild(t))), e && 6 < a.length ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a)
    }

    function Ri(t, e, i, n, r, s) {
        var o, a, u = t._gsap,
            l = r || Ni(t, !0),
            h = u.xOrigin || 0,
            c = u.yOrigin || 0,
            d = u.xOffset || 0,
            f = u.yOffset || 0,
            p = l[0],
            D = l[1],
            g = l[2],
            m = l[3],
            v = l[4],
            y = l[5],
            _ = e.split(" "),
            C = parseFloat(_[0]) || 0,
            r = parseFloat(_[1]) || 0;
        i ? l !== An && (o = p * m - D * g) && (a = C * (-D / o) + r * (p / o) - (p * y - D * v) / o, C = C * (m / o) + r * (-g / o) + (g * y - m * v) / o, r = a) : (C = (a = Ai(t)).x + (~_[0].indexOf("%") ? C / 100 * a.width : C), r = a.y + (~(_[1] || _[0]).indexOf("%") ? r / 100 * a.height : r)), n || !1 !== n && u.smooth ? (u.xOffset = d + ((v = C - h) * p + (y = r - c) * g) - v, u.yOffset = f + (v * D + y * m) - y) : u.xOffset = u.yOffset = 0, u.xOrigin = C, u.yOrigin = r, u.smooth = !!n, u.origin = e, u.originIsAbsolute = !!i, t.style[xn] = "0px 0px", s && (Pi(s, u, "xOrigin", h, C), Pi(s, u, "yOrigin", c, r), Pi(s, u, "xOffset", d, u.xOffset), Pi(s, u, "yOffset", f, u.yOffset)), t.setAttribute("data-svg-origin", C + " " + r)
    }

    function ji(t, e, i) {
        var n = H(e);
        return I(parseFloat(e) + parseFloat(Mi(t, "x", i + "px", n))) + n
    }

    function qi(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }
    Ye.version = Ie.version = hi.version = "3.8.0", St = 1, e() && we();
    var Wi, Ui, Xi, Yi, Hi, Vi, Gi = Se.Power0,
        Qi = Se.Power1,
        Ki = Se.Power2,
        $i = Se.Power3,
        Zi = Se.Power4,
        Ji = Se.Linear,
        tn = Se.Quad,
        en = Se.Cubic,
        nn = Se.Quart,
        rn = Se.Quint,
        sn = Se.Strong,
        on = Se.Elastic,
        an = Se.Back,
        un = Se.SteppedEase,
        ln = Se.Bounce,
        hn = Se.Sine,
        cn = Se.Expo,
        dn = Se.Circ,
        fn = {},
        pn = 180 / Math.PI,
        Dn = Math.PI / 180,
        gn = Math.atan2,
        mn = /([A-Z])/g,
        vn = /(?:left|right|width|margin|padding|x)/i,
        yn = /[\s,\(]\S/,
        _n = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        Cn = "transform",
        xn = Cn + "Origin",
        En = "O,Moz,ms,Ms,Webkit".split(","),
        bn = function(t, e, i) {
            var n = (e || Yi).style,
                r = 5;
            if (t in n && !i) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(En[r] + t in n););
            return r < 0 ? null : (3 === r ? "ms" : 0 <= r ? En[r] : "") + t
        },
        Fn = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        wn = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        Sn = {
            clearProps: function(t, e, i, n, r) {
                if ("isFromStart" !== r.data) {
                    e = t._pt = new si(t._pt, e, i, 0, 0, Oi);
                    return e.u = n, e.pr = -10, e.tween = r, t._props.push(i), 1
                }
            }
        },
        An = [1, 0, 0, 1, 0, 0],
        Tn = {},
        kn = function(t, e) {
            var i = t._gsap || new ze(t);
            if ("x" in i && !e && !i.uncache) return i;
            var n, r, s, o, a, u, l, h, c, d, f, p, D, g, m, v, y, _, C, x, E, b, F, w, S, A = t.style,
                T = i.scaleX < 0,
                k = "deg",
                P = bi(t, xn) || "0",
                M = n = r = o = a = u = l = h = 0,
                B = s = 1;
            return i.svg = !(!t.getCTM || !Ti(t)), c = Ni(t, i.svg), i.svg && (_ = (!i.uncache || "0px 0px" === P) && !e && t.getAttribute("data-svg-origin"), Ri(t, _ || P, !!_ || i.originIsAbsolute, !1 !== i.smooth, c)), b = i.xOrigin || 0, w = i.yOrigin || 0, c !== An && (p = c[0], D = c[1], g = c[2], m = c[3], M = v = c[4], n = y = c[5], 6 === c.length ? (B = Math.sqrt(p * p + D * D), s = Math.sqrt(m * m + g * g), o = p || D ? gn(D, p) * pn : 0, (l = g || m ? gn(g, m) * pn + o : 0) && (s *= Math.abs(Math.cos(l * Dn))), i.svg && (M -= b - (b * p + w * g), n -= w - (b * D + w * m))) : (S = c[6], F = c[7], E = c[8], e = c[9], b = c[10], w = c[11], M = c[12], n = c[13], r = c[14], a = (c = gn(S, b)) * pn, c && (_ = v * (d = Math.cos(-c)) + E * (f = Math.sin(-c)), C = y * d + e * f, x = S * d + b * f, E = v * -f + E * d, e = y * -f + e * d, b = S * -f + b * d, w = F * -f + w * d, v = _, y = C, S = x), u = (c = gn(-g, b)) * pn, c && (d = Math.cos(-c), w = m * (f = Math.sin(-c)) + w * d, p = _ = p * d - E * f, D = C = D * d - e * f, g = x = g * d - b * f), o = (c = gn(D, p)) * pn, c && (_ = p * (d = Math.cos(c)) + D * (f = Math.sin(c)), C = v * d + y * f, D = D * d - p * f, y = y * d - v * f, p = _, v = C), a && 359.9 < Math.abs(a) + Math.abs(o) && (a = o = 0, u = 180 - u), B = I(Math.sqrt(p * p + D * D + g * g)), s = I(Math.sqrt(y * y + S * S)), c = gn(v, y), l = 2e-4 < Math.abs(c) ? c * pn : 0, h = w ? 1 / (w < 0 ? -w : w) : 0), i.svg && (_ = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Li(bi(t, Cn)), _ && t.setAttribute("transform", _))), 90 < Math.abs(l) && Math.abs(l) < 270 && (T ? (B *= -1, l += o <= 0 ? 180 : -180, o += o <= 0 ? 180 : -180) : (s *= -1, l += l <= 0 ? 180 : -180)), i.x = M - ((i.xPercent = M && (i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-M) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + "px", i.y = n - ((i.yPercent = n && (i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + "px", i.z = r + "px", i.scaleX = I(B), i.scaleY = I(s), i.rotation = I(o) + k, i.rotationX = I(a) + k, i.rotationY = I(u) + k, i.skewX = l + k, i.skewY = 0 + k, i.transformPerspective = h + "px", (i.zOrigin = parseFloat(P.split(" ")[2]) || 0) && (A[xn] = Pn(P)), i.xOffset = i.yOffset = 0, i.force3D = Yt.force3D, i.renderTransform = i.svg ? In : Vi ? Ln : Mn, i.uncache = 0, i
        },
        Pn = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        Mn = function(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Ln(t, e)
        },
        Bn = "0deg",
        zn = "0px",
        On = ") ",
        Ln = function(t, e) {
            var i = e || this,
                n = i.xPercent,
                r = i.yPercent,
                s = i.x,
                o = i.y,
                a = i.z,
                u = i.rotation,
                l = i.rotationY,
                h = i.rotationX,
                c = i.skewX,
                d = i.skewY,
                f = i.scaleX,
                p = i.scaleY,
                D = i.transformPerspective,
                g = i.force3D,
                m = i.target,
                v = i.zOrigin,
                y = "",
                e = "auto" === g && t && 1 !== t || !0 === g;
            !v || h === Bn && l === Bn || (i = parseFloat(l) * Dn, t = Math.sin(i), g = Math.cos(i), i = parseFloat(h) * Dn, s = ji(m, s, t * (t = Math.cos(i)) * -v), o = ji(m, o, -Math.sin(i) * -v), a = ji(m, a, g * t * -v + v)), D !== zn && (y += "perspective(" + D + On), (n || r) && (y += "translate(" + n + "%, " + r + "%) "), !e && s === zn && o === zn && a === zn || (y += a !== zn || e ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + On), u !== Bn && (y += "rotate(" + u + On), l !== Bn && (y += "rotateY(" + l + On), h !== Bn && (y += "rotateX(" + h + On), c === Bn && d === Bn || (y += "skew(" + c + ", " + d + On), 1 === f && 1 === p || (y += "scale(" + f + ", " + p + On), m.style[Cn] = y || "translate(0, 0)"
        },
        In = function(t, e) {
            var i, n, r, s, o, a = e || this,
                u = a.xPercent,
                l = a.yPercent,
                h = a.x,
                c = a.y,
                d = a.rotation,
                f = a.skewX,
                p = a.skewY,
                D = a.scaleX,
                g = a.scaleY,
                m = a.target,
                v = a.xOrigin,
                y = a.yOrigin,
                _ = a.xOffset,
                C = a.yOffset,
                x = a.forceCSS,
                e = parseFloat(h),
                a = parseFloat(c),
                d = parseFloat(d),
                f = parseFloat(f);
            (p = parseFloat(p)) && (f += p = parseFloat(p), d += p), d || f ? (d *= Dn, f *= Dn, i = Math.cos(d) * D, n = Math.sin(d) * D, r = Math.sin(d - f) * -g, s = Math.cos(d - f) * g, f && (p *= Dn, o = Math.tan(f - p), r *= o = Math.sqrt(1 + o * o), s *= o, p && (o = Math.tan(p), i *= o = Math.sqrt(1 + o * o), n *= o)), i = I(i), n = I(n), r = I(r), s = I(s)) : (i = D, s = g, n = r = 0), (e && !~(h + "").indexOf("px") || a && !~(c + "").indexOf("px")) && (e = Mi(m, "x", h, "px"), a = Mi(m, "y", c, "px")), (v || y || _ || C) && (e = I(e + v - (v * i + y * r) + _), a = I(a + y - (v * n + y * s) + C)), (u || l) && (e = I(e + u / 100 * (o = m.getBBox()).width), a = I(a + l / 100 * o.height)), m.setAttribute("transform", o = "matrix(" + i + "," + n + "," + r + "," + s + "," + e + "," + a + ")"), x && (m.style[Cn] = o)
        };
    f("padding,margin,Width,Radius", function(e, i) {
        var t = "Right",
            n = "Bottom",
            r = "Left",
            a = (i < 3 ? ["Top", t, n, r] : ["Top" + r, "Top" + t, n + t, n + r]).map(function(t) {
                return i < 2 ? e + t : "border" + t + e
            });
        Sn[1 < i ? "border" + e : e] = function(e, t, i, n, r) {
            var s, o;
            if (arguments.length < 4) return s = a.map(function(t) {
                return Bi(e, t, i)
            }), 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
            s = (n + "").split(" "), o = {}, a.forEach(function(t, e) {
                return o[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
            }), e.init(t, o, r)
        }
    });
    var Nn, Rn = {
        name: "css",
        register: Fi,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, i, n, r) {
            var s, o, a, u, l, h, c, d, f, p, D, g, m, v, y, _, C, x, E, b, F, w, S = this._props,
                A = t.style,
                T = i.vars.startAt;
            for (l in Xi || Fi(), e)
                if ("autoRound" !== l && (o = e[l], !pe[l] || !Ne(l, e, i, n, t, r)))
                    if (x = typeof o, C = Sn[l], "function" === x && (x = typeof(o = o.call(i, n, t, r))), "string" === x && ~o.indexOf("random(") && (o = tt(o)), C) C(this, t, l, o, i) && (m = 1);
                    else if ("--" === l.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(l) + "").trim(), o += "", Ee.lastIndex = 0, Ee.test(s) || (h = H(s), c = H(o)), c ? h !== c && (s = Mi(t, l, s, c) + c) : h && (o += h), this.add(A, "setProperty", s, o, n, r, 0, 0, l), S.push(l);
            else if ("undefined" !== x) {
                if (T && l in T ? (s = "function" == typeof T[l] ? T[l].call(i, n, t, r) : T[l], l in Yt.units && !H(s) && (s += Yt.units[l]), "=" === ((s = k(s) && ~s.indexOf("random(") ? tt(s) : s) + "").charAt(1) && (s = Bi(t, l))) : s = Bi(t, l), u = parseFloat(s), (d = "string" === x && "=" === o.charAt(1) ? +(o.charAt(0) + "1") : 0) && (o = o.substr(2)), a = parseFloat(o), l in _n && ("autoAlpha" === l && Pi(this, A, "visibility", (u = 1 === u && "hidden" === Bi(t, "visibility") && a ? 0 : u) ? "inherit" : "hidden", a ? "inherit" : "hidden", !a), "scale" !== l && "transform" !== l && ~(l = _n[l]).indexOf(",") && (l = l.split(",")[0])), f = l in fn)
                    if (p || ((D = t._gsap).renderTransform && !e.parseTransform || kn(t, e.parseTransform), g = !1 !== e.smoothOrigin && D.smooth, (p = this._pt = new si(this._pt, A, Cn, 0, 1, D.renderTransform, D, 0, -1)).dep = 1), "scale" === l) this._pt = new si(this._pt, D, "scaleY", D.scaleY, (d ? d * a : a - D.scaleY) || 0), S.push("scaleY", l), l += "X";
                    else {
                        if ("transformOrigin" === l) {
                            w = F = b = void 0, b = (E = o).split(" "), F = b[0], w = b[1] || "50%", "top" !== F && "bottom" !== F && "left" !== w && "right" !== w || (E = F, F = w, w = E), b[0] = wn[F] || F, b[1] = wn[w] || w, o = b.join(" "), D.svg ? Ri(t, o, 0, g, 0, this) : ((c = parseFloat(o.split(" ")[2]) || 0) !== D.zOrigin && Pi(this, D, "zOrigin", D.zOrigin, c), Pi(this, A, l, Pn(s), Pn(o)));
                            continue
                        }
                        if ("svgOrigin" === l) {
                            Ri(t, o, 1, g, 0, this);
                            continue
                        }
                        if (l in Tn) {
                            v = this, y = D, _ = l, C = u, x = d, w = F = E = void 0, E = 360, F = k(b = o), w = parseFloat(b) * (F && ~b.indexOf("rad") ? pn : 1), w = C + (x = x ? w * x : w - C) + "deg", F && ("short" === (b = b.split("_")[1]) && (x %= E) != x % 180 && (x += x < 0 ? E : -E), "cw" === b && x < 0 ? x = (x + 36e9) % E - ~~(x / E) * E : "ccw" === b && 0 < x && (x = (x - 36e9) % E - ~~(x / E) * E)), v._pt = x = new si(v._pt, y, _, C, x, di), x.e = w, x.u = "deg", v._props.push(_);
                            continue
                        }
                        if ("smoothOrigin" === l) {
                            Pi(this, D, "smooth", D.smooth, o);
                            continue
                        }
                        if ("force3D" === l) {
                            D[l] = o;
                            continue
                        }
                        if ("transform" === l) {
                            ! function(t, e, i) {
                                var n, r, s, o, a, u, l = qi({}, i._gsap),
                                    h = i.style;
                                for (r in l.svg ? (s = i.getAttribute("transform"), i.setAttribute("transform", ""), h[Cn] = e, n = kn(i, 1), ki(i, Cn), i.setAttribute("transform", s)) : (s = getComputedStyle(i)[Cn], h[Cn] = e, n = kn(i, 1), h[Cn] = s), fn)(s = l[r]) !== (a = n[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (o = H(s) !== (u = H(a)) ? Mi(i, r, s, u) : parseFloat(s), a = parseFloat(a), t._pt = new si(t._pt, n, r, o, a - o, ci), t._pt.u = u || 0, t._props.push(r));
                                qi(n, l)
                            }(this, o, t);
                            continue
                        }
                    }
                else l in A || (l = bn(l) || l);
                if (f || (a || 0 === a) && (u || 0 === u) && !yn.test(o) && l in A) a = a || 0, (h = (s + "").substr((u + "").length)) !== (c = H(o) || (l in Yt.units ? Yt.units[l] : h)) && (u = Mi(t, l, s, c)), this._pt = new si(this._pt, f ? D : A, l, u, d ? d * a : a - u, f || "px" !== c && "zIndex" !== l || !1 === e.autoRound ? ci : pi), this._pt.u = c || 0, h !== c && "%" !== c && (this._pt.b = s, this._pt.r = fi);
                else if (l in A) zi.call(this, t, l, s, o);
                else {
                    if (!(l in t)) {
                        P(l, o);
                        continue
                    }
                    this.add(t, l, s || t[l], o, n, r)
                }
                S.push(l)
            }
            m && ri(this)
        },
        get: Bi,
        aliases: _n,
        getSetter: function(t, e, i) {
            var n = _n[e];
            return (e = n && n.indexOf(",") < 0 ? n : e) in fn && e !== xn && (t._gsap.x || Bi(t, "x")) ? i && Hi === i ? "scale" === e ? _i : yi : (Hi = i || {}) && ("scale" === e ? Ci : xi) : t.style && !r(t.style[e]) ? mi : ~e.indexOf("-") ? vi : ni(t, e)
        },
        core: {
            _removeProperty: ki,
            _getMatrix: Ni
        }
    };
    hi.utils.checkPrefix = bn, Nn = f("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (qn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        fn[t] = 1
    }), f(qn, function(t) {
        Yt.units[t] = "deg", Tn[t] = 1
    }), _n[Nn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + qn, f("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        t = t.split(":");
        _n[t[1]] = Nn[t[0]]
    }), f("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        Yt.units[t] = "px"
    }), hi.registerPlugin(Rn);
    var jn = hi.registerPlugin(Rn) || hi,
        qn = jn.core.Tween;
    t.Back = an, t.Bounce = ln, t.CSSPlugin = Rn, t.Circ = dn, t.Cubic = en, t.Elastic = on, t.Expo = cn, t.Linear = Ji, t.Power0 = Gi, t.Power1 = Qi, t.Power2 = Ki, t.Power3 = $i, t.Power4 = Zi, t.Quad = tn, t.Quart = nn, t.Quint = rn, t.Sine = hn, t.SteppedEase = un, t.Strong = sn, t.TimelineLite = Ie, t.TimelineMax = Ie, t.TweenLite = Ye, t.TweenMax = qn, t.default = jn, t.gsap = jn, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";
    var _ = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

    function j(t) {
        return i.getComputedStyle(t)
    }

    function q(t, e) {
        var i;
        return r(t) ? t : "string" == (i = typeof t) && !e && t ? s.call(V.querySelectorAll(t), 0) : t && "object" == i && "length" in t ? s.call(t, 0) : t ? [t] : []
    }

    function W(t) {
        return "absolute" === t.position || !0 === t.absolute
    }

    function C(t, e) {
        for (var i, n = e.length; - 1 < --n;)
            if (i = e[n], t.substr(0, i.length) === i) return i.length
    }

    function u(t, e) {
        var i = ~(t = void 0 === t ? "" : t).indexOf("++"),
            n = 1;
        return i && (t = t.split("++").join("")),
            function() {
                return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (i ? n++ : "") + "'>" : ">")
            }
    }

    function U(t, e, i) {
        var n = t.nodeType;
        if (1 === n || 9 === n || 11 === n)
            for (t = t.firstChild; t; t = t.nextSibling) U(t, e, i);
        else 3 !== n && 4 !== n || (t.nodeValue = t.nodeValue.split(e).join(i))
    }

    function X(t, e) {
        for (var i = e.length; - 1 < --i;) t.push(e[i])
    }

    function Y(t, e, i) {
        for (var n; t && t !== e;) {
            if (n = t._next || t.nextSibling) return n.textContent.charAt(0) === i;
            t = t.parentNode || t._parent
        }
    }

    function H(t, e) {
        return parseFloat(e[t]) || 0
    }

    function l(t, e, i, n, r, s, o) {
        var a, u, l, h, c, d, f, p, D, g, m, v, y = j(t),
            _ = H("paddingLeft", y),
            C = -999,
            x = H("borderBottomWidth", y) + H("borderTopWidth", y),
            E = H("borderLeftWidth", y) + H("borderRightWidth", y),
            b = H("paddingTop", y) + H("paddingBottom", y),
            F = H("paddingLeft", y) + H("paddingRight", y),
            w = .2 * H("fontSize", y),
            S = y.textAlign,
            A = [],
            T = [],
            k = [],
            P = e.wordDelimiter || " ",
            M = e.tag || (e.span ? "span" : "div"),
            y = e.type || e.split || "chars,words,lines",
            B = r && ~y.indexOf("lines") ? [] : null,
            z = ~y.indexOf("words"),
            O = ~y.indexOf("chars"),
            L = W(e),
            I = e.linesClass,
            N = ~(I || "").indexOf("++"),
            R = [];
        for (N && (I = I.split("++").join("")), l = (u = t.getElementsByTagName("*")).length, c = [], a = 0; a < l; a++) c[a] = u[a];
        if (B || L)
            for (a = 0; a < l; a++)((d = (h = c[a]).parentNode === t) || L || O && !z) && (v = h.offsetTop, B && d && Math.abs(v - C) > w && ("BR" !== h.nodeName || 0 === a) && (B.push(f = []), C = v), L && (h._x = h.offsetLeft, h._y = v, h._w = h.offsetWidth, h._h = h.offsetHeight), B && ((h._isSplit && d || !O && d || z && d || !z && h.parentNode.parentNode === t && !h.parentNode._isSplit) && (f.push(h), h._x -= _, Y(h, t, P) && (h._wordEnd = !0)), "BR" === h.nodeName && (h.nextSibling && "BR" === h.nextSibling.nodeName || 0 === a) && B.push([])));
        for (a = 0; a < l; a++) d = (h = c[a]).parentNode === t, "BR" !== h.nodeName ? (L && (D = h.style, z || d || (h._x += h.parentNode._x, h._y += h.parentNode._y), D.left = h._x + "px", D.top = h._y + "px", D.position = "absolute", D.display = "block", D.width = h._w + 1 + "px", D.height = h._h + "px"), !z && O ? h._isSplit ? (h._next = h.nextSibling, h.parentNode.appendChild(h)) : h.parentNode._isSplit ? (h._parent = h.parentNode, !h.previousSibling && h.firstChild && (h.firstChild._isFirst = !0), h.nextSibling && " " === h.nextSibling.textContent && !h.nextSibling.nextSibling && R.push(h.nextSibling), h._next = h.nextSibling && h.nextSibling._isFirst ? null : h.nextSibling, h.parentNode.removeChild(h), c.splice(a--, 1), l--) : d || (v = !h.nextSibling && Y(h.parentNode, t, P), h.parentNode._parent && h.parentNode._parent.appendChild(h), v && h.parentNode.appendChild(V.createTextNode(" ")), "span" === M && (h.style.display = "inline"), A.push(h)) : h.parentNode._isSplit && !h._isSplit && "" !== h.innerHTML ? T.push(h) : O && !h._isSplit && ("span" === M && (h.style.display = "inline"), A.push(h))) : B || L ? (h.parentNode && h.parentNode.removeChild(h), c.splice(a--, 1), l--) : z || t.appendChild(h);
        for (a = R.length; - 1 < --a;) R[a].parentNode.removeChild(R[a]);
        if (B) {
            for (L && (g = V.createElement(M), t.appendChild(g), m = g.offsetWidth + "px", v = g.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(g)), D = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
            for (p = " " === P && (!L || !z && !O), a = 0; a < B.length; a++) {
                for (f = B[a], (g = V.createElement(M)).style.cssText = "display:block;text-align:" + S + ";position:" + (L ? "absolute;" : "relative;"), I && (g.className = I + (N ? a + 1 : "")), k.push(g), l = f.length, u = 0; u < l; u++) "BR" !== f[u].nodeName && (h = f[u], g.appendChild(h), p && h._wordEnd && g.appendChild(V.createTextNode(" ")), L && (0 === u && (g.style.top = h._y + "px", g.style.left = _ + v + "px"), h.style.top = "0px", v && (h.style.left = h._x - v + "px")));
                0 === l ? g.innerHTML = "&nbsp;" : z || O || (function t(e) {
                    for (var i, n = q(e.childNodes), r = n.length, s = 0; s < r; s++)(i = n[s])._isSplit ? t(i) : (s && 3 === i.previousSibling.nodeType ? i.previousSibling.nodeValue += (3 === i.nodeType ? i : i.firstChild).nodeValue : 3 !== i.nodeType && e.insertBefore(i.firstChild, i), e.removeChild(i))
                }(g), U(g, String.fromCharCode(160), " ")), L && (g.style.width = m, g.style.height = h._h + "px"), t.appendChild(g)
            }
            t.style.cssText = D
        }
        L && (o > t.clientHeight && (t.style.height = o - b + "px", t.clientHeight < o && (t.style.height = o + x + "px")), s > t.clientWidth && (t.style.width = s - F + "px", t.clientWidth < s && (t.style.width = s + E + "px"))), X(i, A), z && X(n, T), X(r, k)
    }

    function h(t, e, i, n) {
        var r, s, o = q(t.childNodes),
            a = o.length,
            u = W(e);
        if (3 !== t.nodeType || 1 < a) {
            for (e.absolute = !1, r = 0; r < a; r++) 3 === (s = o[r]).nodeType && !/\S+/.test(s.nodeValue) || (u && 3 !== s.nodeType && "inline" === j(s).display && (s.style.display = "inline-block", s.style.position = "relative"), s._isSplit = !0, h(s, e, i, n));
            return e.absolute = u, t._isSplit = !0, 0
        }! function(t, e, i, n) {
            var r, s, o, a, u, l, h, c = e.tag || (e.span ? "span" : "div"),
                d = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
                f = W(e),
                p = e.wordDelimiter || " ",
                D = " " !== p ? "" : f ? "&#173; " : " ",
                g = "</" + c + ">",
                m = 1,
                v = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : C : null,
                y = V.createElement("div");
            for ((f = t.parentNode).insertBefore(y, t), y.textContent = t.nodeValue, f.removeChild(t), y = -1 !== (r = function t(e) {
                    var i = e.nodeType,
                        n = "";
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += t(e)
                    } else if (3 === i || 4 === i) return e.nodeValue;
                    return n
                }(t = y)).indexOf("<"), !1 !== e.reduceWhiteSpace && (r = r.replace(E, " ").replace(x, "")), u = (r = y ? r.split("<").join("{{LT}}") : r).length, s = (" " === r.charAt(0) ? D : "") + i(), o = 0; o < u; o++)
                if (l = r.charAt(o), v && (h = v(r.substr(o), e.specialChars))) l = r.substr(o, h || 1), s += d && " " !== l ? n() + l + "</" + c + ">" : l, o += h - 1;
                else if (l === p && r.charAt(o - 1) !== p && o) {
                for (s += m ? g : "", m = 0; r.charAt(o + 1) === p;) s += D, o++;
                o === u - 1 ? s += D : ")" !== r.charAt(o + 1) && (s += D + i(), m = 1)
            } else "{" === l && "{{LT}}" === r.substr(o, 6) ? (s += d ? n() + "{{LT}}</" + c + ">" : "{{LT}}", o += 5) : 55296 <= l.charCodeAt(0) && l.charCodeAt(0) <= 56319 || 65024 <= r.charCodeAt(o + 1) && r.charCodeAt(o + 1) <= 65039 ? (a = ((r.substr(o, 12).split(_) || [])[1] || "").length || 2, s += d && " " !== l ? n() + r.substr(o, a) + "</" + c + ">" : r.substr(o, a), o += a - 1) : s += d && " " !== l ? n() + l + "</" + c + ">" : l;
            t.outerHTML = s + (m ? g : ""), y && U(f, "{{LT}}", "<")
        }(t, e, i, n)
    }
    var V, i, n, x = /(?:\r|\n|\t\t)/g,
        E = /(?:\s\s+)/g,
        r = Array.isArray,
        s = [].slice,
        e = ((e = o.prototype).split = function(t) {
            this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
            for (var e, i, n, r = this.elements.length, s = t.tag || (t.span ? "span" : "div"), o = u(t.wordsClass, s), a = u(t.charsClass, s); - 1 < --r;) n = this.elements[r], this._originals[r] = n.innerHTML, e = n.clientHeight, i = n.clientWidth, h(n, t, o, a), l(n, t, this.chars, this.words, this.lines, i, e);
            return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
        }, e.revert = function() {
            var i = this._originals;
            if (!i) throw "revert() call wasn't scoped properly.";
            return this.elements.forEach(function(t, e) {
                return t.innerHTML = i[e]
            }), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
        }, o.create = function(t, e) {
            return new o(t, e)
        }, o);

    function o(t, e) {
        n || (V = document, i = window, n = 1), this.elements = q(t), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
    }
    e.version = "3.0.0", t.SplitText = e, t.default = e, Object.defineProperty(t, "__esModule", {
        value: !0
    })
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";

    function Tt(t) {
        return t
    }

    function kt(t) {
        return ce(t)[0] || (we(t) ? console.warn("Element not found:", t) : null)
    }

    function f(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function n() {
        return "undefined" != typeof window
    }

    function r() {
        return oe || n() && (oe = window.gsap) && oe.registerPlugin && oe
    }

    function Pt(t) {
        return !!~p.indexOf(t)
    }

    function Mt(t, e) {
        return ~xe.indexOf(t) && xe[xe.indexOf(t) + 1][e]
    }

    function Bt(e, t) {
        var i = t.s,
            n = t.sc,
            r = S.indexOf(e),
            t = n === Re.sc ? 1 : 2;
        return ~r || (r = S.push(e) - 1), S[r + t] || (S[r + t] = Mt(e, i) || (Pt(e) ? n : function(t) {
            return arguments.length ? e[i] = t : e[i]
        }))
    }

    function zt(t) {
        return Mt(t, "getBoundingClientRect") || (Pt(t) ? function() {
            return Ye.width = ae.innerWidth, Ye.height = ae.innerHeight, Ye
        } : function() {
            return re(t)
        })
    }

    function Ot(t, e) {
        e.s;
        var i, n = e.d2,
            r = e.d,
            e = e.a;
        return (i = "scroll" + n) && (e = Mt(t, i)) ? e() - zt(t)()[r] : Pt(t) ? (he[i] || le[i]) - (ae["inner" + n] || le["client" + n] || he["client" + n]) : t[i] - t["offset" + n]
    }

    function s(t, e) {
        for (var i = 0; i < E.length; i += 3) e && !~e.indexOf(E[i + 1]) || t(E[i], E[i + 1], E[i + 2])
    }

    function Lt(t) {
        return "function" == typeof t
    }

    function It(t) {
        return "number" == typeof t
    }

    function Nt(t) {
        return "object" == typeof t
    }

    function o(t) {
        return Lt(t) && t()
    }

    function a(i, n) {
        return function() {
            var t = o(i),
                e = o(n);
            return function() {
                o(t), o(e)
            }
        }
    }

    function Rt(t, e, i) {
        return t && t.progress(e ? 0 : 1) && i && t.pause()
    }

    function jt(t, e) {
        e = e(t);
        e && e.totalTime && (t.callbackAnimation = e)
    }

    function qt(t) {
        return ae.getComputedStyle(t)
    }

    function Wt(t, e) {
        for (var i in e) i in t || (t[i] = e[i]);
        return t
    }

    function Ut(t, e) {
        e = e.d2;
        return t["offset" + e] || t["client" + e] || 0
    }

    function Xt(t) {
        var e, i = [],
            n = t.labels,
            r = t.duration();
        for (e in n) i.push(n[e] / r);
        return i
    }

    function Yt(n) {
        var r = oe.utils.snap(n),
            s = Array.isArray(n) && n.slice(0).sort(function(t, e) {
                return t - e
            });
        return s ? function(t, e) {
            var i;
            if (!e) return r(t);
            if (0 < e) {
                for (t -= 1e-4, i = 0; i < s.length; i++)
                    if (s[i] >= t) return s[i];
                return s[i - 1]
            }
            for (i = s.length, t += 1e-4; i--;)
                if (s[i] <= t) return s[i];
            return s[0]
        } : function(t, e) {
            var i = r(t);
            return !e || Math.abs(i - t) < .001 || i - t < 0 == e < 0 ? i : r(e < 0 ? t - n : t + n)
        }
    }

    function u(e, i, t, n) {
        return t.split(",").forEach(function(t) {
            return e(i, t, n)
        })
    }

    function Ht(t, e, i) {
        return t.addEventListener(e, i, {
            passive: !0
        })
    }

    function Vt(t, e, i) {
        return t.removeEventListener(e, i)
    }

    function Gt(t, e) {
        var i, n;
        return we(t) && (n = ~(i = t.indexOf("=")) ? (t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0, ~i && (t.indexOf("%") > i && (n *= e / 100), t = t.substr(0, i - 1)), t = n + (t in z ? z[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)), t
    }

    function Qt(t, e, i, n, r, s, o, a) {
        var u = r.startColor,
            l = r.endColor,
            h = r.fontSize,
            c = r.indent,
            d = r.fontWeight,
            f = ue.createElement("div"),
            p = Pt(i) || "fixed" === Mt(i, "pinType"),
            D = -1 !== t.indexOf("scroller"),
            r = p ? he : i,
            i = -1 !== t.indexOf("start"),
            l = i ? u : l,
            d = "border-color:" + l + ";font-size:" + h + ";color:" + l + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return d += "position:" + ((D || a) && p ? "fixed;" : "absolute;"), !D && !a && p || (d += (n === Re ? M : B) + ":" + (s + parseFloat(c)) + "px;"), o && (d += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), f._isStart = i, f.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), f.style.cssText = d, f.innerText = e || 0 === e ? t + "-" + e : t, r.children[0] ? r.insertBefore(f, r.children[0]) : r.appendChild(f), f._offset = f["offset" + n.op.d2], v(f, 0, n, i), f
    }

    function l() {
        return 20 < Ee() - be && e()
    }

    function Kt() {
        var t = Ee();
        be !== t ? (e(), be || N("scrollStart"), be = t) : m = m || g(e)
    }

    function $t() {
        return !pe && !b && !ue.fullscreenElement && D.restart(!0)
    }

    function h(t) {
        var e, i = oe.ticker.frame,
            n = [],
            r = 0;
        if (F !== i || Ce) {
            for (q(); r < I.length; r += 4)(e = ae.matchMedia(I[r]).matches) !== I[r + 3] && ((I[r + 3] = e) ? n.push(r) : q(1, I[r]) || Lt(I[r + 2]) && I[r + 2]());
            for (j(), r = 0; r < n.length; r++) e = n[r], _e = I[e], I[e + 2] = I[e + 1](t);
            _e = 0, d && c(0, 1), F = i, N("matchMedia")
        }
    }

    function Zt() {
        return Vt(V, "scrollEnd", Zt) || c(!0)
    }

    function i() {
        return S.forEach(function(t) {
            return "function" == typeof t && (t.rec = 0)
        })
    }

    function Jt(t, e, i, n) {
        if (t.parentNode !== e) {
            for (var r, s = U.length, o = e.style, a = t.style; s--;) o[r = U[s]] = i[r];
            o.position = "absolute" === i.position ? "absolute" : "relative", "inline" === i.display && (o.display = "inline-block"), a[B] = a[M] = "auto", o.overflow = "visible", o.boxSizing = "border-box", o[Ae] = Ut(t, Ne) + Ie, o[Te] = Ut(t, Re) + Ie, o[ze] = a[Oe] = a.top = a[P] = "0", se(n), a[Ae] = a.maxWidth = i[Ae], a[Te] = a.maxHeight = i[Te], a[ze] = i[ze], t.parentNode.insertBefore(e, t), e.appendChild(t)
        }
    }

    function te(t) {
        for (var e = X.length, i = t.style, n = [], r = 0; r < e; r++) n.push(X[r], i[X[r]]);
        return n.t = t, n
    }

    function ee(t, e, i, n, r, s, o, a, u, l, h, c, d) {
        Lt(t) && (t = t(a)), we(t) && "max" === t.substr(0, 3) && (t = c + ("=" === t.charAt(4) ? Gt("0" + t.substr(3), i) : 0));
        var f, p, D, g, m = d ? d.time() : 0;
        return d && d.seek(0), It(t) ? o && v(o, i, n, !0) : (Lt(e) && (e = e(a)), D = t.split(" "), p = kt(e) || he, (e = re(p) || {}) && (e.left || e.top) || "none" !== qt(p).display || (f = p.style.display, p.style.display = "block", e = re(p), f ? p.style.display = f : p.style.removeProperty("display")), f = Gt(D[0], e[n.d]), D = Gt(D[1] || "0", i), t = e[n.p] - u[n.p] - l + f + r - D, o && v(o, D, n, i - D < 20 || o._isStart && 20 < D), i -= i - D), s && (D = s._isStart, g = "scroll" + n.d2, v(s, i = t + i, n, D && 20 < i || !D && (h ? Math.max(he[g], le[g]) : s.parentNode[g]) <= i + 1), h && (u = re(o), h && (s.style[n.op.p] = u[n.op.p] - n.op.m - s._offset + Ie))), d && p && (g = re(p), d.seek(c), p = re(p), d._caScrollDist = g[n.p] - p[n.p], t = t / d._caScrollDist * c), d && d.seek(m), d ? t : Math.round(t)
    }

    function ie(t, e, i, n) {
        if (t.parentNode !== e) {
            var r, s, o = t.style;
            if (e === he) {
                for (r in t._stOrig = o.cssText, s = qt(t)) + r || H.test(r) || !s[r] || "string" != typeof o[r] || "0" === r || (o[r] = s[r]);
                o.top = i, o.left = n
            } else o.cssText = t._stOrig;
            oe.core.getCache(t).uncache = 1, e.appendChild(t)
        }
    }

    function ne(a, t) {
        function u(t, e, i, n, r) {
            var s = u.tween,
                o = e.onComplete;
            return s && s.kill(), l = Math.round(i), e[d] = t, (e.modifiers = {})[d] = function(t) {
                return (t = f(c())) !== l && t !== h && 2 < Math.abs(t - l) ? (s.kill(), u.tween = 0) : t = i + n * s.ratio + r * s.ratio * s.ratio, h = l, l = f(t)
            }, e.onComplete = function() {
                u.tween = 0, o && o.call(s)
            }, s = u.tween = oe.to(a, e)
        }
        var l, h, c = Bt(a, t),
            d = "_scroll" + t.p2;
        return a[d] = c, a.addEventListener("wheel", function() {
            return u.tween && u.tween.kill() && (u.tween = 0)
        }, {
            passive: !0
        }), u
    }

    function re(t, e) {
        return e = e && "matrix(1, 0, 0, 1, 0, 0)" !== qt(t)[_] && oe.to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1), t = t.getBoundingClientRect(), e && e.progress(0).kill(), t
    }

    function v(t, e, i, n) {
        var r = {
                display: "block"
            },
            s = i[n ? "os2" : "p2"],
            o = i[n ? "p2" : "os2"];
        t._isFlipped = n, r[i.a + "Percent"] = n ? -100 : 0, r[i.a] = n ? "1px" : 0, r["border" + s + Le] = 1, r["border" + o + Le] = 0, r[i.p] = e + "px", oe.set(t, r)
    }

    function c(t, e) {
        !be || t ? (w = !0, t = N("refreshInit"), me && V.sort(), e || q(), We.forEach(function(t) {
            return t.refresh()
        }), t.forEach(function(t) {
            return t && t.render && t.render(-1)
        }), i(), D.pause(), w = !1, N("refresh")) : Ht(V, "scrollEnd", Zt)
    }

    function e() {
        if (!w) {
            var t = We.length,
                e = Ee(),
                i = 50 <= e - A,
                n = t && We[0].scroll();
            if (Xe = n < W ? -1 : 1, W = n, i && (be && !De && 200 < e - be && (be = 0, N("scrollEnd")), fe = A, A = e), Xe < 0) {
                for (ge = t; 0 < ge--;) We[ge] && We[ge].update(0, i);
                Xe = 1
            } else
                for (ge = 0; ge < t; ge++) We[ge] && We[ge].update(0, i);
            m = 0
        }
    }

    function se(t) {
        if (t) {
            var e, i, n = t.t.style,
                r = t.length,
                s = 0;
            for ((t.t._gsap || oe.core.getCache(t.t)).uncache = 1; s < r; s += 2) i = t[s + 1], e = t[s], i ? n[e] = i : n[e] && n.removeProperty(e.replace(Y, "-$1").toLowerCase())
        }
    }
    var oe, d, ae, ue, le, he, p, D, g, m, ce, de, fe, y, pe, De, _, ge, C, x, E, me, ve, b, ye, _e, F, w, Ce = 1,
        xe = [],
        S = [],
        Ee = Date.now,
        A = Ee(),
        be = 0,
        Fe = 1,
        we = function(t) {
            return "string" == typeof t
        },
        Se = Math.abs,
        T = "scrollLeft",
        k = "scrollTop",
        P = "left",
        M = "right",
        B = "bottom",
        Ae = "width",
        Te = "height",
        ke = "Right",
        Pe = "Left",
        Me = "Top",
        Be = "Bottom",
        ze = "padding",
        Oe = "margin",
        Le = "Width",
        Ie = "px",
        Ne = {
            s: T,
            p: P,
            p2: Pe,
            os: M,
            os2: ke,
            d: Ae,
            d2: Le,
            a: "x",
            sc: function(t) {
                return arguments.length ? ae.scrollTo(t, Re.sc()) : ae.pageXOffset || ue[T] || le[T] || he[T] || 0
            }
        },
        Re = {
            s: k,
            p: "top",
            p2: Me,
            os: B,
            os2: Be,
            d: Te,
            d2: "Height",
            a: "y",
            op: Ne,
            sc: function(t) {
                return arguments.length ? ae.scrollTo(Ne.sc(), t) : ae.pageYOffset || ue[k] || le[k] || he[k] || 0
            }
        },
        je = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        qe = {
            toggleActions: "play",
            anticipatePin: 0
        },
        z = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        We = [],
        Ue = {},
        O = {},
        L = [],
        I = [],
        N = function(t) {
            return O[t] && O[t].map(function(t) {
                return t()
            }) || L
        },
        R = [],
        j = function(t) {
            for (var e = 0; e < R.length; e += 5) t && R[e + 4] !== t || (R[e].style.cssText = R[e + 1], R[e].getBBox && R[e].setAttribute("transform", R[e + 2] || ""), R[e + 3].uncache = 1)
        },
        q = function(t, e) {
            var i;
            for (ge = 0; ge < We.length; ge++) i = We[ge], e && i.media !== e || (t ? i.kill(1) : i.revert());
            e && j(e), e || N("revert")
        },
        W = 0,
        Xe = 1,
        U = [P, "top", B, M, Oe + Be, Oe + ke, Oe + Me, Oe + Pe, "display", "flexShrink", "float", "zIndex", "grid-column-start", "grid-column-end", "grid-row-start", "grid-row-end", "grid-area", "justify-self", "align-self", "place-self"],
        X = U.concat([Ae, Te, "boxSizing", "max" + Le, "maxHeight", "position", Oe, ze, ze + Me, ze + ke, ze + Be, ze + Pe]),
        Y = /([A-Z])/g,
        Ye = {
            left: 0,
            top: 0
        },
        H = /(?:webkit|moz|length|cssText|inset)/i;
    Ne.op = Re;
    var V = (He.prototype.init = function(m, v) {
        var d, n, c, y, _, C, x, E, b, F, w, S, A, T, k, P, M, f, B, z, p, O, D, g, L, I, N, t, R, j, q, W, U, X, Y, H, r, V, G, Q, K, $, Z, J, tt, e, et, it, nt, rt, i, st, ot, at, ut, lt, ht, s, ct, dt, ft, pt, Dt, gt, o, mt, vt, yt, _t, a, u, l, h, Ct, xt, Et, bt, Ft, wt, St, At;
        this.progress = this.start = 0, this.vars && this.kill(1), Fe ? (Y = (m = Wt(we(m) || It(m) || m.nodeType ? {
            trigger: m
        } : m, qe)).onUpdate, H = m.toggleClass, r = m.id, V = m.onToggle, G = m.onRefresh, Q = m.scrub, K = m.trigger, $ = m.pin, Z = m.pinSpacing, J = m.invalidateOnRefresh, tt = m.anticipatePin, e = m.onScrubComplete, et = m.onSnapComplete, it = m.once, nt = m.snap, rt = m.pinReparent, i = m.pinSpacer, st = m.containerAnimation, ot = m.fastScrollEnd, at = m.preventOverlaps, ut = m.horizontal || m.containerAnimation && !1 !== m.horizontal ? Ne : Re, lt = !Q && 0 !== Q, ht = kt(m.scroller || ae), s = oe.core.getCache(ht), ct = Pt(ht), dt = "fixed" === ("pinType" in m ? m.pinType : Mt(ht, "pinType") || ct && "fixed"), ft = [m.onEnter, m.onLeave, m.onEnterBack, m.onLeaveBack], pt = lt && m.toggleActions.split(" "), h = ("markers" in m ? m : qe).markers, Dt = !ct && parseFloat(qt(ht)["border" + ut.p2 + Le]) || 0, gt = this, o = m.onRefreshInit && function() {
            return m.onRefreshInit(gt)
        }, bt = ht, Ft = ct, wt = ut.d, St = ut.d2, At = ut.a, mt = (At = Mt(bt, "getBoundingClientRect")) ? function() {
            return At()[wt]
        } : function() {
            return (Ft ? ae["inner" + St] : bt["client" + St]) || 0
        }, Et = ht, vt = !ct || ~xe.indexOf(Et) ? zt(Et) : function() {
            return Ye
        }, yt = 0, _t = Bt(ht, ut), gt.media = _e, tt *= 45, gt.scroller = ht, gt.scroll = st ? st.time.bind(st) : _t, y = _t(), gt.vars = m, v = v || m.animation, "refreshPriority" in m && (me = 1), s.tweenScroll = s.tweenScroll || {
            top: ne(ht, Re),
            left: ne(ht, Ne)
        }, gt.tweenTo = d = s.tweenScroll[ut.p], v && (v.vars.lazy = !1, v._initted || !1 !== v.vars.immediateRender && !1 !== m.immediateRender && v.render(0, !0, !0), gt.animation = v.pause(), v.scrollTrigger = gt, (t = It(Q) && Q) && (N = oe.to(v, {
            ease: "power3",
            duration: t,
            onComplete: function() {
                return e && e(gt)
            }
        })), L = 0, r = r || v.vars.id), We.push(gt), nt && (Nt(nt) && !nt.push || (nt = {
            snapTo: nt
        }), "scrollBehavior" in he.style && oe.set(ct ? [he, le] : ht, {
            scrollBehavior: "auto"
        }), c = Lt(nt.snapTo) ? nt.snapTo : "labels" === nt.snapTo ? (xt = v, function(t) {
            return oe.utils.snap(Xt(xt), t)
        }) : "labelsDirectional" === nt.snapTo ? (Ct = v, function(t, e) {
            return Yt(Xt(Ct))(t, e.direction)
        }) : !1 !== nt.directional ? function(t, e) {
            return Yt(nt.snapTo)(t, e.direction)
        } : oe.utils.snap(nt.snapTo), R = Nt(R = nt.duration || {
            min: .1,
            max: 2
        }) ? de(R.min, R.max) : de(R, R), j = oe.delayedCall(nt.delay || t / 2 || .1, function() {
            var t, e, i, n, r, s, o, a, u, l, h;
            Math.abs(gt.getVelocity()) < 10 && !De && yt !== _t() ? (e = ((t = v && !lt ? v.totalProgress() : gt.progress) - I) / (Ee() - fe) * 1e3 || 0, i = oe.utils.clamp(-gt.progress, 1 - gt.progress, Se(e / 2) * e / .185), n = gt.progress + (!1 === nt.inertia ? 0 : i), r = de(0, 1, c(n, gt)), s = _t(), o = Math.round(C + r * S), a = nt.onStart, u = nt.onInterrupt, l = nt.onComplete, h = d.tween, s <= x && C <= s && o !== s && (h && !h._initted && h.data <= Se(o - s) || (!1 === nt.inertia && (i = r - gt.progress), d(o, {
                duration: R(Se(.185 * Math.max(Se(n - t), Se(r - t)) / e / .05 || 0)),
                ease: nt.ease || "power3",
                data: Se(o - s),
                onInterrupt: function() {
                    return j.restart(!0) && u && u(gt)
                },
                onComplete: function() {
                    yt = _t(), L = I = v && !lt ? v.totalProgress() : gt.progress, et && et(gt), l && l(gt)
                }
            }, s, i * S, o - s - i * S), a && a(gt, d.tween)))) : gt.isActive && j.restart(!0)
        }).pause()), r && (Ue[r] = gt), K = gt.trigger = kt(K || $), $ = !0 === $ ? K : kt($), we(H) && (H = {
            targets: K,
            className: H
        }), $ && (!1 === Z || Z === Oe || (Z = !(!Z && "flex" === qt($.parentNode).display) && ze), gt.pin = $, !1 !== m.force3D && oe.set($, {
            force3D: !0
        }), (n = oe.core.getCache($)).spacer ? A = n.pinState : (i && ((i = kt(i)) && !i.nodeType && (i = i.current || i.nativeElement), n.spacerIsNative = !!i, i && (n.spacerState = te(i))), n.spacer = P = i || ue.createElement("div"), P.classList.add("pin-spacer"), r && P.classList.add("pin-spacer-" + r), n.pinState = A = te($)), gt.spacer = P = n.spacer, l = qt($), p = l[Z + ut.os2], M = oe.getProperty($), f = oe.quickSetter($, ut.a, Ie), Jt($, P, l), k = te($)), h && (l = Nt(h) ? Wt(h, je) : je, F = Qt("scroller-start", r, ht, ut, l, 0), w = Qt("scroller-end", r, ht, ut, l, 0, F), h = F["offset" + ut.op.d2], E = Qt("start", r, ht, ut, l, h, 0, st), b = Qt("end", r, ht, ut, l, h, 0, st), st && (X = oe.quickSetter([E, b], ut.a, Ie)), dt || xe.length && !0 === Mt(ht, "fixedMarkers") || (h = qt(l = ct ? he : ht).position, l.style.position = "absolute" === h || "fixed" === h ? h : "relative", oe.set([F, w], {
            force3D: !0
        }), D = oe.quickSetter(F, ut.a, Ie), g = oe.quickSetter(w, ut.a, Ie))), st && (a = st.vars.onUpdate, u = st.vars.onUpdateParams, st.eventCallback("onUpdate", function() {
            gt.update(0, 0, 1), a && a.apply(u || [])
        })), gt.previous = function() {
            return We[We.indexOf(gt) - 1]
        }, gt.next = function() {
            return We[We.indexOf(gt) + 1]
        }, gt.revert = function(t) {
            var e = !1 !== t || !gt.enabled,
                t = pe;
            e !== gt.isReverted && (e && (gt.scroll.rec || (gt.scroll.rec = _t()), W = Math.max(_t(), gt.scroll.rec || 0), q = gt.progress, U = v && v.progress()), E && [E, b, F, w].forEach(function(t) {
                return t.style.display = e ? "none" : "block"
            }), e && (pe = 1), gt.update(e), pe = t, $ && (e ? function(t, e, i) {
                se(i);
                i = t._gsap;
                i.spacerIsNative ? se(i.spacerState) : t.parentNode !== e || (i = e.parentNode) && (i.insertBefore(t, e), i.removeChild(e))
            }($, P, A) : rt && gt.isActive || Jt($, P, qt($), O)), gt.isReverted = e)
        }, gt.refresh = function(t, e) {
            if (!pe && gt.enabled || e)
                if ($ && t && be) Ht(He, "scrollEnd", Zt);
                else {
                    pe = 1, N && N.pause(), J && v && v.progress(0).invalidate(), gt.isReverted || gt.revert();
                    for (var i, n, r, s, o, a, u = mt(), l = vt(), h = st ? st.duration() : Ot(ht, ut), c = 0, d = 0, f = m.end, e = m.endTrigger || K, p = m.start || (0 !== m.start && K ? $ ? "0 0" : "0 100%" : 0), D = m.pinnedContainer && kt(m.pinnedContainer), t = K && Math.max(0, We.indexOf(gt)) || 0, g = t; g--;)(r = We[g]).end || r.refresh(0, 1) || (pe = 1), !(s = r.pin) || s !== K && s !== $ || r.isReverted || ((a = a || []).unshift(r), r.revert());
                    for (Lt(p) && (p = p(gt)), C = ee(p, K, u, ut, _t(), E, F, gt, l, Dt, dt, h, st) || ($ ? -.001 : 0), Lt(f) && (f = f(gt)), we(f) && !f.indexOf("+=") && (~f.indexOf(" ") ? f = (we(p) ? p.split(" ")[0] : "") + f : (c = Gt(f.substr(2), u), f = we(p) ? p : C + c, e = K)), x = Math.max(C, ee(f || (e ? "100% 0" : h), e, u, ut, _t() + c, b, w, gt, l, Dt, dt, h, st)) || -.001, S = x - C || (C -= .01) && .001, c = 0, g = t; g--;)(s = (r = We[g]).pin) && r.start - r._pinPush < C && !st && (i = r.end - r.start, s !== K && s !== D || It(p) || (c += i), s === $ && (d += i));
                    if (C += c, x += c, gt._pinPush = d, E && c && ((i = {})[ut.a] = "+=" + c, D && (i[ut.p] = "-=" + _t()), oe.set([E, b], i)), $) i = qt($), l = ut === Re, t = _t(), B = parseFloat(M(ut.a)) + d, !h && 1 < x && ((ct ? he : ht).style["overflow-" + ut.a] = "scroll"), Jt($, P, i), k = te($), n = re($, !0), h = dt && Bt(ht, l ? Ne : Re)(), Z && ((O = [Z + ut.os2, S + d + Ie]).t = P, (g = Z === ze ? Ut($, ut) + S + d : 0) && O.push(ut.d, g + Ie), se(O), dt && _t(W)), dt && ((o = {
                        top: n.top + (l ? t - C : h) + Ie,
                        left: n.left + (l ? h : t - C) + Ie,
                        boxSizing: "border-box",
                        position: "fixed"
                    })[Ae] = o.maxWidth = Math.ceil(n.width) + Ie, o[Te] = o.maxHeight = Math.ceil(n.height) + Ie, o[Oe] = o[Oe + Me] = o[Oe + ke] = o[Oe + Be] = o[Oe + Pe] = "0", o[ze] = i[ze], o[ze + Me] = i[ze + Me], o[ze + ke] = i[ze + ke], o[ze + Be] = i[ze + Be], o[ze + Pe] = i[ze + Pe], T = function(t, e, i) {
                        for (var n, r = [], s = t.length, o = i ? 8 : 0; o < s; o += 2) n = t[o], r.push(n, n in e ? e[n] : t[o + 1]);
                        return r.t = t.t, r
                    }(A, o, rt)), v ? (o = v._initted, ve(1), v.render(v.duration(), !0, !0), z = M(ut.a) - B + S + d, S !== z && T.splice(T.length - 2, 2), v.render(0, !0, !0), o || v.invalidate(), ve(0)) : z = S;
                    else if (K && _t() && !st)
                        for (n = K.parentNode; n && n !== he;) n._pinOffset && (C -= n._pinOffset, x -= n._pinOffset), n = n.parentNode;
                    a && a.forEach(function(t) {
                        return t.revert(!1)
                    }), gt.start = C, gt.end = x, y = _ = _t(), st || (y < W && _t(W), gt.scroll.rec = 0), gt.revert(!1), pe = 0, v && lt && v._initted && v.progress() !== U && v.progress(U, !0).render(v.time(), !0, !0), q !== gt.progress && (v && !lt && v.totalProgress(q, !0), gt.progress = q, gt.update(0, 0, 1)), $ && Z && (P._pinOffset = Math.round(gt.progress * z)), G && G(gt)
                }
        }, gt.getVelocity = function() {
            return (_t() - _) / (Ee() - fe) * 1e3 || 0
        }, gt.endAnimation = function() {
            Rt(gt.callbackAnimation), v && (N ? N.progress(1) : v.paused() ? lt || Rt(v, gt.direction < 0, 1) : Rt(v, v.reversed()))
        }, gt.getTrailing = function(e) {
            var t = We.indexOf(gt),
                t = 0 < gt.direction ? We.slice(0, t).reverse() : We.slice(t + 1);
            return we(e) ? t.filter(function(t) {
                return t.vars.preventOverlaps === e
            }) : t
        }, gt.update = function(t, e, i) {
            var n, r, s, o, a, u, l, h, c;
            st && !i && !t || (u = gt.scroll(), c = (h = t ? 0 : (u - C) / S) < 0 ? 0 : 1 < h ? 1 : h || 0, l = gt.progress, e && (_ = y, y = st ? _t() : u, nt && (I = L, L = v && !lt ? v.totalProgress() : c)), (c = tt && !c && $ && !pe && !Ce && be && C < u + (u - _) / (Ee() - fe) * tt ? 1e-4 : c) !== l && gt.enabled && (i = (o = (n = gt.isActive = !!c && c < 1) != (!!l && l < 1)) || !!c != !!l, gt.direction = l < c ? 1 : -1, gt.progress = c, i && !pe && (r = c && !l ? 0 : 1 === c ? 1 : 1 === l ? 2 : 3, lt && (s = !o && "none" !== pt[r + 1] && pt[r + 1] || pt[r], a = v && ("complete" === s || "reset" === s || s in v))), at && o && (a || Q || !v) && (Lt(at) ? at(gt) : gt.getTrailing(at).forEach(function(t) {
                return t.endAnimation()
            })), lt || (!N || pe || Ce ? v && v.totalProgress(c, !!pe) : (N.vars.totalProgress = c, N.invalidate().restart())), $ && (t && Z && (P.style[Z + ut.os2] = p), dt ? i && (h = !t && l < c && u < x + 1 && u + 1 >= Ot(ht, ut), rt && (t || !n && !h ? ie($, P) : (e = re($, !0), l = u - C, ie($, he, e.top + (ut === Re ? l : 0) + Ie, e.left + (ut === Re ? 0 : l) + Ie))), se(n || h ? T : k), z !== S && c < 1 && n || f(B + (1 !== c || h ? 0 : z))) : f(B + z * c)), !nt || d.tween || pe || Ce || j.restart(!0), H && (o || it && c && (c < 1 || !ye)) && ce(H.targets).forEach(function(t) {
                return t.classList[n || it ? "add" : "remove"](H.className)
            }), !Y || lt || t || Y(gt), i && !pe ? (lt && (a && ("complete" === s ? v.pause().totalProgress(1) : "reset" === s ? v.restart(!0).pause() : "restart" === s ? v.restart(!0) : v[s]()), Y && Y(gt)), !o && ye || (V && o && jt(gt, V), ft[r] && jt(gt, ft[r]), it && (1 === c ? gt.kill(!1, 1) : ft[r] = 0), o || ft[r = 1 === c ? 1 : 3] && jt(gt, ft[r])), ot && !n && Math.abs(gt.getVelocity()) > (It(ot) ? ot : 2500) && (Rt(gt.callbackAnimation), N ? N.progress(1) : Rt(v, !c, 1))) : lt && Y && !pe && Y(gt)), g && (c = st ? u / st.duration() * (st._caScrollDist || 0) : u, D(c + (F._isFlipped ? 1 : 0)), g(c)), X && X(-u / st.duration() * (st._caScrollDist || 0)))
        }, gt.enable = function(t, e) {
            gt.enabled || (gt.enabled = !0, Ht(ht, "resize", $t), Ht(ht, "scroll", Kt), o && Ht(He, "refreshInit", o), !1 !== t && (gt.progress = q = 0, y = _ = yt = _t()), !1 !== e && gt.refresh())
        }, gt.getTween = function(t) {
            return t && d ? d.tween : N
        }, gt.disable = function(t, e) {
            if (gt.enabled && (!1 !== t && gt.revert(), gt.enabled = gt.isActive = !1, e || N && N.pause(), W = 0, n && (n.uncache = 1), o && Vt(He, "refreshInit", o), j && (j.pause(), d.tween && d.tween.kill() && (d.tween = 0)), !ct)) {
                for (var i = We.length; i--;)
                    if (We[i].scroller === ht && We[i] !== gt) return;
                Vt(ht, "resize", $t), Vt(ht, "scroll", Kt)
            }
        }, gt.kill = function(t, e) {
            gt.disable(t, e), N && N.kill(), r && delete Ue[r];
            var i = We.indexOf(gt);
            We.splice(i, 1), i === ge && 0 < Xe && ge--, i = 0, We.forEach(function(t) {
                return t.scroller === gt.scroller && (i = 1)
            }), i || (gt.scroll.rec = 0), v && (v.scrollTrigger = null, t && v.render(-1), e || v.kill()), E && [E, b, F, w].forEach(function(t) {
                return t.parentNode && t.parentNode.removeChild(t)
            }), $ && (n && (n.uncache = 1), i = 0, We.forEach(function(t) {
                return t.pin === $ && i++
            }), i || (n.spacer = 0))
        }, gt.enable(!1, !1), v && v.add && !S ? oe.delayedCall(.01, function() {
            return C || x || gt.refresh()
        }) && (S = .01) && (C = x = 0) : gt.refresh()) : this.update = this.refresh = this.kill = Tt
    }, He.register = function(t) {
        var e, i;
        return !d && (oe = t || r(), n() && window.document && (ae = window, ue = document, le = ue.documentElement, he = ue.body), oe && (ce = oe.utils.toArray, de = oe.utils.clamp, ve = oe.core.suppressOverwrites || Tt, oe.core.globals("ScrollTrigger", He), he)) && (g = ae.requestAnimationFrame || function(t) {
            return setTimeout(t, 16)
        }, Ht(ae, "wheel", Kt), p = [ae, ue, le, he], Ht(ue, "scroll", Kt), i = (e = he.style).borderTopStyle, e.borderTopStyle = "solid", t = re(he), Re.m = Math.round(t.top + Re.sc()) || 0, Ne.m = Math.round(t.left + Ne.sc()) || 0, i ? e.borderTopStyle = i : e.removeProperty("border-top-style"), y = setInterval(l, 200), oe.delayedCall(.5, function() {
            return Ce = 0
        }), Ht(ue, "touchcancel", Tt), Ht(he, "touchstart", Tt), u(Ht, ue, "pointerdown,touchstart,mousedown", function() {
            return De = 1
        }), u(Ht, ue, "pointerup,touchend,mouseup", function() {
            return De = 0
        }), _ = oe.utils.checkPrefix("transform"), X.push(_), d = Ee(), D = oe.delayedCall(.2, c).pause(), E = [ue, "visibilitychange", function() {
            var t = ae.innerWidth,
                e = ae.innerHeight;
            ue.hidden ? (C = t, x = e) : C === t && x === e || $t()
        }, ue, "DOMContentLoaded", c, ae, "load", function() {
            return be || c()
        }, ae, "resize", $t], s(Ht)), d
    }, He.defaults = function(t) {
        for (var e in t) qe[e] = t[e]
    }, He.kill = function() {
        Fe = 0, We.slice(0).forEach(function(t) {
            return t.kill(1)
        })
    }, He.config = function(t) {
        "limitCallbacks" in t && (ye = !!t.limitCallbacks);
        var e = t.syncInterval;
        e && clearInterval(y) || (y = e) && setInterval(l, e), "autoRefreshEvents" in t && (s(Vt), s(Ht, t.autoRefreshEvents || "none"), b = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
    }, He.scrollerProxy = function(t, e) {
        var i = kt(t),
            n = S.indexOf(i),
            t = Pt(i);
        ~n && S.splice(n, t ? 6 : 2), t ? xe.unshift(ae, e, he, e, le, e) : xe.unshift(i, e)
    }, He.matchMedia = function(t) {
        var e, i, n, r, s;
        for (i in t) n = I.indexOf(i), r = t[i], "all" === (_e = i) ? r() : (e = ae.matchMedia(i)) && (e.matches && (s = r()), ~n ? (I[n + 1] = a(I[n + 1], r), I[n + 2] = a(I[n + 2], s)) : (n = I.length, I.push(i, r, s), e.addListener ? e.addListener(h) : e.addEventListener("change", h)), I[n + 3] = e.matches), _e = 0;
        return I
    }, He.clearMatchMedia = function(t) {
        t || (I.length = 0), 0 <= (t = I.indexOf(t)) && I.splice(t, 4)
    }, He.isInViewport = function(t, e, i) {
        t = (we(t) ? kt(t) : t).getBoundingClientRect(), e = t[i ? Ae : Te] * e || 0;
        return i ? 0 < t.right - e && t.left + e < ae.innerWidth : 0 < t.bottom - e && t.top + e < ae.innerHeight
    }, He.positionInViewport = function(t, e, i) {
        var n = (t = we(t) ? kt(t) : t).getBoundingClientRect(),
            t = n[i ? Ae : Te],
            e = null == e ? t / 2 : e in z ? z[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0;
        return i ? (n.left + e) / ae.innerWidth : (n.top + e) / ae.innerHeight
    }, He);

    function He(t, e) {
        d || He.register(oe) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(t, e)
    }
    V.version = "3.8.0", V.saveStyles = function(t) {
        return t ? ce(t).forEach(function(t) {
            var e;
            t && t.style && (0 <= (e = R.indexOf(t)) && R.splice(e, 5), R.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), oe.core.getCache(t), _e))
        }) : R
    }, V.revert = function(t, e) {
        return q(!t, e)
    }, V.create = function(t, e) {
        return new V(t, e)
    }, V.refresh = function(t) {
        return t ? $t() : (d || V.register()) && c(!0)
    }, V.update = e, V.clearScrollMemory = i, V.maxScroll = function(t, e) {
        return Ot(t, e ? Ne : Re)
    }, V.getScrollFunc = function(t, e) {
        return Bt(kt(t), e ? Ne : Re)
    }, V.getById = function(t) {
        return Ue[t]
    }, V.getAll = function() {
        return We.slice(0)
    }, V.isScrolling = function() {
        return !!be
    }, V.snapDirectional = Yt, V.addEventListener = function(t, e) {
        t = O[t] || (O[t] = []);
        ~t.indexOf(e) || t.push(e)
    }, V.removeEventListener = function(t, e) {
        t = O[t], e = t && t.indexOf(e);
        0 <= e && t.splice(e, 1)
    }, V.batch = function(t, e) {
        var i, n = [],
            r = {},
            s = e.interval || .016,
            o = e.batchMax || 1e9;
        for (i in e) r[i] = "on" === i.substr(0, 2) && Lt(e[i]) && "onRefreshInit" !== i ? function(t) {
            var e = [],
                i = [],
                n = oe.delayedCall(s, function() {
                    t(e, i), e = [], i = []
                }).pause();
            return function(t) {
                e.length || n.restart(!0), e.push(t.trigger), i.push(t), o <= e.length && n.progress(1)
            }
        }(e[i]) : e[i];
        return Lt(o) && (o = o(), Ht(V, "refresh", function() {
            return o = e.batchMax()
        })), ce(t).forEach(function(t) {
            var e = {};
            for (i in r) e[i] = r[i];
            e.trigger = t, n.push(V.create(e))
        }), n
    }, V.sort = function(t) {
        return We.sort(t || function(t, e) {
            return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
        })
    }, r() && oe.registerPlugin(V), t.ScrollTrigger = V, t.default = V, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";

    function e() {
        return "undefined" != typeof window
    }

    function i() {
        return n || e() && (n = window.gsap) && n.registerPlugin && n
    }

    function h(t) {
        return Math.round(1e4 * t) / 1e4
    }

    function c(t) {
        return parseFloat(t || 0)
    }

    function f(t, e) {
        return c(t.getAttribute(e))
    }

    function p(t, e, i, n, r, s) {
        return F(Math.pow((c(i) - c(t)) * r, 2) + Math.pow((c(n) - c(e)) * s, 2))
    }

    function D(t) {
        return console.warn(t)
    }

    function g(t) {
        return "non-scaling-stroke" === t.getAttribute("vector-effect")
    }

    function d(t) {
        if (!(t = y(t)[0])) return 0;
        var e, i, n, r, s = t.tagName.toLowerCase(),
            o = t.style,
            a = 1,
            u = 1;
        g(t) && (u = t.getScreenCTM(), a = F(u.a * u.a + u.b * u.b), u = F(u.d * u.d + u.c * u.c));
        try {
            n = t.getBBox()
        } catch (t) {
            D("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
        }
        var l = n || {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            h = l.x,
            c = l.y,
            d = l.width,
            l = l.height;
        if (n && (d || l) || !b[s] || (d = f(t, b[s][0]), l = f(t, b[s][1]), "rect" !== s && "line" !== s && (d *= 2, l *= 2), "line" === s && (h = f(t, "x1"), c = f(t, "y1"), d = Math.abs(d - h), l = Math.abs(l - c))), "path" === s) n = o.strokeDasharray, o.strokeDasharray = "none", e = t.getTotalLength() || 0, a !== u && D("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), e *= (a + u) / 2, o.strokeDasharray = n;
        else if ("rect" === s) e = 2 * d * a + 2 * l * u;
        else if ("line" === s) e = p(h, c, h + d, c + l, a, u);
        else if ("polyline" === s || "polygon" === s)
            for (i = t.getAttribute("points").match(E) || [], "polygon" === s && i.push(i[0], i[1]), e = 0, r = 2; r < i.length; r += 2) e += p(i[r - 2], i[r - 1], i[r], i[r + 1], a, u) || 0;
        else "circle" !== s && "ellipse" !== s || (d = d / 2 * a, l = l / 2 * u, e = Math.PI * (3 * (d + l) - F((3 * d + l) * (d + 3 * l))));
        return e || 0
    }

    function m(t, e) {
        if (!(t = y(t)[0])) return [0, 0];
        e = e || d(t) + 1;
        var i = _.getComputedStyle(t),
            n = i.strokeDasharray || "",
            t = c(i.strokeDashoffset),
            i = n.indexOf(",");
        return e < (n = (i = i < 0 ? n.indexOf(" ") : i) < 0 ? e : c(n.substr(0, i)) || 1e-5) && (n = e), [Math.max(0, -t), Math.max(0, n - t)]
    }

    function v() {
        e() && (_ = window, x = n = i(), y = n.utils.toArray, C = -1 !== ((_.navigator || {}).userAgent || "").indexOf("Edge"))
    }
    var n, y, _, C, x, E = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        b = {
            rect: ["width", "height"],
            circle: ["r", "r"],
            ellipse: ["rx", "ry"],
            line: ["x2", "y2"]
        },
        F = Math.sqrt,
        r = {
            version: "3.2.6",
            name: "drawSVG",
            register: function(t) {
                n = t, v()
            },
            init: function(t, e) {
                if (!t.getBBox) return !1;
                x || v();
                var i, n, r, s, o, a, u, l = d(t) + 1;
                return this._style = t.style, this._target = t, e + "" == "true" ? e = "0 100%" : e ? -1 === (e + "").indexOf(" ") && (e = "0 " + e) : e = "0 0", r = e, o = (i = m(t, s = l))[0], a = (a = r.indexOf(" ")) < 0 ? (u = void 0 !== o ? o + "" : r, r) : (u = r.substr(0, a), r.substr(a + 1)), u = ~u.indexOf("%") ? c(u) / 100 * s : c(u), u = (a = ~a.indexOf("%") ? c(a) / 100 * s : c(a)) < u ? [a, u] : [u, a], this._length = h(l + 10), 0 === i[0] && 0 === u[0] ? (a = Math.max(1e-5, u[1] - l), this._dash = h(l + a), this._offset = h(l - i[1] + a), this._offsetPT = this.add(this, "_offset", this._offset, h(l - u[1] + a))) : (this._dash = h(i[1] - i[0]) || 1e-6, this._offset = h(-i[0]), this._dashPT = this.add(this, "_dash", this._dash, h(u[1] - u[0]) || 1e-5), this._offsetPT = this.add(this, "_offset", this._offset, h(-u[0]))), C && (n = _.getComputedStyle(t)).strokeLinecap !== n.strokeLinejoin && (u = c(n.strokeMiterlimit), this.add(t.style, "strokeMiterlimit", u, u + .01)), this._live = g(t) || ~(e + "").indexOf("live"), this._props.push("drawSVG"), 1
            },
            render: function(t, e) {
                var i, n, r, s = e._pt,
                    o = e._style;
                if (s) {
                    for (e._live && (i = d(e._target) + 11) !== e._length && (r = i / e._length, e._length = i, e._offsetPT.s *= r, e._offsetPT.c *= r, e._dashPT ? (e._dashPT.s *= r, e._dashPT.c *= r) : e._dash *= r); s;) s.r(t, s.d), s = s._next;
                    n = e._dash, r = e._offset, i = e._length, o.strokeDashoffset = e._offset, 1 !== t && t ? o.strokeDasharray = n + "px," + i + "px" : (n - r < .001 && i - n <= 10 && (o.strokeDashoffset = r + 1), o.strokeDasharray = r < .001 && i - n <= 10 ? "none" : r === n ? "0px, 999999px" : n + "px," + i + "px")
                }
            },
            getLength: d,
            getPosition: m
        };
    i() && n.registerPlugin(r), t.DrawSVGPlugin = r, t.default = r, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";

    function e() {
        return "undefined" != typeof window
    }

    function i() {
        return d || e() && (d = window.gsap) && d.registerPlugin && d
    }

    function a(t) {
        return "string" == typeof t
    }

    function u(t) {
        return "function" == typeof t
    }

    function p(t, e) {
        var i = "x" === e ? "Width" : "Height",
            n = "scroll" + i,
            e = "client" + i;
        return t === D || t === r || t === o ? Math.max(r[n], o[n]) - (D["inner" + i] || r[e] || o[e]) : t[n] - t["offset" + i]
    }

    function l(t, e) {
        var i = "scroll" + ("x" === e ? "Left" : "Top");
        return t === D && (null != t.pageXOffset ? i = "page" + e.toUpperCase() + "Offset" : t = null != r[i] ? r : o),
            function() {
                return t[i]
            }
    }

    function s(t, e) {
        if (!(t = g(t)[0]) || !t.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        };
        var i = t.getBoundingClientRect(),
            n = !e || e === D || e === o,
            t = n ? {
                top: r.clientTop - (D.pageYOffset || r.scrollTop || o.scrollTop || 0),
                left: r.clientLeft - (D.pageXOffset || r.scrollLeft || o.scrollLeft || 0)
            } : e.getBoundingClientRect(),
            t = {
                x: i.left - t.left,
                y: i.top - t.top
            };
        return !n && e && (t.x += l(e, "x")(), t.y += l(e, "y")()), t
    }

    function h(t, e, i, n, r) {
        return isNaN(t) || "object" == typeof t ? a(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + n - r : "max" === t ? p(e, i) - r : Math.min(p(e, i), s(t, e)[i] - r) : parseFloat(t) - r
    }

    function c() {
        d = i(), e() && d && document.body && (D = window, o = document.body, r = document.documentElement, g = d.utils.toArray, d.config({
            autoKillThreshold: 7
        }), m = d.config(), f = 1)
    }
    var d, f, D, r, o, g, m, n = {
        version: "3.8.0",
        name: "scrollTo",
        rawVars: 1,
        register: function(t) {
            d = t, c()
        },
        init: function(t, e, i, n, r) {
            f || c();
            var s = this,
                o = d.getProperty(t, "scrollSnapType");
            s.isWin = t === D, s.target = t, s.tween = i, e = function(t, e, i, n) {
                if ("object" != typeof(t = u(t) ? t(e, i, n) : t)) return a(t) && "max" !== t && "=" !== t.charAt(1) ? {
                    x: t,
                    y: t
                } : {
                    y: t
                };
                if (t.nodeType) return {
                    y: t,
                    x: t
                };
                var r, s = {};
                for (r in t) s[r] = "onAutoKill" !== r && u(t[r]) ? t[r](e, i, n) : t[r];
                return s
            }(e, n, t, r), s.vars = e, s.autoKill = !!e.autoKill, s.getX = l(t, "x"), s.getY = l(t, "y"), s.x = s.xPrev = s.getX(), s.y = s.yPrev = s.getY(), o && "none" !== o && (s.snap = 1, s.snapInline = t.style.scrollSnapType, t.style.scrollSnapType = "none"), null != e.x ? (s.add(s, "x", s.x, h(e.x, t, "x", s.x, e.offsetX || 0), n, r), s._props.push("scrollTo_x")) : s.skipX = 1, null != e.y ? (s.add(s, "y", s.y, h(e.y, t, "y", s.y, e.offsetY || 0), n, r), s._props.push("scrollTo_y")) : s.skipY = 1
        },
        render: function(t, e) {
            for (var i, n, r, s = e._pt, o = e.target, a = e.tween, u = e.autoKill, l = e.xPrev, h = e.yPrev, c = e.isWin, d = e.snap, f = e.snapInline; s;) s.r(t, s.d), s = s._next;
            i = c || !e.skipX ? e.getX() : l, r = (n = c || !e.skipY ? e.getY() : h) - h, h = i - l, l = m.autoKillThreshold, e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), u && (!e.skipX && (l < h || h < -l) && i < p(o, "x") && (e.skipX = 1), !e.skipY && (l < r || r < -l) && n < p(o, "y") && (e.skipY = 1), e.skipX && e.skipY && (a.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(a, e.vars.onAutoKillParams || []))), c ? D.scrollTo(e.skipX ? i : e.x, e.skipY ? n : e.y) : (e.skipY || (o.scrollTop = e.y), e.skipX || (o.scrollLeft = e.x)), !d || 1 !== t && 0 !== t || (n = o.scrollTop, i = o.scrollLeft, f ? o.style.scrollSnapType = f : o.style.removeProperty("scroll-snap-type"), o.scrollTop = n + 1, o.scrollLeft = i + 1, o.scrollTop = n, o.scrollLeft = i), e.xPrev = e.x, e.yPrev = e.y
        },
        kill: function(t) {
            var e = "scrollTo" === t;
            !e && "scrollTo_x" !== t || (this.skipX = 1), !e && "scrollTo_y" !== t || (this.skipY = 1)
        }
    };
    n.max = p, n.getOffset = s, n.buildGetter = l, i() && d.registerPlugin(n), t.ScrollToPlugin = n, t.default = n, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
});