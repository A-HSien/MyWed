"use strict";
var FullWindowToggleController_1 = require('./FullWindowToggleController');
var ShowcaseController = (function () {
    function ShowcaseController() {
        $('#wrapper').on('click', '.js-showcase-asset', this.onAssetsClicked.bind(this));
        $('#showcase').on('click', this.onShowcaseClicked.bind(this));
    }
    ;
    ShowcaseController.prototype.onAssetsClicked = function (e) {
        FullWindowToggleController_1.FullWindowToggleController.openFullWindowComponent(FullWindowToggleController_1.FullWindowComponentType.Showcase);
        var $ele = $(e.currentTarget);
        if ($ele.hasClass('photo')) {
            var assetUrl = $ele.data('asset-url');
            var $asset = void 0;
            if ($ele.hasClass('isVideo')) {
                $asset = $("<video class=\"asset\" src=\"" + assetUrl + "\" controls>");
            }
            else {
                $asset = $("<div class=\"asset\">")
                    .css('background-image', "url(" + assetUrl + ")");
            }
            if ($asset) {
                $('#showcase').html($asset);
                return;
            }
        }
        this.onShowcaseClicked();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvd2Nhc2VDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2hvd2Nhc2VDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwyQ0FBb0UsOEJBQThCLENBQUMsQ0FBQTtBQUVuRztJQUVJO1FBRUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqRixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7SUFFRCw0Q0FBZSxHQUFmLFVBQWdCLENBQU07UUFFbEIsdURBQTBCLENBQUMsdUJBQXVCLENBQUMsb0RBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFckYsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVoQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRXhDLElBQUksTUFBTSxTQUFBLENBQUM7WUFDWCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsTUFBTSxHQUFHLENBQUMsQ0FBQyxrQ0FBNkIsUUFBUSxpQkFBYSxDQUFDLENBQUM7WUFDbkUsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE1BQU0sR0FBRyxDQUFDLENBQUMsdUJBQXFCLENBQUM7cUJBQzVCLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxTQUFPLFFBQVEsTUFBRyxDQUFDLENBQUM7WUFDckQsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDNUIsTUFBTSxDQUFDO1lBQ1gsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDOztJQUVELDhDQUFpQixHQUFqQixVQUFrQixDQUFPO1FBQ3JCLHVEQUEwQixDQUFDLDRCQUE0QixFQUFFLENBQUM7SUFDOUQsQ0FBQzs7SUFHTCx5QkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUFyQ1ksMEJBQWtCLHFCQXFDOUIsQ0FBQTtBQUFBLENBQUMifQ==