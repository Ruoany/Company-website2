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



$(".content .container .top .one img").mouseenter(function(){
     $(".content .container .top .one img").attr("src","img/digital-map-four.png")
});

$(".content .container .top .one img").mouseleave(function(){
    $(".content .container .top .one img").attr("src","img/digital-map-one.png")
});

$(".content .container .top .two img").mouseenter(function(){
    $(".content .container .top .two img").attr("src","img/digital-map-five.png")
});

$(".content .container .top .two img").mouseleave(function(){
   $(".content .container .top .two img").attr("src","img/digital-map-two.png")
});

$(".content .container .top .three img").mouseenter(function(){
    $(".content .container .top .three img").attr("src","img/digital-map-six.png")
});

$(".content .container .top .three img").mouseleave(function(){
   $(".content .container .top .three img").attr("src","img/digital-map-three.png")
});



$(".content .container .center .one").hover(function(){
     $(".content .container .center .car1").css(
         {
            "animation-play-state" : "running"
         });
     $(" .content .container .center .one-img img:nth-child(1)").css(
         {
            "animation-play-state" : "running"
         });
         $(" .content .container .center .one-img img:nth-child(2)").css(
         {
            "animation-play-state" : "running"
         });
         $(" .content .container .center .one-img img:nth-child(3)").css(
         {
            "animation-play-state" : "running"
         });

});

$(".content .container .center .two").hover(function(){
    $(".content .container .center .car2").css(
        {
           "animation-play-state" : "running"
        });
    $(" .content .container .center .two-img img:nth-child(1)").css(
        {
           "animation-play-state" : "running"
        });
        $(" .content .container .center .two-img img:nth-child(2)").css(
        {
           "animation-play-state" : "running"
        });
        $(" .content .container .center .two-img img:nth-child(3)").css(
        {
           "animation-play-state" : "running"
        });
});

$(".content .container .center .three").hover(function(){
    $(".content .container .center .car3").css(
        {
           "animation-play-state" : "running"
        });
    $(" .content .container .center .three-img img:nth-child(1)").css(
        {
           "animation-play-state" : "running"
        });
        $(" .content .container .center .three-img img:nth-child(2)").css(
        {
           "animation-play-state" : "running"
        });
        $(" .content .container .center .three-img img:nth-child(3)").css(
        {
           "animation-play-state" : "running"
        });
});

$(".content .container .center .four").hover(function(){
    $(".content .container .center .car4").css(
        {
           "animation-play-state" : "running"
        });
    $(" .content .container .center .four-img img:nth-child(1)").css(
        {
           "animation-play-state" : "running"
        });
        $(" .content .container .center .four-img img:nth-child(2)").css(
        {
           "animation-play-state" : "running"
        });
        $(" .content .container .center .four-img img:nth-child(3)").css(
        {
           "animation-play-state" : "running"
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