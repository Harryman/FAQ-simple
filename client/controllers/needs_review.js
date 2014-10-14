NeedsReviewController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe('needs_review');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});