$(document).ready(function() {
    $(".key").click(function() {
        document.getElementById("dancer").src="dance1.gif";
    });
});

function start() {
    var f = document.getElementById('audio');
    f.play();
    $(".key").addClass("clicked");
    
    f.addEventListener("ended", function() {
        $(".key").removeClass("clicked");
        document.getElementById("dancer").src="static.png";
        confetti();
    });
}

