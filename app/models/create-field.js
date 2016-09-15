import Ember from 'ember';

export default Ember.Object.extend({
	id:null,
    label:null,
    value:null,
    type:null,
    isMandatory:false,
    isDefault:true,
    errors:Ember.A(),
    validate: function () {
        if (this.get('isMandatory') && Ember.isPresent(this('value'))) {
            this.get('errors').push("Provide value for mandatory field " + this.get('label'));
        }
    }
});