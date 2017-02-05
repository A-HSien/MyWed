"use strict";
var StoryPage = (function () {
    function StoryPage(scrollMagicController) {
        new ScrollMagic.Scene({
            triggerElement: '#story-container',
            triggerHook: "onEnter",
            duration: '200%',
        }).setTween('#story-background', {
            css: { y: '60%' },
            ease: Linear.easeNone
        }).addTo(scrollMagicController);
    }
    ;
    return StoryPage;
}());
exports.StoryPage = StoryPage;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcnlQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3RvcnlQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQTtJQUVJLG1CQUFZLHFCQUEwQjtRQUNsQyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbEIsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyxXQUFXLEVBQUUsU0FBUztZQUN0QixRQUFRLEVBQUUsTUFBTTtTQUNuQixDQUFDLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFO1lBQzdCLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUU7WUFDakIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1NBQ3hCLENBQUMsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNwQyxDQUFDOztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxpQkFBUyxZQVlyQixDQUFBO0FBQUEsQ0FBQyJ9