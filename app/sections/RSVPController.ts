declare const $: any;
declare const ScrollMagic: any;
declare const TweenMax: any;
declare const Linear: any;
declare const firebase: any;

export class RSVPController {

    private $ele: any = $('#form-container');

    constructor(
        scrollMagicController: any,
        windowHeight: number,
        windowWidth: number
    ) {
        const submit = this.$ele.find('.js-submit');
        submit.on('click', this.submit.bind(this));
    };

    private submit() {
        const data = new Form(this.$ele).getData();

        const db = firebase.database();
        const ref = db.ref('/rsvp');

        ref.push(data);
    };
};



class Form {
    constructor(
        private $ele: any
    ) { };

    getData() {
        return {
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

    private get(selector: string) {
        return this.$ele.find(selector).val();
    };
};
