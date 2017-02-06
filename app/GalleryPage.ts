declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const Linear: any;


export class GalleryPage {

    constructor(
        scrollMagicController: any,
        windowHeight: number,
        windowWidth: number
    ) {
        var thumbnailPath = 'assets/img/thumbnail/';
        var galleryPath = 'assets/img/gallery/';

        var photos = [
            'W_J002190-0001.jpg', 'W_J002190-0034.jpg', 'W_J002190-0041.jpg', 'W_J002190-0049.jpg', 'W_J002190-0088.jpg',
            'W_J002190-0091.jpg', 'W_J002190-0092.jpg', 'W_J002190-0094.jpg', 'W_J002190-0096.jpg', 'W_J002190-0105.jpg',
            'W_J002190-0132.jpg', 'W_J002190-0143.jpg', 'W_J002190-0149.jpg', 'W_J002190-0158.jpg', 'W_J002190-0170.jpg',
            'W_J002190-0173.jpg', 'W_J002190-0179.jpg', 'W_J002190-0183.jpg', 'W_J002190-0188.jpg', 'W_J002190-0203.jpg',
            'W_J002190-0215.jpg', 'W_J002190-0222.jpg'
        ]


        var thumbnailPaths = photos.reduce(function (array, photo) {
            var $img = $('<div>').css('background-image', 'url(' + thumbnailPath + photo + ')');
            array.push($img);
            return array;
        }, []);

        $('#gallery .photos').width(102 * thumbnailPaths.length);
        $('#gallery .photos').html(thumbnailPaths);

        var $photo = $('#gallery .photo');
        var currentImgIndex = 0;

        var setImg = function () {
            var img = new Image();
            img.src = galleryPath + photos[currentImgIndex];
            img.onload = function () {
                $photo.css('background-image', 'url(' + img.src + ')');
                TweenMax.to($photo, 2, { opacity: 1 });
            };
        };
        setImg();

        var resetImg = function () {
            TweenMax.to($photo, 1, {
                opacity: 0,
                onComplete: setImg
            });
            currentImgIndex++;
        };
        setInterval(resetImg, 8000);


        const sectionName = '#gallery';

        new ScrollMagic.Scene({
            triggerElement: sectionName,
            triggerHook: "onEnter",
            duration: windowHeight + $(sectionName).height(),
        })
            .setTween('#gallery-background', {
                css: { y: '0%' },
                ease: Linear.easeNone
            })
            .addTo(scrollMagicController)
            .on("enter leave", e => {
                console.log(e.type == "enter" ? `inside ${sectionName}` : `outside ${sectionName}`);
            });
    };
};
