FaqItemController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe('faq_item',this.params._id);
  },

  data: function () {
  	return Faq.findOne({_id:this.params._id});
  },

  action: function () {
    this.render();
  }
});
