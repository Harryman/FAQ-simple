FaqIndexController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe('faq_index');
  },

  data: function () {

  },

  action: function () {
    this.render();
  }
});
