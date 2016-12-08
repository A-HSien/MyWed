$(function () {

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    var scrollMagicController = new ScrollMagic.Controller();

    /**
     * 選單
     */
    var adjustMenuItems = function () {
        $menuItems = $('#menu .menu-items');
        if (windowHeight > $menuItems.height()) {
            $menuItems.css('top', (windowHeight - $menuItems.height()) / 2);
        } else {
            $menuItems.height(windowHeight);
        }
    };

    $('#menu .hamburger').on('click', function () {
        $('html').toggleClass('open-menu');
        adjustMenuItems();
    });

    $('#menu').on('click', 'ul > li', function ($event) {
        $('html').toggleClass('open-menu');

        var target = $($event.currentTarget).data('scrollTo');
        var offsetTop = $(target).offset().top;
        var currentOffsetTop = $(window).scrollTop();
        var offset = Math.max(offsetTop, currentOffsetTop) - Math.min(offsetTop, currentOffsetTop);
        $('html, body').animate({ scrollTop: offsetTop }, offset * 1.2);
    });

    /**
     * header
     */
    var $header = $('#header');

    //$header.height(windowHeight);

    /* video*/
    var videoEle = document.getElementById('video');
    var renderer = PIXI.autoDetectRenderer(videoEle.clientWidth, videoEle.clientHeight, { transparent: true });
    videoEle.appendChild(renderer.view);

    // create the root of the scene graph
    var stage = new PIXI.Container();

    // create a video texture from a path
    var texture = PIXI.Texture.fromVideo('assets/video/forest.mp4');
    texture.baseTexture.source.loop = true;

    // create a new Sprite using the video texture (yes it's that easy)
    var videoSprite = new PIXI.Sprite(texture);

    videoSprite.width = renderer.width;
    videoSprite.height = renderer.height;

    stage.addChild(videoSprite);

    animate();

    function animate() {

        // render the stage
        renderer.render(stage);

        requestAnimationFrame(animate);
    }



    //var $video = $header.find('video');
    //$video.fadeOut();
    //$video.on('ended', function () {
    //    $video.fadeOut();
    //    $header.addClass('img-background');
    //    setTimeout(function () {
    //        $header.removeClass('img-background');
    //        $video[0].play();
    //    }, 3000);
    //});
    //$video.on('play', function () {
    //    $video.fadeIn(2000);
    //    $header.removeClass('img-background');
    //});
    //var timeForCheck = new Date();
    //$video.on('loadeddata', function () {
    //    var timeForTimeout = 3000 - (new Date() - timeForCheck);
    //    setTimeout(function () {
    //        $video[0].play();
    //        delete timeForCheck;
    //        delete timeForTimeout;
    //    }, timeForTimeout);
    //});
    /* video end*/


    var headerAction = {
        imgScene: new ScrollMagic.Scene({
            triggerElement: '#header img',
            duration: 1600,
            offset: 0
        }),
        imgAction: TweenMax.to('#header img', 1, {
            autoAlpha: 0,
            scale: 0.1,
            force3D: true
        }),
        //navScene: new ScrollMagic.Scene({
        //    triggerElement: '#wrapper',
        //    duration: 100,
        //    offset: 0
        //}),
        //navAction: TweenMax.to('nav', 1, {
        //    autoAlpha: 1,
        //    force3D: true
        //})
    };
    headerAction.imgScene
        .setTween(headerAction.imgAction)
        .addTo(scrollMagicController);

    //headerAction.navScene
    //    .setTween(headerAction.navAction)
    //    .addTo(scrollMagicController);




    /** 
     * announce
     */
    new ScrollMagic.Scene({
        triggerElement: '#announce'
    }).setTween(TweenMax.to('#announce .selfie-left', 1, { css: { 'left': "30%" } }))
        .addTo(scrollMagicController);
    new ScrollMagic.Scene({
        triggerElement: '#announce'
    }).setTween(TweenMax.to('#announce .selfie-right', 1, { css: { 'left': "70%" } }))
        .addTo(scrollMagicController);


    /** 
     * 倒數計時
     */
    function CountdownClock(id, endtime) {
        this.endtime = endtime;
        this.timeinterval = null;

        var clock = document.getElementById(id);
        this.daysSpan = clock.querySelector('.days');
        this.hoursSpan = clock.querySelector('.hours');
        this.minutesSpan = clock.querySelector('.minutes');
        this.secondsSpan = clock.querySelector('.seconds');

        this.updateClock();
        this.timeinterval = setInterval(this.updateClock.bind(this), 200);
    };
    CountdownClock.prototype.updateClock = function () {
        var t = this.getTimeRemaining(this.endtime);

        this.daysSpan.innerHTML = t.days;
        this.hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        this.minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        this.secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(this.timeinterval);
        }
    };
    CountdownClock.prototype.getTimeRemaining = function () {
        var t = Date.parse(this.endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    var deadline = new Date(2017, 6 - 1, 3); //2017-6-3
    new CountdownClock('clockdiv', deadline);


    new ScrollMagic.Scene({
        triggerElement: '#clock-container',
        triggerHook: "onEnter",
        duration: '200%',
    }).setTween('#clock-background', {
        css: { y: '60%' },
        ease: Linear.easeNone
    }).addTo(scrollMagicController);




    /**
     * maps
     */
    var location = '24.984038,121.5379173';
    var styles = toStaticMapStyle([{ "stylers": [{ "hue": "#baf4c4" }, { "saturation": 10 }] }, { "featureType": "water", "stylers": [{ "color": "#effefd" }] }, { "featureType": "all", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "labels", "stylers": [{ "visibility": "on" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }]);


    var mapUrl = 'https://maps.googleapis.com/maps/api/staticmap?size=' + windowWidth + 'x350&scale=2&zoom=12&center=' + location +
        '&style=' + styles + '&key=AIzaSyDCtN623rQpU2ARtvy-Uhzr-S7xfn5QYCs';

    $('.map').attr('src', mapUrl);


    function toStaticMapStyle(styles) {
        var result = [];
        styles.forEach(function (v, i, a) {
            var style = '';
            if (v.stylers.length > 0) { // Needs to have a style rule to be valid.
                style += (v.hasOwnProperty('featureType') ? 'feature:' + v.featureType : 'feature:all') + '|';
                style += (v.hasOwnProperty('elementType') ? 'element:' + v.elementType : 'element:all') + '|';
                v.stylers.forEach(function (val, i, a) {
                    var propertyname = Object.keys(val)[0];
                    var propertyval = val[propertyname].toString().replace('#', '0x');
                    style += propertyname + ':' + propertyval + '|';
                });
            }
            result.push('style=' + encodeURIComponent(style))
        });
        return result.join('&');
    }



    /**
     * story
     */
    new ScrollMagic.Scene({
        triggerElement: '#story-container',
        triggerHook: "onEnter",
        duration: '200%',
    }).setTween('#story-background', {
        css: { y: '60%' },
        ease: Linear.easeNone
    }).addTo(scrollMagicController);



    /**
     * photo gallery
     */
    var thumbnailPath = 'assets/img/thumbnail/';
    var galleryPath = 'assets/img/gallery/';

    var photos = [
        'W_J002190-0001.jpg', 'W_J002190-0034.jpg', 'W_J002190-0041.jpg', 'W_J002190-0049.jpg', 'W_J002190-0088.jpg',
        'W_J002190-0091.jpg', 'W_J002190-0092.jpg', 'W_J002190-0094.jpg', 'W_J002190-0096.jpg', 'W_J002190-0105.jpg',
        'W_J002190-0132.jpg', 'W_J002190-0143.jpg', 'W_J002190-0149.jpg', 'W_J002190-0158.jpg', 'W_J002190-0170.jpg',
        'W_J002190-0173.jpg', 'W_J002190-0179.jpg', 'W_J002190-0183.jpg', 'W_J002190-0188.jpg', 'W_J002190-0203.jpg',
        'W_J002190-0215.jpg', 'W_J002190-0222.jpg'
    ]


    var thumbnailPaths = photos.reduce(function (array, photo) {
        var $img = $('<div>').css('background-image', 'url(' + thumbnailPath + photo + ')');
        array.push($img);
        return array;
    }, []);

    $('#gallery-container .photos').width(102 * thumbnailPaths.length);
    $('#gallery-container .photos').html(thumbnailPaths);

    var $photo = $('#gallery-container .photo');
    var currentImgIndex = 0;

    var setImg = function () {
        var img = new Image();
        img.src = galleryPath + photos[currentImgIndex];
        img.onload = function () {
            $photo.css('background-image', 'url(' + img.src + ')');
            TweenMax.to($photo, 2, { opacity: 1 });
        };
    };
    setImg();

    var resetImg = function () {
        TweenMax.to($photo, 1, {
            opacity: 0,
            onComplete: setImg
        });
        currentImgIndex++;
    };
    setInterval(resetImg, 8000);


    new ScrollMagic.Scene({
        triggerElement: '#gallery-container',
        triggerHook: "onEnter",
        duration: '200%',
    }).setTween('#gallery-background', {
        css: { y: '60%' },
        ease: Linear.easeNone
    }).addTo(scrollMagicController);

    //var isMobile = (function (a) { return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)) })(navigator.userAgent || navigator.vendor || window.opera);

    //// we'd only like to use iScroll for mobile...
    //if (false) {
    //    // configure iScroll
    //var myScroll = new IScroll('#wrapper',
    //            {
    //                // don't scroll horizontal
    //                scrollX: false,
    //                // but do scroll vertical
    //                scrollY: true,
    //                // show scrollbars
    //                scrollbars: true,
    //                // deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
    //                // if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
    //                useTransform: false,
    //                // deativate css-transition to force requestAnimationFrame (implicit with probeType 3)
    //                useTransition: false,
    //                // set to highest probing level to get scroll events even during momentum and bounce
    //                // requires inclusion of iscroll-probe.js
    //                probeType: 3,
    //                // pass through clicks inside scroll container
    //                click: true
    //            }
    //        );

    // overwrite scroll position calculation to use child's offset instead of container's scrollTop();
    //scrollMagicController.scrollPos(function () {
    //    return -myScroll.y;
    //});

    // thanks to iScroll 5 we now have a real onScroll event (with some performance drawbacks)
    //myScroll.on("scroll", function () {
    //    scrollMagicController.update();
    //});
    //}
});