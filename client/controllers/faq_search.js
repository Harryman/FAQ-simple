FaqSearchController = RouteController.extend({
  waitOn: function () {
  	console.log(this.params.search);
  	return Meteor.subscribe('faq_search',this.params.search);
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});