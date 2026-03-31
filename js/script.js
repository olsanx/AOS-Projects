(function ($) {

    "use strict";

    /* ----- Preloader ----- */
    function preloaderLoad() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(300);
        }
        $(".preloader_disabler").on('click', function () {
            $("#preloader").hide();
        });
    }

    /* ----- Navbar Scroll To Fixed ----- */
    function navbarScrollfixed() {
        $('.navbar-scrolltofixed').scrollToFixed();
        var summaries = $('.summary');
        summaries.each(function (i) {
            var summary = $(summaries[i]);
            var next = summaries[i + 1];
            summary.scrollToFixed({
                marginTop: $('.navbar-scrolltofixed').outerHeight(true) + 10,
                limit: function () {
                    var limit = 0;
                    if (next) {
                        limit = $(next).offset().top - $(this).outerHeight(true) - 10;
                    } else {
                        limit = $('.footer').offset().top - $(this).outerHeight(true) - 10;
                    }
                    return limit;
                },
                zIndex: 999
            });
        });
    }

    /** Main Menu Custom Script Start **/
    $(document).on('ready', function () {
        $("#respMenu").aceResponsiveMenu({
            resizeWidth: '768', // Set the same in Media query
            animationSpeed: 'fast', //slow, medium, fast
            accoridonExpAll: false //Expands all the accordion menu on click
        });
    });

    function mobileNavToggle() {
        if ($('#main-nav-bar .navbar-nav .sub-menu').length) {
            var subMenu = $('#main-nav-bar .navbar-nav .sub-menu');
            subMenu.parent('li').children('a').append(function () {
                return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
            });
            var subNavToggler = $('#main-nav-bar .navbar-nav .sub-nav-toggler');
            subNavToggler.on('click', function () {
                var Self = $(this);
                Self.parent().parent().children('.sub-menu').slideToggle();
                return false;
            });

        };
    }

    /* ----- Tags Bar Code for job list 1 page ----- */
    $('.tags-bar > span i').on('click', function () {
        $(this).parent().fadeOut();
    });

    /* ----- This code for menu ----- */
    $(window).on('scroll', function () {
        if ($('.scroll-to-top').length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
                $('.scroll-to-top').fadeIn(500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                $('.scroll-to-top').fadeOut(500);
            }
        };
        if ($('.stricky').length) {
            var headerScrollPos = $('.header-navigation').next().offset().top;
            var stricky = $('.stricky');
            if ($(window).scrollTop() > headerScrollPos) {
                stricky.removeClass('slideIn animated');
                stricky.addClass('stricky-fixed slideInDown animated');
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass('stricky-fixed slideInDown animated');
                stricky.addClass('slideIn animated');
            }
        };
    });

    $(".mouse_scroll").on('click', function () {
        $('html, body').animate({
            scrollTop: $("#feature-property, #property-city").offset().top
        }, 1000);
    });
    /** Main Menu Custom Script End **/

    /* ----- Blog innerpage sidebar according ----- */
    $(document).on('ready', function () {
        $('.collapse').on('show.bs.collapse', function () {
            $(this).siblings('.card-header').addClass('active');
        });
        $('.collapse').on('hide.bs.collapse', function () {
            $(this).siblings('.card-header').removeClass('active');
        });

        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    });

    /* ----- Menu Cart Button Dropdown ----- */
    $(document).on('ready', function () {
        // Loop through each nav item
        $('.cart_btn').children('ul.cart').children('li').each(function (indexCount) {
            // loop through each dropdown, count children and apply a animation delay based on their index value
            $(this).children('ul.dropdown_content').children('li').each(function (index) {
                // Turn the index value into a reasonable animation delay
                var delay = 0.1 + index * 0.03;
                // Apply the animation delay
                $(this).css("animation-delay", delay + "s")
            });
        });
    });

    /* Menu Search Popup */
    // jQuery(document).on('ready', function($) {
    //     var wHeight = window.innerHeight;
    //     /* search bar middle alignment */
    //     $('#mk-fullscreen-searchform').css('top', wHeight / 2);
    //     /* reform search bar */
    //     jQuery(window).resize(function() {
    //         wHeight = window.innerHeight;
    //         $('#mk-fullscreen-searchform').css('top', wHeight / 2);
    //     });

    //     /* Search */
    //     $('#search-button, #search-button2').on('click', function() {
    //         console.log("Open Search, Search Centered");
    //         $("div.mk-fullscreen-search-overlay").addClass("mk-fullscreen-search-overlay-show");
    //     });
    //     $("button.mk-fullscreen-close").on('click', function() {
    //         console.log("Closed Search");
    //         $("div.mk-fullscreen-search-overlay").removeClass("mk-fullscreen-search-overlay-show");
    //     });
    // });

    const cd = new Date().getFullYear() + 1
    $('#countdown').countdown({
        year: cd
    });

    /* ----- fact-counter ----- */
    function counterNumber() {
        $('div.timer').counterUp({
            delay: 5,
            time: 2000
        });
    }
    $('.circlechart').circlechart(); // Initialization

    /* ----- Mobile Nav ----- */
    $(function () {
        $('nav#menu').mmenu();
    });

    $(function () {
        $("#switcher-id").change(function () {
            if ($(this).is(":checked")) {
                $(".second-switch-content").show();
                $(".first-switch-content").hide();
            } else {
                $(".second-switch-content").hide();
                $(".first-switch-content").show();
            }
        });
    });

    /* ----- Candidate SIngle Page Price Slider ----- */
    $(function () {
        $("#slider-range").slider({
            range: true,
            min: 50,
            max: 150,
            values: [50, 120],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    });

    /* ----- Employee List v1 page range slider widget ----- */
    $(document).on('ready', function () {
        $(".slider-range").slider({
            range: true,
            min: 11200,
            max: 30000,
            values: [11200, 15200],
            slide: function (event, ui) {
                $(".amount").val(ui.values[0]);
                $(".amount2").val(ui.values[1]);
            }
        });
        $(".amount").change(function () {
            $(".slider-range").slider('values', 0, $(this).val());
        });
        $(".amount2").change(function () {
            $(".slider-range").slider('values', 1, $(this).val());
        });
    });

    /* ----- Pricing Range Slider ----- */
    $(document).on("ready", function () {
        $(".range-example-km").asRange({
            limit: false,
            min: 0,
            max: 150,
            range: false,
            step: 1,
            value: 50,
            format: function (value) {
                return value + ' km';
            }
        });
        $(".range-uilayouts").asRange({
            limit: false,
            max: 1000,
            min: 0,
            range: true,
            step: 1,
            format: function (value) {
                return '$' + value;
            }
        });
    });

    /* ----- Progress Bar ----- */
    if ($('.progress-levels .progress-box .bar-fill').length) {
        $(".progress-box .bar-fill").each(function () {
            var progressWidth = $(this).attr('data-percent');
            $(this).css('width', progressWidth + '%');
            $(this).children('.percent').html(progressWidth + '%');
        });
    }

    // Display the progress bar calling progressbar.js
    $('.progressbar1').progressBar({
        shadow: false,
        percentage: false,
        animation: true,
        barColor: "#ff5a5f",
    });
    $('.progressbar2').progressBar({
        shadow: false,
        percentage: false,
        animation: true,
        barColor: "#ff5a5f",
    });
    $('.progressbar3').progressBar({
        shadow: false,
        percentage: false,
        animation: true,
        animateTarget: true,
        barColor: "#ff5a5f",
    });
    $('.progressbar4').progressBar({
        shadow: false,
        percentage: false,
        animation: true,
        animateTarget: true,
        barColor: "#ff5a5f",
    });
    $('.progressbar5').progressBar({
        shadow: false,
        percentage: false,
        animation: true,
        animateTarget: true,
        barColor: "#ff5a5f",
    });

    /* ----- Background Parallax ----- */
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    jQuery(document).on('ready', function () {
        jQuery(window).stellar({
            horizontalScrolling: false,
            hideDistantElements: true,
            verticalScrolling: !isMobile.any(),
            scrollProperty: 'scroll',
            responsive: true
        });
    });

    /* ----- MagnificPopup ----- */
    if (($(".popup-img").length > 0) || ($(".popup-iframe").length > 0) || ($(".popup-img-single").length > 0)) {
        $(".popup-img").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            }
        });
        $(".popup-img-single").magnificPopup({
            type: "image",
            gallery: {
                enabled: false,
            }
        });
        $('.popup-iframe').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            preloader: false,
            fixedContentPos: false
        });
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    };

    $('#myTab a,#myTab2 a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    /* ----- Wow animation ----- */
    function wowAnimation() {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true, // trigger animations on mobile devices (default is true)
            offset: 0
        });
        wow.init();

        new WOW().init();
        $('#show_advbtn, #show_advbtn2').on('click', function () {
            new WOW().init();
        })
    }

    /* ----- Date & time Picker ----- */
    if ($('.datepicker').length) {
        $('.datepicker').datetimepicker();
    }

    /* ----- Home Maximage Slider ----- */
    if ($('#maximage').length) {
        $('#maximage').maximage({
            cycleOptions: {
                fx: 'fade',
                speed: 500,
                timeout: 20000,
                prev: '#arrow_left',
                next: '#arrow_right'
            },
            onFirstImageLoaded: function () {
                jQuery('#cycle-loader').hide();
                jQuery('#maximage').fadeIn('fast');
            }
        });
        // Helper function to Fill and Center the HTML5 Video
        jQuery('#html5video').maximage('maxcover');

        // To show it is dynamic html text
        jQuery('.in-slide-content').delay(2000).fadeIn();
    }

    /* ----- Slick Slider For Testimonial ----- */
    if ($('.tes-for').length) {
        $('.tes-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            autoplay: false,
            autoplaySpeed: 2000,
            asNavFor: '.tes-nav'
        });
        $('.tes-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.tes-for',
            dots: false,
            arrows: false,
            centerPadding: '1px',
            centerMode: true,
            focusOnSelect: true
        });
    }

    /*  Popular-Listing-Slider  */
    if ($('.popular_listing_slider1').length) {
        $('.popular_listing_slider1').owlCarousel({
            loop: false,          // <-- prevents cloning, helps with exact item counts
            margin: 30,
            center: false,         // centers items
            dots: true,
            nav: false,
            autoplay: false,
            smartSpeed: 1200,
            responsive: {
                0: {
                    items: 1,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 4000,
                    autoplayHoverPause: true
                },
                768: {
                    items: 2,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 4000,
                    autoplayHoverPause: true
                },
                1200: {
                    items: 4
                }
            }
        })
    }



    /*  Popular-Listing-Slider  */
    if ($('.popular_listing_slider_home8').length) {
        $('.popular_listing_slider_home8').owlCarousel({
            loop: true,
            margin: 0,
            dots: true,
            nav: false,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="fa fa-arrow-left"></i>',
                '<i class="fa fa-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                767: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1280: {
                    items: 4
                }
            }
        })
    }

    /*  Team-Slider-Owl-carousel  */
    if ($('.testimonial_slider_home1').length) {
        $('.testimonial_slider_home1').owlCarousel({
            loop: true,
            margin: 0,
            dots: true,
            nav: false,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                520: {
                    items: 2,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        })
    }

    /*  Team-Slider-Owl-carousel  */
    if ($('.feature_place_home2_slider').length) {
        $('.feature_place_home2_slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                320: {
                    items: 1,
                    center: false
                },
                375: {
                    items: 2,
                    center: false
                },
                520: {
                    items: 2,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1366: {
                    items: 5
                },
                1400: {
                    items: 5
                }
            }
        })
    }

    /*  One-Grid-Owl-carousel  */
    if ($('.new_listing_slider_home6').length) {
        $('.new_listing_slider_home6').owlCarousel({
            loop: true,
            margin: 15,
            dots: false,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            smartSpeed: 2000,
            singleItem: true,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                320: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    /*  One-Grid-Owl-carousel  */
    if ($('.testimonial_slider_home6').length) {
        $('.testimonial_slider_home6').owlCarousel({
            animateIn: 'fadeIn',
            loop: true,
            margin: 15,
            dots: true,
            nav: false,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            smartSpeed: 2000,
            singleItem: true,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                320: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    /*  One-Grid-Owl-carousel  */
    if ($('.sidebar_feature_property_slider').length) {
        $('.sidebar_feature_property_slider').owlCarousel({
            animateIn: 'fadeIn',
            loop: true,
            margin: 15,
            dots: true,
            nav: false,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            smartSpeed: 2000,
            singleItem: true,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                320: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    /*  Team-Slider-Owl-carousel  */
    if ($('.team_slider_home1').length) {
        $('.team_slider_home1').owlCarousel({
            loop: true,
            margin: 0,
            dots: true,
            nav: false,
            rtl: false,
            autoplayHoverPause: true,
            autoplay: true,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                320: {
                    items: 1,
                    center: false
                },
                375: {
                    items: 1,
                    center: false
                },
                414: {
                    items: 2,
                    center: false
                },
                520: {
                    items: 2,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1366: {
                    items: 5
                },
                1400: {
                    items: 5
                }
            }
        })
    }

    /*  Team-Slider-Owl-carousel  */
    if ($('.feature_place_home3_slider').length) {
        $('.feature_place_home3_slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: false,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                520: {
                    items: 2,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1366: {
                    items: 4
                },
                1400: {
                    items: 4
                }
            }
        })
    }

    /*  Team-Slider-Owl-carousel  */
    if ($('.feature_property_home3_slider').length) {
        $('.feature_property_home3_slider').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                520: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        })
    }

    /*  Testimonial-Slider-Owl-carousel  */
    if ($('.testimonial_slider_home3').length) {
        $('.testimonial_slider_home3').owlCarousel({
            loop: true,
            margin: 20,
            dots: true,
            nav: false,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        })
    }

    var $owl = $('.testimonial_slider_home1');

    if ($owl.length) {
        // destroy if initialized
        $owl.trigger('destroy.owl.carousel');
        $owl.removeClass('owl-loaded owl-hidden'); // cleanup classes
        $owl.find('.owl-stage-outer').children().unwrap(); // remove stage wrappers (if present)

        // Optional: remove any leftover cloned or empty items
        $owl.find('.cloned').remove();
        $owl.find('.item').filter(function () {
            return $.trim($(this).text()) === '' && $(this).find('img').length === 0;
        }).remove();

        // re-init with loop:false to avoid clone-related gaps, center true
        $owl.owlCarousel({
            loop: false,          // <-- prevents cloning, helps with exact item counts
            margin: 30,
            center: false,         // centers items
            dots: true,
            nav: false,
            autoplay: false,
            smartSpeed: 1200,
            responsive: {
                0: {
                    items: 1,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 4000,
                    autoplayHoverPause: true
                },
                768: {
                    items: 2,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 4000,
                    autoplayHoverPause: true
                },
                1200: { items: 3 }
            }

        });
    }



    document.addEventListener('DOMContentLoaded', function () {
        const galleries = document.querySelectorAll('.galleri-container');

        galleries.forEach((gallery, index) => {
            // Assign unique ID for each gallery
            const galleryId = 'gallery-' + index;

            gallery.querySelectorAll('a').forEach(a => {
                a.dataset.galleryId = galleryId;
            });

            lightGallery(gallery, {
                selector: 'a[data-gallery-id="' + galleryId + '"]',
                thumbnail: true,
                zoom: true,
                download: false,
                actualSize: false,
                loop: true
            });
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const words = ["Excellence", "Commitment", "Performance"];
        const changingWord = document.getElementById("changing-word");
        let index = 0;

        setInterval(() => {
            changingWord.classList.add("slide-up"); // start animation

            setTimeout(() => {
                index = (index + 1) % words.length;
                changingWord.textContent = words[index]; // change the word
                changingWord.classList.remove("slide-up");
                changingWord.classList.add("slide-down"); // re-enter animation
            }, 600); // match transition duration

            setTimeout(() => {
                changingWord.classList.remove("slide-down"); // reset state
            }, 1200);
        }, 3000); // every 3 seconds
    });



    /*  Testimonial-Slider-Owl-carousel  */
    if ($('.testimonial_slider_home1').length) {
        $('.testimonial_slider_home1').owlCarousel({
            loop: true,
            margin: 30,
            center: true,
            dots: true,
            nav: false,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        })
    }

    /*  One-Grid-Owl-carousel  */
    if ($('.listing_single_property_slider').length) {
        $('.listing_single_property_slider').owlCarousel({
            animateIn: 'fadeIn',
            loop: true,
            margin: 2,
            dots: false,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            smartSpeed: 2000,
            singleItem: true,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                320: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        })
    }

    /*  One-Grid-Owl-carousel  */
    if ($('.fp_single_item_slider').length) {
        $('.fp_single_item_slider').owlCarousel({
            loop: true,
            margin: 15,
            dots: false,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            smartSpeed: 2000,
            singleItem: true,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                320: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    /*  Two-Grid-Owl-carousel  */
    if ($('.blog_post_slider_home8').length) {
        $('.blog_post_slider_home8').owlCarousel({
            loop: true,
            margin: 15,
            dots: true,
            nav: false,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            smartSpeed: 2000,
            singleItem: true,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                320: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        })
    }

    /*  Recent-Property-slider-home1-Slider-Owl-carousel  */
    if ($('.recent_property_slider_home1').length) {
        $('.recent_property_slider_home1').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                520: {
                    items: 1,
                    center: false
                },
                767: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1366: {
                    items: 4
                },
                1400: {
                    items: 4
                }
            }
        })
    }

    /*  Recent-Property-slider-home1-Slider-Owl-carousel  */
    if ($('.recent_property_slider_home2').length) {
        $('.recent_property_slider_home2').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                520: {
                    items: 1,
                    center: false
                },
                767: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1366: {
                    items: 4
                },
                1400: {
                    items: 5
                }
            }
        })
    }

    /*  Recent-Property-slider-home1-Slider-Owl-carousel  */
    if ($('.recent_property_slider_home5').length) {
        $('.recent_property_slider_home5').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                520: {
                    items: 1,
                    center: false
                },
                767: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1366: {
                    items: 4
                },
                1400: {
                    items: 5
                }
            }
        })
    }

    /*  Team-Slider-Owl-carousel  */
    if ($('.property_sp3_slider').length) {
        $('.property_sp3_slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                520: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1366: {
                    items: 1
                },
                1400: {
                    items: 1
                }
            }
        })
    }

    /*  Expert-Freelancer-Owl-carousel  */
    if ($('.banner-style-one').length) {
        $('.banner-style-one').owlCarousel({
            loop: true,
            items: 1,
            margin: 0,
            dots: true,
            nav: true,
            animateOut: 'slideOutDown',
            animateIn: 'fadeIn',
            active: true,
            dots: false,
            smartSpeed: 1000,
            autoplay: false
        });
        $('.banner-carousel-btn .left-btn').on('click', function () {
            $('.banner-style-one').trigger('next.owl.carousel');
            return false;
        });
        $('.banner-carousel-btn .right-btn').on('click', function () {
            $('.banner-style-one').trigger('prev.owl.carousel');
            return false;
        });
    }

    /* ----- Scroll To top ----- */
    function scrollToTop() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 600) {
                $('.scrollToHome').fadeIn();
            } else {
                $('.scrollToHome').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scrollToHome').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    }

    /* ----- Mega Dropdown Content ----- */
    $(document).on('ready', function () {
        $("#show_advbtn, #show_advbtn2").on('click', function () {
            $(".dropdown-content, .search_dropdown").show(300);
        });
        $("#hide_advbtn, #hide_advbtn2").on('click', function () {
            $(".dropdown-content, .search_dropdown").hide(300);
        });
        $("#show_advbtn, #show_advbtn2").on('click', function () {
            $("body").addClass("mobile_ovyh");
        });
        $("#show_advbtn, #show_advbtn2").on('click', function () {
            $("body").removeClass("mobile_ovyh");
        });
        $("#prncgs").on('click', function () {
            $(".dd_content2").toggle();
        });
        $("#prncgs2, #prncgs3, #prncgs4").on('click', function () {
            $(".dd_content2").toggle();
        });
        $(".drop_btn").on('click', function () {
            $(".drop_content").toggle();
        });
        $(".drop_btn2").on('click', function () {
            $(".drop_content2").toggle();
        });
        $(".drop_btn3").on('click', function () {
            $(".drop_content3").toggle();
        });
        $(".drop_btn4").on('click', function () {
            $(".drop_content4").toggle();
        });
        $(".drop_btn5 ").on('click', function () {
            $(".drop_content5 ").toggle();
        });
        $(".drop_btn6").on('click', function () {
            $(".drop_content6").toggle();
        });

        $(".filter_open_btn").on('click', function () {
            $(".sidebar_content_details.style3").addClass("sidebar_ml0");
        });

        $(".filter_closed_btn").on('click', function () {
            $(".sidebar_content_details.style3").removeClass("sidebar_ml0");
        });

        $(".filter_open_btn").on('click', function () {
            $("body").addClass("body_overlay");
        });

        $(".filter_closed_btn").on('click', function () {
            $("body").removeClass("body_overlay");
        });

        $(".overlay_close").on('click', function () {
            $(".white_goverlay").toggle(500);
        });

        $(".mega_tags_dropdown").on('click', function () {
            $(".tag_dropdown_content").toggle(500);
        });

        $('.sticky-nav-tabs-container li').on('click', function () {
            $('.sticky-nav-tabs-container li').removeClass('active');
            $(this).addClass('active');
        });

        // Home Search Dropdown ShowHide
        $(".js-searchBox").searchBox({ elementWidth: '300' });
        $(".js-searchBox2").searchBox({ elementWidth: '300' });

        $(".select-wrap.style1-dropdown input.refineText.formTextbox").on('click', function () {
            $(".select-wrap.style2-dropdown ul.searchBoxElement").hide();
        });
        $(".select-wrap.style2-dropdown input.refineText.formTextbox").on('click', function () {
            $(".select-wrap.style1-dropdown ul.searchBoxElement").hide();
        });

    });


    /* ======
       When document is ready, do
       ====== */
    $(document).on('ready', function () {
        // add your functions
        navbarScrollfixed();
        scrollToTop();
        wowAnimation();
        mobileNavToggle();


        // extending for text toggle
        $.fn.extend({
            toggleText: function (a, b) {
                return this.text(this.text() == b ? a : b);
            }
        });
        if ($('.showFilter').length) {
            $('.showFilter').on('click', function () {
                $(this).toggleText('Show Filter', 'Hide Filter');
                $(this).toggleClass('flaticon-close flaticon-web-page sidebarOpended sidebarClosed');
                $('.listing_toogle_sidebar.sidenav').toggleClass('opened');
                $('.body_content').toggleClass('translated');
            });
        }

        $.fn.extend({
            toggleText2: function (a, b) {
                return this.text(this.text() == b ? a : b);
            }
        });

        if ($('.showBtns').length) {
            $('.showBtns').on('click', function () {
                $(this).toggleText2('Show Filter', 'Hide Filter');
                $(this).toggleClass('flaticon-close flaticon-web-page sidebarOpended2 sidebarClosed2');
                $('.sidebar_content_details').toggleClass('is-full-width');
            });
        }

    });

    /* ======
       When document is loading, do
       ====== */
    // window on Load function
    $(window).on('load', function () {
        // add your functions
        counterNumber();
        preloaderLoad();

    });
    // window on Scroll function
    $(window).on('scroll', function () {
        // add your functions
    });


})(window.jQuery);


// Fixed Counter Animation - Guaranteed to reach 100%
document.addEventListener('DOMContentLoaded', function () {

    // Find all percentage tags
    const percentageTags = document.querySelectorAll('.tag2 li a');

    if (percentageTags.length === 0) {
        console.log('No percentage tags found');
        return;
    }

    console.log(`Found ${percentageTags.length} percentage tags`);

    // Counter animation function with guaranteed completion
    function animateCounter(element, targetNumber) {
        // Store the original text to preserve any symbols
        const originalText = element.textContent;
        const hasPercent = originalText.includes('%');
        const cleanNumber = parseInt(originalText.replace(/[^0-9]/g, ''));

        if (isNaN(cleanNumber)) {
            console.log('Not a valid number:', originalText);
            return;
        }

        console.log(`Animating counter to ${cleanNumber}%`);

        let current = 0;
        const duration = 2000; // 2 seconds
        const stepTime = 16; // ~60fps
        const totalSteps = duration / stepTime;
        const increment = cleanNumber / totalSteps;

        // Clear any existing interval to prevent duplicates
        if (element.animationInterval) {
            clearInterval(element.animationInterval);
        }

        // Store the target number for reference
        element.targetNumber = cleanNumber;

        // Start the animation
        element.animationInterval = setInterval(function () {
            current += increment;

            if (current >= cleanNumber) {
                // Guarantee it reaches exactly the target
                element.textContent = hasPercent ? cleanNumber + '%' : cleanNumber.toString();
                clearInterval(element.animationInterval);
                element.animationInterval = null;

                // Add a little highlight effect when done
                element.style.transition = 'all 0.3s ease';
                element.style.color = '#0061DF';
                element.style.transform = 'scale(1.1)';

                setTimeout(function () {
                    element.style.transform = 'scale(1)';
                }, 200);

                console.log(`Counter finished at ${cleanNumber}%`);
                return;
            }

            // Update with current value
            element.textContent = hasPercent ? Math.floor(current) + '%' : Math.floor(current).toString();

        }, stepTime);
    }

    // Intersection Observer to trigger animation when element is visible
    const observerOptions = {
        threshold: 0.3, // Trigger when 30% visible
        rootMargin: '0px 0px -50px 0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;

                // Don't re-animate if already done
                if (element.hasAttribute('data-animated')) {
                    return;
                }

                // Mark as animated
                element.setAttribute('data-animated', 'true');

                // Get the target number from the text
                const targetText = element.textContent;
                const targetNumber = parseInt(targetText.replace(/[^0-9]/g, ''));

                if (!isNaN(targetNumber)) {
                    // Start from 0
                    element.textContent = '0%';

                    // Small delay for better visual effect
                    setTimeout(function () {
                        animateCounter(element, targetNumber);
                    }, 300);
                }

                // Stop observing this element
                counterObserver.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe each percentage tag
    percentageTags.forEach(tag => {
        counterObserver.observe(tag);

        // Also store the original value as a data attribute
        const originalValue = tag.textContent;
        tag.setAttribute('data-original', originalValue);
    });

    // Fallback: if IntersectionObserver is not supported
    if (!window.IntersectionObserver) {
        console.log('IntersectionObserver not supported, animating all counters immediately');
        percentageTags.forEach(tag => {
            const targetNumber = parseInt(tag.textContent.replace(/[^0-9]/g, ''));
            if (!isNaN(targetNumber)) {
                tag.textContent = '0%';
                animateCounter(tag, targetNumber);
            }
        });
    }

    // Clean up intervals when page is hidden (performance)
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            percentageTags.forEach(tag => {
                if (tag.animationInterval) {
                    clearInterval(tag.animationInterval);
                    tag.animationInterval = null;
                }
            });
        }
    });
});

// Also add a simpler version for the ongoing section counters
document.addEventListener('DOMContentLoaded', function () {
    // Find any other numbers that should be animated (like gallery counts)
    const numberElements = document.querySelectorAll('.listing_gallery span + span, .prop_details li:last-child span');

    numberElements.forEach(element => {
        const text = element.textContent;
        const number = parseInt(text.replace(/[^0-9]/g, ''));

        if (!isNaN(number) && number > 0 && !element.hasAttribute('data-number-fixed')) {
            element.setAttribute('data-number-fixed', 'true');
            // Store the original
            element.setAttribute('data-original-number', text);
        }
    });
});



// Feature Property Section Scroll Animations
document.addEventListener('DOMContentLoaded', function () {

    // Create scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    // Update scroll progress
    window.addEventListener('scroll', function () {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // Intersection Observer for section visibility
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Add animation to each card with delay
                const cards = entry.target.querySelectorAll('.feat_property');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    const featureSection = document.getElementById('feature-property');
    if (featureSection) {
        sectionObserver.observe(featureSection);
    }

    // Individual card hover animations
    const cards = document.querySelectorAll('.feat_property');
    cards.forEach(card => {

        // Mouse enter animation
        card.addEventListener('mouseenter', function (e) {
            const icons = this.querySelectorAll('.prop_details li span');
            icons.forEach((icon, index) => {
                setTimeout(() => {
                    icon.style.transform = 'scale(1.2)';
                    icon.style.color = '#0061DF';
                }, index * 50);
            });
        });

        // Mouse leave animation
        card.addEventListener('mouseleave', function (e) {
            const icons = this.querySelectorAll('.prop_details li span');
            icons.forEach(icon => {
                icon.style.transform = 'scale(1)';
                icon.style.color = '';
            });
        });

        // Click effect for cards
        card.addEventListener('click', function (e) {
            // Don't trigger if clicking on gallery links
            if (e.target.closest('.listing_gallery')) return;

            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });

    // Image load animation
    const images = document.querySelectorAll('.feat_property .thumb img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function () {
                this.classList.add('loaded');
            });
        }
    });

    // Parallax effect on mouse move for cards
    cards.forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;

            // Subtle 3D rotation
            this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-5px) scale(1.02)`;
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });

    // Gallery counter animation
    const galleryCounters = document.querySelectorAll('.listing_gallery li a');
    galleryCounters.forEach(counter => {
        counter.addEventListener('mouseenter', function () {
            const count = this.querySelector('.flaticon-photo-camera + span');
            if (count) {
                count.style.transition = 'all 0.3s ease';
                count.style.transform = 'scale(1.2)';
            }
        });

        counter.addEventListener('mouseleave', function () {
            const count = this.querySelector('.flaticon-photo-camera + span');
            if (count) {
                count.style.transform = 'scale(1)';
            }
        });
    });

    // Tag animations on hover
    const tags = document.querySelectorAll('.tag li, .tag2 li');
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-2px)';
            this.style.backgroundColor = '#0061DF';
            this.style.transition = 'all 0.3s ease';
        });

        tag.addEventListener('mouseleave', function () {
            this.style.transform = '';
            this.style.backgroundColor = '';
        });
    });

    // Smooth counter animation for numbers
    // Improved Animation Function
    const animateNumber = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Use Math.floor for the count
            const currentCount = Math.floor(progress * (end - start) + start);

            // Check if we need to put the % back
            element.textContent = element.dataset.suffix
                ? currentCount + element.dataset.suffix
                : currentCount;

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }

        };
        window.requestAnimationFrame(step);
    };

    // Improved Observer
    const percentageTags = document.querySelectorAll('.tag2 li a, .tag2 li');

    const animateIfVisible = (element) => {
        const rawText = element.textContent.trim();
        const numericValue = parseInt(rawText.replace(/[^0-9]/g, ''));

        if (!isNaN(numericValue)) {
            if (rawText.includes('%')) element.dataset.suffix = '%';
            animateNumber(element, 0, numericValue, 1500);
        }
    };

    const percentageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateIfVisible(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observe all tags
    percentageTags.forEach(tag => {
        percentageObserver.observe(tag);

        // Trigger immediately if already visible
        const rect = tag.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            animateIfVisible(tag);
            percentageObserver.unobserve(tag);
        }
    });

    // Add ripple effect on click for cards
    function createRipple(event, card) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');

        const rect = card.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';

        ripple.style.background = 'rgba(0, 97, 223, 0.3)';
        ripple.style.borderRadius = '50%';
        ripple.style.position = 'absolute';
        ripple.style.pointerEvents = 'none';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';

        card.style.position = 'relative';
        card.style.overflow = 'hidden';
        card.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Add keyframes for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    cards.forEach(card => {
        card.addEventListener('click', function (e) {
            if (!e.target.closest('.listing_gallery') && !e.target.closest('a')) {
                createRipple(e, this);
            }
        });
    });

    // Progress bar for image loading in gallery
    const galleryContainers = document.querySelectorAll('.galleri-container');
    galleryContainers.forEach(container => {
        const images = container.querySelectorAll('a[href$=".jpg"], a[href$=".png"], a[href$=".webp"]');
        let loaded = 0;

        images.forEach(img => {
            const testImg = new Image();
            testImg.src = img.getAttribute('href');
            testImg.onload = () => {
                loaded++;
                if (loaded === images.length) {
                    // All gallery images loaded
                    container.classList.add('gallery-ready');
                }
            };
        });
    });
});




const observerOptions = {
    threshold: 0.2 // Trigger when 20% of the section is visible
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Once it animates, we can stop observing
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Target the container
const exposerSection = document.querySelector('.business_exposer');
if (exposerSection) {
    revealObserver.observe(exposerSection);
}

const phrases = [
    "Discover who we are, what we build, and how we deliver world-class infrastructure projects.",
    "Engineering the future with precision, artistic intent, and robust civil engineering expertise.",
    "Your vision, our architecture—delivered with excellence.",
    "Sustainable solutions for a modern, evolving world through integrated retail complexes."
];

let currentIndex = 0;
const heading = document.getElementById("rotating-heading");

function rotateText() {
    // 1. Start Exit Animation
    heading.classList.remove('is-visible');
    heading.classList.add('exit');

    setTimeout(() => {
        // 2. Change text while invisible
        currentIndex = (currentIndex + 1) % phrases.length;
        heading.textContent = phrases[currentIndex];

        // Reset classes for the "In" animation
        heading.classList.remove('exit');

        // 3. Trigger Enter Animation
        // Small delay to ensure the browser registers the class reset
        setTimeout(() => {
            heading.classList.add('is-visible');
        }, 50);

    }, 800); // This matches the CSS transition time
}

// Start the rotation every 5 seconds
setInterval(rotateText, 5000);

// Initialize the first one
window.addEventListener('load', () => {
    heading.classList.add('is-visible');
});