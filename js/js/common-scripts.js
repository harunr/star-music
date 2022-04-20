
(function($){
    $(function(){



        // Phone nav click function
        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
        });

        //Works Sections Tab
        $('#home-tab li:first-child').addClass('active');
        $('.our-works-tab-content').hide();
        $('.our-works-tab-content:first').show();

        // Click function
        $('#home-tab li').click(function(){
            $('#home-tab li').removeClass('active');
            $(this).addClass('active');
            $('.our-works-tab-content').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn(500);
            return false;
        });




        //Testimonial Slider
        var $slider = $('.testimonial-item-wrap');
        if ($slider.length) {
            var currentSlide;
            var slidesCount;
            var sliderCounter = document.createElement('div');
            sliderCounter.classList.add('slide-count-wrap');

            var updateSliderCounter = function(slick, currentIndex) {
                currentSlide = slick.slickCurrentSlide() + 1;
                slidesCount = slick.slideCount;
                $(sliderCounter).html('<span class="current">' + '0' + currentSlide + '</span>' + '<em>' + ' / ' + '</em>' + '<span class="total">'+'0'+ slidesCount + '</span>')
            };

            $slider.on('init', function(event, slick) {
                $slider.append(sliderCounter);
                updateSliderCounter(slick);
            });

            $slider.on('afterChange', function(event, slick, currentSlide) {
                updateSliderCounter(slick, currentSlide);
            });

            $slider.slick({
                dots: false,
                arrows:true,
                autoplay:true,
                autoplaySpeed:2000,
                smartspeed: 100,
                infinite: true,
                navigation:false,
                slidesToShow:1,
                slidesToScroll: 1,
                fade: true,
            });
        }

        

        //Stylish Magnetic Button
        $('#burger-wrapper').mouseleave(function(e){
            TweenMax.to(this, 0.3, {scale: 1});
            TweenMax.to('#burger-circle, #menu-burger', 0.3,{scale:1, x: 0, y: 0});	
            $(this).removeClass('circle-active');
        });

        $('#burger-wrapper').mouseenter(function(e){
            TweenMax.to(this, 0.3, {transformOrigin: '0 0', scale: 1});
            TweenMax.to('#burger-circle', 0.3,{scale: 1.3});
            $(this).addClass('circle-active');
        });

        $('#burger-wrapper').mousemove(function(e){   
            callParallax(e);
        });

        function callParallax(e){
            parallaxIt(e, '#burger-circle', 60);
            parallaxIt(e, '#menu-burger', 40);
        }

        function parallaxIt(e, target, movement){
            var $this = $('#burger-wrapper');
            var boundingRect = $this[0].getBoundingClientRect();
            var relX = e.pageX - boundingRect.left;
            var relY = e.pageY - boundingRect.top;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            TweenMax.to(target, 0.3, {
                x: (relX - boundingRect.width/2) / boundingRect.width * movement,
                y: (relY - boundingRect.height/2 - scrollTop) / boundingRect.width * movement,
                ease: Power2.easeOut
            });
        }

        
        /*Single Hero HD*/
        
        $('#single-hero-btn-wrap').mouseleave(function(e){
            TweenMax.to(this, 0.3, {scale: 1});
            TweenMax.to('#single-circle, #single-circle-text', 0.3,{scale:1, x: 0, y: 0});	
            $(this).removeClass('circle-active');
        });

        $('#single-hero-btn-wrap').mouseenter(function(e){
            TweenMax.to(this, 0.3, {transformOrigin: '0 0', scale: 1});
            TweenMax.to('#single-circle', 0.3,{scale: 1.3});
            $(this).addClass('circle-active');
        });

        $('#single-hero-btn-wrap').mousemove(function(e){   
            callParallaxsingle(e);
        });

        function callParallaxsingle(e){
            parallaxItsingle(e, '#single-circle', 60);
            parallaxItsingle(e, '#single-circle-text', 40);
        }

        function parallaxItsingle(e, target, movement){
            var $this = $('#single-hero-btn-wrap');
            var boundingRect = $this[0].getBoundingClientRect();
            var relX = e.pageX - boundingRect.left;
            var relY = e.pageY - boundingRect.top;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            TweenMax.to(target, 0.3, {
                x: (relX - boundingRect.width/2) / boundingRect.width * movement,
                y: (relY - boundingRect.height/2 - scrollTop) / boundingRect.width * movement,
                ease: Power2.easeOut
            });
        }
        
        
        
        
        //Magnenic hamburger text
        $('#hamburger-wrap').mouseleave(function(e){
            TweenMax.to(this, 0.3, {scale: 1});
            TweenMax.to('.hamburger-text', 0.3,{scale:1, x: 0, y: 0});
        });

        
        $('#hamburger-wrap').mousemove(function(e){   
            callParallaxe(e);
        });

        function callParallaxe(e){
            /*parallaxIt(e, '.circle', 80);*/
            parallaxIte(e, '.hamburger-text', 60);
        }

        function parallaxIte(e, target, movement){
            var $this = $('#hamburger-wrap');
            var boundingRect = $this[0].getBoundingClientRect();
            var relX = e.pageX - boundingRect.left;
            var relY = e.pageY - boundingRect.top;

            TweenMax.to(target, 0.3, {
                x: (relX - boundingRect.width/2) / boundingRect.width * movement,
                y: (relY - boundingRect.height/2) / boundingRect.width * movement,
                ease: Power2.easeOut
            });
        }

        



        gsap.registerPlugin(ScrollTrigger);
        

        // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

        const locoScroll = new LocomotiveScroll({
            el: document.querySelector(".smooth-scroll"),
            smooth: true
        });
        // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
        locoScroll.on("scroll", ScrollTrigger.update);

        // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
        ScrollTrigger.scrollerProxy(".smooth-scroll", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            }, // we don't have to define a scrollLeft because we're only scrolling vertically.
            getBoundingClientRect() {
                return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
            },
            // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
            pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
        });


        
        //scroll down animation
        
        if($(window).width() > 991 ){

            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".hero-inner-wrap",
                    scroller: ".smooth-scroll",
                    scrub: true,
                    pin: true,
                    start: "top top",
                    end: "+=45%",
                    pinSpacing: false,
                }
            });

            tl.from(".hero-content", { autoAlpha: 1, ease: "power2"})
                .to(".hero-content", {autoAlpha: 0, ease: "power2"});

            var tabs = gsap.timeline({
                scrollTrigger: {
                    trigger: ".our-works-inner-wrap",
                    scroller: ".smooth-scroll",
                    scrub: true,
                    pin: true,
                    start: "top top",
                    end: "+=75%",
                    pinSpacing: false,
                }
            });

            tabs.from(".our-works-tab-wrap", { autoAlpha: 1, ease: "power2"})
                .to(".our-works-tab-wrap", {autoAlpha: 0, ease: "power2"});

        } 



        // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();




    })// End ready function.



})(jQuery)

