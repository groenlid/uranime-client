App.UserLibraryView = Em.View.extend({
  templateName: "user/library/library",

  didInsertElement: function(){
    console.log(this.get('content'));
  }
});