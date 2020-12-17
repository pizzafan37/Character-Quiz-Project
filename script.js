$( document ).ready(function() 
var counter = 0;

$("sonic, tails, knuckles, shadow").addClass("image");

$(".submit").click(function() {
    var age = $(".age").val();
    var description = $(".describe").val();
    if (description === "adventurous" && age > 8) {
        $(".results").show();
         $(".results").text("Since you're more than 8 years old and you consider yourself adventurous, you could be Sonic the Hedgehog.");
        $(".results").append("<img src= 'https://static.wikia.nocookie.net/heroes-and-villians/images/2/27/SFModernSonicRender.png'>");
    } else if (description === "adventurous" && (age < 60 || age === 8)) {
        $(".results").show();
        $(".results").text("Since you're less than 60 years old (or exactly 8 years old) and consider yourself adventurous, you could be Miles 'Tails' Prower the Fox.");
        $(".results").append("<img src= 'https://static.wikia.nocookie.net/sonic/images/a/aa/TSR_Tails.png'>");
    } else if (description === "serious" && (age > 8 && age < 20)) {
        $(".results").show();
        $(".results").text("Since you're more than 8 years old and you consider yourself serious, you could be Knuckles the Echidna.");
        $(".results").append("<img src= 'https://static.wikia.nocookie.net/sonic/images/0/0a/TSR_Knuckles.png'>");
    } else if (description === "serious" && (age < 60 || age === 50)) {
        $(".results").show();
        $(".results").text("Since you're less than 60 years old (or exactly 50 years old) and you consider yourself serious, you could be Shadow the Hedgehog.");
        $(".results").append("<img src= 'https://static.wikia.nocookie.net/sonic/images/b/b5/TSR_Shadow.png'>");
    } else if (description === "" && age === "") {
        $(".results").show();
        $(".results").text("Fields must be filled in for result.");
    } else {
        $(".results").text("Inputs don't match database.");
    }
	counter = counter + 1;
    $(".counter").text("This quiz was taken " + counter + " times.");
});

$(".reset").click(function() {
counter = 0;
$(".results").empty("");
$(".age").val("");
$(".describe").val("");
});
});
