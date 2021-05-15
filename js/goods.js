let o1 = document.querySelector(".heder-login-register");
let o2 = document.querySelector(".heder-login-register1");
let small = document.querySelector(".goods-main-img-wrapper");
let mark = document.querySelector(".goods-main-img-wrapper2");
let big = document.querySelector(".goods-main-img-wrapper1");
let oImgsmall = document.querySelectorAll('.loser');
let oAddcart = document.querySelector('.add-cart');
let oXinxi = document.querySelector('.goods-name');
let oDanjia = document.querySelector('.danjia');

function goods() {
    let oImg = document.querySelector('.loser');
    let oXinxi = document.querySelector(".goods-name");
    let oDanjia = document.querySelector('.danjia');
    let linin = localStorage;
    oImg.style.backgroundImage = "url(" + linin.img + ")";
    oXinxi.innerHTML = linin.xinxi;
    oDanjia.innerHTML = linin.danjia;
}
goods();

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
for (let i = 0; i < oImgsmall.length; i++) {
    oImgsmall[i].onmouseover = () => {
        let tar = getComputedStyle(oImgsmall[i], null)
        small.style.backgroundImage = tar.backgroundImage;
        big.style.backgroundImage = tar.backgroundImage;
        console.log(small.offsetWidth, big.offsetLeft)
    }
}
// class Magnifier {
//     constructor(small, mark, big) {
//         this.small = small;
//         this.mark = mark;
//         this.big = big;
//         this.eventBind();
//     }
//     over() {
//         let that = this;
//         this.small.onmouseover = () => {
//             that.mark.style.display = "block";
//             that.big.style.display = "block";
//         }
//     }
//     move() {
//         let os = document.querySelector(".pc-lining-goods-detail");
//         let that = this;
//         this.mark.onmousemove = (evt) => {
//             let e = evt || event;
//             let left = e.pageX - this.mark.offsetWidth / 2 - os.offsetLeft;

//             let top = e.pageY - this.mark.offsetHeight / 2 - 160;

//             if (left < 0) {
//                 left = 0;
//             }
//             let maxleft = that.small.offsetWidth - this.mark.offsetWidth;
//             if (maxleft < left) {
//                 left = maxleft;
//             }
//             let maxtop = that.small.offsetHeight - this.mark.offsetHeight;
//             if (top > maxtop) {
//                 top = maxtop;
//             }
//             if (top < 0) {
//                 top = 0;
//             }
//             that.mark.style.left = left + "px";
//             that.mark.style.top = top + "px";
//             that.big.style.backgroundPositionX = -left * 4 + "px";
//             that.big.style.backgroundPositionY = -top * 4 + "px";
//         }
//     }
//     out() {
//         let that = this;
//         this.mark.onmouseout = () => {
//             that.mark.style.display = "none";
//             that.big.style.display = "none";
//         }
//     }
//     eventBind() {
//         this.over();
//         this.out();
//         this.move();
//     }
// }
class Magnifier {
    constructor(newSmallBox, newMask, newBigBox) {
        this.oSmallBox = newSmallBox;
        this.oMask = newMask;
        this.oBigBox = newBigBox;
        this.eventBind();
    }

    mouseover() {
        let that = this;
        this.oSmallBox.onmouseover = function() {
            that.oMask.style.display = "block";
            that.oBigBox.style.display = "block";
        }
    }

    mouseout() {
        let that = this;
        this.oSmallBox.onmouseout = function() {
            that.oMask.style.display = "none";
            that.oBigBox.style.display = "none";
        }
    }

    mousemove() {
        let os = document.querySelector(".pc-lining-goods-detail");
        let that = this;
        this.oSmallBox.onmousemove = function(evt) {
            var e = evt || event;
            let left = e.pageX - that.oMask.offsetWidth / 2 - os.offsetLeft;

            let top = e.pageY - that.oMask.offsetHeight / 2 - 160;

            if (left < 0) {
                left = 0;
            }

            let maxLeft = this.offsetWidth - that.oMask.offsetWidth;

            if (left > maxLeft) {
                left = maxLeft;
            }

            if (top < 0) {
                top = 0;
            }

            let maxTop = this.offsetHeight - that.oMask.offsetHeight;

            if (top > maxTop) {
                top = maxTop;
            }
            var x = that.oBigBox.offsetWidth * left / that.oMask.offsetWidth;
            var y = that.oBigBox.offsetHeight * top / that.oMask.offsetHeight;

            that.oMask.style.left = left + "px";
            that.oMask.style.top = top + "px";

            that.oBigBox.style.backgroundPositionX = -x + "px";
            that.oBigBox.style.backgroundPositionY = -y + "px";
        }
    }

    eventBind() {
        this.mouseover();
        this.mouseout();
        this.mousemove();
    }
}
let m = new Magnifier(small, mark, big);
let oBtn = document.querySelectorAll('.button')
let oNum = document.querySelector(".span")
oBtn[0].onclick = () => {
    if (oNum.innerHTML == 1) return
    oNum.innerHTML -= 1;
}
oBtn[1].onclick = () => {
    let num = Number(oNum.innerHTML);
    oNum.innerHTML = num + 1
}
oAddcart.onclick = () => {
    let linin = localStorage;
    let xhr = new XMLHttpRequest();
    debugger
    xhr.open('GET', "../php/goods.php?phone=" + linin.name + "&img=" + getComputedStyle(small, null).backgroundImage + "&xinxi=" + oXinxi.innerHTML + "&guige=40&danjia=" + oDanjia.innerHTML + "&shuliang=" + oNum.innerHTML, true);
    xhr.send();
    xhr.onload = (() => {
        if (xhr.status == 200) {
            console.log(xhr.responseText);
        }
    })
}