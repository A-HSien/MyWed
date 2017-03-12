declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const Linear: any;


export class StoryController {

    private sectionName = '#story-container';
    private isThumbnailInitiated = false;

    constructor(
        scrollMagicController: any,
        windowHeight: number,
        windowWidth: number
    ) {

        new ScrollMagic.Scene({
            triggerElement: this.sectionName,
            triggerHook: "onEnter",
            duration: windowHeight + $(this.sectionName).height(),
        }).addTo(scrollMagicController)
            .on("enter", e => {
                if (this.isThumbnailInitiated) return;
                this.setPhotos();
            });
    };

    private setPhotos() {

        this.isThumbnailInitiated = true;

        const thumbnailPath = 'assets/life/';
        const galleryPath = 'assets/life/';
        const photos = [
            '201307', '201308',
            '201312', '201401',
            '201401-3',
            '201401-4', '201402',
            '201403', '201406',
            '201407', '201501',
            '201504', '201504-2',
            '201507', '201601',
            '201607', '20160928',
            '20161126', '20161231',
            '20161231-2', '20170101',
        ];

        const eles = photos.reduce((array, photo) => {
            const $asset = $(`<div class="photo js-showcase-asset" data-image-url="${galleryPath}${photo}.jpg">`)
                .css('background-image', `url(${thumbnailPath}${photo}.jpg)`);
            array.push($asset);
            return array;
        }, []);

        $(this.sectionName).find('.assets-content').html(eles);
    };
};
