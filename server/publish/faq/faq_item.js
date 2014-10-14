Meteor.publish('faq_item', function (id) {
	//var use = Meteor.users.findOne({_id:this.userId});
	if(Meteor.users.findOne({_id:this.userId}).services.google.email.match(/@midwestsupercub.net/g)){
		return Faq.find({_id:id});
	}
	else{
		return false;
	}
});