import DS from 'ember-data';

export default DS.Model.extend({
  parameters: DS.hasMany('parameter')
});
