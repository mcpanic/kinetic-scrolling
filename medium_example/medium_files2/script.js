
$(window).resize(function(){
 $('.container').find('img').each(function(){
  var imgClass = (this.width/this.height > 1) ? 'wide' : 'tall';
  $(this).addClass(imgClass);
 });
 
 var height = $('.container').height();
 $('.post-page-wrapper').css('top', height-450);
 //$('.picker-content').css('top', height-100);
 
});


$(window).load(function(){
 $('.container').find('img').each(function(){
  var imgClass = (this.width/this.height > 1) ? 'wide' : 'tall';
  $(this).addClass(imgClass);
 });
 
 var height = $('.container').height();
 console.log(height);
 $('.post-page-wrapper').css('top', height-450);
 //$('.picker-content').css('top', height-100);
});