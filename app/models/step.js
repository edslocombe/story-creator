import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

  type: DS.attr('string'),
  template: DS.attr('string'),

  parameters: Ember.computed('template', function() {
    let template = this.get('template');
    let params = [];
    let matches;

    if (!!(matches = /<([^>]+)>/.exec(template))) {
      params = params.concat(matches.slice(1));
    }
    if (!!(matches = /\$([^ ]+)/.exec(template))) {
      params = params.concat(matches.slice(1));
    }

    return params;
  })

});
