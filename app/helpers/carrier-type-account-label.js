import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(carrierType, preText) {

    var retVal = "";
    carrierType = parseInt(carrierType);

    switch (carrierType){
        case 1: // insurers
            retVal = "Insurance Carrier";
            break;
        case 2: // payroll
            retVal = "Payroll Provider";
            break;
        case 3: // banks
            retVal = "Personal Finance Account";
            break;
        case 4: // hsa
            retVal = "HSA/FSA Plan Provider";
            break;
    }

    preText = "string" === typeof(preText) ? preText : "";

    return preText+retVal;
});