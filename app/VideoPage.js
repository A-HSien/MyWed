"use strict";
var SectionState;
(function (SectionState) {
    SectionState[SectionState["Inside"] = 0] = "Inside";
    SectionState[SectionState["Outside"] = 1] = "Outside";
})(SectionState || (SectionState = {}));
;
var VideoPage = (function () {
    function VideoPage(scrollMagicController, windowHeight, windowWidth) {
        this.sectionState = SectionState.Inside;
        this.monitorSectionState(scrollMagicController, windowHeight);
        this.playVideo();
        this.setTweenForImageIcon(scrollMagicController, windowHeight);
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
                _this.sectionState = SectionState.Inside;
                _this.playVideo();
            }
            else {
                _this.sectionState = SectionState.Outside;
            }
            // console.log(e.type == "enter" ? `inside ${sectionName}` : `outside ${sectionName}`);
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
            if (videoSource.ended) {
                $(videoEle).fadeOut(2000);
                $('#header').addClass('img-background');
                return;
            }
            if (_this.sectionState === SectionState.Outside) {
                videoSource.pause();
                return;
            }
            requestAnimationFrame(animate);
        };
        animate();
    };
    ;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlkZW9QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVmlkZW9QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQSxJQUFLLFlBR0o7QUFIRCxXQUFLLFlBQVk7SUFDYixtREFBTSxDQUFBO0lBQ04scURBQU8sQ0FBQTtBQUNYLENBQUMsRUFISSxZQUFZLEtBQVosWUFBWSxRQUdoQjtBQUFBLENBQUM7QUFFRjtJQUlJLG1CQUNJLHFCQUEwQixFQUMxQixZQUFvQixFQUNwQixXQUFtQjtRQUxmLGlCQUFZLEdBQWlCLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFPckQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7SUFHTyx1Q0FBbUIsR0FBM0IsVUFBNEIscUJBQTBCLEVBQUUsWUFBb0I7UUFBNUUsaUJBbUJDO1FBakJHLElBQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUU5QixJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbEIsY0FBYyxFQUFFLFdBQVc7WUFDM0IsUUFBUSxFQUFFLFlBQVksR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ2hELE1BQU0sRUFBRSxDQUFDO1NBQ1osQ0FBQzthQUNHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzthQUM1QixFQUFFLENBQUMsYUFBYSxFQUFFLFVBQUEsQ0FBQztZQUNoQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztnQkFDeEMsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7WUFDN0MsQ0FBQztZQUNELHVGQUF1RjtRQUMzRixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7O0lBR08sNkJBQVMsR0FBakI7UUFBQSxpQkF5Q0M7UUF2Q0csWUFBWTtRQUNaLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLFlBQVksRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzNHLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBR3BDLHFDQUFxQztRQUNyQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ2xFLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBRS9DLDhDQUE4QztRQUM5QyxJQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0MsV0FBVyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ25DLFdBQVcsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUVyQyxxQ0FBcUM7UUFDckMsSUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU1QixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUUzQyxJQUFJLE9BQU8sR0FBRztZQUNWLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFdkIsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDeEMsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLEtBQUssWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDcEIsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUVELHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQztRQUNGLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7SUFHTyx3Q0FBb0IsR0FBNUIsVUFBNkIscUJBQTBCLEVBQUUsWUFBb0I7UUFFekUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2xCLGNBQWMsRUFBRSxhQUFhO1lBQzdCLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLE1BQU0sRUFBRSxDQUFDO1NBQ1osQ0FBQzthQUNHLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUU7WUFDcEMsU0FBUyxFQUFFLENBQUM7WUFDWixLQUFLLEVBQUUsR0FBRztZQUNWLE9BQU8sRUFBRSxJQUFJO1NBQ2hCLENBQUMsQ0FBQzthQUNGLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBL0ZELElBK0ZDO0FBL0ZZLGlCQUFTLFlBK0ZyQixDQUFBO0FBQUEsQ0FBQyJ9