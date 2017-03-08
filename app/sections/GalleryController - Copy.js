"use strict";
var SectionState_enum_1 = require('../SectionState.enum');
var GalleryController = (function () {
    function GalleryController(scrollMagicController, windowHeight, windowWidth) {
        this.sectionState = SectionState_enum_1.SectionState.Inside;
        this.$photo = $('#gallery .photo');
        this.photos = [
            'W_J002190-0001.jpg', 'W_J002190-0034.jpg', 'W_J002190-0041.jpg', 'W_J002190-0049.jpg', 'W_J002190-0088.jpg',
            'W_J002190-0091.jpg', 'W_J002190-0092.jpg', 'W_J002190-0094.jpg', 'W_J002190-0096.jpg', 'W_J002190-0105.jpg',
            'W_J002190-0132.jpg', 'W_J002190-0143.jpg', 'W_J002190-0149.jpg', 'W_J002190-0158.jpg', 'W_J002190-0170.jpg',
            'W_J002190-0173.jpg', 'W_J002190-0179.jpg', 'W_J002190-0183.jpg', 'W_J002190-0188.jpg', 'W_J002190-0203.jpg',
            'W_J002190-0215.jpg', 'W_J002190-0222.jpg'
        ];
        this.thumbnailInitiated = false;
        this.setTweenForBackgroundAndMonitorSectionState(scrollMagicController, windowHeight);
    }
    ;
    GalleryController.prototype.setTweenForBackgroundAndMonitorSectionState = function (scrollMagicController, windowHeight) {
        var _this = this;
        var sectionName = '#gallery';
        new ScrollMagic.Scene({
            triggerElement: sectionName,
            duration: windowHeight + $(sectionName).height(),
            offset: 0
        })
            .addTo(scrollMagicController)
            .on("enter leave", function (e) {
            if (e.type === "enter") {
                _this.sectionState = SectionState_enum_1.SectionState.Inside;
                _this.setThumbnail();
                _this.loadImage();
            }
            else {
                _this.sectionState = SectionState_enum_1.SectionState.Outside;
            }
        });
    };
    ;
    GalleryController.prototype.setThumbnail = function () {
        if (this.thumbnailInitiated)
            return;
        this.thumbnailInitiated = true;
        var thumbnailPath = 'assets/img/thumbnail/';
        var thumbnailPaths = this.photos.reduce(function (array, photo) {
            var $img = $('<div>').css('background-image', 'url(' + thumbnailPath + photo + ')');
            array.push($img);
            return array;
        }, []);
        $('#gallery .photos').width(102 * thumbnailPaths.length);
        $('#gallery .photos').html(thumbnailPaths);
    };
    ;
    GalleryController.prototype.loadImage = function () {
        var _this = this;
        if (this.sectionState === SectionState_enum_1.SectionState.Outside)
            return;
        var galleryPath = 'assets/img/gallery/';
        var img = new Image();
        img.src = galleryPath + this.photos[0];
        img.onload = function () { return _this.setImage(img.src); };
        img.onerror = function () { return _this.resetImage(); };
    };
    ;
    GalleryController.prototype.setImage = function (src) {
        this.$photo.css('background-image', "url(" + src + ")");
        TweenMax.to(this.$photo, 3, { opacity: 1 });
        setTimeout(this.resetImage.bind(this), 12000);
    };
    ;
    GalleryController.prototype.resetImage = function () {
        this.photos.push(this.photos.shift());
        TweenMax.to(this.$photo, 1, {
            opacity: 0,
            onComplete: this.loadImage.bind(this)
        });
    };
    ;
    return GalleryController;
}());
exports.GalleryController = GalleryController;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FsbGVyeUNvbnRyb2xsZXIgLSBDb3B5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR2FsbGVyeUNvbnRyb2xsZXIgLSBDb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQSxrQ0FBMkIsc0JBQXNCLENBQUMsQ0FBQTtBQUdsRDtJQWdCSSwyQkFDSSxxQkFBMEIsRUFDMUIsWUFBb0IsRUFDcEIsV0FBbUI7UUFqQmYsaUJBQVksR0FBaUIsZ0NBQVksQ0FBQyxNQUFNLENBQUM7UUFFakQsV0FBTSxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRTlCLFdBQU0sR0FBRztZQUNiLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtZQUM1RyxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0I7WUFDNUcsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO1lBQzVHLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtZQUM1RyxvQkFBb0IsRUFBRSxvQkFBb0I7U0FDN0MsQ0FBQztRQUVNLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQVEvQixJQUFJLENBQUMsMkNBQTJDLENBQUMscUJBQXFCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7SUFHTyx1RUFBMkMsR0FBbkQsVUFBb0QscUJBQTBCLEVBQUUsWUFBb0I7UUFBcEcsaUJBdUJDO1FBckJHLElBQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUUvQixJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbEIsY0FBYyxFQUFFLFdBQVc7WUFDM0IsUUFBUSxFQUFFLFlBQVksR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ2hELE1BQU0sRUFBRSxDQUFD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