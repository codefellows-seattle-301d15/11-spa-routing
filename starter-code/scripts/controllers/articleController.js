(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODONE: Use your DOM skills to reveal only the articles section! */
    $('.tab-content').hide();
    $('#articles').fadeIn();
  };

  module.articleController = articleController;
})(window);
