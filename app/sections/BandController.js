"use strict";
var BandController = (function () {
    function BandController(scrollMagicController, windowHeight, windowWidth) {
        this.sectionName = '#band-container';
        this.isThumbnailInitiated = false;
        new ScrollMagic.Scene({
            triggerElement: this.sectionName,
            triggerHook: "onEnter",
            duration: windowHeight + $(this.sectionName).height(),
        }).setTween(this.sectionName + " .parallax-scrolling-background", {
            css: { y: '0%' },
            ease: Linear.easeNone
        }).addTo(scrollMagicController);
    }
    ;
    return BandController;
}());
exports.BandController = BandController;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFuZENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCYW5kQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUE7SUFLSSx3QkFDSSxxQkFBMEIsRUFDMUIsWUFBb0IsRUFDcEIsV0FBbUI7UUFOZixnQkFBVyxHQUFHLGlCQUFpQixDQUFDO1FBQ2hDLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQVFqQyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbEIsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQ2hDLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFFBQVEsRUFBRSxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUU7U0FDeEQsQ0FBQyxDQUFDLFFBQVEsQ0FBSSxJQUFJLENBQUMsV0FBVyxvQ0FBaUMsRUFBRTtZQUM5RCxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFO1lBQ2hCLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUTtTQUN4QixDQUFDLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDcEMsQ0FBQzs7SUFHTCxxQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0Qlksc0JBQWMsaUJBc0IxQixDQUFBO0FBQUEsQ0FBQyJ9