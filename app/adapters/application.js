import DS from 'ember-data';

//export default DS.RESTAdapter.extend({
//    namespace: 'api/v1',
//    host: 'http://localhost:8000'
//    //ajax: function(url, method, hash) {
//    //    hash = hash || {}; // hash may be undefined
//    //    hash.crossDomain = true;
//    //    hash.xhrFields = {withCredentials: true};
//    //    return this._super(url, method, hash);
//    //}
//});

export default DS.FixtureAdapter.extend({
    namespace: 'api/v1',
    queryFixtures: function(records, query, type) {
        return records.filter(function(record) {
            for(var key in query) {
                if (!query.hasOwnProperty(key)) { continue; }
                var value = query[key];
                if (record[key] !== value) { return false; }
            }
            return true;
        });
    }
});