import Ember from 'ember';

export default Ember.Component.extend({
	selectedOption: null,
	showDeleteBtn: Ember.computed('showDelete', 'field.isDefault', function() {
		return this.get('showDelete') && this.get('field.isDefault');
	}),
	actions : {
		onSelectedChanged(selectedObj) {
			this.set('selectedOption', selectedObj);
			var oldValue = this.get('field.value');
			var newValue = selectedObj.optName;
			this.set('field.value', newValue);
			console.log('on change',oldValue, newValue);
			this.attrs.updateHiddenFields(this.get('field.optionsList').filterBy('optName', oldValue),
				this.get('field.optionsList').filterBy('optName', newValue));
		},
		deleteField(field) {
			this.attrs.deleteField(field);
		}
	}
});