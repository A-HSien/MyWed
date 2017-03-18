declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const Linear: any;


export class BandController {

    private sectionName = '#band-container';
    private isThumbnailInitiated = false;

    constructor(
        scrollMagicController: any,
        windowHeight: number,
        windowWidth: number
    ) {
        const sectionH = $(this.sectionName).height();
        const duration = windowHeight + sectionH;

        new ScrollMagic.Scene({
            triggerElement: this.sectionName,
            triggerHook: 1,
            duration: duration,
        }).setTween(`${this.sectionName} .parallax-scrolling-background`, {
            css: { transform: 'translateY(0)' },
            ease: Linear.easeNone
        }).addTo(scrollMagicController);
    };


};
