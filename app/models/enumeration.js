import Ember from 'ember';
import Field from 'form-generator/models/field';

export default Field.extend({
	isEnumeration: true,
    choices: Ember.A(),
    validate: function() {
        this._super();
    }
});