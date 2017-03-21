import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['listItemCompleted'],
  listDetailHidden: true,
  // defining what should happen when the title is clicked on
  // it says it sould be a hide and show function
  actions: {
    toggleListItem () {
      return this.toggleProperty('listItemCompleted');
    }
  }
});
