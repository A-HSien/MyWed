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

        const height = $(window).height() as number;
        const width = $(window).width() as number;
        const size = (height>width)? height: width;
        let folder;
        const allSize = [1920,1080,720,360];
       allSize.forEach( e => {
          if( e > size )
          folder = e;
        });
        if(!folder)
            folder=1920;

        this.isThumbnailInitiated = true;

        const thumbnailPath = 'assets/gallery/360/';
        const galleryPath = `assets/gallery/${folder}/`;
        const photos = [
            'J002190-0001.jpg', 'J002190-0034.jpg', 'J002190-0041.jpg', 'J002190-0049.jpg', 'J002190-0088.jpg',
            'J002190-0091.jpg', 'J002190-0092.jpg', 'J002190-0094.jpg', 'J002190-0096.jpg', 'J002190-0105.jpg',
            'J002190-0132.jpg', 'J002190-0143.jpg', 'J002190-0149.jpg', 'J002190-0158.jpg', 'J002190-0170.jpg',
            'J002190-0173.jpg', 'J002190-0179.jpg', 'J002190-0183.jpg', 'J002190-0188.jpg', 'J002190-0203.jpg',
            'J002190-0215.jpg', 'J002190-0222.jpg'
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