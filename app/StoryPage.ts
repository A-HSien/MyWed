declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const Linear: any;


export class StoryPage {

    constructor(scrollMagicController: any) {
        new ScrollMagic.Scene({
            triggerElement: '#story-container',
            triggerHook: "onEnter",
            duration: '200%',
        }).setTween('#story-background', {
            css: { y: '60%' },
            ease: Linear.easeNone
        }).addTo(scrollMagicController);
    };
};
