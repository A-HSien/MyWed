"use strict";
var BandController = (function () {
    function BandController(scrollMagicController, windowHeight, windowWidth) {
        this.sectionName = '#band-container';
        this.isThumbnailInitiated = false;
        var sectionH = $(this.sectionName).height();
        var duration = windowHeight + sectionH;
        new ScrollMagic.Scene({
            triggerElement: this.sectionName,
            triggerHook: 1,
            duration: duration,
        }).setTween(this.sectionName + " .parallax-scrolling-background", {
            css: { transform: 'translateY(0)' },
            ease: Linear.easeNone
        }).addTo(scrollMagicController);
    }
    ;
    return BandController;
}());
exports.BandController = BandController;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFuZENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCYW5kQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUE7SUFLSSx3QkFDSSxxQkFBMEIsRUFDMUIsWUFBb0IsRUFDcEIsV0FBbUI7UUFOZixnQkFBVyxHQUFHLGlCQUFpQixDQUFDO1FBQ2hDLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQU9qQyxJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzlDLElBQU0sUUFBUSxHQUFHLFlBQVksR0FBRyxRQUFRLENBQUM7UUFFekMsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2xCLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVztZQUNoQyxXQUFXLEVBQUUsQ0FBQztZQUNkLFFBQVEsRUFBRSxRQUFRO1NBQ3JCLENBQUMsQ0FBQyxRQUFRLENBQUksSUFBSSxDQUFDLFdBQVcsb0NBQWlDLEVBQUU7WUFDOUQsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtZQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O0lBR0wscUJBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDO0FBeEJZLHNCQUFjLGlCQXdCMUIsQ0FBQTtBQUFBLENBQUMifQ==