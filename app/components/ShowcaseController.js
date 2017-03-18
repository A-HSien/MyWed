"use strict";
var FullWindowToggleController_1 = require('./FullWindowToggleController');
var ShowcaseController = (function () {
    function ShowcaseController() {
        $('body').on('click', '.js-showcase-asset', this.onAssetsClicked.bind(this));
        $('#showcase').on('click', this.onShowcaseClicked.bind(this));
    }
    ;
    ShowcaseController.prototype.onAssetsClicked = function (e) {
        alert('showcase');
        FullWindowToggleController_1.FullWindowToggleController.openFullWindowComponent(FullWindowToggleController_1.FullWindowComponentType.Showcase);
        var $ele = $(e.currentTarget);
        if ($ele.hasClass('photo')) {
            var imageUrl = $ele.data('image-url');
            var $asset = $("<div class=\"photo\">")
                .css('background-image', "url(" + imageUrl + ")");
            $('#showcase').html($asset);
        }
    };
    ;
    ShowcaseController.prototype.onShowcaseClicked = function (e) {
        FullWindowToggleController_1.FullWindowToggleController.closeAllFullWindowComponents();
    };
    ;
    return ShowcaseController;
}());
exports.ShowcaseController = ShowcaseController;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvd2Nhc2VDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2hvd2Nhc2VDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwyQ0FBb0UsOEJBQThCLENBQUMsQ0FBQTtBQUVuRztJQUVJO1FBRUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM3RSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7SUFFRCw0Q0FBZSxHQUFmLFVBQWdCLENBQU07UUFFbEIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWxCLHVEQUEwQixDQUFDLHVCQUF1QixDQUFDLG9EQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXJGLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUd4QyxJQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsdUJBQXFCLENBQUM7aUJBQ2xDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxTQUFPLFFBQVEsTUFBRyxDQUFDLENBQUM7WUFFakQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDO0lBQ0wsQ0FBQzs7SUFFRCw4Q0FBaUIsR0FBakIsVUFBa0IsQ0FBTTtRQUNwQix1REFBMEIsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO0lBQzlELENBQUM7O0lBR0wseUJBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBL0JZLDBCQUFrQixxQkErQjlCLENBQUE7QUFBQSxDQUFDIn0=