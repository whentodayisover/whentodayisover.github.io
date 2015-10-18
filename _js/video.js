var vid = document.getElementById("video");

$("#video").bind("ended", function(){
  $("#video-button").removeClass("hidden");
});

$("#video").bind("play", function(){
  $("#video-button").addClass("hidden");
});

$("#video-button").click(function(){
  vid.pause();
  vid.currentTime = "0";
  vid.play();
})

$('#video').coverVid(1920, 1080);
