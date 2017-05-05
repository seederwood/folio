$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

$(function(){

  var backImage = [
    'http://cdn.wallpapersafari.com/63/44/U3qtR0.jpg',
    'https://images7.alphacoders.com/484/thumb-1920-484412.jpg',
    'http://www.glasgow2014.com/sites/default/files/styles/lead-graphic-720x360/public/images/scotland.jpg?itok=4ztpYV7j'

  ]
  var imgNum = Math.floor((Math.random() * backImage.length));

  $('body').css('background-image', 'url(' + backImage[imgNum] + ')');


})
