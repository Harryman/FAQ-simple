Meteor.publish('needs_review',function (){
	return Faq.find({$or:[{needsReview:true},{answer:""}]});
})