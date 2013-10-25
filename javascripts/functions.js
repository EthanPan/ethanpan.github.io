function goTop(obj){
	var $obj = $(obj);
	$obj.click(function(){
		$('html,body').animate({scrollTop:0},600);
	}).css({left: $(window).width() * 0.5 + $('div.pos:first').width() * 0.5 - $obj.width() - 10 });

	var headerHeight = $('#header').height();
	var slideBarHeight = $('div.slide-bar').height();
	var menuYloc = $obj.offset().top;
	$(window).scroll(function(){
		var offsetTop = $(window).scrollTop() ;
		if( offsetTop + getViewSize()[1] > headerHeight + slideBarHeight + getViewSize()[1] / 3 + 100 ){
			$obj.fadeIn();
		}else
			$obj.fadeOut();
	});


};                       

$(function(){
   goTop('#go-top');
});
