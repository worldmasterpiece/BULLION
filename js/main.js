document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });

                history.replaceState(null, null, ' ');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu_mobile_btn');
    const mobileNav = document.querySelector('.mobile_navigation');
    const body = document.body;

    function toggleActive() {
        menuButton.classList.toggle('active');
        mobileNav.classList.toggle('active');
        body.classList.toggle('lock_scroll');
    }

    menuButton.addEventListener('click', toggleActive);

    mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            menuButton.classList.remove('active');
            mobileNav.classList.remove('active');
            body.classList.remove('lock_scroll');
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const soundControls = document.querySelectorAll('.sound_control');
    const soundInfo = document.getElementById('SoundInfo');
    const audioElement = document.querySelector('.cow-audio');
    const soundBull = document.querySelector('.soundBull');

    function toggleSoundControl() {
        soundControls.forEach(function (control) {
            control.classList.toggle('active');
        });

        if (soundControls[0].classList.contains('active')) {
            soundInfo.textContent = "Sound is on. Enjoy!";
        } else {
            soundInfo.textContent = "Turn on the sound for a more complete impression";
        }
    }

    soundControls.forEach(function (control) {
        control.addEventListener('click', toggleSoundControl);
    });

    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            triggerElement: soundBull,
            triggerHook: 0.5,
            duration: 0
        })
        .on('enter', function () {
            if (audioElement && soundControls[0].classList.contains('active')) {
                audioElement.currentTime = 0;
                audioElement.play();
            }
        })
        .addTo(controller);
});


document.addEventListener('DOMContentLoaded', function () {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    setTimeout(function() {
        const body = document.body;
        body.classList.add('lock_scroll');
    }, 10);

    const startButton = document.getElementById('StartUsing');
    const preloaderPage = document.querySelector('.preloader_page');

    startButton.addEventListener('click', function () {
        document.body.classList.remove('lock_scroll');
        preloaderPage.classList.add('active');
    });
});



document.addEventListener('DOMContentLoaded', function () {
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
            triggerElement: '#slide03',
            triggerHook: 1,
            duration: '120%'
        })
        .on("progress", function (event) {
            var scaleValue = 1 - event.progress * 0.3;
            document.querySelector('.head-wrapper').style.transform = 'scale(' + scaleValue + ')';
        })
        .addTo(controller);
});

document.addEventListener('DOMContentLoaded', function () {
    var lottiePlayer = document.querySelector('.whybulla_lottie lottie-player');
    lottiePlayer.play();
});

document.addEventListener('DOMContentLoaded', function () {
    var controller = new ScrollMagic.Controller();

    var stepItems = document.querySelectorAll('.step_item');
    var section = document.querySelector('.how_bulla_works_steps_section');
    var stepsContainer = document.querySelector('.how_bulla_works_steps_sn');

    var sectionHeight = section.offsetHeight;
    var partHeight = sectionHeight / stepItems.length;

    new ScrollMagic.Scene({
            triggerElement: section,
            triggerHook: 0,
            duration: sectionHeight
        })
        .setPin(stepsContainer)
        .addTo(controller);

    stepItems.forEach(function (stepItem, index) {
        var lottiePlayer = stepItem.querySelector('lottie-player');

        new ScrollMagic.Scene({
                triggerElement: section,
                triggerHook: 0.5,
                offset: partHeight * index,
                duration: partHeight
            })
            .on('enter', function () {
                stepItems.forEach(function (item, itemIndex) {
                    var lottie = item.querySelector('lottie-player');
                    item.classList.remove('active', 'prev', 'next');
                    if (lottie) lottie.stop();

                    if (itemIndex < index) {
                        item.classList.add('prev');
                    } else if (itemIndex > index) {
                        item.classList.add('next');
                    }
                });

                stepItem.classList.add('active');
                if (lottiePlayer) lottiePlayer.play();
            })
            .addTo(controller);
    });

    new ScrollMagic.Scene({
            triggerElement: section,
            triggerHook: 1,
            offset: partHeight * stepItems.length,
            duration: partHeight
        })
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: stepsContainer,
            triggerHook: 0.5,
            duration: stepsContainer.offsetHeight
        })
        .on('enter', function () {
            stepsContainer.classList.add('active');
        })
        .addTo(controller);
});

document.addEventListener('DOMContentLoaded', function () {
    var controller = new ScrollMagic.Controller();
    var images = document.querySelectorAll('.token_util_header_sn img');

    images.forEach(function (img, index) {
        new ScrollMagic.Scene({
                triggerElement: img,
                triggerHook: 0.8,
                offset: index * 100,
                duration: '50%'
            })
            .on('enter', function () {
                img.classList.add('active');
            })
            .addTo(controller);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            triggerElement: '.features_section',
            triggerHook: 0,
            duration: document.querySelector('.features_section').offsetHeight
        })
        .setPin('.features_sn')
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '.features_section',
            triggerHook: 0,
            duration: document.querySelector('.features_section').offsetHeight
        })
        .on("progress", function (event) {
            var translateValue = 550 * event.progress;
            document.querySelectorAll('.drape_group').forEach(function (element) {
                element.style.transform = 'translateX(-' + translateValue + 'px)';
            });
        })
        .addTo(controller);

});

document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('header');
    var lastScrollTop = 0;
    var delta = 10;
    var headerHeight = header.offsetHeight;

    window.addEventListener('scroll', function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop <= headerHeight || (lastScrollTop - scrollTop) > delta) {
            header.classList.remove('hide');
        } else if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.classList.add('hide');
        }

        lastScrollTop = scrollTop;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            triggerElement: '.ring_box',
            triggerHook: 0.5,
            duration: '100%'
        })
        .on('enter', function () {
            document.getElementById('RingBulla').style.transform = 'translateY(0)';
        })
        .on('leave', function () {
            document.getElementById('RingBulla').style.transform = 'translateY(-600px)';
        })
        .addTo(controller);
});

document.addEventListener('DOMContentLoaded', function () {
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            triggerElement: '.ai_services_sn',
            triggerHook: 0.5
        })
        .on('enter', function () {
            document.querySelector('.anim_content').classList.add('active');

            var lottiePlayer = document.querySelector('.lottie_wrapper lottie-player');
            if (lottiePlayer) {
                lottiePlayer.play();
            }
        })
        .addTo(controller);
});

document.addEventListener('DOMContentLoaded', function () {
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            triggerElement: '.footer_lottie_bulla',
            triggerHook: 0.8
        })
        .on('enter', function () {
            var lottiePlayer = document.querySelector('.footer_lottie_bulla lottie-player');
            if (lottiePlayer) {
                lottiePlayer.play();
            }
        })
        .addTo(controller);
});
