let oInput = document.querySelectorAll("input");
let oTips = document.querySelectorAll(".tips");
let oRegister = document.querySelector(".register-handle")

function checkPhone() {
    let phone = oInput[0].value;
    if (!(/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(phone))) {
        oTips[0].innerHTML = "！请输入正确的手机号"
        return false;
    } else {
        oTips[0].innerHTML = "";
        return true;
    }
}

function checkYanzhenma() {
    let yanzhenma = oInput[1].value;
    if (yanzhenma == "") {
        oTips[1].innerHTML = "！请输入正确的验证码"
        return false;
    } else {
        oTips[1].innerHTML = "";
        return true;
    }
}

function checkPwd() {
    let pwd = oInput[2].value;
    if (!(/(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/.test(pwd))) {
        oTips[2].innerHTML = "！请输入正确的密码,至少包含数字跟字母"
        return false;
    } else {
        oTips[2].innerHTML = "";
        return true;
    }
}

function checkPwd1() {
    let pwd1 = oInput[3].value;
    if (pwd1 != oInput[2].value) {
        oTips[3].innerHTML = "！请输入相同的密码"
        return false;
    } else {
        oTips[3].innerHTML = "";
        return true;
    }
}

function checked() {
    if (oInput[4].checked == false) {
        oTips[4].innerHTML = "！请勾选我同意"
        return false;
    } else {
        oTips[4].innerHTML = "";
        return true;
    }
}
oRegister.onclick = function() {
    if (checkPhone() &&
        checkYanzhenma() &&
        checkPwd() &&
        checkPwd1() &&
        checked()) {
        let xhr = new XMLHttpRequest();

        xhr.open("post", "../php/rej.php", "true");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("phone=" + oInput[0].value + "&pwd=" + oInput[2].value);

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                if (xhr.responseText !== "1") {
                    oTips[5].innerHTML = "用户名已存在，请重新注册";
                } else {
                    oTips[5].innerHTML = "恭喜注册成功";
                    window.location.href = "lojin.html";
                }
            }
        }
    }
}