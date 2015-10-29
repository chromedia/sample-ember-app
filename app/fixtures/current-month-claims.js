import Ember from 'ember';

var today = new Date();

var raw = [
    {
        dependent: 1,
        expenseType: 3,
        vendor: 5,
        amountBilled: 30,
        memberRate: 20,
        copay: 0,
        amountTowardDeductible: 20,
        planPaid: 0,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date(today.getFullYear(), today.getMonth(), 3)
    },

    {
        dependent: 1,
        expenseType: 1,
        vendor: 5,
        amountBilled: 104.5,
        memberRate: 37.33,
        copay: 0,
        amountTowardDeductible: 37.33,
        planPaid: 0,
        adjustments: 0,
        hcFund: 35.55,
        dateCreated: new Date(today.getFullYear(), today.getMonth(), 9)
    },

    {
        dependent: 3,
        expenseType: 4, // needles
        vendor: 6,
        amountBilled: 15,
        memberRate: 7.5,
        copay: 0,
        amountTowardDeductible: 7.5,
        planPaid: 0,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date(today.getFullYear(), today.getMonth(), 13)
    },

    {
        dependent: 3,
        expenseType: 6, // others
        vendor: 8,
        amountBilled: 21,
        memberRate: 16,
        copay: 0,
        amountTowardDeductible: 16,
        planPaid: 0,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date(today.getFullYear(), today.getMonth(), 18)
    },

    {
        dependent: 1,
        expenseType: 2, // office visit
        vendor: 3,
        amountBilled: 60,
        memberRate: 50,
        copay: 0,
        amountTowardDeductible: 0,
        planPaid: 50,
        adjustments: 0,
        hcFund: 0,
        dateCreated: new Date(today.getFullYear(), today.getMonth(), 23)
    },

    {
        dependent: 2,
        expenseType: 1,
        vendor: 3,
        amountBilled: 52.25,
        memberRate: 29.7,
        copay: 0,
        amountTowardDeductible: 29.7, // H
        planPaid: 0, // J
        adjustments: 0, // K
        hcFund: 0, // M
        dateCreated: new Date(today.getFullYear(), today.getMonth(), 25)
    },

    {
        dependent: 2,
        expenseType: 1,
        vendor: 3,
        amountBilled: 52.25,
        memberRate: 32,
        copay: 0,
        amountTowardDeductible: 22,
        planPaid: 10, // J
        adjustments: 0, // K
        hcFund: 0, // M
        dateCreated: new Date(today.getFullYear(), today.getMonth(), 27)
    }

];

export default Ember.Object.create({
    data: raw
});