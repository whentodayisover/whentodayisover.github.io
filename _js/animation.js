$('.animation .frame').each(function(){
  var $frame = $(this),
      frameId = $frame.attr('id'),
      frameShim = frameId + '-shim',
      $article = $frame.parents('article');

  var shim = $('<figure>')
      .attr('id', frameShim)
      .addClass('frame-shim')
      .appendTo($article);
});

$('.frame.fade').each(function(){
  var $frame = $(this),
      frameId = $frame.attr('id'),
      frameShim = frameId + '-shim';

  var scene = new ScrollMagic.Scene({triggerElement: '#' + frameShim, triggerHook: 0.25, duration: '25%'})
    .setTween('#' + frameId, { opacity: 1 })
    // .addIndicators()
    .addTo(scrollMagic);
});

$('.frame.stop').each(function(){
  var $frame = $(this),
      frameId = $frame.attr('id'),
      frameShim = frameId + '-shim';

  var scene = new ScrollMagic.Scene({triggerElement: '#' + frameShim, triggerHook: 0.25, duration: '1'})
    .setTween('#' + frameId, { opacity: 1 })
    // .addIndicators()
    .addTo(scrollMagic);
});
