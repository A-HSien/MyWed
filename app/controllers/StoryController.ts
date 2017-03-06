declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const Linear: any;


export class StoryController {

    constructor(
        scrollMagicController: any,
        windowHeight: number,
        windowWidth: number
    ) {

        const sectionName = '#story-container';

        new ScrollMagic.Scene({
            triggerElement: sectionName,
            triggerHook: "onEnter",
            duration: windowHeight + $(sectionName).height(),
        }).setTween('#story-background', {
            css: { y: '0%' },
            ease: Linear.easeNone
        }).addTo(scrollMagicController)
            .on("enter", e => {
                this.setPhotos();
            });
    };

    private setPhotos() {

        const basePath = 'assets/life/';
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
            const $img = $('<div class="photo">').css('background-image', `url(${basePath}${photo}.jpg)`);
            array.push($img);
            return array;
        }, []);

        $('#story-content').html(eles);
    };
};
