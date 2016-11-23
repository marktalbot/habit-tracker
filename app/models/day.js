import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({

	// Defining database schema
	date: attr('string'),
	value: attr('boolean', { defaultValue: false }),
	calendar: belongsTo('calendar')

});
