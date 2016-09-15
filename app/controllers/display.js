import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		updateHiddenFields(oldVal, newVal) {
			console.log(oldVal, newVal);
			console.log(this.get('model.fields').filterBy('optName',newVal));
		},
		submitForm() {
			console.log(this.get('model'));
		},
		cancelForm() {
			this.transitionToRoute('application');
		}
	}
});