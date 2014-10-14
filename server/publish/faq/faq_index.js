/*****************************************************************************/
/* FaqIndex Publish Functions
/*****************************************************************************/

Meteor.publish('faq_index', function () {
	//var use = Meteor.users.findOne({_id:this.userId});
	if(Meteor.users.findOne({_id:this.userId}).services.google.email.match(/@midwestsupercub.net/g)){
		return Faq.find({},{
			fields:{
				answer:0,
				changeLog:0,
			}
		});
	}
	else{
		return false;
	}
});