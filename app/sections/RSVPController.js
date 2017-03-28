"use strict";
var Utilities = require('../Utilities');
var RSVPController = (function () {
    function RSVPController(scrollMagicController, windowHeight, windowWidth) {
        this.$ele = $('#form-container');
        this.$ele.find('input').on('change', this.getAndCheckForm.bind(this));
        this.$ele.find('.js-submit').on('click', this.submit.bind(this));
        this.setReader();
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
            Utilities.scrollTo($(form.errors[0].$ele).parent().parent());
            return;
        }
        var db = firebase.database();
        var table = db.ref('/rsvp');
        table.push(form.data);
        this.$ele.find('.js-submit').hide();
        this.$ele.find('.alert').fadeIn();
    };
    ;
    RSVPController.prototype.setReader = function () {
        var _this = this;
        var $ele = $('#wrapper');
        $ele.on("dragover", this.stopPropagation.bind(this));
        $ele.on("dragleave", this.stopPropagation.bind(this));
        $ele.on("drop", function (event) {
            _this.stopPropagation(event);
            var files = event.originalEvent.dataTransfer.files;
            if (files && files.length && files.length > 0)
                _this.handleFile(files[0]);
        });
    };
    ;
    RSVPController.prototype.stopPropagation = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    ;
    RSVPController.prototype.handleFile = function (file) {
        var _this = this;
        if (!file || file.name.indexOf('.json') < 0)
            return;
        var reader = new FileReader();
        reader.onload = function (file) {
            var rsvp = JSON.parse(file.target.result).rsvp;
            var result = [];
            Object.keys(rsvp).forEach(function (key) {
                var item = rsvp[key];
                item.key = key;
                result.push(item);
            });
            _this.showReport(result);
        };
        reader.readAsText(file);
    };
    ;
    RSVPController.prototype.showReport = function (data) {
        var heads = [
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
        var $table = $('<table class="table table-striped table-responsive">');
        //thead
        (function () {
            var $thead = $('<thead class="thead-inverse">');
            var $tr = $('<tr>');
            heads.forEach(function (head) {
                $tr.append("<th>" + head + "</th>");
            });
            $thead.append($tr);
            $table.append($thead);
        })();
        //tbody
        (function () {
            var dic = {};
            var $tbody = $('<tbody>');
            data.forEach(function (e) {
                var key = dic[e.name];
                var value = JSON.stringify({
                    name: e.name,
                    willJoin: e.willJoin,
                    peopleNumber: e.peopleNumber,
                    vegetarianNumber: e.vegetarianNumber,
                    wantInvitationCard: e.wantInvitationCard,
                    address: e.address,
                    phoneNumber: e.phoneNumber,
                });
                if (key && key === value)
                    return;
                dic[e.name] = value;
                var $tr = $('<tr>');
                heads.forEach(function (head) {
                    $tr.append("<td>" + e[head] + "</td>");
                });
                $tbody.append($tr);
            });
            $table.append($tbody);
        })();
        var $report = $('#rsvp-report');
        $report.append($table);
        Utilities.scrollTo($report);
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
            time: new Date().toISOString()
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUlNWUENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSU1ZQQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0EsSUFBWSxTQUFTLFdBQU0sY0FBYyxDQUFDLENBQUE7QUFFMUM7SUFJSSx3QkFDSSxxQkFBMEIsRUFDMUIsWUFBb0IsRUFDcEIsV0FBbUI7UUFMZixTQUFJLEdBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFPckMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7SUFFTyx3Q0FBZSxHQUF2QjtRQUNJLElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7Z0JBQ3JCLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqRSxDQUFDLENBQUMsQ0FBQztR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