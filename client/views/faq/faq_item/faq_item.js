/*****************************************************************************/
/* FaqItem: Event Handlers and Helpers */
/*****************************************************************************/
Template.FaqItem.events({
  'click #save':function(e,tmpl){
    e.preventDefault();
    var item = tmpl.data;
    var question = $(tmpl.find('#question')).val();
    var answer = $(tmpl.find('#answer')).val();
    var tagString = $(tmpl.find('#tags')).val();
    var tags = [];
    var pnString = $(tmpl.find('#pn')).val();
    var pn = [];
    var needsReview = $(tmpl.find('#review')).is(':checked');
    var modified = new Date;
    $.each(tagString.split(","), function(){
      if(this != ""){
        tags.push($.trim(this));
      }
    });
    $.each(pnString.split(","), function(){
      if(this != ""){
        pn.push($.trim(this));
      }
    });
    Faq.update({_id:item._id},{
      $set:{
        question:question,
        answer:answer,
        tags:tags,
        pn:pn,
        needsReview:needsReview,
        modified:modified
      },
      $push:{
        changeLog:{who:Meteor.user()._id,when:modified}
      }
    });
    Router.go('faq.index');
  },
  'click #delete': function(e,tmpl){
    e.preventDefault();
    Faq.remove({_id:tmpl.data._id});
    Router.go('faq.index');
  }
});

Template.FaqItem.helpers({
  needsReview :function(){
    if(this.needsReview){
      return 'checked';
    }
  }
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* FaqItem: Lifecycle Hooks */
/*****************************************************************************/
Template.FaqItem.created = function () {
};

Template.FaqItem.rendered = function () {
};

Template.FaqItem.destroyed = function () {
};
