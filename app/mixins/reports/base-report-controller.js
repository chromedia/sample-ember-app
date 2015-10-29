import Ember from 'ember';

export default Ember.Mixin.create({

    queryParams: ["type", "period", "expenseType", "dependent", "chart"],

    type: "consumer",

    chart: "pie",

    period: "monthly",

    dependent: 0,

    dependentArrayIndex: -1,

    dependentInstance: function(){
        var target = this.get('dependent');
        var self = this;

        var retVal = {
            name: 'All Users',
            id: 0
        };

        this.get('allDependents').forEach(function(model, index){
            if (parseInt(model.id) === target){
                retVal = model;
                self.set('dependentArrayIndex', index);
            }
        });

        return retVal;

    }.property('dependent'),

    expenseType: 0,

    expenseTypeArrayIndex: -1,

    expenseTypeInstance: function(){

        var target = this.get('expenseType');
        var retVal = {
            name: 'All Types',
            id: 0
        };
        var self = this;

        this.get('allExpenseTypes').forEach(function(model, index){

            if (parseInt(model.id) === target){
                retVal = model;
                self.set('expenseTypeArrayIndex', index);
            }

        });

        return retVal;


    }.property('expenseType'),

    periodFilters: function(){

        return [
            {
                "label": "Month",
                "period": "monthly",
                "route": this.get('currentRoute')
            },
            {
                "label": "Year",
                "period": "yearly",
                "route": this.get('currentRoute')
            },
            {
                "label": "All Time",
                "period": "all-time",
                "route": this.get('currentRoute')
            }
        ];

    }.property("period"),

    allExpenseTypes: function(){
        return this.store.find('expense-type');
    }.property(),

    allDependents: function(){
        return this.store.find('dependent');
    }.property(),

    getAdjacentExpenseTypes: function(){
        var target = this.get('expenseType');
        var all = this.get('allExpenseTypes');
        var currentTypeIndex = this.get('expenseTypeArrayIndex');
        var next;
        var prev;

        if (0 === target){
            next = all.objectAt(0);
            prev = all.objectAt(this.get('allExpenseTypes.length')-1);
        }
        else {
            next = all.objectAt(currentTypeIndex+1);
            prev = all.objectAt(currentTypeIndex-1);
        }


        return {
            next: next ? next.id : 0,
            prev: prev ? prev.id : 0
        };
    },

    getAdjacentDependents: function(){
        var target = this.get('dependent');
        var all = this.get('allDependents');
        var currentIndex = this.get('dependentArrayIndex');
        var next;
        var prev;

        if (0 === target){
            next = all.objectAt(0);
            prev = all.objectAt(this.get('allDependents.length')-1);
        }
        else {
            next = all.objectAt(currentIndex+1);
            prev = all.objectAt(currentIndex-1);
        }

        
        return {
            next: next ? next.id : 0,
            prev: prev ? prev.id : 0
        };
    },

    totalCashOut: function(){

        var retVal = 0;
        this.get('filteredContent').forEach(function(row){

            retVal += row.get('cashOut');
        });

        return retVal;

    }.property('filteredContent'),

    totalPlanPaid: function(){

        var retVal = 0;
        this.get('filteredContent').forEach(function(row){
            retVal += row.get('planPaid');
        });

        return retVal;

    }.property('filteredContent'),

    totalNetCost: function(){

        var retVal = 0;
        this.get('filteredContent').forEach(function(row){
            retVal += row.get('netCost');
        });

        return retVal;

    }.property('filteredContent'),


    // filter functions
    // this will filter out the contents of our model
    filteredContent: function(){

        // filter by time
        var result = this.get('content');

        result = this.applyPeriodFilter(result);

        result = this.applyTypeFilter(result);

        result = this.applyExpenseTypeFilter(result);

        result = this.applyDependentFilter(result);

        return result;


    }.property('content', 'type', 'period', 'expenseType', 'dependent'),

    // apply the filter for time
    applyPeriodFilter: function(result){

        var today = new Date();
        var period = this.get('period');

        result = result.filter(function(item){

            var retVal = true;
            switch (period){
                case 'monthly':
                    retVal = item.get('month') === today.getMonth();
                    break;
                case 'yearly':
                    retVal = item.get('dateCreated').getFullYear() === today.getFullYear();
                    break;
                default:
                    retVal = true;
            }

            return retVal;
        });

        return result;
    },

    // apply filter for consumer paid and insurance paid
    applyTypeFilter: function(result){
        var type = this.get('type');
        result = result.filter(function(item){

            var retVal = true;

            if ('consumer' === type){
                retVal = item.get('cashOut') > 0; // consumer has paid
            }
            else {
                retVal = item.get('planPaid') > 0; // carrier has paid
            }

            return retVal;
        }); // end result.filter



        return result;
    },

    // apply filter for expense type
    applyExpenseTypeFilter: function(result){
        var target = this.get('expenseType');
        if (0 !== target){
            result = result.filter(function(item){
                var retVal = true;
                retVal = parseInt(item.get('expenseType.id')) === target;

                return retVal;
            }); // end result.filter
        }

        return result;
    },

    applyDependentFilter: function(result){
        var target = this.get('dependent');
        if (0 !== target){
            result = result.filter(function(item){
                var retVal = true;
                retVal = parseInt(item.get('dependent.id')) === target;


                return retVal;
            }); // end result.filter
        }

        return result;
    },

    //------ end filter functions



    //------ start actions
    actions: {
        previousExpenseType: function(){
            this.set('expenseType', this.getAdjacentExpenseTypes().prev);
        },

        nextExpenseType: function(){
            this.set('expenseType', this.getAdjacentExpenseTypes().next);
        },

        previousDependent: function(){
            this.set('dependent', this.getAdjacentDependents().prev);
        },

        nextDependent: function(){
            this.set('dependent', this.getAdjacentDependents().next);
        }
    }
});