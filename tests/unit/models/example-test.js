import { moduleForModel, test } from 'ember-qunit';

moduleForModel('example', 'Unit | Model | example', {
  // Specify the other units that are required for this test.
  needs: ['model:parameter']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
