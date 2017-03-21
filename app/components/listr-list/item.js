import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['listItemCompleted'],
  listItemCompleted: false,
  actions: {
    toggleListItemCompleted () {
      return this.toggleProperty('listItemCompleted');
    },
  },
});
