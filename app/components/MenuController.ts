declare const $: any;
import * as Utilities from '../Utilities';
import { FullWindowToggleController } from './FullWindowToggleController';

export class MenuController {

    constructor(
        private windowHeight: number
    ) {

        $('#full-window-toggle .fa-bars').on('click', this.onHamburgerClicked.bind(this));
        $('#menu').on('click', 'ul > li', this.onMenuItemsClicked.bind(this));
    };

    onHamburgerClicked() {
        this.adjustMenuItems();
    };


    onMenuItemsClicked($event: any) {
        FullWindowToggleController.closeAllFullWindowComponents();

        const target = $($event.currentTarget).data('scrollTo');
        const offsetTop = $(target).offset().top;
        const currentOffsetTop = $(window).scrollTop();
        const offset = Math.max(offsetTop, currentOffsetTop) - Math.min(offsetTop, currentOffsetTop);
        Utilities.scrollTo(target, offset * 0.5)
    };

    adjustMenuItems() {
        const windowHeight = this.windowHeight;
        const $menuItems = $('#menu ul');
        const $menuItemsH = $menuItems.height();
        if (windowHeight > $menuItemsH) {
            $menuItems.css('margin-top', (windowHeight - $menuItemsH - 20) / 2);
        } else {
            $menuItems.height(windowHeight);
        }
    };

};