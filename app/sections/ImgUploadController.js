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
            _this.imageInfos = _this.imageInfos.concat(newInfos);
            _this.loadImage();
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
        $section.find('.js-image-info').text(imageInfo.author + ": " + imageInfo.message);
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
        setTimeout(this.resetImage.bind(this), 12000);
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