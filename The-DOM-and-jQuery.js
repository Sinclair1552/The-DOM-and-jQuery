//First Challenge: Listing your friends with jQuery (and making them smell)
$("#main-heading").text("My friends");

var friends = ["Joe", "Trisha", "Max"];

for (var i = 0; i < friends.length; i++) {
    $("body").append("<p>" + friends[i] + "</p>");
}

$("p").append(" smells!");


//Second Challenge: Making a Heading Flash
var fadeTime;
for (var i = 0; i < 5; i++) {
    fadeTime = (i + 1) * 1000;
    $("#main-heading").fadeOut(fadeTime / 2).fadeIn(fadeTime / 2);
}