$(document).ready(function(){
    $('.slider').slick({
        infinite: false,
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 1130,
              settings: {
                
                slidesToShow: 2
              }
            },
            {
              breakpoint: 800,
              settings: {
                
                slidesToShow: 1
              }
            }
          ]
       
    });
});


$(document).ready(function(){
  $('.burger_div').click(function(event){
      $('.burger_div,.burger_menu').toggleClass('active');
    

  });
});


var user_Input_first = document.querySelector(".user_input_first");
var user_input_second = document.querySelector(".user_input_second");
var user_input_third = document.querySelector(".user_input_third");
var user_input_fourth = document.querySelector(".user_input_fourth");

function show_star(selector_value,star_state){
  var user_star = document.querySelector(selector_value);
  if(star_state==0){
    user_star.style.display = 'inline';
  }else{
    user_star.style.display = 'none';
  }
}

function check_length(user_input_check,star_class){
 var user_input = document.querySelector(user_input_check);
 if(user_input.value.length>0){
  show_star(star_class,1);
 }

 else{
  show_star(star_class,0);
 }
}

 function check_function(event) {
 
   event.preventDefault();
   idFlight = event.target.id;
   if(idFlight=="name_input"){
    check_length(".user_input_first",".span_first");
    
   }
   else if(idFlight=="phone_input"){
    check_length(".user_input_second",".span_second");
   }
   else if(idFlight=="date_input"){
    check_length(".user_input_third",".span_third");

   }
   else if(idFlight=="time_input"){
    check_length(".user_input_fourth",".span_fourth");

   }
};

function doSomething(){
  alert(user_Input_first.value.length);
}

button_id.onclick = doSomething;

function star_hide_event(event){
  event.preventDefault();
   idFlight = event.target.id;
   if(idFlight=="name_input"){
   
    star_hide('.span_first');
   }
   else if(idFlight=="phone_input"){
    star_hide('.span_second');
   }
   else if(idFlight=="date_input"){
    star_hide('.span_third');
   }
   else if(idFlight=="time_input"){
    star_hide('.span_fourth');
   }
}

function star_hide(star){
  var user_star = document.querySelector(star);
  user_star.style.display = 'none';
}

name_input.onblur = check_function;
phone_input.onblur = check_function;
date_input.onblur = check_function;
time_input.onblur = check_function;


name_input.onfocus = star_hide_event;
phone_input.onfocus = star_hide_event;
date_input.onfocus = star_hide_event;
time_input.onfocus = star_hide_event;
//alert(user_Input_first.value.length);

