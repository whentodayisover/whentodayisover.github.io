$('section ol').append('<div class="slideshow-nav">');

$('section ol').cycle({
  pager: '> .slideshow-nav',
  pagerTemplate: '<span class="slideshow-dot"></span>',
  slides: '> li',
  speed: 250,
  timeout: 0
});
