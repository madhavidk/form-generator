import Ember from 'ember';
import appData from 'form-generator/services/app-data';

export default Ember.Route.extend({
    appData: Ember.inject.service(),
	model () {
        return this.get('appData').fetchData(0);
    },
    setupController (controller, model) {
        this.set('controller.model', model);
    }
});
