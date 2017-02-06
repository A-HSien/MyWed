"use strict";
var StoryPage = (function () {
    function StoryPage(scrollMagicController, windowHeight, windowWidth) {
        var sectionName = '#story-container';
        new ScrollMagic.Scene({
            triggerElement: sectionName,
            triggerHook: "onEnter",
            duration: windowHeight + $(sectionName).height(),
        }).setTween('#story-background', {
            css: { y: '0%' },
            ease: Linear.easeNone
        }).addTo(scrollMagicController)
            .on("enter leave", function (e) {
            console.log(e.type == "enter" ? "inside " + sectionName : "outside " + sectionName);
        });
    }
    ;
    return StoryPage;
}());
exports.StoryPage = StoryPage;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcnlQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3RvcnlQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQTtJQUVJLG1CQUNJLHFCQUEwQixFQUMxQixZQUFvQixFQUNwQixXQUFtQjtRQUduQixJQUFNLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQztRQUV2QyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbEIsY0FBYyxFQUFFLFdBQVc7WUFDM0IsV0FBVyxFQUFFLFNBQVM7WUFDdEIsUUFBUSxFQUFFLFlBQVksR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFO1NBQ25ELENBQUMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUU7WUFDN0IsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRTtZQUNoQixJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzthQUMxQixFQUFFLENBQUMsYUFBYSxFQUFFLFVBQUEsQ0FBQztZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksT0FBTyxHQUFHLFlBQVUsV0FBYSxHQUFHLGFBQVcsV0FBYSxDQUFDLENBQUM7UUFDeEYsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDOztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXRCWSxpQkFBUyxZQXNCckIsQ0FBQTtBQUFBLENBQUMifQ==