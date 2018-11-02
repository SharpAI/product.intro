$(function(){
    
    /**
     * 跳转到帮助中心
     */
    $("#Help_center").click(function(){
        location.href = "help.html";
    })

    /**
     *　跳转到淘宝购买商品
     */
    $("#location-btn button").click(function(){
        location.href ="https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-12617595122.3.33ff4679kgbl66&id=577748526182";
    })

    /**
     * 跳转到了解更多
     */
    $(".buy-fa").click(function(){
        location.href="related.html";
    });
})
