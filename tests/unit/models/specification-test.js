import { moduleForModel, test } from 'ember-qunit';

moduleForModel('specification', 'Unit | Model | specification', {
  // Specify the other units that are required for this test.
  needs: ['model:scenario']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
