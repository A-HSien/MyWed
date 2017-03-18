"use strict";
var Utilities = require('../Utilities');
var FullWindowToggleController_1 = require('./FullWindowToggleController');
var MenuController = (function () {
    function MenuController(windowHeight) {
        this.windowHeight = windowHeight;
        $('#full-window-toggle .fa-bars').on('click', this.onHamburgerClicked.bind(this));
        $('#menu').on('click', 'ul > li', this.onMenuItemsClicked.bind(this));
    }
    ;
    MenuController.prototype.onHamburgerClicked = function () {
        this.adjustMenuItems();
    };
    ;
    MenuController.prototype.onMenuItemsClicked = function ($event) {
        FullWindowToggleController_1.FullWindowToggleController.closeAllFullWindowComponents();
        var target = $($event.currentTarget).data('scrollTo');
        var offsetTop = $(target).offset().top;
        var currentOffsetTop = $(window).scrollTop();
        var offset = Math.max(offsetTop, currentOffsetTop) - Math.min(offsetTop, currentOffsetTop);
        Utilities.scrollTo(target, offset * 0.5);
    };
    ;
    MenuController.prototype.adjustMenuItems = function () {
        var windowHeight = this.windowHeight;
        var $menuItems = $('#menu ul');
        var $menuItemsH = $menuItems.height();
        if (windowHeight > $menuItemsH) {
            $menuItems.css('margin-top', (windowHeight - $menuItemsH - 20) / 2);
        }
        else {
            $menuItems.height(windowHeight);
        }
    };
    ;
    return MenuController;
}());
exports.MenuController = MenuController;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVudUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNZW51Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBWSxTQUFTLFdBQU0sY0FBYyxDQUFDLENBQUE7QUFDMUMsMkNBQTJDLDhCQUE4QixDQUFDLENBQUE7QUFFMUU7SUFFSSx3QkFDWSxZQUFvQjtRQUFwQixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUc1QixDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7O0lBRUQsMkNBQWtCLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7O0lBR0QsMkNBQWtCLEdBQWxCLFVBQW1CLE1BQVc7UUFDMUIsdURBQTBCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztRQUUxRCxJQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4RCxJQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQ3pDLElBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQy9DLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUM3RixTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUE7SUFDNUMsQ0FBQzs7SUFFRCx3Q0FBZSxHQUFmO1FBQ0ksSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakMsSUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzdCLFVBQVUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsWUFBWSxHQUFHLFdBQVcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDTCxDQUFDOztJQUVMLHFCQUFDO0FBQUQsQ0FBQyxBQXBDRCxJQW9DQztBQXBDWSxzQkFBYyxpQkFvQzFCLENBQUE7QUFBQSxDQUFDIn0=