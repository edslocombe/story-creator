import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

  title: DS.attr('string'),
  steps: DS.hasMany('step'),
  examples: DS.hasMany('example'),

  parameters: Ember.computed('steps', function() {
    return Object.keys(this.get('steps')
      .reduce((params, step) => {
        step.get('parameterKeys').forEach(p => { params[p] = null; });

        return params;
      }, {}));
  })

});
