(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: Use your DOM skills to reveal only the about section! */
    $('#articles').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);

// WILL NEED /ABOUT AND /ARTICLE (IN ROUTES.JS??) (PAGE/ABOUT, ABOUTCONTROLLER.REVEAL),
