"use strict";
var LoadingComponent_1 = require('../components/LoadingComponent');
var StoryController = (function () {
    function StoryController(scrollMagicController, windowHeight, windowWidth) {
        var _this = this;
        this.sectionName = '#story-container';
        this.isThumbnailInitiated = false;
        this.photos = [
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
        this.setLoadingImg();
        new ScrollMagic.Scene({
            triggerElement: this.sectionName,
            duration: windowHeight + $(this.sectionName).height(),
        }).addTo(scrollMagicController)
            .on("enter", function (e) { return _this.loadThumbnail(); });
    }
    ;
    StoryController.prototype.setLoadingImg = function () {
        var thumbnailPaths = this.photos.reduce(function (array, photo) {
            var $asset = new LoadingComponent_1.LoadingComponent();
            array.push($asset.$element.addClass('photo'));
            return array;
        }, []);
        $(this.sectionName).find('.assets-content').html(thumbnailPaths);
    };
    ;
    StoryController.prototype.loadThumbnail = function () {
        var _this = this;
        if (this.isThumbnailInitiated)
            return;
        this.isThumbnailInitiated = true;
        var thumbnailPath = 'assets/life/360/';
        var galleryPath = 'assets/life/original/';
        this.photos.forEach(function (photo) {
            var src = "" + thumbnailPath + photo + ".jpg";
            var $img = $("<img src=\"" + src + "\" />");
            var $asset = $("<div class=\"photo js-showcase-asset\" data-image-url=\"" + galleryPath + photo + ".jpg\">")
                .css('background-image', "url(" + src + ")");
            $img.on('load', function (e) {
                _this.setThumbnail($asset);
            });
        });
    };
    ;
    StoryController.prototype.setThumbnail = function ($asset) {
        var $loader = $(this.sectionName).find('.assets-content .loader').first();
        $loader.before($asset);
        $loader.remove();
        $asset.fadeIn();
    };
    ;
    return StoryController;
}());
exports.StoryController = StoryController;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcnlDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3RvcnlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQSxpQ0FBaUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUVsRTtJQWtCSSx5QkFDSSxxQkFBMEIsRUFDMUIsWUFBb0IsRUFDcEIsV0FBbUI7UUFyQjNCLGlCQXNFQztRQXBFVyxnQkFBVyxHQUFHLGtCQUFrQixDQUFDO1FBQ2pDLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUM3QixXQUFNLEdBQUc7WUFDYixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsUUFBUTtZQUNsQixVQUFVO1lBQ1YsVUFBVSxFQUFFLFFBQVE7WUFDcEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsVUFBVSxFQUFFLFVBQVU7WUFDdEIsWUFBWSxFQUFFLFVBQVU7U0FDM0IsQ0FBQztRQVFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQixJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbEIsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQ2hDLFFBQVEsRUFBRSxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUU7U0FDeEQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzthQUMxQixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7SUFDaEQsQ0FBQzs7SUFFTyx1Q0FBYSxHQUFyQjtRQUNJLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUs7WUFDbkQsSUFBTSxNQUFNLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO1lBQ3RDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM5QyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7O0lBRU8sdUNBQWEsR0FBckI7UUFBQSxpQkFrQkM7UUFqQkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFFakMsSUFBTSxhQUFhLEdBQUcsa0JBQWtCLENBQUM7UUFDekMsSUFBTSxXQUFXLEdBQUcsdUJBQXVCLENBQUM7UUFFNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO1lBQ3RCLElBQU0sR0FBRyxHQUFHLEtBQUcsYUFBYSxHQUFHLEtBQUssU0FBTSxDQUFDO1lBQzNDLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxnQkFBYSxHQUFHLFVBQU0sQ0FBQyxDQUFDO1lBRXZDLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyw2REFBd0QsV0FBVyxHQUFHLEtBQUssWUFBUSxDQUFDO2lCQUNoRyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsU0FBTyxHQUFHLE1BQUcsQ0FBQyxDQUFDO1lBRTVDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsQ0FBQztnQkFDZCxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztJQUdPLHNDQUFZLEdBQXBCLFVBQXFCLE1BQU07UUFDdkIsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1RSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqQixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7SUFDTCxzQkFBQztBQUFELENBQUMsQUF0RUQsSUFzRUM7QUF0RVksdUJBQWUsa0JBc0UzQixDQUFBO0FBQUEsQ0FBQyJ9