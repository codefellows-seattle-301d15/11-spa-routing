(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: Use your DOM skills to reveal only the articles section! */
    $('#about').hide();
    $('#articles').show();
  };

  module.articleController = articleController;
})(window);

// LNK THIS TO ARTICLES ROUTE BY POINTING TO INSIDE ROUTE FILE
