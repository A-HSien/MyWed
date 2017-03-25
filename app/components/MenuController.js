"use strict";
var Utilities = require('../Utilities');
var FullWindowToggleController_1 = require('./FullWindowToggleController');
var MenuController = (function () {
    function MenuController(windowHeight) {
        this.windowHeight = windowHeight;
        $('#full-window-toggle .fa-bars').on('click', this.onHamburgerClicked.bind(this));
        $('#menu').on('click', 'ul > li', this.onMenuItemsClicked.bind(this));
        $('#menu').on('click', function (e) {
            FullWindowToggleController_1.FullWindowToggleController.closeAllFullWindowComponents();
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVudUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNZW51Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBWSxTQUFTLFdBQU0sY0FBYyxDQUFDLENBQUE7QUFDMUMsMkNBQTJDLDhCQUE4QixDQUFDLENBQUE7QUFFMUU7SUFFSSx3QkFDWSxZQUFvQjtRQUFwQixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUc1QixDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUEsQ0FBQztZQUNwQix1REFBMEIsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7SUFFRCwyQ0FBa0IsR0FBbEI7UUFDSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7SUFHRCwyQ0FBa0IsR0FBbEIsVUFBbUIsTUFBVztRQUMxQix1REFBMEIsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBRTFELElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELElBQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDekMsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0MsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdGLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQTtJQUM1QyxDQUFDOztJQUVELHdDQUFlLEdBQWY7UUFDSSxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqQyxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEMsRUFBRSxDQUFDLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDN0IsVUFBVSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxZQUFZLEdBQUcsV0FBVyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNMLENBQUM7O0lBRUwscUJBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBdkNZLHNCQUFjLGlCQXVDMUIsQ0FBQTtBQUFBLENBQUMifQ==