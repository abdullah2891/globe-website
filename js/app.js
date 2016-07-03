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

})


function hideElement(){
  $('#find,#add,#contribute,#comment').hide();
}
