import Ember from 'ember';

export default Ember.Controller.extend({
   actions: {
      save() {
         this.get('model').save().then(
            () => this.transitionToRoute('calendars'),
            () => console.log('promise was rejected. Model did not save')
         );
      },
      cancel() {
         this.get('model').deleteRecord();
         this.transitionToRoute('calendars');
      }
   }
});
