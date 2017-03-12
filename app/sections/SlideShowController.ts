declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const Linear: any;

import {SectionState} from '../SectionState.enum';


export class SlideShowController {

    private sectionState: SectionState = SectionState.Inside;

    private $photo = $('#gallery .photo');

    private photos = [
        'W_J002190-0001.jpg', 'W_J002190-0034.jpg', 'W_J002190-0041.jpg', 'W_J002190-0049.jpg', 'W_J002190-0088.jpg',
        'W_J002190-0091.jpg', 'W_J002190-0092.jpg', 'W_J002190-0094.jpg', 'W_J002190-0096.jpg', 'W_J002190-0105.jpg',
        'W_J002190-0132.jpg', 'W_J002190-0143.jpg', 'W_J002190-0149.jpg', 'W_J002190-0158.jpg', 'W_J002190-0170.jpg',
        'W_J002190-0173.jpg', 'W_J002190-0179.jpg', 'W_J002190-0183.jpg', 'W_J002190-0188.jpg', 'W_J002190-0203.jpg',
        'W_J002190-0215.jpg', 'W_J002190-0222.jpg'
    ];

    private thumbnailInitiated = false;

    constructor(
        scrollMagicController: any,
        windowHeight: number,
        windowWidth: number
    ) {

        this.setTweenForBackgroundAndMonitorSectionState(scrollMagicController, windowHeight);
    };


    private setTweenForBackgroundAndMonitorSectionState(scrollMagicController: any, windowHeight: number) {

        const sectionName = '#gallery';

        new ScrollMagic.Scene({
            triggerElement: sectionName,
            duration: windowHeight + $(sectionName).height(),
            offset: 0
        })
            //.setTween('#gallery-background', {
            //    css: { y: '0%' },
            //    ease: Linear.easeNone
            //})
            .addTo(scrollMagicController)
            .on("enter leave", e => {
                if (e.type === "enter") {
                    this.sectionState = SectionState.Inside;
                    this.setThumbnail();
                    this.loadImage();
                } else {
                    this.sectionState = SectionState.Outside;
                }
            });
    };

    private setThumbnail() {
        if (this.thumbnailInitiated) return;
        this.thumbnailInitiated = true;

        const thumbnailPath = 'assets/img/thumbnail/';

        const thumbnailPaths = this.photos.reduce(function (array, photo) {
            var $img = $('<div>').css('background-image', 'url(' + thumbnailPath + photo + ')');
            array.push($img);
            return array;
        }, []);

        $('#gallery .photos').width(102 * thumbnailPaths.length);
        $('#gallery .photos').html(thumbnailPaths);
    };

    private loadImage() {
        if (this.sectionState === SectionState.Outside) return;

        const galleryPath = 'assets/img/gallery/';
        const img = new Image();
        img.src = galleryPath + this.photos[0];

        img.onload = () => this.setImage(img.src);
        img.onerror = () => this.resetImage();
    };

    private setImage(src: string) {
        this.$photo.css('background-image', `url(${src})`);
        TweenMax.to(
            this.$photo,
            3,
            { opacity: 1 }
        );
        setTimeout(this.resetImage.bind(this), 12000);
    };

    private resetImage() {
        this.photos.push(this.photos.shift());
        TweenMax.to(
            this.$photo,
            1,
            {
                opacity: 0,
                onComplete: this.loadImage.bind(this)
            }
        );
    };

};
