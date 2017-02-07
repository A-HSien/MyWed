"use strict";
var SectionState_enum_1 = require('./SectionState.enum');
var VideoPage = (function () {
    function VideoPage(scrollMagicController, windowHeight, windowWidth) {
        this.sectionState = SectionState_enum_1.SectionState.Inside;
        this.monitorSectionState(scrollMagicController, windowHeight);
        //this.setTweenForImageIcon(scrollMagicController, windowHeight);
    }
    ;
    VideoPage.prototype.monitorSectionState = function (scrollMagicController, windowHeight) {
        var _this = this;
        var sectionName = '#header';
        new ScrollMagic.Scene({
            triggerElement: sectionName,
            duration: windowHeight + $(sectionName).height(),
            offset: 0
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
    VideoPage.prototype.playVideo = function () {
        var _this = this;
        /** video */
        var videoEle = document.getElementById('video');
        videoEle.innerHTML = '';
        var renderer = PIXI.autoDetectRenderer(videoEle.clientWidth, videoEle.clientHeight, { transparent: true });
        videoEle.appendChild(renderer.view);
        // create a video texture from a path
        var texture = PIXI.Texture.fromVideo('assets/video/forest.mp4');
        var videoSource = texture.baseTexture.source;
        // create a new Sprite using the video texture
        var videoSprite = new PIXI.Sprite(texture);
        videoSprite.width = renderer.width;
        videoSprite.height = renderer.height;
        // create the root of the scene graph
        var stage = new PIXI.Container();
        stage.addChild(videoSprite);
        $(videoEle).fadeIn(2000);
        $('#header').removeClass('img-background');
        var animate = function () {
            renderer.render(stage);
            if (videoSource.ended && videoSource.paused) {
                stage.destroy();
                videoSprite.destroy();
                renderer.destroy();
                $(videoEle).fadeOut(2000);
                $('#header').addClass('img-background');
                return;
            }
            if (_this.sectionState === SectionState_enum_1.SectionState.Outside) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlkZW9QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVmlkZW9QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQSxrQ0FBMkIscUJBQXFCLENBQUMsQ0FBQTtBQUdqRDtJQUlJLG1CQUNJLHFCQUEwQixFQUMxQixZQUFvQixFQUNwQixXQUFtQjtRQUxmLGlCQUFZLEdBQWlCLGdDQUFZLENBQUMsTUFBTSxDQUFDO1FBT3JELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM5RCxpRUFBaUU7SUFDckUsQ0FBQzs7SUFHTyx1Q0FBbUIsR0FBM0IsVUFBNEIscUJBQTBCLEVBQUUsWUFBb0I7UUFBNUUsaUJBa0JDO1FBaEJHLElBQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUU5QixJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbEIsY0FBYyxFQUFFLFdBQVc7WUFDM0IsUUFBUSxFQUFFLFlBQVksR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ2hELE1BQU0sRUFBRSxDQUFDO1NBQ1osQ0FBQzthQUNHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzthQUM1QixFQUFFLENBQUMsYUFBYSxFQUFFLFVBQUEsQ0FBQztZQUNoQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxZQUFZLEdBQUcsZ0NBQVksQ0FBQyxNQUFNLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSSxDQUFDLFlBQVksR0FBRyxnQ0FBWSxDQUFDLE9BQU8sQ0FBQztZQUM3QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDOztJQUdPLDZCQUFTLEdBQWpCO1FBQUEsaUJBc0RDO1FBcERHLFlBQVk7UUFDWixJQUFN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