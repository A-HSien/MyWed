"use strict";
var LoadingComponent_1 = require('../components/LoadingComponent');
var GalleryController = (function () {
    function GalleryController(scrollMagicController, windowHeight, windowWidth) {
        var _this = this;
        this.sectionName = '#gallery-container';
        this.isThumbnailInitiated = false;
        this.photos = [
            'J002190-0001.jpg', 'J002190-0034.jpg', 'J002190-0041.jpg', 'J002190-0049.jpg', 'J002190-0088.jpg',
            'J002190-0091.jpg', 'J002190-0092.jpg', 'J002190-0094.jpg', 'J002190-0096.jpg', 'J002190-0105.jpg',
            'J002190-0132.jpg', 'J002190-0143.jpg', 'J002190-0149.jpg', 'J002190-0158.jpg', 'J002190-0170.jpg',
            'J002190-0173.jpg', 'J002190-0179.jpg', 'J002190-0183.jpg', 'J002190-0188.jpg', 'J002190-0203.jpg',
            'J002190-0215.jpg', 'J002190-0222.jpg'
        ];
        this.videos = [
            'forest'
        ];
        this.setLoadingImg();
        new ScrollMagic.Scene({
            triggerElement: this.sectionName,
            duration: windowHeight + $(this.sectionName).height()
        })
            .addTo(scrollMagicController)
            .on("enter", function (e) { return _this.loadThumbnail(); });
    }
    ;
    GalleryController.prototype.setLoadingImg = function () {
        var assets = this.videos.concat(this.photos);
        var thumbnailPaths = assets.reduce(function (array, photo) {
            var $asset = new LoadingComponent_1.LoadingComponent();
            array.push($asset.$element.addClass('photo'));
            return array;
        }, []);
        $(this.sectionName).find('.assets-content').html(thumbnailPaths);
    };
    ;
    GalleryController.prototype.loadThumbnail = function () {
        var _this = this;
        if (this.isThumbnailInitiated)
            return;
        this.isThumbnailInitiated = true;
        var height = $(window).height();
        var width = $(window).width();
        var size = (height > width) ? height : width;
        //photo part
        var folder = 1920;
        [1920, 1080, 720, 360].forEach(function (e) {
            folder = (e > size) ? e : folder;
        });
        var thumbnailPath = 'assets/gallery/360/';
        var galleryPath = "assets/gallery/" + folder + "/";
        this.photos.forEach(function (photo) {
            var src = "" + thumbnailPath + photo;
            var $img = $("<img src=\"" + src + "\" />");
            var $asset = $("<div class=\"photo js-showcase-asset\" data-asset-url=\"" + galleryPath + photo + "\">")
                .css('background-image', "url('" + src + "')")
                .hide();
            $img.on('load', function (e) {
                _this.setThumbnail($asset);
            });
        });
        //videos part
        this.videos.forEach(function (video) {
            var path = "assets/video/" + video;
            var $img = $("<img src=\"" + path + ".jpg\" />");
            var $asset = $("<div class=\"photo isVideo js-showcase-asset\" data-asset-url=\"" + path + ".mp4\">")
                .css('background-image', "url('" + path + ".jpg')")
                .hide();
            $img.on('load', function (e) {
                _this.setThumbnail($asset);
            });
        });
    };
    ;
    GalleryController.prototype.setThumbnail = function ($asset) {
        var $loader = $(this.sectionName).find('.assets-content .loader').first();
        $loader.before($asset);
        $loader.remove();
        $asset.fadeIn();
    };
    ;
    return GalleryController;
}());
exports.GalleryController = GalleryController;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FsbGVyeUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHYWxsZXJ5Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0EsaUNBQWlDLGdDQUFnQyxDQUFDLENBQUE7QUFHbEU7SUFlSSwyQkFDSSxxQkFBMEIsRUFDMUIsWUFBb0IsRUFDcEIsV0FBbUI7UUFsQjNCLGlCQStGQztRQTdGVyxnQkFBVyxHQUFHLG9CQUFvQixDQUFDO1FBQ25DLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUM3QixXQUFNLEdBQUc7WUFDYixrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0I7WUFDbEcsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCO1lBQ2xHLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQjtZQUNsRyxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0I7WUFDbEcsa0JBQWtCLEVBQUUsa0JBQWtCO1NBQ3pDLENBQUM7UUFDTSxXQUFNLEdBQUc7WUFDYixRQUFRO1NBQ1gsQ0FBQztRQVFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQixJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbEIsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQ2hDLFFBQVEsRUFBRSxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUU7U0FDeEQsQ0FBQzthQUNHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzthQUM1QixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7SUFDaEQsQ0FBQzs7SUFF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