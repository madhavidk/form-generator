import Ember from 'ember';
import appData from 'form-generator/services/app-data';

export default Ember.Route.extend({
    appData: Ember.inject.service(),
	model (id) {
        var formData = this.get('appData').fetchData(id);
        return this.get('appData').fetchData(id);
    },
});
