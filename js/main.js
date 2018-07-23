$("header").load("header.html");
$("#modal_login").load("modal_login.html");


/* ScrollBar include */
$(".list").mCustomScrollbar({
    theme: "dark-3",
    scrollInertia: 200
});

$(document).ready(function () {
    // Universal select header
    $(".js-header-select").each(function () {
        $(this).find(".item").each(function () {
            $(this).click(function () {
                $(this).addClass("selected").siblings().removeClass("selected");
            });
        });
    });

    
    /* sec-left bookmark check */
    $(".bookmark").each(function () {
        $(this).click(function () {
            if ($(this).parents("li.item").hasClass("checked")) {
                $(this).parents("li.item").removeClass("checked");
            } else
                $(this).parents("li.item").addClass("checked");

        });

    });

    /* sec-center bell check */
    $(".bell_wrapp").each(function () {
        $(this).click(function () {
            if ($(this).parents("tr").hasClass("checked")) {
                $(this).parents("tr").removeClass("checked");
            } else
                $(this).parents("tr").addClass("checked");

        });

    });

    /* Choose lang */
    $("#dropdownLang-list .dropdown-item").each(function () {
        $(this).click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            var getLangName = $(this).text();
            $(".LangName").text(getLangName);
        });

    });
    
    /* Choose theme */
    $("#switch_theme").click(function () {
        $("body").toggleClass("light_theme");
        $(this).children("span").toggleClass("b-icon-Sun b-icon-moon");

        if ($('body').hasClass("light_theme")) {
            localStorage.setItem('myItem', 'light_theme');
        } else {
            localStorage.setItem('myItem', '');
        }
    });
});

// light theme template
if (localStorage.getItem('myItem') == 'light_theme') {
    $('body').addClass('light_theme');
}

// calculate table height
$(window).on("load resize ", function () {
    $(".js-wrapper-ready-height").each(function () {
        var jsWrapperReadyHeight = $(this).offset().top + $(this).outerHeight();
        var jsTableHeight = $(this).find(".js-table-height").offset().top;
        var jsTableHeight_new = jsWrapperReadyHeight - jsTableHeight;
        $(this).find(".js-table-height").css("height", jsTableHeight_new);
    });

    if ($(window).width() < 1500 && $(window).width() > 768) {
        $(".sec-center").mCustomScrollbar({
            theme: "dark-3",
            scrollInertia: 200
        });
    } else {
        $(".sec-center").mCustomScrollbar("destroy");
    }

}).resize();



//password mask
$('.password-eye').click(function () {
    var icon = $(this).find(".b-icon");

    if (icon.hasClass('b-icon-eye_slash')) {
        icon.removeClass('b-icon-eye_slash').addClass('b-icon-eye');
        icon.parents(".input-group").find("input").attr('type', 'text');
    } else {
        icon.removeClass('b-icon-eye').addClass('b-icon-eye_slash');
        icon.parents(".input-group").find("input").attr('type', 'password');
    }
});
