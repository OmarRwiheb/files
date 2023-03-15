jQuery(document).ready(function($){
    //open popup
    $( window ).load(function(event){
      event.preventDefault();
      $('.popup').addClass('is-visible');
    });
    
    //close popup
    $('.popup').on('click', function(event){
      if( $(event.target).is('.popup-close') || $(event.target).is('.popup') ) {
        event.preventDefault();
        $(this).removeClass('is-visible');
      }
    });
    //close popup when clicking the esc keyboard button
    $(document).keyup(function(event){
        if(event.which=='27'){
          $('.popup').removeClass('is-visible');
        }
      });
  });