"use strict";
var SectionState_enum_1 = require('../SectionState.enum');
var GalleryController = (function () {
    function GalleryController(scrollMagicController, windowHeight, windowWidth) {
        var _this = this;
        this.sectionName = '#gallery-container';
        this.sectionState = SectionState_enum_1.SectionState.Inside;
        this.isThumbnailInitiated = false;
        new ScrollMagic.Scene({
            triggerElement: this.sectionName,
            duration: windowHeight + $(this.sectionName).height(),
            offset: 0
        })
            .addTo(scrollMagicController)
            .on("enter", function (e) {
            if (_this.isThumbnailInitiated)
                return;
            _this.setThumbnail();
        });
    }
    ;
    GalleryController.prototype.setThumbnail = function () {
        var height = $(window).height();
        var width = $(window).width();
        var size = (height > width) ? height : width;
        var folder;
        var allSize = [1920, 1080, 720, 360];
        allSize.forEach(function (e) {
            if (e > size)
                folder = e;
        });
        if (!folder)
            folder = 1920;
        this.isThumbnailInitiated = true;
        var thumbnailPath = 'assets/gallery/360/';
        var galleryPath = "assets/gallery/" + folder + "/";
        var photos = [
            'J002190-0001.jpg', 'J002190-0034.jpg', 'J002190-0041.jpg', 'J002190-0049.jpg', 'J002190-0088.jpg',
            'J002190-0091.jpg', 'J002190-0092.jpg', 'J002190-0094.jpg', 'J002190-0096.jpg', 'J002190-0105.jpg',
            'J002190-0132.jpg', 'J002190-0143.jpg', 'J002190-0149.jpg', 'J002190-0158.jpg', 'J002190-0170.jpg',
            'J002190-0173.jpg', 'J002190-0179.jpg', 'J002190-0183.jpg', 'J002190-0188.jpg', 'J002190-0203.jpg',
            'J002190-0215.jpg', 'J002190-0222.jpg'
        ];
        var thumbnailPaths = photos.reduce(function (array, photo) {
            var $asset = $("<div class=\"photo js-showcase-asset\" data-image-url=\"" + galleryPath + photo + "\">")
                .css('background-image', 'url(' + thumbnailPath + photo + ')');
            array.push($asset);
            return array;
        }, []);
        $(this.sectionName).find('.assets-content').html(thumbnailPaths);
    };
    ;
    return GalleryController;
}());
exports.GalleryController = GalleryController;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FsbGVyeUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHYWxsZXJ5Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0Esa0NBQTZCLHNCQUFzQixDQUFDLENBQUE7QUFHcEQ7SUFNSSwyQkFDSSxxQkFBMEIsRUFDMUIsWUFBb0IsRUFDcEIsV0FBbUI7UUFUM0IsaUJBK0RDO1FBN0RXLGdCQUFXLEdBQUcsb0JBQW9CLENBQUM7UUFDbkMsaUJBQVksR0FBaUIsZ0NBQVksQ0FBQyxNQUFNLENBQUM7UUFDakQseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBUWpDLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNsQixjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDaEMsUUFBUSxFQUFFLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNyRCxNQUFNLEVBQUUsQ0FBQztTQUNaLENBQUM7YUFDRyxLQUFLLENBQUMscUJBQXFCLENBQUM7YUFDNUIsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBLENBQUM7WUFDVixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsb0JBQW9CLENBQUM7Z0JBQUMsTUFBTSxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7O0lBSU8sd0NBQVksR0FBcEI7UUFFSSxJQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFZLENBQUM7UUFDNUMsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBWSxDQUFDO1FBQzFDLElBQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQyxHQUFFLE1BQU0sR0FBRSxLQUFLLENBQUM7UUFDM0MsSUFBSSxNQUFNLENBQUM7UUFDWCxJQUFNLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxPQUFPLENBQUUsVUFBQSxDQUFDO1lBQ2YsRUFBRSxDQUFBLENBQUUsQ0FBQyxHQUFHLElBQUssQ0FBQztnQkFDZCxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNQLE1BQU0sR0FBQyxJQUFJLENBQUM7UUFFaEIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUVqQyxJQUFNLGFBQWEsR0FBRyxxQkFBcUIsQ0FBQztRQUM1QyxJQUFNLFdBQVcsR0FBRyxvQkFBa0IsTUFBTSxNQUFHLENBQUM7UUFDaEQsSUFBTSxNQUFNLEdBQUc7WUFDWCxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0I7WUFDbEcsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCO1lBQ2xHLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQjtZQUNsRyxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0I7WUFDbEcsa0JBQWtCLEVBQUUsa0JBQWtCO1NBQ3pDLENBQUM7UUFFRixJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUs7WUFDOUMsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLDZEQUF3RCxXQUFXLEdBQUcsS0FBSyxRQUFJLENBQUM7aUJBQzVGLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLEdBQUcsYUFBYSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNuRSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7SUFHTCx3QkFBQztBQUFELENBQUMsQUEvREQsSUErREM7QUEvRFkseUJBQWlCLG9CQStEN0IsQ0FBQTtBQUFBLENBQUMifQ==