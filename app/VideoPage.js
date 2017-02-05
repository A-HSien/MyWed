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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlkZW9QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVmlkZW9QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQTtJQUVJLG1CQUNJLHFCQUEwQjtRQUUxQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDakQsQ0FBQzs7SUFFTyw2QkFBUyxHQUFqQjtRQUNJLGFBQWE7UUFDYix5QkFBeUI7UUFFekIsK0JBQStCO1FBRS9CLFlBQVk7UUFDWixJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELFFBQVEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxZQUFZLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMzRyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUdwQyxxQ0FBcUM7UUFDckMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNsRSxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUMvQywwQ0FBMEM7UUFFMUMsOENBQThDO1FBQzlDLElBQU0sV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxXQUFXLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDbkMsV0FBVyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRXJDLHFDQUFxQztRQUNyQyxJQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTVCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sRUFBRSxDQUFDO1FBRVY7WUFDSSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUN4QyxNQUFNLENBQUM7WUFDWCxDQUFDO1lBRUQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDO0lBQ0wsQ0FBQzs7SUFFTyxvQ0FBZ0IsR0FBeEIsVUFBeUIscUJBQTBCO1FBRS9DLElBQUksWUFBWSxHQUFHO1lBQ2YsUUFBUSxFQUFFLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDNUIsY0FBYyxFQUFFLGFBQWE7Z0JBQzdCLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE1BQU0sRUFBRSxDQUFDO2FBQ1osQ0FBQztZQUNGLFNBQVMsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUU7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDO2dCQUNaLEtBQUssRUFBRSxHQUFHO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2FBQ2hCLENBQUM7U0FVTCxDQUFDO1FBQ0YsWUFBWSxDQUFDLFFBQVE7YUFDaEIsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7YUFDaEMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFbEMsdUJBQXVCO1FBQ3ZCLHVDQUF1QztRQUN2QyxvQ0FBb0M7SUFDeEMsQ0FBQzs7SUFDTCxnQkFBQztBQUFELENBQUMsQUFuRkQsSUFtRkM7QUFuRlksaUJBQVMsWUFtRnJCLENBQUE7QUFBQSxDQUFDIn0=