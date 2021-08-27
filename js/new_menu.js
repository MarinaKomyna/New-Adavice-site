$(document).ready(function () {
    $('.list_arrow_right_1').click(function () {
        $('.list_arrow_right_1').css("display", "none");
        $('.list_arrow_down_1').css("display", "block");
        $('#first_submenu').slideDown(200);
        return false;
    });

    $('.list_arrow_down_1').click(function () {
        $('.list_arrow_right_1').css("display", "block");
        $('.list_arrow_down_1').css("display", "none");
        $('#first_submenu').slideUp(200);
        return false;
    });

    $('.list_arrow_right_2').click(function () {
        $('.list_arrow_right_2').css("display", "none");
        $('.list_arrow_down_2').css("display", "block");
        $('#second_submenu').slideDown(200);
        return false;
    });

    $('.list_arrow_down_2').click(function () {
        $('.list_arrow_right_2').css("display", "block");
        $('.list_arrow_down_2').css("display", "none");
        $('#second_submenu').slideUp(200);
        return false;
    });

    $('#for_submenu_3').click(function () {
        if ($('.new_menu').css("display") == "none") {
            $('.new_menu').slideDown(200);
            return false;
        }
        if ($('.new_menu').css("display") == "block") {
            $('.new_menu').slideUp(200);
            return false;
        }
    });

    $('.link_list').click(function () {
        $('.new_menu').slideUp(200);
        return false;
    });

    $('.new_submenu_list li').click(function () {
        $('.new_menu').slideUp(200);
        return false;
    });
});
