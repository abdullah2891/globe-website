$(document).ready(function(){
  var radioInput=1;
  hideElement();
  $('#find').show();
  $('#radioInput label input').on('change', function() {
   radioInput = $('input[name="optradio"]:checked', '#radioInput').val();
   hideElement();
   if(radioInput==1)  $('#find').show();
   if(radioInput==2) $('#add').show();
   if(radioInput==3) $('#contribute').show();
   if(radioInput==4) $('#comment').show();

 });


     $('.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(500);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(500);
    });


})


function hideElement(){
  $('#find,#add,#contribute,#comment').hide();
}
