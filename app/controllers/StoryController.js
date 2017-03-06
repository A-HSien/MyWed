"use strict";
var StoryController = (function () {
    function StoryController(scrollMagicController, windowHeight, windowWidth) {
        var _this = this;
        var sectionName = '#story-container';
        new ScrollMagic.Scene({
            triggerElement: sectionName,
            triggerHook: "onEnter",
            duration: windowHeight + $(sectionName).height(),
        }).setTween('#story-background', {
            css: { y: '0%' },
            ease: Linear.easeNone
        }).addTo(scrollMagicController)
            .on("enter", function (e) {
            _this.setPhotos();
        });
    }
    ;
    StoryController.prototype.setPhotos = function () {
        var basePath = 'assets/life/';
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
            var $img = $('<div class="photo">').css('background-image', "url(" + basePath + photo + ".jpg)");
            array.push($img);
            return array;
        }, []);
        $('#story-content').html(eles);
    };
    ;
    return StoryController;
}());
exports.StoryController = StoryController;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcnlDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3RvcnlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQTtJQUVJLHlCQUNJLHFCQUEwQixFQUMxQixZQUFvQixFQUNwQixXQUFtQjtRQUwzQixpQkFnREM7UUF4Q08sSUFBTSxXQUFXLEdBQUcsa0JBQWtCLENBQUM7UUFFdkMsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2xCLGNBQWMsRUFBRSxXQUFXO1lBQzNCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFFBQVEsRUFBRSxZQUFZLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRTtTQUNuRCxDQUFDLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFO1lBQzdCLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUU7WUFDaEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1NBQ3hCLENBQUMsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7YUFDMUIsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBLENBQUM7WUFDVixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDOztJQUVPLG1DQUFTLEdBQWpCO1FBRUksSUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDO1FBQ2hDLElBQU0sTUFBTSxHQUFHO1lBQ1gsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsVUFBVTtZQUNWLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFlBQVksRUFBRSxVQUFVO1NBQzNCLENBQUM7UUFFRixJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUs7WUFDcEMsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLFNBQU8sUUFBUSxHQUFHLEtBQUssVUFBTyxDQUFDLENBQUM7WUFDOUYsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQWhERCxJQWdEQztBQWhEWSx1QkFBZSxrQkFnRDNCLENBQUE7QUFBQSxDQUFDIn0=