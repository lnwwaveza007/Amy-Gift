$(document).ready(function() {
    $(".paper").hide();
    $(".MusicBox").hide();
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
    });
}

document.querySelector('.envelope').addEventListener('click', function(){
    $(".paper").show();
    if (document.querySelector('.letter').classList.contains('letter--open')){
      document.querySelector('.letter').classList.remove('letter--open');
      document.querySelector('.letter').classList.add('letter--close');
      setTimeout(function(){
        document.querySelector('.letter').classList.remove('letter--close');
      }, 600);    
    } else {
      document.querySelector('.letter').classList.remove('letter--close');
      document.querySelector('.letter').classList.add('letter--open');
    }
  });
  
  document.querySelector('.paper-close').addEventListener('click', function(){   document.querySelector('.letter').classList.remove('letter--open');
    document.querySelector('.letter').classList.add('letter--close');
    setTimeout(function(){
      document.querySelector('.letter').classList.remove('letter--close');
    }, 600);
  });