"use strict";
var SectionState_enum_1 = require('./SectionState.enum');
var GalleryPage = (function () {
    function GalleryPage(scrollMagicController, windowHeight, windowWidth) {
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
    GalleryPage.prototype.setTweenForBackgroundAndMonitorSectionState = function (scrollMagicController, windowHeight) {
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
    GalleryPage.prototype.setThumbnail = function () {
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
    GalleryPage.prototype.loadImage = function () {
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
    GalleryPage.prototype.setImage = function (src) {
        this.$photo.css('background-image', "url(" + src + ")");
        TweenMax.to(this.$photo, 3, { opacity: 1 });
        setTimeout(this.resetImage.bind(this), 12000);
    };
    ;
    GalleryPage.prototype.resetImage = function () {
        this.photos.push(this.photos.shift());
        TweenMax.to(this.$photo, 1, {
            opacity: 0,
            onComplete: this.loadImage.bind(this)
        });
    };
    ;
    return GalleryPage;
}());
exports.GalleryPage = GalleryPage;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FsbGVyeVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHYWxsZXJ5UGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0Esa0NBQTJCLHFCQUFxQixDQUFDLENBQUE7QUFHakQ7SUFnQkkscUJBQ0kscUJBQTBCLEVBQzFCLFlBQW9CLEVBQ3BCLFdBQW1CO1FBakJmLGlCQUFZLEdBQWlCLGdDQUFZLENBQUMsTUFBTSxDQUFDO1FBRWpELFdBQU0sR0FBRyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUU5QixXQUFNLEdBQUc7WUFDYixvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0I7WUFDNUcsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO1lBQzVHLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtZQUM1RyxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0I7WUFDNUcsb0JBQW9CLEVBQUUsb0JBQW9CO1NBQzdDLENBQUM7UUFFTSx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFRL0IsSUFBSSxDQUFDLDJDQUEyQyxDQUFDLHFCQUFxQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzFGLENBQUM7O0lBR08saUVBQTJDLEdBQW5ELFVBQW9ELHFCQUEwQixFQUFFLFlBQW9CO1FBQXBHLGlCQXVCQztRQXJCRyxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFFL0IsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2xCLGNBQWMsRUFBRSxXQUFXO1lBQzNCLFFBQVEsRUFBRSxZQUFZLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNoRCxNQUFNLEVBQUUsQ0FBQztTQUNaLENBQUM7YUFLRyxLQUFLLENBQUMs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