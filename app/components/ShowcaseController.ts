declare const $: any;
import { FullWindowToggleController, FullWindowComponentType } from './FullWindowToggleController';

export class ShowcaseController {

    constructor(
    ) {
        $('body').on('click', '.js-showcase-asset', this.onAssetsClicked.bind(this));
        $('#showcase').on('click', this.onShowcaseClicked.bind(this));
    };

    onAssetsClicked(e: any) {
        FullWindowToggleController.openFullWindowComponent(FullWindowComponentType.Showcase);

        const $ele = $(e.currentTarget);
        if ($ele.hasClass('photo')) {
            const imageUrl = $ele.data('image-url');


            const $asset = $(`<div class="photo">`)
                .css('background-image', `url(${imageUrl})`);

            $('#showcase').html($asset);
        }
    };

    onShowcaseClicked(e: any) {
        FullWindowToggleController.closeAllFullWindowComponents();
    };


};