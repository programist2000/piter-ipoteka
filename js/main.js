
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

  //-------- Active Sticky Js ----------//
  $(".default-header").sticky({topSpacing:0});


     if(document.getElementById("default-select")){
          $('select').niceSelect();
    };

    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    $(".form-telephone").mask("+7 (999) 999-9999");








$("#reviewsForm").submit(function(event){
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        reviewsFormError();
        reviewsSubmitMSG(false, "Заполните необходимые поля!");
    } else {
        // everything looks good!
        event.preventDefault();
        reviewsSubmitForm();
    }
});

 function reviewsSubmitForm(){
    // Initiate Variables With Form Content
    var reviewsName = $("#reviewsName").val();
    var reviewsEmail = $("#reviewsEmail").val();
    var reviewsPhone = $("#reviewsPhone").val();
    var reviewsMessage = $("#reviewsMessage").val();
 
    $.ajax({
        type: "POST",
      url: "sendreview.php",
      data: "reviewsName=" + reviewsName + "&reviewsEmail=" + reviewsEmail + "&reviewsPhone=" + reviewsPhone + "&reviewsMessage=" + reviewsMessage,
      success : function(reviewsText){
          if (reviewsText == "reviewsSuccess"){
              reviewsFormSuccess();
          } else {
              reviewsFormError();
              reviewsSubmitMSG(false,reviewsText);
          }
      }
    });
    }

function reviewsFormSuccess(){
    $("#reviewsForm")[0].reset();
    reviewsSubmitMSG(true, "Спасибо! Ваш отзыв отправлен.")
}

function reviewsFormError(){
    $("#reviewsForm").removeClass().addClass('flash animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function reviewsSubmitMSG(reviewsValid, reviewsMsg){
        var reviewsMsgClasses;
    if(reviewsValid){
        reviewsMsgClasses = "flash animated text-success";
    } else {
        reviewsMsgClasses = "text-danger";
    }
    $("#msgSubmittt").removeClass().addClass(reviewsMsgClasses).text(reviewsMsg);
}

























$("#contactsForm").submit(function(event){
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Заполните необходимые поля!");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});

 function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#message").val();
 
    $.ajax({
        type: "POST",
      url: "send.php",
      data: "name=" + name + "&email=" + email + "&phone=" + phone + "&message=" + message,
      success : function(text){
          if (text == "success"){
              formSuccess();
          } else {
              formError();
              submitMSG(false,text);
          }
      }
    });
    }

function formSuccess(){
    $("#contactsForm")[0].reset();
    submitMSG(true, "Сообщение отправлено!")
}

function formError(){
    $("#contactsForm").removeClass().addClass('flash animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
        var msgClasses;
    if(valid){
        msgClasses = "flash animated text-success";
    } else {
        msgClasses = "text-danger";
    }
    $("#msgSubmitt").removeClass().addClass(msgClasses).text(msg);
}








    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('.keys').parallax({imageSrc: './img/keys.jpg'});

    $('.answers-area').parallax({imageSrc: './img/answers.jpg'});




    $('.active-works-carousel').owlCarousel({
        items:1,
        loop:true,
        margin: 100,
        dots: true,
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            }
        }
    });

    $('.active-gallery').owlCarousel({
        items:1,
        loop:true,
        dots: true,
        autoplay:true,
        nav:true,
        navText: ["<span class='lnr lnr-arrow-up'></span>",
        "<span class='lnr lnr-arrow-down'></span>"],        
            responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            900: {
                items: 6,
            }

        }
    });


$('.active-blog-slider').owlCarousel({
        loop: true,
        dots: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
      })


    // Select all links with hashes
    $('.navbar-nav a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .on('click',function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top-50
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
    });







 });
