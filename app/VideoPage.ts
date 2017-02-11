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
        this.setVideo();
        //this.setTweenForImageIcon(scrollMagicController, windowHeight);
    };


    private monitorSectionState(scrollMagicController: any, windowHeight: number) {

        const sectionName = '#header';

        new ScrollMagic.Scene({
            triggerElement: sectionName,
            duration: (windowHeight / 2),
            offset: 20
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



    private setVideo() {

        /** video */
        const videoEle = this.videoEle = document.getElementById('video');
        videoEle.innerHTML = '';
        const rate = 1280 / 720;

        let h = videoEle.clientHeight;
        let w = h * rate;
        if (videoEle.clientWidth > (w)) {
            w = videoEle.clientWidth;
            h = w / rate;
        }
        const renderer = this.renderer = PIXI.autoDetectRenderer(
            w, h, { transparent: true }
        );
        videoEle.appendChild(renderer.view);


        // create a video texture from a path
        const texture = this.texture = PIXI.Texture.fromVideo('assets/video/forest.mp4');
        const videoSource = texture.baseTexture.source;
        //if (videoSource.networkState !== 0)
        //    videoSource.play();


        // create a new Sprite using the video texture
        const videoSprite = new PIXI.Sprite(texture);
        videoSprite.width = renderer.width;
        videoSprite.height = renderer.height;

        // create the root of the scene graph
        const stage = this.stage = new PIXI.Container();
        stage.addChild(videoSprite);
    };

    private videoEle;
    private renderer;
    private stage;
    private texture;

    private playVideo() {

        const {videoEle, renderer, stage, texture } = this;
        const videoSource = texture.baseTexture.source;

        $(videoEle).fadeIn(2000);
        $('#header').removeClass('img-background');

        if (videoSource.ended && videoSource.paused) {
            videoSource.currentTime = 0;
            videoSource.play();
        }

        let animate = () => {
            renderer.render(stage);

            if ((videoSource.ended && videoSource.paused) ||
                this.sectionState === SectionState.Outside) {
                $(videoEle).fadeOut(2000);
                $('#header').addClass('img-background');
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