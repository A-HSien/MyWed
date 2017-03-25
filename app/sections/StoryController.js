"use strict";
var LoadingComponent_1 = require('../components/LoadingComponent');
var StoryController = (function () {
    function StoryController(scrollMagicController, windowHeight, windowWidth) {
        var _this = this;
        this.sectionName = '#story-container';
        this.isThumbnailInitiated = false;
        this.photos = [
            '201307',
            '201308',
            '201312',
            '201401',
            '201401-2',
            '201401-3',
            '201401-4',
            '201402',
            '201403',
            '201406',
            '201407',
            '201501',
            '201504',
            '201504-2',
            '201507',
            '201601',
            '201601-2',
            '201605',
            '201607',
            '201609',
            '201611',
            '201612',
            '201612-2',
            '201701',
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
            var $asset = $("<div class=\"photo js-showcase-asset\" data-asset-url=\"" + galleryPath + photo + ".jpg\">")
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcnlDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3RvcnlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQSxpQ0FBaUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUVsRTtJQStCSSx5QkFDSSxxQkFBMEIsRUFDMUIsWUFBb0IsRUFDcEIsV0FBbUI7UUFsQzNCLGlCQW1GQztRQWpGVyxnQkFBVyxHQUFHLGtCQUFrQixDQUFDO1FBQ2pDLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUM3QixXQUFNLEdBQUc7WUFDYixRQUFRO1lBQ1IsUUFBUTtZQUNSLFFBQVE7WUFDUixRQUFRO1lBQ1IsVUFBVTtZQUNWLFVBQVU7WUFDVixVQUFVO1lBQ1YsUUFBUTtZQUNSLFFBQVE7WUFDUixRQUFRO1lBQ1IsUUFBUTtZQUNSLFFBQVE7WUFDUixRQUFRO1lBQ1IsVUFBVTtZQUNWLFFBQVE7WUFDUixRQUFRO1lBQ1IsVUFBVTtZQUNWLFFBQVE7WUFDUixRQUFRO1lBQ1IsUUFBUTtZQUNSLFFBQVE7WUFDUixRQUFRO1lBQ1IsVUFBVTtZQUNWLFFBQVE7U0FDWCxDQUFDO1FBUUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNsQixjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDaEMsUUFBUSxFQUFFLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRTtTQUN4RCxDQUFDLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO2FBQzFCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQztJQUNoRCxDQUFDOztJQUVPLHVDQUFhLEdBQXJCO1FBQ0ksSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSztZQUNuRCxJQUFNLE1BQU0sR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7WUFDdEMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7SUFFTyx1Q0FBYSxHQUFyQjtRQUFBLGlCQWtCQztRQWpCRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUVqQyxJQUFNLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQztRQUN6QyxJQUFNLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQztRQUU1QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7WUFDdEIsSUFBTSxHQUFHLEdBQUcsS0FBRyxhQUFhLEdBQUcsS0FBSyxTQUFNLENBQUM7WUFDM0MsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLGdCQUFhLEdBQUcsVUFBTSxDQUFDLENBQUM7WUFFdkMsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLDZEQUF3RCxXQUFXLEdBQUcsS0FBSyxZQUFRLENBQUM7aUJBQ2hHLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxTQUFPLEdBQUcsTUFBRyxDQUFDLENBQUM7WUFFNUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxDQUFDO2dCQUNkLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O0lBR08sc0NBQVksR0FBcEIsVUFBcUIsTUFBTTtRQUN2QixJQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVFLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQixDQUFDOztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQW5GRCxJQW1GQztBQW5GWSx1QkFBZSxrQkFtRjNCLENBQUE7QUFBQSxDQUFDIn0=