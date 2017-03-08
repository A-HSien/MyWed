declare const $: any;

export enum FullWindowComponentType {
    None = 0,
    Menu = 1,
    Showcase = 2,
};


export class FullWindowToggleController {

    constructor(
    ) {
        $('#full-window-toggle .fa-bars').on('click', this.onHamburgerClicked.bind(this));
        $('#full-window-toggle .fa-arrow-left').on('click', this.onFullWindowDismissClicked.bind(this));
    };

    onHamburgerClicked() {
        FullWindowToggleController.openFullWindowComponent(FullWindowComponentType.Menu);
    };

    static openFullWindowComponent(type: FullWindowComponentType) {
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


    onFullWindowDismissClicked() {
        FullWindowToggleController.closeAllFullWindowComponents();
    };

    static closeAllFullWindowComponents() {
        $('#full-window-toggle .fa-arrow-left').hide();
        $('#full-window-toggle .fa-bars').show();
        $('#menu').removeClass('full-window-content-show');
        $('#menu').addClass('full-window-content-hidden');
        $('#showcase').removeClass('full-window-content-show');
        $('#showcase').addClass('full-window-content-hidden');
    };


};