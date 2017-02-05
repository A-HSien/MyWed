declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const Linear: any;



export class AnnouncePage {

    constructor(
        windowWidth: number,
        scrollMagicController: any
    ) {

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


    };
};

class CountdownClock {

    endtime: string;
    daysSpan;
    hoursSpan;
    minutesSpan;
    secondsSpan;
    timeinterval;

    constructor(
        id: string,
        endtime: Date
    ) {
        this.endtime = endtime.toString();

        var clock = document.getElementById(id);
        this.daysSpan = clock.querySelector('.days');
        this.hoursSpan = clock.querySelector('.hours');
        this.minutesSpan = clock.querySelector('.minutes');
        this.secondsSpan = clock.querySelector('.seconds');

        this.updateClock();
        this.timeinterval = setInterval(this.updateClock.bind(this), 200);
    };

    updateClock() {
        var t = this.getTimeRemaining();

        this.daysSpan.innerHTML = t.days;
        this.hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        this.minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        this.secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(this.timeinterval);
        }
    };

    getTimeRemaining() {
        var t = Date.parse(this.endtime) - Date.parse(new Date().toString());
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
};