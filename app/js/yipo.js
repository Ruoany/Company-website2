$(function(){
    $(window).resize(function() {
        var ww = $(window).width();
        if( ww < 990 ){
            $(".hr-navbar").css(
                 {
                     "text-align" : "center",
                     "font-size" : "8px"
                 });
        }
     });
});


$(".header .top").mouseenter(function() {
    $(".header .top").css(
        {
            "transition" : "all 1s ease-in-out",
            "background-size" : "110%"
       });
});

$(".header .top").mouseleave(function() {
    $(".header .top").css(
        {
            "transition" : "all 1s ease-in-out",
            "background-size" : "100%"
       });
});


$(" .content .container .bottom .top .one").mouseenter(function() {
    $(" .content .container .bottom .top .one").css(
        {
            "background" : "#006cff"
        });
   $(" .content .container .bottom .top .one p").css(
       {
           "color" : "#fff"
       });
});

$(" .content .container .bottom .top .one").mouseleave(function() {
   $(" .content .container .bottom .top .one").css(
       {
           "background" : "#fff"
       });
  $(" .content .container .bottom .top .one p").css(
      {
          "color" : "#006cff"
      });
});


$(" .content .container .bottom .top .two").mouseenter(function() {
   $(" .content .container .bottom .top .two").css(
       {
           "background" : "#006cff"
       });
  $(" .content .container .bottom .top .two p").css(
      {
          "color" : "#fff"
      });
});

$(" .content .container .bottom .top .two").mouseleave(function() {
  $(" .content .container .bottom .top .two").css(
      {
          "background" : "#fff"
      });
 $(" .content .container .bottom .top .two p").css(
     {
         "color" : "#006cff"
     });
});


$(" .content .container .bottom .top .three").mouseenter(function() {
   $(" .content .container .bottom .top .three").css(
       {
           "background" : "#006cff"
       });
  $(" .content .container .bottom .top .three p").css(
      {
          "color" : "#fff"
      });
});

$(" .content .container .bottom .top .three").mouseleave(function() {
  $(" .content .container .bottom .top .three").css(
      {
          "background" : "#fff"
      });
 $(" .content .container .bottom .top .three p").css(
     {
         "color" : "#006cff"
     });
});



$("#bottom .bottom ul li span").mouseenter(function(){
    $(this).css(
        {
           "color" : "#007bff",
           "border-bottom" : "2px solid #007bff",
           "cursor" : "default"
    });

    
});

$("#bottom .bottom ul li span").mouseleave(function(){
  $(this).css(
      {
         "color" : "#999",
         "border-bottom" : "none"
  });
});