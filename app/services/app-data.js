import Ember from 'ember';
import formsData from 'form-generator/data/forms';
import config from './../config/environment';
import Form from 'form-generator/models/form';
import TextField from 'form-generator/models/text';
import NumbField from 'form-generator/models/number';
import EnumField from 'form-generator/models/enumeration';
import appData from 'form-generator/services/app-data';

export default Ember.Service.extend({
    init() {
        this.set('data', Ember.A(formsData));
    },
    generatedModel: Ember.computed('data.[]', function () {
        var modelArray = Ember.A(),
		formData = this.get('data');
		formData.forEach((item) => {
			var form = Form.create({
				id: item.id,
				name: item.name,
				fields: Ember.A()
			});
			item.fields.forEach((fieldItem) => {
				switch (fieldItem.type) {
					case 'text' :
						form.get('fields').pushObject(TextField.create(fieldItem));
						break;
					case 'number' :
						form.get('fields').pushObject(NumbField.create(fieldItem));
						break;
					case 'enumeration' :
						form.get('fields').pushObject(EnumField.create(fieldItem));
						break;
				}
			});
			modelArray.push(form);
		});
		return modelArray;
    }),
    fetchData(id) {
        return this.get('generatedModel').findBy('id', parseInt(id,10));
    }

});
