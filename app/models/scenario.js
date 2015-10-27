import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

  title: DS.attr('string'),
  steps: DS.hasMany('step'),
  examples: DS.hasMany('example'),

  parameters: Ember.computed('steps', function() {
    let uniqueParams = [];

    this.get('steps')
      .reduce((params, step) => {
        step.get('parameterKeys').forEach(p => { params.add(p); });

        return params;
      }, new Set())
      .forEach(paramKey => {
        uniqueParams.push(paramKey);
      });

    return uniqueParams;
  })

});
