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


$(".catalog .one").mouseenter(function() {
    $(".catalog .one").css(
        {
            "transition" : "all 1s ease-in-out",
            "background-size" : "110%"
       });
});

$(".catalog .one").mouseleave(function() {
    $(".catalog .one").css(
        {
            "transition" : "all 1s ease-in-out",
            "background-size" : "100%"
       });
});

$(".catalog .two").mouseenter(function() {
    $(".catalog .two").css(
        {
            "transition" : "all 1s ease-in-out",
            "background-size" : "110%"
       });
});

$(".catalog .two").mouseleave(function() {
    $(".catalog .two").css(
        {
            "transition" : "all 1s ease-in-out",
            "background-size" : "100%"
       });
});

$(".catalog .three").mouseenter(function() {
    $(".catalog .three").css(
        {
            "transition" : "all 1s ease-in-out",
            "background-size" : "110%"
       });
});

$(".catalog .three").mouseleave(function() {
    $(".catalog .three").css(
        {
            "transition" : "all 1s ease-in-out",
            "background-size" : "100%"
       });
});

$(".catalog .four").mouseenter(function() {
    $(".catalog .four").css(
        {
            "transition" : "all 1s ease-in-out",
            "background-size" : "110%"
       });
});

$(".catalog .four").mouseleave(function() {
    $(".catalog .four").css(
        {
            "transition" : "all 1s ease-in-out",
            "background-size" : "100%"
       });
});

$(".catalog .five").mouseenter(function() {
    $(".catalog .five").css(
        {
            "transition" : "all 1s ease-in-out",
            "background-size" : "110%"
       });
});

$(".catalog .five").mouseleave(function() {
    $(".catalog .five").css(
        {
            "transition" : "all 1s ease-in-out",
            "background-size" : "100%"
       });
});

$(".catalog .six").mouseenter(function() {
    $(".catalog .six").css(
        {
            "transition" : "all 1s ease-in-out",
            "background-size" : "110%"
       });
});

$(".catalog .six").mouseleave(function() {
    $(".catalog .six").css(
        {
            "transition" : "all 1s ease-in-out",
            "background-size" : "100%"
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