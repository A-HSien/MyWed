"use strict";
function scrollTo(eleSeltor, speed) {
    speed = speed || 400;
    $('html, body').animate({ scrollTop: $(eleSeltor).offset().top }, speed);
}
exports.scrollTo = scrollTo;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVXRpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxrQkFBeUIsU0FBaUIsRUFBRSxLQUF1QjtJQUMvRCxLQUFLLEdBQUcsS0FBSyxJQUFJLEdBQUcsQ0FBQztJQUNyQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM3RSxDQUFDO0FBSGUsZ0JBQVEsV0FHdkIsQ0FBQTtBQUFBLENBQUMifQ==