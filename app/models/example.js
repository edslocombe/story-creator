import DS from 'ember-data';

export default DS.Model.extend({

  parameters: DS.hasMany('parameter'),

  getParameterValue: function(parameterKey) {
    let parameters = this.get('parameters');
    parameters = parameters ? parameters.toArray() : [];

    for (let i = 0; i < parameters.length; i++) {
      if (parameters[i].get('key') === parameterKey) {
        return parameters[i].get('value');
      }
    }

    return '';
  }

});
