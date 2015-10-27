import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('step', 'Unit | Model | step', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('Angled-bracket parameters supported', function(assert) {
  var model = this.subject();

  Ember.run(function() {
    model.set('template', 'I am a <site> user');
  });

  assert.deepEqual(model.get('parameterKeys'), [ 'site' ]);
});

test('Multiple parameters supported', function(assert) {
  var model = this.subject();

  Ember.run(function() {
    model.set('template', 'I am a <site> user <user>');
  });

  assert.deepEqual(model.get('parameterKeys'), [ 'site', 'user' ]);
});
