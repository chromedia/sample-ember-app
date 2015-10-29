import Ember from "ember";

export default Ember.Object.create({
    names: [
        "#50D2C2",
        "#8C88FF",
        "#BA77FF",
        "#00B9FF",
        "#EE4DB9",
        "#FFB258",
        "#FF3366",
        "#6563A4"
    ],

    random: function(usedColors){
        //var result;
        //var count = 0;
        //for (var prop in this.names){
        //    if (Math.random() < 1/++count){
        //        result = prop;
        //    }
        //}
        //
        //if (-1 !== usedColors.indexOf(result) ) {
        //    return this.random(usedColors);
        //}
        //else {
        //    return result;
        //}

        // we no longer randomize
        var result = this.names[usedColors.length];

        return result;

    }
});