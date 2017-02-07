declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const PIXI: any;

import {SectionState} from './SectionState.enum';


export class VideoPage {

    private sectionState: SectionState = SectionState.Inside;

    constructor(
        scrollMagicController: any,
        windowHeight: number,
        windowWidth: number
    ) {
        this.monitorSectionState(scrollMagicController, windowHeight);
        //this.setTweenForImageIcon(scrollMagicController, windowHeight);
    };


    private monitorSectionState(scrollMagicController: any, windowHeight: number) {

        const sectionName = '#header';

        new ScrollMagic.Scene({
            triggerElement: sectionName,
            duration: windowHeight + $(sectionName).height(),
            offset: 0
        })
            .addTo(scrollMagicController)
            .on("enter leave", e => {
                if (e.type === "enter") {
                    this.sectionState = SectionState.Inside;
                    this.playVideo();
                } else {
                    this.sectionState = SectionState.Outside;
                }
            });
    };


    private playVideo() {

        /** video */
        const videoEle = document.getElementById('video');
        videoEle.innerHTML = '';
        var renderer = PIXI.autoDetectRenderer(videoEle.clientWidth, videoEle.clientHeight, { transparent: true });
        videoEle.appendChild(renderer.view);


        // create a video texture from a path
        const texture = PIXI.Texture.fromVideo('assets/video/forest.mp4');
        const videoSource = texture.baseTexture.source;

        // create a new Sprite using the video texture
        const videoSprite = new PIXI.Sprite(texture);
        videoSprite.width = renderer.width;
        videoSprite.height = renderer.height;

        // create the root of the scene graph
        const stage = new PIXI.Container();
        stage.addChild(videoSprite);

        $(videoEle).fadeIn(2000);
        $('#header').removeClass('img-background');

        let animate = () => {
            renderer.render(stage);

            
            if (videoSource.ended && videoSource.paused) {
                stage.destroy();
                videoSprite.destroy();
                renderer.destroy();

                $(videoEle).fadeOut(2000);
                $('#header').addClass('img-background');
                
                return;
            }
            if (this.sectionState === SectionState.Outside) {
                videoSource.pause();

                stage.destroy();
                videoSprite.destroy();
                renderer.destroy();
                
                return;
            }

            requestAnimationFrame(animate);
        };
        //videoSource.onended = (() => animate());
        animate();

    };


    //private initAnimate() {
    //    $(videoEle).fadeIn(2000);
    //    $('#header').removeClass('img-background');
    //};


    private setTweenForImageIcon(scrollMagicController: any, windowHeight: number) {

        new ScrollMagic.Scene({
            triggerElement: '#header img',
            duration: windowHeight,
            offset: 0
        })
            .setTween(TweenMax.to('#header img', 1, {
                autoAlpha: 0,
                scale: 0.5,
                force3D: true
            }))
            .addTo(scrollMagicController);
    };
};