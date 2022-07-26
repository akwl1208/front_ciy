// 내가 푼거
// 네이버 box-theme-body/box-left4
$(function () {
	let boxThemeBody = '.box-left4 .box-theme-body ';
	$(boxThemeBody+'.item-theme').click(function(e) {
		e.preventDefault();
		// btn-theme를 클릭하면 지정된 바탕색으로 바뀌는 이벤트
		$(boxThemeBody+'.btn-theme').removeClass('active');
		$(this).children().addClass('active');
		// 첫번째 요소와 마지막 요소일 때 prev 버튼과 next 버튼 표시 이벤트
		let index = $(this).index();
		if(index == 0){  //if($(this).is(:first-child))
			$(boxThemeBody+'.btn-prev').hide();
		}else if(index == 9){
			$(boxThemeBody+'.btn-next').hide();
		}else{
			$(boxThemeBody+'.btn-prev').show();
			$(boxThemeBody+'.btn-next').show();
		}
		$('.content-con .box-left4 .box-theme-con .box').removeClass('select');
		$('.content-con .box-left4 .box-theme-con .box').eq($(this).index()).addClass('select');
	})
	// btn-prev를 클릭하면 active 클래스가 있는 이전 btn-theme가 선택되는 이벤트
	$(boxThemeBody+'.btn-prev').click(function (e) {
		e.preventDefault();
		let me = $(boxThemeBody+'.btn-theme.active');
		let parent = me.parent();
		let parentPrev = parent.prev();
		parentPrev.children().click();
		// btn-prev를 클릭했을 때 2번째 요소면 페이지 움직이기
		if(parent.index() == 2){
			$(boxThemeBody+'.list-theme').animate({'margin-left': '0px'},1000);
		}
	})
	
	$('.box-left4 .box-theme-body .btn-next').click(function (e) {
		e.preventDefault();
		// btn-next를 클릭하면 active 클래스가 있는 다음 btn-theme가 선택되는 이벤트
		let me = $('.box-left4 .box-theme-body .btn-theme.active');
		let parent = me.parent();
		let parentNext = parent.next();
		parentNext.children().click();
		// btn-next를 클릭했을 때 7번째 요소면 페이지 움직이기
		if(parent.index() == 7){
			$('.box-left4 .box-theme-body .list-theme').animate({'margin-left': '-186px'},1000);
		}
		
	})
	// 첫번째 요소 클릭
	$('.box-left4 .box-theme-body .item-theme').first().click();
})