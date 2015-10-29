import DS from 'ember-data';

var CarrierType = DS.Model.extend({
    name: DS.attr('string'),

    usernamePlaceholder: DS.attr('string')
});

CarrierType.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: "Insurers",
            status: true,
        },
        {
            id: 2,
            name: "Payroll",
            usernamePlaceholder: "i.e. JumanjiPrescott15"
        },
        {
            id: 3,
            name: "Banks",
            usernamePlaceholder: "i.e. ChalupaBatman2001"
        },
        {
            id: 4,
            name: "HSA / FSA",
            usernamePlaceholder: "i.e. YossarianSnowden"
        }
    ]
});

export default CarrierType;
