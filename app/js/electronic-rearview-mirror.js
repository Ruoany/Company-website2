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


$(".content .container .middle .one .inside").mouseenter(function(){
      $(".content .container .middle .one .inside").css(
          {
              "background" : "#007bff",
              "color" : "#fff"
          });
          $(".content .container .middle .one .inside p").css(
            {
                "color" : "#fff"
            });
      $(".content .container .middle .two .inside").css(
          {
              "background" : "#fff",
              "color" : "#000"
          });
      $(".content .container .middle .three .inside").css(
            {
                "background" : "#fff",
                "color" : "#000"
            });    
        $(".content .container .middle .four .inside").css(
            {
                "background" : "#fff",
                "color" : "#000"  
            });  
      $(".content .container .middle-content p:nth-child(1)").text("（一）技術水準超前")  
      $(".content .container .middle-content p:nth-child(2)").text("視頻成像採用3D流媒體數字技術以及車規級晶片，採集、處理、成像流暢，給駕駛員提供強大的既視感，車距真實,顯示準確，並可配合雷達聲像報警。")  
});

$(".content .container .middle .one .inside").mouseleave(function(){
    $(".content .container .middle .one .inside").css(
        {
            "background" : "#007bff",
            "color" : "#fff"
        });
    $(".content .container .middle .two .inside").css(
        {
            "background" : "#fff",
            "color" : "#000"
        });
    $(".content .container .middle .three .inside").css(
          {
              "background" : "#fff",
              "color" : "#000"
          });    
      $(".content .container .middle .four .inside").css(
          {
              "background" : "#fff",
              "color" : "#000"  
          });  
    $(".content .container .middle-content p:nth-child(1)").text("（一）技術水準超前")  
    $(".content .container .middle-content p:nth-child(2)").text("視頻成像採用3D流媒體數字技術以及車規級晶片，採集、處理、成像流暢，給駕駛員提供強大的既視感，車距真實,顯示準確，並可配合雷達聲像報警。")  
});

$(".content .container .middle .two .inside").mouseenter(function(){
    $(".content .container .middle .two .inside").css(
        {
            "background" : "#007bff",
            "color" : "#fff"
        });
    $(".content .container .middle .one .inside").css(
        {
            "background" : "#fff",
        });
    $(".content .container .middle .one .inside p").css(
        {
            "color" : "#000",
        });
    $(".content .container .middle .three .inside").css(
          {
              "background" : "#fff",
              "color" : "#000"
          });    
      $(".content .container .middle .four .inside").css(
          {
              "background" : "#fff",
              "color" : "#000"  
          });  
    $(".content .container .middle-content p:nth-child(1)").text("（二）最大限度提高安全性的設計理念")  
    $(".content .container .middle-content p:nth-child(2)").text("圖像處理模組與顯示幕幕分體設計，大大減少主顯示幕厚度，美觀大方，便於安裝，最大限度減少佔用駕駛員視野範圍，提高安全性。同時分體設計便於螢幕散熱，延長使用壽命，並且方便設備維護或更換。")  
});

$(".content .container .middle .two .inside").mouseleave(function(){
  $(".content .container .middle .two .inside").css(
      {
          "background" : "#007bff",
          "color" : "#fff"
      });
  $(".content .container .middle .one .inside").css(
      {
          "background" : "#fff",
          "color" : "#000"
      });
      $(".content .container .middle .one .inside p").css(
        {
            "color" : "#000",
        });
  $(".content .container .middle .three .inside").css(
        {
            "background" : "#fff",
            "color" : "#000"
        });    
    $(".content .container .middle .four .inside").css(
        {
            "background" : "#fff",
            "color" : "#000"  
        });  
  $(".content .container .middle-content p:nth-child(1)").text("（二）最大限度提高安全性的設計理念")  
  $(".content .container .middle-content p:nth-child(2)").text("圖像處理模組與顯示幕幕分體設計，大大減少主顯示幕厚度，美觀大方，便於安裝，最大限度減少佔用駕駛員視野範圍，提高安全性。同時分體設計便於螢幕散熱，延長使用壽命，並且方便設備維護或更換。")  
});


$(".content .container .middle .three .inside").mouseenter(function(){
    $(".content .container .middle .three .inside").css(
        {
            "background" : "#007bff",
            "color" : "#fff"
        });
    $(".content .container .middle .one .inside").css(
        {
            "background" : "#fff",
            "color" : "#000"
        });
        $(".content .container .middle .one .inside p").css(
            {
                "color" : "#000",
            });
    $(".content .container .middle .two .inside").css(
          {
              "background" : "#fff",
              "color" : "#000"
          });    
      $(".content .container .middle .four .inside").css(
          {
              "background" : "#fff",
              "color" : "#000"  
          });  
    $(".content .container .middle-content p:nth-child(1)").text("（三）貨真價實的元器件投入")  
    $(".content .container .middle-content p:nth-child(2)").text("6路攝像頭均採用車規級8玻魚眼鏡頭，進光量高的同時配備強光抑止、190度大廣角兼備扭曲修正，夜間、陰雨、濃霧依舊清晰；並採用同軸無損數字傳輸線，信號穩定抗干擾，傳輸速度相當於200M寬頻。")  
});

$(".content .container .middle .three .inside").mouseleave(function(){
  $(".content .container .middle .three .inside").css(
      {
          "background" : "#007bff",
          "color" : "#fff"
      });
  $(".content .container .middle .one .inside").css(
      {
          "background" : "#fff",
          "color" : "#000"
      });
      $(".content .container .middle .one .inside p").css(
        {
            "color" : "#000",
        });
  $(".content .container .middle .two .inside").css(
        {
            "background" : "#fff",
            "color" : "#000"
        });    
    $(".content .container .middle .four .inside").css(
        {
            "background" : "#fff",
            "color" : "#000"  
        });  
  $(".content .container .middle-content p:nth-child(1)").text("（三）貨真價實的元器件投入")  
  $(".content .container .middle-content p:nth-child(2)").text("6路攝像頭均採用車規級8玻魚眼鏡頭，進光量高的同時配備強光抑止、190度大廣角兼備扭曲修正，夜間、陰雨、濃霧依舊清晰；並採用同軸無損數字傳輸線，信號穩定抗干擾，傳輸速度相當於200M寬頻。")  
});

$(".content .container .middle .four .inside").mouseenter(function(){
    $(".content .container .middle .four .inside").css(
        {
            "background" : "#007bff",
            "color" : "#fff"
        });
    $(".content .container .middle .one .inside").css(
        {
            "background" : "#fff",
            "color" : "#000"
        });
        $(".content .container .middle .one .inside p").css(
            {
                "color" : "#000",
            });
    $(".content .container .middle .two .inside").css(
          {
              "background" : "#fff",
              "color" : "#000"
          });    
      $(".content .container .middle .three .inside").css(
          {
              "background" : "#fff",
              "color" : "#000"  
          });  
    $(".content .container .middle-content p:nth-child(1)").text("（四）超高的性價比")  
    $(".content .container .middle-content p:nth-child(2)").text("電子後視鏡採用雙12.3寸液晶屏設計，其功能包含了常規電子後視鏡圖像內容且兼備了360環視系統的功能，可完全消滅車輛盲區，配備強大售後服務和超長質保，同時用戶維護入口集中。")  
});

$(".content .container .middle .four .inside").mouseleave(function(){
  $(".content .container .middle .four .inside").css(
      {
          "background" : "#007bff",
          "color" : "#fff"
      });
  $(".content .container .middle .one .inside").css(
      {
          "background" : "#fff",
          "color" : "#000"
      });
      $(".content .container .middle .one .inside p").css(
        {
            "color" : "#000",
        });
  $(".content .container .middle .two .inside").css(
        {
            "background" : "#fff",
            "color" : "#000"
        });    
    $(".content .container .middle .three .inside").css(
        {
            "background" : "#fff",
            "color" : "#000"  
        });  
  $(".content .container .middle-content p:nth-child(1)").text("（四）超高的性價比")  
  $(".content .container .middle-content p:nth-child(2)").text("電子後視鏡採用雙12.3寸液晶屏設計，其功能包含了常規電子後視鏡圖像內容且兼備了360環視系統的功能，可完全消滅車輛盲區，配備強大售後服務和超長質保，同時用戶維護入口集中。")  
});


$(".content .container .middle-2 .one").mouseenter(function(){
      $(".content .container .middle-2 .one").css(
          {
              "background" : "#007bff",
          });
          $(".content .container .middle-2 .one p").css(
            {
                "color" : "#fff",
            });

           $(".content .container .middle-2 .two").css(
          {
              "background" : "#fff",
          });
          $(".content .container .middle-2 .two p").css(
            {
                "color" : "#007bff",
            });
             $(".content .container .middle-2 .three").css(
          {
              "background" : "#fff",
          });
          $(".content .container .middle-2 .three p").css(
            {
                "color" : "#007bff",
            });
         $(".content .container .middle-2 .four").css(
          {
              "background" : "#fff",
          });
          $(".content .container .middle-2 .four p").css(
            {
                "color" : "#007bff",
            });
      $(".content .container .middle-2 .five").css(
          {
              "background" : "#fff",
          });
          $(".content .container .middle-2 .five p").css(
            {
                "color" : "#007bff",
            });
      $(".content .container .middle-2 img").attr("src","img/electronic-rearview-mirror-three.png")
    
      
});

$(".content .container .middle-2 .one").mouseleave(function(){
    $(".content .container .middle-2 .one").css(
        {
            "background" : "#007bff",
        });
        $(".content .container .middle-2 .one p").css(
          {
              "color" : "#fff",
          });

         $(".content .container .middle-2 .two").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .two p").css(
          {
              "color" : "#007bff",
          });
           $(".content .container .middle-2 .three").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .three p").css(
          {
              "color" : "#007bff",
          });
       $(".content .container .middle-2 .four").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .four p").css(
          {
              "color" : "#007bff",
          });
    $(".content .container .middle-2 .five").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .five p").css(
          {
              "color" : "#007bff",
          });
    $(".content .container .middle-2 img").attr("src","img/electronic-rearview-mirror-three.png")
  
    
});



$(".content .container .middle-2 .two").mouseenter(function(){
    $(".content .container .middle-2 .two").css(
        {
            "background" : "#007bff",
        });
        $(".content .container .middle-2 .two p").css(
          {
              "color" : "#fff",
          });

         $(".content .container .middle-2 .one").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .one p").css(
          {
              "color" : "#007bff",
          });
           $(".content .container .middle-2 .three").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .three p").css(
          {
              "color" : "#007bff",
          });
       $(".content .container .middle-2 .four").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .four p").css(
          {
              "color" : "#007bff",
          });
    $(".content .container .middle-2 .five").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .five p").css(
          {
              "color" : "#007bff",
          });
    $(".content .container .middle-2 img").attr("src","img/electronic-rearview-mirror-four.png")
  
    
});


$(".content .container .middle-2 .two").mouseleave(function(){
    $(".content .container .middle-2 .two").css(
        {
            "background" : "#007bff",
        });
        $(".content .container .middle-2 .two p").css(
          {
              "color" : "#fff",
          });

         $(".content .container .middle-2 .one").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .one p").css(
          {
              "color" : "#007bff",
          });
           $(".content .container .middle-2 .three").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .three p").css(
          {
              "color" : "#007bff",
          });
       $(".content .container .middle-2 .four").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .four p").css(
          {
              "color" : "#007bff",
          });
    $(".content .container .middle-2 .five").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .five p").css(
          {
              "color" : "#007bff",
          });
    $(".content .container .middle-2 img").attr("src","img/electronic-rearview-mirror-four.png")
  
    
});

$(".content .container .middle-2 .three").mouseenter(function(){
    $(".content .container .middle-2 .three").css(
        {
            "background" : "#007bff",
        });
        $(".content .container .middle-2 .three p").css(
          {
              "color" : "#fff",
          });

         $(".content .container .middle-2 .one").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .one p").css(
          {
              "color" : "#007bff",
          });
           $(".content .container .middle-2 .two").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .two p").css(
          {
              "color" : "#007bff",
          });
       $(".content .container .middle-2 .four").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .four p").css(
          {
              "color" : "#007bff",
          });
    $(".content .container .middle-2 .five").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .five p").css(
          {
              "color" : "#007bff",
          });
    $(".content .container .middle-2 img").attr("src","img/electronic-rearview-mirror-five.png")
  
    
});


$(".content .container .middle-2 .three").mouseleave(function(){
    $(".content .container .middle-2 .three").css(
        {
            "background" : "#007bff",
        });
        $(".content .container .middle-2 .three p").css(
          {
              "color" : "#fff",
          });

         $(".content .container .middle-2 .one").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .one p").css(
          {
              "color" : "#007bff",
          });
           $(".content .container .middle-2 .two").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .two p").css(
          {
              "color" : "#007bff",
          });
       $(".content .container .middle-2 .four").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .four p").css(
          {
              "color" : "#007bff",
          });
    $(".content .container .middle-2 .five").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .five p").css(
          {
              "color" : "#007bff",
          });
    $(".content .container .middle-2 img").attr("src","img/electronic-rearview-mirror-five.png")
  
    
});

$(".content .container .middle-2 .four").mouseenter(function(){
    $(".content .container .middle-2 .four").css(
        {
            "background" : "#007bff",
        });
        $(".content .container .middle-2 .four p").css(
          {
              "color" : "#fff",
          });

         $(".content .container .middle-2 .one").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .one p").css(
          {
              "color" : "#007bff",
          });
           $(".content .container .middle-2 .two").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .two p").css(
          {
              "color" : "#007bff",
          });
       $(".content .container .middle-2 .three").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .three p").css(
          {
              "color" : "#007bff",
          });
    $(".content .container .middle-2 .five").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .five p").css(
          {
              "color" : "#007bff",
          });
    $(".content .container .middle-2 img").attr("src","img/electronic-rearview-mirror-six.png")
  
    
});


$(".content .container .middle-2 .four").mouseleave(function(){
    $(".content .container .middle-2 .four").css(
        {
            "background" : "#007bff",
        });
        $(".content .container .middle-2 .four p").css(
          {
              "color" : "#fff",
          });

         $(".content .container .middle-2 .one").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .one p").css(
          {
              "color" : "#007bff",
          });
           $(".content .container .middle-2 .two").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .two p").css(
          {
              "color" : "#007bff",
          });
       $(".content .container .middle-2 .three").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .three p").css(
          {
              "color" : "#007bff",
          });
    $(".content .container .middle-2 .five").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .five p").css(
          {
              "color" : "#007bff",
          });
    $(".content .container .middle-2 img").attr("src","img/electronic-rearview-mirror-six.png")
  
    
});

$(".content .container .middle-2 .five").mouseenter(function(){
    $(".content .container .middle-2 .five").css(
        {
            "background" : "#007bff",
        });
        $(".content .container .middle-2 .five p").css(
          {
              "color" : "#fff",
          });

         $(".content .container .middle-2 .one").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .one p").css(
          {
              "color" : "#007bff",
          });
           $(".content .container .middle-2 .two").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .two p").css(
          {
              "color" : "#007bff",
          });
       $(".content .container .middle-2 .three").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .three p").css(
          {
              "color" : "#007bff",
          });
    $(".content .container .middle-2 .four").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .four p").css(
          {
              "color" : "#007bff",
          });
    $(".content .container .middle-2 img").attr("src","img/electronic-rearview-mirror-seven.png")
  
    
});


$(".content .container .middle-2 .five").mouseleave(function(){
    $(".content .container .middle-2 .five").css(
        {
            "background" : "#007bff",
        });
        $(".content .container .middle-2 .five p").css(
          {
              "color" : "#fff",
          });

         $(".content .container .middle-2 .one").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .one p").css(
          {
              "color" : "#007bff",
          });
           $(".content .container .middle-2 .two").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .two p").css(
          {
              "color" : "#007bff",
          });
       $(".content .container .middle-2 .three").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .three p").css(
          {
              "color" : "#007bff",
          });
    $(".content .container .middle-2 .four").css(
        {
            "background" : "#fff",
        });
        $(".content .container .middle-2 .four p").css(
          {
              "color" : "#007bff",
          });
    $(".content .container .middle-2 img").attr("src","img/electronic-rearview-mirror-seven.png")
  
    
});


$(".content .container .middle-3 .text p:nth-child(1)").mouseenter(function(){
     $(".content .container .middle-3 .text p:nth-child(1)").css(
         {
             "border-bottom" : "2px solid #ff0000"
         });
     $(".content .container .middle-3 .img img:nth-child(3)").css(
         {
            "transition" : "all 1s ease-in-out",
            "transform" : "scale(1.1)"
         });
});


$(".content .container .middle-3 .text p:nth-child(1)").mouseleave(function(){
    $(".content .container .middle-3 .text p:nth-child(1)").css(
        {
            "border-bottom" : "none"
        });
    $(".content .container .middle-3 .img img:nth-child(3)").css(
        {
           "transition" : "all 1s ease-in-out",
           "transform" : "scale(1)"
        });
});


$(".content .container .middle-3 .text p:nth-child(2)").mouseenter(function(){
    $(".content .container .middle-3 .text p:nth-child(2)").css(
        {
            "border-bottom" : "2px solid #ffa500"
        });
    $(".content .container .middle-3 .img img:nth-child(2)").css(
        {
           "transition" : "all 1s ease-in-out",
           "transform" : "scale(1.1)"
        });
});


$(".content .container .middle-3 .text p:nth-child(2)").mouseleave(function(){
   $(".content .container .middle-3 .text p:nth-child(2)").css(
       {
           "border-bottom" : "none"
       });
   $(".content .container .middle-3 .img img:nth-child(2)").css(
       {
          "transition" : "all 1s ease-in-out",
          "transform" : "scale(1)"
       });
});

$(".content .container .middle-3 .text p:nth-child(3)").mouseenter(function(){
    $(".content .container .middle-3 .text p:nth-child(3)").css(
        {
            "border-bottom" : "2px solid #008000"
        });
    $(".content .container .middle-3 .img img:nth-child(1)").css(
        {
           "transition" : "all 1s ease-in-out",
           "transform" : "scale(1.1)"
        });
});


$(".content .container .middle-3 .text p:nth-child(3)").mouseleave(function(){
   $(".content .container .middle-3 .text p:nth-child(3)").css(
       {
           "border-bottom" : "none"
       });
   $(".content .container .middle-3 .img img:nth-child(1)").css(
       {
          "transition" : "all 1s ease-in-out",
          "transform" : "scale(1)"
       });
});

$(".content .container .middle-3 .text p:nth-child(4)").mouseenter(function(){
    $(".content .container .middle-3 .text p:nth-child(4)").css(
        {
            "border-bottom" : "2px solid #efef00"
        });
    $(".content .container .middle-3 .img img:nth-child(1)").css(
        {
           "transition" : "all 1s ease-in-out",
           "transform" : "scale(1.1)"
        });
        $(".content .container .middle-3 .img img:nth-child(2)").css(
        {
           "transition" : "all 1s ease-in-out",
           "transform" : "scale(1.1)"
        });
        $(".content .container .middle-3 .img img:nth-child(3)").css(
        {
           "transition" : "all 1s ease-in-out",
           "transform" : "scale(1.1)"
        });
});


$(".content .container .middle-3 .text p:nth-child(4)").mouseleave(function(){
   $(".content .container .middle-3 .text p:nth-child(4)").css(
       {
           "border-bottom" : "none"
       });
   $(".content .container .middle-3 .img img:nth-child(1)").css(
       {
          "transition" : "all 1s ease-in-out",
          "transform" : "scale(1)"
       });
    $(".content .container .middle-3 .img img:nth-child(2)").css(
       {
          "transition" : "all 1s ease-in-out",
          "transform" : "scale(1)"
       });
    $(".content .container .middle-3 .img img:nth-child(3)").css(
       {
          "transition" : "all 1s ease-in-out",
          "transform" : "scale(1)"
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