declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const Linear: any;



export class AnnounceController {

    constructor(
        scrollMagicController: any,
        windowHeight: number,
        windowWidth: number
    ) {

        this.setSelfiePortrait(scrollMagicController);
        this.setCountdownClock();
        this.setMap(windowWidth);
       // this.setBackgroundTween(windowHeight, scrollMagicController)
    };


    private setSelfiePortrait(scrollMagicController: any) {
        new ScrollMagic.Scene({
            triggerElement: '#announce',
        }).setTween(TweenMax.to('#announce .selfie-left', 1, { css: { 'left': "0" } }))
            .addTo(scrollMagicController);
        new ScrollMagic.Scene({
            triggerElement: '#announce',
        }).setTween(TweenMax.to('#announce .selfie-right', 1, { css: { 'right': "0" } }))
            .addTo(scrollMagicController);
    };

    private setCountdownClock() {
        var deadline = new Date(2017, 6 - 1, 3); //2017-6-3
        new CountdownClock('clockdiv', deadline);
    };

    private setBackgroundTween(
        windowHeight: number,
        scrollMagicController: any
    ) {
        const sectionName = '#announce';

        new ScrollMagic.Scene({
            triggerElement: sectionName,
            triggerHook: "onEnter",
            duration: windowHeight + $(sectionName).height(),
            offset: 0
        })
            .setTween('#announce-background', {
                css: { y: '0%' },
                ease: Linear.easeNone
            })
            .addTo(scrollMagicController)
            .on("enter leave", e => {
            });
    };

    private setMap(windowWidth: number) {
        const location = '24.984038,121.5379173';
        const size = windowWidth;
        const styles = this.toStaticMapStyle([
       {
        "featureType": "road",
        "stylers": [
            {
                "hue": "#5e00ff"
            },
            {
                "saturation": -79
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "saturation": -78
            },
            {
                "hue": "#6600ff"
            },
            {
                "lightness": -47
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "lightness": 22
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "hue": "#6600ff"
            },
            {
                "saturation": -11
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "saturation": -65
            },
            {
                "hue": "#1900ff"
            },
            {
                "lightness": 8
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "weight": 1.3
            },
            {
                "lightness": 30
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#5e00ff"
            },
            {
                "saturation": -16
            }
        ]
    },
    {
        "featureType": "transit.line",
        "stylers": [
            {
                "saturation": -72
            }
        ]
    }
            ]);


        var mapUrl = `https://maps.googleapis.com/maps/api/staticmap?size=${size}x350&scale=2&zoom=12&center=${location}&style=${styles}&key=AIzaSyDCtN623rQpU2ARtvy-Uhzr-S7xfn5QYCs`;

        $('.map').attr('src', mapUrl);
    };

    private toStaticMapStyle(styles) {
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