 $("h1").css("color","red");
$("h2").css("color","green");
$("h5").css("color","purple");
$(document).keypress(function(event){
    $("h1").text(event.key);
});
$("h1").text(Event.key);
$("h3").html("<p>ROYAL</p>");

$("button").click(function(){
$("h2").css("color","blue");
});

$("#demo").css("font-size","35px");

$("input").focus(function(){
    $("input").css("background-color","red");
});

$("input").blur(function(){
    $("input").css("background-color","yellow");
});

$("input,h1,h2,h3,h4,h5").on("click",function(){
    $(this).hide();
});
