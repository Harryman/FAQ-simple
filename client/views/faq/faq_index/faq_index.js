/*****************************************************************************/
/* FaqIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.FaqIndex.events({

});

Template.FaqIndex.helpers({
  Questions: function (){
    return Faq.find({},{
      sort:{
        modified:-1
      }
    });
  },
  Count: function(){
    return Faq.find({$nor:[{question:""},{question:undefined}]}).count();
  },
  needsReviewCount: function(){
    return Faq.find({$or:[{needsReview:true},{answer:""}]}).count();
  },
  needsLookingAtClass: function(){
    if(this.needsReview || this.answer == ""){
      return 'needsReview';
    }
    return;
  }

});

/*****************************************************************************/
/* FaqIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.FaqIndex.created = function () {
};

Template.FaqIndex.rendered = function () {
};

Template.FaqIndex.destroyed = function () {
};
