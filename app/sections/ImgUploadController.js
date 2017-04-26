"use strict";
var Utilities = require('../Utilities');
var SectionState_enum_1 = require('../SectionState.enum');
var ImgUploadController = (function () {
    function ImgUploadController(scrollMagicController, windowHeight, windowWidth) {
        this.sectionName = '#img-upload-container';
        this.sectionState = SectionState_enum_1.SectionState.Outside;
        this.imageToUpload = new ImageToUpload();
        this.imageInfos = [];
        this.backgroundScrolling(scrollMagicController, windowHeight);
        var $section = $(this.sectionName);
        $section.on('click', '.file-selector', this.openFileSelector.bind(this));
        $section.on('change', '.img-input', this.handleFile.bind(this));
        $section.on('click', '.js-submit', this.submit.bind(this));
        this.$photo = $section.find('.img-upload-slides');
    }
    ;
    ImgUploadController.prototype.backgroundScrolling = function (scrollMagicController, windowHeight) {
        var _this = this;
        var sectionH = $(this.sectionName).height();
        var duration = windowHeight + sectionH;
        new ScrollMagic.Scene({
            triggerElement: this.sectionName,
            triggerHook: 1,
            duration: duration,
        }).setTween(this.sectionName + " .parallax-scrolling-background", {
            css: { transform: 'translateY(0)' },
            ease: Linear.easeNone
        }).addTo(scrollMagicController)
            .on("enter leave", function (e) {
            if (e.type === "enter") {
                _this.sectionState = SectionState_enum_1.SectionState.Inside;
                _this.loadImageInfos();
            }
            else {
                _this.sectionState = SectionState_enum_1.SectionState.Outside;
            }
        });
    };
    ;
    ImgUploadController.prototype.openFileSelector = function () {
        $(this.sectionName).find('.img-input').click();
    };
    ;
    ImgUploadController.prototype.handleFile = function () {
        var _this = this;
        var $section = $(this.sectionName);
        var input = $section.find('.img-input')[0];
        var url = input.value;
        var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
        if (input.files && input.files[0] && (ext === "gif" || ext === "png" || ext === "jpeg" || ext === "jpg")) {
            var file_1 = input.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                var $edotor = $section.find('.img-editor');
                $section.find('.return-message').hide();
                $section.find('.js-submit').show();
                $edotor.fadeIn();
                var data = e.target.result;
                $edotor.find('.img-to-upload').attr('src', data);
                _this.imageToUpload.file = file_1;
                _this.imageToUpload.data = data;
                _this.imageToUpload.fileName = file_1.name;
                Utilities.scrollTo('.img-to-upload');
            };
            reader.readAsDataURL(file_1);
        }
    };
    ;
    ImgUploadController.prototype.submit = function () {
        var _this = this;
        var $section = $(this.sectionName);
        var imageToUpload = this.imageToUpload;
        imageToUpload.author = $section.find('.js-name').val();
        imageToUpload.message = $section.find('.js-message').val();
        var $alert = $section.find('.return-message');
        if (!this.imageToUpload.isValid) {
            $alert.html(this.imageToUpload.errorMessage);
            $alert.fadeIn();
            return;
        }
        var db = firebase.database();
        var table = db.ref('/image');
        table.push(this.imageToUpload.getInfo());
        var storage = firebase.storage().ref();
        storage.child("image/" + this.imageToUpload.fileName).put(this.imageToUpload.file);
        $alert.html('<strong>已寄出!</strong>感謝您的分享');
        $alert.fadeIn();
        $section.find('.js-submit').hide();
        setTimeout(function () {
            $section.find('.img-editor').fadeOut();
            Utilities.scrollTo(_this.sectionName);
        }, 2000);
    };
    ;
    ImgUploadController.prototype.loadImageInfos = function () {
        var _this = this;
        firebase.database().ref('/image').once('value').then(function (snapshot) {
            var value = snapshot.val();
            _this.imageInfos.forEach(function (e) {
                delete value[e['id']];
            });
            var newInfos = Object.keys(value).map(function (key) {
                var imageInfo = value[key];
                imageInfo.id = key;
                return value[key];
            });
            _this.imageInfos = _this.imageInfos.concat(shuffle(newInfos));
            _this.loadImage();
            function shuffle(array) {
                var ctr = array.length, temp, index;
                while (ctr > 0) {
                    index = Math.floor(Math.random() * ctr);
                    ctr--;
                    temp = array[ctr];
                    array[ctr] = array[index];
                    array[index] = temp;
                }
                return array;
            }
        });
    };
    ;
    ImgUploadController.prototype.loadImage = function () {
        var _this = this;
        if (this.sectionState === SectionState_enum_1.SectionState.Outside)
            return;
        var storage = firebase.storage().ref();
        var imageInfo = this.imageInfos[0];
        var $section = $(this.sectionName);
        $section.find('.js-image-info').text(imageInfo.author + " :  " + imageInfo.message);
        storage.child("image/" + imageInfo.fileName).getDownloadURL().then(function (url) {
            var img = new Image();
            img.src = url;
            img.onload = function () { return _this.setImage(img.src); };
            img.onerror = function () { return _this.resetImage(); };
        });
    };
    ;
    ImgUploadController.prototype.setImage = function (src) {
        this.$photo.css('background-image', "url(" + src + ")");
        TweenMax.to(this.$photo, 3, { opacity: 1 });
        setTimeout(this.resetImage.bind(this), 6000);
    };
    ;
    ImgUploadController.prototype.resetImage = function () {
        this.imageInfos.push(this.imageInfos.shift());
        TweenMax.to(this.$photo, 1, {
            opacity: 0,
            onComplete: this.loadImage.bind(this)
        });
    };
    ;
    return ImgUploadController;
}());
exports.ImgUploadController = ImgUploadController;
;
;
var ImageToUpload = (function () {
    function ImageToUpload() {
        this.fileName = '';
        this.author = '';
        this.message = '';
        this.data = '';
        this.file = null;
    }
    Object.defineProperty(ImageToUpload.prototype, "errorMessage", {
        get: function () {
            if (!this.author)
                return '該怎麼稱呼您呢?';
            if (!this.message)
                return '寫點留言吧~';
            return '';
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ImageToUpload.prototype, "isValid", {
        get: function () {
            var _this = this;
            var someIsEmpty = ['fileName', 'author', 'message', 'file'].some(function (e) { return !_this[e]; });
            return !someIsEmpty;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ImageToUpload.prototype.getInfo = function () {
        return {
            fileName: this.fileName,
            author: this.author,
            message: this.message
        };
    };
    ;
    return ImageToUpload;
}());
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1nVXBsb2FkQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkltZ1VwbG9hZENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtBLElBQVksU0FBUyxXQUFNLGNBQWMsQ0FBQyxDQUFBO0FBQzFDLGtDQUE2QixzQkFBc0IsQ0FBQyxDQUFBO0FBR3BEO0lBUUksNkJBQ0kscUJBQTBCLEVBQzFCLFlBQW9CLEVBQ3BCLFdBQW1CO1FBVGYsZ0JBQVcsR0FBRyx1QkFBdUIsQ0FBQztRQUN0QyxpQkFBWSxHQUFpQixnQ0FBWSxDQUFDLE9BQU8sQ0FBQztRQUNsRCxrQkFBYSxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBZ0IsRUFBRSxDQUFDO1FBUWpDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM5RCxJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RSxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRSxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUV0RCxDQUFDOztJQUVPLGlEQUFtQixHQUEzQixVQUE0QixxQkFBMEIsRUFBRSxZQUFvQjtRQUE1RSxpQkFvQkM7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