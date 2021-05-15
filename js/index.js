class Banner {
    constructor(oDiv, oLi) {
        oLi[0].style.backgroundColor = " white ";
        this.index = 0;
        this.oLi = oLi;
        this.oDiv = oDiv;
        this.btn1();
        this.time = null;
        this.stop();
    }
    img() {
        oDiv.style.backgroundImage = "url(image/play" + this.index + ".jpg";
    }
    next() {
        this.index++;
        if (this.index == oLi.length) {
            this.index = 0;
        }
        this.color();
        this.img();
    }
    back() {
        this.index--;
        if (this.index < 0) {
            this.index = oLi.length - 1;
        }
        this.color();
        this.img();
    }
    color() {
        for (let i = 0; i < oLi.length; i++) {
            if (i == this.index) {
                oLi[i].style.backgroundColor = " white ";
            } else {
                oLi[i].style.backgroundColor = "#999";
            }
        }
    }

    btn() {
        let that = this;
        for (let i = 0; i < oLi.length; i++) {
            this.oLi[i].onclick = () => {
                that.index = i;
                that.color();
                that.img();
            }
        }
    }
    btn1() {
        let that = this;
        let oSpan = document.querySelectorAll(".carousel-span");
        oSpan[0].onclick = () => {
            that.back();
        }
        oSpan[1].onclick = () => {
            that.next();
        }
        this.btn();
    }
    stop() {
        this.oDiv.onmouseover = () => {
            clearInterval(this.time);
        }
        this.oDiv.onmouseout = () => {
            this.settime();
        }
    }
    settime() {
        this.time = setInterval(() => {
            this.next();
        }, 5000)
    }
}
let oDiv = document.querySelector(".carousel");
let oLi = document.querySelectorAll(".carousel-play");
let banner = new Banner(oDiv, oLi);
banner.settime();
let o1 = document.querySelector(".header-top-logo");
let o2 = document.querySelector(".header-top-logo1");

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