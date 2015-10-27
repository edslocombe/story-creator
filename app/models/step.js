import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

  type: DS.attr('string'),
  template: DS.attr('string'),

  parameterKeys: Ember.computed('template', function() {
    let template = this.get('template');
    let pattern = new RegExp('<([^>]+)>', 'g');
    let matches = [];
    let singleMatch;

    while (singleMatch = pattern.exec(template)) {
      matches.push(singleMatch[1]);
    }

    return matches;
  })

});
