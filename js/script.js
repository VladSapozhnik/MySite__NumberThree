$(document).ready(function () {
    var margin = 0; // переменная для контроля докрутки
    $("a").click(function () { // тут пишите условия, для всех ссылок или для конкретных
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + margin + "px" // .top+margin - ставьте минус, если хотите увеличить отступ
        }, {
            duration: 800, // тут можно контролировать скорость
            easing: "swing"
        });
        return false;
    });
});

$(document).ready(function () {
    $('.logo__two').click(function (event) {
        $('.logo__two, .burger__list').toggleClass('active');
    });
});