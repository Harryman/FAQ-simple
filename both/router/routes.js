/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase',
  waitOn: function(){
  	return Meteor.subscribe('crntUser');
  }
});

Router.plugin('authd',{
  notAuthed:'no.auth',
  except:'no.auth'
});

Router.map(function(){
  this.route('/',{
    name:'faq.index'
  });
  this.route('/notAuthorized',{
    name:'no.auth'
  });
  this.route('/t/:tag',{
    name:'faq.tag',
    template:'FaqIndex'
  });
  this.route('/s/:search', {
    name: 'faq.search'
  });
});

Router.route('/needsReview',{
  name: 'needs.review',
  template:'FaqIndex'
});




Router.route('/:_id',{
  name:'faq.item'
});
