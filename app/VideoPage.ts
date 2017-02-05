declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const PIXI: any;


export class VideoPage {

    constructor(
        scrollMagicController: any
    ) {
        this.playVideo();
        this.setTweenForImage(scrollMagicController);
    };

    private playVideo() {
        /** header */
        //$header = $('#header');

        //$header.height(windowHeight);

        /** video */
        const videoEle = document.getElementById('video');
        videoEle.innerHTML = '';
        var renderer = PIXI.autoDetectRenderer(videoEle.clientWidth, videoEle.clientHeight, { transparent: true });
        videoEle.appendChild(renderer.view);


        // create a video texture from a path
        const texture = PIXI.Texture.fromVideo('assets/video/forest.mp4');
        const videoSource = texture.baseTexture.source;
        // texture.baseTexture.source.loop = true;

        // create a new Sprite using the video texture
        const videoSprite = new PIXI.Sprite(texture);
        videoSprite.width = renderer.width;
        videoSprite.height = renderer.height;

        // create the root of the scene graph
        const stage = new PIXI.Container();
        stage.addChild(videoSprite);

        $(videoEle).fadeIn(2000);
        $('#header').removeClass('img-background');
        animate();

        function animate() {
            if (videoSource.ended) {
                $(videoEle).fadeOut(2000);
                $('#header').addClass('img-background');
                return;
            }

            renderer.render(stage);
            requestAnimationFrame(animate);
        }
    };

    private setTweenForImage(scrollMagicController: any) {

        var headerAction = {
            imgScene: new ScrollMagic.Scene({
                triggerElement: '#header img',
                duration: 1600,
                offset: 0
            }),
            imgAction: TweenMax.to('#header img', 1, {
                autoAlpha: 0,
                scale: 0.1,
                force3D: true
            }),
            //navScene: new ScrollMagic.Scene({
            //    triggerElement: '#wrapper',
            //    duration: 100,
            //    offset: 0
            //}),
            //navAction: TweenMax.to('nav', 1, {
            //    autoAlpha: 1,
            //    force3D: true
            //})
        };
        headerAction.imgScene
            .setTween(headerAction.imgAction)
            .addTo(scrollMagicController);

        //headerAction.navScene
        //    .setTween(headerAction.navAction)
        //    .addTo(scrollMagicController);
    };
};