var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(e) {
            var t, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
                s = r.com.greensock,
                a = 2 * Math.PI,
                o = Math.PI / 2,
                l = s._class,
                h = function(t, i) {
                    var n = l("easing." + t, function() {}, !0),
                        r = n.prototype = new e;
                    return r.constructor = n, r.getRatio = i, n
                },
                u = e.register || function() {},
                c = function(e, t, i, n) {
                    var r = l("easing." + e, {
                        easeOut: new t,
                        easeIn: new i,
                        easeInOut: new n
                    }, !0);
                    return u(r, e), r
                },
                d = function(e, t, i) {
                    this.t = e, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - e)
                },
                f = function(t, i) {
                    var n = l("easing." + t, function(e) {
                            this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        r = n.prototype = new e;
                    return r.constructor = n, r.getRatio = i, r.config = function(e) {
                        return new n(e)
                    }, n
                },
                p = c("Back", f("BackOut", function(e) {
                    return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                }), f("BackIn", function(e) {
                    return e * e * ((this._p1 + 1) * e - this._p1)
                }), f("BackInOut", function(e) {
                    return 1 > (e *= 2) ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                })),
                m = l("easing.SlowMo", function(e, t, i) {
                    t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                }, !0),
                _ = m.prototype = new e;
            return _.constructor = m, _.getRatio = function(e) {
                var t = e + (.5 - e) * this._p;
                return this._p1 > e ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
            }, m.ease = new m(.7, .7), _.config = m.config = function(e, t, i) {
                return new m(e, t, i)
            }, t = l("easing.SteppedEase", function(e) {
                e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
            }, !0), _ = t.prototype = new e, _.constructor = t, _.getRatio = function(e) {
                return 0 > e ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
            }, _.config = t.config = function(e) {
                return new t(e)
            }, i = l("easing.RoughEase", function(t) {
                t = t || {};
                for (var i, n, r, s, a, o, l = t.taper || "none", h = [], u = 0, c = 0 | (t.points || 20), f = c, p = t.randomize !== !1, m = t.clamp === !0, _ = t.template instanceof e ? t.template : null, g = "number" == typeof t.strength ? .4 * t.strength : .4; --f > -1;) i = p ? Math.random() : 1 / c * f, n = _ ? _.getRatio(i) : i, "none" === l ? r = g : "out" === l ? (s = 1 - i, r = s * s * g) : "in" === l ? r = i * i * g : .5 > i ? (s = 2 * i, r = .5 * s * s * g) : (s = 2 * (1 - i), r = .5 * s * s * g), p ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), h[u++] = {
                    x: i,
                    y: n
                };
                for (h.sort(function(e, t) {
                        return e.x - t.x
                    }), o = new d(1, 1, null), f = c; --f > -1;) a = h[f], o = new d(a.x, a.y, o);
                this._prev = new d(0, 0, 0 !== o.t ? o : o.next)
            }, !0), _ = i.prototype = new e, _.constructor = i, _.getRatio = function(e) {
                var t = this._prev;
                if (e > t.t) {
                    for (; t.next && e >= t.t;) t = t.next;
                    t = t.prev
                } else
                    for (; t.prev && t.t >= e;) t = t.prev;
                return this._prev = t, t.v + (e - t.t) / t.gap * t.c
            }, _.config = function(e) {
                return new i(e)
            }, i.ease = new i, c("Bounce", h("BounceOut", function(e) {
                return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }), h("BounceIn", function(e) {
                return 1 / 2.75 > (e = 1 - e) ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }), h("BounceInOut", function(e) {
                var t = .5 > e;
                return e = t ? 1 - 2 * e : 2 * e - 1, e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
            })), c("Circ", h("CircOut", function(e) {
                return Math.sqrt(1 - (e -= 1) * e)
            }), h("CircIn", function(e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }), h("CircInOut", function(e) {
                return 1 > (e *= 2) ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            })), n = function(t, i, n) {
                var r = l("easing." + t, function(e, t) {
                        this._p1 = e || 1, this._p2 = t || n, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
                    }, !0),
                    s = r.prototype = new e;
                return s.constructor = r, s.getRatio = i, s.config = function(e, t) {
                    return new r(e, t)
                }, r
            }, c("Elastic", n("ElasticOut", function(e) {
                return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * a / this._p2) + 1
            }, .3), n("ElasticIn", function(e) {
                return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * a / this._p2))
            }, .3), n("ElasticInOut", function(e) {
                return 1 > (e *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * a / this._p2) + 1
            }, .45)), c("Expo", h("ExpoOut", function(e) {
                return 1 - Math.pow(2, -10 * e)
            }), h("ExpoIn", function(e) {
                return Math.pow(2, 10 * (e - 1)) - .001
            }), h("ExpoInOut", function(e) {
                return 1 > (e *= 2) ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
            })), c("Sine", h("SineOut", function(e) {
                return Math.sin(e * o)
            }), h("SineIn", function(e) {
                return -Math.cos(e * o) + 1
            }), h("SineInOut", function(e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            })), l("easing.EaseLookup", {
                find: function(t) {
                    return e.map[t]
                }
            }, !0), u(r.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(t, "SteppedEase", "ease,"), p
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e, t) {
        "use strict";
        var i = e.GreenSockGlobals = e.GreenSockGlobals || e;
        if (!i.TweenLite) {
            var n, r, s, a, o, l = function(e) {
                    var t, n = e.split("."),
                        r = i;
                    for (t = 0; n.length > t; t++) r[n[t]] = r = r[n[t]] || {};
                    return r
                },
                h = l("com.greensock"),
                u = 1e-10,
                c = function(e) {
                    var t, i = [],
                        n = e.length;
                    for (t = 0; t !== n; i.push(e[t++]));
                    return i
                },
                d = function() {},
                f = function() {
                    var e = Object.prototype.toString,
                        t = e.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && e.call(i) === t)
                    }
                }(),
                p = {},
                m = function(n, r, s, a) {
                    this.sc = p[n] ? p[n].sc : [], p[n] = this, this.gsClass = null, this.func = s;
                    var o = [];
                    this.check = function(h) {
                        for (var u, c, d, f, _ = r.length, g = _; --_ > -1;)(u = p[r[_]] || new m(r[_], [])).gsClass ? (o[_] = u.gsClass, g--) : h && u.sc.push(this);
                        if (0 === g && s)
                            for (c = ("com.greensock." + n).split("."), d = c.pop(), f = l(c.join("."))[d] = this.gsClass = s.apply(s, o), a && (i[d] = f, "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                    return f
                                }) : n === t && "undefined" != typeof module && module.exports && (module.exports = f)), _ = 0; this.sc.length > _; _++) this.sc[_].check()
                    }, this.check(!0)
                },
                _ = e._gsDefine = function(e, t, i, n) {
                    return new m(e, t, i, n)
                },
                g = h._class = function(e, t, i) {
                    return t = t || function() {}, _(e, [], function() {
                        return t
                    }, i), t
                };
            _.globals = i;
            var v = [0, 0, 1, 1],
                w = [],
                y = g("easing.Ease", function(e, t, i, n) {
                    this._func = e, this._type = i || 0, this._power = n || 0, this._params = t ? v.concat(t) : v
                }, !0),
                T = y.map = {},
                b = y.register = function(e, t, i, n) {
                    for (var r, s, a, o, l = t.split(","), u = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                        for (s = l[u], r = n ? g("easing." + s, null, !0) : h.easing[s] || {}, a = c.length; --a > -1;) o = c[a], T[s + "." + o] = T[o + s] = r[o] = e.getRatio ? e : e[o] || new e
                };
            for (s = y.prototype, s._calcEnd = !1, s.getRatio = function(e) {
                    if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                    var t = this._type,
                        i = this._power,
                        n = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === t ? 1 - n : 2 === t ? n : .5 > e ? n / 2 : 1 - n / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) s = n[r] + ",Power" + r, b(new y(null, null, 1, r), s, "easeOut", !0), b(new y(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), b(new y(null, null, 3, r), s, "easeInOut");
            T.linear = h.easing.Linear.easeIn, T.swing = h.easing.Quad.easeInOut;
            var x = g("events.EventDispatcher", function(e) {
                this._listeners = {}, this._eventTarget = e || this
            });
            s = x.prototype, s.addEventListener = function(e, t, i, n, r) {
                r = r || 0;
                var s, l, h = this._listeners[e],
                    u = 0;
                for (null == h && (this._listeners[e] = h = []), l = h.length; --l > -1;) s = h[l], s.c === t && s.s === i ? h.splice(l, 1) : 0 === u && r > s.pr && (u = l + 1);
                h.splice(u, 0, {
                    c: t,
                    s: i,
                    up: n,
                    pr: r
                }), this !== a || o || a.wake()
            }, s.removeEventListener = function(e, t) {
                var i, n = this._listeners[e];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === t) return void n.splice(i, 1)
            }, s.dispatchEvent = function(e) {
                var t, i, n, r = this._listeners[e];
                if (r)
                    for (t = r.length, i = this._eventTarget; --t > -1;) n = r[t], n.up ? n.c.call(n.s || i, {
                        type: e,
                        target: i
                    }) : n.c.call(n.s || i)
            };
            var S = e.requestAnimationFrame,
                k = e.cancelAnimationFrame,
                P = Date.now || function() {
                    return (new Date).getTime()
                },
                C = P();
            for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !S;) S = e[n[r] + "RequestAnimationFrame"], k = e[n[r] + "CancelAnimationFrame"] || e[n[r] + "CancelRequestAnimationFrame"];
            g("Ticker", function(e, t) {
                var i, n, r, s, l, h = this,
                    c = P(),
                    f = t !== !1 && S,
                    p = 500,
                    m = 33,
                    _ = function(e) {
                        var t, a, o = P() - C;
                        o > p && (c += o - m), C += o, h.time = (C - c) / 1e3, t = h.time - l, (!i || t > 0 || e === !0) && (h.frame++, l += t + (t >= s ? .004 : s - t), a = !0), e !== !0 && (r = n(_)), a && h.dispatchEvent("tick")
                    };
                x.call(h), h.time = h.frame = 0, h.tick = function() {
                    _(!0)
                }, h.lagSmoothing = function(e, t) {
                    p = e || 1 / u, m = Math.min(t, p, 0)
                }, h.sleep = function() {
                    null != r && (f && k ? k(r) : clearTimeout(r), n = d, r = null, h === a && (o = !1))
                }, h.wake = function() {
                    null !== r ? h.sleep() : h.frame > 10 && (C = P() - p + 5), n = 0 === i ? d : f && S ? S : function(e) {
                        return setTimeout(e, 0 | 1e3 * (l - h.time) + 1)
                    }, h === a && (o = !0), _(2)
                }, h.fps = function(e) {
                    return arguments.length ? (i = e, s = 1 / (i || 60), l = this.time + s, void h.wake()) : i
                }, h.useRAF = function(e) {
                    return arguments.length ? (h.sleep(), f = e, void h.fps(i)) : f
                }, h.fps(e), setTimeout(function() {
                    f && (!r || 5 > h.frame) && h.useRAF(!1)
                }, 1500)
            }), s = h.Ticker.prototype = new h.events.EventDispatcher, s.constructor = h.Ticker;
            var A = g("core.Animation", function(e, t) {
                if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, B) {
                    o || a.wake();
                    var i = this.vars.useFrames ? H : B;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = A.ticker = new h.Ticker, s = A.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
            var M = function() {
                o && P() - C > 2e3 && a.wake(), setTimeout(M, 2e3)
            };
            M(), s.play = function(e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
            }, s.pause = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!0)
            }, s.resume = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!1)
            }, s.seek = function(e, t) {
                return this.totalTime(Number(e), t !== !1)
            }, s.restart = function(e, t) {
                return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
            }, s.reverse = function(e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, s.render = function() {}, s.invalidate = function() {
                return this
            }, s.isActive = function() {
                var e, t = this._timeline,
                    i = this._startTime;
                return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= i && i + this.totalDuration() / this._timeScale > e
            }, s._enabled = function(e, t) {
                return o || a.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
            }, s._kill = function() {
                return this._enabled(!1, !1)
            }, s.kill = function(e, t) {
                return this._kill(e, t), this
            }, s._uncache = function(e) {
                for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                return this
            }, s._swapSelfInParams = function(e) {
                for (var t = e.length, i = e.concat(); --t > -1;) "{self}" === e[t] && (i[t] = this);
                return i
            }, s.eventCallback = function(e, t, i, n) {
                if ("on" === (e || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[e];
                    null == t ? delete r[e] : (r[e] = t, r[e + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[e + "Scope"] = n), "onUpdate" === e && (this._onUpdate = t)
                }
                return this
            }, s.delay = function(e) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
            }, s.duration = function(e) {
                return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, s.totalDuration = function(e) {
                return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
            }, s.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
            }, s.totalTime = function(e, t, i) {
                if (o || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > e && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (e > n && !i && (e = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - e : e) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (this.render(e, t, !1), R.length && j())
                }
                return this
            }, s.progress = s.totalProgress = function(e, t) {
                return arguments.length ? this.totalTime(this.duration() * e, t) : this._time / this.duration()
            }, s.startTime = function(e) {
                return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
            }, s.timeScale = function(e) {
                if (!arguments.length) return this._timeScale;
                if (e = e || u, this._timeline && this._timeline.smoothChildTiming) {
                    var t = this._pauseTime,
                        i = t || 0 === t ? t : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / e
                }
                return this._timeScale = e, this._uncache(!1)
            }, s.reversed = function(e) {
                return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, s.paused = function(e) {
                if (!arguments.length) return this._paused;
                if (e != this._paused && this._timeline) {
                    o || e || a.wake();
                    var t = this._timeline,
                        i = t.rawTime(),
                        n = i - this._pauseTime;
                    !e && t.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = e ? i : null, this._paused = e, this._active = this.isActive(), !e && 0 !== n && this._initted && this.duration() && this.render(t.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !e && this._enabled(!0, !1), this
            };
            var E = g("core.SimpleTimeline", function(e) {
                A.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            s = E.prototype = new A, s.constructor = E, s.kill()._gc = !1, s._first = s._last = null, s._sortChildren = !1, s.add = s.insert = function(e, t) {
                var i, n;
                if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (n = e._startTime; i && i._startTime > n;) i = i._prev;
                return i ? (e._next = i._next, i._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = i, this._timeline && this._uncache(!0), this
            }, s._remove = function(e, t) {
                return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, this._timeline && this._uncache(!0)), this
            }, s.render = function(e, t, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = e; r;) n = r._next, (r._active || e >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)), r = n
            }, s.rawTime = function() {
                return o || a.wake(), this._totalTime
            };
            var O = g("TweenLite", function(t, i, n) {
                    if (A.call(this, i, n), this.render = O.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : O.selector(t) || t;
                    var r, s, a, o = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? Y[O.defaultOverwrite] : "number" == typeof l ? l >> 0 : Y[l], (o || t instanceof Array || t.push && f(t)) && "number" != typeof t[0])
                        for (this._targets = a = c(t), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) s = a[r], s ? "string" != typeof s ? s.length && s !== e && s[0] && (s[0] === e || s[0].nodeType && s[0].style && !s.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(c(s))) : (this._siblings[r] = U(s, this, !1), 1 === l && this._siblings[r].length > 1 && W(s, this, null, 1, this._siblings[r])) : (s = a[r--] = O.selector(s), "string" == typeof s && a.splice(r + 1, 1)) : a.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = U(t, this, !1), 1 === l && this._siblings.length > 1 && W(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -u, this.render(-this._delay))
                }, !0),
                D = function(t) {
                    return t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
                },
                I = function(e, t) {
                    var i, n = {};
                    for (i in e) N[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!q[i] || q[i] && q[i]._autoCSS) || (n[i] = e[i], delete e[i]);
                    e.css = n
                };
            s = O.prototype = new A, s.constructor = O, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, O.version = "1.13.1", O.defaultEase = s._ease = new y(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = a, O.autoSleep = !0, O.lagSmoothing = function(e, t) {
                a.lagSmoothing(e, t)
            }, O.selector = e.$ || e.jQuery || function(t) {
                var i = e.$ || e.jQuery;
                return i ? (O.selector = i, i(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            };
            var R = [],
                F = {},
                z = O._internals = {
                    isArray: f,
                    isSelector: D,
                    lazyTweens: R
                },
                q = O._plugins = {},
                L = z.tweenLookup = {},
                X = 0,
                N = z.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1
                },
                Y = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                H = A._rootFramesTimeline = new E,
                B = A._rootTimeline = new E,
                j = z.lazyRender = function() {
                    var e = R.length;
                    for (F = {}; --e > -1;) n = R[e], n && n._lazy !== !1 && (n.render(n._lazy, !1, !0), n._lazy = !1);
                    R.length = 0
                };
            B._startTime = a.time, H._startTime = a.frame, B._active = H._active = !0, setTimeout(j, 1), A._updateRoot = O.render = function() {
                var e, t, i;
                if (R.length && j(), B.render((a.time - B._startTime) * B._timeScale, !1, !1), H.render((a.frame - H._startTime) * H._timeScale, !1, !1), R.length && j(), !(a.frame % 120)) {
                    for (i in L) {
                        for (t = L[i].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
                        0 === t.length && delete L[i]
                    }
                    if (i = B._first, (!i || i._paused) && O.autoSleep && !H._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", A._updateRoot);
            var U = function(e, t, i) {
                    var n, r, s = e._gsTweenID;
                    if (L[s || (e._gsTweenID = s = "t" + X++)] || (L[s] = {
                            target: e,
                            tweens: []
                        }), t && (n = L[s].tweens, n[r = n.length] = t, i))
                        for (; --r > -1;) n[r] === t && n.splice(r, 1);
                    return L[s].tweens
                },
                W = function(e, t, i, n, r) {
                    var s, a, o, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length, s = 0; l > s; s++)
                            if ((o = r[s]) !== t) o._gc || o._enabled(!1, !1) && (a = !0);
                            else if (5 === n) break;
                        return a
                    }
                    var h, c = t._startTime + u,
                        d = [],
                        f = 0,
                        p = 0 === t._duration;
                    for (s = r.length; --s > -1;)(o = r[s]) === t || o._gc || o._paused || (o._timeline !== t._timeline ? (h = h || Q(t, 0, p), 0 === Q(o, h, p) && (d[f++] = o)) : c >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > c && ((p || !o._initted) && 2e-10 >= c - o._startTime || (d[f++] = o)));
                    for (s = f; --s > -1;) o = d[s], 2 === n && o._kill(i, e) && (a = !0), (2 !== n || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
                    return a
                },
                Q = function(e, t, i) {
                    for (var n = e._timeline, r = n._timeScale, s = e._startTime; n._timeline;) {
                        if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return s /= r, s > t ? s - t : i && s === t || !e._initted && 2 * u > s - t ? u : (s += e.totalDuration() / e._timeScale / r) > t + u ? 0 : s - t - u
                };
            s._init = function() {
                var e, t, i, n, r, s = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    l = !!s.immediateRender,
                    h = s.ease;
                if (s.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (n in s.startAt) r[n] = s.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = O.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return
                } else if (s.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        i = {};
                        for (n in s) N[n] && "autoCSS" !== n || (i[n] = s[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && s.lazy !== !1, i.immediateRender = l, this._startAt = O.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1)
                    }
                if (this._ease = h = h ? h instanceof y ? h : "function" == typeof h ? new y(h, s.easeParams) : T[h] || O.defaultEase : O.defaultEase, s.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], a ? a[e] : null) && (t = !0);
                else t = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (t && O._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = s.onUpdate, this._initted = !0
            }, s._initProps = function(t, i, n, r) {
                var s, a, o, l, h, u;
                if (null == t) return !1;
                F[t._gsTweenID] && j(), this.vars.css || t.style && t !== e && t.nodeType && q.css && this.vars.autoCSS !== !1 && I(this.vars, t);
                for (s in this.vars) {
                    if (u = this.vars[s], N[s]) u && (u instanceof Array || u.push && f(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[s] = u = this._swapSelfInParams(u, this));
                    else if (q[s] && (l = new q[s])._onInitTween(t, this.vars[s], this)) {
                        for (this._firstPT = h = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: s,
                                pg: !0,
                                pr: l._priority
                            }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[s] = h = {
                        _next: this._firstPT,
                        t: t,
                        p: s,
                        f: "function" == typeof t[s],
                        n: s,
                        pg: !1,
                        pr: 0
                    }, h.s = h.f ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), h.c = "string" == typeof u && "=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * Number(u.substr(2)) : Number(u) - h.s || 0;
                    h && h._next && (h._next._prev = h)
                }
                return r && this._kill(r, t) ? this._initProps(t, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && W(t, this, i, this._overwrite, n) ? (this._kill(i, t), this._initProps(t, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (F[t._gsTweenID] = !0), o)
            }, s.render = function(e, t, i) {
                var n, r, s, a, o = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (e >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 === e || 0 > h || h === u) && h !== e && (i = !0, h > u && (r = "onReverseComplete")), this._rawPrevTime = a = !t || e || h === e ? e : u);
                else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0 && h !== u) && (r = "onReverseComplete", n = this._reversed), 0 > e ? (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (i = !0), this._rawPrevTime = a = !t || e || h === e ? e : u)) : this._initted || (i = !0);
                else if (this._totalTime = this._time = e, this._easeType) {
                    var c = e / l,
                        d = this._easeType,
                        f = this._easePower;
                    (1 === d || 3 === d && c >= .5) && (c = 1 - c), 3 === d && (c *= 2), 1 === f ? c *= c : 2 === f ? c *= c * c : 3 === f ? c *= c * c * c : 4 === f && (c *= c * c * c * c), this.ratio = 1 === d ? 1 - c : 2 === d ? c : .5 > e / l ? c / 2 : 1 - c / 2
                } else this.ratio = this._ease.getRatio(e / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, R.push(this), void(this._lazy = e);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && e >= 0 && (this._active = !0), 0 === o && (this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || w))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, i), t || (this._time !== o || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || w)), r && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || w), 0 === l && this._rawPrevTime === u && a !== u && (this._rawPrevTime = 0))
                }
            }, s._kill = function(e, t) {
                if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                t = "string" != typeof t ? t || this._targets || this.target : O.selector(t) || t;
                var i, n, r, s, a, o, l, h;
                if ((f(t) || D(t)) && "number" != typeof t[0])
                    for (i = t.length; --i > -1;) this._kill(e, t[i]) && (o = !0);
                else {
                    if (this._targets) {
                        for (i = this._targets.length; --i > -1;)
                            if (t === this._targets[i]) {
                                a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[i] = e ? this._overwrittenProps[i] || {} : "all";
                                break
                            }
                    } else {
                        if (t !== this.target) return !1;
                        a = this._propLookup, n = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        l = e || a, h = e !== n && "all" !== n && e !== a && ("object" != typeof e || !e._tempKill);
                        for (r in l)(s = a[r]) && (s.pg && s.t._kill(l) && (o = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[r]), h && (n[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return o
            }, s.invalidate = function() {
                return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = this._lazy = !1, this._propLookup = this._targets ? {} : [], this
            }, s._enabled = function(e, t) {
                if (o || a.wake(), e && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = U(n[i], this, !0);
                    else this._siblings = U(this.target, this, !0)
                }
                return A.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? O._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
            }, O.to = function(e, t, i) {
                return new O(e, t, i)
            }, O.from = function(e, t, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new O(e, t, i)
            }, O.fromTo = function(e, t, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new O(e, t, n)
            }, O.delayedCall = function(e, t, i, n, r) {
                return new O(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: i,
                    onCompleteScope: n,
                    onReverseComplete: t,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: n,
                    immediateRender: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, O.set = function(e, t) {
                return new O(e, 0, t)
            }, O.getTweensOf = function(e, t) {
                if (null == e) return [];
                e = "string" != typeof e ? e : O.selector(e) || e;
                var i, n, r, s;
                if ((f(e) || D(e)) && "number" != typeof e[0]) {
                    for (i = e.length, n = []; --i > -1;) n = n.concat(O.getTweensOf(e[i], t));
                    for (i = n.length; --i > -1;)
                        for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
                } else
                    for (n = U(e).concat(), i = n.length; --i > -1;)(n[i]._gc || t && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, O.killTweensOf = O.killDelayedCallsTo = function(e, t, i) {
                "object" == typeof t && (i = t, t = !1);
                for (var n = O.getTweensOf(e, t), r = n.length; --r > -1;) n[r]._kill(i, e)
            };
            var G = g("plugins.TweenPlugin", function(e, t) {
                this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = G.prototype
            }, !0);
            if (s = G.prototype, G.version = "1.10.1", G.API = 2, s._firstPT = null, s._addTween = function(e, t, i, n, r, s) {
                    var a, o;
                    return null != n && (a = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = o = {
                        _next: this._firstPT,
                        t: e,
                        p: t,
                        s: i,
                        c: a,
                        f: "function" == typeof e[t],
                        n: r || t,
                        r: s
                    }, o._next && (o._next._prev = o), o) : void 0
                }, s.setRatio = function(e) {
                    for (var t, i = this._firstPT, n = 1e-6; i;) t = i.c * e + i.s, i.r ? t = Math.round(t) : n > t && t > -n && (t = 0), i.f ? i.t[i.p](t) : i.t[i.p] = t, i = i._next
                }, s._kill = function(e) {
                    var t, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != e[this._propName]) this._overwriteProps = [];
                    else
                        for (t = i.length; --t > -1;) null != e[i[t]] && i.splice(t, 1);
                    for (; n;) null != e[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, s._roundProps = function(e, t) {
                    for (var i = this._firstPT; i;)(e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")]) && (i.r = t), i = i._next
                }, O._onPluginEvent = function(e, t) {
                    var i, n, r, s, a, o = t._firstPT;
                    if ("_onInitAllProps" === e) {
                        for (; o;) {
                            for (a = o._next, n = r; n && n.pr > o.pr;) n = n._next;
                            (o._prev = n ? n._prev : s) ? o._prev._next = o: r = o, (o._next = n) ? n._prev = o : s = o, o = a
                        }
                        o = t._firstPT = r
                    }
                    for (; o;) o.pg && "function" == typeof o.t[e] && o.t[e]() && (i = !0), o = o._next;
                    return i
                }, G.activate = function(e) {
                    for (var t = e.length; --t > -1;) e[t].API === G.API && (q[(new e[t])._propName] = e[t]);
                    return !0
                }, _.plugin = function(e) {
                    if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                    var t, i = e.propName,
                        n = e.priority || 0,
                        r = e.overwriteProps,
                        s = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            G.call(this, i, n), this._overwriteProps = r || []
                        }, e.global === !0),
                        o = a.prototype = new G(i);
                    o.constructor = a, a.API = e.API;
                    for (t in s) "function" == typeof e[t] && (o[s[t]] = e[t]);
                    return a.version = e.version, G.activate([a]), a
                }, n = e._gsQueue) {
                for (r = 0; n.length > r; r++) n[r]();
                for (s in p) p[s].func || e.console.log("GSAP encountered missing dependency: com.greensock." + s)
            }
            o = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite"), jQuery(document).ready(function(e) {
        function t() {
            n(e(".cd-headline.letters").find("b")), r(e(".cd-headline"))
        }

        function n(t) {
            t.each(function() {
                var t = e(this),
                    n = t.text().split(""),
                    r = t.hasClass("is-visible");
                for (i in n) t.parents(".rotate-2").length > 0 && (n[i] = "<em>" + n[i] + "</em>"), n[i] = r ? '<i class="in">' + n[i] + "</i>" : "<i>" + n[i] + "</i>";
                var s = n.join("");
                t.html(s).css("opacity", 1)
            })
        }

        function r(t) {
            var i = c;
            t.each(function() {
                var t = e(this);
                if (t.hasClass("loading-bar")) i = d, setTimeout(function() {
                    t.find(".cd-words-wrapper").addClass("is-loading")
                }, f);
                else if (t.hasClass("clip")) {
                    var n = t.find(".cd-words-wrapper"),
                        r = n.width() + 10;
                    n.css("width", r)
                } else if (!t.hasClass("type")) {
                    var a = t.find(".cd-words-wrapper b"),
                        o = 0;
                    a.each(function() {
                        var t = e(this).width();
                        t > o && (o = t)
                    }), t.find(".cd-words-wrapper").css("width", o + 60)
                }
                setTimeout(function() {
                    s(t.find(".is-visible").eq(0))
                }, i)
            })
        }

        function s(e) {
            var t = h(e);
            if (e.parents(".cd-headline").hasClass("type")) {
                var i = e.parent(".cd-words-wrapper");
                i.addClass("selected").removeClass("waiting"), setTimeout(function() {
                    i.removeClass("selected"), e.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
                }, _), setTimeout(function() {
                    a(t, m)
                }, g)
            } else if (e.parents(".cd-headline").hasClass("letters")) {
                var n = e.children("i").length >= t.children("i").length ? !0 : !1;
                o(e.find("i").eq(0), e, n, p), l(t.find("i").eq(0), t, n, p)
            } else e.parents(".cd-headline").hasClass("clip") ? e.parents(".cd-words-wrapper").animate({
                width: "2px"
            }, v, function() {
                u(e, t), a(t)
            }) : e.parents(".cd-headline").hasClass("loading-bar") ? (e.parents(".cd-words-wrapper").removeClass("is-loading"), u(e, t), setTimeout(function() {
                s(t)
            }, d), setTimeout(function() {
                e.parents(".cd-words-wrapper").addClass("is-loading")
            }, f)) : (u(e, t), setTimeout(function() {
                s(t)
            }, c))
        }

        function a(e, t) {
            e.parents(".cd-headline").hasClass("type") ? (l(e.find("i").eq(0), e, !1, t), e.addClass("is-visible").removeClass("is-hidden")) : e.parents(".cd-headline").hasClass("clip") && e.parents(".cd-words-wrapper").animate({
                width: e.width() + 10
            }, v, function() {
                setTimeout(function() {
                    s(e)
                }, w)
            })
        }

        function o(t, i, n, r) {
            if (t.removeClass("in").addClass("out"), t.is(":last-child") ? n && setTimeout(function() {
                    s(h(i))
                }, c) : setTimeout(function() {
                    o(t.next(), i, n, r)
                }, r), t.is(":last-child") && e("html").hasClass("no-csstransitions")) {
                var a = h(i);
                u(i, a)
            }
        }

        function l(e, t, i, n) {
            e.addClass("in").removeClass("out"), e.is(":last-child") ? (t.parents(".cd-headline").hasClass("type") && setTimeout(function() {
                t.parents(".cd-words-wrapper").addClass("waiting")
            }, 200), i || setTimeout(function() {
                s(t)
            }, c)) : setTimeout(function() {
                l(e.next(), t, i, n)
            }, n)
        }

        function h(e) {
            return e.is(":last-child") ? e.parent().children().eq(0) : e.next()
        }

        function u(e, t) {
            e.removeClass("is-visible").addClass("is-hidden"), t.removeClass("is-hidden").addClass("is-visible")
        }
        var c = 3e3,
            d = 3800,
            f = d - 3e3,
            p = 70,
            m = 150,
            _ = 500,
            g = _ + 800,
            v = 600,
            w = 1500;
        t(), e(window).resize(function() {
            if (headline = e(".cd-headline"), !headline.hasClass("type")) {
                var t = headline.find(".cd-words-wrapper b"),
                    i = 0;
                t.each(function() {
                    var t = e(this).width();
                    t > i && (i = t)
                }), headline.find(".cd-words-wrapper").css("width", i)
            }
        })
    }), ! function(e, t) {
        "use strict";

        function i(e) {
            e = e || {};
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                if (i)
                    for (var n in i) i.hasOwnProperty(n) && ("object" == typeof i[n] ? deepExtend(e[n], i[n]) : e[n] = i[n])
            }
            return e
        }

        function n(n, a) {
            function o() {
                if (S) {
                    g = t.createElement("canvas"), g.className = "pg-canvas", g.style.display = "block", n.insertBefore(g, n.firstChild), v = g.getContext("2d"), l();
                    for (var i = Math.round(g.width * g.height / a.density), r = 0; i > r; r++) {
                        var s = new f;
                        s.setStackPos(r), k.push(s)
                    }
                    e.addEventListener("resize", function() {
                        u()
                    }, !1), t.addEventListener("mousemove", function(e) {
                        P = e.pageX, C = e.pageY
                    }, !1), M && !A && e.addEventListener("deviceorientation", function() {
                        O = Math.min(Math.max(-event.beta, -30), 30), E = Math.min(Math.max(-event.gamma, -30), 30)
                    }, !0), h(), _("onInit")
                }
            }

            function l() {
                g.width = n.offsetWidth, g.height = n.offsetHeight, v.fillStyle = a.dotColor, v.strokeStyle = a.lineColor, v.lineWidth = a.lineWidth
            }

            function h() {
                if (S) {
                    y = e.innerWidth, T = e.innerHeight, v.clearRect(0, 0, g.width, g.height);
                    for (var t = 0; t < k.length; t++) k[t].updatePosition();
                    for (var t = 0; t < k.length; t++) k[t].draw();
                    D || (w = requestAnimationFrame(h))
                }
            }

            function u() {
                l();
                for (var e = n.offsetWidth, t = n.offsetHeight, i = k.length - 1; i >= 0; i--)(k[i].position.x > e || k[i].position.y > t) && k.splice(i, 1);
                var r = Math.round(g.width * g.height / a.density);
                if (r > k.length)
                    for (; r > k.length;) {
                        var s = new f;
                        k.push(s)
                    } else r < k.length && k.splice(r);
                for (i = k.length - 1; i >= 0; i--) k[i].setStackPos(i)
            }

            function c() {
                D = !0
            }

            function d() {
                D = !1, h()
            }

            function f() {
                switch (this.stackPos, this.active = !0, this.layer = Math.ceil(3 * Math.random()), this.parallaxOffsetX = 0, this.parallaxOffsetY = 0, this.position = {
                    x: Math.ceil(Math.random() * g.width),
                    y: Math.ceil(Math.random() * g.height)
                }, this.speed = {}, a.directionX) {
                    case "left":
                        this.speed.x = +(-a.maxSpeedX + Math.random() * a.maxSpeedX - a.minSpeedX).toFixed(2);
                        break;
                    case "right":
                        this.speed.x = +(Math.random() * a.maxSpeedX + a.minSpeedX).toFixed(2);
                        break;
                    default:
                        this.speed.x = +(-a.maxSpeedX / 2 + Math.random() * a.maxSpeedX).toFixed(2), this.speed.x += this.speed.x > 0 ? a.minSpeedX : -a.minSpeedX
                }
                switch (a.directionY) {
                    case "up":
                        this.speed.y = +(-a.maxSpeedY + Math.random() * a.maxSpeedY - a.minSpeedY).toFixed(2);
                        break;
                    case "down":
                        this.speed.y = +(Math.random() * a.maxSpeedY + a.minSpeedY).toFixed(2);
                        break;
                    default:
                        this.speed.y = +(-a.maxSpeedY / 2 + Math.random() * a.maxSpeedY).toFixed(2), this.speed.x += this.speed.y > 0 ? a.minSpeedY : -a.minSpeedY
                }
            }

            function p(e, t) {
                return t ? void(a[e] = t) : a[e]
            }

            function m() {
                console.log("destroy"), g.parentNode.removeChild(g), _("onDestroy"), s && s(n).removeData("plugin_" + r)
            }

            function _(e) {
                void 0 !== a[e] && a[e].call(n)
            }
            var g, v, w, y, T, b, x, S = !!t.createElement("canvas").getContext,
                k = [],
                P = 0,
                C = 0,
                A = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
                M = !!e.DeviceOrientationEvent,
                E = 0,
                O = 0,
                D = !1;
            return a = i({}, e[r].defaults, a), f.prototype.draw = function() {
                v.beginPath(), v.arc(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY, a.particleRadius / 2, 0, 2 * Math.PI, !0), v.closePath(), v.fill(), v.beginPath();
                for (var e = k.length - 1; e > this.stackPos; e--) {
                    var t = k[e],
                        i = this.position.x - t.position.x,
                        n = this.position.y - t.position.y,
                        r = Math.sqrt(i * i + n * n).toFixed(2);
                    r < a.proximity && (v.moveTo(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY), a.curvedLines ? v.quadraticCurveTo(Math.max(t.position.x, t.position.x), Math.min(t.position.y, t.position.y), t.position.x + t.parallaxOffsetX, t.position.y + t.parallaxOffsetY) : v.lineTo(t.position.x + t.parallaxOffsetX, t.position.y + t.parallaxOffsetY))
                }
                v.stroke(), v.closePath()
            }, f.prototype.updatePosition = function() {
                if (a.parallax) {
                    if (M && !A) {
                        var e = (y - 0) / 60;
                        b = (E - -30) * e + 0;
                        var t = (T - 0) / 60;
                        x = (O - -30) * t + 0
                    } else b = P, x = C;
                    this.parallaxTargX = (b - y / 2) / (a.parallaxMultiplier * this.layer), this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10, this.parallaxTargY = (x - T / 2) / (a.parallaxMultiplier * this.layer), this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10
                }
                var i = n.offsetWidth,
                    r = n.offsetHeight;
                switch (a.directionX) {
                    case "left":
                        this.position.x + this.speed.x + this.parallaxOffsetX < 0 && (this.position.x = i - this.parallaxOffsetX);
                        break;
                    case "right":
                        this.position.x + this.speed.x + this.parallaxOffsetX > i && (this.position.x = 0 - this.parallaxOffsetX);
                        break;
                    default:
                        (this.position.x + this.speed.x + this.parallaxOffsetX > i || this.position.x + this.speed.x + this.parallaxOffsetX < 0) && (this.speed.x = -this.speed.x)
                }
                switch (a.directionY) {
                    case "up":
                        this.position.y + this.speed.y + this.parallaxOffsetY < 0 && (this.position.y = r - this.parallaxOffsetY);
                        break;
                    case "down":
                        this.position.y + this.speed.y + this.parallaxOffsetY > r && (this.position.y = 0 - this.parallaxOffsetY);
                        break;
                    default:
                        (this.position.y + this.speed.y + this.parallaxOffsetY > r || this.position.y + this.speed.y + this.parallaxOffsetY < 0) && (this.speed.y = -this.speed.y)
                }
                this.position.x += this.speed.x, this.position.y += this.speed.y
            }, f.prototype.setStackPos = function(e) {
                this.stackPos = e
            }, o(), {
                option: p,
                destroy: m,
                start: d,
                pause: c
            }
        }
        var r = "particleground",
            s = e.jQuery;
        e[r] = function(e, t) {
            return new n(e, t)
        }, e[r].defaults = {
            minSpeedX: .1,
            maxSpeedX: .7,
            minSpeedY: .1,
            maxSpeedY: .7,
            directionX: "center",
            directionY: "center",
            density: 1e4,
            dotColor: "#666666",
            lineColor: "#666666",
            particleRadius: 7,
            lineWidth: 1,
            curvedLines: !1,
            proximity: 100,
            parallax: !0,
            parallaxMultiplier: 5,
            onInit: function() {},
            onDestroy: function() {}
        }, s && (s.fn[r] = function(e) {
            if ("string" == typeof arguments[0]) {
                var t, i = arguments[0],
                    a = Array.prototype.slice.call(arguments, 1);
                return this.each(function() {
                    s.data(this, "plugin_" + r) && "function" == typeof s.data(this, "plugin_" + r)[i] && (t = s.data(this, "plugin_" + r)[i].apply(this, a))
                }), void 0 !== t ? t : this
            }
            return "object" != typeof e && e ? void 0 : this.each(function() {
                s.data(this, "plugin_" + r) || s.data(this, "plugin_" + r, new n(this, e))
            })
        })
    }(window, document),
    function() {
        for (var e = 0, t = ["ms", "moz", "webkit", "o"], i = 0; i < t.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[t[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[i] + "CancelAnimationFrame"] || window[t[i] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
            var i = (new Date).getTime(),
                n = Math.max(0, 16 - (i - e)),
                r = window.setTimeout(function() {
                    t(i + n)
                }, n);
            return e = i + n, r
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        })
    }(),
    function(e) {
        jQuery.fn.menuzord = function(t) {
            function i(t) {
                "fade" == f.effect ? e(t).children(".dropdown, .megamenu").stop(!0, !0).delay(f.showDelay).fadeIn(f.showSpeed).addClass(f.animation) : e(t).children(".dropdown, .megamenu").stop(!0, !0).delay(f.showDelay).slideDown(f.showSpeed).addClass(f.animation)
            }

            function n(t) {
                "fade" == f.effect ? e(t).children(".dropdown, .megamenu").stop(!0, !0).delay(f.hideDelay).fadeOut(f.hideSpeed).removeClass(f.animation) : e(t).children(".dropdown, .megamenu").stop(!0, !0).delay(f.hideDelay).slideUp(f.hideSpeed).removeClass(f.animation), e(t).children(".dropdown, .megamenu").find(".dropdown, .megamenu").stop(!0, !0).delay(f.hideDelay).fadeOut(f.hideSpeed)
            }

            function r() {
                e(_).find(".dropdown, .megamenu").hide(0), navigator.userAgent.match(/Mobi/i) || window.navigator.msMaxTouchPoints > 0 || "click" == f.trigger ? (e(".menuzord-menu > li > a, .menuzord-menu ul.dropdown li a").bind("click touchstart", function(t) {
                    return t.stopPropagation(), t.preventDefault(), e(this).parent("li").siblings("li").find(".dropdown, .megamenu").stop(!0, !0).fadeOut(300), "none" == e(this).siblings(".dropdown, .megamenu").css("display") ? (i(e(this).parent("li")), !1) : (n(e(this).parent("li")), void(window.location.href = e(this).attr("href")))
                }), e(document).bind("click.menu touchstart.menu", function(t) {
                    0 == e(t.target).closest(".menuzord").length && e(".menuzord-menu").find(".dropdown, .megamenu").fadeOut(300)
                })) : e(g).bind("mouseenter", function() {
                    i(this)
                }).bind("mouseleave", function() {
                    n(this)
                })
            }

            function s() {
                e(_).find(".dropdown, .megamenu").hide(0), e(_).find(".indicator").each(function() {
                    e(this).parent("a").siblings(".dropdown, .megamenu").length > 0 && e(this).bind("click", function(t) {
                        e(_).scrollTo({
                            top: 45,
                            left: 0
                        }, 600), "A" == e(this).parent().prop("tagName") && t.preventDefault(), "none" == e(this).parent("a").siblings(".dropdown, .megamenu").css("display") ? (e(this).parent("a").siblings(".dropdown, .megamenu").delay(f.showDelay).slideDown(f.showSpeed), e(this).parent("a").parent("li").siblings("li").find(".dropdown, .megamenu").slideUp(f.hideSpeed)) : e(this).parent("a").siblings(".dropdown, .megamenu").slideUp(f.hideSpeed)
                    })
                })
            }

            function a() {
                var t = e(_).children("li").children(".dropdown, .megamenu");
                if (e(window).innerWidth() > v)
                    for (var i = e(m).outerWidth(!0), n = 0; n < t.length; n++) e(t[n]).parent("li").position().left + e(t[n]).outerWidth() > i ? e(t[n]).css("right", 0) : ((i == e(t[n]).outerWidth() || i - e(t[n]).outerWidth() < 20) && e(t[n]).css("left", 0), e(t[n]).parent("li").position().left + e(t[n]).outerWidth() < i && e(t[n]).css("right", "auto"))
            }

            function o() {
                e(_).hide(0), e(p).show(0).click(function(t) {
                    t.preventDefault(), "none" == e(_).css("display") ? e(_).slideDown(f.showSpeed) : e(_).slideUp(f.hideSpeed).find(".dropdown, .megamenu").hide(f.hideSpeed)
                })
            }

            function l() {
                e(_).show(0), e(p).hide(0)
            }

            function h() {
                e(m).find("li, a").unbind(), e(document).unbind("click.menu touchstart.menu")
            }

            function u() {
                function t(t) {
                    var i = e(t).find(".menuzord-tabs-nav > li"),
                        n = e(t).find(".menuzord-tabs-content");
                    e(i).bind("click touchstart", function(t) {
                        t.stopPropagation(), t.preventDefault(), e(i).removeClass("active"), e(this).addClass("active"), e(n).hide(0), e(n[e(this).index()]).show(0)
                    })
                }
                if (e(_).find(".menuzord-tabs").length > 0)
                    for (var i = e(_).find(".menuzord-tabs"), n = 0; n < i.length; n++) t(i[n])
            }

            function c() {
                return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            }

            function d() {
                if (a(), c() <= v && w > v && (h(), f.responsive ? (o(), s()) : r()), c() > v && v >= y && (h(), l(), r()), w = c(), y = c(), u(), /MSIE (\d+\.\d+);/.test(navigator.userAgent) && c() < v) {
                    var t = new Number(RegExp.$1);
                    8 == t && (e(p).hide(0), e(_).show(0), h(), r())
                }
            }
            var f;
            e.extend(f = {
                showSpeed: 200,
                hideSpeed: 200,
                trigger: "hover",
                showDelay: 0,
                hideDelay: 0,
                effect: "fade",
                align: "left",
                responsive: !0,
                animation: "none",
                indentChildren: !0,
                indicatorFirstLevel: "+",
                indicatorSecondLevel: "+",
                scrollable: !0,
                scrollableMaxHeight: 400
            }, t);
            var p, m = e(this),
                _ = e(m).children(".menuzord-menu"),
                g = e(_).find("li"),
                v = 768,
                w = 2e3,
                y = 200;
            e(_).children("li").children("a").each(function() {
                e(this).siblings(".dropdown, .megamenu").length > 0 && e(this).append("<span class='indicator'>" + f.indicatorFirstLevel + "</span>")
            }), e(_).find(".dropdown").children("li").children("a").each(function() {
                e(this).siblings(".dropdown").length > 0 && e(this).append("<span class='indicator'>" + f.indicatorSecondLevel + "</span>")
            }), "right" == f.align && e(_).addClass("menuzord-right"), f.indentChildren && e(_).addClass("menuzord-indented"), f.responsive && (e(m).addClass("menuzord-responsive").prepend("<a href='#' class='showhide'><em></em><em></em><em></em></a>"), p = e(m).children(".showhide")), f.scrollable && f.responsive && e(_).css("max-height", f.scrollableMaxHeight).addClass("scrollable").append("<li class='scrollable-fix'></li>"), d(), e(window).resize(function() {
                d(), a()
            })
        }
    }(jQuery),
    function(e) {
        "use strict";
        e(["jquery"], function(e) {
            function t(t) {
                return e.isFunction(t) || "object" == typeof t ? t : {
                    top: t,
                    left: t
                }
            }
            var i = e.scrollTo = function(t, i, n) {
                return e(window).scrollTo(t, i, n)
            };
            return i.defaults = {
                axis: "xy",
                duration: parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1,
                limit: !0
            }, i.window = function(t) {
                return e(window)._scrollable()
            }, e.fn._scrollable = function() {
                return this.map(function() {
                    var t = this,
                        i = !t.nodeName || -1 != e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
                    if (!i) return t;
                    var n = (t.contentWindow || t).document || t.ownerDocument || t;
                    return /webkit/i.test(navigator.userAgent) || "BackCompat" == n.compatMode ? n.body : n.documentElement
                })
            }, e.fn.scrollTo = function(n, r, s) {
                return "object" == typeof r && (s = r, r = 0), "function" == typeof s && (s = {
                    onAfter: s
                }), "max" == n && (n = 9e9), s = e.extend({}, i.defaults, s), r = r || s.duration, s.queue = s.queue && s.axis.length > 1, s.queue && (r /= 2), s.offset = t(s.offset), s.over = t(s.over), this._scrollable().each(function() {
                    function a(e) {
                        h.animate(c, r, s.easing, e && function() {
                            e.call(this, u, s)
                        })
                    }
                    if (null != n) {
                        var o, l = this,
                            h = e(l),
                            u = n,
                            c = {},
                            d = h.is("html,body");
                        switch (typeof u) {
                            case "number":
                            case "string":
                                if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(u)) {
                                    u = t(u);
                                    break
                                }
                                if (u = d ? e(u) : e(u, this), !u.length) return;
                            case "object":
                                (u.is || u.style) && (o = (u = e(u)).offset())
                        }
                        var f = e.isFunction(s.offset) && s.offset(l, u) || s.offset;
                        e.each(s.axis.split(""), function(e, t) {
                            var n = "x" == t ? "Left" : "Top",
                                r = n.toLowerCase(),
                                p = "scroll" + n,
                                m = l[p],
                                _ = i.max(l, t);
                            if (o) c[p] = o[r] + (d ? 0 : m - h.offset()[r]), s.margin && (c[p] -= parseInt(u.css("margin" + n)) || 0, c[p] -= parseInt(u.css("border" + n + "Width")) || 0), c[p] += f[r] || 0, s.over[r] && (c[p] += u["x" == t ? "width" : "height"]() * s.over[r]);
                            else {
                                var g = u[r];
                                c[p] = g.slice && "%" == g.slice(-1) ? parseFloat(g) / 100 * _ : g
                            }
                            s.limit && /^\d+$/.test(c[p]) && (c[p] = c[p] <= 0 ? 0 : Math.min(c[p], _)), !e && s.queue && (m != c[p] && a(s.onAfterFirst), delete c[p])
                        }), a(s.onAfter)
                    }
                }).end()
            }, i.max = function(t, i) {
                var n = "x" == i ? "Width" : "Height",
                    r = "scroll" + n;
                if (!e(t).is("html,body")) return t[r] - e(t)[n.toLowerCase()]();
                var s = "client" + n,
                    a = t.ownerDocument.documentElement,
                    o = t.ownerDocument.body;
                return Math.max(a[r], o[r]) - Math.min(a[s], o[s])
            }, i
        })
    }("function" == typeof define && define.amd ? define : function(e, t) {
        "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
    }), ! function(e, t, i) {
        "use strict";

        function n(i) {
            if (r = t.documentElement, s = t.body, U(), oe = this, i = i || {}, de = i.constants || {}, i.easing)
                for (var n in i.easing) G[n] = i.easing[n];
            we = i.edgeStrategy || "set", ue = {
                beforerender: i.beforerender,
                render: i.render,
                keyframe: i.keyframe
            }, ce = i.forceHeight !== !1, ce && (ze = i.scale || 1), fe = i.mobileDeceleration || S, me = i.smoothScrolling !== !1, _e = i.smoothScrollingDuration || P, ge = {
                targetTop: oe.getScrollTop()
            }, je = (i.mobileCheck || function() {
                return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || e.opera)
            })(), je ? (he = t.getElementById(i.skrollrBody || k), he && ae(), $(), Ee(r, [v, T], [w])) : Ee(r, [v, y], [w]), oe.refresh(), be(e, "resize orientationchange", function() {
                var e = r.clientWidth,
                    t = r.clientHeight;
                (t !== Ye || e !== Ne) && (Ye = t, Ne = e, He = !0)
            });
            var a = W();
            return function o() {
                Z(), Te = a(o)
            }(), oe
        }
        var r, s, a = {
                get: function() {
                    return oe
                },
                init: function(e) {
                    return oe || new n(e)
                },
                VERSION: "0.6.29"
            },
            o = Object.prototype.hasOwnProperty,
            l = e.Math,
            h = e.getComputedStyle,
            u = "touchstart",
            c = "touchmove",
            d = "touchcancel",
            f = "touchend",
            p = "skrollable",
            m = p + "-before",
            _ = p + "-between",
            g = p + "-after",
            v = "skrollr",
            w = "no-" + v,
            y = v + "-desktop",
            T = v + "-mobile",
            b = "linear",
            x = 1e3,
            S = .004,
            k = "skrollr-body",
            P = 200,
            C = "start",
            A = "end",
            M = "center",
            E = "bottom",
            O = "___skrollable_id",
            D = /^(?:input|textarea|button|select)$/i,
            I = /^\s+|\s+$/g,
            R = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
            F = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
            z = /^(@?[a-z\-]+)\[(\w+)\]$/,
            q = /-([a-z0-9_])/g,
            L = function(e, t) {
                return t.toUpperCase()
            },
            X = /[\-+]?[\d]*\.?[\d]+/g,
            N = /\{\?\}/g,
            Y = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
            H = /[a-z\-]+-gradient/g,
            B = "",
            j = "",
            U = function() {
                var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
                if (h) {
                    var t = h(s, null);
                    for (var i in t)
                        if (B = i.match(e) || +i == i && t[i].match(e)) break;
                    if (!B) return void(B = j = "");
                    B = B[0], "-" === B.slice(0, 1) ? (j = B, B = {
                        "-webkit-": "webkit",
                        "-moz-": "Moz",
                        "-ms-": "ms",
                        "-o-": "O"
                    }[B]) : j = "-" + B.toLowerCase() + "-"
                }
            },
            W = function() {
                var t = e.requestAnimationFrame || e[B.toLowerCase() + "RequestAnimationFrame"],
                    i = Ie();
                return (je || !t) && (t = function(t) {
                    var n = Ie() - i,
                        r = l.max(0, 1e3 / 60 - n);
                    return e.setTimeout(function() {
                        i = Ie(), t()
                    }, r)
                }), t
            },
            Q = function() {
                var t = e.cancelAnimationFrame || e[B.toLowerCase() + "CancelAnimationFrame"];
                return (je || !t) && (t = function(t) {
                    return e.clearTimeout(t)
                }), t
            },
            G = {
                begin: function() {
                    return 0
                },
                end: function() {
                    return 1
                },
                linear: function(e) {
                    return e
                },
                quadratic: function(e) {
                    return e * e
                },
                cubic: function(e) {
                    return e * e * e
                },
                swing: function(e) {
                    return -l.cos(e * l.PI) / 2 + .5
                },
                sqrt: function(e) {
                    return l.sqrt(e)
                },
                outCubic: function(e) {
                    return l.pow(e - 1, 3) + 1
                },
                bounce: function(e) {
                    var t;
                    if (.5083 >= e) t = 3;
                    else if (.8489 >= e) t = 9;
                    else if (.96208 >= e) t = 27;
                    else {
                        if (!(.99981 >= e)) return 1;
                        t = 91
                    }
                    return 1 - l.abs(3 * l.cos(e * t * 1.028) / t)
                }
            };
        n.prototype.refresh = function(e) {
            var n, r, s = !1;
            for (e === i ? (s = !0, le = [], Be = 0, e = t.getElementsByTagName("*")) : e.length === i && (e = [e]), n = 0, r = e.length; r > n; n++) {
                var a = e[n],
                    o = a,
                    l = [],
                    h = me,
                    u = we,
                    c = !1;
                if (s && O in a && delete a[O], a.attributes) {
                    for (var d = 0, f = a.attributes.length; f > d; d++) {
                        var m = a.attributes[d];
                        if ("data-anchor-target" !== m.name)
                            if ("data-smooth-scrolling" !== m.name)
                                if ("data-edge-strategy" !== m.name)
                                    if ("data-emit-events" !== m.name) {
                                        var _ = m.name.match(R);
                                        if (null !== _) {
                                            var g = {
                                                props: m.value,
                                                element: a,
                                                eventType: m.name.replace(q, L)
                                            };
                                            l.push(g);
                                            var v = _[1];
                                            v && (g.constant = v.substr(1));
                                            var w = _[2];
                                            /p$/.test(w) ? (g.isPercentage = !0, g.offset = (0 | w.slice(0, -1)) / 100) : g.offset = 0 | w;
                                            var y = _[3],
                                                T = _[4] || y;
                                            y && y !== C && y !== A ? (g.mode = "relative", g.anchors = [y, T]) : (g.mode = "absolute", y === A ? g.isEnd = !0 : g.isPercentage || (g.offset = g.offset * ze))
                                        }
                                    } else c = !0;
                        else u = m.value;
                        else h = "off" !== m.value;
                        else if (o = t.querySelector(m.value), null === o) throw 'Unable to find anchor target "' + m.value + '"'
                    }
                    if (l.length) {
                        var b, x, S;
                        !s && O in a ? (S = a[O], b = le[S].styleAttr, x = le[S].classAttr) : (S = a[O] = Be++, b = a.style.cssText, x = Me(a)), le[S] = {
                            element: a,
                            styleAttr: b,
                            classAttr: x,
                            anchorTarget: o,
                            keyFrames: l,
                            smoothScrolling: h,
                            edgeStrategy: u,
                            emitEvents: c,
                            lastFrameIndex: -1
                        }, Ee(a, [p], [])
                    }
                }
            }
            for (Pe(), n = 0, r = e.length; r > n; n++) {
                var k = le[e[n][O]];
                k !== i && (J(k), te(k))
            }
            return oe
        }, n.prototype.relativeToAbsolute = function(e, t, i) {
            var n = r.clientHeight,
                s = e.getBoundingClientRect(),
                a = s.top,
                o = s.bottom - s.top;
            return t === E ? a -= n : t === M && (a -= n / 2), i === E ? a += o : i === M && (a += o / 2), a += oe.getScrollTop(), a + .5 | 0
        }, n.prototype.animateTo = function(e, t) {
            t = t || {};
            var n = Ie(),
                r = oe.getScrollTop(),
                s = t.duration === i ? x : t.duration;
            return pe = {
                startTop: r,
                topDiff: e - r,
                targetTop: e,
                duration: s,
                startTime: n,
                endTime: n + s,
                easing: G[t.easing || b],
                done: t.done
            }, pe.topDiff || (pe.done && pe.done.call(oe, !1), pe = i), oe
        }, n.prototype.stopAnimateTo = function() {
            pe && pe.done && pe.done.call(oe, !0), pe = i
        }, n.prototype.isAnimatingTo = function() {
            return !!pe
        }, n.prototype.isMobile = function() {
            return je
        }, n.prototype.setScrollTop = function(t, i) {
            return ve = i === !0, je ? Ue = l.min(l.max(t, 0), Fe) : e.scrollTo(0, t), oe
        }, n.prototype.getScrollTop = function() {
            return je ? Ue : e.pageYOffset || r.scrollTop || s.scrollTop || 0
        }, n.prototype.getMaxScrollTop = function() {
            return Fe
        }, n.prototype.on = function(e, t) {
            return ue[e] = t, oe
        }, n.prototype.off = function(e) {
            return delete ue[e], oe
        }, n.prototype.destroy = function() {
            var e = Q();
            e(Te), Se(), Ee(r, [w], [v, y, T]);
            for (var t = 0, n = le.length; n > t; t++) se(le[t].element);
            r.style.overflow = s.style.overflow = "", r.style.height = s.style.height = "", he && a.setStyle(he, "transform", "none"), oe = i, he = i, ue = i, ce = i, Fe = 0, ze = 1, de = i, fe = i, qe = "down", Le = -1, Ne = 0, Ye = 0, He = !1, pe = i, me = i, _e = i, ge = i, ve = i, Be = 0, we = i, je = !1, Ue = 0, ye = i
        };
        var $ = function() {
                var n, a, o, h, p, m, _, g, v, w, y, T;
                be(r, [u, c, d, f].join(" "), function(e) {
                    var r = e.changedTouches[0];
                    for (h = e.target; 3 === h.nodeType;) h = h.parentNode;
                    switch (p = r.clientY, m = r.clientX, w = e.timeStamp, D.test(h.tagName) || e.preventDefault(), e.type) {
                        case u:
                            n && n.blur(), oe.stopAnimateTo(), n = h, a = _ = p, o = m, v = w;
                            break;
                        case c:
                            D.test(h.tagName) && t.activeElement !== h && e.preventDefault(), g = p - _, T = w - y, oe.setScrollTop(Ue - g, !0), _ = p, y = w;
                            break;
                        default:
                        case d:
                        case f:
                            var s = a - p,
                                b = o - m,
                                x = b * b + s * s;
                            if (49 > x) {
                                if (!D.test(n.tagName)) {
                                    n.focus();
                                    var S = t.createEvent("MouseEvents");
                                    S.initMouseEvent("click", !0, !0, e.view, 1, r.screenX, r.screenY, r.clientX, r.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), n.dispatchEvent(S)
                                }
                                return
                            }
                            n = i;
                            var k = g / T;
                            k = l.max(l.min(k, 3), -3);
                            var P = l.abs(k / fe),
                                C = k * P + .5 * fe * P * P,
                                A = oe.getScrollTop() - C,
                                M = 0;
                            A > Fe ? (M = (Fe - A) / C, A = Fe) : 0 > A && (M = -A / C, A = 0), P *= 1 - M, oe.animateTo(A + .5 | 0, {
                                easing: "outCubic",
                                duration: P
                            })
                    }
                }), e.scrollTo(0, 0), r.style.overflow = s.style.overflow = "hidden"
            },
            V = function() {
                var e, t, i, n, s, a, o, h, u, c, d, f = r.clientHeight,
                    p = Ce();
                for (h = 0, u = le.length; u > h; h++)
                    for (e = le[h], t = e.element, i = e.anchorTarget, n = e.keyFrames, s = 0, a = n.length; a > s; s++) o = n[s], c = o.offset, d = p[o.constant] || 0, o.frame = c, o.isPercentage && (c *= f, o.frame = c), "relative" === o.mode && (se(t), o.frame = oe.relativeToAbsolute(i, o.anchors[0], o.anchors[1]) - c, se(t, !0)), o.frame += d, ce && !o.isEnd && o.frame > Fe && (Fe = o.frame);
                for (Fe = l.max(Fe, Ae()), h = 0, u = le.length; u > h; h++) {
                    for (e = le[h], n = e.keyFrames, s = 0, a = n.length; a > s; s++) o = n[s], d = p[o.constant] || 0, o.isEnd && (o.frame = Fe - o.offset + d);
                    e.keyFrames.sort(Re)
                }
            },
            K = function(e, t) {
                for (var i = 0, n = le.length; n > i; i++) {
                    var r, s, l = le[i],
                        h = l.element,
                        u = l.smoothScrolling ? e : t,
                        c = l.keyFrames,
                        d = c.length,
                        f = c[0],
                        v = c[c.length - 1],
                        w = u < f.frame,
                        y = u > v.frame,
                        T = w ? f : v,
                        b = l.emitEvents,
                        x = l.lastFrameIndex;
                    if (w || y) {
                        if (w && -1 === l.edge || y && 1 === l.edge) continue;
                        switch (w ? (Ee(h, [m], [g, _]), b && x > -1 && (ke(h, f.eventType, qe), l.lastFrameIndex = -1)) : (Ee(h, [g], [m, _]), b && d > x && (ke(h, v.eventType, qe), l.lastFrameIndex = d)), l.edge = w ? -1 : 1, l.edgeStrategy) {
                            case "reset":
                                se(h);
                                continue;
                            case "ease":
                                u = T.frame;
                                break;
                            default:
                            case "set":
                                var S = T.props;
                                for (r in S) o.call(S, r) && (s = re(S[r].value), 0 === r.indexOf("@") ? h.setAttribute(r.substr(1), s) : a.setStyle(h, r, s));
                                continue
                        }
                    } else 0 !== l.edge && (Ee(h, [p, _], [m, g]), l.edge = 0);
                    for (var k = 0; d - 1 > k; k++)
                        if (u >= c[k].frame && u <= c[k + 1].frame) {
                            var P = c[k],
                                C = c[k + 1];
                            for (r in P.props)
                                if (o.call(P.props, r)) {
                                    var A = (u - P.frame) / (C.frame - P.frame);
                                    A = P.props[r].easing(A), s = ne(P.props[r].value, C.props[r].value, A), s = re(s), 0 === r.indexOf("@") ? h.setAttribute(r.substr(1), s) : a.setStyle(h, r, s)
                                }
                            b && x !== k && ("down" === qe ? ke(h, P.eventType, qe) : ke(h, C.eventType, qe), l.lastFrameIndex = k);
                            break
                        }
                }
            },
            Z = function() {
                He && (He = !1, Pe());
                var e, t, n = oe.getScrollTop(),
                    r = Ie();
                if (pe) r >= pe.endTime ? (n = pe.targetTop, e = pe.done, pe = i) : (t = pe.easing((r - pe.startTime) / pe.duration), n = pe.startTop + t * pe.topDiff | 0), oe.setScrollTop(n, !0);
                else if (!ve) {
                    var s = ge.targetTop - n;
                    s && (ge = {
                        startTop: Le,
                        topDiff: n - Le,
                        targetTop: n,
                        startTime: Xe,
                        endTime: Xe + _e
                    }), r <= ge.endTime && (t = G.sqrt((r - ge.startTime) / _e), n = ge.startTop + t * ge.topDiff | 0)
                }
                if (ve || Le !== n) {
                    qe = n > Le ? "down" : Le > n ? "up" : qe, ve = !1;
                    var o = {
                            curTop: n,
                            lastTop: Le,
                            maxTop: Fe,
                            direction: qe
                        },
                        l = ue.beforerender && ue.beforerender.call(oe, o);
                    l !== !1 && (K(n, oe.getScrollTop()), je && he && a.setStyle(he, "transform", "translate(0, " + -Ue + "px) " + ye), Le = n, ue.render && ue.render.call(oe, o)), e && e.call(oe, !1)
                }
                Xe = r
            },
            J = function(e) {
                for (var t = 0, i = e.keyFrames.length; i > t; t++) {
                    for (var n, r, s, a, o = e.keyFrames[t], l = {}; null !== (a = F.exec(o.props));) s = a[1], r = a[2], n = s.match(z), null !== n ? (s = n[1], n = n[2]) : n = b, r = r.indexOf("!") ? ee(r) : [r.slice(1)], l[s] = {
                        value: r,
                        easing: G[n]
                    };
                    o.props = l
                }
            },
            ee = function(e) {
                var t = [];
                return Y.lastIndex = 0, e = e.replace(Y, function(e) {
                    return e.replace(X, function(e) {
                        return e / 255 * 100 + "%"
                    })
                }), j && (H.lastIndex = 0, e = e.replace(H, function(e) {
                    return j + e
                })), e = e.replace(X, function(e) {
                    return t.push(+e), "{?}"
                }), t.unshift(e), t
            },
            te = function(e) {
                var t, i, n = {};
                for (t = 0, i = e.keyFrames.length; i > t; t++) ie(e.keyFrames[t], n);
                for (n = {}, t = e.keyFrames.length - 1; t >= 0; t--) ie(e.keyFrames[t], n)
            },
            ie = function(e, t) {
                var i;
                for (i in t) o.call(e.props, i) || (e.props[i] = t[i]);
                for (i in e.props) t[i] = e.props[i]
            },
            ne = function(e, t, i) {
                var n, r = e.length;
                if (r !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
                var s = [e[0]];
                for (n = 1; r > n; n++) s[n] = e[n] + (t[n] - e[n]) * i;
                return s
            },
            re = function(e) {
                var t = 1;
                return N.lastIndex = 0, e[0].replace(N, function() {
                    return e[t++]
                })
            },
            se = function(e, t) {
                e = [].concat(e);
                for (var i, n, r = 0, s = e.length; s > r; r++) n = e[r], i = le[n[O]], i && (t ? (n.style.cssText = i.dirtyStyleAttr, Ee(n, i.dirtyClassAttr)) : (i.dirtyStyleAttr = n.style.cssText, i.dirtyClassAttr = Me(n), n.style.cssText = i.styleAttr, Ee(n, i.classAttr)))
            },
            ae = function() {
                ye = "translateZ(0)", a.setStyle(he, "transform", ye);
                var e = h(he),
                    t = e.getPropertyValue("transform"),
                    i = e.getPropertyValue(j + "transform"),
                    n = t && "none" !== t || i && "none" !== i;
                n || (ye = "")
            };
        a.setStyle = function(e, t, i) {
            var n = e.style;
            if (t = t.replace(q, L).replace("-", ""), "zIndex" === t) isNaN(i) ? n[t] = i : n[t] = "" + (0 | i);
            else if ("float" === t) n.styleFloat = n.cssFloat = i;
            else try {
                B && (n[B + t.slice(0, 1).toUpperCase() + t.slice(1)] = i), n[t] = i
            } catch (r) {}
        };
        var oe, le, he, ue, ce, de, fe, pe, me, _e, ge, ve, we, ye, Te, be = a.addEvent = function(t, i, n) {
                var r = function(t) {
                    return t = t || e.event, t.target || (t.target = t.srcElement), t.preventDefault || (t.preventDefault = function() {
                        t.returnValue = !1, t.defaultPrevented = !0
                    }), n.call(this, t)
                };
                i = i.split(" ");
                for (var s, a = 0, o = i.length; o > a; a++) s = i[a], t.addEventListener ? t.addEventListener(s, n, !1) : t.attachEvent("on" + s, r), We.push({
                    element: t,
                    name: s,
                    listener: n
                })
            },
            xe = a.removeEvent = function(e, t, i) {
                t = t.split(" ");
                for (var n = 0, r = t.length; r > n; n++) e.removeEventListener ? e.removeEventListener(t[n], i, !1) : e.detachEvent("on" + t[n], i)
            },
            Se = function() {
                for (var e, t = 0, i = We.length; i > t; t++) e = We[t], xe(e.element, e.name, e.listener);
                We = []
            },
            ke = function(e, t, i) {
                ue.keyframe && ue.keyframe.call(oe, e, t, i)
            },
            Pe = function() {
                var e = oe.getScrollTop();
                Fe = 0, ce && !je && (s.style.height = ""), V(), ce && !je && (s.style.height = Fe + r.clientHeight + "px"), je ? oe.setScrollTop(l.min(oe.getScrollTop(), Fe)) : oe.setScrollTop(e, !0), ve = !0
            },
            Ce = function() {
                var e, t, i = r.clientHeight,
                    n = {};
                for (e in de) t = de[e], "function" == typeof t ? t = t.call(oe) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * i), n[e] = t;
                return n
            },
            Ae = function() {
                var e, t = 0;
                return he && (t = l.max(he.offsetHeight, he.scrollHeight)), e = l.max(t, s.scrollHeight, s.offsetHeight, r.scrollHeight, r.offsetHeight, r.clientHeight), e - r.clientHeight
            },
            Me = function(t) {
                var i = "className";
                return e.SVGElement && t instanceof e.SVGElement && (t = t[i], i = "baseVal"), t[i]
            },
            Ee = function(t, n, r) {
                var s = "className";
                if (e.SVGElement && t instanceof e.SVGElement && (t = t[s], s = "baseVal"), r === i) return void(t[s] = n);
                for (var a = t[s], o = 0, l = r.length; l > o; o++) a = De(a).replace(De(r[o]), " ");
                a = Oe(a);
                for (var h = 0, u = n.length; u > h; h++) - 1 === De(a).indexOf(De(n[h])) && (a += " " + n[h]);
                t[s] = Oe(a)
            },
            Oe = function(e) {
                return e.replace(I, "")
            },
            De = function(e) {
                return " " + e + " "
            },
            Ie = Date.now || function() {
                return +new Date
            },
            Re = function(e, t) {
                return e.frame - t.frame
            },
            Fe = 0,
            ze = 1,
            qe = "down",
            Le = -1,
            Xe = Ie(),
            Ne = 0,
            Ye = 0,
            He = !1,
            Be = 0,
            je = !1,
            Ue = 0,
            We = [];
        "function" == typeof define && define.amd ? define([], function() {
            return a
        }) : "undefined" != typeof module && module.exports ? module.exports = a : e.skrollr = a
    }(window, document);
var isMobile, isOSX = !1; - 1 != navigator.userAgent.indexOf("Mac OS X") && (isOSX = !0), /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? (isMobile = !0, $("html").addClass("mobile")) : (isMobile = !1, $("html").addClass("no-mobile")), isMobile || isOSX || ! function() {
    function e() {
        var e = !1;
        e && h("keydown", r), v.keyboardSupport && !e && l("keydown", r)
    }

    function t() {
        if (document.body) {
            var t = document.body,
                i = document.documentElement,
                n = window.innerHeight,
                r = t.scrollHeight;
            if (x = document.compatMode.indexOf("CSS") >= 0 ? i : t, _ = t, e(), b = !0, top != self) y = !0;
            else if (r > n && (t.offsetHeight <= n || i.offsetHeight <= n) && (i.style.height = "auto", x.offsetHeight <= n)) {
                var s = document.createElement("div");
                s.style.clear = "both", t.appendChild(s)
            }
            v.fixedBackground || w || (t.style.backgroundAttachment = "scroll", i.style.backgroundAttachment = "scroll")
        }
    }

    function i(e, t, i, n) {
        if (n || (n = 1e3), c(t, i), 1 != v.accelerationMax) {
            var r = +new Date,
                s = r - A;
            if (s < v.accelerationDelta) {
                var a = (1 + 30 / s) / 2;
                a > 1 && (a = Math.min(a, v.accelerationMax), t *= a, i *= a)
            }
            A = +new Date
        }
        if (P.push({
                x: t,
                y: i,
                lastX: 0 > t ? .99 : -.99,
                lastY: 0 > i ? .99 : -.99,
                start: +new Date
            }), !C) {
            var o = e === document.body,
                l = function(r) {
                    for (var s = +new Date, a = 0, h = 0, u = 0; u < P.length; u++) {
                        var c = P[u],
                            d = s - c.start,
                            f = d >= v.animationTime,
                            p = f ? 1 : d / v.animationTime;
                        v.pulseAlgorithm && (p = m(p));
                        var _ = c.x * p - c.lastX >> 0,
                            g = c.y * p - c.lastY >> 0;
                        a += _, h += g, c.lastX += _, c.lastY += g, f && (P.splice(u, 1), u--)
                    }
                    o ? window.scrollBy(a, h) : (a && (e.scrollLeft += a), h && (e.scrollTop += h)), t || i || (P = []), P.length ? D(l, e, n / v.frameRate + 1) : C = !1
                };
            D(l, e, 0), C = !0
        }
    }

    function n(e) {
        b || t();
        var n = e.target,
            r = o(n);
        if (!r || e.defaultPrevented || u(_, "embed") || u(n, "embed") && /\.pdf/i.test(n.src)) return !0;
        var s = e.wheelDeltaX || 0,
            a = e.wheelDeltaY || 0;
        return s || a || (a = e.wheelDelta || 0), !v.touchpadSupport && d(a) ? !0 : (Math.abs(s) > 1.2 && (s *= v.stepSize / 120), Math.abs(a) > 1.2 && (a *= v.stepSize / 120), i(r, -s, -a), void e.preventDefault())
    }

    function r(e) {
        var t = e.target,
            n = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== k.spacebar;
        if (/input|textarea|select|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || n) return !0;
        if (u(t, "button") && e.keyCode === k.spacebar) return !0;
        var r, s = 0,
            a = 0,
            l = o(_),
            h = l.clientHeight;
        switch (l == document.body && (h = window.innerHeight), e.keyCode) {
            case k.up:
                a = -v.arrowScroll;
                break;
            case k.down:
                a = v.arrowScroll;
                break;
            case k.spacebar:
                r = e.shiftKey ? 1 : -1, a = -r * h * .9;
                break;
            case k.pageup:
                a = .9 * -h;
                break;
            case k.pagedown:
                a = .9 * h;
                break;
            case k.home:
                a = -l.scrollTop;
                break;
            case k.end:
                var c = l.scrollHeight - l.scrollTop - h;
                a = c > 0 ? c + 10 : 0;
                break;
            case k.left:
                s = -v.arrowScroll;
                break;
            case k.right:
                s = v.arrowScroll;
                break;
            default:
                return !0
        }
        i(l, s, a), e.preventDefault()
    }

    function s(e) {
        _ = e.target
    }

    function a(e, t) {
        for (var i = e.length; i--;) M[O(e[i])] = t;
        return t
    }

    function o(e) {
        var t = [],
            i = x.scrollHeight;
        do {
            var n = M[O(e)];
            if (n) return a(t, n);
            if (t.push(e), i === e.scrollHeight) {
                if (!y || x.clientHeight + 10 < i) return a(t, document.body)
            } else if (e.clientHeight + 10 < e.scrollHeight && (overflow = getComputedStyle(e, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return a(t, e)
        } while (e = e.parentNode)
    }

    function l(e, t, i) {
        window.addEventListener(e, t, i || !1)
    }

    function h(e, t, i) {
        window.removeEventListener(e, t, i || !1)
    }

    function u(e, t) {
        return (e.nodeName || "").toLowerCase() === t.toLowerCase()
    }

    function c(e, t) {
        e = e > 0 ? 1 : -1, t = t > 0 ? 1 : -1, (T.x !== e || T.y !== t) && (T.x = e, T.y = t, P = [], A = 0)
    }

    function d(e) {
        if (e) {
            e = Math.abs(e), S.push(e), S.shift(), clearTimeout(E);
            var t = S[0] == S[1] && S[1] == S[2],
                i = f(S[0], 120) && f(S[1], 120) && f(S[2], 120);
            return !(t || i)
        }
    }

    function f(e, t) {
        return Math.floor(e / t) == e / t
    }

    function p(e) {
        var t, i, n;
        return e *= v.pulseScale, 1 > e ? t = e - (1 - Math.exp(-e)) : (i = Math.exp(-1), e -= 1, n = 1 - Math.exp(-e), t = i + n * (1 - i)), t * v.pulseNormalize
    }

    function m(e) {
        return e >= 1 ? 1 : 0 >= e ? 0 : (1 == v.pulseNormalize && (v.pulseNormalize /= p(1)), p(e))
    }
    var _, g = {
            frameRate: 150,
            animationTime: 600,
            stepSize: 150,
            pulseAlgorithm: !0,
            pulseScale: 6,
            pulseNormalize: 1,
            accelerationDelta: 20,
            accelerationMax: 1,
            keyboardSupport: !0,
            arrowScroll: 50,
            touchpadSupport: !1,
            fixedBackground: !0,
            excluded: ""
        },
        v = g,
        w = !1,
        y = !1,
        T = {
            x: 0,
            y: 0
        },
        b = !1,
        x = document.documentElement,
        S = [120, 120, 120],
        k = {
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            spacebar: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36
        },
        v = g,
        P = [],
        C = !1,
        A = +new Date,
        M = {};
    setInterval(function() {
        M = {}
    }, 1e4);
    var E, O = function() {
            var e = 0;
            return function(t) {
                return t.uniqueID || (t.uniqueID = e++)
            }
        }(),
        D = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(e, t, i) {
                window.setTimeout(e, i || 1e3 / 60)
            }
        }(),
        I = /chrome/i.test(window.navigator.userAgent),
        R = "onmousewheel" in document;
    R && I && (l("mousedown", s), l("mousewheel", n), l("load", t))
}();