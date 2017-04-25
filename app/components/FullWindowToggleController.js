"use strict";
(function (FullWindowComponentType) {
    FullWindowComponentType[FullWindowComponentType["None"] = 0] = "None";
    FullWindowComponentType[FullWindowComponentType["Menu"] = 1] = "Menu";
    FullWindowComponentType[FullWindowComponentType["Showcase"] = 2] = "Showcase";
    FullWindowComponentType[FullWindowComponentType["ImageUploader"] = 3] = "ImageUploader";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVsbFdpbmRvd1RvZ2dsZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGdWxsV2luZG93VG9nZ2xlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsV0FBWSx1QkFBdUI7SUFDL0IscUVBQVEsQ0FBQTtJQUNSLHFFQUFRLENBQUE7SUFDUiw2RUFBWSxDQUFBO0lBQ1osdUZBQWlCLENBQUE7QUFDckIsQ0FBQyxFQUxXLCtCQUF1QixLQUF2QiwrQkFBdUIsUUFLbEM7QUFMRCxJQUFZLHVCQUF1QixHQUF2QiwrQkFLWCxDQUFBO0FBQUEsQ0FBQztBQUdGO0lBRUk7UUFFSSxDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRixDQUFDLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRyxDQUFDOztJQUVELHVEQUFrQixHQUFsQjtRQUNJLDBCQUEwQixDQUFDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JGLENBQUM7O0lBRU0sa0RBQXVCLEdBQTlCLFVBQStCLElBQTZCO1FBQ3hELENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRS9DLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDWCxLQUFLLHVCQUF1QixDQUFDLElBQUk7Z0JBRTdCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsNEJBQTRCLENBQUMsQ0FBQztnQkFDckQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDLDBCQUEwQixDQUFDLENBQUM7Z0JBQ3ZELENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLENBQUMsQ0FBQztnQkFDdEQsS0FBSyxDQUFDO1lBRVYsS0FBSyx1QkFBdUIsQ0FBQyxRQUFRO2dCQUNqQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLDBCQUEwQixDQUFDLENBQUM7Z0JBQ25ELENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLENBQUMsQ0FBQztnQkFDbEQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUM7Z0JBQ3BELEtBQUssQ0FBQztRQUNkLENBQUM7SUFHTCxDQUFDOztJQUdELCtEQUEwQixHQUExQjtRQUNJLDBCQUEwQixDQUFDLDRCQUE0QixFQUFFLENBQUM7SUFDOUQsQ0FBQzs7SUFFTSx1REFBNEIsR0FBbkM7UUFDSSxDQUFDLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQyxDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDMUQsQ0FBQzs7SUFHTCxpQ0FBQztBQUFELENBQUMsQUFuREQsSUFtREM7QUFuRFksa0NBQTBCLDZCQW1EdEMsQ0FBQTtBQUFBLENBQUMifQ==