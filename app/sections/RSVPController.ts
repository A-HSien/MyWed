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
            Utilities.scrollTo(form.errors[0].$ele);
            return;
        }

        const db = firebase.database();
        const table = db.ref('/rsvp');
        table.push(form.data);
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
