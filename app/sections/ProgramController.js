"use strict";
var ProgramController = (function () {
    function ProgramController(scrollMagicController, windowHeight, windowWidth) {
        this.sectionName = '#program-container';
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
    return ProgramController;
}());
exports.ProgramController = ProgramController;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3JhbUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcm9ncmFtQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUE7SUFLSSwyQkFDSSxxQkFBMEIsRUFDMUIsWUFBb0IsRUFDcEIsV0FBbUI7UUFOZixnQkFBVyxHQUFHLG9CQUFvQixDQUFDO1FBQ25DLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQU9qQyxJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzlDLElBQU0sUUFBUSxHQUFHLFlBQVksR0FBRyxRQUFRLENBQUM7UUFFekMsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2xCLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVztZQUNoQyxXQUFXLEVBQUUsQ0FBQztZQUNkLFFBQVEsRUFBRSxRQUFRO1NBQ3JCLENBQUMsQ0FBQyxRQUFRLENBQUksSUFBSSxDQUFDLFdBQVcsb0NBQWlDLEVBQUU7WUFDOUQsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtZQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O0lBR0wsd0JBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDO0FBeEJZLHlCQUFpQixvQkF3QjdCLENBQUE7QUFBQSxDQUFDIn0=