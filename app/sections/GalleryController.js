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
        this.isThumbnailInitiated = true;
        var thumbnailPath = 'assets/img/thumbnail/';
        var galleryPath = 'assets/img/gallery/';
        var photos = [
            'W_J002190-0001.jpg', 'W_J002190-0034.jpg', 'W_J002190-0041.jpg', 'W_J002190-0049.jpg', 'W_J002190-0088.jpg',
            'W_J002190-0091.jpg', 'W_J002190-0092.jpg', 'W_J002190-0094.jpg', 'W_J002190-0096.jpg', 'W_J002190-0105.jpg',
            'W_J002190-0132.jpg', 'W_J002190-0143.jpg', 'W_J002190-0149.jpg', 'W_J002190-0158.jpg', 'W_J002190-0170.jpg',
            'W_J002190-0173.jpg', 'W_J002190-0179.jpg', 'W_J002190-0183.jpg', 'W_J002190-0188.jpg', 'W_J002190-0203.jpg',
            'W_J002190-0215.jpg', 'W_J002190-0222.jpg'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FsbGVyeUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHYWxsZXJ5Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0Esa0NBQTZCLHNCQUFzQixDQUFDLENBQUE7QUFHcEQ7SUFNSSwyQkFDSSxxQkFBMEIsRUFDMUIsWUFBb0IsRUFDcEIsV0FBbUI7UUFUM0IsaUJBa0RDO1FBaERXLGdCQUFXLEdBQUcsb0JBQW9CLENBQUM7UUFDbkMsaUJBQVksR0FBaUIsZ0NBQVksQ0FBQyxNQUFNLENBQUM7UUFDakQseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBUWpDLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNsQixjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDaEMsUUFBUSxFQUFFLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNyRCxNQUFNLEVBQUUsQ0FBQztTQUNaLENBQUM7YUFDRyxLQUFLLENBQUMscUJBQXFCLENBQUM7YUFDNUIsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBLENBQUM7WUFDVixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsb0JBQW9CLENBQUM7Z0JBQUMsTUFBTSxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7O0lBSU8sd0NBQVksR0FBcEI7UUFDSSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1FBRWpDLElBQU0sYUFBYSxHQUFHLHVCQUF1QixDQUFDO1FBQzlDLElBQU0sV0FBVyxHQUFHLHFCQUFxQixDQUFDO1FBQzFDLElBQU0sTUFBTSxHQUFHO1lBQ1gsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO1lBQzVHLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtZQUM1RyxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0I7WUFDNUcsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO1lBQzVHLG9CQUFvQixFQUFFLG9CQUFvQjtTQUM3QyxDQUFDO1FBRUYsSUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUssRUFBRSxLQUFLO1lBQzlDLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyw2REFBd0QsV0FBVyxHQUFHLEtBQUssUUFBSSxDQUFDO2lCQUM1RixHQUFHLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxHQUFHLGFBQWEsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDbkUsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7O0lBR0wsd0JBQUM7QUFBRCxDQUFDLEFBbERELElBa0RDO0FBbERZLHlCQUFpQixvQkFrRDdCLENBQUE7QUFBQSxDQUFDIn0=