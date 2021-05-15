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
let olojin = document.querySelector(".heder-login-register");

function fun() {
    let linin = localStorage;
    if (linin.name) {
        olojin.children[0].innerHTML = linin.name;
    } else {
        window.location.href = "lojin.html";
    }
}
fun();
let oCe = document.querySelector('.cart-empty');
let oLpc = document.querySelector(".lining-page-container")

function fun2() {
    let linin = localStorage;
    let xhr = new XMLHttpRequest();
    xhr.open("get", "../php/cart.php?phone=" + linin.name, true);
    xhr.send();
    xhr.onreadystatechange = (() => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            fun1(xhr.responseText);
        }
    })
}
fun2();

function fun1(res) {
    if (res != "") {
        oCe.style.display = "none";
        oLpc.style.display = "block";
    } else {
        oCe.style.display = "block";
        oLpc.style.display = "none";
    }
    let result = res.split(" !  ");
    result.pop();
    let length = result.length;
    while (length > 0) {
        if (length > 1) {
            length--;
            let oTbody = document.querySelector('tbody')
            let tr = document.createElement('tr');
            oTbody.appendChild(tr);
            tr.innerHTML = `<td width="38" class="cart-table__center"><input type="checkbox" name="" id=""></td>
        <td width="100">
            <div class="cart-table-thumb">
            </div>
        </td>
        <td width="240"><span class="cart-table-name"></span></td>
        <td width="100">
            <div>荧光桔黄/荧光梅紫</div>
            <div class="guige"></div>
        </td>
        <td width="100">
            销售价
            <div class="goods-price"></div>
        </td>
        <td width="150">
            <div class="stepper">
                <div class="stepper__minus">-</div>
                <span class="stepper__input"></span>
                <div class="stepper__plus">+</div>
            </div>
        </td>
        <td width="100">
            <div class="cart-link">删除</div>
        </td>`;
        } else {
            length--;
        }
    }

    let oImg = document.querySelectorAll('.cart-table-thumb');
    let oXinxi = document.querySelectorAll('.cart-table-name')
    let oGuige = document.querySelectorAll('.guige')
    let oDanjia = document.querySelectorAll('.goods-price');
    let oShuliang = document.querySelectorAll('.stepper__input');
    console.log(result);
    for (let i = 0; i < result.length; i++) {
        let arr = result[i].split(" ! ");
        oImg[i].style.backgroundImage = arr[2];
        oXinxi[i].innerHTML = arr[3];
        oGuige[i].innerHTML = arr[4];
        oShuliang[i].innerHTML = arr[6];
        oDanjia[i].innerHTML = arr[5];
    }
    let odelete = document.querySelectorAll('.cart-link');
    for (let index = 0; index < odelete.length; index++) {
        odelete[index].onclick = function() {
            let xhr = new XMLHttpRequest();
            let linin = localStorage;
            xhr.open("GET", '../php/delete.php?img=' + odelete[index].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].style.backgroundImage + "&phone=" + linin.name, true);
            xhr.send();
            xhr.onload = () => {
                if (xhr.status == 200) {
                    if (xhr.responseText == 1) {
                        odelete[index].parentNode.parentNode.remove();
                    }
                }
            }
        }
    }
}
let go = document.querySelector(".cart-empty-buy");
go.onclick = () => {
    window.location.href = '../lining/index.html';
}