$(document).ready(function() {
  /**
   * Toggles "done" class on <li> element
   */
  $('.today-list').on('click', 'li', function() {
    $(this).toggleClass('done');
  });

  /**
   * Deletes the parent <li> element when the delete link is clicked.
   * Fades out the <li> before removing it.
   */
  $('.today-list').on('click', '.delete', function(e) {
    e.stopPropagation(); // prevents 'li' click event
    $(this).parent().fadeOut(500, function() { //extra credit
      $(this).remove(); // 'this' = 'li'
    });
  });

  /**
   * Adds new list item to <ul>, when 'Add' is clicked
   * Clears the input field
   */
  const addListItem = function(e) {
    e.preventDefault();
    const text = $('#new-todo').val();
    if (text) {
      $('.today-list').append('<li><span>' + text + '</span><a class="delete" href="#">Delete</a></li>');
      $('#new-todo').val('');
    }
  };

  // add listener for 'add' link
  $('.add-item').click(addListItem);
});
