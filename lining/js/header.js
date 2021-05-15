$(".header-sub-menu").css("width", $(window).width());
$(".heder-top-text").mouseover(function() {
    $(".header-promotion").css({ "display": "block" })
    $(".header-promotion").stop();
    $(".header-promotion").animate({
        width: 310,
        height: 260,
        right: -100,
        opacity: 1
    }, 300)
    $(".header-promotion").mouseover(function() {
        $(".header-promotion").css({ "display": "block" })
        $(".header-promotion").stop();
    });
});
let whether = 0;
$(".heder-top-text").mouseout(function() {
    $(".header-promotion").stop();
    $(".header-promotion").animate({
        width: 200,
        height: 120,
        right: -50,
        opacity: 0
    }, 50);
    $(".header-promotion").css({
        "width": 0,
        "hight": 0,
        "display": "none"
    })
});
let o1 = document.querySelector(".heder-login-register");
let o2 = document.querySelector(".heder-login-register1");

function fun() {
    let linin = localStorage;
    if (linin.name) {
        o1.style.display = "none";
        o2.style.display = "block";
        o2.children[0].innerHTML = linin.name;
    } else {
        o1.style.display = "block";
        o2.style.display = "none";
    }
}
fun();