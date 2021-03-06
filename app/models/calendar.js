import DS from 'ember-data';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({

	// Defining database schema
	name: attr('string'),
	notes: attr('string', { defaultValue: '' }),
	days: hasMany('day') // 'day' refers to Day model

});
