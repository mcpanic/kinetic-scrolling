
$(window).resize(function(){
 $('.container').find('img').each(function(){
  var imgClass = (this.width/this.height > 1) ? 'wide' : 'tall';
  $(this).addClass(imgClass);
 });
 
 var height = $('.container').height();
 $('.post-page-wrapper').css('top', height);
 $('.notes-markers').css('top', height-200);
});


$(window).load(function(){
 $('.container').find('img').each(function(){
  var imgClass = (this.width/this.height > 1) ? 'wide' : 'tall';
  $(this).addClass(imgClass);
 });
 
 var height = $('.container').height();
 $('.post-page-wrapper').css('top', height);
 $('.notes-markers').css('top', height-200);
});