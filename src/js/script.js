$(document).ready(function(){

    $('.modal__close').on('click', function() {
    $('.overlay, #thanks').fadeOut('slow');
    });    

    function validateForms(form){
        $(form).validate({
        rules: {
            phone: "required"
        },
        messages: {
            phone: "Пожалуйста, введите свой номер телефона"
        }
        });
    };
    
    validateForms('#consultation form');
    
    $('input[name=phone]').mask("+375 (29) 999-99-99");
    
    $('form').submit(function(e) {
            e.preventDefault();

            if(!$(this).valid()) {
                return;
            }
            
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                $('#consultation').fadeOut();
                $('.overlay, #thanks').fadeIn('slow');
    
                $('form').trigger('reset');
            });
            return false;
        });
 

})

// require('font-awesome/css/font-awesome.css');

// var container = document.getElementById('container');
// container.innerHTML = '<i class="fa fa-twitter"></i>';


import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
library.add(faCheck);

dom.watch();
