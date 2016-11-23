import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
   this.route('new', { 
      path: '/calendars/new' 
   });
   this.route('calendars', {
      path: '/calendars'   
   });
   this.route('calendars', {
      path: '/calendars'   
   });
});

export default Router;
