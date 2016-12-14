console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');
  $('#guess-number-form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/pick-a-number',
      success: handleSuccess,
      error: handleError
    });
    $('#target-number-form').on('submit', function(event){
      event.preventDefault();
      $.ajax({
        method: 'PUT',
        url: 'http://localhost:3000/pick-a-number',
        success: handleSuccess,
        error: handleError
      });
    })
    

    function handleSuccess(data){
      // $('body').html(data);
      console.log(data);
    }
    function handleError(){
      console.log('error');
    }

  });


});
