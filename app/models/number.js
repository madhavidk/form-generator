import Ember from 'ember';
import Field from 'form-generator/models/field';

export default Field.extend({
	isNumber: true,
    validate: function() {
        this._super();
    }
});