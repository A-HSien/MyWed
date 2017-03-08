"use strict";
(function (FullWindowComponentType) {
    FullWindowComponentType[FullWindowComponentType["None"] = 0] = "None";
    FullWindowComponentType[FullWindowComponentType["Menu"] = 1] = "Menu";
    FullWindowComponentType[FullWindowComponentType["Showcase"] = 2] = "Showcase";
})(exports.FullWindowComponentType || (exports.FullWindowComponentType = {}));
var FullWindowComponentType = exports.FullWindowComponentType;
;
var FullWindowToggleController = (function () {
    function FullWindowToggleController() {
        $('#full-window-toggle .fa-bars').on('click', this.onHamburgerClicked.bind(this));
        $('#full-window-toggle .fa-arrow-left').on('click', this.onFullWindowDismissClicked.bind(this));
    }
    ;
    FullWindowToggleController.prototype.onHamburgerClicked = function () {
        FullWindowToggleController.openFullWindowComponent(FullWindowComponentType.Menu);
    };
    ;
    FullWindowToggleController.openFullWindowComponent = function (type) {
        $('#full-window-toggle .fa-bars').hide();
        $('#full-window-toggle .fa-arrow-left').show();
        switch (type) {
            case FullWindowComponentType.Menu:
                $('#menu').removeClass('full-window-content-hidden');
                $('#menu').addClass('full-window-content-show');
                $('#showcase').removeClass('full-window-content-show');
                $('#showcase').addClass('full-window-content-hidden');
                break;
            case FullWindowComponentType.Showcase:
                $('#menu').removeClass('full-window-content-show');
                $('#menu').addClass('full-window-content-hidden');
                $('#showcase').removeClass('full-window-content-hidden');
                $('#showcase').addClass('full-window-content-show');
                break;
        }
    };
    ;
    FullWindowToggleController.prototype.onFullWindowDismissClicked = function () {
        FullWindowToggleController.closeAllFullWindowComponents();
    };
    ;
    FullWindowToggleController.closeAllFullWindowComponents = function () {
        $('#full-window-toggle .fa-arrow-left').hide();
        $('#full-window-toggle .fa-bars').show();
        $('#menu').removeClass('full-window-content-show');
        $('#menu').addClass('full-window-content-hidden');
        $('#showcase').removeClass('full-window-content-show');
        $('#showcase').addClass('full-window-content-hidden');
    };
    ;
    return FullWindowToggleController;
}());
exports.FullWindowToggleController = FullWindowToggleController;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVsbFdpbmRvd1RvZ2dsZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGdWxsV2luZG93VG9nZ2xlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsV0FBWSx1QkFBdUI7SUFDL0IscUVBQVEsQ0FBQTtJQUNSLHFFQUFRLENBQUE7SUFDUiw2RUFBWSxDQUFBO0FBQ2hCLENBQUMsRUFKVywrQkFBdUIsS0FBdkIsK0JBQXVCLFFBSWxDO0FBSkQsSUFBWSx1QkFBdUIsR0FBdkIsK0JBSVgsQ0FBQTtBQUFBLENBQUM7QUFHRjtJQUVJO1FBRUksQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEYsQ0FBQyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEcsQ0FBQzs7SUFFRCx1REFBa0IsR0FBbEI7UUFDSSwwQkFBMEIsQ0FBQyx1QkFBdUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRixDQUFDOztJQUVNLGtEQUF1QixHQUE5QixVQUErQixJQUE2QjtRQUN4RCxDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QyxDQUFDLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUUvQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1gsS0FBSyx1QkFBdUIsQ0FBQyxJQUFJO2dCQUU3QixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLENBQUM7Z0JBQ3JELENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsQ0FBQztnQkFDaEQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLENBQUM7Z0JBQ3RELEtBQUssQ0FBQztZQUVWLEtBQUssdUJBQXVCLENBQUMsUUFBUTtnQkFDakMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLENBQUM7Z0JBQ2xELENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsNEJBQTRCLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUNwRCxLQUFLLENBQUM7UUFDZCxDQUFDO0lBR0wsQ0FBQzs7SUFHRCwrREFBMEIsR0FBMUI7UUFDSSwwQkFBMEIsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO0lBQzlELENBQUM7O0lBRU0sdURBQTRCLEdBQW5DO1FBQ0ksQ0FBQyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0MsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQzFELENBQUM7O0lBR0wsaUNBQUM7QUFBRCxDQUFDLEFBbkRELElBbURDO0FBbkRZLGtDQUEwQiw2QkFtRHRDLENBQUE7QUFBQSxDQUFDIn0=