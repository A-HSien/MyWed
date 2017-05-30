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
        this.$photo = $section.find('.img-upload-slides').on('click', function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1nVXBsb2FkQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkltZ1VwbG9hZENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtBLElBQVksU0FBUyxXQUFNLGNBQWMsQ0FBQyxDQUFBO0FBQzFDLGtDQUE2QixzQkFBc0IsQ0FBQyxDQUFBO0FBR3BEO0lBUUksNkJBQ0kscUJBQTBCLEVBQzFCLFlBQW9CLEVBQ3BCLFdBQW1CO1FBWDNCLGlCQXVMQztRQXJMVyxnQkFBVyxHQUFHLHVCQUF1QixDQUFDO1FBQ3RDLGlCQUFZLEdBQWlCLGdDQUFZLENBQUMsT0FBTyxDQUFDO1FBQ2xELGtCQUFhLEdBQWtCLElBQUksYUFBYSxFQUFFLENBQUM7UUFDbkQsZUFBVSxHQUFnQixFQUFFLENBQUM7UUFRakMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzlELElBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDMUQsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMs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