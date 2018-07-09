$(document).ready(function () {

    // Select money
    $("#js-select-money .item").each(function () {
        $(this).click(function () {
            $(this).addClass("selected").siblings().removeClass("selected");
        });
    });

    $("#js-chart_tab .item").each(function () {
        $(this).click(function () {
            $(this).addClass("selected").siblings().removeClass("selected");
        });
    });
    
    $("#js-left-settings .tab").each(function () {
        $(this).click(function () {
            $(this).addClass("selected").siblings().removeClass("selected");
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
});

// calculate table height
$(window).on("load resize ", function () {
    $(".js-wrapper-ready-height").each(function () {
        var jsWrapperReadyHeight = $(this).offset().top + $(this).outerHeight();
        var jsTableHeight = $(this).find(".js-table-height").offset().top;
        var jsTableHeight_new = jsWrapperReadyHeight - jsTableHeight;
        $(this).find(".js-table-height").css("height", jsTableHeight_new);
    });
}).resize();
