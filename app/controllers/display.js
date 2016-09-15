import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		updateHiddenFields(oldVal, newVal) {
			if (oldVal[0] && oldVal[0].relatedFields) {
				oldVal[0].relatedFields.forEach(function (item) {
					this.get('model.fields').filterBy('id', item)[0].set('isDefault', false);
				}.bind(this));
			}
			if (newVal[0] && newVal[0].relatedFields) {
				newVal[0].relatedFields.forEach(function (item) {
					this.get('model.fields').filterBy('id', item)[0].set('isDefault', true);
				}.bind(this));
			}
		},
		submitForm() {
			console.log(this.get('model.fields').map(item => {return {"key":item.name,"value":item.value}}));
		},
		cancelForm() {
			this.transitionToRoute('index');
		}
	}
});