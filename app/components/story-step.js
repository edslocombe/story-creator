import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [ 'story-step' ],

  step: null,
  example: null,

  compiledStep: Ember.computed('step', 'example', function() {
    let example = this.get('example');
    let template = this.get('step.template');

    return (this.get('step.parameterKeys') || []).reduce((template, paramKey) => {
      let paramLabel = example ? example.getParameterValue(paramKey) : '<' + paramKey + '>';
      let substitution = '<span class="step-param">' + paramLabel
          .replace('<', '&lt;')
          .replace('>', '&gt;') + '</span>';

      return template.replace('<' + paramKey + '>', substitution);
    }, template);
  })

});
