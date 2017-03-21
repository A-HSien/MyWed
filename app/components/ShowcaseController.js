"use strict";
var FullWindowToggleController_1 = require('./FullWindowToggleController');
var ShowcaseController = (function () {
    function ShowcaseController() {
        $('#wrapper').on('click', '.js-showcase-asset', this.onAssetsClicked.bind(this));
        $('#showcase').on('click', this.onShowcaseClicked.bind(this));
    }
    ;
    ShowcaseController.prototype.onAssetsClicked = function (e) {
        window.history.pushState(null, null, '#showcase');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvd2Nhc2VDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2hvd2Nhc2VDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwyQ0FBb0UsOEJBQThCLENBQUMsQ0FBQTtBQUVuRztJQUVJO1FBRUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqRixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7SUFFRCw0Q0FBZSxHQUFmLFVBQWdCLENBQU07UUFDbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUVsRCx1REFBMEIsQ0FBQyx1QkFBdUIsQ0FBQyxvREFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVyRixJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWhDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFeEMsSUFBSSxNQUFNLFNBQUEsQ0FBQztZQUNYLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixNQUFNLEdBQUcsQ0FBQyxDQUFDLGtDQUE2QixRQUFRLGlCQUFhLENBQUMsQ0FBQztZQUNuRSxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxHQUFHLENBQUMsQ0FBQyx1QkFBcUIsQ0FBQztxQkFDNUIsR0FBRyxDQUFDLGtCQUFrQixFQUFFLFNBQU8sUUFBUSxNQUFHLENBQUMsQ0FBQztZQUNyRCxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM1QixNQUFNLENBQUM7WUFDWCxDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7O0lBRUQsOENBQWlCLEdBQWpCLFVBQWtCLENBQU87UUFDckIsdURBQTBCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUM5RCxDQUFDOztJQUdMLHlCQUFDO0FBQUQsQ0FBQyxBQXRDRCxJQXNDQztBQXRDWSwwQkFBa0IscUJBc0M5QixDQUFBO0FBQUEsQ0FBQyJ9