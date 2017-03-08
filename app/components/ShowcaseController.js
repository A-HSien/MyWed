"use strict";
var FullWindowToggleController_1 = require('./FullWindowToggleController');
var ShowcaseController = (function () {
    function ShowcaseController() {
        $('body').on('click', '.js-showcase-asset', this.onAssetsClicked.bind(this));
        $('#showcase').on('click', this.onShowcaseClicked.bind(this));
    }
    ;
    ShowcaseController.prototype.onAssetsClicked = function (e) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvd2Nhc2VDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2hvd2Nhc2VDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwyQ0FBb0UsOEJBQThCLENBQUMsQ0FBQTtBQUVuRztJQUVJO1FBRUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM3RSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7SUFFRCw0Q0FBZSxHQUFmLFVBQWdCLENBQU07UUFDbEIsdURBQTBCLENBQUMsdUJBQXVCLENBQUMsb0RBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFckYsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBR3hDLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyx1QkFBcUIsQ0FBQztpQkFDbEMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLFNBQU8sUUFBUSxNQUFHLENBQUMsQ0FBQztZQUVqRCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUM7SUFDTCxDQUFDOztJQUVELDhDQUFpQixHQUFqQixVQUFrQixDQUFNO1FBQ3BCLHVEQUEwQixDQUFDLDRCQUE0QixFQUFFLENBQUM7SUFDOUQsQ0FBQzs7SUFHTCx5QkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUE1QlksMEJBQWtCLHFCQTRCOUIsQ0FBQTtBQUFBLENBQUMifQ==