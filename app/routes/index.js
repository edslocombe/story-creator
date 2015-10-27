import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.createRecord('specification', {
      title: 'As a user I want to be able to logout',
      scenarios: [
        this.store.createRecord('scenario', {
          title: 'User is logged out for IGM',
          steps: [
            this.store.createRecord('step', {type: 'Given', template: 'I am a logged in IGM user'}),
            this.store.createRecord('step', {type: 'When', template: 'I click the logout button'}),
            this.store.createRecord('step', {type: 'Then', template: 'I am logged out'})
          ]
        }),
        this.store.createRecord('scenario', {
          title: 'User is logged out for more sites',
          steps: [
            this.store.createRecord('step', {type: 'Given', template: 'I am a logged in <site> user'}),
            this.store.createRecord('step', {type: 'When', template: 'I click the logout button'}),
            this.store.createRecord('step', {type: 'Then', template: 'I am logged out'})
          ],
          examples: [
            this.store.createRecord('example', {
              parameters: [ this.store.createRecord('parameter', { key: 'site', value: 'IGI' }) ]
            }),
            this.store.createRecord('example', {
              parameters: [ this.store.createRecord('parameter', { key: 'site', value: 'IGS' }) ]
            }),
            this.store.createRecord('example', {
              parameters: [ this.store.createRecord('parameter', { key: 'site', value: 'FXO' }) ]
            })
          ]
        }),
        this.store.createRecord('scenario', {
          title: 'Specific user is logged out for more sites',
          steps: [
            this.store.createRecord('step', {type: 'Given', template: 'I am the <site> user <user>'}),
            this.store.createRecord('step', {type: 'Given', template: 'I am logged in'}),
            this.store.createRecord('step', {type: 'When', template: 'I click the logout button'}),
            this.store.createRecord('step', {type: 'Then', template: 'I am logged out'})
          ],
          examples: [
            this.store.createRecord('example', {
              parameters: [
                this.store.createRecord('parameter', { key: 'site', value: 'IGI' }),
                this.store.createRecord('parameter', { key: 'user', value: 'igiUser/password' })
              ]
            })
          ]
        })
      ]
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
