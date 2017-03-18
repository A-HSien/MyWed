declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const Linear: any;

import { LoadingComponent } from '../components/LoadingComponent';


export class GalleryController {

    private sectionName = '#gallery-container';
    private isThumbnailInitiated = false;
    private photos = [
        'J002190-0001.jpg', 'J002190-0034.jpg', 'J002190-0041.jpg', 'J002190-0049.jpg', 'J002190-0088.jpg',
        'J002190-0091.jpg', 'J002190-0092.jpg', 'J002190-0094.jpg', 'J002190-0096.jpg', 'J002190-0105.jpg',
        'J002190-0132.jpg', 'J002190-0143.jpg', 'J002190-0149.jpg', 'J002190-0158.jpg', 'J002190-0170.jpg',
        'J002190-0173.jpg', 'J002190-0179.jpg', 'J002190-0183.jpg', 'J002190-0188.jpg', 'J002190-0203.jpg',
        'J002190-0215.jpg', 'J002190-0222.jpg'
    ];

    constructor(
        scrollMagicController: any,
        windowHeight: number,
        windowWidth: number
    ) {

        this.setLoadingImg();

        new ScrollMagic.Scene({
            triggerElement: this.sectionName,
            duration: windowHeight + $(this.sectionName).height()
        })
            .addTo(scrollMagicController)
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

        const height = $(window).height() as number;
        const width = $(window).width() as number;
        const size = (height > width) ? height : width;
        let folder = 1920;
        [1920, 1080, 720, 360].forEach(e => {
            folder = (e > size) ? e : folder;
        });

        const thumbnailPath = 'assets/gallery/360/';
        const galleryPath = `assets/gallery/${folder}/`;

        this.photos.forEach((photo) => {
            const src = `${thumbnailPath}${photo}`;
            const $img = $(`<img src="${src}" />`);

            const $asset = $(`<div class="photo js-showcase-asset" data-image-url="${galleryPath}${photo}">`)
                .css('background-image', `url('${src}')`)
                .hide();

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