$(function(){
    /*跳转到首页 */
    $("#Home_page").click(function(){
        location.href = "Shar-ai.html";
    })
    
    /**
     * 解决鼠标炫富在a标上上出现下划线问题
     */
    $("#navigation-ul li").hover(function(){
        $(this).find("a").css("text-decoration","none")
    },function(){
        $(this).find("a").css("text-decoration","none")
    })

    
   $("#navigation-ul li").on('touchstart',function(){
        $(this).addClass("background");
        $(this).siblings().removeClass("background");
        $(this).find("a").css("color","#fff")
        $(this).siblings().find("a").css("color","rgb(75,75,75)");  
   })
    $("nav #navigation-ul li").on('click',function(){
        $(this).addClass("background");
        $(this).siblings().removeClass("background");
        $(this).find("a").css("color","#fff")
        $(this).siblings().find("a").css("color","rgb(75,75,75)");  
    })
    
    
    $(".bg-lite").click(function(){
        $("body").css("background","#d9dbdd"); 
    });
    
    $(".bg-dark").click(function(){
        $("body").css("background","#222222"); 
    });
    

})
