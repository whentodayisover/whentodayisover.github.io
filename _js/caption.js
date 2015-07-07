$('img[alt*=" "]').each(function(){
  var captionText = $(this).attr('alt');
  var caption = $('<h6 class="caption">').html(captionText);
  $(this).parent().append(caption);
});
