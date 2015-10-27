import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('example', 'Unit | Model | example', {
  // Specify the other units that are required for this test.
  needs: ['model:parameter']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('Parameter by key', function(assert) {
  var model = this.subject();

  Ember.run(function() {
    model.set('parameters', Ember.A([
      this.store().createRecord('parameter', { key: 'site', value: 'IGM' }),
      this.store().createRecord('parameter', { key: 'user', value: 'pdtestuser000' })
    ]));
  }.bind(this));

  assert.equal('IGM', model.getParameterValue('site'));
});
