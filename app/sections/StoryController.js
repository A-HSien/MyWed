"use strict";
var StoryController = (function () {
    function StoryController(scrollMagicController, windowHeight, windowWidth) {
        var _this = this;
        this.sectionName = '#story-container';
        this.isThumbnailInitiated = false;
        new ScrollMagic.Scene({
            triggerElement: this.sectionName,
            triggerHook: "onEnter",
            duration: windowHeight + $(this.sectionName).height(),
        }).setTween('#story-background', {
            css: { y: '0%' },
            ease: Linear.easeNone
        }).addTo(scrollMagicController)
            .on("enter", function (e) {
            if (_this.isThumbnailInitiated)
                return;
            _this.setPhotos();
        });
    }
    ;
    StoryController.prototype.setPhotos = function () {
        this.isThumbnailInitiated = true;
        var thumbnailPath = 'assets/life/';
        var galleryPath = 'assets/life/';
        var photos = [
            '201307', '201308',
            '201312', '201401',
            '201401-3',
            '201401-4', '201402',
            '201403', '201406',
            '201407', '201501',
            '201504', '201504-2',
            '201507', '201601',
            '201607', '20160928',
            '20161126', '20161231',
            '20161231-2', '20170101',
        ];
        var eles = photos.reduce(function (array, photo) {
            var $asset = $("<div class=\"photo js-showcase-asset\" data-image-url=\"" + galleryPath + photo + ".jpg\">")
                .css('background-image', "url(" + thumbnailPath + photo + ".jpg)");
            array.push($asset);
            return array;
        }, []);
        $(this.sectionName).find('.assets-content').html(eles);
    };
    ;
    return StoryController;
}());
exports.StoryController = StoryController;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcnlDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3RvcnlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQTtJQUtJLHlCQUNJLHFCQUEwQixFQUMxQixZQUFvQixFQUNwQixXQUFtQjtRQVIzQixpQkFzREM7UUFwRFcsZ0JBQVcsR0FBRyxrQkFBa0IsQ0FBQztRQUNqQyx5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFRakMsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2xCLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVztZQUNoQyxXQUFXLEVBQUUsU0FBUztZQUN0QixRQUFRLEVBQUUsWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFO1NBQ3hELENBQUMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUU7WUFDN0IsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRTtZQUNoQixJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzthQUMxQixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUEsQ0FBQztZQUNWLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQztnQkFBQyxNQUFNLENBQUM7WUFDdEMsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7SUFFTyxtQ0FBUyxHQUFqQjtRQUVJLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFFakMsSUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQztRQUNuQyxJQUFNLE1BQU0sR0FBRztZQUNYLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFVBQVU7WUFDVixVQUFVLEVBQUUsUUFBUTtZQUNwQixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsVUFBVTtZQUNwQixVQUFVLEVBQUUsVUFBVTtZQUN0QixZQUFZLEVBQUUsVUFBVTtTQUMzQixDQUFDO1FBRUYsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUssRUFBRSxLQUFLO1lBQ3BDLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyw2REFBd0QsV0FBVyxHQUFHLEtBQUssWUFBUSxDQUFDO2lCQUNoRyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsU0FBTyxhQUFhLEdBQUcsS0FBSyxVQUFPLENBQUMsQ0FBQztZQUNsRSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7SUFDTCxzQkFBQztBQUFELENBQUMsQUF0REQsSUFzREM7QUF0RFksdUJBQWUsa0JBc0QzQixDQUFBO0FBQUEsQ0FBQyJ9