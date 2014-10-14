Meteor.publish('faq_tag',function (tag) {
	return Faq.find({tags:tag});
});