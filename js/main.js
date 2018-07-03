$(document).ready(function () {
    
    // Select money
    $("#js-select-money .item").each(function () {
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

});
