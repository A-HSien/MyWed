$(function () {
    
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    var scrollMagicController = new ScrollMagic.Controller();


    /**
     * header
     */
    var $header = $('#header');

    $header.height(windowHeight);
    var $video = $header.find('video');
    $video.on('ended', function () {
        $video.fadeOut();
        $header.addClass('img-background');
        setTimeout(function () {
            $header.toggleClass('img-background');
            $video[0].play();
        }, 3000);
    });
    $video.on('play', function () {
        $video.fadeIn();
        $header.removeClass('img-background');
    });
    $video[0].play();

    var headerAction = {
        imgScene: new ScrollMagic.Scene({
            triggerElement: '#header img',
            duration: 1600,
            offset: 0
        }),
        imgAction: TweenMax.to('#header img', 0.5, {
            autoAlpha: 0,
            scale: 0.1,
            force3D: true
        }),
        navScene: new ScrollMagic.Scene({
            triggerElement: 'main',
            duration: 100,
            offset: 0
        }),
        navAction: TweenMax.to('nav', 0.5, {
            autoAlpha: 1,
            force3D: true
        })
    };
    headerAction.imgScene
        .setTween(headerAction.imgAction)
        .addTo(scrollMagicController);

    headerAction.navScene
        .setTween(headerAction.navAction)
        .addTo(scrollMagicController);




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
        this.timeinterval = setInterval(this.updateClock.bind(this), 100);
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

    //var marker = new google.maps.Marker({
    //    position: location,
    //    map: map,
    //    title: '豪鼎飯店(北新店)'
    //});
    //var info = new google.maps.InfoWindow({
    //    content:
    //        '<a href="' +
    //        'https://www.google.com.tw/maps/place/%E8%B1%AA%E9%BC%8E%E9%A3%AF%E5%BA%97+%E5%8C%97%E6%96%B0%E6%97%97%E8%89%A6%E9%A4%A8/@24.984038,121.5379173,17z/data=!3m1!4b1!4m5!3m4!1s0x346801fed70ad06d:0x2b2b0cae3db1b50c!8m2!3d24.984038!4d121.540106' +
    //        '" target="_blank">豪鼎飯店(北新店)</a>'
    //});
    //info.open(map, marker);
    // https://maps.googleapis.com/maps/api/staticmap?size=512x512&zoom=15&center=Brooklyn&
    // style=feature:road.local%7Celement:geometry%7Ccolor:0x00ff00%7Cweight:1%7Cvisibility:on&style=feature:landscape%7Celement:geometry.fill%7Ccolor:0x000000%7Cvisibility:on&style=feature:administrative%7Celement:labels%7Cweight:3.9%7Cvisibility:on%7Cinverse_lightness:true&style=feature:poi%7Cvisibility:simplified&key=YOUR_API_KEY



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
    //        <a href="assets/img/gallery/W_J002190-0001.jpg" data-thumb="assets/img/thumbnail/W_J002190-0001.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0034.jpg" data-thumb="assets/img/thumbnail/W_J002190-0034.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0041.jpg" data-thumb="assets/img/thumbnail/W_J002190-0041.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0049.jpg" data-thumb="assets/img/thumbnail/W_J002190-0049.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0088.jpg" data-thumb="assets/img/thumbnail/W_J002190-0088.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0091.jpg" data-thumb="assets/img/thumbnail/W_J002190-0091.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0092.jpg" data-thumb="assets/img/thumbnail/W_J002190-0092.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0094.jpg" data-thumb="assets/img/thumbnail/W_J002190-0094.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0096.jpg" data-thumb="assets/img/thumbnail/W_J002190-0096.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0105.jpg" data-thumb="assets/img/thumbnail/W_J002190-0105.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0132.jpg" data-thumb="assets/img/thumbnail/W_J002190-0132.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0143.jpg" data-thumb="assets/img/thumbnail/W_J002190-0143.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0149.jpg" data-thumb="assets/img/thumbnail/W_J002190-0149.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0158.jpg" data-thumb="assets/img/thumbnail/W_J002190-0158.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0170.jpg" data-thumb="assets/img/thumbnail/W_J002190-0170.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0173.jpg" data-thumb="assets/img/thumbnail/W_J002190-0173.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0179.jpg" data-thumb="assets/img/thumbnail/W_J002190-0179.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0183.jpg" data-thumb="assets/img/thumbnail/W_J002190-0183.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0188.jpg" data-thumb="assets/img/thumbnail/W_J002190-0188.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0203.jpg" data-thumb="assets/img/thumbnail/W_J002190-0203.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0215.jpg" data-thumb="assets/img/thumbnail/W_J002190-0215.jpg"></a>
    //        <a href="assets/img/gallery/W_J002190-0222.jpg" data-thumb="assets/img/thumbnail/W_J002190-0222.jpg"></a>

    var photos = [
        'assets/img/gallery/W_J002190-0001.jpg',
        'assets/img/gallery/W_J002190-0034.jpg',
        'assets/img/gallery/W_J002190-0041.jpg',
        'assets/img/gallery/W_J002190-0049.jpg',
        'assets/img/gallery/W_J002190-0088.jpg',
        'assets/img/gallery/W_J002190-0091.jpg',
        'assets/img/gallery/W_J002190-0092.jpg',
        'assets/img/gallery/W_J002190-0094.jpg',
        'assets/img/gallery/W_J002190-0096.jpg',
        'assets/img/gallery/W_J002190-0105.jpg',
        'assets/img/gallery/W_J002190-0132.jpg',
        'assets/img/gallery/W_J002190-0143.jpg',
        'assets/img/gallery/W_J002190-0149.jpg',
        'assets/img/gallery/W_J002190-0158.jpg',
        'assets/img/gallery/W_J002190-0170.jpg',
        'assets/img/gallery/W_J002190-0173.jpg',
        'assets/img/gallery/W_J002190-0179.jpg',
        'assets/img/gallery/W_J002190-0183.jpg',
        'assets/img/gallery/W_J002190-0188.jpg',
        'assets/img/gallery/W_J002190-0203.jpg',
        'assets/img/gallery/W_J002190-0215.jpg',
        'assets/img/gallery/W_J002190-0222.jpg'
    ]

    //var $gallery = $('#gallery-container .photos');
    //$gallery.gallerify();

    //photos.map(function (photo) {
    //    $gallery.append('<img src="' + photo + '">');
    //});
    //$('.photos').gallerify.renderAsyncImages();

    //setTimeout(function () {
    //    $('.fotorama').fotorama();
    //}, 5000);
});