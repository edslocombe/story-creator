import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('story-scenario', 'Integration | Component | story scenario', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{story-scenario}}`);

  assert.equal(this.$().text().trim(), 'Scenario:');

});
