import { moduleForModel, test } from 'ember-qunit';

moduleForModel('scenario', 'Unit | Model | scenario', {
  // Specify the other units that are required for this test.
  needs: ['model:example']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
