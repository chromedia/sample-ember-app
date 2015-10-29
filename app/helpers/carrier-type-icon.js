import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(carrierType) {

    var iconName = "";
    carrierType = parseInt(carrierType);
    switch (carrierType){
        case 1: // insurers
            iconName = "insurers-icon-144.png";
            break;
        case 2: // payroll
            iconName = "payroll-icon-144.png";
            break;
        case 3: // banks
            iconName = "pers-fin-icon-144.png";
            break;
        case 4: // hsa
            iconName = "hsa-icon-144.png";
            break;
    }

    return new Ember.Handlebars.SafeString('<img src="assets/'+iconName+'">');

});