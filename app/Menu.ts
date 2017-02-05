declare const $: any;

export class Menu {

    constructor(
        private windowHeight: number
    ) {

        $('#menu .hamburger').on('click', this.onHamburgerClicked.bind(this));
        $('#menu').on('click', 'ul > li', this.onMenuItemsClicked.bind(this));
    };

    onHamburgerClicked() {
        $('html').toggleClass('open-menu');
        this.adjustMenuItems();
    };

    onMenuItemsClicked($event: any) {
        $('html').toggleClass('open-menu');

        const target = $($event.currentTarget).data('scrollTo');
        const offsetTop = $(target).offset().top;
        const currentOffsetTop = $(window).scrollTop();
        const offset = Math.max(offsetTop, currentOffsetTop) - Math.min(offsetTop, currentOffsetTop);
        $('html, body').animate({ scrollTop: offsetTop }, offset * 1.2);
    };

    adjustMenuItems() {
        const windowHeight = this.windowHeight;
        const $menuItems = $('#menu .menu-items');
        if (windowHeight > $menuItems.height()) {
            $menuItems.css('top', (windowHeight - $menuItems.height()) / 2);
        } else {
            $menuItems.height(windowHeight);
        }
    };

};