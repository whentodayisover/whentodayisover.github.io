var scrollMagic = new ScrollMagic.Controller();

var s = skrollr.init();

var curtainId = 0;

$('.curtain').each(function(){
  $(this).attr('id', 'curtain'+curtainId++);
});

var articleId = 100;

$('article').each(function(){
  $(this).attr('id', 'article'+articleId).css('z-index', articleId--);
});

var bgId = 0;

$('.bg').each(function(){
  $(this).attr('id', 'bg'+bgId++);
});

var frameId = 0;

$('.frame').each(function(){
  $(this).attr('id', 'frame'+frameId++);
});
