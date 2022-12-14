function setSectionHeight() {
    $(".section-height").each(function() {
        var e = $(this).closest(".section").height() + 160;
        $(this).height(e + "px").show()
    })
}

function callPlayer(e, t, i) {
    window.jQuery && e instanceof jQuery && (e = e.get(0).id);
    var n = document.getElementById(e);
    n && "IFRAME" != n.tagName.toUpperCase() && (n = n.getElementsByTagName("iframe")[0]), n && n.contentWindow.postMessage(JSON.stringify({
        event: "command",
        func: t,
        args: i || [],
        id: e
    }), "*")
}

function initFluidParticles() {
    var e = $("#particles");
    e.length && e.particleground({
        minSpeedX: .6,
        minSpeedY: .6,
        dotColor: "#ffffff",
        lineColor: "#ffffff",
        density: 6e3,
        particleRadius: 2,
        parallaxMultiplier: 5.2,
        proximity: 0
    })
}
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
window.onpageshow = function(e) {
        e.persisted && (isSafari || /iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion)) && location.reload()
    },
    function() {
        function e() {
            var e = window.navigator.userAgent,
                t = e.indexOf("MSIE ");
            if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
            var i = e.indexOf("Trident/");
            if (i > 0) {
                var n = e.indexOf("rv:");
                return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10)
            }
            var o = e.indexOf("Edge/");
            return o > 0 ? parseInt(e.substring(o + 5, e.indexOf(".", o)), 10) : !1
        }
        e() && $("body").addClass("ie")
    }();
var isMobile = !1;
/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (isMobile = !0), window.onunload = function() {}, $(document).ready(function() {
        $(".animsition").animsition({
            inClass: "fade-in",
            outClass: "fade-out",
            inDuration: 100,
            outDuration: 100,
            linkElement: '#menuzord a:not([target="_blank"]):not([href^=#]), .animsition-link',
            loading: !0,
            loadingParentElement: "body",
            loadingClass: "animsition-loading",
            loadingInner: "",
            timeout: !1,
            timeoutCountdown: 100,
            onLoadEvent: !0,
            browser: ["animation-duration", "-webkit-animation-duration"],
            overlay: !1,
            overlayClass: "animsition-overlay-slide",
            overlayParentElement: "body",
            transition: function(e) {
                window.location.href = e
            }
        })
    }), jQuery(document).ready(function() {
        jQuery("#menuzord").menuzord({
            align: "right"
        }), isMobile || skrollr.init({
            forceHeight: !1,
            smoothScrolling: !1
        })
    }),
    function() {
        function e() {
            return $(window).scrollTop() > 30 ? void t.addClass("navbar-solid") : (t.removeClass("navbar-solid"), void $(".navbar-nav > li > a").blur())
        }
        var t = $("#topNavBar");
        e(), $(window).scroll(function() {
            e()
        })
    }(), $(document).ready(function() {
        $(".menuzord-menu a[href*=#]:not([href=#]), .onPageNav").click(function() {
            if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
                var e = $(this.hash);
                if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length) return $(".navbar-collapse.collapse.in").removeClass("in"), $("html,body").animate({
                    scrollTop: e.offset().top - 55
                }, 1e3, function() {}), !1
            }
        }), $("#toggelSearch").click(function(e) {
            e.preventDefault(), $("#searchInput").stop().fadeToggle().find("input").focus(), $(this).toggleClass("open"), $(this).children("i").toggleClass("ion-ios-search-strong ion-android-close")
        })
    }), $(window).load(function() {
        $(".portfolio-slider").length && $(".portfolio-slider").flexslider({
            animation: "slide",
            direction: "horizontal",
            slideshowSpeed: 3e3,
            start: function() {
                imagesLoaded($(".portfolio"), function() {
                    setTimeout(function() {
                        $(".portfolio-filter li:eq(0) a").trigger("click")
                    }, 500)
                })
            }
        })
    }), $(".portfolio-filter li").click(function(e) {
        $(this).siblings(".active").removeClass("active"), $(this).addClass("active"), e.preventDefault()
    }), $(window).load(function() {
        if (0 != $(".portfolio-masonry").length) {
            var e = $(".portfolio-masonry");
            "function" == typeof imagesLoaded && imagesLoaded(e, function() {
                setTimeout(function() {
                    e.isotope({
                        itemSelector: ".portfolio-item",
                        resizesContainer: !1,
                        layoutMode: "masonry",
                        masonry: {
                            columnWidth: ".portfolio-item"
                        },
                        filter: "*"
                    })
                }, 500)
            })
        }
    }), $(".portfolio-slider, .portfolio-slider-alt").each(function() {
        for (var e = $(this).find("li > a"), t = [], i = 0; i < e.length; i++) t.push({
            src: $(e[i]).attr("href"),
            title: $(e[i]).attr("title")
        });
        $(this).parent().find(".action-btn").magnificPopup({
            items: t,
            type: "image",
            gallery: {
                enabled: !0
            }
        }), $(this).parent().find(".portfolio-description").magnificPopup({
            items: t,
            type: "image",
            gallery: {
                enabled: !0
            }
        })
    }), $(".portfolio-gallery").each(function() {
        $(this).find(".popup-gallery").magnificPopup({
            type: "image",
            gallery: {
                enabled: !0
            }
        }), $(this).find(".popup-gallery2").magnificPopup({
            type: "image",
            gallery: {
                enabled: !0
            }
        })
    }), $(".popup-link").magnificPopup({
        type: "image"
    }), $(".popup-video").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    }), $(".portfolio-filter").on("click", "a", function() {
        $("#filters button").removeClass("current"), $(this).addClass("current");
        var e = $(this).attr("data-filter");
        $(this).parents(".text-center").next().isotope({
            filter: e
        })
    }), setSectionHeight(), $(window).on("resize", function() {
        setSectionHeight()
    }), $(document).ready(function() {
        $("#playVideoSmall").click(function(e) {
            e.preventDefault(), callPlayer("ytPlayerSmall", "playVideo"), $("#video-small").hide(), $("#video-small-container").fadeIn()
        }), $("#playVideo").click(function(e) {
            e.preventDefault(), callPlayer("ytPlayer", "playVideo"), $("#video").hide(), $("#video-container").fadeIn()
        })
    }), $(document).ready(function() {
        0 != $(".progress").length && $(".progressbars").each(function() {
            var e = $(this);
            new Waypoint.Inview({
                element: e,
                enter: function(t) {
                    e.find(".progress-bar").each(function() {
                        $(this).css("width", $(this).attr("aria-valuenow") + "%")
                    })
                }
            })
        })
    }),
    function() {
        function e() {
            var e = {
                    zoom: 11,
                    scrollwheel: 1,
                    center: i,
                    styles: [{
                        featureType: "all",
                        elementType: "geometry.fill",
                        stylers: [{
                            visibility: "on"
                        }, {
                            saturation: "-11"
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{
                            saturation: "22"
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{
                            saturation: "-58"
                        }, {
                            color: "#cfcece"
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "labels.text",
                        stylers: [{
                            color: "#f8f8f8"
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "labels.text.fill",
                        stylers: [{
                            color: "#999999"
                        }, {
                            visibility: "on"
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "labels.text.stroke",
                        stylers: [{
                            visibility: "on"
                        }]
                    }, {
                        featureType: "administrative.country",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#f9f9f9"
                        }, {
                            visibility: "simplified"
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "all",
                        stylers: [{
                            color: "#f2f2f2"
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{
                            saturation: "-19"
                        }, {
                            lightness: "-2"
                        }, {
                            visibility: "on"
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "all",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "road",
                        elementType: "all",
                        stylers: [{
                            saturation: -100
                        }, {
                            lightness: 45
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "all",
                        stylers: [{
                            visibility: "simplified"
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "all",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "water",
                        elementType: "all",
                        stylers: [{
                            color: "#d8e1e5"
                        }, {
                            visibility: "on"
                        }]
                    }, {
                        featureType: "water",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#dedede"
                        }]
                    }, {
                        featureType: "water",
                        elementType: "labels.text",
                        stylers: [{
                            color: "#cbcbcb"
                        }]
                    }, {
                        featureType: "water",
                        elementType: "labels.text.fill",
                        stylers: [{
                            color: "#9c9c9c"
                        }]
                    }, {
                        featureType: "water",
                        elementType: "labels.text.stroke",
                        stylers: [{
                            visibility: "off"
                        }]
                    }]
                },
                n = document.getElementById("map"),
                o = new google.maps.Map(n, e);
            new google.maps.Marker({
                position: t,
                map: o,
                title: "Snazzy!"
            })
        }
        if (0 != $("#map").length && "undefined" != typeof google) {
            google.maps.event.addDomListener(window, "load", e);
            var t = new google.maps.LatLng(40.431566, -3.7055848),
                i = isMobile ? t : new google.maps.LatLng(40.431566, -3.5055848)
        }
    }(), $(document).ready(function() {
        0 != $(".container-countdown").length && $(".container-countdown").countdown({
            date: "December 15, 2015 00:00:00",
            render: function(e) {
                var t = $(this.el);
                t.empty().append("<div class='countdown-box'><span class='counter'>" + this.leadingZeros(e.days, 2) + "</span><h6>Days</h6></div>").append("<div class='countdown-box'><span class='counter'>" + this.leadingZeros(e.hours, 2) + "</span><h6>Hours</h6></div>").append("<div class='countdown-box'><span class='counter'>" + this.leadingZeros(e.min, 2) + "</span><h6>Minutes</h6></div>").append("<div class='countdown-box'><span class='counter'>" + this.leadingZeros(e.sec, 2) + "</span><h6>Seconds</h6></div>")
            }
        })
    }), $(window).load(function() {
        imagesLoaded("body", function() {
            $(".lightbox-gallery").magnificPopup({
                delegate: "a",
                gallery: {
                    enabled: !0
                },
                type: "image",
                zoom: {
                    enabled: !0,
                    duration: 300,
                    opener: function(e) {
                        return e.find("img")
                    }
                }
            })
        })
    }), $(window).load(function() {
        imagesLoaded("body", function() {
            $(".popup-gallery").magnificPopup({
                delegate: "a",
                gallery: {
                    enabled: !0
                },
                type: "image",
                zoom: {
                    enabled: !0,
                    duration: 300,
                    opener: function(e) {
                        return e.find("img")
                    }
                }
            })
        })
    }),
    function() {
        function e() {
            u = window.innerWidth, f = window.innerHeight, h = {
                x: u / 2,
                y: f / 2
            }, p = document.getElementById("polygonalHeader"), p.style.height = f + "px", m = document.getElementById("demo-canvas"), m.width = u, m.height = f, g = m.getContext("2d"), y = [];
            for (var e = 0; u > e; e += u / 20)
                for (var t = 0; f > t; t += f / 20) {
                    var i = e + Math.random() * u / 20,
                        n = t + Math.random() * f / 20,
                        o = {
                            x: i,
                            originX: i,
                            y: n,
                            originY: n
                        };
                    y.push(o)
                }
            for (var a = 0; a < y.length; a++) {
                for (var l = [], r = y[a], s = 0; s < y.length; s++) {
                    var v = y[s];
                    if (r != v) {
                        for (var $ = !1, b = 0; 5 > b; b++) $ || void 0 == l[b] && (l[b] = v, $ = !0);
                        for (var b = 0; 5 > b; b++) $ || d(r, v) < d(r, l[b]) && (l[b] = v, $ = !0)
                    }
                }
                r.closest = l
            }
            for (var a in y) {
                var w = new c(y[a], 2 + 2 * Math.random(), "rgba(255,255,255,0.3)");
                y[a].circle = w
            }
        }

        function t() {
            "ontouchstart" in window || window.addEventListener("mousemove", i), window.addEventListener("scroll", n), window.addEventListener("resize", o)
        }

        function i(e) {
            var t = posy = 0;
            e.pageX || e.pageY ? (t = e.pageX, posy = e.pageY) : (e.clientX || e.clientY) && (t = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop), h.x = t, h.y = posy
        }

        function n() {
            v = document.body.scrollTop > f ? !1 : !0
        }

        function o() {
            u = window.innerWidth, f = window.innerHeight, p.style.height = f + "px", m.width = u, m.height = f
        }

        function a() {
            l();
            for (var e in y) r(y[e])
        }

        function l() {
            if (v) {
                g.clearRect(0, 0, u, f);
                for (var e in y) Math.abs(d(h, y[e])) < 4e3 ? (y[e].active = .3, y[e].circle.active = .6) : Math.abs(d(h, y[e])) < 2e4 ? (y[e].active = .1, y[e].circle.active = .3) : Math.abs(d(h, y[e])) < 4e4 ? (y[e].active = .02, y[e].circle.active = .1) : (y[e].active = 0, y[e].circle.active = 0), s(y[e]), y[e].circle.draw()
            }
            requestAnimationFrame(l)
        }

        function r(e) {
            TweenLite.to(e, 1 + 1 * Math.random(), {
                x: e.originX - 50 + 100 * Math.random(),
                y: e.originY - 50 + 100 * Math.random(),
                ease: Circ.easeInOut,
                onComplete: function() {
                    r(e)
                }
            })
        }

        function s(e) {
            if (e.active)
                for (var t in e.closest) g.beginPath(), g.moveTo(e.x, e.y), g.lineTo(e.closest[t].x, e.closest[t].y), g.strokeStyle = "rgba(156,217,249," + e.active + ")", g.stroke()
        }

        function c(e, t, i) {
            var n = this;
            ! function() {
                n.pos = e || null, n.radius = t || null, n.color = i || null
            }(), this.draw = function() {
                n.active && (g.beginPath(), g.arc(n.pos.x, n.pos.y, n.radius, 0, 2 * Math.PI, !1), g.fillStyle = "rgba(156,217,249," + n.active + ")", g.fill())
            }
        }

        function d(e, t) {
            return Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)
        }
        if ($("#polygonalHeader").length) {
            var u, f, p, m, g, y, h, v = !0;
            e(), a(), t()
        }
    }(),
    function() {
        $("#videoBackground").length && ($("#videoBackground").mb_YTPlayer(), $("#video-play").click(function(e) {
            return e.preventDefault(), $(this).hasClass("fa-play") ? $("#videoBackground").playYTP() : $("#videoBackground").pauseYTP(), $(this).toggleClass("fa-play fa-pause"), !1
        }), $("#video-volume").click(function(e) {
            return e.preventDefault(), $("#videoBackground").toggleVolume(), $(this).toggleClass("fa-volume-off fa-volume-up"), !1
        }))
    }(),
    function() {
        if ($("#funfacts").length) {
            new Waypoint.Inview({
                element: $("#funfacts")[0],
                enter: function(e) {
                    $(".fact-number").each(function() {
                        $(this).prop("Counter", 0).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 3e3,
                            easing: "swing",
                            step: function(e) {
                                $(this).text(Math.ceil(e))
                            }
                        })
                    }), this.destroy()
                }
            })
        }
    }(),
    function() {
        if (0 != $("#instafeed").length) {
            var e = new Instafeed({
                get: "tagged",
                tagName: "nature",
                limit: 6,
                clientId: "fa06c7e2c5d24947907f097b79d0f99a"
            });
            e.run()
        }
    }(), $(window).load(function() {
        0 != $(".flexslider").length && $(".flexslider").flexslider({
            animation: "fade",
            easing: "swing",
            controlNav: !0,
            pauseOnAction: !1
        })
    }), $(document).ready(function() {
        $("#dotNav > ul> li > a").tooltip({
            placement: "left"
        });
        var e = [];
        $(".section").each(function() {
            e.push($(this).offset().top)
        }), $(document).scroll(function() {
            for (var t, i = $(document).scrollTop(), n = 0; n < e.length; n++)
                if (i <= e[n] - 200) {
                    t = n;
                    break
                }
            $("#dotNav ul li").removeClass("active"), $("#dotNav ul li:eq(" + t + ")").addClass("active")
        }), $("#dotNav a").click(function() {
            $("#dotNav li").removeClass("active"), $(this).parent("li").addClass("active")
        })
    }),
    function() {
        0 != $("#particles-js").length && particlesJS("particles-js", {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: !0,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 1,
                        color: "#ffffff"
                    },
                    polygon: {
                        nb_sides: 8
                    },
                    image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: .05524033491425909,
                    random: !0,
                    anim: {
                        enable: !1,
                        speed: 1,
                        opacity_min: .1,
                        sync: !1
                    }
                },
                size: {
                    value: 3,
                    random: !0,
                    anim: {
                        enable: !1,
                        speed: 40,
                        size_min: .1,
                        sync: !1
                    }
                },
                line_linked: {
                    enable: !0,
                    distance: 150,
                    color: "#ffffff",
                    opacity: .4,
                    width: 1
                },
                move: {
                    enable: !0,
                    speed: 2.5,
                    direction: "none",
                    random: !1,
                    straight: !1,
                    out_mode: "bounce",
                    bounce: !1,
                    attract: {
                        enable: !1,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: !0,
                        mode: "grab"
                    },
                    onclick: {
                        enable: !0,
                        mode: "push"
                    },
                    resize: !0
                },
                modes: {
                    grab: {
                        distance: 200,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: .4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: !0
        })
    }(), initFluidParticles(),
    function() {
        $("#owl-hs-slider-zoom").length && $("#owl-hs-slider-zoom").owlCarousel({
            autoPlay: !0,
            stopOnHover: !1,
            singleItem: !0,
            pagination: !1,
            transitionStyle: "fadeUp"
        })
    }(),
    function() {
        $("#introText").length && $("#introText").owlCarousel({
            autoPlay: !0,
            stopOnHover: !1,
            singleItem: !0,
            pagination: !1,
            transitionStyle: "fade"
        })
    }(), jQuery(document).ready(function(e) {
        var t = !1;
        e(".cd-nav-trigger").on("click", function(i) {
            i.preventDefault(), t || (e(this).parents(".csstransitions").length > 0 && (t = !0), e("body").toggleClass("navigation-is-open"), e(".cd-navigation-wrapper").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                t = !1
            }))
        })
    }),
    function() {
        $("#productLarge").length && $(document).ready(function() {
            function e(e) {
                var i = this.currentItem;
                $("#productThumbnail").find(".owl-item").removeClass("synced").eq(i).addClass("synced"), void 0 !== $("#productThumbnail").data("owlCarousel") && t(i)
            }

            function t(e) {
                var t = n.data("owlCarousel").owl.visibleItems,
                    i = e,
                    o = !1;
                for (var a in t)
                    if (i === t[a]) var o = !0;
                o === !1 ? i > t[t.length - 1] ? n.trigger("owl.goTo", i - t.length + 2) : (i - 1 === -1 && (i = 0), n.trigger("owl.goTo", i)) : i === t[t.length - 1] ? n.trigger("owl.goTo", t[1]) : i === t[0] && n.trigger("owl.goTo", i - 1)
            }
            var i = $("#productLarge"),
                n = $("#productThumbnail");
            i.owlCarousel({
                singleItem: !0,
                slideSpeed: 1e3,
                navigation: !1,
                pagination: !1,
                afterAction: e,
                responsiveRefreshRate: 200
            }), n.owlCarousel({
                items: 4,
                itemsDesktopSmall: [979, 5],
                itemsTablet: [768, 4],
                itemsMobile: [479, 4],
                pagination: !1,
                responsiveRefreshRate: 100,
                afterInit: function(e) {
                    e.find(".owl-item").eq(0).addClass("synced")
                }
            }), $("#productThumbnail").on("click", ".owl-item", function(e) {
                e.preventDefault();
                var t = $(this).data("owlItem");
                i.trigger("owl.goTo", t)
            })
        })
    }(),
    function() {
        $("#itemLarge").length && $(document).ready(function() {
            function e(e) {
                var i = this.currentItem;
                $("#itemThumbnail").find(".owl-item").removeClass("synced").eq(i).addClass("synced"), void 0 !== $("#itemThumbnail").data("owlCarousel") && t(i)
            }

            function t(e) {
                var t = n.data("owlCarousel").owl.visibleItems,
                    i = e,
                    o = !1;
                for (var a in t)
                    if (i === t[a]) var o = !0;
                o === !1 ? i > t[t.length - 1] ? n.trigger("owl.goTo", i - t.length + 2) : (i - 1 === -1 && (i = 0), n.trigger("owl.goTo", i)) : i === t[t.length - 1] ? n.trigger("owl.goTo", t[1]) : i === t[0] && n.trigger("owl.goTo", i - 1)
            }
            var i = $("#itemLarge"),
                n = $("#itemThumbnail");
            i.owlCarousel({
                singleItem: !0,
                slideSpeed: 1e3,
                navigation: !1,
                pagination: !1,
                afterAction: e,
                responsiveRefreshRate: 200
            }), n.owlCarousel({
                items: 6,
                itemsDesktop: [1199, 6],
                itemsDesktopSmall: [979, 5],
                itemsTablet: [768, 4],
                itemsMobile: [479, 3],
                pagination: !1,
                responsiveRefreshRate: 100,
                afterInit: function(e) {
                    e.find(".owl-item").eq(0).addClass("synced")
                }
            }), $("#itemThumbnail").on("click", ".owl-item", function(e) {
                e.preventDefault();
                var t = $(this).data("owlItem");
                i.trigger("owl.goTo", t)
            })
        })
    }(), $("#subscription-form").submit(function(e) {
        e.preventDefault();
        var t = $("#subscription-form"),
            i = $("#subscribe-button"),
            n = $("#subscription-response"),
            o = $("#subscriber-email").val();
        $.ajax({
            type: "POST",
            url: "php/subscribe.php",
            dataType: "json",
            data: {
                email: o
            },
            cache: !1,
            beforeSend: function(e) {
                i.html("Working...")
            },
            success: function(e) {
                1 == e.sendstatus ? (n.html(e.message), t.fadeOut(500)) : (n.html(e.message), i.html('<i class="ion-heart"></i> Get it'))
            },
            error: function() {
                i.html('<i class="ion-heart"></i> Get it')
            }
        })
    }), $(document).ready(function() {
        $("#owl-testimonial").length && $("#owl-testimonial").owlCarousel({
            autoPlay: 3e3,
            stopOnHover: !0,
            pagination: !1,
            navigation: !0,
            navigationText: !1,
            paginationSpeed: 1e3,
            goToFirstSpeed: 2e3,
            singleItem: !0,
            autoHeight: !0,
            transitionStyle: "fade"
        })
    });