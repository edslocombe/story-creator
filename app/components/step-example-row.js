import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'tr',
  example: null,
  parameterKeys: null,

  parameterValues: Ember.computed('parameterKeys', function() {
    let keys = this.get('parameterKeys') || Ember.A();
    let example = this.get('example');

    return keys.map(paramKey => {
      return example.getParameterValue(paramKey);
    });
  })

});
