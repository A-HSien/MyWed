declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const Linear: any;

import { SectionState } from '../SectionState.enum';


export class GalleryController {

    private sectionName = '#gallery-container';
    private sectionState: SectionState = SectionState.Inside;
    private isThumbnailInitiated = false;

    constructor(
        scrollMagicController: any,
        windowHeight: number,
        windowWidth: number
    ) {

        new ScrollMagic.Scene({
            triggerElement: this.sectionName,
            duration: windowHeight + $(this.sectionName).height(),
            offset: 0
        })
            .addTo(scrollMagicController)
            .on("enter", e => {
                if (this.isThumbnailInitiated) return;
                this.setThumbnail();
            });
    };



    private setThumbnail() {
        this.isThumbnailInitiated = true;

        const thumbnailPath = 'assets/img/thumbnail/';
        const galleryPath = 'assets/img/gallery/';
        const photos = [
            'W_J002190-0001.jpg', 'W_J002190-0034.jpg', 'W_J002190-0041.jpg', 'W_J002190-0049.jpg', 'W_J002190-0088.jpg',
            'W_J002190-0091.jpg', 'W_J002190-0092.jpg', 'W_J002190-0094.jpg', 'W_J002190-0096.jpg', 'W_J002190-0105.jpg',
            'W_J002190-0132.jpg', 'W_J002190-0143.jpg', 'W_J002190-0149.jpg', 'W_J002190-0158.jpg', 'W_J002190-0170.jpg',
            'W_J002190-0173.jpg', 'W_J002190-0179.jpg', 'W_J002190-0183.jpg', 'W_J002190-0188.jpg', 'W_J002190-0203.jpg',
            'W_J002190-0215.jpg', 'W_J002190-0222.jpg'
        ];

        const thumbnailPaths = photos.reduce((array, photo) => {
            const $asset = $(`<div class="photo js-showcase-asset" data-image-url="${galleryPath}${photo}">`)
                .css('background-image', 'url(' + thumbnailPath + photo + ')');
            array.push($asset);
            return array;
        }, []);

        $(this.sectionName).find('.assets-content').html(thumbnailPaths);
    };


};
