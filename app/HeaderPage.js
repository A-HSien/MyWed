"use strict";
var SectionState_enum_1 = require('./SectionState.enum');
var HeaderPage = (function () {
    function HeaderPage(scrollMagicController, windowHeight, windowWidth) {
        this.sectionState = SectionState_enum_1.SectionState.Inside;
        //this.monitorSectionState(scrollMagicController, windowHeight);
        //this.setVideo();
        //this.setTweenForImageIcon(scrollMagicController, windowHeight);
    }
    ;
    HeaderPage.prototype.monitorSectionState = function (scrollMagicController, windowHeight) {
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
    HeaderPage.prototype.setVideo = function () {
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
    HeaderPage.prototype.playVideo = function () {
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
    HeaderPage.prototype.setTweenForImageIcon = function (scrollMagicController, windowHeight) {
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
    return HeaderPage;
}());
exports.HeaderPage = HeaderPage;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhlYWRlclBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtBLGtDQUEyQixxQkFBcUIsQ0FBQyxDQUFBO0FBR2pEO0lBSUksb0JBQ0kscUJBQTBCLEVBQzFCLFlBQW9CLEVBQ3BCLFdBQW1CO1FBTGYsaUJBQVksR0FBaUIsZ0NBQVksQ0FBQyxNQUFNLENBQUM7UUFPckQsZ0VBQWdFO1FBQ2hFLGtCQUFrQjtRQUNsQixpRUFBaUU7SUFDckUsQ0FBQzs7SUFHTyx3Q0FBbUIsR0FBM0IsVUFBNEIscUJBQTBCLEVBQUUsWUFBb0I7UUFBNUUsaUJBa0JDO1FBaEJHLElBQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUU5QixJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbEIsY0FBYyxFQUFFLFdBQVc7WUFDM0IsUUFBUSxFQUFFLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUM1QixNQUFNLEVBQUUsRUFBRTtTQUNiLENBQUM7YUFDRyxLQUFLLENBQUMscUJBQXFCLENBQUM7YUFDNUIsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFBLENBQUM7WUFDaEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixLQUFJLENBQUMsWUFBWSxHQUFHLGdDQUFZLENBQUMsTUFBTSxDQUFDO2dCQUN4QyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxZQUFZLEdBQUcsZ0NBQVksQ0FBQyxPQUFPLENBQUM7WUFDN0MsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7SUFJTyw2QkFBUSxHQUFoQjtRQUVJLFlBQVk7UUFDWixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFD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