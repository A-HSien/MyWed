declare const $: any;
import { FullWindowToggleController, FullWindowComponentType } from './FullWindowToggleController';

export class ShowcaseController {

    constructor(
    ) {
        $('#wrapper').on('click', '.js-showcase-asset', this.onAssetsClicked.bind(this));
        $('#showcase').on('click', this.onShowcaseClicked.bind(this));
    };

    onAssetsClicked(e: any) {
        window.history.pushState(null, null, '#showcase');

        FullWindowToggleController.openFullWindowComponent(FullWindowComponentType.Showcase);

        const $ele = $(e.currentTarget);

        if ($ele.hasClass('photo')) {
            const assetUrl = $ele.data('asset-url');

            let $asset;
            if ($ele.hasClass('isVideo')) {
                $asset = $(`<video class="asset" src="${assetUrl}" controls>`);
            } else {
                $asset = $(`<div class="asset">`)
                    .css('background-image', `url(${assetUrl})`);
            }
            if ($asset) {
                $('#showcase').html($asset);
                return;
            }
        }
        this.onShowcaseClicked();
    };

    onShowcaseClicked(e?: any) {
        FullWindowToggleController.closeAllFullWindowComponents();
    };


};