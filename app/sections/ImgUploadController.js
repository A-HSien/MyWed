"use strict";
var Utilities = require('../Utilities');
var SectionState_enum_1 = require('../SectionState.enum');
var ImgUploadController = (function () {
    function ImgUploadController(scrollMagicController, windowHeight, windowWidth) {
        var _this = this;
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
        $section.on('click', '.js-next', function () {
            _this.setResetImageTask(0);
        });
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
                clearTimeout(_this.loopTask);
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
                _this.imageToUpload.fileName = new Date().toISOString() + "_" + file_1.name;
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
        if (this.sectionState === SectionState_enum_1.SectionState.Outside)
            return;
        firebase.database().ref('/image').once('value').then(function (snapshot) {
            var value = snapshot.val();
            _this.imageInfos.forEach(function (e) {
                delete value[e['id']];
            });
            var newInfos = Object.keys(value).map(function (key) {
                value[key].id = key;
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
            img.onload = function () { return _this.setImage(url); };
            img.onerror = function () {
                _this.setResetImageTask(0);
            };
        }).catch(function (error) {
            _this.setResetImageTask(0);
        });
    };
    ;
    ImgUploadController.prototype.setImage = function (src) {
        this.$photo.css('background-image', "url(" + src + ")");
        TweenMax.to(this.$photo, 2, { opacity: 1 });
        this.setResetImageTask(5000);
    };
    ;
    ImgUploadController.prototype.setResetImageTask = function (delayTime) {
        clearTimeout(this.loopTask);
        this.loopTask = setTimeout(this.resetImage.bind(this), delayTime);
    };
    ;
    ImgUploadController.prototype.resetImage = function () {
        this.imageInfos.push(this.imageInfos.shift());
        TweenMax.to(this.$photo, 1, { opacity: 0 });
        this.loadImageInfos();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1nVXBsb2FkQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkltZ1VwbG9hZENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtBLElBQVksU0FBUyxXQUFNLGNBQWMsQ0FBQyxDQUFBO0FBQzFDLGtDQUE2QixzQkFBc0IsQ0FBQyxDQUFBO0FBR3BEO0lBUUksNkJBQ0kscUJBQTBCLEVBQzFCLFlBQW9CLEVBQ3BCLFdBQW1CO1FBWDNCLGlCQXdMQztRQXRMVyxnQkFBVyxHQUFHLHVCQUF1QixDQUFDO1FBQ3RDLGlCQUFZLEdBQWlCLGdDQUFZLENBQUMsT0FBTyxDQUFDO1FBQ2xELGtCQUFhLEdBQWtCLElBQUksYUFBYSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFnQixFQUFFLENBQUM7UUFRakMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzlELElBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xELFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLFVBQVUsRUFBRTtZQUM1QixL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