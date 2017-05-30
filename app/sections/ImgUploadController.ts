declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const Linear: any;
declare const firebase: any;
import * as Utilities from '../Utilities';
import { SectionState } from '../SectionState.enum';


export class ImgUploadController {

    private sectionName = '#img-upload-container';
    private sectionState: SectionState = SectionState.Outside;
    private imageToUpload: ImageToUpload = new ImageToUpload();
    private imageInfos: ImageInfo[] = [];
    private $photo: any;

    constructor(
        scrollMagicController: any,
        windowHeight: number,
        windowWidth: number
    ) {
        this.backgroundScrolling(scrollMagicController, windowHeight);
        const $section = $(this.sectionName);
        $section.on('click', '.file-selector', this.openFileSelector.bind(this));
        $section.on('change', '.img-input', this.handleFile.bind(this));
        $section.on('click', '.js-submit', this.submit.bind(this));

        this.$photo = $section.find('.img-upload-slides');
        $section.on('click', '.js-next', () => {
            this.setResetImageTask(0);
        });

    };

    private backgroundScrolling(scrollMagicController: any, windowHeight: number) {
        const sectionH = $(this.sectionName).height();
        const duration = windowHeight + sectionH;

        new ScrollMagic.Scene({
            triggerElement: this.sectionName,
            triggerHook: 1,
            duration: duration,
        }).setTween(`${this.sectionName} .parallax-scrolling-background`, {
            css: { transform: 'translateY(0)' },
            ease: Linear.easeNone
        }).addTo(scrollMagicController)
            .on("enter leave", e => {
                if (e.type === "enter") {
                    this.sectionState = SectionState.Inside;
                    this.setResetImageTask(0);
                } else {
                    clearTimeout(this.loopTask);
                    this.sectionState = SectionState.Outside;
                }
            });
    };

    private openFileSelector() {
        clearTimeout(this.loopTask);
        $(this.sectionName).find('.img-input').click();
    };

    private handleFile() {
        const $section = $(this.sectionName);
        const input = $section.find('.img-input')[0];
        var url = input.value;
        var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
        if (input.files && input.files[0] && (ext === "gif" || ext === "png" || ext === "jpeg" || ext === "jpg")) {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = (e: any) => {
                const $edotor = $section.find('.img-editor');
                $section.find('.return-message').hide();
                $section.find('.js-submit').show();
                $edotor.fadeIn();
                const data = e.target.result;
                $edotor.find('.img-to-upload').attr('src', data);
                this.imageToUpload.file = file;
                this.imageToUpload.data = data;
                this.imageToUpload.fileName = `${new Date().toISOString()}_${file.name}`;

                Utilities.scrollTo('.img-to-upload');
            };
            reader.readAsDataURL(file);
        }
    };

    private submit() {
        const $section = $(this.sectionName);
        const imageToUpload = this.imageToUpload;
        imageToUpload.author = $section.find('.js-name').val();
        imageToUpload.message = $section.find('.js-message').val();
        const $alert = $section.find('.return-message');

        if (!this.imageToUpload.isValid) {
            $alert.html(this.imageToUpload.errorMessage);
            $alert.fadeIn();
            return;
        }

        const db = firebase.database();
        const table = db.ref('/image');
        table.push(this.imageToUpload.getInfo());

        const storage = firebase.storage().ref();
        storage.child(`image/${this.imageToUpload.fileName}`).put(this.imageToUpload.file);

        $alert.html('<strong>已寄出!</strong>感謝您的分享');
        $alert.fadeIn();
        $section.find('.js-submit').hide();

        setTimeout(() => {
            $section.find('.img-editor').fadeOut();
            this.setResetImageTask(5000);
            Utilities.scrollTo('#YouAndMe');
        }, 1000);
    };

    private loadImageInfos() {
        if (this.sectionState === SectionState.Outside) return;

        firebase.database().ref('/image').once('value').then((snapshot) => {
            const value = snapshot.val();
            this.imageInfos.forEach(e => {
                delete value[e['id']];
            });

            const newInfos = Object.keys(value).map(key => {
                value[key].id = key;
                return value[key];
            });

            const inserAt = this.imageInfos.length > 0 ? 3 : 0;
            shuffle(newInfos).forEach(e => {
                this.imageInfos.splice(inserAt, 0, e);
            });

            this.loadImage();

            function shuffle(array) {
                let ctr = array.length, temp, index;

                while (ctr > 0) {
                    index = Math.floor(Math.random() * ctr);
                    ctr--;
                    temp = array[ctr];
                    array[ctr] = array[index];
                    array[index] = temp;
                }
                return array;
            }
        })
    };

    private loadImage() {
        if (this.sectionState === SectionState.Outside) return;

        const storage = firebase.storage().ref();
        const imageInfo = this.imageInfos[0];
        const $section = $(this.sectionName);
        $section.find('.js-image-info').text(`${imageInfo.author} :  ${imageInfo.message}`);

        storage.child(`image/${imageInfo.fileName}`).getDownloadURL().then(url => {
            const img = new Image();
            img.src = url;

            img.onload = () => this.setImage(url);
            img.onerror = () => {
                this.setResetImageTask(0);
            };
        }).catch((error) => {
            this.setResetImageTask(0);
        });
    };
    private loopTask;

    private setImage(src: string) {

        this.$photo.css('background-image', `url(${src})`);
        TweenMax.to(
            this.$photo,
            2,
            { opacity: 1 }
        );
        this.setResetImageTask(5000);
    };

    private setResetImageTask(delayTime) {
        clearTimeout(this.loopTask);
        this.loopTask = setTimeout(this.resetImage.bind(this), delayTime);
    };

    private resetImage() {
        if (this.imageInfos.length > 0)
            this.imageInfos.push(this.imageInfos.shift());
        TweenMax.to(this.$photo, 1, { opacity: 0 });
        this.loadImageInfos();
    };
};





interface ImageInfo {
    fileName: string;
    author: string;
    message: string;
};

class ImageToUpload {
    fileName: string = '';
    author: string = '';
    message: string = '';
    data: string = '';
    file: File = null;

    get errorMessage(): string {
        if (!this.author)
            return '該怎麼稱呼您呢?';
        if (!this.message)
            return '寫點留言吧~';
        return '';
    };

    get isValid(): boolean {
        const someIsEmpty = ['fileName', 'author', 'message', 'file'].some(e => !this[e]);
        return !someIsEmpty;
    };

    getInfo(): ImageInfo {
        return {
            fileName: this.fileName,
            author: this.author,
            message: this.message
        };
    };
};