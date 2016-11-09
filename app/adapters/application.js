import DS from 'ember-data';
import config from 'rarwe-demo/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.apiHost
});

// API lived at http://rock-and-roll-with-emberjs-api.herokuapp.com

