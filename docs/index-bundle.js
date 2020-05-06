!(function(t) {
  function e(e) {
    for (var i, o, r = e[0], s = e[1], a = 0, l = []; a < r.length; a++)
      (o = r[a]), Object.prototype.hasOwnProperty.call(n, o) && n[o] && l.push(n[o][0]), (n[o] = 0);
    for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i]);
    for (h && h(e); l.length; ) l.shift()();
  }
  var i = {},
    n = { 0: 0 };
  function o(e) {
    if (i[e]) return i[e].exports;
    var n = (i[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.e = function(t) {
    var e = [],
      i = n[t];
    if (0 !== i)
      if (i) e.push(i[2]);
      else {
        var r = new Promise(function(e, o) {
          i = n[t] = [e, o];
        });
        e.push((i[2] = r));
        var s,
          a = document.createElement('script');
        (a.charset = 'utf-8'),
          (a.timeout = 120),
          o.nc && a.setAttribute('nonce', o.nc),
          (a.src = (function(t) {
            return o.p + '' + t + '.index-bundle.js';
          })(t));
        var h = new Error();
        s = function(e) {
          (a.onerror = a.onload = null), clearTimeout(l);
          var i = n[t];
          if (0 !== i) {
            if (i) {
              var o = e && ('load' === e.type ? 'missing' : e.type),
                r = e && e.target && e.target.src;
              (h.message = 'Loading chunk ' + t + ' failed.\n(' + o + ': ' + r + ')'),
                (h.name = 'ChunkLoadError'),
                (h.type = o),
                (h.request = r),
                i[1](h);
            }
            n[t] = void 0;
          }
        };
        var l = setTimeout(function() {
          s({ type: 'timeout', target: a });
        }, 12e4);
        (a.onerror = a.onload = s), document.head.appendChild(a);
      }
    return Promise.all(e);
  }),
    (o.m = t),
    (o.c = i),
    (o.d = function(t, e, i) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (o.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (o.t = function(t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if ((o.r(i), Object.defineProperty(i, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
        for (var n in t)
          o.d(
            i,
            n,
            function(e) {
              return t[e];
            }.bind(null, n)
          );
      return i;
    }),
    (o.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return o.d(e, 'a', e), e;
    }),
    (o.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = ''),
    (o.oe = function(t) {
      throw (console.error(t), t);
    });
  var r = (window.webpackJsonp = window.webpackJsonp || []),
    s = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var a = 0; a < r.length; a++) e(r[a]);
  var h = s;
  o((o.s = 11));
})([
  function(t, e, i) {
    /* @preserve
     * Leaflet 1.6.0, a JS library for interactive maps. http://leafletjs.com
     * (c) 2010-2019 Vladimir Agafonkin, (c) 2010-2011 CloudMade
     */
    !(function(t) {
      'use strict';
      var e = Object.freeze;
      function i(t) {
        var e, i, n, o;
        for (i = 1, n = arguments.length; i < n; i++) for (e in (o = arguments[i])) t[e] = o[e];
        return t;
      }
      Object.freeze = function(t) {
        return t;
      };
      var n =
        Object.create ||
        (function() {
          function t() {}
          return function(e) {
            return (t.prototype = e), new t();
          };
        })();
      function o(t, e) {
        var i = Array.prototype.slice;
        if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
        var n = i.call(arguments, 2);
        return function() {
          return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments);
        };
      }
      var r = 0;
      function s(t) {
        return (t._leaflet_id = t._leaflet_id || ++r), t._leaflet_id;
      }
      function a(t, e, i) {
        var n, o, r, s;
        return (
          (s = function() {
            (n = !1), o && (r.apply(i, o), (o = !1));
          }),
          (r = function() {
            n ? (o = arguments) : (t.apply(i, arguments), setTimeout(s, e), (n = !0));
          })
        );
      }
      function h(t, e, i) {
        var n = e[1],
          o = e[0],
          r = n - o;
        return t === n && i ? t : ((((t - o) % r) + r) % r) + o;
      }
      function l() {
        return !1;
      }
      function u(t, e) {
        var i = Math.pow(10, void 0 === e ? 6 : e);
        return Math.round(t * i) / i;
      }
      function c(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
      }
      function d(t) {
        return c(t).split(/\s+/);
      }
      function p(t, e) {
        for (var i in (t.hasOwnProperty('options') || (t.options = t.options ? n(t.options) : {}), e))
          t.options[i] = e[i];
        return t.options;
      }
      function f(t, e, i) {
        var n = [];
        for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + '=' + encodeURIComponent(t[o]));
        return (e && -1 !== e.indexOf('?') ? '&' : '?') + n.join('&');
      }
      var _ = /\{ *([\w_-]+) *\}/g;
      function m(t, e) {
        return t.replace(_, function(t, i) {
          var n = e[i];
          if (void 0 === n) throw new Error('No value provided for variable ' + t);
          return 'function' == typeof n && (n = n(e)), n;
        });
      }
      var g =
        Array.isArray ||
        function(t) {
          return '[object Array]' === Object.prototype.toString.call(t);
        };
      function v(t, e) {
        for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
        return -1;
      }
      var y = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
      function x(t) {
        return window['webkit' + t] || window['moz' + t] || window['ms' + t];
      }
      var b = 0;
      function w(t) {
        var e = +new Date(),
          i = Math.max(0, 16 - (e - b));
        return (b = e + i), window.setTimeout(t, i);
      }
      var P = window.requestAnimationFrame || x('RequestAnimationFrame') || w,
        T =
          window.cancelAnimationFrame ||
          x('CancelAnimationFrame') ||
          x('CancelRequestAnimationFrame') ||
          function(t) {
            window.clearTimeout(t);
          };
      function z(t, e, i) {
        if (!i || P !== w) return P.call(window, o(t, e));
        t.call(e);
      }
      function M(t) {
        t && T.call(window, t);
      }
      var E = (Object.freeze || Object)({
        freeze: e,
        extend: i,
        create: n,
        bind: o,
        lastId: r,
        stamp: s,
        throttle: a,
        wrapNum: h,
        falseFn: l,
        formatNum: u,
        trim: c,
        splitWords: d,
        setOptions: p,
        getParamString: f,
        template: m,
        isArray: g,
        indexOf: v,
        emptyImageUrl: y,
        requestFn: P,
        cancelFn: T,
        requestAnimFrame: z,
        cancelAnimFrame: M
      });
      function A() {}
      (A.extend = function(t) {
        var e = function() {
            this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
          },
          o = (e.__super__ = this.prototype),
          r = n(o);
        for (var s in ((r.constructor = e), (e.prototype = r), this))
          this.hasOwnProperty(s) && 'prototype' !== s && '__super__' !== s && (e[s] = this[s]);
        return (
          t.statics && (i(e, t.statics), delete t.statics),
          t.includes &&
            ((function(t) {
              if ('undefined' != typeof L && L && L.Mixin) {
                t = g(t) ? t : [t];
                for (var e = 0; e < t.length; e++)
                  t[e] === L.Mixin.Events &&
                    console.warn(
                      'Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.',
                      new Error().stack
                    );
              }
            })(t.includes),
            i.apply(null, [r].concat(t.includes)),
            delete t.includes),
          r.options && (t.options = i(n(r.options), t.options)),
          i(r, t),
          (r._initHooks = []),
          (r.callInitHooks = function() {
            if (!this._initHooksCalled) {
              o.callInitHooks && o.callInitHooks.call(this), (this._initHooksCalled = !0);
              for (var t = 0, e = r._initHooks.length; t < e; t++) r._initHooks[t].call(this);
            }
          }),
          e
        );
      }),
        (A.include = function(t) {
          return i(this.prototype, t), this;
        }),
        (A.mergeOptions = function(t) {
          return i(this.prototype.options, t), this;
        }),
        (A.addInitHook = function(t) {
          var e = Array.prototype.slice.call(arguments, 1),
            i =
              'function' == typeof t
                ? t
                : function() {
                    this[t].apply(this, e);
                  };
          return (this.prototype._initHooks = this.prototype._initHooks || []), this.prototype._initHooks.push(i), this;
        });
      var k = {
        on: function(t, e, i) {
          if ('object' == typeof t) for (var n in t) this._on(n, t[n], e);
          else for (var o = 0, r = (t = d(t)).length; o < r; o++) this._on(t[o], e, i);
          return this;
        },
        off: function(t, e, i) {
          if (t)
            if ('object' == typeof t) for (var n in t) this._off(n, t[n], e);
            else for (var o = 0, r = (t = d(t)).length; o < r; o++) this._off(t[o], e, i);
          else delete this._events;
          return this;
        },
        _on: function(t, e, i) {
          this._events = this._events || {};
          var n = this._events[t];
          n || ((n = []), (this._events[t] = n)), i === this && (i = void 0);
          for (var o = { fn: e, ctx: i }, r = n, s = 0, a = r.length; s < a; s++)
            if (r[s].fn === e && r[s].ctx === i) return;
          r.push(o);
        },
        _off: function(t, e, i) {
          var n, o, r;
          if (this._events && (n = this._events[t]))
            if (e) {
              if ((i === this && (i = void 0), n))
                for (o = 0, r = n.length; o < r; o++) {
                  var s = n[o];
                  if (s.ctx === i && s.fn === e)
                    return (s.fn = l), this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1);
                }
            } else {
              for (o = 0, r = n.length; o < r; o++) n[o].fn = l;
              delete this._events[t];
            }
        },
        fire: function(t, e, n) {
          if (!this.listens(t, n)) return this;
          var o = i({}, e, { type: t, target: this, sourceTarget: (e && e.sourceTarget) || this });
          if (this._events) {
            var r = this._events[t];
            if (r) {
              this._firingCount = this._firingCount + 1 || 1;
              for (var s = 0, a = r.length; s < a; s++) {
                var h = r[s];
                h.fn.call(h.ctx || this, o);
              }
              this._firingCount--;
            }
          }
          return n && this._propagateEvent(o), this;
        },
        listens: function(t, e) {
          var i = this._events && this._events[t];
          if (i && i.length) return !0;
          if (e) for (var n in this._eventParents) if (this._eventParents[n].listens(t, e)) return !0;
          return !1;
        },
        once: function(t, e, i) {
          if ('object' == typeof t) {
            for (var n in t) this.once(n, t[n], e);
            return this;
          }
          var r = o(function() {
            this.off(t, e, i).off(t, r, i);
          }, this);
          return this.on(t, e, i).on(t, r, i);
        },
        addEventParent: function(t) {
          return (this._eventParents = this._eventParents || {}), (this._eventParents[s(t)] = t), this;
        },
        removeEventParent: function(t) {
          return this._eventParents && delete this._eventParents[s(t)], this;
        },
        _propagateEvent: function(t) {
          for (var e in this._eventParents)
            this._eventParents[e].fire(t.type, i({ layer: t.target, propagatedFrom: t.target }, t), !0);
        }
      };
      (k.addEventListener = k.on),
        (k.removeEventListener = k.clearAllEventListeners = k.off),
        (k.addOneTimeEventListener = k.once),
        (k.fireEvent = k.fire),
        (k.hasEventListeners = k.listens);
      var C = A.extend(k);
      function S(t, e, i) {
        (this.x = i ? Math.round(t) : t), (this.y = i ? Math.round(e) : e);
      }
      var Z =
        Math.trunc ||
        function(t) {
          return t > 0 ? Math.floor(t) : Math.ceil(t);
        };
      function B(t, e, i) {
        return t instanceof S
          ? t
          : g(t)
          ? new S(t[0], t[1])
          : null == t
          ? t
          : 'object' == typeof t && 'x' in t && 'y' in t
          ? new S(t.x, t.y)
          : new S(t, e, i);
      }
      function I(t, e) {
        if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
      }
      function O(t, e) {
        return !t || t instanceof I ? t : new I(t, e);
      }
      function R(t, e) {
        if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
      }
      function N(t, e) {
        return t instanceof R ? t : new R(t, e);
      }
      function D(t, e, i) {
        if (isNaN(t) || isNaN(e)) throw new Error('Invalid LatLng object: (' + t + ', ' + e + ')');
        (this.lat = +t), (this.lng = +e), void 0 !== i && (this.alt = +i);
      }
      function j(t, e, i) {
        return t instanceof D
          ? t
          : g(t) && 'object' != typeof t[0]
          ? 3 === t.length
            ? new D(t[0], t[1], t[2])
            : 2 === t.length
            ? new D(t[0], t[1])
            : null
          : null == t
          ? t
          : 'object' == typeof t && 'lat' in t
          ? new D(t.lat, 'lng' in t ? t.lng : t.lon, t.alt)
          : void 0 === e
          ? null
          : new D(t, e, i);
      }
      (S.prototype = {
        clone: function() {
          return new S(this.x, this.y);
        },
        add: function(t) {
          return this.clone()._add(B(t));
        },
        _add: function(t) {
          return (this.x += t.x), (this.y += t.y), this;
        },
        subtract: function(t) {
          return this.clone()._subtract(B(t));
        },
        _subtract: function(t) {
          return (this.x -= t.x), (this.y -= t.y), this;
        },
        divideBy: function(t) {
          return this.clone()._divideBy(t);
        },
        _divideBy: function(t) {
          return (this.x /= t), (this.y /= t), this;
        },
        multiplyBy: function(t) {
          return this.clone()._multiplyBy(t);
        },
        _multiplyBy: function(t) {
          return (this.x *= t), (this.y *= t), this;
        },
        scaleBy: function(t) {
          return new S(this.x * t.x, this.y * t.y);
        },
        unscaleBy: function(t) {
          return new S(this.x / t.x, this.y / t.y);
        },
        round: function() {
          return this.clone()._round();
        },
        _round: function() {
          return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
        },
        floor: function() {
          return this.clone()._floor();
        },
        _floor: function() {
          return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
        },
        ceil: function() {
          return this.clone()._ceil();
        },
        _ceil: function() {
          return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
        },
        trunc: function() {
          return this.clone()._trunc();
        },
        _trunc: function() {
          return (this.x = Z(this.x)), (this.y = Z(this.y)), this;
        },
        distanceTo: function(t) {
          var e = (t = B(t)).x - this.x,
            i = t.y - this.y;
          return Math.sqrt(e * e + i * i);
        },
        equals: function(t) {
          return (t = B(t)).x === this.x && t.y === this.y;
        },
        contains: function(t) {
          return (t = B(t)), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
        },
        toString: function() {
          return 'Point(' + u(this.x) + ', ' + u(this.y) + ')';
        }
      }),
        (I.prototype = {
          extend: function(t) {
            return (
              (t = B(t)),
              this.min || this.max
                ? ((this.min.x = Math.min(t.x, this.min.x)),
                  (this.max.x = Math.max(t.x, this.max.x)),
                  (this.min.y = Math.min(t.y, this.min.y)),
                  (this.max.y = Math.max(t.y, this.max.y)))
                : ((this.min = t.clone()), (this.max = t.clone())),
              this
            );
          },
          getCenter: function(t) {
            return new S((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
          },
          getBottomLeft: function() {
            return new S(this.min.x, this.max.y);
          },
          getTopRight: function() {
            return new S(this.max.x, this.min.y);
          },
          getTopLeft: function() {
            return this.min;
          },
          getBottomRight: function() {
            return this.max;
          },
          getSize: function() {
            return this.max.subtract(this.min);
          },
          contains: function(t) {
            var e, i;
            return (
              (t = 'number' == typeof t[0] || t instanceof S ? B(t) : O(t)) instanceof I
                ? ((e = t.min), (i = t.max))
                : (e = i = t),
              e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
            );
          },
          intersects: function(t) {
            t = O(t);
            var e = this.min,
              i = this.max,
              n = t.min,
              o = t.max,
              r = o.x >= e.x && n.x <= i.x,
              s = o.y >= e.y && n.y <= i.y;
            return r && s;
          },
          overlaps: function(t) {
            t = O(t);
            var e = this.min,
              i = this.max,
              n = t.min,
              o = t.max,
              r = o.x > e.x && n.x < i.x,
              s = o.y > e.y && n.y < i.y;
            return r && s;
          },
          isValid: function() {
            return !(!this.min || !this.max);
          }
        }),
        (R.prototype = {
          extend: function(t) {
            var e,
              i,
              n = this._southWest,
              o = this._northEast;
            if (t instanceof D) (e = t), (i = t);
            else {
              if (!(t instanceof R)) return t ? this.extend(j(t) || N(t)) : this;
              if (((e = t._southWest), (i = t._northEast), !e || !i)) return this;
            }
            return (
              n || o
                ? ((n.lat = Math.min(e.lat, n.lat)),
                  (n.lng = Math.min(e.lng, n.lng)),
                  (o.lat = Math.max(i.lat, o.lat)),
                  (o.lng = Math.max(i.lng, o.lng)))
                : ((this._southWest = new D(e.lat, e.lng)), (this._northEast = new D(i.lat, i.lng))),
              this
            );
          },
          pad: function(t) {
            var e = this._southWest,
              i = this._northEast,
              n = Math.abs(e.lat - i.lat) * t,
              o = Math.abs(e.lng - i.lng) * t;
            return new R(new D(e.lat - n, e.lng - o), new D(i.lat + n, i.lng + o));
          },
          getCenter: function() {
            return new D(
              (this._southWest.lat + this._northEast.lat) / 2,
              (this._southWest.lng + this._northEast.lng) / 2
            );
          },
          getSouthWest: function() {
            return this._southWest;
          },
          getNorthEast: function() {
            return this._northEast;
          },
          getNorthWest: function() {
            return new D(this.getNorth(), this.getWest());
          },
          getSouthEast: function() {
            return new D(this.getSouth(), this.getEast());
          },
          getWest: function() {
            return this._southWest.lng;
          },
          getSouth: function() {
            return this._southWest.lat;
          },
          getEast: function() {
            return this._northEast.lng;
          },
          getNorth: function() {
            return this._northEast.lat;
          },
          contains: function(t) {
            t = 'number' == typeof t[0] || t instanceof D || 'lat' in t ? j(t) : N(t);
            var e,
              i,
              n = this._southWest,
              o = this._northEast;
            return (
              t instanceof R ? ((e = t.getSouthWest()), (i = t.getNorthEast())) : (e = i = t),
              e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
            );
          },
          intersects: function(t) {
            t = N(t);
            var e = this._southWest,
              i = this._northEast,
              n = t.getSouthWest(),
              o = t.getNorthEast(),
              r = o.lat >= e.lat && n.lat <= i.lat,
              s = o.lng >= e.lng && n.lng <= i.lng;
            return r && s;
          },
          overlaps: function(t) {
            t = N(t);
            var e = this._southWest,
              i = this._northEast,
              n = t.getSouthWest(),
              o = t.getNorthEast(),
              r = o.lat > e.lat && n.lat < i.lat,
              s = o.lng > e.lng && n.lng < i.lng;
            return r && s;
          },
          toBBoxString: function() {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
          },
          equals: function(t, e) {
            return (
              !!t &&
              ((t = N(t)), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
            );
          },
          isValid: function() {
            return !(!this._southWest || !this._northEast);
          }
        }),
        (D.prototype = {
          equals: function(t, e) {
            return (
              !!t &&
              ((t = j(t)),
              Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
            );
          },
          toString: function(t) {
            return 'LatLng(' + u(this.lat, t) + ', ' + u(this.lng, t) + ')';
          },
          distanceTo: function(t) {
            return H.distance(this, j(t));
          },
          wrap: function() {
            return H.wrapLatLng(this);
          },
          toBounds: function(t) {
            var e = (180 * t) / 40075017,
              i = e / Math.cos((Math.PI / 180) * this.lat);
            return N([this.lat - e, this.lng - i], [this.lat + e, this.lng + i]);
          },
          clone: function() {
            return new D(this.lat, this.lng, this.alt);
          }
        });
      var F,
        U = {
          latLngToPoint: function(t, e) {
            var i = this.projection.project(t),
              n = this.scale(e);
            return this.transformation._transform(i, n);
          },
          pointToLatLng: function(t, e) {
            var i = this.scale(e),
              n = this.transformation.untransform(t, i);
            return this.projection.unproject(n);
          },
          project: function(t) {
            return this.projection.project(t);
          },
          unproject: function(t) {
            return this.projection.unproject(t);
          },
          scale: function(t) {
            return 256 * Math.pow(2, t);
          },
          zoom: function(t) {
            return Math.log(t / 256) / Math.LN2;
          },
          getProjectedBounds: function(t) {
            if (this.infinite) return null;
            var e = this.projection.bounds,
              i = this.scale(t);
            return new I(this.transformation.transform(e.min, i), this.transformation.transform(e.max, i));
          },
          infinite: !1,
          wrapLatLng: function(t) {
            var e = this.wrapLng ? h(t.lng, this.wrapLng, !0) : t.lng;
            return new D(this.wrapLat ? h(t.lat, this.wrapLat, !0) : t.lat, e, t.alt);
          },
          wrapLatLngBounds: function(t) {
            var e = t.getCenter(),
              i = this.wrapLatLng(e),
              n = e.lat - i.lat,
              o = e.lng - i.lng;
            if (0 === n && 0 === o) return t;
            var r = t.getSouthWest(),
              s = t.getNorthEast();
            return new R(new D(r.lat - n, r.lng - o), new D(s.lat - n, s.lng - o));
          }
        },
        H = i({}, U, {
          wrapLng: [-180, 180],
          R: 6371e3,
          distance: function(t, e) {
            var i = Math.PI / 180,
              n = t.lat * i,
              o = e.lat * i,
              r = Math.sin(((e.lat - t.lat) * i) / 2),
              s = Math.sin(((e.lng - t.lng) * i) / 2),
              a = r * r + Math.cos(n) * Math.cos(o) * s * s,
              h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return this.R * h;
          }
        }),
        W = {
          R: 6378137,
          MAX_LATITUDE: 85.0511287798,
          project: function(t) {
            var e = Math.PI / 180,
              i = this.MAX_LATITUDE,
              n = Math.max(Math.min(i, t.lat), -i),
              o = Math.sin(n * e);
            return new S(this.R * t.lng * e, (this.R * Math.log((1 + o) / (1 - o))) / 2);
          },
          unproject: function(t) {
            var e = 180 / Math.PI;
            return new D((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, (t.x * e) / this.R);
          },
          bounds: ((F = 6378137 * Math.PI), new I([-F, -F], [F, F]))
        };
      function q(t, e, i, n) {
        if (g(t)) return (this._a = t[0]), (this._b = t[1]), (this._c = t[2]), void (this._d = t[3]);
        (this._a = t), (this._b = e), (this._c = i), (this._d = n);
      }
      function V(t, e, i, n) {
        return new q(t, e, i, n);
      }
      q.prototype = {
        transform: function(t, e) {
          return this._transform(t.clone(), e);
        },
        _transform: function(t, e) {
          return (e = e || 1), (t.x = e * (this._a * t.x + this._b)), (t.y = e * (this._c * t.y + this._d)), t;
        },
        untransform: function(t, e) {
          return (e = e || 1), new S((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c);
        }
      };
      var G = i({}, H, {
          code: 'EPSG:3857',
          projection: W,
          transformation: (function() {
            var t = 0.5 / (Math.PI * W.R);
            return V(t, 0.5, -t, 0.5);
          })()
        }),
        J = i({}, G, { code: 'EPSG:900913' });
      function K(t) {
        return document.createElementNS('http://www.w3.org/2000/svg', t);
      }
      function Y(t, e) {
        var i,
          n,
          o,
          r,
          s,
          a,
          h = '';
        for (i = 0, o = t.length; i < o; i++) {
          for (n = 0, r = (s = t[i]).length; n < r; n++) h += (n ? 'L' : 'M') + (a = s[n]).x + ' ' + a.y;
          h += e ? (Et ? 'z' : 'x') : '';
        }
        return h || 'M0 0';
      }
      var X = document.documentElement.style,
        Q = 'ActiveXObject' in window,
        $ = Q && !document.addEventListener,
        tt = 'msLaunchUri' in navigator && !('documentMode' in document),
        et = kt('webkit'),
        it = kt('android'),
        nt = kt('android 2') || kt('android 3'),
        ot = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
        rt = it && kt('Google') && ot < 537 && !('AudioNode' in window),
        st = !!window.opera,
        at = kt('chrome'),
        ht = kt('gecko') && !et && !st && !Q,
        lt = !at && kt('safari'),
        ut = kt('phantom'),
        ct = 'OTransition' in X,
        dt = 0 === navigator.platform.indexOf('Win'),
        pt = Q && 'transition' in X,
        ft = 'WebKitCSSMatrix' in window && 'm11' in new window.WebKitCSSMatrix() && !nt,
        _t = 'MozPerspective' in X,
        mt = !window.L_DISABLE_3D && (pt || ft || _t) && !ct && !ut,
        gt = 'undefined' != typeof orientation || kt('mobile'),
        vt = gt && et,
        yt = gt && ft,
        xt = !window.PointerEvent && window.MSPointerEvent,
        bt = !(et || (!window.PointerEvent && !xt)),
        wt =
          !window.L_NO_TOUCH &&
          (bt || 'ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
        Lt = gt && st,
        Pt = gt && ht,
        Tt = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
        zt = function() {
          var t = !1;
          try {
            var e = Object.defineProperty({}, 'passive', {
              get: function() {
                t = !0;
              }
            });
            window.addEventListener('testPassiveEventSupport', l, e),
              window.removeEventListener('testPassiveEventSupport', l, e);
          } catch (t) {}
          return t;
        },
        Mt = !!document.createElement('canvas').getContext,
        Et = !(!document.createElementNS || !K('svg').createSVGRect),
        At =
          !Et &&
          (function() {
            try {
              var t = document.createElement('div');
              t.innerHTML = '<v:shape adj="1"/>';
              var e = t.firstChild;
              return (e.style.behavior = 'url(#default#VML)'), e && 'object' == typeof e.adj;
            } catch (t) {
              return !1;
            }
          })();
      function kt(t) {
        return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
      }
      var Ct = (Object.freeze || Object)({
          ie: Q,
          ielt9: $,
          edge: tt,
          webkit: et,
          android: it,
          android23: nt,
          androidStock: rt,
          opera: st,
          chrome: at,
          gecko: ht,
          safari: lt,
          phantom: ut,
          opera12: ct,
          win: dt,
          ie3d: pt,
          webkit3d: ft,
          gecko3d: _t,
          any3d: mt,
          mobile: gt,
          mobileWebkit: vt,
          mobileWebkit3d: yt,
          msPointer: xt,
          pointer: bt,
          touch: wt,
          mobileOpera: Lt,
          mobileGecko: Pt,
          retina: Tt,
          passiveEvents: zt,
          canvas: Mt,
          svg: Et,
          vml: At
        }),
        St = xt ? 'MSPointerDown' : 'pointerdown',
        Zt = xt ? 'MSPointerMove' : 'pointermove',
        Bt = xt ? 'MSPointerUp' : 'pointerup',
        It = xt ? 'MSPointerCancel' : 'pointercancel',
        Ot = ['INPUT', 'SELECT', 'OPTION'],
        Rt = {},
        Nt = !1,
        Dt = 0;
      function jt(t, e, i, n) {
        return (
          'touchstart' === e
            ? (function(t, e, i) {
                var n = o(function(t) {
                  if ('mouse' !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                    if (!(Ot.indexOf(t.target.tagName) < 0)) return;
                    Re(t);
                  }
                  Wt(t, e);
                });
                (t['_leaflet_touchstart' + i] = n),
                  t.addEventListener(St, n, !1),
                  Nt ||
                    (document.documentElement.addEventListener(St, Ft, !0),
                    document.documentElement.addEventListener(Zt, Ut, !0),
                    document.documentElement.addEventListener(Bt, Ht, !0),
                    document.documentElement.addEventListener(It, Ht, !0),
                    (Nt = !0));
              })(t, i, n)
            : 'touchmove' === e
            ? (function(t, e, i) {
                var n = function(t) {
                  ((t.pointerType !== t.MSPOINTER_TYPE_MOUSE && 'mouse' !== t.pointerType) || 0 !== t.buttons) &&
                    Wt(t, e);
                };
                (t['_leaflet_touchmove' + i] = n), t.addEventListener(Zt, n, !1);
              })(t, i, n)
            : 'touchend' === e &&
              (function(t, e, i) {
                var n = function(t) {
                  Wt(t, e);
                };
                (t['_leaflet_touchend' + i] = n), t.addEventListener(Bt, n, !1), t.addEventListener(It, n, !1);
              })(t, i, n),
          this
        );
      }
      function Ft(t) {
        (Rt[t.pointerId] = t), Dt++;
      }
      function Ut(t) {
        Rt[t.pointerId] && (Rt[t.pointerId] = t);
      }
      function Ht(t) {
        delete Rt[t.pointerId], Dt--;
      }
      function Wt(t, e) {
        for (var i in ((t.touches = []), Rt)) t.touches.push(Rt[i]);
        (t.changedTouches = [t]), e(t);
      }
      var qt = xt ? 'MSPointerDown' : bt ? 'pointerdown' : 'touchstart',
        Vt = xt ? 'MSPointerUp' : bt ? 'pointerup' : 'touchend',
        Gt = '_leaflet_';
      function Jt(t, e, i) {
        var n,
          o,
          r = !1;
        function s(t) {
          var e;
          if (bt) {
            if (!tt || 'mouse' === t.pointerType) return;
            e = Dt;
          } else e = t.touches.length;
          if (!(e > 1)) {
            var i = Date.now(),
              s = i - (n || i);
            (o = t.touches ? t.touches[0] : t), (r = s > 0 && s <= 250), (n = i);
          }
        }
        function a(t) {
          if (r && !o.cancelBubble) {
            if (bt) {
              if (!tt || 'mouse' === t.pointerType) return;
              var i,
                s,
                a = {};
              for (s in o) (i = o[s]), (a[s] = i && i.bind ? i.bind(o) : i);
              o = a;
            }
            (o.type = 'dblclick'), (o.button = 0), e(o), (n = null);
          }
        }
        return (
          (t[Gt + qt + i] = s),
          (t[Gt + Vt + i] = a),
          (t[Gt + 'dblclick' + i] = e),
          t.addEventListener(qt, s, !!zt && { passive: !1 }),
          t.addEventListener(Vt, a, !!zt && { passive: !1 }),
          t.addEventListener('dblclick', e, !1),
          this
        );
      }
      function Kt(t, e) {
        var i = t[Gt + qt + e],
          n = t[Gt + Vt + e],
          o = t[Gt + 'dblclick' + e];
        return (
          t.removeEventListener(qt, i, !!zt && { passive: !1 }),
          t.removeEventListener(Vt, n, !!zt && { passive: !1 }),
          tt || t.removeEventListener('dblclick', o, !1),
          this
        );
      }
      var Yt,
        Xt,
        Qt,
        $t,
        te,
        ee = ge(['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform']),
        ie = ge(['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']),
        ne = 'webkitTransition' === ie || 'OTransition' === ie ? ie + 'End' : 'transitionend';
      function oe(t) {
        return 'string' == typeof t ? document.getElementById(t) : t;
      }
      function re(t, e) {
        var i = t.style[e] || (t.currentStyle && t.currentStyle[e]);
        if ((!i || 'auto' === i) && document.defaultView) {
          var n = document.defaultView.getComputedStyle(t, null);
          i = n ? n[e] : null;
        }
        return 'auto' === i ? null : i;
      }
      function se(t, e, i) {
        var n = document.createElement(t);
        return (n.className = e || ''), i && i.appendChild(n), n;
      }
      function ae(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }
      function he(t) {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
      }
      function le(t) {
        var e = t.parentNode;
        e && e.lastChild !== t && e.appendChild(t);
      }
      function ue(t) {
        var e = t.parentNode;
        e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
      }
      function ce(t, e) {
        if (void 0 !== t.classList) return t.classList.contains(e);
        var i = _e(t);
        return i.length > 0 && new RegExp('(^|\\s)' + e + '(\\s|$)').test(i);
      }
      function de(t, e) {
        if (void 0 !== t.classList) for (var i = d(e), n = 0, o = i.length; n < o; n++) t.classList.add(i[n]);
        else if (!ce(t, e)) {
          var r = _e(t);
          fe(t, (r ? r + ' ' : '') + e);
        }
      }
      function pe(t, e) {
        void 0 !== t.classList ? t.classList.remove(e) : fe(t, c((' ' + _e(t) + ' ').replace(' ' + e + ' ', ' ')));
      }
      function fe(t, e) {
        void 0 === t.className.baseVal ? (t.className = e) : (t.className.baseVal = e);
      }
      function _e(t) {
        return (
          t.correspondingElement && (t = t.correspondingElement),
          void 0 === t.className.baseVal ? t.className : t.className.baseVal
        );
      }
      function me(t, e) {
        'opacity' in t.style
          ? (t.style.opacity = e)
          : 'filter' in t.style &&
            (function(t, e) {
              var i = !1,
                n = 'DXImageTransform.Microsoft.Alpha';
              try {
                i = t.filters.item(n);
              } catch (t) {
                if (1 === e) return;
              }
              (e = Math.round(100 * e)),
                i
                  ? ((i.Enabled = 100 !== e), (i.Opacity = e))
                  : (t.style.filter += ' progid:' + n + '(opacity=' + e + ')');
            })(t, e);
      }
      function ge(t) {
        for (var e = document.documentElement.style, i = 0; i < t.length; i++) if (t[i] in e) return t[i];
        return !1;
      }
      function ve(t, e, i) {
        var n = e || new S(0, 0);
        t.style[ee] =
          (pt ? 'translate(' + n.x + 'px,' + n.y + 'px)' : 'translate3d(' + n.x + 'px,' + n.y + 'px,0)') +
          (i ? ' scale(' + i + ')' : '');
      }
      function ye(t, e) {
        (t._leaflet_pos = e), mt ? ve(t, e) : ((t.style.left = e.x + 'px'), (t.style.top = e.y + 'px'));
      }
      function xe(t) {
        return t._leaflet_pos || new S(0, 0);
      }
      if ('onselectstart' in document)
        (Yt = function() {
          Ae(window, 'selectstart', Re);
        }),
          (Xt = function() {
            Ce(window, 'selectstart', Re);
          });
      else {
        var be = ge(['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);
        (Yt = function() {
          if (be) {
            var t = document.documentElement.style;
            (Qt = t[be]), (t[be] = 'none');
          }
        }),
          (Xt = function() {
            be && ((document.documentElement.style[be] = Qt), (Qt = void 0));
          });
      }
      function we() {
        Ae(window, 'dragstart', Re);
      }
      function Le() {
        Ce(window, 'dragstart', Re);
      }
      function Pe(t) {
        for (; -1 === t.tabIndex; ) t = t.parentNode;
        t.style && (Te(), ($t = t), (te = t.style.outline), (t.style.outline = 'none'), Ae(window, 'keydown', Te));
      }
      function Te() {
        $t && (($t.style.outline = te), ($t = void 0), (te = void 0), Ce(window, 'keydown', Te));
      }
      function ze(t) {
        do {
          t = t.parentNode;
        } while (!((t.offsetWidth && t.offsetHeight) || t === document.body));
        return t;
      }
      function Me(t) {
        var e = t.getBoundingClientRect();
        return { x: e.width / t.offsetWidth || 1, y: e.height / t.offsetHeight || 1, boundingClientRect: e };
      }
      var Ee = (Object.freeze || Object)({
        TRANSFORM: ee,
        TRANSITION: ie,
        TRANSITION_END: ne,
        get: oe,
        getStyle: re,
        create: se,
        remove: ae,
        empty: he,
        toFront: le,
        toBack: ue,
        hasClass: ce,
        addClass: de,
        removeClass: pe,
        setClass: fe,
        getClass: _e,
        setOpacity: me,
        testProp: ge,
        setTransform: ve,
        setPosition: ye,
        getPosition: xe,
        disableTextSelection: Yt,
        enableTextSelection: Xt,
        disableImageDrag: we,
        enableImageDrag: Le,
        preventOutline: Pe,
        restoreOutline: Te,
        getSizedParentNode: ze,
        getScale: Me
      });
      function Ae(t, e, i, n) {
        if ('object' == typeof e) for (var o in e) Se(t, o, e[o], i);
        else for (var r = 0, s = (e = d(e)).length; r < s; r++) Se(t, e[r], i, n);
        return this;
      }
      var ke = '_leaflet_events';
      function Ce(t, e, i, n) {
        if ('object' == typeof e) for (var o in e) Ze(t, o, e[o], i);
        else if (e) for (var r = 0, s = (e = d(e)).length; r < s; r++) Ze(t, e[r], i, n);
        else {
          for (var a in t[ke]) Ze(t, a, t[ke][a]);
          delete t[ke];
        }
        return this;
      }
      function Se(t, e, i, n) {
        var o = e + s(i) + (n ? '_' + s(n) : '');
        if (t[ke] && t[ke][o]) return this;
        var r = function(e) {
            return i.call(n || t, e || window.event);
          },
          a = r;
        bt && 0 === e.indexOf('touch')
          ? jt(t, e, r, o)
          : !wt || 'dblclick' !== e || !Jt || (bt && at)
          ? 'addEventListener' in t
            ? 'mousewheel' === e
              ? t.addEventListener('onwheel' in t ? 'wheel' : 'mousewheel', r, !!zt && { passive: !1 })
              : 'mouseenter' === e || 'mouseleave' === e
              ? ((r = function(e) {
                  (e = e || window.event), Ve(t, e) && a(e);
                }),
                t.addEventListener('mouseenter' === e ? 'mouseover' : 'mouseout', r, !1))
              : ('click' === e &&
                  it &&
                  (r = function(t) {
                    !(function(t, e) {
                      var i = t.timeStamp || (t.originalEvent && t.originalEvent.timeStamp),
                        n = Ue && i - Ue;
                      (n && n > 100 && n < 500) || (t.target._simulatedClick && !t._simulated)
                        ? Ne(t)
                        : ((Ue = i), e(t));
                    })(t, a);
                  }),
                t.addEventListener(e, r, !1))
            : 'attachEvent' in t && t.attachEvent('on' + e, r)
          : Jt(t, r, o),
          (t[ke] = t[ke] || {}),
          (t[ke][o] = r);
      }
      function Ze(t, e, i, n) {
        var o = e + s(i) + (n ? '_' + s(n) : ''),
          r = t[ke] && t[ke][o];
        if (!r) return this;
        bt && 0 === e.indexOf('touch')
          ? (function(t, e, i) {
              var n = t['_leaflet_' + e + i];
              'touchstart' === e
                ? t.removeEventListener(St, n, !1)
                : 'touchmove' === e
                ? t.removeEventListener(Zt, n, !1)
                : 'touchend' === e && (t.removeEventListener(Bt, n, !1), t.removeEventListener(It, n, !1));
            })(t, e, o)
          : !wt || 'dblclick' !== e || !Kt || (bt && at)
          ? 'removeEventListener' in t
            ? 'mousewheel' === e
              ? t.removeEventListener('onwheel' in t ? 'wheel' : 'mousewheel', r, !!zt && { passive: !1 })
              : t.removeEventListener('mouseenter' === e ? 'mouseover' : 'mouseleave' === e ? 'mouseout' : e, r, !1)
            : 'detachEvent' in t && t.detachEvent('on' + e, r)
          : Kt(t, o),
          (t[ke][o] = null);
      }
      function Be(t) {
        return (
          t.stopPropagation
            ? t.stopPropagation()
            : t.originalEvent
            ? (t.originalEvent._stopped = !0)
            : (t.cancelBubble = !0),
          qe(t),
          this
        );
      }
      function Ie(t) {
        return Se(t, 'mousewheel', Be), this;
      }
      function Oe(t) {
        return Ae(t, 'mousedown touchstart dblclick', Be), Se(t, 'click', We), this;
      }
      function Re(t) {
        return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
      }
      function Ne(t) {
        return Re(t), Be(t), this;
      }
      function De(t, e) {
        if (!e) return new S(t.clientX, t.clientY);
        var i = Me(e),
          n = i.boundingClientRect;
        return new S((t.clientX - n.left) / i.x - e.clientLeft, (t.clientY - n.top) / i.y - e.clientTop);
      }
      var je = dt && at ? 2 * window.devicePixelRatio : ht ? window.devicePixelRatio : 1;
      function Fe(t) {
        return tt
          ? t.wheelDeltaY / 2
          : t.deltaY && 0 === t.deltaMode
          ? -t.deltaY / je
          : t.deltaY && 1 === t.deltaMode
          ? 20 * -t.deltaY
          : t.deltaY && 2 === t.deltaMode
          ? 60 * -t.deltaY
          : t.deltaX || t.deltaZ
          ? 0
          : t.wheelDelta
          ? (t.wheelDeltaY || t.wheelDelta) / 2
          : t.detail && Math.abs(t.detail) < 32765
          ? 20 * -t.detail
          : t.detail
          ? (t.detail / -32765) * 60
          : 0;
      }
      var Ue,
        He = {};
      function We(t) {
        He[t.type] = !0;
      }
      function qe(t) {
        var e = He[t.type];
        return (He[t.type] = !1), e;
      }
      function Ve(t, e) {
        var i = e.relatedTarget;
        if (!i) return !0;
        try {
          for (; i && i !== t; ) i = i.parentNode;
        } catch (t) {
          return !1;
        }
        return i !== t;
      }
      var Ge = (Object.freeze || Object)({
          on: Ae,
          off: Ce,
          stopPropagation: Be,
          disableScrollPropagation: Ie,
          disableClickPropagation: Oe,
          preventDefault: Re,
          stop: Ne,
          getMousePosition: De,
          getWheelDelta: Fe,
          fakeStop: We,
          skipped: qe,
          isExternalTarget: Ve,
          addListener: Ae,
          removeListener: Ce
        }),
        Je = C.extend({
          run: function(t, e, i, n) {
            this.stop(),
              (this._el = t),
              (this._inProgress = !0),
              (this._duration = i || 0.25),
              (this._easeOutPower = 1 / Math.max(n || 0.5, 0.2)),
              (this._startPos = xe(t)),
              (this._offset = e.subtract(this._startPos)),
              (this._startTime = +new Date()),
              this.fire('start'),
              this._animate();
          },
          stop: function() {
            this._inProgress && (this._step(!0), this._complete());
          },
          _animate: function() {
            (this._animId = z(this._animate, this)), this._step();
          },
          _step: function(t) {
            var e = +new Date() - this._startTime,
              i = 1e3 * this._duration;
            e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
          },
          _runFrame: function(t, e) {
            var i = this._startPos.add(this._offset.multiplyBy(t));
            e && i._round(), ye(this._el, i), this.fire('step');
          },
          _complete: function() {
            M(this._animId), (this._inProgress = !1), this.fire('end');
          },
          _easeOut: function(t) {
            return 1 - Math.pow(1 - t, this._easeOutPower);
          }
        }),
        Ke = C.extend({
          options: {
            crs: G,
            center: void 0,
            zoom: void 0,
            minZoom: void 0,
            maxZoom: void 0,
            layers: [],
            maxBounds: void 0,
            renderer: void 0,
            zoomAnimation: !0,
            zoomAnimationThreshold: 4,
            fadeAnimation: !0,
            markerZoomAnimation: !0,
            transform3DLimit: 8388608,
            zoomSnap: 1,
            zoomDelta: 1,
            trackResize: !0
          },
          initialize: function(t, e) {
            (e = p(this, e)),
              (this._handlers = []),
              (this._layers = {}),
              (this._zoomBoundLayers = {}),
              (this._sizeChanged = !0),
              this._initContainer(t),
              this._initLayout(),
              (this._onResize = o(this._onResize, this)),
              this._initEvents(),
              e.maxBounds && this.setMaxBounds(e.maxBounds),
              void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
              e.center && void 0 !== e.zoom && this.setView(j(e.center), e.zoom, { reset: !0 }),
              this.callInitHooks(),
              (this._zoomAnimated = ie && mt && !Lt && this.options.zoomAnimation),
              this._zoomAnimated && (this._createAnimProxy(), Ae(this._proxy, ne, this._catchTransitionEnd, this)),
              this._addLayers(this.options.layers);
          },
          setView: function(t, e, n) {
            return (
              (e = void 0 === e ? this._zoom : this._limitZoom(e)),
              (t = this._limitCenter(j(t), e, this.options.maxBounds)),
              (n = n || {}),
              this._stop(),
              this._loaded &&
              !n.reset &&
              !0 !== n &&
              (void 0 !== n.animate &&
                ((n.zoom = i({ animate: n.animate }, n.zoom)),
                (n.pan = i({ animate: n.animate, duration: n.duration }, n.pan))),
              this._zoom !== e
                ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom)
                : this._tryAnimatedPan(t, n.pan))
                ? (clearTimeout(this._sizeTimer), this)
                : (this._resetView(t, e), this)
            );
          },
          setZoom: function(t, e) {
            return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : ((this._zoom = t), this);
          },
          zoomIn: function(t, e) {
            return (t = t || (mt ? this.options.zoomDelta : 1)), this.setZoom(this._zoom + t, e);
          },
          zoomOut: function(t, e) {
            return (t = t || (mt ? this.options.zoomDelta : 1)), this.setZoom(this._zoom - t, e);
          },
          setZoomAround: function(t, e, i) {
            var n = this.getZoomScale(e),
              o = this.getSize().divideBy(2),
              r = (t instanceof S ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
              s = this.containerPointToLatLng(o.add(r));
            return this.setView(s, e, { zoom: i });
          },
          _getBoundsCenterZoom: function(t, e) {
            (e = e || {}), (t = t.getBounds ? t.getBounds() : N(t));
            var i = B(e.paddingTopLeft || e.padding || [0, 0]),
              n = B(e.paddingBottomRight || e.padding || [0, 0]),
              o = this.getBoundsZoom(t, !1, i.add(n));
            if ((o = 'number' == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0)
              return { center: t.getCenter(), zoom: o };
            var r = n.subtract(i).divideBy(2),
              s = this.project(t.getSouthWest(), o),
              a = this.project(t.getNorthEast(), o);
            return {
              center: this.unproject(
                s
                  .add(a)
                  .divideBy(2)
                  .add(r),
                o
              ),
              zoom: o
            };
          },
          fitBounds: function(t, e) {
            if (!(t = N(t)).isValid()) throw new Error('Bounds are not valid.');
            var i = this._getBoundsCenterZoom(t, e);
            return this.setView(i.center, i.zoom, e);
          },
          fitWorld: function(t) {
            return this.fitBounds(
              [
                [-90, -180],
                [90, 180]
              ],
              t
            );
          },
          panTo: function(t, e) {
            return this.setView(t, this._zoom, { pan: e });
          },
          panBy: function(t, e) {
            if (((e = e || {}), !(t = B(t).round()).x && !t.y)) return this.fire('moveend');
            if (!0 !== e.animate && !this.getSize().contains(t))
              return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
            if (
              (this._panAnim ||
                ((this._panAnim = new Je()),
                this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)),
              e.noMoveStart || this.fire('movestart'),
              !1 !== e.animate)
            ) {
              de(this._mapPane, 'leaflet-pan-anim');
              var i = this._getMapPanePos()
                .subtract(t)
                .round();
              this._panAnim.run(this._mapPane, i, e.duration || 0.25, e.easeLinearity);
            } else this._rawPanBy(t), this.fire('move').fire('moveend');
            return this;
          },
          flyTo: function(t, e, i) {
            if (!1 === (i = i || {}).animate || !mt) return this.setView(t, e, i);
            this._stop();
            var n = this.project(this.getCenter()),
              o = this.project(t),
              r = this.getSize(),
              s = this._zoom;
            (t = j(t)), (e = void 0 === e ? s : e);
            var a = Math.max(r.x, r.y),
              h = a * this.getZoomScale(s, e),
              l = o.distanceTo(n) || 1;
            function u(t) {
              var e = (h * h - a * a + 2.0164 * (t ? -1 : 1) * 2.0164 * l * l) / (2 * (t ? h : a) * 2.0164 * l),
                i = Math.sqrt(e * e + 1) - e;
              return i < 1e-9 ? -18 : Math.log(i);
            }
            function c(t) {
              return (Math.exp(t) - Math.exp(-t)) / 2;
            }
            function d(t) {
              return (Math.exp(t) + Math.exp(-t)) / 2;
            }
            var p = u(0);
            function f(t) {
              return (a * (d(p) * (c((e = p + 1.42 * t)) / d(e)) - c(p))) / 2.0164;
              var e;
            }
            var _ = Date.now(),
              m = (u(1) - p) / 1.42,
              g = i.duration ? 1e3 * i.duration : 1e3 * m * 0.8;
            return (
              this._moveStart(!0, i.noMoveStart),
              function i() {
                var r = (Date.now() - _) / g,
                  h =
                    (function(t) {
                      return 1 - Math.pow(1 - t, 1.5);
                    })(r) * m;
                r <= 1
                  ? ((this._flyToFrame = z(i, this)),
                    this._move(
                      this.unproject(n.add(o.subtract(n).multiplyBy(f(h) / l)), s),
                      this.getScaleZoom(
                        a /
                          (function(t) {
                            return a * (d(p) / d(p + 1.42 * t));
                          })(h),
                        s
                      ),
                      { flyTo: !0 }
                    ))
                  : this._move(t, e)._moveEnd(!0);
              }.call(this),
              this
            );
          },
          flyToBounds: function(t, e) {
            var i = this._getBoundsCenterZoom(t, e);
            return this.flyTo(i.center, i.zoom, e);
          },
          setMaxBounds: function(t) {
            return (t = N(t)).isValid()
              ? (this.options.maxBounds && this.off('moveend', this._panInsideMaxBounds),
                (this.options.maxBounds = t),
                this._loaded && this._panInsideMaxBounds(),
                this.on('moveend', this._panInsideMaxBounds))
              : ((this.options.maxBounds = null), this.off('moveend', this._panInsideMaxBounds));
          },
          setMinZoom: function(t) {
            var e = this.options.minZoom;
            return (
              (this.options.minZoom = t),
              this._loaded && e !== t && (this.fire('zoomlevelschange'), this.getZoom() < this.options.minZoom)
                ? this.setZoom(t)
                : this
            );
          },
          setMaxZoom: function(t) {
            var e = this.options.maxZoom;
            return (
              (this.options.maxZoom = t),
              this._loaded && e !== t && (this.fire('zoomlevelschange'), this.getZoom() > this.options.maxZoom)
                ? this.setZoom(t)
                : this
            );
          },
          panInsideBounds: function(t, e) {
            this._enforcingBounds = !0;
            var i = this.getCenter(),
              n = this._limitCenter(i, this._zoom, N(t));
            return i.equals(n) || this.panTo(n, e), (this._enforcingBounds = !1), this;
          },
          panInside: function(t, e) {
            var i = B((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
              n = B(e.paddingBottomRight || e.padding || [0, 0]),
              o = this.getCenter(),
              r = this.project(o),
              s = this.project(t),
              a = this.getPixelBounds(),
              h = a.getSize().divideBy(2),
              l = O([a.min.add(i), a.max.subtract(n)]);
            if (!l.contains(s)) {
              this._enforcingBounds = !0;
              var u = r.subtract(s),
                c = B(s.x + u.x, s.y + u.y);
              (s.x < l.min.x || s.x > l.max.x) &&
                ((c.x = r.x - u.x), u.x > 0 ? (c.x += h.x - i.x) : (c.x -= h.x - n.x)),
                (s.y < l.min.y || s.y > l.max.y) &&
                  ((c.y = r.y - u.y), u.y > 0 ? (c.y += h.y - i.y) : (c.y -= h.y - n.y)),
                this.panTo(this.unproject(c), e),
                (this._enforcingBounds = !1);
            }
            return this;
          },
          invalidateSize: function(t) {
            if (!this._loaded) return this;
            t = i({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);
            var e = this.getSize();
            (this._sizeChanged = !0), (this._lastCenter = null);
            var n = this.getSize(),
              r = e.divideBy(2).round(),
              s = n.divideBy(2).round(),
              a = r.subtract(s);
            return a.x || a.y
              ? (t.animate && t.pan
                  ? this.panBy(a)
                  : (t.pan && this._rawPanBy(a),
                    this.fire('move'),
                    t.debounceMoveend
                      ? (clearTimeout(this._sizeTimer),
                        (this._sizeTimer = setTimeout(o(this.fire, this, 'moveend'), 200)))
                      : this.fire('moveend')),
                this.fire('resize', { oldSize: e, newSize: n }))
              : this;
          },
          stop: function() {
            return (
              this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire('viewreset'), this._stop()
            );
          },
          locate: function(t) {
            if (((t = this._locateOptions = i({ timeout: 1e4, watch: !1 }, t)), !('geolocation' in navigator)))
              return this._handleGeolocationError({ code: 0, message: 'Geolocation not supported.' }), this;
            var e = o(this._handleGeolocationResponse, this),
              n = o(this._handleGeolocationError, this);
            return (
              t.watch
                ? (this._locationWatchId = navigator.geolocation.watchPosition(e, n, t))
                : navigator.geolocation.getCurrentPosition(e, n, t),
              this
            );
          },
          stopLocate: function() {
            return (
              navigator.geolocation &&
                navigator.geolocation.clearWatch &&
                navigator.geolocation.clearWatch(this._locationWatchId),
              this._locateOptions && (this._locateOptions.setView = !1),
              this
            );
          },
          _handleGeolocationError: function(t) {
            var e = t.code,
              i = t.message || (1 === e ? 'permission denied' : 2 === e ? 'position unavailable' : 'timeout');
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
              this.fire('locationerror', { code: e, message: 'Geolocation error: ' + i + '.' });
          },
          _handleGeolocationResponse: function(t) {
            var e = new D(t.coords.latitude, t.coords.longitude),
              i = e.toBounds(2 * t.coords.accuracy),
              n = this._locateOptions;
            if (n.setView) {
              var o = this.getBoundsZoom(i);
              this.setView(e, n.maxZoom ? Math.min(o, n.maxZoom) : o);
            }
            var r = { latlng: e, bounds: i, timestamp: t.timestamp };
            for (var s in t.coords) 'number' == typeof t.coords[s] && (r[s] = t.coords[s]);
            this.fire('locationfound', r);
          },
          addHandler: function(t, e) {
            if (!e) return this;
            var i = (this[t] = new e(this));
            return this._handlers.push(i), this.options[t] && i.enable(), this;
          },
          remove: function() {
            if ((this._initEvents(!0), this._containerId !== this._container._leaflet_id))
              throw new Error('Map container is being reused by another instance');
            try {
              delete this._container._leaflet_id, delete this._containerId;
            } catch (t) {
              (this._container._leaflet_id = void 0), (this._containerId = void 0);
            }
            var t;
            for (t in (void 0 !== this._locationWatchId && this.stopLocate(),
            this._stop(),
            ae(this._mapPane),
            this._clearControlPos && this._clearControlPos(),
            this._resizeRequest && (M(this._resizeRequest), (this._resizeRequest = null)),
            this._clearHandlers(),
            this._loaded && this.fire('unload'),
            this._layers))
              this._layers[t].remove();
            for (t in this._panes) ae(this._panes[t]);
            return (this._layers = []), (this._panes = []), delete this._mapPane, delete this._renderer, this;
          },
          createPane: function(t, e) {
            var i = se(
              'div',
              'leaflet-pane' + (t ? ' leaflet-' + t.replace('Pane', '') + '-pane' : ''),
              e || this._mapPane
            );
            return t && (this._panes[t] = i), i;
          },
          getCenter: function() {
            return (
              this._checkIfLoaded(),
              this._lastCenter && !this._moved()
                ? this._lastCenter
                : this.layerPointToLatLng(this._getCenterLayerPoint())
            );
          },
          getZoom: function() {
            return this._zoom;
          },
          getBounds: function() {
            var t = this.getPixelBounds();
            return new R(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()));
          },
          getMinZoom: function() {
            return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
          },
          getMaxZoom: function() {
            return void 0 === this.options.maxZoom
              ? void 0 === this._layersMaxZoom
                ? 1 / 0
                : this._layersMaxZoom
              : this.options.maxZoom;
          },
          getBoundsZoom: function(t, e, i) {
            (t = N(t)), (i = B(i || [0, 0]));
            var n = this.getZoom() || 0,
              o = this.getMinZoom(),
              r = this.getMaxZoom(),
              s = t.getNorthWest(),
              a = t.getSouthEast(),
              h = this.getSize().subtract(i),
              l = O(this.project(a, n), this.project(s, n)).getSize(),
              u = mt ? this.options.zoomSnap : 1,
              c = h.x / l.x,
              d = h.y / l.y,
              p = e ? Math.max(c, d) : Math.min(c, d);
            return (
              (n = this.getScaleZoom(p, n)),
              u &&
                ((n = Math.round(n / (u / 100)) * (u / 100)), (n = e ? Math.ceil(n / u) * u : Math.floor(n / u) * u)),
              Math.max(o, Math.min(r, n))
            );
          },
          getSize: function() {
            return (
              (this._size && !this._sizeChanged) ||
                ((this._size = new S(this._container.clientWidth || 0, this._container.clientHeight || 0)),
                (this._sizeChanged = !1)),
              this._size.clone()
            );
          },
          getPixelBounds: function(t, e) {
            var i = this._getTopLeftPoint(t, e);
            return new I(i, i.add(this.getSize()));
          },
          getPixelOrigin: function() {
            return this._checkIfLoaded(), this._pixelOrigin;
          },
          getPixelWorldBounds: function(t) {
            return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t);
          },
          getPane: function(t) {
            return 'string' == typeof t ? this._panes[t] : t;
          },
          getPanes: function() {
            return this._panes;
          },
          getContainer: function() {
            return this._container;
          },
          getZoomScale: function(t, e) {
            var i = this.options.crs;
            return (e = void 0 === e ? this._zoom : e), i.scale(t) / i.scale(e);
          },
          getScaleZoom: function(t, e) {
            var i = this.options.crs;
            e = void 0 === e ? this._zoom : e;
            var n = i.zoom(t * i.scale(e));
            return isNaN(n) ? 1 / 0 : n;
          },
          project: function(t, e) {
            return (e = void 0 === e ? this._zoom : e), this.options.crs.latLngToPoint(j(t), e);
          },
          unproject: function(t, e) {
            return (e = void 0 === e ? this._zoom : e), this.options.crs.pointToLatLng(B(t), e);
          },
          layerPointToLatLng: function(t) {
            var e = B(t).add(this.getPixelOrigin());
            return this.unproject(e);
          },
          latLngToLayerPoint: function(t) {
            return this.project(j(t))
              ._round()
              ._subtract(this.getPixelOrigin());
          },
          wrapLatLng: function(t) {
            return this.options.crs.wrapLatLng(j(t));
          },
          wrapLatLngBounds: function(t) {
            return this.options.crs.wrapLatLngBounds(N(t));
          },
          distance: function(t, e) {
            return this.options.crs.distance(j(t), j(e));
          },
          containerPointToLayerPoint: function(t) {
            return B(t).subtract(this._getMapPanePos());
          },
          layerPointToContainerPoint: function(t) {
            return B(t).add(this._getMapPanePos());
          },
          containerPointToLatLng: function(t) {
            var e = this.containerPointToLayerPoint(B(t));
            return this.layerPointToLatLng(e);
          },
          latLngToContainerPoint: function(t) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(j(t)));
          },
          mouseEventToContainerPoint: function(t) {
            return De(t, this._container);
          },
          mouseEventToLayerPoint: function(t) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
          },
          mouseEventToLatLng: function(t) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
          },
          _initContainer: function(t) {
            var e = (this._container = oe(t));
            if (!e) throw new Error('Map container not found.');
            if (e._leaflet_id) throw new Error('Map container is already initialized.');
            Ae(e, 'scroll', this._onScroll, this), (this._containerId = s(e));
          },
          _initLayout: function() {
            var t = this._container;
            (this._fadeAnimated = this.options.fadeAnimation && mt),
              de(
                t,
                'leaflet-container' +
                  (wt ? ' leaflet-touch' : '') +
                  (Tt ? ' leaflet-retina' : '') +
                  ($ ? ' leaflet-oldie' : '') +
                  (lt ? ' leaflet-safari' : '') +
                  (this._fadeAnimated ? ' leaflet-fade-anim' : '')
              );
            var e = re(t, 'position');
            'absolute' !== e && 'relative' !== e && 'fixed' !== e && (t.style.position = 'relative'),
              this._initPanes(),
              this._initControlPos && this._initControlPos();
          },
          _initPanes: function() {
            var t = (this._panes = {});
            (this._paneRenderers = {}),
              (this._mapPane = this.createPane('mapPane', this._container)),
              ye(this._mapPane, new S(0, 0)),
              this.createPane('tilePane'),
              this.createPane('shadowPane'),
              this.createPane('overlayPane'),
              this.createPane('markerPane'),
              this.createPane('tooltipPane'),
              this.createPane('popupPane'),
              this.options.markerZoomAnimation ||
                (de(t.markerPane, 'leaflet-zoom-hide'), de(t.shadowPane, 'leaflet-zoom-hide'));
          },
          _resetView: function(t, e) {
            ye(this._mapPane, new S(0, 0));
            var i = !this._loaded;
            (this._loaded = !0), (e = this._limitZoom(e)), this.fire('viewprereset');
            var n = this._zoom !== e;
            this._moveStart(n, !1)
              ._move(t, e)
              ._moveEnd(n),
              this.fire('viewreset'),
              i && this.fire('load');
          },
          _moveStart: function(t, e) {
            return t && this.fire('zoomstart'), e || this.fire('movestart'), this;
          },
          _move: function(t, e, i) {
            void 0 === e && (e = this._zoom);
            var n = this._zoom !== e;
            return (
              (this._zoom = e),
              (this._lastCenter = t),
              (this._pixelOrigin = this._getNewPixelOrigin(t)),
              (n || (i && i.pinch)) && this.fire('zoom', i),
              this.fire('move', i)
            );
          },
          _moveEnd: function(t) {
            return t && this.fire('zoomend'), this.fire('moveend');
          },
          _stop: function() {
            return M(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
          },
          _rawPanBy: function(t) {
            ye(this._mapPane, this._getMapPanePos().subtract(t));
          },
          _getZoomSpan: function() {
            return this.getMaxZoom() - this.getMinZoom();
          },
          _panInsideMaxBounds: function() {
            this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
          },
          _checkIfLoaded: function() {
            if (!this._loaded) throw new Error('Set map center and zoom first.');
          },
          _initEvents: function(t) {
            (this._targets = {}), (this._targets[s(this._container)] = this);
            var e = t ? Ce : Ae;
            e(
              this._container,
              'click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup',
              this._handleDOMEvent,
              this
            ),
              this.options.trackResize && e(window, 'resize', this._onResize, this),
              mt && this.options.transform3DLimit && (t ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
          },
          _onResize: function() {
            M(this._resizeRequest),
              (this._resizeRequest = z(function() {
                this.invalidateSize({ debounceMoveend: !0 });
              }, this));
          },
          _onScroll: function() {
            (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
          },
          _onMoveEnd: function() {
            var t = this._getMapPanePos();
            Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit &&
              this._resetView(this.getCenter(), this.getZoom());
          },
          _findEventTargets: function(t, e) {
            for (var i, n = [], o = 'mouseout' === e || 'mouseover' === e, r = t.target || t.srcElement, a = !1; r; ) {
              if (
                (i = this._targets[s(r)]) &&
                ('click' === e || 'preclick' === e) &&
                !t._simulated &&
                this._draggableMoved(i)
              ) {
                a = !0;
                break;
              }
              if (i && i.listens(e, !0)) {
                if (o && !Ve(r, t)) break;
                if ((n.push(i), o)) break;
              }
              if (r === this._container) break;
              r = r.parentNode;
            }
            return n.length || a || o || !Ve(r, t) || (n = [this]), n;
          },
          _handleDOMEvent: function(t) {
            if (this._loaded && !qe(t)) {
              var e = t.type;
              ('mousedown' !== e && 'keypress' !== e && 'keyup' !== e && 'keydown' !== e) ||
                Pe(t.target || t.srcElement),
                this._fireDOMEvent(t, e);
            }
          },
          _mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],
          _fireDOMEvent: function(t, e, n) {
            if ('click' === t.type) {
              var o = i({}, t);
              (o.type = 'preclick'), this._fireDOMEvent(o, o.type, n);
            }
            if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, e))).length) {
              var r = n[0];
              'contextmenu' === e && r.listens(e, !0) && Re(t);
              var s = { originalEvent: t };
              if ('keypress' !== t.type && 'keydown' !== t.type && 'keyup' !== t.type) {
                var a = r.getLatLng && (!r._radius || r._radius <= 10);
                (s.containerPoint = a
                  ? this.latLngToContainerPoint(r.getLatLng())
                  : this.mouseEventToContainerPoint(t)),
                  (s.layerPoint = this.containerPointToLayerPoint(s.containerPoint)),
                  (s.latlng = a ? r.getLatLng() : this.layerPointToLatLng(s.layerPoint));
              }
              for (var h = 0; h < n.length; h++)
                if (
                  (n[h].fire(e, s, !0),
                  s.originalEvent._stopped ||
                    (!1 === n[h].options.bubblingMouseEvents && -1 !== v(this._mouseEvents, e)))
                )
                  return;
            }
          },
          _draggableMoved: function(t) {
            return (
              ((t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved()) ||
              (this.boxZoom && this.boxZoom.moved())
            );
          },
          _clearHandlers: function() {
            for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable();
          },
          whenReady: function(t, e) {
            return this._loaded ? t.call(e || this, { target: this }) : this.on('load', t, e), this;
          },
          _getMapPanePos: function() {
            return xe(this._mapPane) || new S(0, 0);
          },
          _moved: function() {
            var t = this._getMapPanePos();
            return t && !t.equals([0, 0]);
          },
          _getTopLeftPoint: function(t, e) {
            return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(
              this._getMapPanePos()
            );
          },
          _getNewPixelOrigin: function(t, e) {
            var i = this.getSize()._divideBy(2);
            return this.project(t, e)
              ._subtract(i)
              ._add(this._getMapPanePos())
              ._round();
          },
          _latLngToNewLayerPoint: function(t, e, i) {
            var n = this._getNewPixelOrigin(i, e);
            return this.project(t, e)._subtract(n);
          },
          _latLngBoundsToNewLayerBounds: function(t, e, i) {
            var n = this._getNewPixelOrigin(i, e);
            return O([
              this.project(t.getSouthWest(), e)._subtract(n),
              this.project(t.getNorthWest(), e)._subtract(n),
              this.project(t.getSouthEast(), e)._subtract(n),
              this.project(t.getNorthEast(), e)._subtract(n)
            ]);
          },
          _getCenterLayerPoint: function() {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
          },
          _getCenterOffset: function(t) {
            return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
          },
          _limitCenter: function(t, e, i) {
            if (!i) return t;
            var n = this.project(t, e),
              o = this.getSize().divideBy(2),
              r = new I(n.subtract(o), n.add(o)),
              s = this._getBoundsOffset(r, i, e);
            return s.round().equals([0, 0]) ? t : this.unproject(n.add(s), e);
          },
          _limitOffset: function(t, e) {
            if (!e) return t;
            var i = this.getPixelBounds(),
              n = new I(i.min.add(t), i.max.add(t));
            return t.add(this._getBoundsOffset(n, e));
          },
          _getBoundsOffset: function(t, e, i) {
            var n = O(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
              o = n.min.subtract(t.min),
              r = n.max.subtract(t.max);
            return new S(this._rebound(o.x, -r.x), this._rebound(o.y, -r.y));
          },
          _rebound: function(t, e) {
            return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
          },
          _limitZoom: function(t) {
            var e = this.getMinZoom(),
              i = this.getMaxZoom(),
              n = mt ? this.options.zoomSnap : 1;
            return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
          },
          _onPanTransitionStep: function() {
            this.fire('move');
          },
          _onPanTransitionEnd: function() {
            pe(this._mapPane, 'leaflet-pan-anim'), this.fire('moveend');
          },
          _tryAnimatedPan: function(t, e) {
            var i = this._getCenterOffset(t)._trunc();
            return !((!0 !== (e && e.animate) && !this.getSize().contains(i)) || (this.panBy(i, e), 0));
          },
          _createAnimProxy: function() {
            var t = (this._proxy = se('div', 'leaflet-proxy leaflet-zoom-animated'));
            this._panes.mapPane.appendChild(t),
              this.on(
                'zoomanim',
                function(t) {
                  var e = ee,
                    i = this._proxy.style[e];
                  ve(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)),
                    i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd();
                },
                this
              ),
              this.on('load moveend', this._animMoveEnd, this),
              this._on('unload', this._destroyAnimProxy, this);
          },
          _destroyAnimProxy: function() {
            ae(this._proxy), this.off('load moveend', this._animMoveEnd, this), delete this._proxy;
          },
          _animMoveEnd: function() {
            var t = this.getCenter(),
              e = this.getZoom();
            ve(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
          },
          _catchTransitionEnd: function(t) {
            this._animatingZoom && t.propertyName.indexOf('transform') >= 0 && this._onZoomTransitionEnd();
          },
          _nothingToAnimate: function() {
            return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
          },
          _tryAnimatedZoom: function(t, e, i) {
            if (this._animatingZoom) return !0;
            if (
              ((i = i || {}),
              !this._zoomAnimated ||
                !1 === i.animate ||
                this._nothingToAnimate() ||
                Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
            )
              return !1;
            var n = this.getZoomScale(e),
              o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
            return !(
              (!0 !== i.animate && !this.getSize().contains(o)) ||
              (z(function() {
                this._moveStart(!0, !1)._animateZoom(t, e, !0);
              }, this),
              0)
            );
          },
          _animateZoom: function(t, e, i, n) {
            this._mapPane &&
              (i &&
                ((this._animatingZoom = !0),
                (this._animateToCenter = t),
                (this._animateToZoom = e),
                de(this._mapPane, 'leaflet-zoom-anim')),
              this.fire('zoomanim', { center: t, zoom: e, noUpdate: n }),
              setTimeout(o(this._onZoomTransitionEnd, this), 250));
          },
          _onZoomTransitionEnd: function() {
            this._animatingZoom &&
              (this._mapPane && pe(this._mapPane, 'leaflet-zoom-anim'),
              (this._animatingZoom = !1),
              this._move(this._animateToCenter, this._animateToZoom),
              z(function() {
                this._moveEnd(!0);
              }, this));
          }
        }),
        Ye = A.extend({
          options: { position: 'topright' },
          initialize: function(t) {
            p(this, t);
          },
          getPosition: function() {
            return this.options.position;
          },
          setPosition: function(t) {
            var e = this._map;
            return e && e.removeControl(this), (this.options.position = t), e && e.addControl(this), this;
          },
          getContainer: function() {
            return this._container;
          },
          addTo: function(t) {
            this.remove(), (this._map = t);
            var e = (this._container = this.onAdd(t)),
              i = this.getPosition(),
              n = t._controlCorners[i];
            return (
              de(e, 'leaflet-control'),
              -1 !== i.indexOf('bottom') ? n.insertBefore(e, n.firstChild) : n.appendChild(e),
              this._map.on('unload', this.remove, this),
              this
            );
          },
          remove: function() {
            return this._map
              ? (ae(this._container),
                this.onRemove && this.onRemove(this._map),
                this._map.off('unload', this.remove, this),
                (this._map = null),
                this)
              : this;
          },
          _refocusOnMap: function(t) {
            this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
          }
        }),
        Xe = function(t) {
          return new Ye(t);
        };
      Ke.include({
        addControl: function(t) {
          return t.addTo(this), this;
        },
        removeControl: function(t) {
          return t.remove(), this;
        },
        _initControlPos: function() {
          var t = (this._controlCorners = {}),
            e = 'leaflet-',
            i = (this._controlContainer = se('div', e + 'control-container', this._container));
          function n(n, o) {
            var r = e + n + ' ' + e + o;
            t[n + o] = se('div', r, i);
          }
          n('top', 'left'), n('top', 'right'), n('bottom', 'left'), n('bottom', 'right');
        },
        _clearControlPos: function() {
          for (var t in this._controlCorners) ae(this._controlCorners[t]);
          ae(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        }
      });
      var Qe = Ye.extend({
          options: {
            collapsed: !0,
            position: 'topright',
            autoZIndex: !0,
            hideSingleBase: !1,
            sortLayers: !1,
            sortFunction: function(t, e, i, n) {
              return i < n ? -1 : n < i ? 1 : 0;
            }
          },
          initialize: function(t, e, i) {
            for (var n in (p(this, i),
            (this._layerControlInputs = []),
            (this._layers = []),
            (this._lastZIndex = 0),
            (this._handlingClick = !1),
            t))
              this._addLayer(t[n], n);
            for (n in e) this._addLayer(e[n], n, !0);
          },
          onAdd: function(t) {
            this._initLayout(), this._update(), (this._map = t), t.on('zoomend', this._checkDisabledLayers, this);
            for (var e = 0; e < this._layers.length; e++)
              this._layers[e].layer.on('add remove', this._onLayerChange, this);
            return this._container;
          },
          addTo: function(t) {
            return Ye.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
          },
          onRemove: function() {
            this._map.off('zoomend', this._checkDisabledLayers, this);
            for (var t = 0; t < this._layers.length; t++)
              this._layers[t].layer.off('add remove', this._onLayerChange, this);
          },
          addBaseLayer: function(t, e) {
            return this._addLayer(t, e), this._map ? this._update() : this;
          },
          addOverlay: function(t, e) {
            return this._addLayer(t, e, !0), this._map ? this._update() : this;
          },
          removeLayer: function(t) {
            t.off('add remove', this._onLayerChange, this);
            var e = this._getLayer(s(t));
            return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
          },
          expand: function() {
            de(this._container, 'leaflet-control-layers-expanded'), (this._section.style.height = null);
            var t = this._map.getSize().y - (this._container.offsetTop + 50);
            return (
              t < this._section.clientHeight
                ? (de(this._section, 'leaflet-control-layers-scrollbar'), (this._section.style.height = t + 'px'))
                : pe(this._section, 'leaflet-control-layers-scrollbar'),
              this._checkDisabledLayers(),
              this
            );
          },
          collapse: function() {
            return pe(this._container, 'leaflet-control-layers-expanded'), this;
          },
          _initLayout: function() {
            var t = 'leaflet-control-layers',
              e = (this._container = se('div', t)),
              i = this.options.collapsed;
            e.setAttribute('aria-haspopup', !0), Oe(e), Ie(e);
            var n = (this._section = se('section', t + '-list'));
            i &&
              (this._map.on('click', this.collapse, this),
              it || Ae(e, { mouseenter: this.expand, mouseleave: this.collapse }, this));
            var o = (this._layersLink = se('a', t + '-toggle', e));
            (o.href = '#'),
              (o.title = 'Layers'),
              wt ? (Ae(o, 'click', Ne), Ae(o, 'click', this.expand, this)) : Ae(o, 'focus', this.expand, this),
              i || this.expand(),
              (this._baseLayersList = se('div', t + '-base', n)),
              (this._separator = se('div', t + '-separator', n)),
              (this._overlaysList = se('div', t + '-overlays', n)),
              e.appendChild(n);
          },
          _getLayer: function(t) {
            for (var e = 0; e < this._layers.length; e++)
              if (this._layers[e] && s(this._layers[e].layer) === t) return this._layers[e];
          },
          _addLayer: function(t, e, i) {
            this._map && t.on('add remove', this._onLayerChange, this),
              this._layers.push({ layer: t, name: e, overlay: i }),
              this.options.sortLayers &&
                this._layers.sort(
                  o(function(t, e) {
                    return this.options.sortFunction(t.layer, e.layer, t.name, e.name);
                  }, this)
                ),
              this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
              this._expandIfNotCollapsed();
          },
          _update: function() {
            if (!this._container) return this;
            he(this._baseLayersList), he(this._overlaysList), (this._layerControlInputs = []);
            var t,
              e,
              i,
              n,
              o = 0;
            for (i = 0; i < this._layers.length; i++)
              (n = this._layers[i]),
                this._addItem(n),
                (e = e || n.overlay),
                (t = t || !n.overlay),
                (o += n.overlay ? 0 : 1);
            return (
              this.options.hideSingleBase && ((t = t && o > 1), (this._baseLayersList.style.display = t ? '' : 'none')),
              (this._separator.style.display = e && t ? '' : 'none'),
              this
            );
          },
          _onLayerChange: function(t) {
            this._handlingClick || this._update();
            var e = this._getLayer(s(t.target)),
              i = e.overlay
                ? 'add' === t.type
                  ? 'overlayadd'
                  : 'overlayremove'
                : 'add' === t.type
                ? 'baselayerchange'
                : null;
            i && this._map.fire(i, e);
          },
          _createRadioElement: function(t, e) {
            var i =
                '<input type="radio" class="leaflet-control-layers-selector" name="' +
                t +
                '"' +
                (e ? ' checked="checked"' : '') +
                '/>',
              n = document.createElement('div');
            return (n.innerHTML = i), n.firstChild;
          },
          _addItem: function(t) {
            var e,
              i = document.createElement('label'),
              n = this._map.hasLayer(t.layer);
            t.overlay
              ? (((e = document.createElement('input')).type = 'checkbox'),
                (e.className = 'leaflet-control-layers-selector'),
                (e.defaultChecked = n))
              : (e = this._createRadioElement('leaflet-base-layers_' + s(this), n)),
              this._layerControlInputs.push(e),
              (e.layerId = s(t.layer)),
              Ae(e, 'click', this._onInputClick, this);
            var o = document.createElement('span');
            o.innerHTML = ' ' + t.name;
            var r = document.createElement('div');
            return (
              i.appendChild(r),
              r.appendChild(e),
              r.appendChild(o),
              (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i),
              this._checkDisabledLayers(),
              i
            );
          },
          _onInputClick: function() {
            var t,
              e,
              i = this._layerControlInputs,
              n = [],
              o = [];
            this._handlingClick = !0;
            for (var r = i.length - 1; r >= 0; r--)
              (t = i[r]), (e = this._getLayer(t.layerId).layer), t.checked ? n.push(e) : t.checked || o.push(e);
            for (r = 0; r < o.length; r++) this._map.hasLayer(o[r]) && this._map.removeLayer(o[r]);
            for (r = 0; r < n.length; r++) this._map.hasLayer(n[r]) || this._map.addLayer(n[r]);
            (this._handlingClick = !1), this._refocusOnMap();
          },
          _checkDisabledLayers: function() {
            for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; o >= 0; o--)
              (t = i[o]),
                (e = this._getLayer(t.layerId).layer),
                (t.disabled =
                  (void 0 !== e.options.minZoom && n < e.options.minZoom) ||
                  (void 0 !== e.options.maxZoom && n > e.options.maxZoom));
          },
          _expandIfNotCollapsed: function() {
            return this._map && !this.options.collapsed && this.expand(), this;
          },
          _expand: function() {
            return this.expand();
          },
          _collapse: function() {
            return this.collapse();
          }
        }),
        $e = Ye.extend({
          options: {
            position: 'topleft',
            zoomInText: '+',
            zoomInTitle: 'Zoom in',
            zoomOutText: '&#x2212;',
            zoomOutTitle: 'Zoom out'
          },
          onAdd: function(t) {
            var e = 'leaflet-control-zoom',
              i = se('div', e + ' leaflet-bar'),
              n = this.options;
            return (
              (this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + '-in', i, this._zoomIn)),
              (this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + '-out', i, this._zoomOut)),
              this._updateDisabled(),
              t.on('zoomend zoomlevelschange', this._updateDisabled, this),
              i
            );
          },
          onRemove: function(t) {
            t.off('zoomend zoomlevelschange', this._updateDisabled, this);
          },
          disable: function() {
            return (this._disabled = !0), this._updateDisabled(), this;
          },
          enable: function() {
            return (this._disabled = !1), this._updateDisabled(), this;
          },
          _zoomIn: function(t) {
            !this._disabled &&
              this._map._zoom < this._map.getMaxZoom() &&
              this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
          },
          _zoomOut: function(t) {
            !this._disabled &&
              this._map._zoom > this._map.getMinZoom() &&
              this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
          },
          _createButton: function(t, e, i, n, o) {
            var r = se('a', i, n);
            return (
              (r.innerHTML = t),
              (r.href = '#'),
              (r.title = e),
              r.setAttribute('role', 'button'),
              r.setAttribute('aria-label', e),
              Oe(r),
              Ae(r, 'click', Ne),
              Ae(r, 'click', o, this),
              Ae(r, 'click', this._refocusOnMap, this),
              r
            );
          },
          _updateDisabled: function() {
            var t = this._map,
              e = 'leaflet-disabled';
            pe(this._zoomInButton, e),
              pe(this._zoomOutButton, e),
              (this._disabled || t._zoom === t.getMinZoom()) && de(this._zoomOutButton, e),
              (this._disabled || t._zoom === t.getMaxZoom()) && de(this._zoomInButton, e);
          }
        });
      Ke.mergeOptions({ zoomControl: !0 }),
        Ke.addInitHook(function() {
          this.options.zoomControl && ((this.zoomControl = new $e()), this.addControl(this.zoomControl));
        });
      var ti = Ye.extend({
          options: { position: 'bottomleft', maxWidth: 100, metric: !0, imperial: !0 },
          onAdd: function(t) {
            var e = se('div', 'leaflet-control-scale'),
              i = this.options;
            return (
              this._addScales(i, 'leaflet-control-scale-line', e),
              t.on(i.updateWhenIdle ? 'moveend' : 'move', this._update, this),
              t.whenReady(this._update, this),
              e
            );
          },
          onRemove: function(t) {
            t.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
          },
          _addScales: function(t, e, i) {
            t.metric && (this._mScale = se('div', e, i)), t.imperial && (this._iScale = se('div', e, i));
          },
          _update: function() {
            var t = this._map,
              e = t.getSize().y / 2,
              i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
            this._updateScales(i);
          },
          _updateScales: function(t) {
            this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
          },
          _updateMetric: function(t) {
            var e = this._getRoundNum(t),
              i = e < 1e3 ? e + ' m' : e / 1e3 + ' km';
            this._updateScale(this._mScale, i, e / t);
          },
          _updateImperial: function(t) {
            var e,
              i,
              n,
              o = 3.2808399 * t;
            o > 5280
              ? ((e = o / 5280), (i = this._getRoundNum(e)), this._updateScale(this._iScale, i + ' mi', i / e))
              : ((n = this._getRoundNum(o)), this._updateScale(this._iScale, n + ' ft', n / o));
          },
          _updateScale: function(t, e, i) {
            (t.style.width = Math.round(this.options.maxWidth * i) + 'px'), (t.innerHTML = e);
          },
          _getRoundNum: function(t) {
            var e = Math.pow(10, (Math.floor(t) + '').length - 1),
              i = t / e;
            return e * (i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1);
          }
        }),
        ei = Ye.extend({
          options: {
            position: 'bottomright',
            prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
          },
          initialize: function(t) {
            p(this, t), (this._attributions = {});
          },
          onAdd: function(t) {
            for (var e in ((t.attributionControl = this),
            (this._container = se('div', 'leaflet-control-attribution')),
            Oe(this._container),
            t._layers))
              t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
            return this._update(), this._container;
          },
          setPrefix: function(t) {
            return (this.options.prefix = t), this._update(), this;
          },
          addAttribution: function(t) {
            return t
              ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this)
              : this;
          },
          removeAttribution: function(t) {
            return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
          },
          _update: function() {
            if (this._map) {
              var t = [];
              for (var e in this._attributions) this._attributions[e] && t.push(e);
              var i = [];
              this.options.prefix && i.push(this.options.prefix),
                t.length && i.push(t.join(', ')),
                (this._container.innerHTML = i.join(' | '));
            }
          }
        });
      Ke.mergeOptions({ attributionControl: !0 }),
        Ke.addInitHook(function() {
          this.options.attributionControl && new ei().addTo(this);
        }),
        (Ye.Layers = Qe),
        (Ye.Zoom = $e),
        (Ye.Scale = ti),
        (Ye.Attribution = ei),
        (Xe.layers = function(t, e, i) {
          return new Qe(t, e, i);
        }),
        (Xe.zoom = function(t) {
          return new $e(t);
        }),
        (Xe.scale = function(t) {
          return new ti(t);
        }),
        (Xe.attribution = function(t) {
          return new ei(t);
        });
      var ii = A.extend({
        initialize: function(t) {
          this._map = t;
        },
        enable: function() {
          return this._enabled ? this : ((this._enabled = !0), this.addHooks(), this);
        },
        disable: function() {
          return this._enabled ? ((this._enabled = !1), this.removeHooks(), this) : this;
        },
        enabled: function() {
          return !!this._enabled;
        }
      });
      ii.addTo = function(t, e) {
        return t.addHandler(e, this), this;
      };
      var ni,
        oi = { Events: k },
        ri = wt ? 'touchstart mousedown' : 'mousedown',
        si = { mousedown: 'mouseup', touchstart: 'touchend', pointerdown: 'touchend', MSPointerDown: 'touchend' },
        ai = { mousedown: 'mousemove', touchstart: 'touchmove', pointerdown: 'touchmove', MSPointerDown: 'touchmove' },
        hi = C.extend({
          options: { clickTolerance: 3 },
          initialize: function(t, e, i, n) {
            p(this, n), (this._element = t), (this._dragStartTarget = e || t), (this._preventOutline = i);
          },
          enable: function() {
            this._enabled || (Ae(this._dragStartTarget, ri, this._onDown, this), (this._enabled = !0));
          },
          disable: function() {
            this._enabled &&
              (hi._dragging === this && this.finishDrag(),
              Ce(this._dragStartTarget, ri, this._onDown, this),
              (this._enabled = !1),
              (this._moved = !1));
          },
          _onDown: function(t) {
            if (
              !t._simulated &&
              this._enabled &&
              ((this._moved = !1),
              !ce(this._element, 'leaflet-zoom-anim') &&
                !(
                  hi._dragging ||
                  t.shiftKey ||
                  (1 !== t.which && 1 !== t.button && !t.touches) ||
                  ((hi._dragging = this), this._preventOutline && Pe(this._element), we(), Yt(), this._moving)
                ))
            ) {
              this.fire('down');
              var e = t.touches ? t.touches[0] : t,
                i = ze(this._element);
              (this._startPoint = new S(e.clientX, e.clientY)),
                (this._parentScale = Me(i)),
                Ae(document, ai[t.type], this._onMove, this),
                Ae(document, si[t.type], this._onUp, this);
            }
          },
          _onMove: function(t) {
            if (!t._simulated && this._enabled)
              if (t.touches && t.touches.length > 1) this._moved = !0;
              else {
                var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                  i = new S(e.clientX, e.clientY)._subtract(this._startPoint);
                (i.x || i.y) &&
                  (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance ||
                    ((i.x /= this._parentScale.x),
                    (i.y /= this._parentScale.y),
                    Re(t),
                    this._moved ||
                      (this.fire('dragstart'),
                      (this._moved = !0),
                      (this._startPos = xe(this._element).subtract(i)),
                      de(document.body, 'leaflet-dragging'),
                      (this._lastTarget = t.target || t.srcElement),
                      window.SVGElementInstance &&
                        this._lastTarget instanceof SVGElementInstance &&
                        (this._lastTarget = this._lastTarget.correspondingUseElement),
                      de(this._lastTarget, 'leaflet-drag-target')),
                    (this._newPos = this._startPos.add(i)),
                    (this._moving = !0),
                    M(this._animRequest),
                    (this._lastEvent = t),
                    (this._animRequest = z(this._updatePosition, this, !0))));
              }
          },
          _updatePosition: function() {
            var t = { originalEvent: this._lastEvent };
            this.fire('predrag', t), ye(this._element, this._newPos), this.fire('drag', t);
          },
          _onUp: function(t) {
            !t._simulated && this._enabled && this.finishDrag();
          },
          finishDrag: function() {
            for (var t in (pe(document.body, 'leaflet-dragging'),
            this._lastTarget && (pe(this._lastTarget, 'leaflet-drag-target'), (this._lastTarget = null)),
            ai))
              Ce(document, ai[t], this._onMove, this), Ce(document, si[t], this._onUp, this);
            Le(),
              Xt(),
              this._moved &&
                this._moving &&
                (M(this._animRequest), this.fire('dragend', { distance: this._newPos.distanceTo(this._startPos) })),
              (this._moving = !1),
              (hi._dragging = !1);
          }
        });
      function li(t, e) {
        if (!e || !t.length) return t.slice();
        var i = e * e;
        return (t = (function(t, e) {
          var i = t.length,
            n = new (typeof Uint8Array != void 0 + '' ? Uint8Array : Array)(i);
          (n[0] = n[i - 1] = 1),
            (function t(e, i, n, o, r) {
              var s,
                a,
                h,
                l = 0;
              for (a = o + 1; a <= r - 1; a++) (h = fi(e[a], e[o], e[r], !0)) > l && ((s = a), (l = h));
              l > n && ((i[s] = 1), t(e, i, n, o, s), t(e, i, n, s, r));
            })(t, n, e, 0, i - 1);
          var o,
            r = [];
          for (o = 0; o < i; o++) n[o] && r.push(t[o]);
          return r;
        })(
          (t = (function(t, e) {
            for (var i = [t[0]], n = 1, o = 0, r = t.length; n < r; n++)
              (s = t[n]),
                (a = t[o]),
                (h = void 0),
                (l = void 0),
                (h = a.x - s.x),
                (l = a.y - s.y),
                h * h + l * l > e && (i.push(t[n]), (o = n));
            var s, a, h, l;
            return o < r - 1 && i.push(t[r - 1]), i;
          })(t, i)),
          i
        ));
      }
      function ui(t, e, i) {
        return Math.sqrt(fi(t, e, i, !0));
      }
      function ci(t, e, i, n, o) {
        var r,
          s,
          a,
          h = n ? ni : pi(t, i),
          l = pi(e, i);
        for (ni = l; ; ) {
          if (!(h | l)) return [t, e];
          if (h & l) return !1;
          (a = pi((s = di(t, e, (r = h || l), i, o)), i)), r === h ? ((t = s), (h = a)) : ((e = s), (l = a));
        }
      }
      function di(t, e, i, n, o) {
        var r,
          s,
          a = e.x - t.x,
          h = e.y - t.y,
          l = n.min,
          u = n.max;
        return (
          8 & i
            ? ((r = t.x + (a * (u.y - t.y)) / h), (s = u.y))
            : 4 & i
            ? ((r = t.x + (a * (l.y - t.y)) / h), (s = l.y))
            : 2 & i
            ? ((r = u.x), (s = t.y + (h * (u.x - t.x)) / a))
            : 1 & i && ((r = l.x), (s = t.y + (h * (l.x - t.x)) / a)),
          new S(r, s, o)
        );
      }
      function pi(t, e) {
        var i = 0;
        return (
          t.x < e.min.x ? (i |= 1) : t.x > e.max.x && (i |= 2), t.y < e.min.y ? (i |= 4) : t.y > e.max.y && (i |= 8), i
        );
      }
      function fi(t, e, i, n) {
        var o,
          r = e.x,
          s = e.y,
          a = i.x - r,
          h = i.y - s,
          l = a * a + h * h;
        return (
          l > 0 &&
            ((o = ((t.x - r) * a + (t.y - s) * h) / l) > 1
              ? ((r = i.x), (s = i.y))
              : o > 0 && ((r += a * o), (s += h * o))),
          (a = t.x - r),
          (h = t.y - s),
          n ? a * a + h * h : new S(r, s)
        );
      }
      function _i(t) {
        return !g(t[0]) || ('object' != typeof t[0][0] && void 0 !== t[0][0]);
      }
      function mi(t) {
        return console.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.'), _i(t);
      }
      var gi = (Object.freeze || Object)({
        simplify: li,
        pointToSegmentDistance: ui,
        closestPointOnSegment: function(t, e, i) {
          return fi(t, e, i);
        },
        clipSegment: ci,
        _getEdgeIntersection: di,
        _getBitCode: pi,
        _sqClosestPointOnSegment: fi,
        isFlat: _i,
        _flat: mi
      });
      function vi(t, e, i) {
        var n,
          o,
          r,
          s,
          a,
          h,
          l,
          u,
          c,
          d = [1, 4, 2, 8];
        for (o = 0, l = t.length; o < l; o++) t[o]._code = pi(t[o], e);
        for (s = 0; s < 4; s++) {
          for (u = d[s], n = [], o = 0, r = (l = t.length) - 1; o < l; r = o++)
            (a = t[o]),
              (h = t[r]),
              a._code & u
                ? h._code & u || (((c = di(h, a, u, e, i))._code = pi(c, e)), n.push(c))
                : (h._code & u && (((c = di(h, a, u, e, i))._code = pi(c, e)), n.push(c)), n.push(a));
          t = n;
        }
        return t;
      }
      var yi = (Object.freeze || Object)({ clipPolygon: vi }),
        xi = {
          project: function(t) {
            return new S(t.lng, t.lat);
          },
          unproject: function(t) {
            return new D(t.y, t.x);
          },
          bounds: new I([-180, -90], [180, 90])
        },
        bi = {
          R: 6378137,
          R_MINOR: 6356752.314245179,
          bounds: new I([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
          project: function(t) {
            var e = Math.PI / 180,
              i = this.R,
              n = t.lat * e,
              o = this.R_MINOR / i,
              r = Math.sqrt(1 - o * o),
              s = r * Math.sin(n),
              a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - s) / (1 + s), r / 2);
            return (n = -i * Math.log(Math.max(a, 1e-10))), new S(t.lng * e * i, n);
          },
          unproject: function(t) {
            for (
              var e,
                i = 180 / Math.PI,
                n = this.R,
                o = this.R_MINOR / n,
                r = Math.sqrt(1 - o * o),
                s = Math.exp(-t.y / n),
                a = Math.PI / 2 - 2 * Math.atan(s),
                h = 0,
                l = 0.1;
              h < 15 && Math.abs(l) > 1e-7;
              h++
            )
              (e = r * Math.sin(a)),
                (e = Math.pow((1 - e) / (1 + e), r / 2)),
                (a += l = Math.PI / 2 - 2 * Math.atan(s * e) - a);
            return new D(a * i, (t.x * i) / n);
          }
        },
        wi = (Object.freeze || Object)({ LonLat: xi, Mercator: bi, SphericalMercator: W }),
        Li = i({}, H, {
          code: 'EPSG:3395',
          projection: bi,
          transformation: (function() {
            var t = 0.5 / (Math.PI * bi.R);
            return V(t, 0.5, -t, 0.5);
          })()
        }),
        Pi = i({}, H, { code: 'EPSG:4326', projection: xi, transformation: V(1 / 180, 1, -1 / 180, 0.5) }),
        Ti = i({}, U, {
          projection: xi,
          transformation: V(1, 0, -1, 0),
          scale: function(t) {
            return Math.pow(2, t);
          },
          zoom: function(t) {
            return Math.log(t) / Math.LN2;
          },
          distance: function(t, e) {
            var i = e.lng - t.lng,
              n = e.lat - t.lat;
            return Math.sqrt(i * i + n * n);
          },
          infinite: !0
        });
      (U.Earth = H), (U.EPSG3395 = Li), (U.EPSG3857 = G), (U.EPSG900913 = J), (U.EPSG4326 = Pi), (U.Simple = Ti);
      var zi = C.extend({
        options: { pane: 'overlayPane', attribution: null, bubblingMouseEvents: !0 },
        addTo: function(t) {
          return t.addLayer(this), this;
        },
        remove: function() {
          return this.removeFrom(this._map || this._mapToAdd);
        },
        removeFrom: function(t) {
          return t && t.removeLayer(this), this;
        },
        getPane: function(t) {
          return this._map.getPane(t ? this.options[t] || t : this.options.pane);
        },
        addInteractiveTarget: function(t) {
          return (this._map._targets[s(t)] = this), this;
        },
        removeInteractiveTarget: function(t) {
          return delete this._map._targets[s(t)], this;
        },
        getAttribution: function() {
          return this.options.attribution;
        },
        _layerAdd: function(t) {
          var e = t.target;
          if (e.hasLayer(this)) {
            if (((this._map = e), (this._zoomAnimated = e._zoomAnimated), this.getEvents)) {
              var i = this.getEvents();
              e.on(i, this),
                this.once(
                  'remove',
                  function() {
                    e.off(i, this);
                  },
                  this
                );
            }
            this.onAdd(e),
              this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()),
              this.fire('add'),
              e.fire('layeradd', { layer: this });
          }
        }
      });
      Ke.include({
        addLayer: function(t) {
          if (!t._layerAdd) throw new Error('The provided object is not a Layer.');
          var e = s(t);
          return this._layers[e]
            ? this
            : ((this._layers[e] = t),
              (t._mapToAdd = this),
              t.beforeAdd && t.beforeAdd(this),
              this.whenReady(t._layerAdd, t),
              this);
        },
        removeLayer: function(t) {
          var e = s(t);
          return this._layers[e]
            ? (this._loaded && t.onRemove(this),
              t.getAttribution &&
                this.attributionControl &&
                this.attributionControl.removeAttribution(t.getAttribution()),
              delete this._layers[e],
              this._loaded && (this.fire('layerremove', { layer: t }), t.fire('remove')),
              (t._map = t._mapToAdd = null),
              this)
            : this;
        },
        hasLayer: function(t) {
          return !!t && s(t) in this._layers;
        },
        eachLayer: function(t, e) {
          for (var i in this._layers) t.call(e, this._layers[i]);
          return this;
        },
        _addLayers: function(t) {
          for (var e = 0, i = (t = t ? (g(t) ? t : [t]) : []).length; e < i; e++) this.addLayer(t[e]);
        },
        _addZoomLimit: function(t) {
          (!isNaN(t.options.maxZoom) && isNaN(t.options.minZoom)) ||
            ((this._zoomBoundLayers[s(t)] = t), this._updateZoomLevels());
        },
        _removeZoomLimit: function(t) {
          var e = s(t);
          this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
        },
        _updateZoomLevels: function() {
          var t = 1 / 0,
            e = -1 / 0,
            i = this._getZoomSpan();
          for (var n in this._zoomBoundLayers) {
            var o = this._zoomBoundLayers[n].options;
            (t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom)),
              (e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom));
          }
          (this._layersMaxZoom = e === -1 / 0 ? void 0 : e),
            (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
            i !== this._getZoomSpan() && this.fire('zoomlevelschange'),
            void 0 === this.options.maxZoom &&
              this._layersMaxZoom &&
              this.getZoom() > this._layersMaxZoom &&
              this.setZoom(this._layersMaxZoom),
            void 0 === this.options.minZoom &&
              this._layersMinZoom &&
              this.getZoom() < this._layersMinZoom &&
              this.setZoom(this._layersMinZoom);
        }
      });
      var Mi = zi.extend({
          initialize: function(t, e) {
            var i, n;
            if ((p(this, e), (this._layers = {}), t)) for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i]);
          },
          addLayer: function(t) {
            var e = this.getLayerId(t);
            return (this._layers[e] = t), this._map && this._map.addLayer(t), this;
          },
          removeLayer: function(t) {
            var e = t in this._layers ? t : this.getLayerId(t);
            return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this;
          },
          hasLayer: function(t) {
            return !!t && (t in this._layers || this.getLayerId(t) in this._layers);
          },
          clearLayers: function() {
            return this.eachLayer(this.removeLayer, this);
          },
          invoke: function(t) {
            var e,
              i,
              n = Array.prototype.slice.call(arguments, 1);
            for (e in this._layers) (i = this._layers[e])[t] && i[t].apply(i, n);
            return this;
          },
          onAdd: function(t) {
            this.eachLayer(t.addLayer, t);
          },
          onRemove: function(t) {
            this.eachLayer(t.removeLayer, t);
          },
          eachLayer: function(t, e) {
            for (var i in this._layers) t.call(e, this._layers[i]);
            return this;
          },
          getLayer: function(t) {
            return this._layers[t];
          },
          getLayers: function() {
            var t = [];
            return this.eachLayer(t.push, t), t;
          },
          setZIndex: function(t) {
            return this.invoke('setZIndex', t);
          },
          getLayerId: function(t) {
            return s(t);
          }
        }),
        Ei = Mi.extend({
          addLayer: function(t) {
            return this.hasLayer(t)
              ? this
              : (t.addEventParent(this), Mi.prototype.addLayer.call(this, t), this.fire('layeradd', { layer: t }));
          },
          removeLayer: function(t) {
            return this.hasLayer(t)
              ? (t in this._layers && (t = this._layers[t]),
                t.removeEventParent(this),
                Mi.prototype.removeLayer.call(this, t),
                this.fire('layerremove', { layer: t }))
              : this;
          },
          setStyle: function(t) {
            return this.invoke('setStyle', t);
          },
          bringToFront: function() {
            return this.invoke('bringToFront');
          },
          bringToBack: function() {
            return this.invoke('bringToBack');
          },
          getBounds: function() {
            var t = new R();
            for (var e in this._layers) {
              var i = this._layers[e];
              t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
            }
            return t;
          }
        }),
        Ai = A.extend({
          options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0] },
          initialize: function(t) {
            p(this, t);
          },
          createIcon: function(t) {
            return this._createIcon('icon', t);
          },
          createShadow: function(t) {
            return this._createIcon('shadow', t);
          },
          _createIcon: function(t, e) {
            var i = this._getIconUrl(t);
            if (!i) {
              if ('icon' === t) throw new Error('iconUrl not set in Icon options (see the docs).');
              return null;
            }
            var n = this._createImg(i, e && 'IMG' === e.tagName ? e : null);
            return this._setIconStyles(n, t), n;
          },
          _setIconStyles: function(t, e) {
            var i = this.options,
              n = i[e + 'Size'];
            'number' == typeof n && (n = [n, n]);
            var o = B(n),
              r = B(('shadow' === e && i.shadowAnchor) || i.iconAnchor || (o && o.divideBy(2, !0)));
            (t.className = 'leaflet-marker-' + e + ' ' + (i.className || '')),
              r && ((t.style.marginLeft = -r.x + 'px'), (t.style.marginTop = -r.y + 'px')),
              o && ((t.style.width = o.x + 'px'), (t.style.height = o.y + 'px'));
          },
          _createImg: function(t, e) {
            return ((e = e || document.createElement('img')).src = t), e;
          },
          _getIconUrl: function(t) {
            return (Tt && this.options[t + 'RetinaUrl']) || this.options[t + 'Url'];
          }
        }),
        ki = Ai.extend({
          options: {
            iconUrl: 'marker-icon.png',
            iconRetinaUrl: 'marker-icon-2x.png',
            shadowUrl: 'marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41]
          },
          _getIconUrl: function(t) {
            return (
              ki.imagePath || (ki.imagePath = this._detectIconPath()),
              (this.options.imagePath || ki.imagePath) + Ai.prototype._getIconUrl.call(this, t)
            );
          },
          _detectIconPath: function() {
            var t = se('div', 'leaflet-default-icon-path', document.body),
              e = re(t, 'background-image') || re(t, 'backgroundImage');
            return (
              document.body.removeChild(t),
              (e =
                null === e || 0 !== e.indexOf('url')
                  ? ''
                  : e.replace(/^url\(["']?/, '').replace(/marker-icon\.png["']?\)$/, ''))
            );
          }
        }),
        Ci = ii.extend({
          initialize: function(t) {
            this._marker = t;
          },
          addHooks: function() {
            var t = this._marker._icon;
            this._draggable || (this._draggable = new hi(t, t, !0)),
              this._draggable
                .on(
                  {
                    dragstart: this._onDragStart,
                    predrag: this._onPreDrag,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                  },
                  this
                )
                .enable(),
              de(t, 'leaflet-marker-draggable');
          },
          removeHooks: function() {
            this._draggable
              .off(
                {
                  dragstart: this._onDragStart,
                  predrag: this._onPreDrag,
                  drag: this._onDrag,
                  dragend: this._onDragEnd
                },
                this
              )
              .disable(),
              this._marker._icon && pe(this._marker._icon, 'leaflet-marker-draggable');
          },
          moved: function() {
            return this._draggable && this._draggable._moved;
          },
          _adjustPan: function(t) {
            var e = this._marker,
              i = e._map,
              n = this._marker.options.autoPanSpeed,
              o = this._marker.options.autoPanPadding,
              r = xe(e._icon),
              s = i.getPixelBounds(),
              a = i.getPixelOrigin(),
              h = O(s.min._subtract(a).add(o), s.max._subtract(a).subtract(o));
            if (!h.contains(r)) {
              var l = B(
                (Math.max(h.max.x, r.x) - h.max.x) / (s.max.x - h.max.x) -
                  (Math.min(h.min.x, r.x) - h.min.x) / (s.min.x - h.min.x),
                (Math.max(h.max.y, r.y) - h.max.y) / (s.max.y - h.max.y) -
                  (Math.min(h.min.y, r.y) - h.min.y) / (s.min.y - h.min.y)
              ).multiplyBy(n);
              i.panBy(l, { animate: !1 }),
                this._draggable._newPos._add(l),
                this._draggable._startPos._add(l),
                ye(e._icon, this._draggable._newPos),
                this._onDrag(t),
                (this._panRequest = z(this._adjustPan.bind(this, t)));
            }
          },
          _onDragStart: function() {
            (this._oldLatLng = this._marker.getLatLng()),
              this._marker
                .closePopup()
                .fire('movestart')
                .fire('dragstart');
          },
          _onPreDrag: function(t) {
            this._marker.options.autoPan &&
              (M(this._panRequest), (this._panRequest = z(this._adjustPan.bind(this, t))));
          },
          _onDrag: function(t) {
            var e = this._marker,
              i = e._shadow,
              n = xe(e._icon),
              o = e._map.layerPointToLatLng(n);
            i && ye(i, n),
              (e._latlng = o),
              (t.latlng = o),
              (t.oldLatLng = this._oldLatLng),
              e.fire('move', t).fire('drag', t);
          },
          _onDragEnd: function(t) {
            M(this._panRequest), delete this._oldLatLng, this._marker.fire('moveend').fire('dragend', t);
          }
        }),
        Si = zi.extend({
          options: {
            icon: new ki(),
            interactive: !0,
            keyboard: !0,
            title: '',
            alt: '',
            zIndexOffset: 0,
            opacity: 1,
            riseOnHover: !1,
            riseOffset: 250,
            pane: 'markerPane',
            shadowPane: 'shadowPane',
            bubblingMouseEvents: !1,
            draggable: !1,
            autoPan: !1,
            autoPanPadding: [50, 50],
            autoPanSpeed: 10
          },
          initialize: function(t, e) {
            p(this, e), (this._latlng = j(t));
          },
          onAdd: function(t) {
            (this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation),
              this._zoomAnimated && t.on('zoomanim', this._animateZoom, this),
              this._initIcon(),
              this.update();
          },
          onRemove: function(t) {
            this.dragging && this.dragging.enabled() && ((this.options.draggable = !0), this.dragging.removeHooks()),
              delete this.dragging,
              this._zoomAnimated && t.off('zoomanim', this._animateZoom, this),
              this._removeIcon(),
              this._removeShadow();
          },
          getEvents: function() {
            return { zoom: this.update, viewreset: this.update };
          },
          getLatLng: function() {
            return this._latlng;
          },
          setLatLng: function(t) {
            var e = this._latlng;
            return (this._latlng = j(t)), this.update(), this.fire('move', { oldLatLng: e, latlng: this._latlng });
          },
          setZIndexOffset: function(t) {
            return (this.options.zIndexOffset = t), this.update();
          },
          getIcon: function() {
            return this.options.icon;
          },
          setIcon: function(t) {
            return (
              (this.options.icon = t),
              this._map && (this._initIcon(), this.update()),
              this._popup && this.bindPopup(this._popup, this._popup.options),
              this
            );
          },
          getElement: function() {
            return this._icon;
          },
          update: function() {
            if (this._icon && this._map) {
              var t = this._map.latLngToLayerPoint(this._latlng).round();
              this._setPos(t);
            }
            return this;
          },
          _initIcon: function() {
            var t = this.options,
              e = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide'),
              i = t.icon.createIcon(this._icon),
              n = !1;
            i !== this._icon &&
              (this._icon && this._removeIcon(),
              (n = !0),
              t.title && (i.title = t.title),
              'IMG' === i.tagName && (i.alt = t.alt || '')),
              de(i, e),
              t.keyboard && (i.tabIndex = '0'),
              (this._icon = i),
              t.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex });
            var o = t.icon.createShadow(this._shadow),
              r = !1;
            o !== this._shadow && (this._removeShadow(), (r = !0)),
              o && (de(o, e), (o.alt = '')),
              (this._shadow = o),
              t.opacity < 1 && this._updateOpacity(),
              n && this.getPane().appendChild(this._icon),
              this._initInteraction(),
              o && r && this.getPane(t.shadowPane).appendChild(this._shadow);
          },
          _removeIcon: function() {
            this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }),
              ae(this._icon),
              this.removeInteractiveTarget(this._icon),
              (this._icon = null);
          },
          _removeShadow: function() {
            this._shadow && ae(this._shadow), (this._shadow = null);
          },
          _setPos: function(t) {
            this._icon && ye(this._icon, t),
              this._shadow && ye(this._shadow, t),
              (this._zIndex = t.y + this.options.zIndexOffset),
              this._resetZIndex();
          },
          _updateZIndex: function(t) {
            this._icon && (this._icon.style.zIndex = this._zIndex + t);
          },
          _animateZoom: function(t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
            this._setPos(e);
          },
          _initInteraction: function() {
            if (
              this.options.interactive &&
              (de(this._icon, 'leaflet-interactive'), this.addInteractiveTarget(this._icon), Ci)
            ) {
              var t = this.options.draggable;
              this.dragging && ((t = this.dragging.enabled()), this.dragging.disable()),
                (this.dragging = new Ci(this)),
                t && this.dragging.enable();
            }
          },
          setOpacity: function(t) {
            return (this.options.opacity = t), this._map && this._updateOpacity(), this;
          },
          _updateOpacity: function() {
            var t = this.options.opacity;
            this._icon && me(this._icon, t), this._shadow && me(this._shadow, t);
          },
          _bringToFront: function() {
            this._updateZIndex(this.options.riseOffset);
          },
          _resetZIndex: function() {
            this._updateZIndex(0);
          },
          _getPopupAnchor: function() {
            return this.options.icon.options.popupAnchor;
          },
          _getTooltipAnchor: function() {
            return this.options.icon.options.tooltipAnchor;
          }
        }),
        Zi = zi.extend({
          options: {
            stroke: !0,
            color: '#3388ff',
            weight: 3,
            opacity: 1,
            lineCap: 'round',
            lineJoin: 'round',
            dashArray: null,
            dashOffset: null,
            fill: !1,
            fillColor: null,
            fillOpacity: 0.2,
            fillRule: 'evenodd',
            interactive: !0,
            bubblingMouseEvents: !0
          },
          beforeAdd: function(t) {
            this._renderer = t.getRenderer(this);
          },
          onAdd: function() {
            this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
          },
          onRemove: function() {
            this._renderer._removePath(this);
          },
          redraw: function() {
            return this._map && this._renderer._updatePath(this), this;
          },
          setStyle: function(t) {
            return (
              p(this, t),
              this._renderer &&
                (this._renderer._updateStyle(this),
                this.options.stroke && t && t.hasOwnProperty('weight') && this._updateBounds()),
              this
            );
          },
          bringToFront: function() {
            return this._renderer && this._renderer._bringToFront(this), this;
          },
          bringToBack: function() {
            return this._renderer && this._renderer._bringToBack(this), this;
          },
          getElement: function() {
            return this._path;
          },
          _reset: function() {
            this._project(), this._update();
          },
          _clickTolerance: function() {
            return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
          }
        }),
        Bi = Zi.extend({
          options: { fill: !0, radius: 10 },
          initialize: function(t, e) {
            p(this, e), (this._latlng = j(t)), (this._radius = this.options.radius);
          },
          setLatLng: function(t) {
            var e = this._latlng;
            return (this._latlng = j(t)), this.redraw(), this.fire('move', { oldLatLng: e, latlng: this._latlng });
          },
          getLatLng: function() {
            return this._latlng;
          },
          setRadius: function(t) {
            return (this.options.radius = this._radius = t), this.redraw();
          },
          getRadius: function() {
            return this._radius;
          },
          setStyle: function(t) {
            var e = (t && t.radius) || this._radius;
            return Zi.prototype.setStyle.call(this, t), this.setRadius(e), this;
          },
          _project: function() {
            (this._point = this._map.latLngToLayerPoint(this._latlng)), this._updateBounds();
          },
          _updateBounds: function() {
            var t = this._radius,
              e = this._radiusY || t,
              i = this._clickTolerance(),
              n = [t + i, e + i];
            this._pxBounds = new I(this._point.subtract(n), this._point.add(n));
          },
          _update: function() {
            this._map && this._updatePath();
          },
          _updatePath: function() {
            this._renderer._updateCircle(this);
          },
          _empty: function() {
            return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
          },
          _containsPoint: function(t) {
            return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
          }
        }),
        Ii = Bi.extend({
          initialize: function(t, e, n) {
            if (
              ('number' == typeof e && (e = i({}, n, { radius: e })),
              p(this, e),
              (this._latlng = j(t)),
              isNaN(this.options.radius))
            )
              throw new Error('Circle radius cannot be NaN');
            this._mRadius = this.options.radius;
          },
          setRadius: function(t) {
            return (this._mRadius = t), this.redraw();
          },
          getRadius: function() {
            return this._mRadius;
          },
          getBounds: function() {
            var t = [this._radius, this._radiusY || this._radius];
            return new R(
              this._map.layerPointToLatLng(this._point.subtract(t)),
              this._map.layerPointToLatLng(this._point.add(t))
            );
          },
          setStyle: Zi.prototype.setStyle,
          _project: function() {
            var t = this._latlng.lng,
              e = this._latlng.lat,
              i = this._map,
              n = i.options.crs;
            if (n.distance === H.distance) {
              var o = Math.PI / 180,
                r = this._mRadius / H.R / o,
                s = i.project([e + r, t]),
                a = i.project([e - r, t]),
                h = s.add(a).divideBy(2),
                l = i.unproject(h).lat,
                u =
                  Math.acos(
                    (Math.cos(r * o) - Math.sin(e * o) * Math.sin(l * o)) / (Math.cos(e * o) * Math.cos(l * o))
                  ) / o;
              (isNaN(u) || 0 === u) && (u = r / Math.cos((Math.PI / 180) * e)),
                (this._point = h.subtract(i.getPixelOrigin())),
                (this._radius = isNaN(u) ? 0 : h.x - i.project([l, t - u]).x),
                (this._radiusY = h.y - s.y);
            } else {
              var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
              (this._point = i.latLngToLayerPoint(this._latlng)),
                (this._radius = this._point.x - i.latLngToLayerPoint(c).x);
            }
            this._updateBounds();
          }
        }),
        Oi = Zi.extend({
          options: { smoothFactor: 1, noClip: !1 },
          initialize: function(t, e) {
            p(this, e), this._setLatLngs(t);
          },
          getLatLngs: function() {
            return this._latlngs;
          },
          setLatLngs: function(t) {
            return this._setLatLngs(t), this.redraw();
          },
          isEmpty: function() {
            return !this._latlngs.length;
          },
          closestLayerPoint: function(t) {
            for (var e, i, n = 1 / 0, o = null, r = fi, s = 0, a = this._parts.length; s < a; s++)
              for (var h = this._parts[s], l = 1, u = h.length; l < u; l++) {
                var c = r(t, (e = h[l - 1]), (i = h[l]), !0);
                c < n && ((n = c), (o = r(t, e, i)));
              }
            return o && (o.distance = Math.sqrt(n)), o;
          },
          getCenter: function() {
            if (!this._map) throw new Error('Must add layer to map before using getCenter()');
            var t,
              e,
              i,
              n,
              o,
              r,
              s,
              a = this._rings[0],
              h = a.length;
            if (!h) return null;
            for (t = 0, e = 0; t < h - 1; t++) e += a[t].distanceTo(a[t + 1]) / 2;
            if (0 === e) return this._map.layerPointToLatLng(a[0]);
            for (t = 0, n = 0; t < h - 1; t++)
              if (((o = a[t]), (r = a[t + 1]), (n += i = o.distanceTo(r)) > e))
                return (s = (n - e) / i), this._map.layerPointToLatLng([r.x - s * (r.x - o.x), r.y - s * (r.y - o.y)]);
          },
          getBounds: function() {
            return this._bounds;
          },
          addLatLng: function(t, e) {
            return (e = e || this._defaultShape()), (t = j(t)), e.push(t), this._bounds.extend(t), this.redraw();
          },
          _setLatLngs: function(t) {
            (this._bounds = new R()), (this._latlngs = this._convertLatLngs(t));
          },
          _defaultShape: function() {
            return _i(this._latlngs) ? this._latlngs : this._latlngs[0];
          },
          _convertLatLngs: function(t) {
            for (var e = [], i = _i(t), n = 0, o = t.length; n < o; n++)
              i ? ((e[n] = j(t[n])), this._bounds.extend(e[n])) : (e[n] = this._convertLatLngs(t[n]));
            return e;
          },
          _project: function() {
            var t = new I();
            (this._rings = []),
              this._projectLatlngs(this._latlngs, this._rings, t),
              this._bounds.isValid() && t.isValid() && ((this._rawPxBounds = t), this._updateBounds());
          },
          _updateBounds: function() {
            var t = this._clickTolerance(),
              e = new S(t, t);
            this._pxBounds = new I([this._rawPxBounds.min.subtract(e), this._rawPxBounds.max.add(e)]);
          },
          _projectLatlngs: function(t, e, i) {
            var n,
              o,
              r = t[0] instanceof D,
              s = t.length;
            if (r) {
              for (o = [], n = 0; n < s; n++) (o[n] = this._map.latLngToLayerPoint(t[n])), i.extend(o[n]);
              e.push(o);
            } else for (n = 0; n < s; n++) this._projectLatlngs(t[n], e, i);
          },
          _clipPoints: function() {
            var t = this._renderer._bounds;
            if (((this._parts = []), this._pxBounds && this._pxBounds.intersects(t)))
              if (this.options.noClip) this._parts = this._rings;
              else {
                var e,
                  i,
                  n,
                  o,
                  r,
                  s,
                  a,
                  h = this._parts;
                for (e = 0, n = 0, o = this._rings.length; e < o; e++)
                  for (i = 0, r = (a = this._rings[e]).length; i < r - 1; i++)
                    (s = ci(a[i], a[i + 1], t, i, !0)) &&
                      ((h[n] = h[n] || []),
                      h[n].push(s[0]),
                      (s[1] === a[i + 1] && i !== r - 2) || (h[n].push(s[1]), n++));
              }
          },
          _simplifyPoints: function() {
            for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++)
              t[i] = li(t[i], e);
          },
          _update: function() {
            this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
          },
          _updatePath: function() {
            this._renderer._updatePoly(this);
          },
          _containsPoint: function(t, e) {
            var i,
              n,
              o,
              r,
              s,
              a,
              h = this._clickTolerance();
            if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
            for (i = 0, r = this._parts.length; i < r; i++)
              for (n = 0, o = (s = (a = this._parts[i]).length) - 1; n < s; o = n++)
                if ((e || 0 !== n) && ui(t, a[o], a[n]) <= h) return !0;
            return !1;
          }
        });
      Oi._flat = mi;
      var Ri = Oi.extend({
          options: { fill: !0 },
          isEmpty: function() {
            return !this._latlngs.length || !this._latlngs[0].length;
          },
          getCenter: function() {
            if (!this._map) throw new Error('Must add layer to map before using getCenter()');
            var t,
              e,
              i,
              n,
              o,
              r,
              s,
              a,
              h,
              l = this._rings[0],
              u = l.length;
            if (!u) return null;
            for (r = s = a = 0, t = 0, e = u - 1; t < u; e = t++)
              (i = l[t]),
                (n = l[e]),
                (o = i.y * n.x - n.y * i.x),
                (s += (i.x + n.x) * o),
                (a += (i.y + n.y) * o),
                (r += 3 * o);
            return (h = 0 === r ? l[0] : [s / r, a / r]), this._map.layerPointToLatLng(h);
          },
          _convertLatLngs: function(t) {
            var e = Oi.prototype._convertLatLngs.call(this, t),
              i = e.length;
            return i >= 2 && e[0] instanceof D && e[0].equals(e[i - 1]) && e.pop(), e;
          },
          _setLatLngs: function(t) {
            Oi.prototype._setLatLngs.call(this, t), _i(this._latlngs) && (this._latlngs = [this._latlngs]);
          },
          _defaultShape: function() {
            return _i(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
          },
          _clipPoints: function() {
            var t = this._renderer._bounds,
              e = this.options.weight,
              i = new S(e, e);
            if (
              ((t = new I(t.min.subtract(i), t.max.add(i))),
              (this._parts = []),
              this._pxBounds && this._pxBounds.intersects(t))
            )
              if (this.options.noClip) this._parts = this._rings;
              else
                for (var n, o = 0, r = this._rings.length; o < r; o++)
                  (n = vi(this._rings[o], t, !0)).length && this._parts.push(n);
          },
          _updatePath: function() {
            this._renderer._updatePoly(this, !0);
          },
          _containsPoint: function(t) {
            var e,
              i,
              n,
              o,
              r,
              s,
              a,
              h,
              l = !1;
            if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
            for (o = 0, a = this._parts.length; o < a; o++)
              for (r = 0, s = (h = (e = this._parts[o]).length) - 1; r < h; s = r++)
                (i = e[r]),
                  (n = e[s]),
                  i.y > t.y != n.y > t.y && t.x < ((n.x - i.x) * (t.y - i.y)) / (n.y - i.y) + i.x && (l = !l);
            return l || Oi.prototype._containsPoint.call(this, t, !0);
          }
        }),
        Ni = Ei.extend({
          initialize: function(t, e) {
            p(this, e), (this._layers = {}), t && this.addData(t);
          },
          addData: function(t) {
            var e,
              i,
              n,
              o = g(t) ? t : t.features;
            if (o) {
              for (e = 0, i = o.length; e < i; e++)
                ((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
              return this;
            }
            var r = this.options;
            if (r.filter && !r.filter(t)) return this;
            var s = Di(t, r);
            return s
              ? ((s.feature = Vi(t)),
                (s.defaultOptions = s.options),
                this.resetStyle(s),
                r.onEachFeature && r.onEachFeature(t, s),
                this.addLayer(s))
              : this;
          },
          resetStyle: function(t) {
            return void 0 === t
              ? this.eachLayer(this.resetStyle, this)
              : ((t.options = i({}, t.defaultOptions)), this._setLayerStyle(t, this.options.style), this);
          },
          setStyle: function(t) {
            return this.eachLayer(function(e) {
              this._setLayerStyle(e, t);
            }, this);
          },
          _setLayerStyle: function(t, e) {
            t.setStyle && ('function' == typeof e && (e = e(t.feature)), t.setStyle(e));
          }
        });
      function Di(t, e) {
        var i,
          n,
          o,
          r,
          s = 'Feature' === t.type ? t.geometry : t,
          a = s ? s.coordinates : null,
          h = [],
          l = e && e.pointToLayer,
          u = (e && e.coordsToLatLng) || Fi;
        if (!a && !s) return null;
        switch (s.type) {
          case 'Point':
            return ji(l, t, (i = u(a)), e);
          case 'MultiPoint':
            for (o = 0, r = a.length; o < r; o++) (i = u(a[o])), h.push(ji(l, t, i, e));
            return new Ei(h);
          case 'LineString':
          case 'MultiLineString':
            return (n = Ui(a, 'LineString' === s.type ? 0 : 1, u)), new Oi(n, e);
          case 'Polygon':
          case 'MultiPolygon':
            return (n = Ui(a, 'Polygon' === s.type ? 1 : 2, u)), new Ri(n, e);
          case 'GeometryCollection':
            for (o = 0, r = s.geometries.length; o < r; o++) {
              var c = Di({ geometry: s.geometries[o], type: 'Feature', properties: t.properties }, e);
              c && h.push(c);
            }
            return new Ei(h);
          default:
            throw new Error('Invalid GeoJSON object.');
        }
      }
      function ji(t, e, i, n) {
        return t ? t(e, i) : new Si(i, n && n.markersInheritOptions && n);
      }
      function Fi(t) {
        return new D(t[1], t[0], t[2]);
      }
      function Ui(t, e, i) {
        for (var n, o = [], r = 0, s = t.length; r < s; r++) (n = e ? Ui(t[r], e - 1, i) : (i || Fi)(t[r])), o.push(n);
        return o;
      }
      function Hi(t, e) {
        return (
          (e = 'number' == typeof e ? e : 6),
          void 0 !== t.alt ? [u(t.lng, e), u(t.lat, e), u(t.alt, e)] : [u(t.lng, e), u(t.lat, e)]
        );
      }
      function Wi(t, e, i, n) {
        for (var o = [], r = 0, s = t.length; r < s; r++) o.push(e ? Wi(t[r], e - 1, i, n) : Hi(t[r], n));
        return !e && i && o.push(o[0]), o;
      }
      function qi(t, e) {
        return t.feature ? i({}, t.feature, { geometry: e }) : Vi(e);
      }
      function Vi(t) {
        return 'Feature' === t.type || 'FeatureCollection' === t.type
          ? t
          : { type: 'Feature', properties: {}, geometry: t };
      }
      var Gi = {
        toGeoJSON: function(t) {
          return qi(this, { type: 'Point', coordinates: Hi(this.getLatLng(), t) });
        }
      };
      function Ji(t, e) {
        return new Ni(t, e);
      }
      Si.include(Gi),
        Ii.include(Gi),
        Bi.include(Gi),
        Oi.include({
          toGeoJSON: function(t) {
            var e = !_i(this._latlngs);
            return qi(this, {
              type: (e ? 'Multi' : '') + 'LineString',
              coordinates: Wi(this._latlngs, e ? 1 : 0, !1, t)
            });
          }
        }),
        Ri.include({
          toGeoJSON: function(t) {
            var e = !_i(this._latlngs),
              i = e && !_i(this._latlngs[0]),
              n = Wi(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
            return e || (n = [n]), qi(this, { type: (i ? 'Multi' : '') + 'Polygon', coordinates: n });
          }
        }),
        Mi.include({
          toMultiPoint: function(t) {
            var e = [];
            return (
              this.eachLayer(function(i) {
                e.push(i.toGeoJSON(t).geometry.coordinates);
              }),
              qi(this, { type: 'MultiPoint', coordinates: e })
            );
          },
          toGeoJSON: function(t) {
            var e = this.feature && this.feature.geometry && this.feature.geometry.type;
            if ('MultiPoint' === e) return this.toMultiPoint(t);
            var i = 'GeometryCollection' === e,
              n = [];
            return (
              this.eachLayer(function(e) {
                if (e.toGeoJSON) {
                  var o = e.toGeoJSON(t);
                  if (i) n.push(o.geometry);
                  else {
                    var r = Vi(o);
                    'FeatureCollection' === r.type ? n.push.apply(n, r.features) : n.push(r);
                  }
                }
              }),
              i ? qi(this, { geometries: n, type: 'GeometryCollection' }) : { type: 'FeatureCollection', features: n }
            );
          }
        });
      var Ki = Ji,
        Yi = zi.extend({
          options: {
            opacity: 1,
            alt: '',
            interactive: !1,
            crossOrigin: !1,
            errorOverlayUrl: '',
            zIndex: 1,
            className: ''
          },
          initialize: function(t, e, i) {
            (this._url = t), (this._bounds = N(e)), p(this, i);
          },
          onAdd: function() {
            this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()),
              this.options.interactive &&
                (de(this._image, 'leaflet-interactive'), this.addInteractiveTarget(this._image)),
              this.getPane().appendChild(this._image),
              this._reset();
          },
          onRemove: function() {
            ae(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
          },
          setOpacity: function(t) {
            return (this.options.opacity = t), this._image && this._updateOpacity(), this;
          },
          setStyle: function(t) {
            return t.opacity && this.setOpacity(t.opacity), this;
          },
          bringToFront: function() {
            return this._map && le(this._image), this;
          },
          bringToBack: function() {
            return this._map && ue(this._image), this;
          },
          setUrl: function(t) {
            return (this._url = t), this._image && (this._image.src = t), this;
          },
          setBounds: function(t) {
            return (this._bounds = N(t)), this._map && this._reset(), this;
          },
          getEvents: function() {
            var t = { zoom: this._reset, viewreset: this._reset };
            return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
          },
          setZIndex: function(t) {
            return (this.options.zIndex = t), this._updateZIndex(), this;
          },
          getBounds: function() {
            return this._bounds;
          },
          getElement: function() {
            return this._image;
          },
          _initImage: function() {
            var t = 'IMG' === this._url.tagName,
              e = (this._image = t ? this._url : se('img'));
            de(e, 'leaflet-image-layer'),
              this._zoomAnimated && de(e, 'leaflet-zoom-animated'),
              this.options.className && de(e, this.options.className),
              (e.onselectstart = l),
              (e.onmousemove = l),
              (e.onload = o(this.fire, this, 'load')),
              (e.onerror = o(this._overlayOnError, this, 'error')),
              (this.options.crossOrigin || '' === this.options.crossOrigin) &&
                (e.crossOrigin = !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
              this.options.zIndex && this._updateZIndex(),
              t ? (this._url = e.src) : ((e.src = this._url), (e.alt = this.options.alt));
          },
          _animateZoom: function(t) {
            var e = this._map.getZoomScale(t.zoom),
              i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
            ve(this._image, i, e);
          },
          _reset: function() {
            var t = this._image,
              e = new I(
                this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
                this._map.latLngToLayerPoint(this._bounds.getSouthEast())
              ),
              i = e.getSize();
            ye(t, e.min), (t.style.width = i.x + 'px'), (t.style.height = i.y + 'px');
          },
          _updateOpacity: function() {
            me(this._image, this.options.opacity);
          },
          _updateZIndex: function() {
            this._image &&
              void 0 !== this.options.zIndex &&
              null !== this.options.zIndex &&
              (this._image.style.zIndex = this.options.zIndex);
          },
          _overlayOnError: function() {
            this.fire('error');
            var t = this.options.errorOverlayUrl;
            t && this._url !== t && ((this._url = t), (this._image.src = t));
          }
        }),
        Xi = Yi.extend({
          options: { autoplay: !0, loop: !0, keepAspectRatio: !0 },
          _initImage: function() {
            var t = 'VIDEO' === this._url.tagName,
              e = (this._image = t ? this._url : se('video'));
            if (
              (de(e, 'leaflet-image-layer'),
              this._zoomAnimated && de(e, 'leaflet-zoom-animated'),
              this.options.className && de(e, this.options.className),
              (e.onselectstart = l),
              (e.onmousemove = l),
              (e.onloadeddata = o(this.fire, this, 'load')),
              t)
            ) {
              for (var i = e.getElementsByTagName('source'), n = [], r = 0; r < i.length; r++) n.push(i[r].src);
              this._url = i.length > 0 ? n : [e.src];
            } else {
              g(this._url) || (this._url = [this._url]),
                !this.options.keepAspectRatio && e.style.hasOwnProperty('objectFit') && (e.style.objectFit = 'fill'),
                (e.autoplay = !!this.options.autoplay),
                (e.loop = !!this.options.loop);
              for (var s = 0; s < this._url.length; s++) {
                var a = se('source');
                (a.src = this._url[s]), e.appendChild(a);
              }
            }
          }
        }),
        Qi = Yi.extend({
          _initImage: function() {
            var t = (this._image = this._url);
            de(t, 'leaflet-image-layer'),
              this._zoomAnimated && de(t, 'leaflet-zoom-animated'),
              this.options.className && de(t, this.options.className),
              (t.onselectstart = l),
              (t.onmousemove = l);
          }
        }),
        $i = zi.extend({
          options: { offset: [0, 7], className: '', pane: 'popupPane' },
          initialize: function(t, e) {
            p(this, t), (this._source = e);
          },
          onAdd: function(t) {
            (this._zoomAnimated = t._zoomAnimated),
              this._container || this._initLayout(),
              t._fadeAnimated && me(this._container, 0),
              clearTimeout(this._removeTimeout),
              this.getPane().appendChild(this._container),
              this.update(),
              t._fadeAnimated && me(this._container, 1),
              this.bringToFront();
          },
          onRemove: function(t) {
            t._fadeAnimated
              ? (me(this._container, 0), (this._removeTimeout = setTimeout(o(ae, void 0, this._container), 200)))
              : ae(this._container);
          },
          getLatLng: function() {
            return this._latlng;
          },
          setLatLng: function(t) {
            return (this._latlng = j(t)), this._map && (this._updatePosition(), this._adjustPan()), this;
          },
          getContent: function() {
            return this._content;
          },
          setContent: function(t) {
            return (this._content = t), this.update(), this;
          },
          getElement: function() {
            return this._container;
          },
          update: function() {
            this._map &&
              ((this._container.style.visibility = 'hidden'),
              this._updateContent(),
              this._updateLayout(),
              this._updatePosition(),
              (this._container.style.visibility = ''),
              this._adjustPan());
          },
          getEvents: function() {
            var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
            return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
          },
          isOpen: function() {
            return !!this._map && this._map.hasLayer(this);
          },
          bringToFront: function() {
            return this._map && le(this._container), this;
          },
          bringToBack: function() {
            return this._map && ue(this._container), this;
          },
          _prepareOpen: function(t, e, i) {
            if ((e instanceof zi || ((i = e), (e = t)), e instanceof Ei))
              for (var n in t._layers) {
                e = t._layers[n];
                break;
              }
            if (!i)
              if (e.getCenter) i = e.getCenter();
              else {
                if (!e.getLatLng) throw new Error('Unable to get source layer LatLng.');
                i = e.getLatLng();
              }
            return (this._source = e), this.update(), i;
          },
          _updateContent: function() {
            if (this._content) {
              var t = this._contentNode,
                e = 'function' == typeof this._content ? this._content(this._source || this) : this._content;
              if ('string' == typeof e) t.innerHTML = e;
              else {
                for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
                t.appendChild(e);
              }
              this.fire('contentupdate');
            }
          },
          _updatePosition: function() {
            if (this._map) {
              var t = this._map.latLngToLayerPoint(this._latlng),
                e = B(this.options.offset),
                i = this._getAnchor();
              this._zoomAnimated ? ye(this._container, t.add(i)) : (e = e.add(t).add(i));
              var n = (this._containerBottom = -e.y),
                o = (this._containerLeft = -Math.round(this._containerWidth / 2) + e.x);
              (this._container.style.bottom = n + 'px'), (this._container.style.left = o + 'px');
            }
          },
          _getAnchor: function() {
            return [0, 0];
          }
        }),
        tn = $i.extend({
          options: {
            maxWidth: 300,
            minWidth: 50,
            maxHeight: null,
            autoPan: !0,
            autoPanPaddingTopLeft: null,
            autoPanPaddingBottomRight: null,
            autoPanPadding: [5, 5],
            keepInView: !1,
            closeButton: !0,
            autoClose: !0,
            closeOnEscapeKey: !0,
            className: ''
          },
          openOn: function(t) {
            return t.openPopup(this), this;
          },
          onAdd: function(t) {
            $i.prototype.onAdd.call(this, t),
              t.fire('popupopen', { popup: this }),
              this._source &&
                (this._source.fire('popupopen', { popup: this }, !0),
                this._source instanceof Zi || this._source.on('preclick', Be));
          },
          onRemove: function(t) {
            $i.prototype.onRemove.call(this, t),
              t.fire('popupclose', { popup: this }),
              this._source &&
                (this._source.fire('popupclose', { popup: this }, !0),
                this._source instanceof Zi || this._source.off('preclick', Be));
          },
          getEvents: function() {
            var t = $i.prototype.getEvents.call(this);
            return (
              (void 0 !== this.options.closeOnClick
                ? this.options.closeOnClick
                : this._map.options.closePopupOnClick) && (t.preclick = this._close),
              this.options.keepInView && (t.moveend = this._adjustPan),
              t
            );
          },
          _close: function() {
            this._map && this._map.closePopup(this);
          },
          _initLayout: function() {
            var t = 'leaflet-popup',
              e = (this._container = se('div', t + ' ' + (this.options.className || '') + ' leaflet-zoom-animated')),
              i = (this._wrapper = se('div', t + '-content-wrapper', e));
            if (
              ((this._contentNode = se('div', t + '-content', i)),
              Oe(i),
              Ie(this._contentNode),
              Ae(i, 'contextmenu', Be),
              (this._tipContainer = se('div', t + '-tip-container', e)),
              (this._tip = se('div', t + '-tip', this._tipContainer)),
              this.options.closeButton)
            ) {
              var n = (this._closeButton = se('a', t + '-close-button', e));
              (n.href = '#close'), (n.innerHTML = '&#215;'), Ae(n, 'click', this._onCloseButtonClick, this);
            }
          },
          _updateLayout: function() {
            var t = this._contentNode,
              e = t.style;
            (e.width = ''), (e.whiteSpace = 'nowrap');
            var i = t.offsetWidth;
            (i = Math.min(i, this.options.maxWidth)),
              (i = Math.max(i, this.options.minWidth)),
              (e.width = i + 1 + 'px'),
              (e.whiteSpace = ''),
              (e.height = '');
            var n = t.offsetHeight,
              o = this.options.maxHeight;
            o && n > o ? ((e.height = o + 'px'), de(t, 'leaflet-popup-scrolled')) : pe(t, 'leaflet-popup-scrolled'),
              (this._containerWidth = this._container.offsetWidth);
          },
          _animateZoom: function(t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
              i = this._getAnchor();
            ye(this._container, e.add(i));
          },
          _adjustPan: function() {
            if (this.options.autoPan) {
              this._map._panAnim && this._map._panAnim.stop();
              var t = this._map,
                e = parseInt(re(this._container, 'marginBottom'), 10) || 0,
                i = this._container.offsetHeight + e,
                n = this._containerWidth,
                o = new S(this._containerLeft, -i - this._containerBottom);
              o._add(xe(this._container));
              var r = t.layerPointToContainerPoint(o),
                s = B(this.options.autoPanPadding),
                a = B(this.options.autoPanPaddingTopLeft || s),
                h = B(this.options.autoPanPaddingBottomRight || s),
                l = t.getSize(),
                u = 0,
                c = 0;
              r.x + n + h.x > l.x && (u = r.x + n - l.x + h.x),
                r.x - u - a.x < 0 && (u = r.x - a.x),
                r.y + i + h.y > l.y && (c = r.y + i - l.y + h.y),
                r.y - c - a.y < 0 && (c = r.y - a.y),
                (u || c) && t.fire('autopanstart').panBy([u, c]);
            }
          },
          _onCloseButtonClick: function(t) {
            this._close(), Ne(t);
          },
          _getAnchor: function() {
            return B(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
          }
        });
      Ke.mergeOptions({ closePopupOnClick: !0 }),
        Ke.include({
          openPopup: function(t, e, i) {
            return (
              t instanceof tn || (t = new tn(i).setContent(t)),
              e && t.setLatLng(e),
              this.hasLayer(t)
                ? this
                : (this._popup && this._popup.options.autoClose && this.closePopup(),
                  (this._popup = t),
                  this.addLayer(t))
            );
          },
          closePopup: function(t) {
            return (
              (t && t !== this._popup) || ((t = this._popup), (this._popup = null)), t && this.removeLayer(t), this
            );
          }
        }),
        zi.include({
          bindPopup: function(t, e) {
            return (
              t instanceof tn
                ? (p(t, e), (this._popup = t), (t._source = this))
                : ((this._popup && !e) || (this._popup = new tn(e, this)), this._popup.setContent(t)),
              this._popupHandlersAdded ||
                (this.on({
                  click: this._openPopup,
                  keypress: this._onKeyPress,
                  remove: this.closePopup,
                  move: this._movePopup
                }),
                (this._popupHandlersAdded = !0)),
              this
            );
          },
          unbindPopup: function() {
            return (
              this._popup &&
                (this.off({
                  click: this._openPopup,
                  keypress: this._onKeyPress,
                  remove: this.closePopup,
                  move: this._movePopup
                }),
                (this._popupHandlersAdded = !1),
                (this._popup = null)),
              this
            );
          },
          openPopup: function(t, e) {
            return (
              this._popup &&
                this._map &&
                ((e = this._popup._prepareOpen(this, t, e)), this._map.openPopup(this._popup, e)),
              this
            );
          },
          closePopup: function() {
            return this._popup && this._popup._close(), this;
          },
          togglePopup: function(t) {
            return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this;
          },
          isPopupOpen: function() {
            return !!this._popup && this._popup.isOpen();
          },
          setPopupContent: function(t) {
            return this._popup && this._popup.setContent(t), this;
          },
          getPopup: function() {
            return this._popup;
          },
          _openPopup: function(t) {
            var e = t.layer || t.target;
            this._popup &&
              this._map &&
              (Ne(t),
              e instanceof Zi
                ? this.openPopup(t.layer || t.target, t.latlng)
                : this._map.hasLayer(this._popup) && this._popup._source === e
                ? this.closePopup()
                : this.openPopup(e, t.latlng));
          },
          _movePopup: function(t) {
            this._popup.setLatLng(t.latlng);
          },
          _onKeyPress: function(t) {
            13 === t.originalEvent.keyCode && this._openPopup(t);
          }
        });
      var en = $i.extend({
        options: {
          pane: 'tooltipPane',
          offset: [0, 0],
          direction: 'auto',
          permanent: !1,
          sticky: !1,
          interactive: !1,
          opacity: 0.9
        },
        onAdd: function(t) {
          $i.prototype.onAdd.call(this, t),
            this.setOpacity(this.options.opacity),
            t.fire('tooltipopen', { tooltip: this }),
            this._source && this._source.fire('tooltipopen', { tooltip: this }, !0);
        },
        onRemove: function(t) {
          $i.prototype.onRemove.call(this, t),
            t.fire('tooltipclose', { tooltip: this }),
            this._source && this._source.fire('tooltipclose', { tooltip: this }, !0);
        },
        getEvents: function() {
          var t = $i.prototype.getEvents.call(this);
          return wt && !this.options.permanent && (t.preclick = this._close), t;
        },
        _close: function() {
          this._map && this._map.closeTooltip(this);
        },
        _initLayout: function() {
          var t =
            'leaflet-tooltip ' +
            (this.options.className || '') +
            ' leaflet-zoom-' +
            (this._zoomAnimated ? 'animated' : 'hide');
          this._contentNode = this._container = se('div', t);
        },
        _updateLayout: function() {},
        _adjustPan: function() {},
        _setPosition: function(t) {
          var e = this._map,
            i = this._container,
            n = e.latLngToContainerPoint(e.getCenter()),
            o = e.layerPointToContainerPoint(t),
            r = this.options.direction,
            s = i.offsetWidth,
            a = i.offsetHeight,
            h = B(this.options.offset),
            l = this._getAnchor();
          'top' === r
            ? (t = t.add(B(-s / 2 + h.x, -a + h.y + l.y, !0)))
            : 'bottom' === r
            ? (t = t.subtract(B(s / 2 - h.x, -h.y, !0)))
            : 'center' === r
            ? (t = t.subtract(B(s / 2 + h.x, a / 2 - l.y + h.y, !0)))
            : 'right' === r || ('auto' === r && o.x < n.x)
            ? ((r = 'right'), (t = t.add(B(h.x + l.x, l.y - a / 2 + h.y, !0))))
            : ((r = 'left'), (t = t.subtract(B(s + l.x - h.x, a / 2 - l.y - h.y, !0)))),
            pe(i, 'leaflet-tooltip-right'),
            pe(i, 'leaflet-tooltip-left'),
            pe(i, 'leaflet-tooltip-top'),
            pe(i, 'leaflet-tooltip-bottom'),
            de(i, 'leaflet-tooltip-' + r),
            ye(i, t);
        },
        _updatePosition: function() {
          var t = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(t);
        },
        setOpacity: function(t) {
          (this.options.opacity = t), this._container && me(this._container, t);
        },
        _animateZoom: function(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
          this._setPosition(e);
        },
        _getAnchor: function() {
          return B(
            this._source && this._source._getTooltipAnchor && !this.options.sticky
              ? this._source._getTooltipAnchor()
              : [0, 0]
          );
        }
      });
      Ke.include({
        openTooltip: function(t, e, i) {
          return (
            t instanceof en || (t = new en(i).setContent(t)),
            e && t.setLatLng(e),
            this.hasLayer(t) ? this : this.addLayer(t)
          );
        },
        closeTooltip: function(t) {
          return t && this.removeLayer(t), this;
        }
      }),
        zi.include({
          bindTooltip: function(t, e) {
            return (
              t instanceof en
                ? (p(t, e), (this._tooltip = t), (t._source = this))
                : ((this._tooltip && !e) || (this._tooltip = new en(e, this)), this._tooltip.setContent(t)),
              this._initTooltipInteractions(),
              this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(),
              this
            );
          },
          unbindTooltip: function() {
            return (
              this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), (this._tooltip = null)), this
            );
          },
          _initTooltipInteractions: function(t) {
            if (t || !this._tooltipHandlersAdded) {
              var e = t ? 'off' : 'on',
                i = { remove: this.closeTooltip, move: this._moveTooltip };
              this._tooltip.options.permanent
                ? (i.add = this._openTooltip)
                : ((i.mouseover = this._openTooltip),
                  (i.mouseout = this.closeTooltip),
                  this._tooltip.options.sticky && (i.mousemove = this._moveTooltip),
                  wt && (i.click = this._openTooltip)),
                this[e](i),
                (this._tooltipHandlersAdded = !t);
            }
          },
          openTooltip: function(t, e) {
            return (
              this._tooltip &&
                this._map &&
                ((e = this._tooltip._prepareOpen(this, t, e)),
                this._map.openTooltip(this._tooltip, e),
                this._tooltip.options.interactive &&
                  this._tooltip._container &&
                  (de(this._tooltip._container, 'leaflet-clickable'),
                  this.addInteractiveTarget(this._tooltip._container))),
              this
            );
          },
          closeTooltip: function() {
            return (
              this._tooltip &&
                (this._tooltip._close(),
                this._tooltip.options.interactive &&
                  this._tooltip._container &&
                  (pe(this._tooltip._container, 'leaflet-clickable'),
                  this.removeInteractiveTarget(this._tooltip._container))),
              this
            );
          },
          toggleTooltip: function(t) {
            return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this;
          },
          isTooltipOpen: function() {
            return this._tooltip.isOpen();
          },
          setTooltipContent: function(t) {
            return this._tooltip && this._tooltip.setContent(t), this;
          },
          getTooltip: function() {
            return this._tooltip;
          },
          _openTooltip: function(t) {
            var e = t.layer || t.target;
            this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0);
          },
          _moveTooltip: function(t) {
            var e,
              i,
              n = t.latlng;
            this._tooltip.options.sticky &&
              t.originalEvent &&
              ((e = this._map.mouseEventToContainerPoint(t.originalEvent)),
              (i = this._map.containerPointToLayerPoint(e)),
              (n = this._map.layerPointToLatLng(i))),
              this._tooltip.setLatLng(n);
          }
        });
      var nn = Ai.extend({
        options: { iconSize: [12, 12], html: !1, bgPos: null, className: 'leaflet-div-icon' },
        createIcon: function(t) {
          var e = t && 'DIV' === t.tagName ? t : document.createElement('div'),
            i = this.options;
          if (
            (i.html instanceof Element ? (he(e), e.appendChild(i.html)) : (e.innerHTML = !1 !== i.html ? i.html : ''),
            i.bgPos)
          ) {
            var n = B(i.bgPos);
            e.style.backgroundPosition = -n.x + 'px ' + -n.y + 'px';
          }
          return this._setIconStyles(e, 'icon'), e;
        },
        createShadow: function() {
          return null;
        }
      });
      Ai.Default = ki;
      var on = zi.extend({
          options: {
            tileSize: 256,
            opacity: 1,
            updateWhenIdle: gt,
            updateWhenZooming: !0,
            updateInterval: 200,
            zIndex: 1,
            bounds: null,
            minZoom: 0,
            maxZoom: void 0,
            maxNativeZoom: void 0,
            minNativeZoom: void 0,
            noWrap: !1,
            pane: 'tilePane',
            className: '',
            keepBuffer: 2
          },
          initialize: function(t) {
            p(this, t);
          },
          onAdd: function() {
            this._initContainer(), (this._levels = {}), (this._tiles = {}), this._resetView(), this._update();
          },
          beforeAdd: function(t) {
            t._addZoomLimit(this);
          },
          onRemove: function(t) {
            this._removeAllTiles(),
              ae(this._container),
              t._removeZoomLimit(this),
              (this._container = null),
              (this._tileZoom = void 0);
          },
          bringToFront: function() {
            return this._map && (le(this._container), this._setAutoZIndex(Math.max)), this;
          },
          bringToBack: function() {
            return this._map && (ue(this._container), this._setAutoZIndex(Math.min)), this;
          },
          getContainer: function() {
            return this._container;
          },
          setOpacity: function(t) {
            return (this.options.opacity = t), this._updateOpacity(), this;
          },
          setZIndex: function(t) {
            return (this.options.zIndex = t), this._updateZIndex(), this;
          },
          isLoading: function() {
            return this._loading;
          },
          redraw: function() {
            return this._map && (this._removeAllTiles(), this._update()), this;
          },
          getEvents: function() {
            var t = {
              viewprereset: this._invalidateAll,
              viewreset: this._resetView,
              zoom: this._resetView,
              moveend: this._onMoveEnd
            };
            return (
              this.options.updateWhenIdle ||
                (this._onMove || (this._onMove = a(this._onMoveEnd, this.options.updateInterval, this)),
                (t.move = this._onMove)),
              this._zoomAnimated && (t.zoomanim = this._animateZoom),
              t
            );
          },
          createTile: function() {
            return document.createElement('div');
          },
          getTileSize: function() {
            var t = this.options.tileSize;
            return t instanceof S ? t : new S(t, t);
          },
          _updateZIndex: function() {
            this._container &&
              void 0 !== this.options.zIndex &&
              null !== this.options.zIndex &&
              (this._container.style.zIndex = this.options.zIndex);
          },
          _setAutoZIndex: function(t) {
            for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, r = i.length; o < r; o++)
              (e = i[o].style.zIndex), i[o] !== this._container && e && (n = t(n, +e));
            isFinite(n) && ((this.options.zIndex = n + t(-1, 1)), this._updateZIndex());
          },
          _updateOpacity: function() {
            if (this._map && !$) {
              me(this._container, this.options.opacity);
              var t = +new Date(),
                e = !1,
                i = !1;
              for (var n in this._tiles) {
                var o = this._tiles[n];
                if (o.current && o.loaded) {
                  var r = Math.min(1, (t - o.loaded) / 200);
                  me(o.el, r), r < 1 ? (e = !0) : (o.active ? (i = !0) : this._onOpaqueTile(o), (o.active = !0));
                }
              }
              i && !this._noPrune && this._pruneTiles(),
                e && (M(this._fadeFrame), (this._fadeFrame = z(this._updateOpacity, this)));
            }
          },
          _onOpaqueTile: l,
          _initContainer: function() {
            this._container ||
              ((this._container = se('div', 'leaflet-layer ' + (this.options.className || ''))),
              this._updateZIndex(),
              this.options.opacity < 1 && this._updateOpacity(),
              this.getPane().appendChild(this._container));
          },
          _updateLevels: function() {
            var t = this._tileZoom,
              e = this.options.maxZoom;
            if (void 0 !== t) {
              for (var i in this._levels)
                this._levels[i].el.children.length || i === t
                  ? ((this._levels[i].el.style.zIndex = e - Math.abs(t - i)), this._onUpdateLevel(i))
                  : (ae(this._levels[i].el),
                    this._removeTilesAtZoom(i),
                    this._onRemoveLevel(i),
                    delete this._levels[i]);
              var n = this._levels[t],
                o = this._map;
              return (
                n ||
                  (((n = this._levels[t] = {}).el = se(
                    'div',
                    'leaflet-tile-container leaflet-zoom-animated',
                    this._container
                  )),
                  (n.el.style.zIndex = e),
                  (n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round()),
                  (n.zoom = t),
                  this._setZoomTransform(n, o.getCenter(), o.getZoom()),
                  n.el.offsetWidth,
                  this._onCreateLevel(n)),
                (this._level = n),
                n
              );
            }
          },
          _onUpdateLevel: l,
          _onRemoveLevel: l,
          _onCreateLevel: l,
          _pruneTiles: function() {
            if (this._map) {
              var t,
                e,
                i = this._map.getZoom();
              if (i > this.options.maxZoom || i < this.options.minZoom) this._removeAllTiles();
              else {
                for (t in this._tiles) (e = this._tiles[t]).retain = e.current;
                for (t in this._tiles)
                  if ((e = this._tiles[t]).current && !e.active) {
                    var n = e.coords;
                    this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2);
                  }
                for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
              }
            }
          },
          _removeTilesAtZoom: function(t) {
            for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e);
          },
          _removeAllTiles: function() {
            for (var t in this._tiles) this._removeTile(t);
          },
          _invalidateAll: function() {
            for (var t in this._levels) ae(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
            this._removeAllTiles(), (this._tileZoom = void 0);
          },
          _retainParent: function(t, e, i, n) {
            var o = Math.floor(t / 2),
              r = Math.floor(e / 2),
              s = i - 1,
              a = new S(+o, +r);
            a.z = +s;
            var h = this._tileCoordsToKey(a),
              l = this._tiles[h];
            return l && l.active
              ? ((l.retain = !0), !0)
              : (l && l.loaded && (l.retain = !0), s > n && this._retainParent(o, r, s, n));
          },
          _retainChildren: function(t, e, i, n) {
            for (var o = 2 * t; o < 2 * t + 2; o++)
              for (var r = 2 * e; r < 2 * e + 2; r++) {
                var s = new S(o, r);
                s.z = i + 1;
                var a = this._tileCoordsToKey(s),
                  h = this._tiles[a];
                h && h.active
                  ? (h.retain = !0)
                  : (h && h.loaded && (h.retain = !0), i + 1 < n && this._retainChildren(o, r, i + 1, n));
              }
          },
          _resetView: function(t) {
            var e = t && (t.pinch || t.flyTo);
            this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
          },
          _animateZoom: function(t) {
            this._setView(t.center, t.zoom, !0, t.noUpdate);
          },
          _clampZoom: function(t) {
            var e = this.options;
            return void 0 !== e.minNativeZoom && t < e.minNativeZoom
              ? e.minNativeZoom
              : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t
              ? e.maxNativeZoom
              : t;
          },
          _setView: function(t, e, i, n) {
            var o = this._clampZoom(Math.round(e));
            ((void 0 !== this.options.maxZoom && o > this.options.maxZoom) ||
              (void 0 !== this.options.minZoom && o < this.options.minZoom)) &&
              (o = void 0);
            var r = this.options.updateWhenZooming && o !== this._tileZoom;
            (n && !r) ||
              ((this._tileZoom = o),
              this._abortLoading && this._abortLoading(),
              this._updateLevels(),
              this._resetGrid(),
              void 0 !== o && this._update(t),
              i || this._pruneTiles(),
              (this._noPrune = !!i)),
              this._setZoomTransforms(t, e);
          },
          _setZoomTransforms: function(t, e) {
            for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e);
          },
          _setZoomTransform: function(t, e, i) {
            var n = this._map.getZoomScale(i, t.zoom),
              o = t.origin
                .multiplyBy(n)
                .subtract(this._map._getNewPixelOrigin(e, i))
                .round();
            mt ? ve(t.el, o, n) : ye(t.el, o);
          },
          _resetGrid: function() {
            var t = this._map,
              e = t.options.crs,
              i = (this._tileSize = this.getTileSize()),
              n = this._tileZoom,
              o = this._map.getPixelWorldBounds(this._tileZoom);
            o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
              (this._wrapX = e.wrapLng &&
                !this.options.noWrap && [
                  Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x),
                  Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)
                ]),
              (this._wrapY = e.wrapLat &&
                !this.options.noWrap && [
                  Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x),
                  Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)
                ]);
          },
          _onMoveEnd: function() {
            this._map && !this._map._animatingZoom && this._update();
          },
          _getTiledPixelBounds: function(t) {
            var e = this._map,
              i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
              n = e.getZoomScale(i, this._tileZoom),
              o = e.project(t, this._tileZoom).floor(),
              r = e.getSize().divideBy(2 * n);
            return new I(o.subtract(r), o.add(r));
          },
          _update: function(t) {
            var e = this._map;
            if (e) {
              var i = this._clampZoom(e.getZoom());
              if ((void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom)) {
                var n = this._getTiledPixelBounds(t),
                  o = this._pxBoundsToTileRange(n),
                  r = o.getCenter(),
                  s = [],
                  a = this.options.keepBuffer,
                  h = new I(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
                if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
                  throw new Error('Attempted to load an infinite number of tiles');
                for (var l in this._tiles) {
                  var u = this._tiles[l].coords;
                  (u.z === this._tileZoom && h.contains(new S(u.x, u.y))) || (this._tiles[l].current = !1);
                }
                if (Math.abs(i - this._tileZoom) > 1) this._setView(t, i);
                else {
                  for (var c = o.min.y; c <= o.max.y; c++)
                    for (var d = o.min.x; d <= o.max.x; d++) {
                      var p = new S(d, c);
                      if (((p.z = this._tileZoom), this._isValidTile(p))) {
                        var f = this._tiles[this._tileCoordsToKey(p)];
                        f ? (f.current = !0) : s.push(p);
                      }
                    }
                  if (
                    (s.sort(function(t, e) {
                      return t.distanceTo(r) - e.distanceTo(r);
                    }),
                    0 !== s.length)
                  ) {
                    this._loading || ((this._loading = !0), this.fire('loading'));
                    var _ = document.createDocumentFragment();
                    for (d = 0; d < s.length; d++) this._addTile(s[d], _);
                    this._level.el.appendChild(_);
                  }
                }
              }
            }
          },
          _isValidTile: function(t) {
            var e = this._map.options.crs;
            if (!e.infinite) {
              var i = this._globalTileRange;
              if ((!e.wrapLng && (t.x < i.min.x || t.x > i.max.x)) || (!e.wrapLat && (t.y < i.min.y || t.y > i.max.y)))
                return !1;
            }
            if (!this.options.bounds) return !0;
            var n = this._tileCoordsToBounds(t);
            return N(this.options.bounds).overlaps(n);
          },
          _keyToBounds: function(t) {
            return this._tileCoordsToBounds(this._keyToTileCoords(t));
          },
          _tileCoordsToNwSe: function(t) {
            var e = this._map,
              i = this.getTileSize(),
              n = t.scaleBy(i),
              o = n.add(i);
            return [e.unproject(n, t.z), e.unproject(o, t.z)];
          },
          _tileCoordsToBounds: function(t) {
            var e = this._tileCoordsToNwSe(t),
              i = new R(e[0], e[1]);
            return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
          },
          _tileCoordsToKey: function(t) {
            return t.x + ':' + t.y + ':' + t.z;
          },
          _keyToTileCoords: function(t) {
            var e = t.split(':'),
              i = new S(+e[0], +e[1]);
            return (i.z = +e[2]), i;
          },
          _removeTile: function(t) {
            var e = this._tiles[t];
            e &&
              (ae(e.el),
              delete this._tiles[t],
              this.fire('tileunload', { tile: e.el, coords: this._keyToTileCoords(t) }));
          },
          _initTile: function(t) {
            de(t, 'leaflet-tile');
            var e = this.getTileSize();
            (t.style.width = e.x + 'px'),
              (t.style.height = e.y + 'px'),
              (t.onselectstart = l),
              (t.onmousemove = l),
              $ && this.options.opacity < 1 && me(t, this.options.opacity),
              it && !nt && (t.style.WebkitBackfaceVisibility = 'hidden');
          },
          _addTile: function(t, e) {
            var i = this._getTilePos(t),
              n = this._tileCoordsToKey(t),
              r = this.createTile(this._wrapCoords(t), o(this._tileReady, this, t));
            this._initTile(r),
              this.createTile.length < 2 && z(o(this._tileReady, this, t, null, r)),
              ye(r, i),
              (this._tiles[n] = { el: r, coords: t, current: !0 }),
              e.appendChild(r),
              this.fire('tileloadstart', { tile: r, coords: t });
          },
          _tileReady: function(t, e, i) {
            e && this.fire('tileerror', { error: e, tile: i, coords: t });
            var n = this._tileCoordsToKey(t);
            (i = this._tiles[n]) &&
              ((i.loaded = +new Date()),
              this._map._fadeAnimated
                ? (me(i.el, 0), M(this._fadeFrame), (this._fadeFrame = z(this._updateOpacity, this)))
                : ((i.active = !0), this._pruneTiles()),
              e || (de(i.el, 'leaflet-tile-loaded'), this.fire('tileload', { tile: i.el, coords: t })),
              this._noTilesToLoad() &&
                ((this._loading = !1),
                this.fire('load'),
                $ || !this._map._fadeAnimated
                  ? z(this._pruneTiles, this)
                  : setTimeout(o(this._pruneTiles, this), 250)));
          },
          _getTilePos: function(t) {
            return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
          },
          _wrapCoords: function(t) {
            var e = new S(this._wrapX ? h(t.x, this._wrapX) : t.x, this._wrapY ? h(t.y, this._wrapY) : t.y);
            return (e.z = t.z), e;
          },
          _pxBoundsToTileRange: function(t) {
            var e = this.getTileSize();
            return new I(
              t.min.unscaleBy(e).floor(),
              t.max
                .unscaleBy(e)
                .ceil()
                .subtract([1, 1])
            );
          },
          _noTilesToLoad: function() {
            for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
            return !0;
          }
        }),
        rn = on.extend({
          options: {
            minZoom: 0,
            maxZoom: 18,
            subdomains: 'abc',
            errorTileUrl: '',
            zoomOffset: 0,
            tms: !1,
            zoomReverse: !1,
            detectRetina: !1,
            crossOrigin: !1
          },
          initialize: function(t, e) {
            (this._url = t),
              (e = p(this, e)).detectRetina &&
                Tt &&
                e.maxZoom > 0 &&
                ((e.tileSize = Math.floor(e.tileSize / 2)),
                e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--),
                (e.minZoom = Math.max(0, e.minZoom))),
              'string' == typeof e.subdomains && (e.subdomains = e.subdomains.split('')),
              it || this.on('tileunload', this._onTileRemove);
          },
          setUrl: function(t, e) {
            return this._url === t && void 0 === e && (e = !0), (this._url = t), e || this.redraw(), this;
          },
          createTile: function(t, e) {
            var i = document.createElement('img');
            return (
              Ae(i, 'load', o(this._tileOnLoad, this, e, i)),
              Ae(i, 'error', o(this._tileOnError, this, e, i)),
              (this.options.crossOrigin || '' === this.options.crossOrigin) &&
                (i.crossOrigin = !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
              (i.alt = ''),
              i.setAttribute('role', 'presentation'),
              (i.src = this.getTileUrl(t)),
              i
            );
          },
          getTileUrl: function(t) {
            var e = { r: Tt ? '@2x' : '', s: this._getSubdomain(t), x: t.x, y: t.y, z: this._getZoomForUrl() };
            if (this._map && !this._map.options.crs.infinite) {
              var n = this._globalTileRange.max.y - t.y;
              this.options.tms && (e.y = n), (e['-y'] = n);
            }
            return m(this._url, i(e, this.options));
          },
          _tileOnLoad: function(t, e) {
            $ ? setTimeout(o(t, this, null, e), 0) : t(null, e);
          },
          _tileOnError: function(t, e, i) {
            var n = this.options.errorTileUrl;
            n && e.getAttribute('src') !== n && (e.src = n), t(i, e);
          },
          _onTileRemove: function(t) {
            t.tile.onload = null;
          },
          _getZoomForUrl: function() {
            var t = this._tileZoom,
              e = this.options.maxZoom;
            return this.options.zoomReverse && (t = e - t), t + this.options.zoomOffset;
          },
          _getSubdomain: function(t) {
            var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
            return this.options.subdomains[e];
          },
          _abortLoading: function() {
            var t, e;
            for (t in this._tiles)
              this._tiles[t].coords.z !== this._tileZoom &&
                (((e = this._tiles[t].el).onload = l),
                (e.onerror = l),
                e.complete || ((e.src = y), ae(e), delete this._tiles[t]));
          },
          _removeTile: function(t) {
            var e = this._tiles[t];
            if (e) return rt || e.el.setAttribute('src', y), on.prototype._removeTile.call(this, t);
          },
          _tileReady: function(t, e, i) {
            if (this._map && (!i || i.getAttribute('src') !== y)) return on.prototype._tileReady.call(this, t, e, i);
          }
        });
      function sn(t, e) {
        return new rn(t, e);
      }
      var an = rn.extend({
        defaultWmsParams: {
          service: 'WMS',
          request: 'GetMap',
          layers: '',
          styles: '',
          format: 'image/jpeg',
          transparent: !1,
          version: '1.1.1'
        },
        options: { crs: null, uppercase: !1 },
        initialize: function(t, e) {
          this._url = t;
          var n = i({}, this.defaultWmsParams);
          for (var o in e) o in this.options || (n[o] = e[o]);
          var r = (e = p(this, e)).detectRetina && Tt ? 2 : 1,
            s = this.getTileSize();
          (n.width = s.x * r), (n.height = s.y * r), (this.wmsParams = n);
        },
        onAdd: function(t) {
          (this._crs = this.options.crs || t.options.crs), (this._wmsVersion = parseFloat(this.wmsParams.version));
          var e = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
          (this.wmsParams[e] = this._crs.code), rn.prototype.onAdd.call(this, t);
        },
        getTileUrl: function(t) {
          var e = this._tileCoordsToNwSe(t),
            i = this._crs,
            n = O(i.project(e[0]), i.project(e[1])),
            o = n.min,
            r = n.max,
            s = (this._wmsVersion >= 1.3 && this._crs === Pi ? [o.y, o.x, r.y, r.x] : [o.x, o.y, r.x, r.y]).join(','),
            a = rn.prototype.getTileUrl.call(this, t);
          return a + f(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? '&BBOX=' : '&bbox=') + s;
        },
        setParams: function(t, e) {
          return i(this.wmsParams, t), e || this.redraw(), this;
        }
      });
      (rn.WMS = an),
        (sn.wms = function(t, e) {
          return new an(t, e);
        });
      var hn = zi.extend({
          options: { padding: 0.1, tolerance: 0 },
          initialize: function(t) {
            p(this, t), s(this), (this._layers = this._layers || {});
          },
          onAdd: function() {
            this._container ||
              (this._initContainer(), this._zoomAnimated && de(this._container, 'leaflet-zoom-animated')),
              this.getPane().appendChild(this._container),
              this._update(),
              this.on('update', this._updatePaths, this);
          },
          onRemove: function() {
            this.off('update', this._updatePaths, this), this._destroyContainer();
          },
          getEvents: function() {
            var t = { viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd };
            return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
          },
          _onAnimZoom: function(t) {
            this._updateTransform(t.center, t.zoom);
          },
          _onZoom: function() {
            this._updateTransform(this._map.getCenter(), this._map.getZoom());
          },
          _updateTransform: function(t, e) {
            var i = this._map.getZoomScale(e, this._zoom),
              n = xe(this._container),
              o = this._map.getSize().multiplyBy(0.5 + this.options.padding),
              r = this._map.project(this._center, e),
              s = this._map.project(t, e).subtract(r),
              a = o
                .multiplyBy(-i)
                .add(n)
                .add(o)
                .subtract(s);
            mt ? ve(this._container, a, i) : ye(this._container, a);
          },
          _reset: function() {
            for (var t in (this._update(), this._updateTransform(this._center, this._zoom), this._layers))
              this._layers[t]._reset();
          },
          _onZoomEnd: function() {
            for (var t in this._layers) this._layers[t]._project();
          },
          _updatePaths: function() {
            for (var t in this._layers) this._layers[t]._update();
          },
          _update: function() {
            var t = this.options.padding,
              e = this._map.getSize(),
              i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
            (this._bounds = new I(i, i.add(e.multiplyBy(1 + 2 * t)).round())),
              (this._center = this._map.getCenter()),
              (this._zoom = this._map.getZoom());
          }
        }),
        ln = hn.extend({
          getEvents: function() {
            var t = hn.prototype.getEvents.call(this);
            return (t.viewprereset = this._onViewPreReset), t;
          },
          _onViewPreReset: function() {
            this._postponeUpdatePaths = !0;
          },
          onAdd: function() {
            hn.prototype.onAdd.call(this), this._draw();
          },
          _initContainer: function() {
            var t = (this._container = document.createElement('canvas'));
            Ae(t, 'mousemove', this._onMouseMove, this),
              Ae(t, 'click dblclick mousedown mouseup contextmenu', this._onClick, this),
              Ae(t, 'mouseout', this._handleMouseOut, this),
              (this._ctx = t.getContext('2d'));
          },
          _destroyContainer: function() {
            M(this._redrawRequest), delete this._ctx, ae(this._container), Ce(this._container), delete this._container;
          },
          _updatePaths: function() {
            if (!this._postponeUpdatePaths) {
              for (var t in ((this._redrawBounds = null), this._layers)) this._layers[t]._update();
              this._redraw();
            }
          },
          _update: function() {
            if (!this._map._animatingZoom || !this._bounds) {
              hn.prototype._update.call(this);
              var t = this._bounds,
                e = this._container,
                i = t.getSize(),
                n = Tt ? 2 : 1;
              ye(e, t.min),
                (e.width = n * i.x),
                (e.height = n * i.y),
                (e.style.width = i.x + 'px'),
                (e.style.height = i.y + 'px'),
                Tt && this._ctx.scale(2, 2),
                this._ctx.translate(-t.min.x, -t.min.y),
                this.fire('update');
            }
          },
          _reset: function() {
            hn.prototype._reset.call(this),
              this._postponeUpdatePaths && ((this._postponeUpdatePaths = !1), this._updatePaths());
          },
          _initPath: function(t) {
            this._updateDashArray(t), (this._layers[s(t)] = t);
            var e = (t._order = { layer: t, prev: this._drawLast, next: null });
            this._drawLast && (this._drawLast.next = e),
              (this._drawLast = e),
              (this._drawFirst = this._drawFirst || this._drawLast);
          },
          _addPath: function(t) {
            this._requestRedraw(t);
          },
          _removePath: function(t) {
            var e = t._order,
              i = e.next,
              n = e.prev;
            i ? (i.prev = n) : (this._drawLast = n),
              n ? (n.next = i) : (this._drawFirst = i),
              delete t._order,
              delete this._layers[s(t)],
              this._requestRedraw(t);
          },
          _updatePath: function(t) {
            this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
          },
          _updateStyle: function(t) {
            this._updateDashArray(t), this._requestRedraw(t);
          },
          _updateDashArray: function(t) {
            if ('string' == typeof t.options.dashArray) {
              var e,
                i,
                n = t.options.dashArray.split(/[, ]+/),
                o = [];
              for (i = 0; i < n.length; i++) {
                if (((e = Number(n[i])), isNaN(e))) return;
                o.push(e);
              }
              t.options._dashArray = o;
            } else t.options._dashArray = t.options.dashArray;
          },
          _requestRedraw: function(t) {
            this._map &&
              (this._extendRedrawBounds(t), (this._redrawRequest = this._redrawRequest || z(this._redraw, this)));
          },
          _extendRedrawBounds: function(t) {
            if (t._pxBounds) {
              var e = (t.options.weight || 0) + 1;
              (this._redrawBounds = this._redrawBounds || new I()),
                this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
                this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
            }
          },
          _redraw: function() {
            (this._redrawRequest = null),
              this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
              this._clear(),
              this._draw(),
              (this._redrawBounds = null);
          },
          _clear: function() {
            var t = this._redrawBounds;
            if (t) {
              var e = t.getSize();
              this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
            } else this._ctx.clearRect(0, 0, this._container.width, this._container.height);
          },
          _draw: function() {
            var t,
              e = this._redrawBounds;
            if ((this._ctx.save(), e)) {
              var i = e.getSize();
              this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip();
            }
            this._drawing = !0;
            for (var n = this._drawFirst; n; n = n.next)
              (t = n.layer), (!e || (t._pxBounds && t._pxBounds.intersects(e))) && t._updatePath();
            (this._drawing = !1), this._ctx.restore();
          },
          _updatePoly: function(t, e) {
            if (this._drawing) {
              var i,
                n,
                o,
                r,
                s = t._parts,
                a = s.length,
                h = this._ctx;
              if (a) {
                for (h.beginPath(), i = 0; i < a; i++) {
                  for (n = 0, o = s[i].length; n < o; n++) (r = s[i][n]), h[n ? 'lineTo' : 'moveTo'](r.x, r.y);
                  e && h.closePath();
                }
                this._fillStroke(h, t);
              }
            }
          },
          _updateCircle: function(t) {
            if (this._drawing && !t._empty()) {
              var e = t._point,
                i = this._ctx,
                n = Math.max(Math.round(t._radius), 1),
                o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
              1 !== o && (i.save(), i.scale(1, o)),
                i.beginPath(),
                i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1),
                1 !== o && i.restore(),
                this._fillStroke(i, t);
            }
          },
          _fillStroke: function(t, e) {
            var i = e.options;
            i.fill &&
              ((t.globalAlpha = i.fillOpacity),
              (t.fillStyle = i.fillColor || i.color),
              t.fill(i.fillRule || 'evenodd')),
              i.stroke &&
                0 !== i.weight &&
                (t.setLineDash && t.setLineDash((e.options && e.options._dashArray) || []),
                (t.globalAlpha = i.opacity),
                (t.lineWidth = i.weight),
                (t.strokeStyle = i.color),
                (t.lineCap = i.lineCap),
                (t.lineJoin = i.lineJoin),
                t.stroke());
          },
          _onClick: function(t) {
            for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)
              (e = o.layer).options.interactive && e._containsPoint(n) && !this._map._draggableMoved(e) && (i = e);
            i && (We(t), this._fireEvent([i], t));
          },
          _onMouseMove: function(t) {
            if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
              var e = this._map.mouseEventToLayerPoint(t);
              this._handleMouseHover(t, e);
            }
          },
          _handleMouseOut: function(t) {
            var e = this._hoveredLayer;
            e &&
              (pe(this._container, 'leaflet-interactive'),
              this._fireEvent([e], t, 'mouseout'),
              (this._hoveredLayer = null),
              (this._mouseHoverThrottled = !1));
          },
          _handleMouseHover: function(t, e) {
            if (!this._mouseHoverThrottled) {
              for (var i, n, o = this._drawFirst; o; o = o.next)
                (i = o.layer).options.interactive && i._containsPoint(e) && (n = i);
              n !== this._hoveredLayer &&
                (this._handleMouseOut(t),
                n &&
                  (de(this._container, 'leaflet-interactive'),
                  this._fireEvent([n], t, 'mouseover'),
                  (this._hoveredLayer = n))),
                this._hoveredLayer && this._fireEvent([this._hoveredLayer], t),
                (this._mouseHoverThrottled = !0),
                setTimeout(
                  L.bind(function() {
                    this._mouseHoverThrottled = !1;
                  }, this),
                  32
                );
            }
          },
          _fireEvent: function(t, e, i) {
            this._map._fireDOMEvent(e, i || e.type, t);
          },
          _bringToFront: function(t) {
            var e = t._order;
            if (e) {
              var i = e.next,
                n = e.prev;
              i &&
                ((i.prev = n),
                n ? (n.next = i) : i && (this._drawFirst = i),
                (e.prev = this._drawLast),
                (this._drawLast.next = e),
                (e.next = null),
                (this._drawLast = e),
                this._requestRedraw(t));
            }
          },
          _bringToBack: function(t) {
            var e = t._order;
            if (e) {
              var i = e.next,
                n = e.prev;
              n &&
                ((n.next = i),
                i ? (i.prev = n) : n && (this._drawLast = n),
                (e.prev = null),
                (e.next = this._drawFirst),
                (this._drawFirst.prev = e),
                (this._drawFirst = e),
                this._requestRedraw(t));
            }
          }
        });
      function un(t) {
        return Mt ? new ln(t) : null;
      }
      var cn = (function() {
          try {
            return (
              document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml'),
              function(t) {
                return document.createElement('<lvml:' + t + ' class="lvml">');
              }
            );
          } catch (t) {
            return function(t) {
              return document.createElement('<' + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
            };
          }
        })(),
        dn = {
          _initContainer: function() {
            this._container = se('div', 'leaflet-vml-container');
          },
          _update: function() {
            this._map._animatingZoom || (hn.prototype._update.call(this), this.fire('update'));
          },
          _initPath: function(t) {
            var e = (t._container = cn('shape'));
            de(e, 'leaflet-vml-shape ' + (this.options.className || '')),
              (e.coordsize = '1 1'),
              (t._path = cn('path')),
              e.appendChild(t._path),
              this._updateStyle(t),
              (this._layers[s(t)] = t);
          },
          _addPath: function(t) {
            var e = t._container;
            this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
          },
          _removePath: function(t) {
            var e = t._container;
            ae(e), t.removeInteractiveTarget(e), delete this._layers[s(t)];
          },
          _updateStyle: function(t) {
            var e = t._stroke,
              i = t._fill,
              n = t.options,
              o = t._container;
            (o.stroked = !!n.stroke),
              (o.filled = !!n.fill),
              n.stroke
                ? (e || (e = t._stroke = cn('stroke')),
                  o.appendChild(e),
                  (e.weight = n.weight + 'px'),
                  (e.color = n.color),
                  (e.opacity = n.opacity),
                  n.dashArray
                    ? (e.dashStyle = g(n.dashArray) ? n.dashArray.join(' ') : n.dashArray.replace(/( *, *)/g, ' '))
                    : (e.dashStyle = ''),
                  (e.endcap = n.lineCap.replace('butt', 'flat')),
                  (e.joinstyle = n.lineJoin))
                : e && (o.removeChild(e), (t._stroke = null)),
              n.fill
                ? (i || (i = t._fill = cn('fill')),
                  o.appendChild(i),
                  (i.color = n.fillColor || n.color),
                  (i.opacity = n.fillOpacity))
                : i && (o.removeChild(i), (t._fill = null));
          },
          _updateCircle: function(t) {
            var e = t._point.round(),
              i = Math.round(t._radius),
              n = Math.round(t._radiusY || i);
            this._setPath(t, t._empty() ? 'M0 0' : 'AL ' + e.x + ',' + e.y + ' ' + i + ',' + n + ' 0,23592600');
          },
          _setPath: function(t, e) {
            t._path.v = e;
          },
          _bringToFront: function(t) {
            le(t._container);
          },
          _bringToBack: function(t) {
            ue(t._container);
          }
        },
        pn = At ? cn : K,
        fn = hn.extend({
          getEvents: function() {
            var t = hn.prototype.getEvents.call(this);
            return (t.zoomstart = this._onZoomStart), t;
          },
          _initContainer: function() {
            (this._container = pn('svg')),
              this._container.setAttribute('pointer-events', 'none'),
              (this._rootGroup = pn('g')),
              this._container.appendChild(this._rootGroup);
          },
          _destroyContainer: function() {
            ae(this._container),
              Ce(this._container),
              delete this._container,
              delete this._rootGroup,
              delete this._svgSize;
          },
          _onZoomStart: function() {
            this._update();
          },
          _update: function() {
            if (!this._map._animatingZoom || !this._bounds) {
              hn.prototype._update.call(this);
              var t = this._bounds,
                e = t.getSize(),
                i = this._container;
              (this._svgSize && this._svgSize.equals(e)) ||
                ((this._svgSize = e), i.setAttribute('width', e.x), i.setAttribute('height', e.y)),
                ye(i, t.min),
                i.setAttribute('viewBox', [t.min.x, t.min.y, e.x, e.y].join(' ')),
                this.fire('update');
            }
          },
          _initPath: function(t) {
            var e = (t._path = pn('path'));
            t.options.className && de(e, t.options.className),
              t.options.interactive && de(e, 'leaflet-interactive'),
              this._updateStyle(t),
              (this._layers[s(t)] = t);
          },
          _addPath: function(t) {
            this._rootGroup || this._initContainer(),
              this._rootGroup.appendChild(t._path),
              t.addInteractiveTarget(t._path);
          },
          _removePath: function(t) {
            ae(t._path), t.removeInteractiveTarget(t._path), delete this._layers[s(t)];
          },
          _updatePath: function(t) {
            t._project(), t._update();
          },
          _updateStyle: function(t) {
            var e = t._path,
              i = t.options;
            e &&
              (i.stroke
                ? (e.setAttribute('stroke', i.color),
                  e.setAttribute('stroke-opacity', i.opacity),
                  e.setAttribute('stroke-width', i.weight),
                  e.setAttribute('stroke-linecap', i.lineCap),
                  e.setAttribute('stroke-linejoin', i.lineJoin),
                  i.dashArray ? e.setAttribute('stroke-dasharray', i.dashArray) : e.removeAttribute('stroke-dasharray'),
                  i.dashOffset
                    ? e.setAttribute('stroke-dashoffset', i.dashOffset)
                    : e.removeAttribute('stroke-dashoffset'))
                : e.setAttribute('stroke', 'none'),
              i.fill
                ? (e.setAttribute('fill', i.fillColor || i.color),
                  e.setAttribute('fill-opacity', i.fillOpacity),
                  e.setAttribute('fill-rule', i.fillRule || 'evenodd'))
                : e.setAttribute('fill', 'none'));
          },
          _updatePoly: function(t, e) {
            this._setPath(t, Y(t._parts, e));
          },
          _updateCircle: function(t) {
            var e = t._point,
              i = Math.max(Math.round(t._radius), 1),
              n = 'a' + i + ',' + (Math.max(Math.round(t._radiusY), 1) || i) + ' 0 1,0 ',
              o = t._empty() ? 'M0 0' : 'M' + (e.x - i) + ',' + e.y + n + 2 * i + ',0 ' + n + 2 * -i + ',0 ';
            this._setPath(t, o);
          },
          _setPath: function(t, e) {
            t._path.setAttribute('d', e);
          },
          _bringToFront: function(t) {
            le(t._path);
          },
          _bringToBack: function(t) {
            ue(t._path);
          }
        });
      function _n(t) {
        return Et || At ? new fn(t) : null;
      }
      At && fn.include(dn),
        Ke.include({
          getRenderer: function(t) {
            var e =
              t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
            return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e;
          },
          _getPaneRenderer: function(t) {
            if ('overlayPane' === t || void 0 === t) return !1;
            var e = this._paneRenderers[t];
            return void 0 === e && ((e = this._createRenderer({ pane: t })), (this._paneRenderers[t] = e)), e;
          },
          _createRenderer: function(t) {
            return (this.options.preferCanvas && un(t)) || _n(t);
          }
        });
      var mn = Ri.extend({
        initialize: function(t, e) {
          Ri.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
        },
        setBounds: function(t) {
          return this.setLatLngs(this._boundsToLatLngs(t));
        },
        _boundsToLatLngs: function(t) {
          return [(t = N(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
        }
      });
      (fn.create = pn),
        (fn.pointsToPath = Y),
        (Ni.geometryToLayer = Di),
        (Ni.coordsToLatLng = Fi),
        (Ni.coordsToLatLngs = Ui),
        (Ni.latLngToCoords = Hi),
        (Ni.latLngsToCoords = Wi),
        (Ni.getFeature = qi),
        (Ni.asFeature = Vi),
        Ke.mergeOptions({ boxZoom: !0 });
      var gn = ii.extend({
        initialize: function(t) {
          (this._map = t),
            (this._container = t._container),
            (this._pane = t._panes.overlayPane),
            (this._resetStateTimeout = 0),
            t.on('unload', this._destroy, this);
        },
        addHooks: function() {
          Ae(this._container, 'mousedown', this._onMouseDown, this);
        },
        removeHooks: function() {
          Ce(this._container, 'mousedown', this._onMouseDown, this);
        },
        moved: function() {
          return this._moved;
        },
        _destroy: function() {
          ae(this._pane), delete this._pane;
        },
        _resetState: function() {
          (this._resetStateTimeout = 0), (this._moved = !1);
        },
        _clearDeferredResetState: function() {
          0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
        },
        _onMouseDown: function(t) {
          if (!t.shiftKey || (1 !== t.which && 1 !== t.button)) return !1;
          this._clearDeferredResetState(),
            this._resetState(),
            Yt(),
            we(),
            (this._startPoint = this._map.mouseEventToContainerPoint(t)),
            Ae(
              document,
              { contextmenu: Ne, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown },
              this
            );
        },
        _onMouseMove: function(t) {
          this._moved ||
            ((this._moved = !0),
            (this._box = se('div', 'leaflet-zoom-box', this._container)),
            de(this._container, 'leaflet-crosshair'),
            this._map.fire('boxzoomstart')),
            (this._point = this._map.mouseEventToContainerPoint(t));
          var e = new I(this._point, this._startPoint),
            i = e.getSize();
          ye(this._box, e.min), (this._box.style.width = i.x + 'px'), (this._box.style.height = i.y + 'px');
        },
        _finish: function() {
          this._moved && (ae(this._box), pe(this._container, 'leaflet-crosshair')),
            Xt(),
            Le(),
            Ce(
              document,
              { contextmenu: Ne, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown },
              this
            );
        },
        _onMouseUp: function(t) {
          if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
            this._clearDeferredResetState(), (this._resetStateTimeout = setTimeout(o(this._resetState, this), 0));
            var e = new R(
              this._map.containerPointToLatLng(this._startPoint),
              this._map.containerPointToLatLng(this._point)
            );
            this._map.fitBounds(e).fire('boxzoomend', { boxZoomBounds: e });
          }
        },
        _onKeyDown: function(t) {
          27 === t.keyCode && this._finish();
        }
      });
      Ke.addInitHook('addHandler', 'boxZoom', gn), Ke.mergeOptions({ doubleClickZoom: !0 });
      var vn = ii.extend({
        addHooks: function() {
          this._map.on('dblclick', this._onDoubleClick, this);
        },
        removeHooks: function() {
          this._map.off('dblclick', this._onDoubleClick, this);
        },
        _onDoubleClick: function(t) {
          var e = this._map,
            i = e.getZoom(),
            n = e.options.zoomDelta,
            o = t.originalEvent.shiftKey ? i - n : i + n;
          'center' === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o);
        }
      });
      Ke.addInitHook('addHandler', 'doubleClickZoom', vn),
        Ke.mergeOptions({
          dragging: !0,
          inertia: !nt,
          inertiaDeceleration: 3400,
          inertiaMaxSpeed: 1 / 0,
          easeLinearity: 0.2,
          worldCopyJump: !1,
          maxBoundsViscosity: 0
        });
      var yn = ii.extend({
        addHooks: function() {
          if (!this._draggable) {
            var t = this._map;
            (this._draggable = new hi(t._mapPane, t._container)),
              this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this),
              this._draggable.on('predrag', this._onPreDragLimit, this),
              t.options.worldCopyJump &&
                (this._draggable.on('predrag', this._onPreDragWrap, this),
                t.on('zoomend', this._onZoomEnd, this),
                t.whenReady(this._onZoomEnd, this));
          }
          de(this._map._container, 'leaflet-grab leaflet-touch-drag'),
            this._draggable.enable(),
            (this._positions = []),
            (this._times = []);
        },
        removeHooks: function() {
          pe(this._map._container, 'leaflet-grab'),
            pe(this._map._container, 'leaflet-touch-drag'),
            this._draggable.disable();
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        moving: function() {
          return this._draggable && this._draggable._moving;
        },
        _onDragStart: function() {
          var t = this._map;
          if ((t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity)) {
            var e = N(this._map.options.maxBounds);
            (this._offsetLimit = O(
              this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
              this._map
                .latLngToContainerPoint(e.getSouthEast())
                .multiplyBy(-1)
                .add(this._map.getSize())
            )),
              (this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity)));
          } else this._offsetLimit = null;
          t.fire('movestart').fire('dragstart'), t.options.inertia && ((this._positions = []), (this._times = []));
        },
        _onDrag: function(t) {
          if (this._map.options.inertia) {
            var e = (this._lastTime = +new Date()),
              i = (this._lastPos = this._draggable._absPos || this._draggable._newPos);
            this._positions.push(i), this._times.push(e), this._prunePositions(e);
          }
          this._map.fire('move', t).fire('drag', t);
        },
        _prunePositions: function(t) {
          for (; this._positions.length > 1 && t - this._times[0] > 50; ) this._positions.shift(), this._times.shift();
        },
        _onZoomEnd: function() {
          var t = this._map.getSize().divideBy(2),
            e = this._map.latLngToLayerPoint([0, 0]);
          (this._initialWorldOffset = e.subtract(t).x),
            (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
        },
        _viscousLimit: function(t, e) {
          return t - (t - e) * this._viscosity;
        },
        _onPreDragLimit: function() {
          if (this._viscosity && this._offsetLimit) {
            var t = this._draggable._newPos.subtract(this._draggable._startPos),
              e = this._offsetLimit;
            t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
              t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
              t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
              t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
              (this._draggable._newPos = this._draggable._startPos.add(t));
          }
        },
        _onPreDragWrap: function() {
          var t = this._worldWidth,
            e = Math.round(t / 2),
            i = this._initialWorldOffset,
            n = this._draggable._newPos.x,
            o = ((n - e + i) % t) + e - i,
            r = ((n + e + i) % t) - e - i,
            s = Math.abs(o + i) < Math.abs(r + i) ? o : r;
          (this._draggable._absPos = this._draggable._newPos.clone()), (this._draggable._newPos.x = s);
        },
        _onDragEnd: function(t) {
          var e = this._map,
            i = e.options,
            n = !i.inertia || this._times.length < 2;
          if ((e.fire('dragend', t), n)) e.fire('moveend');
          else {
            this._prunePositions(+new Date());
            var o = this._lastPos.subtract(this._positions[0]),
              r = (this._lastTime - this._times[0]) / 1e3,
              s = i.easeLinearity,
              a = o.multiplyBy(s / r),
              h = a.distanceTo([0, 0]),
              l = Math.min(i.inertiaMaxSpeed, h),
              u = a.multiplyBy(l / h),
              c = l / (i.inertiaDeceleration * s),
              d = u.multiplyBy(-c / 2).round();
            d.x || d.y
              ? ((d = e._limitOffset(d, e.options.maxBounds)),
                z(function() {
                  e.panBy(d, { duration: c, easeLinearity: s, noMoveStart: !0, animate: !0 });
                }))
              : e.fire('moveend');
          }
        }
      });
      Ke.addInitHook('addHandler', 'dragging', yn), Ke.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
      var xn = ii.extend({
        keyCodes: {
          left: [37],
          right: [39],
          down: [40],
          up: [38],
          zoomIn: [187, 107, 61, 171],
          zoomOut: [189, 109, 54, 173]
        },
        initialize: function(t) {
          (this._map = t), this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
        },
        addHooks: function() {
          var t = this._map._container;
          t.tabIndex <= 0 && (t.tabIndex = '0'),
            Ae(t, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this),
            this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
        },
        removeHooks: function() {
          this._removeHooks(),
            Ce(this._map._container, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this),
            this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
        },
        _onMouseDown: function() {
          if (!this._focused) {
            var t = document.body,
              e = document.documentElement,
              i = t.scrollTop || e.scrollTop,
              n = t.scrollLeft || e.scrollLeft;
            this._map._container.focus(), window.scrollTo(n, i);
          }
        },
        _onFocus: function() {
          (this._focused = !0), this._map.fire('focus');
        },
        _onBlur: function() {
          (this._focused = !1), this._map.fire('blur');
        },
        _setPanDelta: function(t) {
          var e,
            i,
            n = (this._panKeys = {}),
            o = this.keyCodes;
          for (e = 0, i = o.left.length; e < i; e++) n[o.left[e]] = [-1 * t, 0];
          for (e = 0, i = o.right.length; e < i; e++) n[o.right[e]] = [t, 0];
          for (e = 0, i = o.down.length; e < i; e++) n[o.down[e]] = [0, t];
          for (e = 0, i = o.up.length; e < i; e++) n[o.up[e]] = [0, -1 * t];
        },
        _setZoomDelta: function(t) {
          var e,
            i,
            n = (this._zoomKeys = {}),
            o = this.keyCodes;
          for (e = 0, i = o.zoomIn.length; e < i; e++) n[o.zoomIn[e]] = t;
          for (e = 0, i = o.zoomOut.length; e < i; e++) n[o.zoomOut[e]] = -t;
        },
        _addHooks: function() {
          Ae(document, 'keydown', this._onKeyDown, this);
        },
        _removeHooks: function() {
          Ce(document, 'keydown', this._onKeyDown, this);
        },
        _onKeyDown: function(t) {
          if (!(t.altKey || t.ctrlKey || t.metaKey)) {
            var e,
              i = t.keyCode,
              n = this._map;
            if (i in this._panKeys)
              (n._panAnim && n._panAnim._inProgress) ||
                ((e = this._panKeys[i]),
                t.shiftKey && (e = B(e).multiplyBy(3)),
                n.panBy(e),
                n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
            else if (i in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
            else {
              if (27 !== i || !n._popup || !n._popup.options.closeOnEscapeKey) return;
              n.closePopup();
            }
            Ne(t);
          }
        }
      });
      Ke.addInitHook('addHandler', 'keyboard', xn),
        Ke.mergeOptions({ scrollWheelZoom: !0, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 });
      var bn = ii.extend({
        addHooks: function() {
          Ae(this._map._container, 'mousewheel', this._onWheelScroll, this), (this._delta = 0);
        },
        removeHooks: function() {
          Ce(this._map._container, 'mousewheel', this._onWheelScroll, this);
        },
        _onWheelScroll: function(t) {
          var e = Fe(t),
            i = this._map.options.wheelDebounceTime;
          (this._delta += e),
            (this._lastMousePos = this._map.mouseEventToContainerPoint(t)),
            this._startTime || (this._startTime = +new Date());
          var n = Math.max(i - (+new Date() - this._startTime), 0);
          clearTimeout(this._timer), (this._timer = setTimeout(o(this._performZoom, this), n)), Ne(t);
        },
        _performZoom: function() {
          var t = this._map,
            e = t.getZoom(),
            i = this._map.options.zoomSnap || 0;
          t._stop();
          var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
            o = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(n))))) / Math.LN2,
            r = i ? Math.ceil(o / i) * i : o,
            s = t._limitZoom(e + (this._delta > 0 ? r : -r)) - e;
          (this._delta = 0),
            (this._startTime = null),
            s &&
              ('center' === t.options.scrollWheelZoom ? t.setZoom(e + s) : t.setZoomAround(this._lastMousePos, e + s));
        }
      });
      Ke.addInitHook('addHandler', 'scrollWheelZoom', bn), Ke.mergeOptions({ tap: !0, tapTolerance: 15 });
      var wn = ii.extend({
        addHooks: function() {
          Ae(this._map._container, 'touchstart', this._onDown, this);
        },
        removeHooks: function() {
          Ce(this._map._container, 'touchstart', this._onDown, this);
        },
        _onDown: function(t) {
          if (t.touches) {
            if ((Re(t), (this._fireClick = !0), t.touches.length > 1))
              return (this._fireClick = !1), void clearTimeout(this._holdTimeout);
            var e = t.touches[0],
              i = e.target;
            (this._startPos = this._newPos = new S(e.clientX, e.clientY)),
              i.tagName && 'a' === i.tagName.toLowerCase() && de(i, 'leaflet-active'),
              (this._holdTimeout = setTimeout(
                o(function() {
                  this._isTapValid() && ((this._fireClick = !1), this._onUp(), this._simulateEvent('contextmenu', e));
                }, this),
                1e3
              )),
              this._simulateEvent('mousedown', e),
              Ae(document, { touchmove: this._onMove, touchend: this._onUp }, this);
          }
        },
        _onUp: function(t) {
          if (
            (clearTimeout(this._holdTimeout),
            Ce(document, { touchmove: this._onMove, touchend: this._onUp }, this),
            this._fireClick && t && t.changedTouches)
          ) {
            var e = t.changedTouches[0],
              i = e.target;
            i && i.tagName && 'a' === i.tagName.toLowerCase() && pe(i, 'leaflet-active'),
              this._simulateEvent('mouseup', e),
              this._isTapValid() && this._simulateEvent('click', e);
          }
        },
        _isTapValid: function() {
          return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
        },
        _onMove: function(t) {
          var e = t.touches[0];
          (this._newPos = new S(e.clientX, e.clientY)), this._simulateEvent('mousemove', e);
        },
        _simulateEvent: function(t, e) {
          var i = document.createEvent('MouseEvents');
          (i._simulated = !0),
            (e.target._simulatedClick = !0),
            i.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null),
            e.target.dispatchEvent(i);
        }
      });
      wt && !bt && Ke.addInitHook('addHandler', 'tap', wn),
        Ke.mergeOptions({ touchZoom: wt && !nt, bounceAtZoomLimits: !0 });
      var Ln = ii.extend({
        addHooks: function() {
          de(this._map._container, 'leaflet-touch-zoom'),
            Ae(this._map._container, 'touchstart', this._onTouchStart, this);
        },
        removeHooks: function() {
          pe(this._map._container, 'leaflet-touch-zoom'),
            Ce(this._map._container, 'touchstart', this._onTouchStart, this);
        },
        _onTouchStart: function(t) {
          var e = this._map;
          if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
            var i = e.mouseEventToContainerPoint(t.touches[0]),
              n = e.mouseEventToContainerPoint(t.touches[1]);
            (this._centerPoint = e.getSize()._divideBy(2)),
              (this._startLatLng = e.containerPointToLatLng(this._centerPoint)),
              'center' !== e.options.touchZoom &&
                (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))),
              (this._startDist = i.distanceTo(n)),
              (this._startZoom = e.getZoom()),
              (this._moved = !1),
              (this._zooming = !0),
              e._stop(),
              Ae(document, 'touchmove', this._onTouchMove, this),
              Ae(document, 'touchend', this._onTouchEnd, this),
              Re(t);
          }
        },
        _onTouchMove: function(t) {
          if (t.touches && 2 === t.touches.length && this._zooming) {
            var e = this._map,
              i = e.mouseEventToContainerPoint(t.touches[0]),
              n = e.mouseEventToContainerPoint(t.touches[1]),
              r = i.distanceTo(n) / this._startDist;
            if (
              ((this._zoom = e.getScaleZoom(r, this._startZoom)),
              !e.options.bounceAtZoomLimits &&
                ((this._zoom < e.getMinZoom() && r < 1) || (this._zoom > e.getMaxZoom() && r > 1)) &&
                (this._zoom = e._limitZoom(this._zoom)),
              'center' === e.options.touchZoom)
            ) {
              if (((this._center = this._startLatLng), 1 === r)) return;
            } else {
              var s = i
                ._add(n)
                ._divideBy(2)
                ._subtract(this._centerPoint);
              if (1 === r && 0 === s.x && 0 === s.y) return;
              this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(s), this._zoom);
            }
            this._moved || (e._moveStart(!0, !1), (this._moved = !0)), M(this._animRequest);
            var a = o(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 });
            (this._animRequest = z(a, this, !0)), Re(t);
          }
        },
        _onTouchEnd: function() {
          this._moved && this._zooming
            ? ((this._zooming = !1),
              M(this._animRequest),
              Ce(document, 'touchmove', this._onTouchMove),
              Ce(document, 'touchend', this._onTouchEnd),
              this._map.options.zoomAnimation
                ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap)
                : this._map._resetView(this._center, this._map._limitZoom(this._zoom)))
            : (this._zooming = !1);
        }
      });
      Ke.addInitHook('addHandler', 'touchZoom', Ln),
        (Ke.BoxZoom = gn),
        (Ke.DoubleClickZoom = vn),
        (Ke.Drag = yn),
        (Ke.Keyboard = xn),
        (Ke.ScrollWheelZoom = bn),
        (Ke.Tap = wn),
        (Ke.TouchZoom = Ln),
        (Object.freeze = e),
        (t.version = '1.6.0'),
        (t.Control = Ye),
        (t.control = Xe),
        (t.Browser = Ct),
        (t.Evented = C),
        (t.Mixin = oi),
        (t.Util = E),
        (t.Class = A),
        (t.Handler = ii),
        (t.extend = i),
        (t.bind = o),
        (t.stamp = s),
        (t.setOptions = p),
        (t.DomEvent = Ge),
        (t.DomUtil = Ee),
        (t.PosAnimation = Je),
        (t.Draggable = hi),
        (t.LineUtil = gi),
        (t.PolyUtil = yi),
        (t.Point = S),
        (t.point = B),
        (t.Bounds = I),
        (t.bounds = O),
        (t.Transformation = q),
        (t.transformation = V),
        (t.Projection = wi),
        (t.LatLng = D),
        (t.latLng = j),
        (t.LatLngBounds = R),
        (t.latLngBounds = N),
        (t.CRS = U),
        (t.GeoJSON = Ni),
        (t.geoJSON = Ji),
        (t.geoJson = Ki),
        (t.Layer = zi),
        (t.LayerGroup = Mi),
        (t.layerGroup = function(t, e) {
          return new Mi(t, e);
        }),
        (t.FeatureGroup = Ei),
        (t.featureGroup = function(t) {
          return new Ei(t);
        }),
        (t.ImageOverlay = Yi),
        (t.imageOverlay = function(t, e, i) {
          return new Yi(t, e, i);
        }),
        (t.VideoOverlay = Xi),
        (t.videoOverlay = function(t, e, i) {
          return new Xi(t, e, i);
        }),
        (t.SVGOverlay = Qi),
        (t.svgOverlay = function(t, e, i) {
          return new Qi(t, e, i);
        }),
        (t.DivOverlay = $i),
        (t.Popup = tn),
        (t.popup = function(t, e) {
          return new tn(t, e);
        }),
        (t.Tooltip = en),
        (t.tooltip = function(t, e) {
          return new en(t, e);
        }),
        (t.Icon = Ai),
        (t.icon = function(t) {
          return new Ai(t);
        }),
        (t.DivIcon = nn),
        (t.divIcon = function(t) {
          return new nn(t);
        }),
        (t.Marker = Si),
        (t.marker = function(t, e) {
          return new Si(t, e);
        }),
        (t.TileLayer = rn),
        (t.tileLayer = sn),
        (t.GridLayer = on),
        (t.gridLayer = function(t) {
          return new on(t);
        }),
        (t.SVG = fn),
        (t.svg = _n),
        (t.Renderer = hn),
        (t.Canvas = ln),
        (t.canvas = un),
        (t.Path = Zi),
        (t.CircleMarker = Bi),
        (t.circleMarker = function(t, e) {
          return new Bi(t, e);
        }),
        (t.Circle = Ii),
        (t.circle = function(t, e, i) {
          return new Ii(t, e, i);
        }),
        (t.Polyline = Oi),
        (t.polyline = function(t, e) {
          return new Oi(t, e);
        }),
        (t.Polygon = Ri),
        (t.polygon = function(t, e) {
          return new Ri(t, e);
        }),
        (t.Rectangle = mn),
        (t.rectangle = function(t, e) {
          return new mn(t, e);
        }),
        (t.Map = Ke),
        (t.map = function(t, e) {
          return new Ke(t, e);
        });
      var Pn = window.L;
      (t.noConflict = function() {
        return (window.L = Pn), this;
      }),
        (window.L = t);
    })(e);
  },
  function(t, e) {
    t.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=';
  },
  function(t, e, i) {
    var n = i(3);
    'string' == typeof n && (n = [[t.i, n, '']]);
    var o = { insert: 'head', singleton: !1 };
    i(8)(n, o);
    n.locals && (t.exports = n.locals);
  },
  function(t, e, i) {
    e = t.exports = i(4)(!1);
    var n = i(5),
      o = n(i(6)),
      r = n(i(7)),
      s = n(i(1));
    e.push([
      t.i,
      "/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n/* Prevents IE11 from highlighting tiles in blue */\r\n.leaflet-tile::selection {\r\n\tbackground: transparent;\r\n}\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n.leaflet-container .leaflet-overlay-pane svg,\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer,\r\n.leaflet-container .leaflet-tile {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\t-ms-touch-action: pan-x pan-y;\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n.leaflet-container.leaflet-touch-drag {\r\n\t-ms-touch-action: pinch-zoom;\r\n\t/* Fallback for FF which doesn't support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\t-ms-touch-action: none;\r\n\ttouch-action: none;\r\n}\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n.leaflet-tile {\r\n\tfilter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n.leaflet-overlay-pane { z-index: 400; }\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n.leaflet-marker-pane  { z-index: 600; }\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-tile {\r\n\twill-change: opacity;\r\n\t}\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.2s linear;\r\n\t   -moz-transition: opacity 0.2s linear;\r\n\t        transition: opacity 0.2s linear;\r\n\t}\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t    -ms-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\twill-change: transform;\r\n\t}\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\t-webkit-transition: none;\r\n\t   -moz-transition: none;\r\n\t        transition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:    -moz-grab;\r\n\tcursor:         grab;\r\n\t}\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:    -moz-grabbing;\r\n\tcursor:         grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive,\r\nsvg.leaflet-image-layer.leaflet-interactive path {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline: 0;\r\n\t}\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n.leaflet-container a.leaflet-active {\r\n\toutline: 2px solid orange;\r\n\t}\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n\r\n/* general typography */\r\n.leaflet-container {\r\n\tfont: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\r\n\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url(" +
        o +
        ');\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url(' +
        r +
        ');\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n.leaflet-default-icon-path {\r\n\tbackground-image: url(' +
        s +
        ');\r\n\t}\r\n\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.7);\r\n\tmargin: 0;\r\n\t}\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\t}\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n.leaflet-control-attribution a:hover {\r\n\ttext-decoration: underline;\r\n\t}\r\n.leaflet-container .leaflet-control-attribution,\r\n.leaflet-container .leaflet-control-scale {\r\n\tfont-size: 11px;\r\n\t}\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\tfont-size: 11px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n.leaflet-popup-content {\r\n\tmargin: 13px 19px;\r\n\tline-height: 1.4;\r\n\t}\r\n.leaflet-popup-content p {\r\n\tmargin: 18px 0;\r\n\t}\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t   -moz-transform: rotate(45deg);\r\n\t    -ms-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 4px 4px 0 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 18px;\r\n\theight: 14px;\r\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\r\n\tcolor: #c3c3c3;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n\tbackground: transparent;\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button:hover {\r\n\tcolor: #999;\r\n\t}\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\tzoom: 1;\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip-container {\r\n\tmargin-top: -1px;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n\r\n/* Tooltip */\r\n/* Base styles for the element that has a tooltip */\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-tooltip.leaflet-clickable {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: "";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n',
      ''
    ]);
  },
  function(t, e, i) {
    'use strict';
    t.exports = function(t) {
      var e = [];
      return (
        (e.toString = function() {
          return this.map(function(e) {
            var i = (function(t, e) {
              var i = t[1] || '',
                n = t[3];
              if (!n) return i;
              if (e && 'function' == typeof btoa) {
                var o =
                    ((s = n),
                    (a = btoa(unescape(encodeURIComponent(JSON.stringify(s))))),
                    (h = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(a)),
                    '/*# '.concat(h, ' */')),
                  r = n.sources.map(function(t) {
                    return '/*# sourceURL='.concat(n.sourceRoot).concat(t, ' */');
                  });
                return [i]
                  .concat(r)
                  .concat([o])
                  .join('\n');
              }
              var s, a, h;
              return [i].join('\n');
            })(e, t);
            return e[2] ? '@media '.concat(e[2], '{').concat(i, '}') : i;
          }).join('');
        }),
        (e.i = function(t, i) {
          'string' == typeof t && (t = [[null, t, '']]);
          for (var n = {}, o = 0; o < this.length; o++) {
            var r = this[o][0];
            null != r && (n[r] = !0);
          }
          for (var s = 0; s < t.length; s++) {
            var a = t[s];
            (null != a[0] && n[a[0]]) ||
              (i && !a[2] ? (a[2] = i) : i && (a[2] = '('.concat(a[2], ') and (').concat(i, ')')), e.push(a));
          }
        }),
        e
      );
    };
  },
  function(t, e, i) {
    'use strict';
    t.exports = function(t, e) {
      return 'string' != typeof (t = t.__esModule ? t.default : t)
        ? t
        : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
          /["'() \t\n]/.test(t) || e ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"') : t);
    };
  },
  function(t, e) {
    t.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC';
  },
  function(t, e) {
    t.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=';
  },
  function(t, e, i) {
    'use strict';
    var n,
      o = {},
      r = function() {
        return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n;
      },
      s = (function() {
        var t = {};
        return function(e) {
          if (void 0 === t[e]) {
            var i = document.querySelector(e);
            if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement)
              try {
                i = i.contentDocument.head;
              } catch (t) {
                i = null;
              }
            t[e] = i;
          }
          return t[e];
        };
      })();
    function a(t, e) {
      for (var i = [], n = {}, o = 0; o < t.length; o++) {
        var r = t[o],
          s = e.base ? r[0] + e.base : r[0],
          a = { css: r[1], media: r[2], sourceMap: r[3] };
        n[s] ? n[s].parts.push(a) : i.push((n[s] = { id: s, parts: [a] }));
      }
      return i;
    }
    function h(t, e) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i],
          r = o[n.id],
          s = 0;
        if (r) {
          for (r.refs++; s < r.parts.length; s++) r.parts[s](n.parts[s]);
          for (; s < n.parts.length; s++) r.parts.push(m(n.parts[s], e));
        } else {
          for (var a = []; s < n.parts.length; s++) a.push(m(n.parts[s], e));
          o[n.id] = { id: n.id, refs: 1, parts: a };
        }
      }
    }
    function l(t) {
      var e = document.createElement('style');
      if (void 0 === t.attributes.nonce) {
        var n = i.nc;
        n && (t.attributes.nonce = n);
      }
      if (
        (Object.keys(t.attributes).forEach(function(i) {
          e.setAttribute(i, t.attributes[i]);
        }),
        'function' == typeof t.insert)
      )
        t.insert(e);
      else {
        var o = s(t.insert || 'head');
        if (!o)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        o.appendChild(e);
      }
      return e;
    }
    var u,
      c =
        ((u = []),
        function(t, e) {
          return (u[t] = e), u.filter(Boolean).join('\n');
        });
    function d(t, e, i, n) {
      var o = i ? '' : n.css;
      if (t.styleSheet) t.styleSheet.cssText = c(e, o);
      else {
        var r = document.createTextNode(o),
          s = t.childNodes;
        s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(r, s[e]) : t.appendChild(r);
      }
    }
    function p(t, e, i) {
      var n = i.css,
        o = i.media,
        r = i.sourceMap;
      if (
        (o && t.setAttribute('media', o),
        r &&
          btoa &&
          (n += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
            ' */'
          )),
        t.styleSheet)
      )
        t.styleSheet.cssText = n;
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(n));
      }
    }
    var f = null,
      _ = 0;
    function m(t, e) {
      var i, n, o;
      if (e.singleton) {
        var r = _++;
        (i = f || (f = l(e))), (n = d.bind(null, i, r, !1)), (o = d.bind(null, i, r, !0));
      } else
        (i = l(e)),
          (n = p.bind(null, i, e)),
          (o = function() {
            !(function(t) {
              if (null === t.parentNode) return !1;
              t.parentNode.removeChild(t);
            })(i);
          });
      return (
        n(t),
        function(e) {
          if (e) {
            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
            n((t = e));
          } else o();
        }
      );
    }
    t.exports = function(t, e) {
      ((e = e || {}).attributes = 'object' == typeof e.attributes ? e.attributes : {}),
        e.singleton || 'boolean' == typeof e.singleton || (e.singleton = r());
      var i = a(t, e);
      return (
        h(i, e),
        function(t) {
          for (var n = [], r = 0; r < i.length; r++) {
            var s = i[r],
              l = o[s.id];
            l && (l.refs--, n.push(l));
          }
          t && h(a(t, e), e);
          for (var u = 0; u < n.length; u++) {
            var c = n[u];
            if (0 === c.refs) {
              for (var d = 0; d < c.parts.length; d++) c.parts[d]();
              delete o[c.id];
            }
          }
        }
      );
    };
  },
  function(t, e) {
    t.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg==';
  },
  function(t, e) {
    t.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC';
  },
  function(t, e, i) {
    'use strict';
    i.r(e);
    var n = i(0),
      o = i.n(n);
    i(2);
    function r(t, e, i) {
      if ('fragment' === i) i = t.FRAGMENT_SHADER;
      else {
        if ('vertex' !== i) return null;
        i = t.VERTEX_SHADER;
      }
      var n = t.createShader(i);
      return (
        t.shaderSource(n, e),
        t.compileShader(n),
        t.getShaderParameter(n, t.COMPILE_STATUS)
          ? n
          : (console.log('An error occurred compiling the shaders: ' + t.getShaderInfoLog(n)), t.deleteShader(n), null)
      );
    }
    function s(t, e, i) {
      var n = t.createProgram();
      return (
        t.attachShader(n, e),
        t.attachShader(n, i),
        t.linkProgram(n),
        t.getProgramParameter(n, t.LINK_STATUS) ||
          console.log('Unable to initialize the shader program: ' + t.getProgramInfoLog(n)),
        n
      );
    }
    var a = {
        p: 5,
        canvas: null,
        zIndex: 10,
        opacity: 0.35,
        range_factor: 0.00390625,
        gamma: 2.2,
        debug_points: !1,
        framebuffer_factor: 1,
        point_text: function(t) {
          return t < 1 ? t.toFixed(2) : t < 10 ? t.toFixed(1) : Math.round(t);
        }
      },
      h = 0;
    function l(t) {
      void 0 === t && (t = {});
      var e = {};
      for (var i in a) e[i] = a[i];
      if ('object' == typeof t) for (var n in t) e[n] = t[n];
      if (!e.canvas) throw new Error("Don't set canvas");
      h++;
      var o = e.canvas;
      (o.style.position = 'absolute'),
        (o.style.top = '0px'),
        (o.style.left = '0px'),
        (o.style.zIndex = e.zIndex),
        (o.style.opacity = e.opacity),
        (this.canvas = e.canvas),
        (this.context = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl')),
        this.context || console.log('Your browser does not support webgl'),
        (this.context && this.context.getExtension('OES_texture_float')) ||
          (console.log('Your browser does not support float textures'), (this.context = null)),
        (this.points = []),
        (this.translated_points = []),
        (this.square_vertices_buffer = null),
        (this.computation_program = null),
        (this.draw_program = null),
        (this.position_attribute = null),
        (this.computation_framebuffer = null),
        (this.computation_texture = null),
        (this.ui_uniform = null),
        (this.xi_uniform = null),
        (this.c_screen_size_uniform = null),
        (this.d_screen_size_uniform = null),
        (this.range_factor_uniform = null),
        (this.p_uniform = null),
        (this.computation_texture_uniform = null),
        (this.gamma_uniform = null),
        (this.point_text = e.point_text),
        (this.p = e.p),
        (this.range_factor = e.range_factor),
        (this.gamma = e.gamma),
        (this.debug_points = e.debug_points),
        (this.unit = e.unit),
        (this.framebuffer_factor = e.framebuffer_factor),
        (this.computation_framebuffer_width = 0),
        (this.computation_framebuffer_height = 0),
        this.init_shaders(),
        this.resize(this.canvas.clientWidth, this.canvas.clientHeight);
    }
    (l.prototype.update_options = function(t) {
      t.p && (this.p = t.p),
        t.range_factor && (this.range_factor = t.range_factor),
        t.gamma && (this.gamma = t.gamma),
        t.debug_points && (this.debug_points = t.debug_points),
        this.draw();
    }),
      (l.is_supported = function() {
        var t = document.createElement('canvas'),
          e = t.getContext('webgl');
        return t && e && e.getExtension('OES_texture_float');
      }),
      (l.prototype.set_points = function(t, e, i, n) {
        if (((this.points = t), this.context && t.length)) {
          for (
            var o = [],
              r = void 0 !== e ? Math.min(t[0][2], e) : t[0][2],
              s = void 0 !== i ? Math.max(t[0][2], i) : t[0][2],
              a = void 0 !== n ? n : 0,
              h = 1;
            h < t.length;
            ++h
          ) {
            var l = [t[h][0], t[h][1], t[h][2]];
            l[2] > s && (s = l[2]), l[2] < r && (r = l[2]), void 0 === n && (a += l[2] / t.length);
          }
          for (var u = this.canvas.width, c = this.canvas.height, d = 0; d < t.length; ++d) {
            var p = [t[d][0], t[d][1], t[d][2]];
            (p[0] = p[0] / u),
              (p[1] = p[1] / c),
              p[2] > a
                ? (p[2] = s == a ? 1 : (0.5 * (p[2] - a)) / (s - a) + 0.5)
                : (p[2] = r == a ? 0.5 : (-0.5 * (a - p[2])) / (a - r) + 0.5),
              (p[2] = Math.max(Math.min(p[2], 1), 0)),
              p[2] > s && (s = p[2]),
              p[2] < r && (r = p[2]),
              o.push(p);
          }
          this.translated_points = o;
        }
      }),
      (l.prototype.init_buffers = function() {
        if (this.context) {
          var t = this.context;
          (this.square_vertices_buffer = t.createBuffer()), t.bindBuffer(t.ARRAY_BUFFER, this.square_vertices_buffer);
          t.bufferData(t.ARRAY_BUFFER, new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]), t.STATIC_DRAW),
            (this.computation_framebuffer_width = Math.ceil(this.canvas.width * this.framebuffer_factor)),
            (this.computation_framebuffer_height = Math.ceil(this.canvas.height * this.framebuffer_factor)),
            (this.computation_texture = t.createTexture()),
            t.bindTexture(t.TEXTURE_2D, this.computation_texture),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST),
            t.texImage2D(
              t.TEXTURE_2D,
              0,
              t.RGBA,
              this.computation_framebuffer_width,
              this.computation_framebuffer_height,
              0,
              t.RGBA,
              t.FLOAT,
              null
            ),
            (this.computation_framebuffer = t.createFramebuffer()),
            t.bindFramebuffer(t.FRAMEBUFFER, this.computation_framebuffer),
            t.viewport(0, 0, this.computation_framebuffer_width, this.computation_framebuffer_height),
            t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.computation_texture, 0),
            t.bindTexture(t.TEXTURE_2D, null),
            t.bindFramebuffer(t.FRAMEBUFFER, null);
        }
      }),
      (l.prototype.init_shaders = function() {
        if (this.context) {
          var t = this.context,
            e = r(
              t,
              '  attribute vec2 position;  void main(void) {    gl_Position = vec4(position.x*2.0-1.0, position.y*2.0-1.0, 1.0, 1.0);  }',
              'vertex'
            ),
            i = r(
              t,
              '  precision highp float;  uniform float ui;  uniform vec2 xi;  uniform float p;  uniform float scale;  uniform float range_factor;  uniform vec2 screen_size;  uniform vec2 translation;  void main(void) {    vec2 x = vec2((gl_FragCoord.x+translation.x)/screen_size.x, (gl_FragCoord.y+translation.y)/screen_size.y);    float dist = distance(x, xi*scale);    float wi = 1.0/pow(dist, p);    gl_FragColor = vec4(ui*wi*range_factor, wi*range_factor, 0.0, 1.0);  }',
              'fragment'
            ),
            n = r(
              t,
              '  precision highp float;  uniform sampler2D computation_texture;  uniform vec2 screen_size;  uniform float gamma;  void main(void) {    vec4 data = texture2D(computation_texture, vec2(gl_FragCoord.x/screen_size.x, 1.0-gl_FragCoord.y/screen_size.y));    float val = data.x/data.y;    vec3 color = vec3(max((val-0.5)*2.0, 0.0), 1.0 - 2.0*abs(val - 0.5), max((0.5-val)*2.0, 0.0));    gl_FragColor.rgb = pow(color, vec3(1.0/gamma));    gl_FragColor.a = 1.0;  }',
              'fragment'
            );
          (this.computation_program = s(t, e, i)),
            (this.position_attribute = t.getAttribLocation(this.computation_program, 'position')),
            (this.ui_uniform = t.getUniformLocation(this.computation_program, 'ui')),
            (this.xi_uniform = t.getUniformLocation(this.computation_program, 'xi')),
            (this.c_screen_size_uniform = t.getUniformLocation(this.computation_program, 'screen_size')),
            (this.range_factor_uniform = t.getUniformLocation(this.computation_program, 'range_factor')),
            (this.p_uniform = t.getUniformLocation(this.computation_program, 'p')),
            (this.scale_uniform = t.getUniformLocation(this.computation_program, 'scale')),
            (this.translation_uniform = t.getUniformLocation(this.computation_program, 'translation')),
            t.enableVertexAttribArray(this.position_attribute),
            (this.draw_program = s(t, e, n)),
            (this.d_screen_size_uniform = t.getUniformLocation(this.draw_program, 'screen_size')),
            (this.computation_texture_uniform = t.getUniformLocation(this.draw_program, 'computation_texture')),
            (this.gamma_uniform = t.getUniformLocation(this.draw_program, 'gamma'));
        }
      }),
      (l.prototype.draw = function(t) {
        var e = void 0 === t ? {} : t,
          i = e.scale,
          n = void 0 === i ? 1 : i,
          o = e.transform,
          r = void 0 === o ? [0, 0] : o;
        if (this.context) {
          var s = this.context;
          s.disable(s.DEPTH_TEST),
            s.enable(s.BLEND),
            s.blendEquation(s.FUNC_ADD),
            s.blendFunc(s.ONE, s.ONE),
            s.clearColor(0, 0, 0, 1),
            s.useProgram(this.computation_program),
            s.uniform2f(
              this.c_screen_size_uniform,
              this.computation_framebuffer_width,
              this.computation_framebuffer_height
            ),
            s.uniform1f(this.p_uniform, this.p),
            s.uniform1f(this.range_factor_uniform, this.range_factor),
            s.uniform1f(this.scale_uniform, n),
            s.uniform2f(this.translation_uniform, r[0], r[1]),
            s.bindFramebuffer(s.FRAMEBUFFER, this.computation_framebuffer),
            s.viewport(0, 0, this.computation_framebuffer_width, this.computation_framebuffer_height),
            s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT);
          for (var a = 0; a < this.translated_points.length; ++a) {
            var h = this.translated_points[a];
            s.uniform2f(this.xi_uniform, h[0], h[1]),
              s.uniform1f(this.ui_uniform, h[2]),
              s.bindBuffer(s.ARRAY_BUFFER, this.square_vertices_buffer),
              s.vertexAttribPointer(this.position_attribute, 2, s.FLOAT, !1, 0, 0),
              s.drawArrays(s.TRIANGLE_STRIP, 0, 4);
          }
          s.bindFramebuffer(s.FRAMEBUFFER, null),
            s.clearColor(0, 0, 0, 1),
            s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT),
            s.useProgram(this.draw_program),
            s.activeTexture(s.TEXTURE0),
            s.bindTexture(s.TEXTURE_2D, this.computation_texture),
            s.uniform1i(this.computation_texture_uniform, 0),
            s.uniform1f(this.gamma_uniform, this.gamma),
            s.uniform2f(this.d_screen_size_uniform, this.canvas.width, this.canvas.height),
            s.viewport(0, 0, this.canvas.width, this.canvas.height),
            s.bindBuffer(s.ARRAY_BUFFER, this.square_vertices_buffer),
            s.vertexAttribPointer(this.position_attribute, 2, s.FLOAT, !1, 0, 0),
            s.drawArrays(s.TRIANGLE_STRIP, 0, 4),
            this.debug_points ? this.debug_points(n, r) : this.hide_points();
        }
      }),
      (l.prototype.hide_points = function() {
        for (var t = document.getElementsByClassName('tmg-point-' + h); t[0]; ) t[0].parentNode.removeChild(t[0]);
      });
    var u = 1;
    (l.prototype.debug_points = function(t, e) {
      this.hide_points();
      for (var i = 0; i < this.points.length; ++i) {
        var n = this.points[i],
          o = document.createElement('p');
        (o.style.position = 'absolute'),
          u !== t && ((n[3] = n[0] - e[0] / t), (n[4] = n[1] - e[1] / t)),
          (o.style.left = (n[3] || n[0]) * t + 'px'),
          (o.style.top = (n[4] || n[1]) * t + 'px'),
          (o.style.zIndex = '' + (Number(this.canvas.style.zIndex) + 1)),
          (o.className = 'tmg-point tmg-point-' + h),
          (o.innerHTML = this.point_text(n[2])),
          this.canvas.parentNode.insertBefore(o, this.canvas.nextSibling);
      }
      u = t;
    }),
      (l.prototype.resize = function(t, e) {
        (this.canvas.height = e),
          (this.canvas.width = t),
          (this.canvas.style.height = this.canvas.height + 'px'),
          (this.canvas.style.width = this.canvas.width + 'px'),
          this.init_buffers();
      });
    var c = l;
    (o.a.WebGlTemperatureMapLayer = o.a.Layer.extend({
      initialize: function(t) {
        (this._map = null),
          (this._canvas = null),
          (this._frame = null),
          (this._delegate = null),
          o.a.setOptions(this, t);
      },
      delegate: function(t) {
        return (this._delegate = t), this;
      },
      needRedraw: function() {
        return this._frame || (this._frame = o.a.Util.requestAnimFrame(this.drawLayer, this)), this;
      },
      setPoints: function(t) {
        if ((void 0 === t && (t = []), this.tempMap && this._map))
          return (
            (this.offsetState = this._map.containerPointToLatLng([0, 0])),
            (this.zoomState = this._map.getZoom()),
            this.tempMap.set_points(t),
            this.needRedraw(),
            this
          );
      },
      _onLayerDidResize: function(t) {
        (this._canvas.width = t.newSize.x), (this._canvas.height = t.newSize.y);
      },
      _onLayerDidMove: function() {
        var t = this._map.containerPointToLayerPoint([0, 0]);
        o.a.DomUtil.setPosition(this._canvas, t), this.drawLayer();
      },
      getEvents: function() {
        var t = { resize: this._onLayerDidResize, moveend: this._onLayerDidMove };
        return this._map.options.zoomAnimation && o.a.Browser.any3d && (t.zoomanim = this._animateZoom), t;
      },
      onAdd: function(t) {
        (this._map = t), (this._canvas = o.a.DomUtil.create('canvas', 'leaflet-layer')), (this.tiles = {});
        var e = this._map.getSize();
        (this._canvas.width = e.x), (this._canvas.height = e.y);
        var i = this._map.options.zoomAnimation && o.a.Browser.any3d;
        o.a.DomUtil.addClass(this._canvas, 'leaflet-zoom-' + (i ? 'animated' : 'hide')),
          t._panes.overlayPane.appendChild(this._canvas),
          t.on(this.getEvents(), this),
          (this.tempMap = new c({ canvas: this._canvas, debug_points: !1 }));
        var n = this._delegate || this;
        n.onLayerDidMount && n.onLayerDidMount(), this.needRedraw();
      },
      onRemove: function(t) {
        var e = this._delegate || this;
        e.onLayerWillUnmount && e.onLayerWillUnmount(),
          t.getPanes().overlayPane.removeChild(this._canvas),
          t.off(this.getEvents(), this),
          (this._canvas = null);
      },
      addTo: function(t) {
        return t.addLayer(this), this;
      },
      LatLonToMercator: function(t) {
        return {
          x: (6378137 * t.lng * Math.PI) / 180,
          y: 6378137 * Math.log(Math.tan(((90 + t.lat) * Math.PI) / 360))
        };
      },
      drawLayer: function() {
        var t = this._map.getSize(),
          e = this._map.getBounds(),
          i = this._map.getZoom(),
          n = this.LatLonToMercator(this._map.getCenter()),
          o = this.LatLonToMercator(this._map.containerPointToLatLng(this._map.getSize())),
          r = this._delegate || this;
        if (this.offsetState && this.zoomState) {
          var s = {};
          s.scale = this._map.getZoomScale(i, this.zoomState);
          var a = this._map.latLngToLayerPoint(this.offsetState),
            h = this._map.containerPointToLayerPoint([0, 0]);
          (s.transform = [h.x - a.x, h.y - a.y]), this.tempMap && this.tempMap.draw(s);
        }
        r.onDrawLayer &&
          r.onDrawLayer({
            layer: this,
            canvas: this._canvas,
            bounds: e,
            size: t,
            zoom: i,
            center: n,
            ce: this._map.getCenter(),
            ce_b: e.getCenter(),
            corner: o
          }),
          (this._frame = null);
      },
      _animateZoom: function(t) {
        var e = this._map.getZoomScale(t.zoom),
          i = this._map._latLngToNewLayerPoint(this._map.getBounds().getNorthWest(), t.zoom, t.center);
        o.a.DomUtil.setTransform(this._canvas, i, e);
      }
    })),
      (o.a.webGlTemperatureMapLayer = function() {
        return new o.a.WebGlTemperatureMapLayer();
      });
    o.a.WebGlTemperatureMapLayer;
    function d() {
      return (d =
        Object.assign ||
        function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
          }
          return t;
        }).apply(this, arguments);
    }
    i.e(1)
      .then(i.bind(null, 12))
      .then(function(t) {
        var e = t.arr;
        delete o.a.Icon.Default.prototype._getIconUrl,
          o.a.Icon.Default.mergeOptions({ iconRetinaUrl: i(9), iconUrl: i(1), shadowUrl: i(10) });
        var n = { lat: 55.75, lng: 37.61 },
          r = document.getElementById('flyTo'),
          s =
            (document.getElementById('addPoly'),
            document.getElementById('reset'),
            o.a.map('map', d({ zoomControl: !1 }, {})).setView(n, 16));
        o.a
          .tileLayer(
            'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',
            d(
              {
                attribution:
                  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                maxZoom: 18,
                id: 'CartoDB.VoyagerLabelsUnder'
              },
              {}
            )
          )
          .on('tileerror', function(t) {
            console.error('Tile not load:', t);
          })
          .addTo(s),
          o.a.control.zoom({ position: 'bottomleft' }).addTo(s);
        var a = o.a.marker(n).addTo(s),
          h = o.a.marker({ lat: 55.67, lng: 37.72 }).addTo(s);
        o.a
          .webGlTemperatureMapLayer()
          .addTo(s)
          .setPoints(e);
        var l = 'start';
        r.onclick = function() {
          s.flyTo('start' === l ? h.getLatLng() : a.getLatLng()), (l = 'start' === l ? 'end' : 'start');
        };
      });
  }
]);
