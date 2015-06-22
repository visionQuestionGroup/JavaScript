;(function () {

  'use strict';

  app.Views.ViewQuestion = Backbone.View.extend({

    className: 'viewQuestion',

    template: hbs.viewquestion,

    events: {
      'click #guessBtn': 'guess'
    },

    initialize: function(options) {

      var args = options || {};
      this.postId = args.postId;
      this.postsplayableCollection = args.postsplayableCollection;
      this.render();
      $('.container').html(this.el);
    },

    render: function() {

      console.log('rendering');
      var singlePost = this.postsplayableCollection.get(this.postId);
      var params = {
        post: this.postsplayableCollection.get(this.postId).toJSON(),
        guessResponse: this.guessResponse,
        response: this.response
      };
      this.$el.html(this.template(params));

    },

    guess: function(event) {

      event.preventDefault();

      var imageObject = this.postsplayableCollection.get(this.postId);

      var answer = imageObject.attributes.post_info.answer;

      var userAnswer = $('#guessText').val();

      console.log(answer);

      console.log(userAnswer);

      if (answer.toLowerCase() == userAnswer.toLowerCase()) {
        this.guessResponse = true;
        console.log('correct!');
        this.response = "You got it! Great job!";
        this.render();
      } else {
        this.guessResponse = true;
        this.response = "Sorry. Try again!";
        this.render();
      };


    }
  });

}());
