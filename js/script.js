$(document).ready(function () {
    var margin = 0; // ���������� ��� �������� ��������
    $("a").click(function () { // ��� ������ �������, ��� ���� ������ ��� ��� ����������
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + margin + "px" // .top+margin - ������� �����, ���� ������ ��������� ������
        }, {
            duration: 800, // ��� ����� �������������� ��������
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