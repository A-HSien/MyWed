"use strict";
var AnnounceController = (function () {
    function AnnounceController(scrollMagicController, windowHeight, windowWidth) {
        this.setSelfiePortrait(scrollMagicController);
        this.setCountdownClock();
        this.setMap(windowWidth);
        // this.setBackgroundTween(windowHeight, scrollMagicController)
    }
    ;
    AnnounceController.prototype.setSelfiePortrait = function (scrollMagicController) {
        var height = $('.selfie-container').height();
        new ScrollMagic.Scene({
            triggerElement: '#announce',
            duration: height * 1.5
        }).addTo(scrollMagicController)
            .on('enter', function () {
            $('.selfie-content').height(height);
            TweenMax.to('#announce .selfie-container-left', 1, { css: { 'left': "20%" } });
            TweenMax.to('#announce .selfie-container-right', 1, { css: { 'right': "20%" } });
        }).on('leave', function () {
            height = $('.selfie-container').height();
            TweenMax.to('#announce .selfie-container-left', 1, { css: { 'left': "0" } });
            TweenMax.to('#announce .selfie-container-right', 1, { css: { 'right': "0" } });
        });
    };
    ;
    AnnounceController.prototype.setCountdownClock = function () {
        var deadline = new Date(2017, 6 - 1, 3); //2017-6-3
        new CountdownClock('clockdiv', deadline);
    };
    ;
    AnnounceController.prototype.setBackgroundTween = function (windowHeight, scrollMagicController) {
        var sectionName = '#announce';
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
            .on("enter leave", function (e) {
        });
    };
    ;
    AnnounceController.prototype.setMap = function (windowWidth) {
        var location = '24.984038,121.5379173';
        var size = windowWidth;
        var styles = this.toStaticMapStyle([
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
        var mapUrl = "https://maps.googleapis.com/maps/api/staticmap?size=" + size + "x350&scale=2&zoom=12&center=" + location + "&style=" + styles + "&key=AIzaSyDCtN623rQpU2ARtvy-Uhzr-S7xfn5QYCs";
        $('.map').attr('src', mapUrl);
    };
    ;
    AnnounceController.prototype.toStaticMapStyle = function (styles) {
        var result = [];
        styles.forEach(function (v, i, a) {
            var style = '';
            if (v.stylers.length > 0) {
                style += (v.hasOwnProperty('featureType') ? 'feature:' + v.featureType : 'feature:all') + '|';
                style += (v.hasOwnProperty('elementType') ? 'element:' + v.elementType : 'element:all') + '|';
                v.stylers.forEach(function (val, i, a) {
                    var propertyname = Object.keys(val)[0];
                    var propertyval = val[propertyname].toString().replace('#', '0x');
                    style += propertyname + ':' + propertyval + '|';
                });
            }
            result.push('style=' + encodeURIComponent(style));
        });
        return result.join('&');
    };
    ;
    return AnnounceController;
}());
exports.AnnounceController = AnnounceController;
;
var CountdownClock = (function () {
    function CountdownClock(id, endtime) {
        this.endtime = endtime.toString();
        var clock = document.getElementById(id);
        this.daysSpan = clock.querySelector('.days');
        this.hoursSpan = clock.querySelector('.hours');
        this.minutesSpan = clock.querySelector('.minutes');
        this.secondsSpan = clock.querySelector('.seconds');
        this.updateClock();
        this.timeinterval = setInterval(this.updateClock.bind(this), 200);
    }
    ;
    CountdownClock.prototype.updateClock = function () {
        var t = this.getTimeRemaining();
        this.daysSpan.innerHTML = t.days;
        this.hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        this.minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        this.secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
            clearInterval(this.timeinterval);
        }
    };
    ;
    CountdownClock.prototype.getTimeRemaining = function () {
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
    ;
    return CountdownClock;
}());
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3VuY2VDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQW5ub3VuY2VDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFPQTtJQUVJLDRCQUNJLHFCQUEwQixFQUMxQixZQUFvQixFQUNwQixXQUFtQjtRQUduQixJQUFJLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLCtEQUErRDtJQUNuRSxDQUFDOztJQUlPLDhDQUFpQixHQUF6QixVQUEwQixxQkFBMEI7UUFFaEQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFN0MsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2xCLGNBQWMsRUFBRSxXQUFXO1lBQzNCLFFBQVEsRUFBRSxNQUFNLEdBQUcsR0FBRztTQUN6QixDQUFDLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO2FBQzFCLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDVCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQy9FLFFBQVEsQ0FBQyxFQUFFLENBQUMsbUNBQW1DLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyRixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ1gsTUFBTSxHQUFHLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1B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