import Ember from 'ember';
//import formData from './data/forms';

export default Ember.Route.extend({
	appData: Ember.inject.service(),
	model: function() {
		return this.get('appData.generatedModel');
	},
	actions: {
		gotoCreate: function(id) {
			if (id) {
				this.transitionTo('display', this.controller.get('model').findBy('id', id));
			} else {
				this.transitionTo('create');
			}
		}
	}
});
