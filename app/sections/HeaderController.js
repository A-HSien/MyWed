"use strict";
var SectionState_enum_1 = require('../SectionState.enum');
var HeaderController = (function () {
    function HeaderController(scrollMagicController, windowHeight, windowWidth) {
        this.sectionState = SectionState_enum_1.SectionState.Inside;
        this.setTweenForImageIcon(scrollMagicController, windowHeight);
    }
    ;
    HeaderController.prototype.setTweenForImageIcon = function (scrollMagicController, windowHeight) {
        new ScrollMagic.Scene({
            triggerElement: '#header img',
            triggerHook: '0.2',
            duration: windowHeight
        })
            .setTween(TweenMax.to('#header img', 1, {
            autoAlpha: 0,
            scale: 0.5,
            force3D: true
        }))
            .addTo(scrollMagicController);
    };
    ;
    return HeaderController;
}());
exports.HeaderController = HeaderController;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhlYWRlckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtBLGtDQUE2QixzQkFBc0IsQ0FBQyxDQUFBO0FBR3BEO0lBSUksMEJBQ0kscUJBQTBCLEVBQzFCLFlBQW9CLEVBQ3BCLFdBQW1CO1FBTGYsaUJBQVksR0FBaUIsZ0NBQVksQ0FBQyxNQUFNLENBQUM7UUFPckQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ25FLENBQUM7O0lBR08sK0NBQW9CLEdBQTVCLFVBQTZCLHFCQUEwQixFQUFFLFlBQW9CO1FBRXpFLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNsQixjQUFjLEVBQUUsYUFBYTtZQUM3QixXQUFXLEVBQUUsS0FBSztZQUNsQixRQUFRLEVBQUUsWUFBWTtTQUN6QixDQUFDO2FBQ0csUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRTtZQUNwQyxTQUFTLEVBQUUsQ0FBQztZQUNaLEtBQUssRUFBRSxHQUFHO1lBQ1YsT0FBTyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO2FBQ0YsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDdEMsQ0FBQzs7SUFDTCx1QkFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUEzQlksd0JBQWdCLG1CQTJCNUIsQ0FBQTtBQUFBLENBQUMifQ==