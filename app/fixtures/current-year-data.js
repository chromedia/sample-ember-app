import Ember from 'ember';
import CurrentMonthFixture from '../fixtures/monthly-breakdown';

//var currentMonthData
console.log(CurrentMonthFixture.data);
var today = new Date();



export default Ember.Object.create({
    data: []
});