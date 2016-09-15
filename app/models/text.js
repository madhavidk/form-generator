import Ember from 'ember';
import Field from 'form-generator/models/field';

export default Field.extend({
	isText: true,
    validate: function() {
        this._super();
    }
});