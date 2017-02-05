"use strict";
var GalleryPage = (function () {
    function GalleryPage(scrollMagicController) {
        var thumbnailPath = 'assets/img/thumbnail/';
        var galleryPath = 'assets/img/gallery/';
        var photos = [
            'W_J002190-0001.jpg', 'W_J002190-0034.jpg', 'W_J002190-0041.jpg', 'W_J002190-0049.jpg', 'W_J002190-0088.jpg',
            'W_J002190-0091.jpg', 'W_J002190-0092.jpg', 'W_J002190-0094.jpg', 'W_J002190-0096.jpg', 'W_J002190-0105.jpg',
            'W_J002190-0132.jpg', 'W_J002190-0143.jpg', 'W_J002190-0149.jpg', 'W_J002190-0158.jpg', 'W_J002190-0170.jpg',
            'W_J002190-0173.jpg', 'W_J002190-0179.jpg', 'W_J002190-0183.jpg', 'W_J002190-0188.jpg', 'W_J002190-0203.jpg',
            'W_J002190-0215.jpg', 'W_J002190-0222.jpg'
        ];
        var thumbnailPaths = photos.reduce(function (array, photo) {
            var $img = $('<div>').css('background-image', 'url(' + thumbnailPath + photo + ')');
            array.push($img);
            return array;
        }, []);
        $('#gallery-container .photos').width(102 * thumbnailPaths.length);
        $('#gallery-container .photos').html(thumbnailPaths);
        var $photo = $('#gallery-container .photo');
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
        new ScrollMagic.Scene({
            triggerElement: '#gallery-container',
            triggerHook: "onEnter",
            duration: '200%',
        }).setTween('#gallery-background', {
            css: { y: '60%' },
            ease: Linear.easeNone
        }).addTo(scrollMagicController);
    }
    ;
    return GalleryPage;
}());
exports.GalleryPage = GalleryPage;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FsbGVyeVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHYWxsZXJ5UGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUE7SUFFSSxxQkFBWSxxQkFBMEI7UUFDbEMsSUFBSSxhQUFhLEdBQUcsdUJBQXVCLENBQUM7UUFDNUMsSUFBSSxXQUFXLEdBQUcscUJBQXFCLENBQUM7UUFFeEMsSUFBSSxNQUFNLEdBQUc7WUFDVCxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0I7WUFDNUcsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO1lBQzVHLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtZQUM1RyxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0I7WUFDNUcsb0JBQW9CLEVBQUUsb0JBQW9CO1NBQzdDLENBQUE7UUFHRCxJQUFJLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsS0FBSyxFQUFFLEtBQUs7WUFDckQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLEdBQUcsYUFBYSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNwRixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXJELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQzVDLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztRQUV4QixJQUFJLE1BQU0sR0FBRztZQUNULElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7WUFDdEIsR0FBRyxDQUFDLEdBQUcsR0FBRyxXQUFXLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2hELEdBQUcsQ0FBQyxNQUFNLEdBQUc7Z0JBQ1QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDdkQsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0MsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO1FBQ0YsTUFBTSxFQUFFLENBQUM7UUFFVCxJQUFJLFFBQVEsR0FBRztZQUNYLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtnQkFDbkIsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDckIsQ0FBQyxDQUFDO1lBQ0gsZUFBZSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDO1FBQ0YsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUc1QixJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbEIsY0FBYyxFQUFFLG9CQUFvQjtZQUNwQyxXQUFXLEVBQUUsU0FBUztZQUN0QixRQUFRLEVBQUUsTUFBTTtTQUNuQixDQUFDLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFO1lBQy9CLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUU7WUFDakIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1NBQ3hCLENBQUMsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNwQyxDQUFDOztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQXhERCxJQXdEQztBQXhEWSxtQkFBVyxjQXdEdkIsQ0FBQTtBQUFBLENBQUMifQ==