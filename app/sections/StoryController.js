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
        var thumbnailPath = 'assets/life/360/';
        var galleryPath = 'assets/life/original/';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcnlDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3RvcnlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQTtJQUtJLHlCQUNJLHFCQUEwQixFQUMxQixZQUFvQixFQUNwQixXQUFtQjtRQVIzQixpQkFtREM7UUFqRFcsZ0JBQVcsR0FBRyxrQkFBa0IsQ0FBQztRQUNqQyx5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFRakMsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2xCLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVztZQUNoQyxXQUFXLEVBQUUsU0FBUztZQUN0QixRQUFRLEVBQUUsWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFO1NBQ3hELENBQUMsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7YUFDMUIsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBLENBQUM7WUFDVixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsb0JBQW9CLENBQUM7Z0JBQUMsTUFBTSxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7O0lBRU8sbUNBQVMsR0FBakI7UUFFSSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1FBRWpDLElBQU0sYUFBYSxHQUFHLGtCQUFrQixDQUFDO1FBQ3pDLElBQU0sV0FBVyxHQUFHLHVCQUF1QixDQUFDO1FBQzVDLElBQU0sTUFBTSxHQUFHO1lBQ1gsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsVUFBVTtZQUNWLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFlBQVksRUFBRSxVQUFVO1NBQzNCLENBQUM7UUFFRixJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUs7WUFDcEMsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLDZEQUF3RCxXQUFXLEdBQUcsS0FBSyxZQUFRLENBQUM7aUJBQ2hHLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxTQUFPLGFBQWEsR0FBRyxLQUFLLFVBQU8sQ0FBQyxDQUFDO1lBQ2xFLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDOztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQW5ERCxJQW1EQztBQW5EWSx1QkFBZSxrQkFtRDNCLENBQUE7QUFBQSxDQUFDIn0=