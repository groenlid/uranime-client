App.UserLibraryView = Em.View.extend({
  templateName: "uranime/~templates/user/library/library",


  didInsertElement: function(){
    console.log(this.get('content'));
  }
});