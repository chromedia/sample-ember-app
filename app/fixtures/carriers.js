import Ember from 'ember';
import Insurers from '../fixtures/insurers';
import Payroll from '../fixtures/payroll';
import Banks from '../fixtures/banks';
import Hsa from '../fixtures/hsa';

var raw = [];
var targets = [
    {
        data: Insurers.data
    },
    {
        data: Payroll.data
    },
    {
        data: Banks.data
    },
    {
        data: Hsa.data
    }
];

// import Insurers
var startId = 1;
targets.forEach(function(item){
    item.data.forEach(function(fixture){
        fixture.id = startId;
        raw.push(fixture);
        startId++;
    });
});

export default Ember.Object.create({
    data: raw
});