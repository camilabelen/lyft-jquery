$(document).ready(function(){
  $('.signUp').hide();
  $('.splash').show();
  splash(3000);
  //funcion pagina splash
  function splash(time){
    setTimeout(function(){
    $('.splash').fadeOut(); 
    }, time);
    $('.signUp').delay(3500).fadeIn();
  }  
  
});

 
