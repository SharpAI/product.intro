$(function(){
    
    /**
     * 跳转到帮助中心
     */
    $("#Help_center").click(function(){
        location.href = "../html/help.html";
    })

    /**
     *　跳转到淘宝购买商品
     */
    $("#location-btn button").click(function(){
        location.href ="https://item.taobao.com/item.htm?id=565957238941";
    })

    /**
     * 跳转到了解更多
     */
    $(".buy-fa").click(function(){
        location.href="../html/related.html";
    });
})