declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const Linear: any;

import { LoadingComponent } from '../components/LoadingComponent';

export class StoryController {

    private sectionName = '#story-container';
    private isThumbnailInitiated = false;
    private photos = [
        '201307',
        '201308',
        '201312',
        '201401',
        '201401-2',
        '201401-3',
        '201401-4',
        '201402',
        '201403',
        '201406',
        '201407',
        '201501',
        '201504',
        '201504-2',
        '201507',
        '201601',
        '201601-2',
        '201605',
        '201607',
        '201609',
        '201611',
        '201612',
        '201612-2',
        '201701',
    ];

    constructor(
        scrollMagicController: any,
        windowHeight: number,
        windowWidth: number
    ) {

        this.setLoadingImg();

        new ScrollMagic.Scene({
            triggerElement: this.sectionName,
            duration: windowHeight + $(this.sectionName).height(),
        }).addTo(scrollMagicController)
            .on("enter", e => this.loadThumbnail());
    };

    private setLoadingImg() {
        const thumbnailPaths = this.photos.reduce((array, photo) => {
            const $asset = new LoadingComponent();
            array.push($asset.$element.addClass('photo'));
            return array;
        }, []);

        $(this.sectionName).find('.assets-content').html(thumbnailPaths);
    };

    private loadThumbnail() {
        if (this.isThumbnailInitiated) return;
        this.isThumbnailInitiated = true;

        const thumbnailPath = 'assets/life/360/';
        const galleryPath = 'assets/life/original/';

        this.photos.forEach((photo) => {
            const src = `${thumbnailPath}${photo}.jpg`;
            const $img = $(`<img src="${src}" />`);

            const $asset = $(`<div class="photo js-showcase-asset" data-asset-url="${galleryPath}${photo}.jpg">`)
                .css('background-image', `url(${src})`);

            $img.on('load', (e) => {
                this.setThumbnail($asset);
            });
        });
    };


    private setThumbnail($asset) {
        const $loader = $(this.sectionName).find('.assets-content .loader').first();
        $loader.before($asset);
        $loader.remove();
        $asset.fadeIn();
    };
};
