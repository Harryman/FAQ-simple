/*
 * Add query methods like this:
 *  Faq.findPublic = function () {
 *    return Faq.find({is_public: true});
 *  }
 */

Faq.allow({
  insert: function (userId, doc) {
    if(Meteor.user().services.google.email.match(/@midwestsupercub.net/g)){
      return true;
    }
    else{
      return false;
    }
  },

  update: function (userId, doc, fieldNames, modifier) {
    if(Meteor.user().services.google.email.match(/@midwestsupercub.net/g)){
      return true;
    }
    else{
      return false;
    }
  },

  remove: function (userId, doc) {
    if(Meteor.user().services.google.email.match(/@midwestsupercub.net/g)){
      return true;
    }
    else{
      return false;
    }
  }
});

Faq.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});
