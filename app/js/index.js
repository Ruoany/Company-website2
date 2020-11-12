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

$("#bluetooth .container .bluetooth-top-right .two .head").click(function() {
          $("#bluetooth .container .bluetooth-top-right .two .footer").css("opacity","0.7");
});

$("#bluetooth .container .bluetooth-top-right .three .head").click(function() {
    $("#bluetooth .container .bluetooth-top-right .three .footer").css("opacity","0.7");
});

$("#bluetooth .container .bluetooth-bottom .one").mouseenter(function (){
        $("#bluetooth .container .bluetooth-bottom .one").css("opacity","0");

        $("#bluetooth .container .bluetooth-bottom .px-one-content .one-content").css("opacity","0.7");
        
           
});

$("#bluetooth .container .bluetooth-bottom .one").mouseleave(function (){
    $("#bluetooth .container .bluetooth-bottom .one").css("opacity","0.7");

    $("#bluetooth .container .bluetooth-bottom .px-one-content .one-content").css("opacity","0");
   
});

$("#bluetooth .container .bluetooth-bottom .two").mouseenter(function (){
    $("#bluetooth .container .bluetooth-bottom .two").css("opacity","0");

    $("#bluetooth .container .bluetooth-bottom .px-two-content .two-content").css("opacity","0.7");
    
       
});

$("#bluetooth .container .bluetooth-bottom .two").mouseleave(function (){
$("#bluetooth .container .bluetooth-bottom .two").css("opacity","0.7");

$("#bluetooth .container .bluetooth-bottom .px-two-content .two-content").css("opacity","0");

});


$("#bluetooth .container .bluetooth-bottom .three").mouseenter(function (){
    $("#bluetooth .container .bluetooth-bottom .three").css("opacity","0");

    $("#bluetooth .container .bluetooth-bottom .px-three-content .three-content").css("opacity","0.7");
    
       
});

$("#bluetooth .container .bluetooth-bottom .three").mouseleave(function (){
$("#bluetooth .container .bluetooth-bottom .three").css("opacity","0.7");

$("#bluetooth .container .bluetooth-bottom .px-three-content .three-content").css("opacity","0");

});

$("#bluetooth .container .bluetooth-bottom .four").mouseenter(function (){
    $("#bluetooth .container .bluetooth-bottom .four").css("opacity","0");

    $("#bluetooth .container .bluetooth-bottom .px-four-content .four-content").css("opacity","0.7");
    
       
});

$("#bluetooth .container .bluetooth-bottom .four").mouseleave(function (){
$("#bluetooth .container .bluetooth-bottom .four").css("opacity","0.7");

$("#bluetooth .container .bluetooth-bottom .px-four-content .four-content").css("opacity","0");

});

$(" #Wi_Fi_6 .container .right .one").mouseenter(function(){
     $(" #Wi_Fi_6 .container .right .one").css(
         {
             "background" : "#007bff",
             "color" : "#fff"
         });
    $(" #Wi_Fi_6 .container .right .one img").attr("src","img/wifi6-one-two.png");
});

$(" #Wi_Fi_6 .container .right .one").mouseleave(function(){
    $(" #Wi_Fi_6 .container .right .one").css(
        {
            "background" : "#fff",
            "color" : "#000"
        });
    $(" #Wi_Fi_6 .container .right .one img").attr("src","img/wifi6-one.png");
});

$(" #Wi_Fi_6 .container .right .two").mouseenter(function(){
    $(" #Wi_Fi_6 .container .right .two").css(
        {
            "background" : "#007bff",
            "color" : "#fff"
        });
   $(" #Wi_Fi_6 .container .right .two img").attr("src","img/wifi6-two-two.png");
});

$(" #Wi_Fi_6 .container .right .two").mouseleave(function(){
   $(" #Wi_Fi_6 .container .right .two").css(
       {
           "background" : "#fff",
           "color" : "#000"
       });
   $(" #Wi_Fi_6 .container .right .two img").attr("src","img/wifi6-two.png");
});


$(" #Wi_Fi_6 .container .right .three").mouseenter(function(){
    $(" #Wi_Fi_6 .container .right .three").css(
        {
            "background" : "#007bff",
            "color" : "#fff"
        });
   $(" #Wi_Fi_6 .container .right .three img").attr("src","img/wifi6-three-two.png");
});

$(" #Wi_Fi_6 .container .right .three").mouseleave(function(){
   $(" #Wi_Fi_6 .container .right .three").css(
       {
           "background" : "#fff",
           "color" : "#000"
       });
   $(" #Wi_Fi_6 .container .right .three img").attr("src","img/wifi6-three.png");
});

$(" #Wi_Fi_6 .container .right .four").mouseenter(function(){
    $(" #Wi_Fi_6 .container .right .four").css(
        {
            "background" : "#007bff",
            "color" : "#fff"
        });
   $(" #Wi_Fi_6 .container .right .four img").attr("src","img/wifi6-four-two.png");
});

$(" #Wi_Fi_6 .container .right .four").mouseleave(function(){
   $(" #Wi_Fi_6 .container .right .four").css(
       {
           "background" : "#fff",
           "color" : "#000"
       });
   $(" #Wi_Fi_6 .container .right .four img").attr("src","img/wifi6-four.png");
});

$("#sensor .container .top ul").mouseenter(function(){
    $("#sensor .container .top ul").css({
         "cursor" : "default"
    });   
    
});

$("#sensor .container .top ul .one").mouseenter(function(){
    $("#sensor .container .top ul .one").css(
        {
            "border-bottom" : "4px solid #007bff",
        });
    $("#sensor .container .top ul .two").css(
        {
            "border-bottom" : "none",
        });
    $("#sensor .container .top ul .three").css(
        {
             "border-bottom" : "none",
        });

         $("#sensor .container .bottom .left .one").css(
        {
            "pointer-events" : "auto" 
        });
        $("#sensor .container .bottom .left .two").css(
        {
            "pointer-events" : "auto" 
        });
        $("#sensor .container .bottom .left .three").css(
        {
            "pointer-events" : "auto" 
        });

    $("#sensor .container .bottom .left .one img").attr("src","img/sensor-one.png");
    $("#sensor .container .bottom .left .one span").text("室温管温传感器");

    $("#sensor .container .bottom .left .two img").css("opacity","1");
    $("#sensor .container .bottom .left .two span").css("opacity","1");

    $("#sensor .container .bottom .left .three img").css("opacity","1");
    $("#sensor .container .bottom .left .three span").css("opacity","1");
    
    
    $(" #sensor .container .bottom .right p span:nth-child(2)").text("室温管温传感器");
    $(" #sensor .container .bottom .right p:nth-child(2)").text("室温传感器用于测量室内和室外的环境温度，管温传感器用于测量蒸发器和冷凝器的管壁温度。室温传感器和管温传感器的形状不同，但温度特性基本一致。按温度特性划分，美的使用的室温管温传感器有二种类型:1.常数B值为4100K±3%，基准电阻为25℃对应电阻10KΩ±3%。在0℃和55℃对应电阻公差约为±7%;而0℃以下及55℃以上，对于不同的供应商，电阻公差会有一定的差别。温度越高，阻值越小;温度越低，阻值越大。离25℃越远，对应电阻公差范围越大。")
    $("#sensor .container .bottom .right p:nth-child(2)+span").css("margin-top","40px");
});

$("#sensor .container .top ul .one").mouseleave(function(){
    $("#sensor .container .top ul .one").css(
        {
            "border-bottom" : "4px solid #007bff",
        });
    $("#sensor .container .top ul .two").css(
        {
            "border-bottom" : "none",
        });
    $("#sensor .container .top ul .three").css(
        {
             "border-bottom" : "none",
        });
    $("#sensor .container .bottom .left .one img").attr("src","img/sensor-one.png");
    $("#sensor .container .bottom .left .one span").text("室温管温传感器");

    $("#sensor .container .bottom .left .two img").attr("src","img/sensor-two.png");
    $("#sensor .container .bottom .left .two span").text("排气温度传感器");

    $("#sensor .container .bottom .left .three img").attr("src","img/sensor-three.png");
    $("#sensor .container .bottom .left .three span").text("模块温度传感器");
    
    
    $(" #sensor .container .bottom .right p span:nth-child(2)").text("室温管温传感器");
    $(" #sensor .container .bottom .right p:nth-child(2)").text("室温传感器用于测量室内和室外的环境温度，管温传感器用于测量蒸发器和冷凝器的管壁温度。室温传感器和管温传感器的形状不同，但温度特性基本一致。按温度特性划分，美的使用的室温管温传感器有二种类型:1.常数B值为4100K±3%，基准电阻为25℃对应电阻10KΩ±3%。在0℃和55℃对应电阻公差约为±7%;而0℃以下及55℃以上，对于不同的供应商，电阻公差会有一定的差别。温度越高，阻值越小;温度越低，阻值越大。离25℃越远，对应电阻公差范围越大。")
    $("#sensor .container .bottom .right p:nth-child(2)+span").css("margin-top","40px");
});

$("#sensor .container .top ul .two").mouseenter(function(){
    $("#sensor .container .top ul .two").css(
        {
            "border-bottom" : "4px solid #007bff",
        });
    $("#sensor .container .top ul .one").css(
        {
            "border-bottom" : "none",
        });
    $("#sensor .container .top ul .three").css(
        {
             "border-bottom" : "none",
        });

    $("#sensor .container .bottom .left .one img").attr("src","img/Wireless temperature.png");
    $("#sensor .container .bottom .left .one span").text("无线温度");
    $("#sensor .container .bottom .left .one").css(
        {
            "pointer-events" : "none" 
        });

    $("#sensor .container .bottom .left .two").css(
        {
            "pointer-events" : "none" 
        });

    $("#sensor .container .bottom .left .two img").css(
        {
            "opacity" : "0",
        });
    $("#sensor .container .bottom .left .two span").css(
        {
            "opacity" : "0"
        });

        $("#sensor .container .bottom .left .three").css(
        {
            "pointer-events" : "none" 
        });
    $("#sensor .container .bottom .left .three img").css(
        {
             "opacity" : "0"
        });
    $("#sensor .container .bottom .left .three span").css(
        {
             "opacity" : "0"
        });
    $(" #sensor .container .bottom .right p span:nth-child(2)").text("无线温度");
    $(" #sensor .container .bottom .right p:nth-child(2)").text("无线温度传感器将控制对象的温度参数变成电信号,并对接收终端发送无线信号，对系统实行检测、调节和控制。可直接安装在一般工业热电阻、热电偶的接线盒内，与现场传感元件构成一体化结构。通常和无线中继、接收终端、通信串口、电子计算机等配套使用，这样不仅节省了补偿导线和电缆，而且减少了信号传递失真和干扰，从而获的了高精度的测量结果。 无线温度传感器广泛应用于化工、冶金、石油、电力、水处理、制药、食品等自动化行业。例如:高压电缆上的温度采集;水下等恶劣环境的温度采集;运动物体上的温度采集;不易连线通过的空间传输传感器数据;单纯为降低布线成本选用的数据采集方案;没有交流电源的工作场合的数据测量;便携式非固定场所数据测量。")
    $("#sensor .container .bottom .right p:nth-child(2)+span").css("margin-top","100px");
});

$("#sensor .container .top ul .two").mouseleave(function(){
    $("#sensor .container .top ul .two").css(
        {
            "border-bottom" : "4px solid #007bff",
        });
    $("#sensor .container .top ul .one").css(
        {
            "border-bottom" : "none",
        });
    $("#sensor .container .top ul .three").css(
        {
             "border-bottom" : "none",
        });

    $("#sensor .container .bottom .left .one img").attr("src","img/Wireless temperature.png")
    $("#sensor .container .bottom .left .one span").text("无线温度");
    
    // $("#sensor .container .bottom .left .one").css(
    //     {
    //         "pointer-events" : "auto" 
    //     });
    //     $("#sensor .container .bottom .left .two").css(
    //     {
    //         "pointer-events" : "auto" 
    //     });
    //     $("#sensor .container .bottom .left .three").css(
    //     {
    //         "pointer-events" : "auto" 
    //     });

    $("#sensor .container .bottom .left .two img").css(
        {
            "opacity" : "0"
        });
    $("#sensor .container .bottom .left .two span").css(
        {
            "opacity" : "0"
        });
    $("#sensor .container .bottom .left .three img").css(
        {
             "opacity" : "0"
         });
    $("#sensor .container .bottom .left .three span").css(
        {
                "opacity" : "0"
        });
    $(" #sensor .container .bottom .right p span:nth-child(2)").text("无线温度");
    $(" #sensor .container .bottom .right p:nth-child(2)").text("无线温度传感器将控制对象的温度参数变成电信号,并对接收终端发送无线信号，对系统实行检测、调节和控制。可直接安装在一般工业热电阻、热电偶的接线盒内，与现场传感元件构成一体化结构。通常和无线中继、接收终端、通信串口、电子计算机等配套使用，这样不仅节省了补偿导线和电缆，而且减少了信号传递失真和干扰，从而获的了高精度的测量结果。 无线温度传感器广泛应用于化工、冶金、石油、电力、水处理、制药、食品等自动化行业。例如:高压电缆上的温度采集;水下等恶劣环境的温度采集;运动物体上的温度采集;不易连线通过的空间传输传感器数据;单纯为降低布线成本选用的数据采集方案;没有交流电源的工作场合的数据测量;便携式非固定场所数据测量。")
    $("#sensor .container .bottom .right p:nth-child(2)+span").css("margin-top","100px");

});

$("#sensor .container .top ul .three").mouseenter(function(){
    $("#sensor .container .top ul .three").css(
        {
            "border-bottom" : "4px solid #007bff",
        });
    $("#sensor .container .top ul .one").css(
        {
            "border-bottom" : "none",
        });
    $("#sensor .container .top ul .two").css(
        {
             "border-bottom" : "none",
        });
    $("#sensor .container .bottom .left .one img").attr("src","img/Frequency conversion power.png");
    $("#sensor .container .bottom .left .one span").text("变频功率");
    $("#sensor .container .bottom .left .one").css(
        {
            "pointer-events" : "none" 
        });

    $("#sensor .container .bottom .left .two").css(
        {
            "pointer-events" : "none" 
        });
    $("#sensor .container .bottom .left .two img").css(
        {
            "opacity" : "0"
        });
    $("#sensor .container .bottom .left .two span").css(
        {
            "opacity" : "0"
        });
        $("#sensor .container .bottom .left .three").css(
        {
            "pointer-events" : "none" 
        });
    $("#sensor .container .bottom .left .three img").css(
        {
            "opacity" : "0"
        });
    $("#sensor .container .bottom .left .three span").css(
        {
             "opacity" : "0"
        });
    $(" #sensor .container .bottom .right p span:nth-child(2)").text("变频功率");
    $(" #sensor .container .bottom .right p:nth-child(2)").text("变频功率传感器通过对输入的电压、电流信号进行交流采样，再将采样值通过电缆、光纤等传输系统与数字量输入二次仪表相连，数字量输入二次仪表对电压、电流的采样值进行运算，可以获取电压有效值、电流有效值、基波电压、基波电流、谐波电压、谐波电流、有功功率、基波功率、谐波功率等参数。")
    $("#sensor .container .bottom .right p:nth-child(2)+span").css("margin-top","-10px");
});

$("#sensor .container .top ul .three").mouseleave(function(){
    $("#sensor .container .top ul .three").css(
        {
            "border-bottom" : "4px solid #007bff",
        });
    $("#sensor .container .top ul .one").css(
        {
            "border-bottom" : "none",
        });
    $("#sensor .container .top ul .two").css(
       {
             "border-bottom" : "none",
        });
    $("#sensor .container .bottom .left .one img").attr("src","img/Frequency conversion power.png");
    $("#sensor .container .bottom .left .one span").text("变频功率");
    // $("#sensor .container .bottom .left .one").css(
    //     {
    //         "pointer-events" : "auto" 
    //     });
    //     $("#sensor .container .bottom .left .two").css(
    //     {
    //         "pointer-events" : "auto" 
    //     });
    //     $("#sensor .container .bottom .left .three").css(
    //     {
    //         "pointer-events" : "auto" 
    //     });
 
 
    $("#sensor .container .bottom .left .two img").css(
        {
            "opacity" : "0"
        });
    $("#sensor .container .bottom .left .two span").css(
        {
            "opacity" : "0"
        });
    $("#sensor .container .bottom .left .three img").css(
        {
            "opacity" : "0"
        });
    $("#sensor .container .bottom .left .three span").css(
        {
             "opacity" : "0"
        });
    $(" #sensor .container .bottom .right p span:nth-child(2)").text("变频功率");
    $(" #sensor .container .bottom .right p:nth-child(2)").text("变频功率传感器通过对输入的电压、电流信号进行交流采样，再将采样值通过电缆、光纤等传输系统与数字量输入二次仪表相连，数字量输入二次仪表对电压、电流的采样值进行运算，可以获取电压有效值、电流有效值、基波电压、基波电流、谐波电压、谐波电流、有功功率、基波功率、谐波功率等参数。")
    $("#sensor .container .bottom .right p:nth-child(2)+span").css("margin-top","-10px");
});

$("#sensor .container .bottom .left div span").mouseenter(function(){
    $("#sensor .container .bottom .left div span").css({
         "cursor" : "default"
    });   
    
});

$(" #sensor .container .bottom .left .one").mouseenter(function() {
     $(" #sensor .container .bottom .left .one").css("background","#fff");
     $(" #sensor .container .bottom .left .two").css("background","#f5f5f5");
     $(" #sensor .container .bottom .left .three").css("background","#f5f5f5");

     $(" #sensor .container .bottom .left .one img").attr("src","img/sensor-one.png");
     $(" #sensor .container .bottom .left .two img").attr("src","img/sensor-two.png");
     $(" #sensor .container .bottom .left .three img").attr("src","img/sensor-three.png");

     $(" #sensor .container .bottom .right p span:nth-child(2)").text("室温管温传感器");
     $(" #sensor .container .bottom .right p:nth-child(2)").text("室温传感器用于测量室内和室外的环境温度，管温传感器用于测量蒸发器和冷凝器的管壁温度。室温传感器和管温传感器的形状不同，但温度特性基本一致。按温度特性划分，美的使用的室温管温传感器有二种类型:1.常数B值为4100K±3%，基准电阻为25℃对应电阻10KΩ±3%。在0℃和55℃对应电阻公差约为±7%;而0℃以下及55℃以上，对于不同的供应商，电阻公差会有一定的差别。温度越高，阻值越小;温度越低，阻值越大。离25℃越远，对应电阻公差范围越大")
     $("#sensor .container .bottom .right p:nth-child(2)+span").css("margin-top","40px");

});

$(" #sensor .container .bottom .left .one").mouseleave(function() {
    $(" #sensor .container .bottom .left .one").css("background","#fff");
    $(" #sensor .container .bottom .left .two").css("background","#f5f5f5");
    $(" #sensor .container .bottom .left .three").css("background","#f5f5f5");

    $(" #sensor .container .bottom .left .one img").attr("src","img/sensor-one.png");
    $(" #sensor .container .bottom .left .two img").attr("src","img/sensor-two.png");
    $(" #sensor .container .bottom .left .three img").attr("src","img/sensor-three.png");

    $(" #sensor .container .bottom .right p span:nth-child(2)").text("室温管温传感器");
    $(" #sensor .container .bottom .right p:nth-child(2)").text("室温传感器用于测量室内和室外的环境温度，管温传感器用于测量蒸发器和冷凝器的管壁温度。室温传感器和管温传感器的形状不同，但温度特性基本一致。按温度特性划分，美的使用的室温管温传感器有二种类型:1.常数B值为4100K±3%，基准电阻为25℃对应电阻10KΩ±3%。在0℃和55℃对应电阻公差约为±7%;而0℃以下及55℃以上，对于不同的供应商，电阻公差会有一定的差别。温度越高，阻值越小;温度越低，阻值越大。离25℃越远，对应电阻公差范围越大")
    $("#sensor .container .bottom .right p:nth-child(2)+span").css("margin-top","40px");

});

$(" #sensor .container .bottom .left .two").mouseenter(function() {
    $(" #sensor .container .bottom .left .one").css("background","#f5f5f5");
    $(" #sensor .container .bottom .left .two").css("background","#fff");
    $(" #sensor .container .bottom .left .three").css("background","#f5f5f5");

    $(" #sensor .container .bottom .left .one img").attr("src","img/sensor-four.png");
    $(" #sensor .container .bottom .left .two img").attr("src","img/sensor-five.png");
    $(" #sensor .container .bottom .left .three img").attr("src","img/sensor-three.png");

    $(" #sensor .container .bottom .right p span:nth-child(2)").text("排气温度传感器");
    $(" #sensor .container .bottom .right p:nth-child(2)").text("排气温度传感器用于测量压缩机顶部的排气温度，常数B值为3950K±3%,基准电阻为90℃对应电阻5KΩ±3%。")
    $("#sensor .container .bottom .right p:nth-child(2)+span").css("margin-top","-50px");

});

$(" #sensor .container .bottom .left .two").mouseleave(function() {
    $(" #sensor .container .bottom .left .one").css("background","#f5f5f5");
    $(" #sensor .container .bottom .left .two").css("background","#fff");
    $(" #sensor .container .bottom .left .three").css("background","#f5f5f5");

    $(" #sensor .container .bottom .left .one img").attr("src","img/sensor-four.png");
    $(" #sensor .container .bottom .left .two img").attr("src","img/sensor-five.png");
    $(" #sensor .container .bottom .left .three img").attr("src","img/sensor-three.png");

    $(" #sensor .container .bottom .right p span:nth-child(2)").text("排气温度传感器");
    $(" #sensor .container .bottom .right p:nth-child(2)").text("排气温度传感器用于测量压缩机顶部的排气温度，常数B值为3950K±3%,基准电阻为90℃对应电阻5KΩ±3%。")
    $("#sensor .container .bottom .right p:nth-child(2)+span").css("margin-top","-50px");

});


$(" #sensor .container .bottom .left .three").mouseenter(function() {
    $(" #sensor .container .bottom .left .one").css("background","#f5f5f5");
    $(" #sensor .container .bottom .left .two").css("background","#f5f5f5");
    $(" #sensor .container .bottom .left .three").css("background","#fff");

    $(" #sensor .container .bottom .left .one img").attr("src","img/sensor-four.png");
    $(" #sensor .container .bottom .left .two img").attr("src","img/sensor-two.png");
    $(" #sensor .container .bottom .left .three img").attr("src","img/sensor-six.png");

    $(" #sensor .container .bottom .right p span:nth-child(2)").text("模块温度传感器");
    $(" #sensor .container .bottom .right p:nth-child(2)").text("模块温度传感器用于测量变频模块(IGBT或IPM)的温度，用的感温头的型号是602F-3500F，基准电阻为25℃对应电阻6KΩ±1%。几个典型温度的对应阻值分别是:-10℃→(25.897~28.623)KΩ;0℃→(16.3248~17.7164)KΩ;50℃→(2.3262~2.5153)KΩ;90℃→"+"  "+
    "(0.6671~0.7565)KΩ。 温度传感器的种类很多，经常使用的有热电阻:PT100、PT1000、Cu50、Cu100;热电偶:B、E、J、K、S等。温度传感器不但种类繁多，而且组合形式多样，应根据不同的场所选用合适的产品。")
    $("#sensor .container .bottom .right p:nth-child(2)+span").css("margin-top","50px");

});

$(" #sensor .container .bottom .left .three").mouseleave(function() {
    $(" #sensor .container .bottom .left .one").css("background","#f5f5f5");
    $(" #sensor .container .bottom .left .two").css("background","#f5f5f5");
    $(" #sensor .container .bottom .left .three").css("background","#fff");

    $(" #sensor .container .bottom .left .one img").attr("src","img/sensor-four.png");
    $(" #sensor .container .bottom .left .two img").attr("src","img/sensor-two.png");
    $(" #sensor .container .bottom .left .three img").attr("src","img/sensor-six.png");

    $(" #sensor .container .bottom .right p span:nth-child(2)").text("模块温度传感器");
    $(" #sensor .container .bottom .right p:nth-child(2)").text("模块温度传感器用于测量变频模块(IGBT或IPM)的温度，用的感温头的型号是602F-3500F，基准电阻为25℃对应电阻6KΩ±1%。几个典型温度的对应阻值分别是:-10℃→(25.897~28.623)KΩ;0℃→(16.3248~17.7164)KΩ;50℃→(2.3262~2.5153)KΩ;90℃→"+"  "+
    "(0.6671~0.7565)KΩ。 温度传感器的种类很多，经常使用的有热电阻:PT100、PT1000、Cu50、Cu100;热电偶:B、E、J、K、S等。温度传感器不但种类繁多，而且组合形式多样，应根据不同的场所选用合适的产品。")
    $("#sensor .container .bottom .right p:nth-child(2)+span").css("margin-top","50px");

});

$("#digital_map_service .container .left ul li").mouseenter(function() {
    $("#digital_map_service .container .left ul li").css({
        "cursor" : "default"
 });
});


$("#digital_map_service .container .left ul li:nth-child(1)").mouseenter(function(){
       $("#digital_map_service .container .left ul li:nth-child(1)").css(
           {
                "font-family" : "SourceHanSansSC-Bold",
                "font-weight" : "bold",
                "border-bottom" : "2px solid #ddd"
           });
        $("#digital_map_service .container .left ul li:nth-child(2)").css(
            {
                "font-family" : "SourceHanSansSC-Regular",
                "font-weight" : "normal",
                "border-bottom" : "none"
            });
        $("#digital_map_service .container .left ul li:nth-child(3)").css(
            {
                "font-family" : "SourceHanSansSC-Regular",
                "font-weight" : "normal",
                "border-bottom" : "none"
            });
        
        $("#digital_map_service .container .left .img3").attr("src","img/digital_map_service_three.png")
});

$("#digital_map_service .container .left ul li:nth-child(1)").mouseleave(function(){
    $("#digital_map_service .container .left ul li:nth-child(1)").css(
        {
            "font-family" : "SourceHanSansSC-Bold",
            "font-weight" : "bold",
            "border-bottom" : "2px solid #ddd"
       });
       $("#digital_map_service .container .left ul li:nth-child(2)").css(
        {
            "font-family" : "SourceHanSansSC-Regular",
            "font-weight" : "normal",
            "border-bottom" : "none"
        });
    $("#digital_map_service .container .left ul li:nth-child(3)").css(
        {
            "font-family" : "SourceHanSansSC-Regular",
            "font-weight" : "normal",
            "border-bottom" : "none"
        });
     $("#digital_map_service .container .left .img3").attr("src","img/digital_map_service_three.png")
});

$("#digital_map_service .container .left ul li:nth-child(2)").mouseenter(function(){
    $("#digital_map_service .container .left ul li:nth-child(2)").css(
        {
             "font-family" : "SourceHanSansSC-Bold",
             "font-weight" : "bold",
             "border-bottom" : "2px solid #ddd"
        });
        $("#digital_map_service .container .left ul li:nth-child(1)").css(
            {
                "font-family" : "SourceHanSansSC-Regular",
                "font-weight" : "normal",
                "border-bottom" : "none"
            });
        $("#digital_map_service .container .left ul li:nth-child(3)").css(
            {
                "font-family" : "SourceHanSansSC-Regular",
                "font-weight" : "normal",
                "border-bottom" : "none"
            });
     $("#digital_map_service .container .left .img3").attr("src","img/digital_map_service_four.png")
});

$("#digital_map_service .container .left ul li:nth-child(2)").mouseleave(function(){
 $("#digital_map_service .container .left ul li:nth-child(2)").css(
    {
        "font-family" : "SourceHanSansSC-Bold",
        "font-weight" : "bold",
        "border-bottom" : "2px solid #ddd"
   });
   $("#digital_map_service .container .left ul li:nth-child(1)").css(
    {
        "font-family" : "SourceHanSansSC-Regular",
        "font-weight" : "normal",
        "border-bottom" : "none"
    });
   $("#digital_map_service .container .left ul li:nth-child(3)").css(
    {
        "font-family" : "SourceHanSansSC-Regular",
        "font-weight" : "normal",
        "border-bottom" : "none"
    });
  $("#digital_map_service .container .left .img3").attr("src","img/digital_map_service_four.png")
});

$("#digital_map_service .container .left ul li:nth-child(3)").mouseenter(function(){
    $("#digital_map_service .container .left ul li:nth-child(3)").css(
        {
             "font-family" : "SourceHanSansSC-Bold",
             "font-weight" : "bold",
             "border-bottom" : "2px solid #ddd"
        });
        $("#digital_map_service .container .left ul li:nth-child(1)").css(
            {
                "font-family" : "SourceHanSansSC-Regular",
                "font-weight" : "normal",
                "border-bottom" : "none"
            });
        $("#digital_map_service .container .left ul li:nth-child(2)").css(
            {
                "font-family" : "SourceHanSansSC-Regular",
                "font-weight" : "normal",
                "border-bottom" : "none"
            });
     $("#digital_map_service .container .left .img3").attr("src","img/digital_map_service_five.png")
});

$("#digital_map_service .container .left ul li:nth-child(3)").mouseleave(function(){
 $("#digital_map_service .container .left ul li:nth-child(3)").css(
    {
        "font-family" : "SourceHanSansSC-Bold",
        "font-weight" : "bold",
        "border-bottom" : "2px solid #ddd"
   });
   $("#digital_map_service .container .left ul li:nth-child(1)").css(
    {
        "font-family" : "SourceHanSansSC-Regular",
        "font-weight" : "normal",
        "border-bottom" : "none"
    });
$("#digital_map_service .container .left ul li:nth-child(2)").css(
    {
        "font-family" : "SourceHanSansSC-Regular",
        "font-weight" : "normal",
        "border-bottom" : "none"
    });
  $("#digital_map_service .container .left .img3").attr("src","img/digital_map_service_five.png")
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