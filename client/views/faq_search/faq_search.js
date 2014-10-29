/*****************************************************************************/
/* FaqSearch: Event Handlers and Helpers */
/*****************************************************************************/
Template.FaqSearch.events({

});

Template.FaqSearch.helpers({
  Questions: function (){
    return Faq.find();
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
/* FaqSearch: Lifecycle Hooks */
/*****************************************************************************/
Template.FaqSearch.created = function () {
};

Template.FaqSearch.rendered = function () {
};

Template.FaqSearch.destroyed = function () {
};
