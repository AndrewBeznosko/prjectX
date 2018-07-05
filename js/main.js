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
    /* sec-left bookmark check */
    $(".bookmark").each(function() {
       $(this).click(function() {
           if($(this).parents("li.item").hasClass("checked")) {
               $(this).parents("li.item").removeClass("checked");
           } else 
          $(this).parents("li.item").addClass("checked");
           
       });
        
    });
    
    /* sec-center bell check */
    $(".bell_wrapp").each(function() {
       $(this).click(function() {
           if($(this).parents("tr").hasClass("checked")) {
               $(this).parents("tr").removeClass("checked");
           } else 
          $(this).parents("tr").addClass("checked");
           
       });
        
    });

});
