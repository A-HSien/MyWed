declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const Linear: any;
declare const firebase: any;
import * as Utilities from '../Utilities';

export class RSVPController {

    private $ele: any = $('#form-container');

    constructor(
        scrollMagicController: any,
        windowHeight: number,
        windowWidth: number
    ) {
        this.$ele.find('input').on('change', this.getAndCheckForm.bind(this));
        this.$ele.find('.js-submit').on('click', this.submit.bind(this));
        this.setReader();
    };

    private getAndCheckForm() {
        const form = new Form(this.$ele);

        $('.form-control-feedback').text('');
        if (form.errors.length > 0) {
            form.errors.forEach(error => {
                $(error.$ele).next('.form-control-feedback').text(error.msg);
            });
        }
        return form;
    };

    private submit() {
        const form = this.getAndCheckForm();

        if (form.errors.length > 0) {
            Utilities.scrollTo($(form.errors[0].$ele).parent().parent());
            return;
        }

        const db = firebase.database();
        const table = db.ref('/rsvp');
        table.push(form.data);
        this.$ele.find('.js-submit').hide();
        this.$ele.find('.alert').fadeIn();
    };


    private setReader() {
        const $ele = $('#wrapper');
        $ele.on("dragover", this.stopPropagation.bind(this));
        $ele.on("dragleave", this.stopPropagation.bind(this));

        $ele.on("drop", (event) => {
            this.stopPropagation(event);
            const files = event.originalEvent.dataTransfer.files;
            if (files && files.length && files.length > 0)
                this.handleFile(files[0]);
        });
    };

    private stopPropagation(event) {
        event.preventDefault();
        event.stopPropagation();
    };


    private handleFile(file: any) {
        if (!file || file.name.indexOf('.json') < 0) return;

        const reader = new FileReader();
        reader.onload = (file: any) => {
            const rsvp = JSON.parse(file.target.result).rsvp;
            const result = [];
            Object.keys(rsvp).forEach(key => {
                let item = rsvp[key];
                item.key = key;
                result.push(item);
            });
            this.showReport(result);
        };
        reader.readAsText(file);

    };

    private showReport(data: any[]) {
        const heads = [
            'time',
            'name',
            'willJoin',
            'peopleNumber',
            'vegetarianNumber',
            'wantInvitationCard',
            'address',
            'phoneNumber',
            'isGroomSide',
        ];
        const $table = $('<table class="table table-striped table-responsive">');

        //thead
        (() => {
            const $thead = $('<thead class="thead-inverse">');
            const $tr = $('<tr>');
            heads.forEach(head => {
                $tr.append(`<th>${head}</th>`);
            });
            $thead.append($tr);
            $table.append($thead);
        })();

        //tbody
        (() => {
            const dic: { [key: string]: string } = {};
            const $tbody = $('<tbody>');
            data.forEach(e => {
                const key = dic[e.name];
                const value = JSON.stringify({
                    name: e.name,
                    willJoin: e.willJoin,
                    peopleNumber: e.peopleNumber,
                    vegetarianNumber: e.vegetarianNumber,
                    wantInvitationCard: e.wantInvitationCard,
                    address: e.address,
                    phoneNumber: e.phoneNumber,
                });
                if (key && key === value) return;
                dic[e.name] = value;

                const $tr = $('<tr>');
                heads.forEach(head => {
                    $tr.append(`<td>${e[head]}</td>`);
                });
                $tbody.append($tr);
            });
            $table.append($tbody);
        })();

        const $report = $('#rsvp-report');
        $report.append($table);
        Utilities.scrollTo($report);
    };


};


interface IData {
    name: string;
    willJoin: string;
    peopleNumber: string;
    isGroomSide: string;
    wantInvitationCard: string;
    address: string;
    phoneNumber: string;
    vegetarianNumber: string;
    time: string;
}

class Form {

    data: IData = null;
    errors: { $ele: string, msg: string }[] = [];

    constructor(
        private $ele: any
    ) {
        this.getData();
        this.getErrorMsg();
    };

    private getData() {
        this.data = {
            name: this.get('input[name=name]'),
            willJoin: this.get('input[name=will-join]:checked'),
            peopleNumber: this.get('input[name=people-number]'),
            isGroomSide: this.get('input[name=is-groom-side]:checked'),
            wantInvitationCard: this.get('input[name=want-invitation-card]:checked'),
            address: this.get('input[name=address]'),
            phoneNumber: this.get('input[name=phone-number]'),
            vegetarianNumber: this.get('input[name=vegetarian-number]'),
            time: new Date().toISOString()
        }
    };

    private getErrorMsg() {
        const data = this.data;

        if (!data.name)
            this.errors.push({
                $ele: 'input[name=name]',
                msg: '請留下您的名字'
            });

        if (data.willJoin === 'true')
            if (!data.peopleNumber ||
                Number(data.peopleNumber) <= 0)
                this.errors.push({
                    $ele: 'input[name=people-number]',
                    msg: '請問有幾個人赴宴呢?'
                });

        if (data.wantInvitationCard === 'true' &&
            !data.address)
            this.errors.push({
                $ele: 'input[name=address]',
                msg: '請問喜帖要寄到哪呢?'
            });
    };

    private get(selector: string) {
        return this.$ele.find(selector).val();
    };
};
