import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  steps: DS.hasMany('step'),
  examples: DS.hasMany('example'),

  parameters: Ember.computed('steps', function() {
    return this.get('steps').reduce(function(params, step) {
      step.get('parameters').forEach(function(p) {
        params.add(p);
      });

      return params;
    }, new Set());
  })
});
