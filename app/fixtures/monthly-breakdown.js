import Ember from 'ember';

function randomDate() {
    var now = new Date();
    var start = new Date(now.getFullYear(), now.getMonth(), 1);
    var end = new Date(now.getFullYear(), now.getMonth(), 29);

    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export default Ember.Object.create({
    data: [
        {
            id: 1,
            expenseType: 1,
            cost: 458.74,
            consumerPaid: true,
            week: 1,
            dateCreated: randomDate()
        },
        {
            id: 2,
            expenseType: 2,
            cost: 305.83,
            consumerPaid: true,
            week: 1,
            dateCreated: randomDate()
        },
        {
            id: 3,
            expenseType: 3,
            cost: 305.83,
            consumerPaid: true,
            week: 1,
            dateCreated: randomDate()
        },
        {
            id: 4,
            expenseType: 4,
            cost: 229.37,
            consumerPaid: true,
            week: 2,
            dateCreated: randomDate()
        },
        {
            id: 5,
            expenseType: 5,
            cost: 152.91,
            consumerPaid: true,
            week: 2,
            dateCreated: randomDate()
        },
        {
            id: 6,
            expenseType: 6,
            cost: 76.46,
            consumerPaid: true,
            week: 3,
            dateCreated: randomDate()
        },
        {
            id: 7,
            expenseType: 2,
            cost: 247.516,
            consumerPaid: false,
            week: 4,
            dateCreated: randomDate()

        },
        {
            id: 8,
            expenseType: 3,
            cost: 371.274,
            consumerPaid: false,
            week: 4,
            dateCreated: randomDate()
        },
        {
            id: 9,
            expenseType: 1,
            cost: 371.274,
            consumerPaid: true,
            week: 4,
            dateCreated: randomDate()
        }
    ]
});