Faq = new Meteor.Collection('faq');

/*Faq.ensureIndex(
  {
    question:"text",
    answer:"text",
    tags:"text",
    partNum:"text"
  },
  {
    weights:{
      question:30,
      answer:10,
      tags:40,
      partNum:150,
    },
    name:"fullIndex"
  }
);*/

Faq.findMatchAll = function(qa,tags,pn){
	Faq.find({_id:ids});
};



/*
 * Add query methods like this:
 *  Faq.findPublic = function () {
 *    return Faq.find({is_public: true});
 *  }
 */
