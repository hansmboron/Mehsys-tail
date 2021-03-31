// ===== Scroll to Top ====
$(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
        $('#btn_top').fadeIn(200);
    } else {
        $('#btn_top').fadeOut(200);
    }
});
$('#btn_top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 300);
});