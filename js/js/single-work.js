(function ($) {
    $(function () {



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


        
        
        // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();


        
        
        
        
        
        if ($(window).width() > 992) {

            var heroWrapSingle = $('#hero-wrap-single').outerHeight(true);
            var singleWork = $('#single-work').outerHeight(true);
            var hindsightWrap = $('#hindsight-wrap').outerHeight(true);

            $(window).on('resize', function () {
                heroWrapSingle = $('#hero-wrap-single').outerHeight(true);
                singleWork = $('#single-work').outerHeight(true);
                hindsightWrap = $('#hindsight-wrap').outerHeight(true);
            });


            locoScroll.on('scroll', (position) => {
                if (position.scroll.y > heroWrapSingle && position.scroll.y < heroWrapSingle + singleWork) {
                    $("body").addClass('black-logo')
                } else {
                    $("body").removeClass('black-logo')
                }

                if (position.scroll.y > heroWrapSingle + singleWork && position.scroll.y < heroWrapSingle + singleWork + hindsightWrap) {
                    $("body").addClass('black-logo')
                }

            });


            if ($(window).width() < 1367) {

                var heroWrapSingle = $('#hero-wrap-single').outerHeight(true);
                var singleWork = $('#single-work').outerHeight(true);
                var hindsightWrap = $('#hindsight-wrap').outerHeight(true);

                $(window).on('resize', function () {
                    /* windowHeight = $(window).height();*/
                    heroWrapSingle = $('#hero-wrap-single').outerHeight() - 100;
                    singleWork = $('#single-work').outerHeight(true);
                    hindsightWrap = $('#hindsight-wrap').outerHeight(true);

                });


                locoScroll.on('scroll', (position) => {
                    if (position.scroll.y > heroWrapSingle && position.scroll.y < heroWrapSingle + singleWork) {
                        $("body").addClass('black-logo')
                    } else {
                        $("body").removeClass('black-logo')
                    }

                    if (position.scroll.y > heroWrapSingle + singleWork && position.scroll.y < heroWrapSingle + singleWork + hindsightWrap) {
                        $("body").removeClass('black-logo')
                    }

                });


            };


            if ($(window).width() < 1025) {

                var heroWrapSingle = $('#hero-wrap-single').outerHeight(true);
                var singleWork = $('#single-work').outerHeight(true);
                var hindsightWrap = $('#hindsight-wrap').outerHeight(true);


                $(window).on('resize', function () {
                    /* windowHeight = $(window).height();*/
                    heroWrapSingle = $('#hero-wrap-single').outerHeight(true);
                    singleWork = $('#single-work').outerHeight(true);
                    hindsightWrap = $('#hindsight-wrap').outerHeight(true);
                });


                locoScroll.on('scroll', (position) => {

                    console.log(heroWrapSingle);

                    if (position.scroll.y > heroWrapSingle && position.scroll.y < heroWrapSingle + singleWork) {
                        $("body").addClass('black-logo')
                    } else {
                        $("body").removeClass('black-logo')
                    }

                    if (position.scroll.y > heroWrapSingle + singleWork && position.scroll.y < heroWrapSingle + singleWork + hindsightWrap) {
                        $("body").removeClass('black-logo')
                    }

                });

            };

        }



    }) // End ready function.



})(jQuery)