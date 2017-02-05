"use strict";
var Menu = (function () {
    function Menu(windowHeight) {
        this.windowHeight = windowHeight;
        $('#menu .hamburger').on('click', this.onHamburgerClicked.bind(this));
        $('#menu').on('click', 'ul > li', this.onMenuItemsClicked.bind(this));
    }
    ;
    Menu.prototype.onHamburgerClicked = function () {
        $('html').toggleClass('open-menu');
        this.adjustMenuItems();
    };
    ;
    Menu.prototype.onMenuItemsClicked = function ($event) {
        $('html').toggleClass('open-menu');
        var target = $($event.currentTarget).data('scrollTo');
        var offsetTop = $(target).offset().top;
        var currentOffsetTop = $(window).scrollTop();
        var offset = Math.max(offsetTop, currentOffsetTop) - Math.min(offsetTop, currentOffsetTop);
        $('html, body').animate({ scrollTop: offsetTop }, offset * 1.2);
    };
    ;
    Menu.prototype.adjustMenuItems = function () {
        var windowHeight = this.windowHeight;
        var $menuItems = $('#menu .menu-items');
        if (windowHeight > $menuItems.height()) {
            $menuItems.css('top', (windowHeight - $menuItems.height()) / 2);
        }
        else {
            $menuItems.height(windowHeight);
        }
    };
    ;
    return Menu;
}());
exports.Menu = Menu;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBO0lBRUksY0FDWSxZQUFvQjtRQUFwQixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUc1QixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7O0lBRUQsaUNBQWtCLEdBQWxCO1FBQ0ksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7SUFFRCxpQ0FBa0IsR0FBbEIsVUFBbUIsTUFBVztRQUMxQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRW5DLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELElBQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDekMsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0MsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdGLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7O0lBRUQsOEJBQWUsR0FBZjtRQUNJLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdkMsSUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDMUMsRUFBRSxDQUFDLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxDQUFDO0lBQ0wsQ0FBQzs7SUFFTCxXQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQztBQW5DWSxZQUFJLE9BbUNoQixDQUFBO0FBQUEsQ0FBQyJ9