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

$(".content .container .position .item1").mouseenter(function(){
    $(".content .container .position .item1").addClass("current1");
}); 
$(".content .container .position .item1").mouseleave(function(){
    $(".content .container .position .item1").removeClass("current1");
}); 

$(".content .container .position .item2").mouseenter(function(){
    $(".content .container .position .item2").addClass("current2");
}); 
$(".content .container .position .item2").mouseleave(function(){
    $(".content .container .position .item2").removeClass("current2");
}); 

$(".content .container .position .item3").mouseenter(function(){
    $(".content .container .position .item3").addClass("current3");
}); 
$(".content .container .position .item3").mouseleave(function(){
    $(".content .container .position .item3").removeClass("current3");
}); 

$(".content .container .position .item4").mouseenter(function(){
    $(".content .container .position .item4").addClass("current4");
}); 
$(".content .container .position .item4").mouseleave(function(){
    $(".content .container .position .item4").removeClass("current4");
}); 


$(".content .container .position .item5").mouseenter(function(){
    $(".content .container .position .item5").addClass("current5");
}); 
$(".content .container .position .item5").mouseleave(function(){
    $(".content .container .position .item5").removeClass("current5");
}); 

$(".content .container .position .item6").mouseenter(function(){
    $(".content .container .position .item6").addClass("current6");
}); 
$(".content .container .position .item6").mouseleave(function(){
    $(".content .container .position .item6").removeClass("current6");
}); 


$(".content .container .position .item7").mouseenter(function(){
    $(".content .container .position .item7").addClass("current7");
}); 
$(".content .container .position .item7").mouseleave(function(){
    $(".content .container .position .item7").removeClass("current7");
}); 

$(".content .container .position .item8").mouseenter(function(){
    $(".content .container .position .item8").addClass("current8");
}); 
$(".content .container .position .item8").mouseleave(function(){
    $(".content .container .position .item8").removeClass("current8");
}); 

$(".content .container .position .item9").mouseenter(function(){
    $(".content .container .position .item9").addClass("current9");
}); 
$(".content .container .position .item9").mouseleave(function(){
    $(".content .container .position .item9").removeClass("current9");
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