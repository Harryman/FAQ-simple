FaqTagController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe('faq_tag',this.params.tag);
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
