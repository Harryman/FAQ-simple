Meteor.publish('faq_search',function (searchString) {
	return Faq.find({$text:{$search:searchString}});
});