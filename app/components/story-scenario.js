import Ember from 'ember';

export default Ember.Component.extend({

  classNames: [ 'story-scenario' ],

  renderExamplesExpanded: Ember.computed('expandExamples', 'examples', function() {
    return this.get('examples').length > 0 && this.get('expandExamples');
  })

});
