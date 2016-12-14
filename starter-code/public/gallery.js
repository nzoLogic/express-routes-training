console.log('gallery.js');
$(document).ready(function(){
  $('#art-submission').on('submit',function(event){
    event.preventDefault();
    $.ajax({
      method: 'post',
      url: 'http://localhost:3000/art-gallery',
      success: handleSuccess,
      error: handleError,
    });
    function handleSuccess(data){
      console.log(data)
    }
    function handleError(){
      console.log('error');
    }
  });
})
