"use strict";
var Utilities = require('../Utilities');
var RSVPController = (function () {
    function RSVPController(scrollMagicController, windowHeight, windowWidth) {
        this.$ele = $('#form-container');
        this.$ele.find('input').on('change', this.getAndCheckForm.bind(this));
        this.$ele.find('.js-submit').on('click', this.submit.bind(this));
    }
    ;
    RSVPController.prototype.getAndCheckForm = function () {
        var form = new Form(this.$ele);
        $('.form-control-feedback').text('');
        if (form.errors.length > 0) {
            form.errors.forEach(function (error) {
                $(error.$ele).next('.form-control-feedback').text(error.msg);
            });
        }
        return form;
    };
    ;
    RSVPController.prototype.submit = function () {
        var form = this.getAndCheckForm();
        if (form.errors.length > 0) {
            Utilities.scrollTo(form.errors[0].$ele);
            return;
        }
        var db = firebase.database();
        var table = db.ref('/rsvp');
        table.push(form.data);
    };
    ;
    return RSVPController;
}());
exports.RSVPController = RSVPController;
;
var Form = (function () {
    function Form($ele) {
        this.$ele = $ele;
        this.data = null;
        this.errors = [];
        this.getData();
        this.getErrorMsg();
    }
    ;
    Form.prototype.getData = function () {
        this.data = {
            name: this.get('input[name=name]'),
            willJoin: this.get('input[name=will-join]:checked'),
            peopleNumber: this.get('input[name=people-number]'),
            isGroomSide: this.get('input[name=is-groom-side]:checked'),
            wantInvitationCard: this.get('input[name=want-invitation-card]:checked'),
            address: this.get('input[name=address]'),
            phoneNumber: this.get('input[name=phone-number]'),
            vegetarianNumber: this.get('input[name=vegetarian-number]'),
        };
    };
    ;
    Form.prototype.getErrorMsg = function () {
        var data = this.data;
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
    ;
    Form.prototype.get = function (selector) {
        return this.$ele.find(selector).val();
    };
    ;
    return Form;
}());
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUlNWUENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSU1ZQQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0EsSUFBWSxTQUFTLFdBQU0sY0FBYyxDQUFDLENBQUE7QUFFMUM7SUFJSSx3QkFDSSxxQkFBMEIsRUFDMUIsWUFBb0IsRUFDcEIsV0FBbUI7UUFMZixTQUFJLEdBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFPckMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDOztJQUVPLHdDQUFlLEdBQXZCO1FBQ0ksSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztnQkFDckIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENB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