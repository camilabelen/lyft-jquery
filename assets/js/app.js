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
  //
  function code() {
    var code = "";
    var str = "123456789";
    for (var i = 0; i < 3; i++) {
      code += str.charAt(Math.floor(Math.random() * str.length));
    }
      return code;
    }
  alert(code());  
});

 



/*
 <div class="input-group-btn country">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">Country <span class="caret"></span></button>
            <ul class="dropdown-menu">
              <li><a href="#"><img src="assets/images/mexico_bandera.jpg" alt="bandera_Mexico"></a></li>
              <li><a href="#"><img src="assets/images/peru_bandera.png" alt="bandera_Perú"></a></li>
              <li><a href="#"><img src="assets/images/chile_bandera.png" alt="bandera_Chile"></a></li>
              <li><a href="#"><img src="assets/images/usa_bandera.png" alt="usa_bandera"></a></li>
            </ul>
          </div><!-- /btn-group -->*/