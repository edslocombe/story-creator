import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  steps: DS.hasMany('step'),
  examples: DS.hasMany('example'),

  parameters: Ember.computed('examples', function() {
    return this.get('examples').reduce(function(params, example) {
      example.get('parameters').forEach(function(p) {
        params.add(p.get('key'));
      });

      return params;
    }, new Set());
  })
});
