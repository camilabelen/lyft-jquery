$(document).ready(function(){
  $('.signUp, .phone, .verifyPhone, .name, .final').hide();
  $('.splash').show();
  splash(3000);
  //funcion pagina splash
  function splash(time){
    setTimeout(function(){
    $('.splash').fadeOut(); 
    }, time);
    $('.signUp').delay(3500).fadeIn();
  } 
  //sign up numero de telefono
  $('.signUp-button').click(function(){
    $('.phone').show();
    $('.signUp, .verifyPhone').hide();
  });
  //volver a pagina anterior
  $('.back').click(function(){
    $('.phone').hide();
    $('.signUp').show();
  });
  //boton deshabilitado por defecto 
  $('.phoneNumber').keyup(function(){
    if($(this).val().length == 10){
      $(".next-button").removeAttr("disabled");
      $(".next-button").removeClass("disabled");
    }else{
      $(".next-button").attr("disabled", true);
    }
  });
  //codigo
  function code() {
    var code = "";
    var str = "123456789";
    for (var i = 0; i < 3; i++) {
      code += str.charAt(Math.floor(Math.random() * str.length));
    }
      return code;
    }
  //boton next oculta la seccion y muestra la sgte 
  $('.next-button').click(function(){
    $('.phone').hide();
    $('.verifyPhone').show(function(){
      alert(code());
    });    
  });
  //volver a pagina anterior
  $('.backPhone').click(function(){
    $('.verifyPhone').hide();
    $('.phone').show();
  });
  //boton reenviar codigo
  $('.resend-button').click(function(){
    alert(code());
  });
  //boton next de la seccion de codigo/verifyPhone
  $('.next2').click(function(){
    $('.verifyPhone').hide();
    $('.name').show();
  });
  //deshabilitar boton next
  $('.inputCode').keyup(function(){
    if($(this).val().length == 3){
      $(".next2").removeAttr("disabled");
      $(".next2").removeClass("disabled");
    }else{
      $(".next2").attr("disabled", true);
    }
  });
  //seccion de nombre y correo
  //boton para volver a seccion anterior 
  $('.backVerify').click(function(){
    $('.name').hide();
    $('.verifyPhone').show();
  });  
  //habilitar el boton si y solo si todas las condiciones se cumplen
  /*
   $('.').(function(){
    if($('.nameInput, .emailInput').val().length !== '' && $('.check').prop('checked')){
      $('.next-button').Attr('disabled',true)
    }else{
      $('.next-button').removeAttr('disabled'); //desabilitar boton);
    };
  });
  */
  //vista siguiente-final
  $('.next3').click(function(){
    $('.name').hide();
    $('.final').show();
  });
  //limpiar inputs
  $('input[type="number"]').focus(
    function(){
        $(this).val('');
    });
});

 



/*
 $('.phoneNumber').keyup(function(){
    var value = $('.phoneNumber').val();
    if(value.size() != 10 || value.size() = ''){
      $('.next-button').addClass('disabled'); //desabilitar boton
    } 
    if(value.size() == 10){
      $('.next-button').removeClass('disabled');
    };
  });

    $(".phoneNumber").keyup(function(){
    if($(this).val().length == 10){
      $(".next-button").removeAttr("disabled");
    }else{
      $(".next-button").attr("disabled", true);
    }
  });
*/


