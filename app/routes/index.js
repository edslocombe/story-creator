import Ember from 'ember';
import Scenario from '../models/scenario';
import Step from '../models/step';

export default Ember.Route.extend({
  model: function () {
    return this.store.createRecord('specification', {
      title: 'As a user I want to be able to logout',
      scenarios: [
        this.store.createRecord('scenario', {
          title: 'User is logged out',
          steps: [
            this.store.createRecord('step', {type: 'Given', template: 'I am a logged in IGM user'}),
            this.store.createRecord('step', {type: 'When', template: 'I click the logout button'}),
            this.store.createRecord('step', {type: 'Then', template: 'I am logged out'})
          ]
        })]
    });
  },

  actions: {
    addScenario: function() {
      this.modelFor('index').get('scenarios').addObject(
        this.store.createRecord('scenario')
      );
    }
  }
});
