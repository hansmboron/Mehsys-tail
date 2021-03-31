var cont = 0;
function loopSlider() {
    var xx = setInterval(function () {
        switch (cont) {
            case 0: {
                $("#slider-1").fadeOut(400);
                $("#slider-2").delay(400).fadeIn(400);
                $("#sButton1").removeClass("bg-primary-400");
                $("#sButton2").addClass("bg-primary-400");
                cont = 1;
                break;
            }
            case 1: {
                $("#slider-2").fadeOut(400);
                $("#slider-1").delay(400).fadeIn(400);
                $("#sButton2").removeClass("bg-primary-400");
                $("#sButton1").addClass("bg-primary-400");
                cont = 0;
                break;
            }
        }
    }, 8000);
}

function reinitLoop(time) {
    clearInterval(xx);
    setTimeout(loopSlider(), time);
}

function sliderButton1() {
    $("#slider-2").fadeOut(400);
    $("#slider-1").delay(400).fadeIn(400);
    $("#sButton2").removeClass("bg-primary-400");
    $("#sButton1").addClass("bg-primary-400");
    reinitLoop(8000);
    cont = 0
}

function sliderButton2() {
    $("#slider-1").fadeOut(400);
    $("#slider-2").delay(400).fadeIn(400);
    $("#sButton1").removeClass("bg-primary-400");
    $("#sButton2").addClass("bg-primary-400");
    reinitLoop(8000);
    cont = 1
}

$(window).ready(function () {
    $("#slider-2").hide();
    $("#sButton1").addClass("bg-primary-400");
    loopSlider();
});

// courosel 2

var cont2 = 0;
function loopSlider2() {
    var xx = setInterval(function () {
        switch (cont2) {
            case 0: {
                $("#slider-3").fadeOut(400);
                $("#slider-4").delay(400).fadeIn(400);
                $("#sButton3").removeClass("bg-primary-400");
                $("#sButton4").addClass("bg-primary-400");
                cont2 = 1;
                break;
            }
            case 1: {
                $("#slider-4").fadeOut(400);
                $("#slider-3").delay(400).fadeIn(400);
                $("#sButton4").removeClass("bg-primary-400");
                $("#sButton3").addClass("bg-primary-400");
                cont2 = 0;
                break;
            }
        }
    }, 8000);
}

function reinitLoop2(time) {
    clearInterval(xx);
    setTimeout(loopSlider2(), time);
}

function sliderButton1() {
    $("#slider-4").fadeOut(400);
    $("#slider-3").delay(400).fadeIn(400);
    $("#sButton4").removeClass("bg-primary-400");
    $("#sButton3").addClass("bg-primary-400");
    reinitLoop2(8000);
    cont2 = 0
}

function sliderButton2() {
    $("#slider-3").fadeOut(400);
    $("#slider-4").delay(400).fadeIn(400);
    $("#sButton3").removeClass("bg-primary-400");
    $("#sButton4").addClass("bg-primary-400");
    reinitLoop2(8000);
    cont2 = 1
}

$(window).ready(function () {
    $("#slider-4").hide();
    $("#sButton3").addClass("bg-primary-400");
    loopSlider2();
});