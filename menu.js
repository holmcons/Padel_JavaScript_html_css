//Kod för att öppna och stänga hamburgermenyn

$(document).ready(function(){

    $(".burger-nav").on("click", function(){

        $(".nav").toggleClass("open");

    });

});