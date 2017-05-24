"use strict";
var AnnounceController = (function () {
    function AnnounceController(scrollMagicController, windowHeight, windowWidth) {
        this.sectionName = '#announce';
        this.setSelfiePortrait(scrollMagicController);
        this.setCountdownClock();
        this.setMap(windowWidth);
    }
    ;
    AnnounceController.prototype.setSelfiePortrait = function (scrollMagicController) {
        new ScrollMagic.Scene({
            triggerElement: this.sectionName,
        }).setTween(this.sectionName + ' .selfie-content-space', {
            css: { width: '0' }
        }).addTo(scrollMagicController);
    };
    ;
    AnnounceController.prototype.setCountdownClock = function () {
        var deadline = new Date(2017, 6 - 1, 3, 19); //2017-6-3
        new CountdownClock('clockdiv', deadline);
    };
    ;
    AnnounceController.prototype.setMap = function (windowWidth) {
        var location = '24.984038,121.5379173';
        var size = windowWidth;
        var styles = toStaticMapStyle([
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
        function toStaticMapStyle(styles) {
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
        }
        ;
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
        var t = (t < 0) ? 0 : t;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3VuY2VDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQW5ub3VuY2VDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFPQTtJQUlJLDRCQUNJLHFCQUEwQixFQUMxQixZQUFvQixFQUNwQixXQUFtQjtRQUxmLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBUTlCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7SUFJTyw4Q0FBaUIsR0FBekIsVUFBMEIscUJBQTBCO1FBR2hELElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNsQixjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FFbkMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLHdCQUF3QixFQUFFO1lBQ3JELEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7U0FDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBRXBDLENBQUM7O0lBRU8sOENBQWlCLEdBQXpCO1FBQ0ksSUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUN2RCxJQUFJLGNBQWMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7SUFHTyxtQ0FBTSxHQUFkLFVBQWUsV0FBbUI7UUFDOUIsSUFBTSxRQUFRLEdBQUcsdUJBQXVCLENBQUM7UUFDekMsSUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ3pCLElBQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDO1lBQzVCO2dCQUNJLGFBQWEsRUFBRSxNQUFNO2dC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