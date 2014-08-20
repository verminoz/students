(function ($) {

Drupal.behaviors.deleteUser = {
  attach: function (context, settings) {

    $('a.delete-button').click(function( event ) {

      event.preventDefault();
      var el = $(this);

      $.ajax({
        type: "POST",
        url: '?q=students/delete/' + $(this).attr('id'), // Haven't enable clean urls on test site :)
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg, textStatus, XMLHTTPRequest) {
          el.parent().parent().remove();
        },
        cache: false
      });
    });
  }
};

}(jQuery));