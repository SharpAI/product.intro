$(function() {
    $(target).dargFlex('drag');
    /**
     * 跳转到帮助中心
     */
    $("#Help_center").click(function(){
        location.href = "help.html";
    })
    /*跳转到首页 */
    $("#Home_page").click(function(){
        location.href = "sharpai-index.html";
    })
    //跳转到联系我们
    $("#contact_we").click(function(){
        location.href = "Help_center.html";
    })
   
})
