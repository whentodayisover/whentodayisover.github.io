var scrollMagic = new ScrollMagic.Controller();

// var curtainId = 0;
//
// $('.curtain').each(function(){
//   $(this).attr('id', 'curtain'+curtainId++);
// });

var articleId = 0;

$('article').each(function(){
  $(this).attr('id', 'article'+articleId);
});

var animationId = 0;

$('.animation').each(function(){
  $(this).attr('id', 'animation'+animationId++);
});

var frameId = 0;

$('.frame').each(function(){
  $(this).attr('id', 'frame'+frameId++);
});
