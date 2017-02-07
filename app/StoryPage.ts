declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const Linear: any;


export class StoryPage {

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
            .on("enter leave", e => {
            });
    };
};
