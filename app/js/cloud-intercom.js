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