

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





//header logo change per section
if ($(window).width() > 992) {

    var heroHeight = $('#hero-wrap').outerHeight(true);
    var awardsHeight = $('#awards-work-wrap').outerHeight(true);
    var ourworksHeight = $('#our-works').outerHeight(true);
    var testimonialHeight = $('#testimonial').outerHeight(true);
    var ourinfoHeight = $('#ourinfo').outerHeight(true);
    var brandsHeight = $('#brands').outerHeight(true);
    var footerinnerHeight = $('#footerinner').outerHeight(true);
    var footerbottomHeight = $('#footerbottom').outerHeight(true);

    $(window).on('resize', function () {
        heroHeight = $('#hero-wrap').innerHeight();
        awardsHeight = $('#awards-work-wrap').outerHeight(true);
        ourworksHeight = $('#our-works').outerHeight(true);
        testimonialHeight = $('#testimonial').outerHeight(true);
        ourinfoHeight = $('#ourinfo').outerHeight(true);
        brandsHeight = $('#brands').outerHeight(true);
        footerinnerHeight = $('#footerinner').outerHeight(true);
        footerbottomHeight = $('#footerbottom').outerHeight(true);
    });


    locoScroll.on('scroll', (position) => {
		
		 if (position.scroll.y > heroHeight && position.scroll.y < heroHeight + awardsHeight) {
            $("body").addClass('black-logo')
        } else {
            $("body").removeClass('black-logo')
        }

        if (position.scroll.y > heroHeight + awardsHeight && position.scroll.y < heroHeight + awardsHeight + ourworksHeight) {
            $("body").removeClass('black-logo')
        }
        if (position.scroll.y > heroHeight + awardsHeight + ourworksHeight && position.scroll.y < heroHeight + awardsHeight + ourworksHeight + testimonialHeight + ourinfoHeight) {
            $("body").addClass('black-logo')
        }
		
		  if (position.scroll.y > heroHeight + awardsHeight + ourworksHeight + testimonialHeight && position.scroll.y < heroHeight + awardsHeight + ourworksHeight + testimonialHeight + ourinfoHeight + footerbottomHeight + brandsHeight) {
            $("body").removeClass('black-logo')
        }
        
        if (position.scroll.y > heroHeight + awardsHeight + ourworksHeight + testimonialHeight + ourinfoHeight + footerbottomHeight - 400) {
            $("body").addClass('black-logo')
        }

    });


    if ($(window).width() < 1367) {

        var heroHeight = $('#hero-wrap').outerHeight(true) - 100;
        var awardsHeight = $('#awards-work-wrap').outerHeight(true);
        var ourworksHeight = $('#our-works').outerHeight(true);
        var testimonialHeight = $('#testimonial').outerHeight(true);
        var ourinfoHeight = $('#ourinfo').outerHeight(true);
        var brandsHeight = $('#brands').outerHeight(true);
        var footerinnerHeight = $('#footerinner').outerHeight(true);
        var footerbottomHeight = $('#footerbottom').outerHeight(true);

        $(window).on('resize', function () {
            /* windowHeight = $(window).height();*/
            heroHeight = $('#hero-wrap').outerHeight() - 100;
            awardsHeight = $('#awards-work-wrap').outerHeight(true);
            ourworksHeight = $('#our-works').outerHeight(true);
            testimonialHeight = $('#testimonial').outerHeight(true);
            ourinfoHeight = $('#ourinfo').outerHeight(true);
            brandsHeight = $('#brands').outerHeight(true);
            footerinnerHeight = $('#footerinner').outerHeight(true);
            footerbottomHeight = $('#footerbottom').outerHeight(true);

        });


        locoScroll.on('scroll', (position) => {
            if (position.scroll.y > heroHeight && position.scroll.y < heroHeight + awardsHeight) {
                $("body").addClass('black-logo')
            } else {
                $("body").removeClass('black-logo')
            }

            if (position.scroll.y > heroHeight + awardsHeight && position.scroll.y < heroHeight + awardsHeight + ourworksHeight) {
                $("body").removeClass('black-logo')
            }
            if (position.scroll.y > heroHeight + awardsHeight + ourworksHeight && position.scroll.y < heroHeight + awardsHeight + ourworksHeight + testimonialHeight + ourinfoHeight + footerinnerHeight) {
                $("body").addClass('black-logo')
            }
            if (position.scroll.y > heroHeight + awardsHeight + ourworksHeight + testimonialHeight + ourinfoHeight + footerinnerHeight) {
                $("body").addClass('black-logo')
            }
            if (position.scroll.y > heroHeight + awardsHeight + ourworksHeight + testimonialHeight + ourinfoHeight + brandsHeight + footerinnerHeight + 100) {

                $("body").removeClass('black-logo')
            }

        });


    };


    if ($(window).width() < 1025) {

        var heroHeight = $('#hero-wrap').outerHeight(true) - 50;
        var awardsHeight = $('#awards-work-wrap').outerHeight(true);
        var ourworksHeight = $('#our-works').outerHeight(true);
        var testimonialHeight = $('#testimonial').outerHeight(true);
        var ourinfoHeight = $('#ourinfo').outerHeight(true);
        var brandsHeight = $('#brands').outerHeight(true);
        var footerinnerHeight = $('#footerinner').outerHeight(true);
        var footerbottomHeight = $('#footerbottom').outerHeight(true);


        $(window).on('resize', function () {
            /* windowHeight = $(window).height();*/
            heroHeight = $('#hero-wrap').outerHeight() - 50;
            awardsHeight = $('#awards-work-wrap').outerHeight(true);
            ourworksHeight = $('#our-works').outerHeight(true);
            testimonialHeight = $('#testimonial').outerHeight(true);
            ourinfoHeight = $('#ourinfo').outerHeight(true);
            brandsHeight = $('#brands').outerHeight(true);
            footerinnerHeight = $('#footerinner').outerHeight(true);
            footerbottomHeight = $('#footerbottom').outerHeight(true);
        });


        locoScroll.on('scroll', (position) => {

            console.log(heroWrapSingle);

            if (position.scroll.y > heroHeight && position.scroll.y < heroHeight + awardsHeight) {
                $("body").addClass('black-logo')
            } else {
                $("body").removeClass('black-logo')
            }

            if (position.scroll.y > heroHeight + awardsHeight && position.scroll.y < heroHeight + awardsHeight + ourworksHeight) {
                $("body").removeClass('black-logo')
            }
            if (position.scroll.y > heroHeight + awardsHeight + ourworksHeight && position.scroll.y < heroHeight + awardsHeight + ourworksHeight + testimonialHeight + ourinfoHeight + footerinnerHeight) {
                $("body").addClass('black-logo')
            }
            if (position.scroll.y > heroHeight + awardsHeight + ourworksHeight + testimonialHeight + ourinfoHeight + footerinnerHeight) {
                $("body").addClass('black-logo')
            }
            if (position.scroll.y > heroHeight + awardsHeight + ourworksHeight + testimonialHeight + ourinfoHeight + brandsHeight + footerinnerHeight + 100) {

                $("body").removeClass('black-logo')
            }

        });

        /*locoScroll.on('scroll', (position) => {

        if( position.scroll.y > heroHeight &&  position.scroll.y < heroHeight + singleWorkHeight ){
        $("body").addClass('black-logo')
        }

        });*/

    };

}