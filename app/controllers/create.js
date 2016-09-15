import Ember from 'ember';
import Field from 'form-generator/models/field';

export default Ember.Controller.extend({
	appData: Ember.inject.service(),
	newFormFields: Ember.computed.oneWay('model.fields'),
	actions: {
		updateHiddenFields(oldVal, newVal) {
			console.log(oldVal, newVal);
			console.log(this.get('model.fields').filterBy('optName',newVal));
		},
		addNewField() {
			let count = this.get('model.fields').length;
			this.get('newFormFields').pushObject(Field.create({'id':count++, 'name':'', type:''}));
			console.log(this.get('model'));
		},
		deleteField(field) {
			this.get('model.fields').removeObject(field);
		},
		cancelForm() {
			this.transitionToRoute('application');
		},
		createForm() {
			var newData = {
				"id":2,
				"name":"Contact Form",
				"fields":[
					{"id":1,"name":"Enter Name", "value": "",  "type": "text", "isDefault": true, "isMandatory": true},
					{"id":2,"name":"Enter Email", "value": "",  "type": "text", "isDefault": true, "isMandatory": true},
					{"id":3,"name":"Enter Phone", "value": "",  "type": "number", "isDefault": true, "isMandatory": true},
					{"id":4,"name":"Enter Location", "value": "",  "type":"enumeration", "isDefault": true, "isMandatory": true,
					"optionsList":[{"id":1,"optName":"India"},{"id":2,"optName":"Europe"},{"id":3,"optName":"Americas", "relatedFields":[5]}]},
					{"id":5,"name":"Enter Country", "value": "",  "type": "text", "isDefault": false, "isMandatory": true}
				]
			};
			this.get('appData.data').push(newData);
			this.transitionToRoute('application');
		}
	}
});