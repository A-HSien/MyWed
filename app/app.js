$(function () {
    

    var scrollMagicController = new ScrollMagic.Controller();

    // header
    var header = {
        scene: new ScrollMagic.Scene({
            triggerElement: '.js-headerContent',
            duration: 1600,
            offset: 100
        }),
        tween: TweenMax.to(".js-headerContent", 0.5, {
            autoAlpha: 0,
            scale: 0.5,
            force3D: true
        })
    };
    header.scene
        .setTween(header.tween)
        .addTo(scrollMagicController);




    var tween1 = TweenMax.to('#animation-1', 0.5, {
        backgroundColor: 'rgb(255, 39, 46)',
        scale: 2,
        rotation: 360
    });

    var scene1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1',
        offset: 10
    }).setClassToggle('body', 'scene-1-active')
        .setTween(tween1)
        .addTo(scrollMagicController);


    var tween2 = TweenMax.to('#animation-2', 1.5, {
        backgroundColor: 'rgb(0, 255, 187)',
        scale: 5,
        rotation: 1080
    });

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '#scene-2',
        offset: 30
    }).setClassToggle('body', 'scene-2-active')
        .setTween(tween2)
        .addTo(scrollMagicController);


    var tween3 = TweenMax.to('#animation-3', 1, {
        backgroundColor: 'rgb(17, 0, 98)',
        scale: 10,
        rotation: 720
    });

    var scene3 = new ScrollMagic.Scene({
        triggerElement: '#scene-3',
        offset: 60
    }).setClassToggle('body', 'scene-3-active')
        .setTween(tween3)
        .addTo(scrollMagicController);

    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        var location = new google.maps.LatLng('24.984038', '121.5379173');
        var mapOptions = {
            zoom: 12,
            center: location,
            styles: [{ "featureType": "landscape", "stylers": [{ "saturation": -100 }, { "lightness": 65 }, { "visibility": "on" }] }, { "featureType": "poi", "stylers": [{ "saturation": -100 }, { "lightness": 51 }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "road.arterial", "stylers": [{ "saturation": -100 }, { "lightness": 30 }, { "visibility": "on" }] }, { "featureType": "road.local", "stylers": [{ "saturation": -100 }, { "lightness": 40 }, { "visibility": "on" }] }, { "featureType": "transit", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "administrative.province", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "lightness": -25 }, { "saturation": -100 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "hue": "#ffff00" }, { "lightness": -25 }, { "saturation": -97 }] }]
        };

        var mapElement = $('.map')[0];

        var map = new google.maps.Map(mapElement, mapOptions);

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            title: '豪鼎飯店(北新店)'
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<a href="http://www.how-dine.com.tw/html/north-new.php" target="_blank">豪鼎飯店(北新店)</a>'
        });
        infowindow.open(map, marker);
    };


    $(".rslides").responsiveSlides();
});