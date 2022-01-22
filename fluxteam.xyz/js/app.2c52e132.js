(function(e) {
    function t(t) {
        for (var r, o, a = t[0], i = t[1], l = t[2], s = 0, p = []; s < a.length; s++) o = a[s], Object.prototype.hasOwnProperty.call(u, o) && u[o] && p.push(u[o][0]), u[o] = 0;
        for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
        f && f(t);
        while (p.length) p.shift()();
        return c.push.apply(c, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < c.length; t++) {
            for (var n = c[t], r = !0, o = 1; o < n.length; o++) {
                var a = n[o];
                0 !== u[a] && (r = !1)
            }
            r && (c.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var r = {},
        o = {
            app: 0
        },
        u = {
            app: 0
        },
        c = [];

    function a(e) {
        return i.p + "js/" + ({}[e] || e) + "." + {
            "chunk-0ea629e8": "c3c1c2a7"
        }[e] + ".js"
    }

    function i(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.e = function(e) {
        var t = [],
            n = {
                "chunk-0ea629e8": 1
            };
        o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise((function(t, n) {
            for (var r = "css/" + ({}[e] || e) + "." + {
                    "chunk-0ea629e8": "3255ea23"
                }[e] + ".css", u = i.p + r, c = document.getElementsByTagName("link"), a = 0; a < c.length; a++) {
                var l = c[a],
                    s = l.getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (s === r || s === u)) return t()
            }
            var p = document.getElementsByTagName("style");
            for (a = 0; a < p.length; a++) {
                l = p[a], s = l.getAttribute("data-href");
                if (s === r || s === u) return t()
            }
            var f = document.createElement("link");
            f.rel = "stylesheet", f.type = "text/css", f.onload = t, f.onerror = function(t) {
                var r = t && t.target && t.target.src || u,
                    c = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                c.code = "CSS_CHUNK_LOAD_FAILED", c.request = r, delete o[e], f.parentNode.removeChild(f), n(c)
            }, f.href = u;
            var d = document.getElementsByTagName("head")[0];
            d.appendChild(f)
        })).then((function() {
            o[e] = 0
        })));
        var r = u[e];
        if (0 !== r)
            if (r) t.push(r[2]);
            else {
                var c = new Promise((function(t, n) {
                    r = u[e] = [t, n]
                }));
                t.push(r[2] = c);
                var l, s = document.createElement("script");
                s.charset = "utf-8", s.timeout = 120, i.nc && s.setAttribute("nonce", i.nc), s.src = a(e);
                var p = new Error;
                l = function(t) {
                    s.onerror = s.onload = null, clearTimeout(f);
                    var n = u[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                o = t && t.target && t.target.src;
                            p.message = "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")", p.name = "ChunkLoadError", p.type = r, p.request = o, n[1](p)
                        }
                        u[e] = void 0
                    }
                };
                var f = setTimeout((function() {
                    l({
                        type: "timeout",
                        target: s
                    })
                }), 12e4);
                s.onerror = s.onload = l, document.head.appendChild(s)
            }
        return Promise.all(t)
    }, i.m = e, i.c = r, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) i.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/", i.oe = function(e) {
        throw console.error(e), e
    };
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var p = 0; p < l.length; p++) t(l[p]);
    var f = s;
    c.push([0, "chunk-vendors"]), n()
})({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "0ead": function(e, t, n) {},
    "4f38": function(e, t, n) {},
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var r = n("7a23");

        function o(e, t) {
            var n = Object(r["y"])("router-view");
            return Object(r["s"])(), Object(r["c"])(n)
        }
        n("680c");
        var u = n("6b0d"),
            c = n.n(u);
        const a = {},
            i = c()(a, [
                ["render", o]
            ]);
        var l = i,
            s = (n("d3b7"), n("3ca3"), n("ddb0"), n("6c02")),
            p = n("cf05"),
            f = n.n(p),
            d = function(e) {
                return Object(r["v"])("data-v-1a6d2639"), e = e(), Object(r["t"])(), e
            },
            b = {
                class: "popup download"
            },
            h = d((function() {
                return Object(r["f"])("h1", null, "Download", -1)
            })),
            O = d((function() {
                return Object(r["f"])("br", null, null, -1)
            })),
            j = d((function() {
                return Object(r["f"])("p", null, "You can use any of the options below to download!", -1)
            })),
            m = d((function() {
                return Object(r["f"])("br", null, null, -1)
            })),
            g = {
                class: "buttons"
            },
            v = d((function() {
                return Object(r["f"])("div", {
                    class: "popup learnmore"
                }, [Object(r["f"])("h1", null, "Information"), Object(r["f"])("br"), Object(r["f"])("p", null, [Object(r["h"])("Fluxus is a top of the line Level 8 RVM based Roblox executor. Engineered for efficiency, Fluxus will give you an experience like no other."), Object(r["f"])("br"), Object(r["h"])("Fluxus has a variety of features allowing massive amounts of script execution."), Object(r["f"])("br"), Object(r["h"])("Our sleak user interface paired with market leading innovations."), Object(r["f"])("br"), Object(r["h"])("Fluxus ensures you're having a premium experience, all for free.")])], -1)
            })),
            k = [v],
            y = d((function() {
                return Object(r["f"])("div", {
                    class: "popup tutorial"
                }, [Object(r["f"])("iframe", {
                    width: "560",
                    height: "315",
                    src: "https://www.youtube.com/embed/IS8-3D2G13c",
                    title: "YouTube video player",
                    frameborder: "0",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                    allowfullscreen: ""
                })], -1)
            })),
            w = [y],
            x = {
                class: "popup redirect"
            },
            C = d((function() {
                return Object(r["f"])("h1", null, "Adsite warning", -1)
            })),
            F = d((function() {
                return Object(r["f"])("br", null, null, -1)
            })),
            P = d((function() {
                return Object(r["f"])("p", null, "The following site contains software advertisements", -1)
            })),
            S = d((function() {
                return Object(r["f"])("p", null, "Please be aware of these before you continue", -1)
            })),
            E = {
                class: "buttons"
            },
            L = {
                class: "inner"
            },
            D = d((function() {
                return Object(r["f"])("img", {
                    src: f.a
                }, null, -1)
            })),
            T = d((function() {
                return Object(r["f"])("h1", null, "Exploiting, with Quality", -1)
            })),
            _ = d((function() {
                return Object(r["f"])("p", null, "A top of the line Level 8 RVM Executor engineered for superiority.", -1)
            })),
            A = Object(r["g"])('<div class="links" data-v-1a6d2639><a href="/external-files/discord.php" data-v-1a6d2639>Support</a><a href="/panel/panel" data-v-1a6d2639>Dashboard</a><a href="https://rbxscripts.xyz/" data-v-1a6d2639>Scripts</a><a href="/external-files/discord.php" data-v-1a6d2639>Discord</a><a href="/EULA" data-v-1a6d2639>EULA</a></div>', 1),
            I = {
                class: "product"
            },
            M = d((function() {
                return Object(r["f"])("h1", null, "Fluxus Free", -1)
            })),
            N = d((function() {
                return Object(r["f"])("p", null, "Fluxus Free is the same Fluxus experience with advertisements. Experience quality for free.", -1)
            })),
            R = {
                class: "product"
            },
            U = d((function() {
                return Object(r["f"])("h1", null, "Fluxus Premium", -1)
            })),
            V = d((function() {
                return Object(r["f"])("p", null, "Purchase FluxusV7 for the same amazing experience without ads or watermarks.", -1)
            })),
            B = d((function() {
                return Object(r["f"])("div", {
                    class: "disclaimer"
                }, "*Fluxus Free contains ads and watermarks", -1)
            }));

        function q(e, t, n, o, u, c) {
            return Object(r["s"])(), Object(r["e"])("div", {
                class: Object(r["o"])(u.purple ? "main purple" : "main dark")
            }, [Object(r["f"])("div", {
                class: Object(r["o"])(u.purple ? "theme purple" : "theme dark"),
                onClick: t[0] || (t[0] = function() {
                    return c.toggleTheme && c.toggleTheme.apply(c, arguments)
                })
            }, null, 2), u.popups.download ? (Object(r["s"])(), Object(r["e"])("div", {
                key: 0,
                class: "popupContainer",
                onClick: t[5] || (t[5] = Object(r["D"])((function(e) {
                    return u.popups.download = !1
                }), ["self"]))
            }, [Object(r["f"])("div", b, [h, O, j, m, Object(r["f"])("div", g, [Object(r["f"])("button", {
                class: "continue",
                onClick: t[1] || (t[1] = function(e) {
                    return u.popups.tutorial = !0
                })
            }, "Help"), Object(r["f"])("button", {
                onClick: t[2] || (t[2] = function(e) {
                    return c.open("https://filedm.com/8O0BS")
                })
            }, "File DM"), Object(r["f"])("button", {
                onClick: t[3] || (t[3] = function(e) {
                    return c.open("https://linkvertise.com/152666/FluxusV7Installer?o=sharing")
                })
            }, "LV Installer"), Object(r["f"])("button", {
                onClick: t[4] || (t[4] = function(e) {
                    return c.open("https://linkvertise.com/152666/FluxusD?o=sharing")
                })
            }, "LV")])])])) : Object(r["d"])("", !0), u.popups.learnmore ? (Object(r["s"])(), Object(r["e"])("div", {
                key: 1,
                class: "popupContainer",
                onClick: t[6] || (t[6] = Object(r["D"])((function(e) {
                    return u.popups.learnmore = !1
                }), ["self"]))
            }, k)) : Object(r["d"])("", !0), u.popups.tutorial ? (Object(r["s"])(), Object(r["e"])("div", {
                key: 2,
                class: "popupContainer",
                onClick: t[7] || (t[7] = Object(r["D"])((function(e) {
                    return u.popups.tutorial = !1
                }), ["self"]))
            }, w)) : Object(r["d"])("", !0), u.popups.adlink ? (Object(r["s"])(), Object(r["e"])("div", {
                key: 3,
                class: "popupContainer",
                onClick: t[10] || (t[10] = Object(r["D"])((function(e) {
                    return u.popups.adlink = !1
                }), ["self"]))
            }, [Object(r["f"])("div", x, [C, F, P, S, Object(r["f"])("div", E, [Object(r["f"])("button", {
                class: "continue",
                onClick: t[8] || (t[8] = function(e) {
                    return c.redirect(u.popups.adlinkURL)
                })
            }, "Continue to site"), Object(r["f"])("button", {
                class: "cancel",
                onClick: t[9] || (t[9] = function(e) {
                    return u.popups.adlink = !1
                })
            }, "Cancel")])])])) : Object(r["d"])("", !0), Object(r["f"])("div", L, ["intro" == u.page ? (Object(r["s"])(), Object(r["e"])("div", {
                key: 0,
                class: Object(r["o"])("introduction " + u.animate.intro)
            }, [D, T, _, Object(r["f"])("nav", null, [Object(r["f"])("a", {
                onClick: t[11] || (t[11] = function(e) {
                    return c.setPage("get")
                }),
                class: "start"
            }, "Get Started"), Object(r["f"])("a", {
                onClick: t[12] || (t[12] = function(e) {
                    return u.popups.tutorial = !0
                }),
                class: "tutorial"
            }, "Tutorial"), A])], 2)) : (Object(r["s"])(), Object(r["e"])("div", {
                key: 1,
                class: Object(r["o"])("get " + u.animate.get)
            }, [Object(r["f"])("p", {
                class: "back",
                onClick: t[13] || (t[13] = function(e) {
                    return c.setPage("intro")
                })
            }, "< Back"), Object(r["f"])("div", I, [M, N, Object(r["f"])("button", {
                style: {
                    margin: "5px"
                },
                onClick: t[14] || (t[14] = function(e) {
                    return u.popups.download = !0
                })
            }, "Download"), Object(r["f"])("button", {
                style: {
                    margin: "5px"
                },
                onClick: t[15] || (t[15] = function(e) {
                    return u.popups.learnmore = !0
                })
            }, "Learn More")]), Object(r["f"])("div", R, [U, V, Object(r["f"])("button", {
                onClick: t[16] || (t[16] = function(e) {
                    return c.redirect("https://shoppy.gg/product/1CX6vgj")
                })
            }, "Purchase")]), B], 2))])], 2)
        }
        var G = {
            data: function() {
                return {
                    page: "intro",
                    animate: {
                        intro: "delayed",
                        get: "delayed"
                    },
                    popups: {
                        download: !1,
                        adlink: !1,
                        adlinkURL: "",
                        buy: !1,
                        tutorial: !1
                    },
                    purple: !0
                }
            },
            methods: {
                setPage: function(e) {
                    switch (e) {
                        case "intro":
                            this.$router.push("/"), this.animate.intro = "instant", this.page = "intro";
                            break;
                        case "get":
                            this.$router.push("/get"), this.animate.get = "instant", this.page = "get";
                            break
                    }
                },
                open: function(e) {
                    this.popups.adlinkURL = e, this.popups.adlink = !0
                },
                redirect: function(e) {
                    window.open(e, "_blank")
                },
                toggleTheme: function() {
                    this.purple = !this.purple, localStorage.setItem("purple", this.purple)
                }
            },
            mounted: function() {
                "/get" == this.$route.href && (this.page = "get"), localStorage.getItem("purple") && (this.purple = "true" == localStorage.getItem("purple"))
            }
        };
        n("fa90");
        const H = c()(G, [
            ["render", q],
            ["__scopeId", "data-v-1a6d2639"]
        ]);
        var $ = H,
            z = [{
                path: "/",
                name: "Home",
                component: $
            }, {
                path: "/:catchAll(.*)",
                name: "NotFound",
                component: function() {
                    return n.e("chunk-0ea629e8").then(n.bind(null, "9703"))
                }
            }, {
                path: "/get",
                name: "Get",
                component: $
            }],
            J = Object(s["a"])({
                history: Object(s["b"])("/"),
                routes: z
            }),
            Y = J;
        Object(r["b"])(l).use(Y).mount("#app")
    },
    "680c": function(e, t, n) {
        "use strict";
        n("0ead")
    },
    cf05: function(e, t, n) {
        e.exports = n.p + "img/logo.ca031557.png"
    },
    fa90: function(e, t, n) {
        "use strict";
        n("4f38")
    }
});