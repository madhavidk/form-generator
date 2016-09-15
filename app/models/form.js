import Ember from 'ember';

export default Ember.Object.extend({
	id: null,
    name: null,
    fields: Ember.A(),
    errors: Ember.A(),
    validate: function () {
        // call validate functions for individual fields
        this.get('fields').forEach((item) => {
            item.validate();
        });
    }
});