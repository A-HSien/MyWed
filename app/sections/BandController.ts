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

        new ScrollMagic.Scene({
            triggerElement: this.sectionName,
            triggerHook: "onEnter",
            duration: windowHeight + $(this.sectionName).height(),
        }).setTween(`${this.sectionName} .parallax-scrolling-background`, {
            css: { y: '0%' },
            ease: Linear.easeNone
        }).addTo(scrollMagicController);
    };

  
};
