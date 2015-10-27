import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('scenario', 'Unit | Model | scenario', {
  needs: ['model:step', 'model:example']
});

test('it exists', function(assert) {
  var model = this.subject();

  assert.ok(!!model);
});

test('Get parameters works', function(assert) {
  var model = this.subject();

  Ember.run(() => {
    model.set('steps', [
      this.store().createRecord('step', { type: 'Given', template: 'I am <site> user'}),
      this.store().createRecord('step', { type: 'Given', template: 'my passowrd is <password>'})
    ]);
  });

  assert.deepEqual([ 'site', 'password' ], model.get('parameters'));
});

test('Get parameters are unique', function(assert) {
  var model = this.subject();

  Ember.run(() => {
    model.set('steps', [
      this.store().createRecord('step', { type: 'Given', template: 'I am <site> user'}),
      this.store().createRecord('step', { type: 'Given', template: 'my site is <site>'})
    ]);
  });

  assert.deepEqual([ 'site' ], model.get('parameters'));
});
