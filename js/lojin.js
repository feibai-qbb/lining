let oInput = document.querySelectorAll("input");
let oTips = document.querySelectorAll(".tips");
let oRegister = document.querySelector(".register-handle")

function checkPhone() {
    let phone = oInput[2].value;
    if (!(/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(phone))) {
        oTips[2].innerHTML = "！请输入正确的手机号"
        return false;
    } else {
        oTips[2].innerHTML = "";
        return true;
    }
}

function checkPwd() {
    let pwd = oInput[3].value;
    if (!(/(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/.test(pwd))) {
        oTips[3].innerHTML = "！请输入正确的密码"
        return false;
    } else {
        oTips[3].innerHTML = "";
        return true;
    }
}
oRegister.onclick = function() {
    if (checkPhone() && checkPwd()) {
        let xhr = new XMLHttpRequest();

        xhr.open("post", "../php/login.php", "true");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("phone=" + oInput[2].value + "&pwd=" + oInput[3].value);

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
                if (xhr.responseText == "1") {
                    let linin = localStorage;
                    linin.name = oInput[2].value;
                    window.location.href = "../index.html";
                } else {
                    oTips[3].innerHTML = "！请输入正确的密码"
                }
            }
        }
    }
}
let oLo = document.querySelectorAll(".lo");
let oIn = document.querySelector("#ln-pc-login-input");
let oIn1 = document.querySelector("#ln-pc-login-input1");
oLo[0].style.color = 'red';
oLo[0].onclick = function() {
    oIn.style.display = "block";
    oIn1.style.display = "none";
    oLo[0].style.color = 'red';
    oLo[1].style.color = 'black';
}
oLo[1].onclick = function() {
    oIn.style.display = "none";
    oIn1.style.display = "block";
    oLo[0].style.color = 'black';
    oLo[1].style.color = 'red';
}