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
      this.guessesLeft = 3;
      $('.container').html(this.el);
    },

    render: function() {

      var singlePost = this.postsplayableCollection.get(this.postId);
      var params = {
        post: this.postsplayableCollection.get(this.postId).toJSON(),
        guessResponse: this.guessResponse,
        response: this.response,
        guessesLeft: this.guessesLeft
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
          var points = 300;
          var won = true;
          var correctGuess = {
            "points": points,
            "won" : won
          }
          console.log('correct!');
          this.response = "You got it! Great job!";

          $.ajax({
            url: 'https://vast-wildwood-6662.herokuapp.com/guesses',
            type: 'POST',
            dataType: "json",
            data: correctGuess,
            success: function(data) {
              console.log(correctGuess);
            }
          });

          this.render();
        } else {
          this.guessResponse = true;
          this.guessesLeft --;
          this.response = "Sorry. Try again!";
          this.render();
        };


    }
  });

}());
