window.onload = function() {
    console.log('页面已载入');
    function s(val) {
        return document.querySelector(val);
    }
    var name = s('.name');
    var email = s('.email');
    var feedback = s('.feedback');
    
    s('.submit').addEventListener("click", function() {
        console.log('content: ↓↓↓↓↓↓↓↓');
        console.log('name:', name.value);
        console.log('email:', email.value);
        console.log('feedback:', feedback.value);
        console.log('*************************');
    })
}