import Ember from 'ember';

// common graph related attributes
export default Ember.Mixin.create({

    chartControls: function(){

        return [

            {
                route: this.get('currentRoute'),
                chartParameter: 'pie',
                chartIcon: 'fa-pie-chart'
            },

            {
                route: this.get('currentRoute'),
                chartParameter: 'bar',
                chartIcon: 'fa-bar-chart'
            }
        ];

    }.property(),

    // data grouping key
    periodGroupingKey: function(){
        var retVal;
        switch (this.get('period')){
            case "monthly":
                retVal = "week"
                break;
            case "yearly":
                retVal = "month"
                break;
            default:
                retVal = "year"
                break;
        }

        return retVal;

    }.property('period'),

    barGraphLabels: function(){

        var retVal = [];
        var mapping = {};
        switch (this.get('period')){
            case "monthly":
                retVal = [
                    "Week 1",
                    "Week 2",
                    "Week 3",
                    "Week 4",
                    "Week 5",
                ];
                retVal.forEach(function(item,index){
                    mapping[index] = index+1;
                });
                break;
            case "yearly":
                retVal = [
                    "January", "February", "March",
                    "April", "May", "June", "July",
                    "August", "September", "October",
                    "November", "December"
                ];
                retVal.forEach(function(item,index){
                    mapping[index] = index;
                });
                break;
            default:
                var today = new Date();
                for (var x=2010;x<=today.getFullYear();x++){
                    retVal.push(x);
                }
                retVal.forEach(function(item,index){
                    mapping[index] = item;
                });
                break;
        };

        return {
            values: retVal,
            mapping: mapping
        };


    }.property('period')
});