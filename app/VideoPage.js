"use strict";
var VideoPage = (function () {
    function VideoPage(scrollMagicController) {
        this.playVideo();
        this.setTweenForImage(scrollMagicController);
    }
    ;
    VideoPage.prototype.playVideo = function () {
        /** header */
        //$header = $('#header');
        //$header.height(windowHeight);
        /** video */
        var videoEle = document.getElementById('video');
        videoEle.innerHTML = '';
        var renderer = PIXI.autoDetectRenderer(videoEle.clientWidth, videoEle.clientHeight, { transparent: true });
        videoEle.appendChild(renderer.view);
        // create a video texture from a path
        var texture = PIXI.Texture.fromVideo('assets/video/forest.mp4');
        var videoSource = texture.baseTexture.source;
        // texture.baseTexture.source.loop = true;
        // create a new Sprite using the video texture
        var videoSprite = new PIXI.Sprite(texture);
        videoSprite.width = renderer.width;
        videoSprite.height = renderer.height;
        // create the root of the scene graph
        var stage = new PIXI.Container();
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
        //var $video = $header.find('video');
        //$video.fadeOut();
        //$video.on('ended', function () {
        //    $video.fadeOut();
        //    $header.addClass('img-background');
        //    setTimeout(function () {
        //        $header.removeClass('img-background');
        //        $video[0].play();
        //    }, 3000);
        //});
        //$video.on('play', function () {
        //    $video.fadeIn(2000);
        //    $header.removeClass('img-background');
        //});
        //var timeForCheck = new Date();
        //$video.on('loadeddata', function () {
        //    var timeForTimeout = 3000 - (new Date() - timeForCheck);
        //    setTimeout(function () {
        //        $video[0].play();
        //        delete timeForCheck;
        //        delete timeForTimeout;
        //    }, timeForTimeout);
        //});
        /* video end*/
    };
    ;
    VideoPage.prototype.setTweenForImage = function (scrollMagicController) {
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
        };
        headerAction.imgScene
            .setTween(headerAction.imgAction)
            .addTo(scrollMagicController);
        //headerAction.navScene
        //    .setTween(headerAction.navAction)
        //    .addTo(scrollMagicController);
    };
    ;
    return VideoPage;
}());
exports.VideoPage = VideoPage;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlkZW9QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVmlkZW9QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQTtJQUVJLG1CQUNJLHFCQUEwQjtRQUUxQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDakQsQ0FBQzs7SUFFTyw2QkFBUyxHQUFqQjtRQUNJLGFBQWE7UUFDYix5QkFBeUI7UUFFekIsK0JBQStCO1FBRS9CLFlBQVk7UUFDWixJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELFFBQVEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxZQUFZLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMzRyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUdwQyxxQ0FBcUM7UUFDckMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNsRSxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUMvQywwQ0FBMEM7UUFFMUMsOENBQThDO1FBQzlDLElBQU0sV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxXQUFXLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDbkMsV0FBVyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRXJDLHFDQUFxQztRQUNyQyxJQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTVCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sRUFBRSxDQUFDO1FBRVY7WUFDSSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUN4QyxNQUFNLENBQUM7WUFDWCxDQUFDO1lBRUQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBSUQscUNBQXFDO1FBQ3JDLG1CQUFtQjtRQUNuQixrQ0FBa0M7UUFDbEMsdUJBQXVCO1FBQ3ZCLHlDQUF5QztRQUN6Qyw4QkFBOEI7UUFDOUIsZ0RBQWdEO1FBQ2hELDJCQUEyQjtRQUMzQixlQUFlO1FBQ2YsS0FBSztRQUNMLGlDQUFpQztRQUNqQywwQkFBMEI7UUFDMUIsNENBQTRDO1FBQzVDLEtBQUs7UUFDTCxnQ0FBZ0M7UUFDaEMsdUNBQXVDO1FBQ3ZDLDhEQUE4RDtRQUM5RCw4QkFBOEI7UUFDOUIsMkJBQTJCO1FBQzNCLDhCQUE4QjtRQUM5QixnQ0FBZ0M7UUFDaEMseUJBQXlCO1FBQ3pCLEtBQUs7UUFDTCxjQUFjO0lBQ2xCLENBQUM7O0lBRU8sb0NBQWdCLEdBQXhCLFVBQXlCLHFCQUEwQjtRQUUvQyxJQUFJLFlBQVksR0FBRztZQUNmLFFBQVEsRUFBRSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQzVCLGNBQWMsRUFBRSxhQUFhO2dCQUM3QixRQUFRLEVBQUUsSUFBSTtnQkFDZCxNQUFNLEVBQUUsQ0FBQzthQUNaLENBQUM7WUFDRixTQUFTLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQztnQkFDWixLQUFLLEVBQUUsR0FBRztnQkFDVixPQUFPLEVBQUUsSUFBSTthQUNoQixDQUFDO1NBVUwsQ0FBQztRQUNGLFlBQVksQ0FBQyxRQUFRO2FBQ2hCLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO2FBQ2hDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRWxDLHVCQUF1QjtRQUN2Qix1Q0FBdUM7UUFDdkMsb0NBQW9DO0lBQ3hDLENBQUM7O0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBOUdELElBOEdDO0FBOUdZLGlCQUFTLFlBOEdyQixDQUFBO0FBQUEsQ0FBQyJ9