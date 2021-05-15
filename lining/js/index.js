$("header").load("header.html");
$("footer").load("footer.html");
let documentWidth = $(document).width();
let play1 = [];
$(".carousel").width(documentWidth);
for (let i = -1; i < $(".carousel-play").length; i++) {
    play1.push(documentWidth * i);
    play1.max = play1[i];
}
for (let i = 0; i < $(".carousel-play").length; i++) {
    $(".carousel-play").eq(i).css({ "left": play1[i] })
}
play1.min = play1[0];
$(".carousel-last").click(function() {
    for (let i = 0; i < play1.length; i++) {
        play1[i] -= documentWidth;
        if (play1[i] < play1.min) {
            play1[i] = play1.max;
            $(".carousel-play").eq(i).animate({ left: play1[i] }, 0);
        }

        $(".carousel-play").eq(i).animate({ left: play1[i] }, 500);
    }
});
$(".carousel-next").click(function() {
    for (let i = 0; i < play1.length; i++) {
        play1[i] += documentWidth;
        if (play1[i] > play1.max) {
            play1[i] = play1.min;
            $(".carousel-play").eq(i).animate({ left: play1[i] }, 0);
        }
        $(".carousel-play").eq(i).animate({ left: play1[i] }, 500)

    }
});



// 第二个轮播图
let play2 = [];
for (let i = -1; i < $(".carousel-slideshow-two>li").length - 1; i++) {
    play2.push(i * 350);
}
for (let i = 0; i < $(".carousel-slideshow-two>li").length; i++) {
    $(".carousel-slideshow-two>li").eq(i).css("left", play2[i]);
}
play2.min = play2[0];
play2.max = play2[play2.length - 1];
$(".carousel-two-last").click(function() {
    for (let i = 0; i < play2.length; i++) {
        play2[i] -= 350;
        if (play2[i] < play2.min) {
            play2[i] = (play2.length - 2) * 350;
            $(".carousel-slideshow-two>li").eq(i).animate({ left: play2[i] }, 0)
        }
        $(".carousel-slideshow-two>li").eq(i).animate({ left: play2[i] })
    }
});
$(".carousel-two-next").click(function() {
    for (let i = 0; i < play2.length; i++) {
        play2[i] += 350;
        if (play2[i] > play2.max) {
            play2[i] = play2.min;
            $(".carousel-slideshow-two>li").eq(i).animate({ left: play2[i] }, 0)
        }
        $(".carousel-slideshow-two>li").eq(i).animate({ left: play2[i] })
    }
});

// 第三个轮播图
let play3 = [];
for (let i = -1; i < $(".carousel-play-three").length - 1; i++) {
    play3.push(i * 1000);
}
for (let i = 0; i < $(".carousel-play-three").length; i++) {
    $(".carousel-play-three").eq(i).css("left", play3[i]);
}
play3.min = play3[0];
play3.max = play3[play3.length - 1];
console.log(play3, play3.max, play3.min);
$(".carousel-three-last").click(function() {
    console.log("上");
    for (let i = 0; i < play3.length; i++) {
        play3[i] -= 1000;
        if (play3[i] < play3.min) {
            play3[i] = (play3.length - 3) * 1000;
            $(".carousel-play-three").eq(i).animate({ left: play3[i] }, 0)
        }
        $(".carousel-play-three").eq(i).animate({ left: play3[i] })
    }
});
$(".carousel-three-next").click(function() {
    console.log("下");
    for (let i = 0; i < play3.length; i++) {
        play3[i] += (+1000);
        if (play3[i] > play3.max) {
            play3[i] = play3.min;
            $(".carousel-play-three").eq(i).animate({ left: play3[i] }, 0)
        }
        $(".carousel-play-three").eq(i).animate({ left: play3[i] })
    }
});
// 第四个轮播图
let play4 = [];
for (let i = -1; i < $(".carousel-play-four").length - 1; i++) {
    play4.push(i * 335);
}
for (let i = 0; i < $(".carousel-play-four").length; i++) {
    $(".carousel-play-four").eq(i).css("left", play4[i]);
}
play4.min = play4[0];
play4.max = play4[play4.length - 1];
$(".carousel-four-last").click(function() {
    for (let i = 0; i < play4.length; i++) {
        play4[i] -= 335;
        if (play4[i] < play4.min) {
            play4[i] = (play4.length - 2) * 335;
            $(".carousel-play-four").eq(i).animate({ left: play4[i] }, 0)
        }
        $(".carousel-play-four").eq(i).animate({ left: play4[i] })
    }
});
$(".carousel-four-next").click(function() {
    for (let i = 0; i < play4.length; i++) {
        play4[i] += 335;
        if (play4[i] > play4.max) {
            play4[i] = play4.min;
            $(".carousel-play-four").eq(i).animate({ left: play4[i] }, 0)
        }
        $(".carousel-play-four").eq(i).animate({ left: play4[i] })
    }
});

// 潮品力推选品按钮
$(".tide-select-man-btn").click(function() {
    $(this).css("backgroundColor", "#78c9da");
    $(".tide-select-woman-btn").css("backgroundColor", "black")
    $(".tide-select-man").css("display", "flex").animate({ opacity: 1 });
    $(".tide-select-woman").animate({ opacity: 0 }, function() {
        $(this).css("display", "none");
    })
})
$(".tide-select-woman-btn").click(function() {
    $(this).css("backgroundColor", "#78c9da");
    $(".tide-select-man-btn").css("backgroundColor", "#000000");
    $(".tide-select-woman").css("display", "flex").animate({ opacity: 1 });
    $(".tide-select-man").animate({ opacity: 0 }, function() {
        $(this).css("display", "none");
    })
})
let oImg = document.querySelectorAll('.oImg');
let oP = document.querySelectorAll('.oP');
let odanjia = document.querySelectorAll(".man-select-money");


function fun() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '../php/index.php', true);
    xhr.send();
    xhr.onload = (() => {
        if (xhr.status == 200) {
            let result = xhr.responseText.split(" !  ");
            console.log(result);
            result.pop();
            for (let i = 0; i < result.length; i++) {
                let arr = result[i].split(" ! ");
                oImg[i].src = arr[0];
                oP[i].innerHTML = arr[1];
                odanjia[i].innerHTML = arr[3];

            }
        }
    })
}
let oA = document.querySelectorAll('.oA');
for (let index = 0; index < oA.length; index++) {
    oA[index].onclick = () => {
        let linin = localStorage;
        debugger
        linin.img = oImg[index].src;
        linin.xinxi = oP[index].innerHTML;
        linin.guige = 40;
        linin.danjia = odanjia[index].innerHTML;
        window.location.href = "../html/goods.html";
        return false;
    }
}
fun();