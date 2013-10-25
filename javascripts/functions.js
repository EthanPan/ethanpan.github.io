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



function getViewSize(){
	var de=document.documentElement;
	var db=document.body;
	var viewW=de.clientWidth==0 ?  db.clientWidth : de.clientWidth;
	var viewH=de.clientHeight==0 ?  db.clientHeight : de.clientHeight;
	return Array(viewW ,viewH);
};

$(function(){
   goTop('#go-top');
});
