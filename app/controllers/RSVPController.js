"use strict";
var RSVPController = (function () {
    function RSVPController(scrollMagicController, windowHeight, windowWidth) {
        this.$ele = $('#form-container');
        var submit = this.$ele.find('.js-submit');
        submit.on('click', this.submit.bind(this));
    }
    ;
    RSVPController.prototype.submit = function () {
        var data = new Form(this.$ele).getData();
        var db = firebase.database();
        var ref = db.ref('/rsvp');
        ref.push(data);
    };
    ;
    return RSVPController;
}());
exports.RSVPController = RSVPController;
;
var Form = (function () {
    function Form($ele) {
        this.$ele = $ele;
    }
    ;
    Form.prototype.getData = function () {
        return {
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
    Form.prototype.get = function (selector) {
        return this.$ele.find(selector).val();
    };
    ;
    return Form;
}());
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUlNWUENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSU1ZQQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUE7SUFJSSx3QkFDSSxxQkFBMEIsRUFDMUIsWUFBb0IsRUFDcEIsV0FBbUI7UUFMZixTQUFJLEdBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFPckMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDOztJQUVPLCtCQUFNLEdBQWQ7UUFDSSxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFM0MsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9CLElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDOztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSxzQkFBYyxpQkFxQjFCLENBQUE7QUFBQSxDQUFDO0FBSUY7SUFDSSxjQUNZLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO0lBQ2pCLENBQUM7O0lBRUwsc0JBQU8sR0FBUDtRQUNJLE1BQU0sQ0FBQztZQUNILElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDO1lBQ2xDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDO1lBQ25ELFlBQVksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDO1lBQ25ELFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDO1lBQzFELGtCQUFrQixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUM7WUFDeEUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUM7WUFDeEMsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUM7WUFDakQsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQztTQUM5RCxDQUFBO0lBQ0wsQ0FBQzs7SUFFTyxrQkFBRyxHQUFYLFVBQVksUUFBZ0I7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzFDLENBQUM7O0lBQ0wsV0FBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFBQSxDQUFDIn0=