$(function() {
    $(target).dargFlex('drag');
    /**
     * 跳转到帮助中心
     */
    $("#Help_center").click(function(){
        location.href = "../html/help.html";
    })
    /*跳转到首页 */
    $("#Home_page").click(function(){
        location.href = "../html/sharp-index.html";
    })
   
})