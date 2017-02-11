"use strict";
var SectionState_enum_1 = require('./SectionState.enum');
var VideoPage = (function () {
    function VideoPage(scrollMagicController, windowHeight, windowWidth) {
        this.sectionState = SectionState_enum_1.SectionState.Inside;
        this.monitorSectionState(scrollMagicController, windowHeight);
        this.setVideo();
        //this.setTweenForImageIcon(scrollMagicController, windowHeight);
    }
    ;
    VideoPage.prototype.monitorSectionState = function (scrollMagicController, windowHeight) {
        var _this = this;
        var sectionName = '#header';
        new ScrollMagic.Scene({
            triggerElement: sectionName,
            duration: (windowHeight / 2),
            offset: 20
        })
            .addTo(scrollMagicController)
            .on("enter leave", function (e) {
            if (e.type === "enter") {
                _this.sectionState = SectionState_enum_1.SectionState.Inside;
                _this.playVideo();
            }
            else {
                _this.sectionState = SectionState_enum_1.SectionState.Outside;
            }
        });
    };
    ;
    VideoPage.prototype.setVideo = function () {
        /** video */
        var videoEle = this.videoEle = document.getElementById('video');
        videoEle.innerHTML = '';
        var rate = 1280 / 720;
        var h = videoEle.clientHeight;
        var w = h * rate;
        if (videoEle.clientWidth > (w)) {
            w = videoEle.clientWidth;
            h = w / rate;
        }
        var renderer = this.renderer = PIXI.autoDetectRenderer(w, h, { transparent: true });
        videoEle.appendChild(renderer.view);
        // create a video texture from a path
        var texture = this.texture = PIXI.Texture.fromVideo('assets/video/forest.mp4');
        var videoSource = texture.baseTexture.source;
        //if (videoSource.networkState !== 0)
        //    videoSource.play();
        // create a new Sprite using the video texture
        var videoSprite = new PIXI.Sprite(texture);
        videoSprite.width = renderer.width;
        videoSprite.height = renderer.height;
        // create the root of the scene graph
        var stage = this.stage = new PIXI.Container();
        stage.addChild(videoSprite);
    };
    ;
    VideoPage.prototype.playVideo = function () {
        var _this = this;
        var _a = this, videoEle = _a.videoEle, renderer = _a.renderer, stage = _a.stage, texture = _a.texture;
        var videoSource = texture.baseTexture.source;
        $(videoEle).fadeIn(2000);
        $('#header').removeClass('img-background');
        if (videoSource.ended && videoSource.paused) {
            videoSource.currentTime = 0;
            videoSource.play();
        }
        var animate = function () {
            renderer.render(stage);
            if ((videoSource.ended && videoSource.paused) ||
                _this.sectionState === SectionState_enum_1.SectionState.Outside) {
                $(videoEle).fadeOut(2000);
                $('#header').addClass('img-background');
                return;
            }
            requestAnimationFrame(animate);
        };
        //videoSource.onended = (() => animate());
        animate();
    };
    ;
    //private initAnimate() {
    //    $(videoEle).fadeIn(2000);
    //    $('#header').removeClass('img-background');
    //};
    VideoPage.prototype.setTweenForImageIcon = function (scrollMagicController, windowHeight) {
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
    ;
    return VideoPage;
}());
exports.VideoPage = VideoPage;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlkZW9QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVmlkZW9QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQSxrQ0FBMkIscUJBQXFCLENBQUMsQ0FBQTtBQUdqRDtJQUlJLG1CQUNJLHFCQUEwQixFQUMxQixZQUFvQixFQUNwQixXQUFtQjtRQUxmLGlCQUFZLEdBQWlCLGdDQUFZLENBQUMsTUFBTSxDQUFDO1FBT3JELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsaUVBQWlFO0lBQ3JFLENBQUM7O0lBR08sdUNBQW1CLEdBQTNCLFVBQTRCLHFCQUEwQixFQUFFLFlBQW9CO1FBQTVFLGlCQWtCQztRQWhCRyxJQUFNLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFFOUIsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2xCLGNBQWMsRUFBRSxXQUFXO1lBQzNCLFFBQVEsRUFBRSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDNUIsTUFBTSxFQUFFLEVBQUU7U0FDYixDQUFDO2FBQ0csS0FBSyxDQUFDLHFCQUFxQixDQUFDO2FBQzVCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBQSxDQUFDO1lBQ2hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDckIsS0FBSSxDQUFDLFlBQVksR0FBRyxnQ0FBWSxDQUFDLE1BQU0sQ0FBQztnQkFDeEMsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsWUFBWSxHQUFHLGdDQUFZLENBQUMsT0FBTyxDQUFDO1lBQzdDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7O0lBSU8sNEJBQVEsR0FBaEI7UUFFSSxZQUFZO1FBQ1osSUFBTSxR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