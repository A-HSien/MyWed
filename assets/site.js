$(function () {

    var scrollMagicController = new ScrollMagic.Controller();

    var tween1 = TweenMax.to('#animation-1', 0.5, {
        backgroundColor: 'rgb(255, 39, 46)', scale: 2,
        rotation: 360
    });

    var scene1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1',
        offset: 10
    }).setClassToggle('body', 'scene-1-active')
        .setTween(tween1)
        .addTo(scrollMagicController);


    var tween2 = TweenMax.to('#animation-2', 1.5, {
        backgroundColor: 'rgb(0, 255, 187)',
        scale: 5,
        rotation: 1080
    });

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '#scene-2',
        offset: 30
    }).setClassToggle('body', 'scene-2-active')
        .setTween(tween2)
        .addTo(scrollMagicController);


    var tween3 = TweenMax.to('#animation-3', 1, {
        backgroundColor: 'rgb(17, 0, 98)',
        scale: 10,
        rotation: 720
    });

    var scene3 = new ScrollMagic.Scene({
        triggerElement: '#scene-3',
        offset: 60
    }).setClassToggle('body', 'scene-3-active')
        .setTween(tween3)
        .addTo(scrollMagicController);

});