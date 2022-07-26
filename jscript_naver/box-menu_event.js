// 네이버 box-menu/menu-con
$(function () {
	let boxMenu = '.menu-con .box-menu ';
	$(boxMenu+'.btn-more').click(function (e) {
		/* 더보기 버튼을 클릭하면 접기 버튼이 나타나고, 전체 서비스 보기 버튼과
			서비스 박스가 나타나는 이벤트.
			접기 버튼을 클릭하면 더보기 버튼이 나타나고 전체 서비스 보기와 서비스 박스가 사라짐*/
		e.preventDefault();
		$(this).toggleClass('fold');
		$(boxMenu+'.btn-area').toggle();
		$('.menu-con .service-con').toggle();
	})
	// 설정 버튼을 투르면
	$(boxMenu+'.btn-set').click(function(e){
		e.preventDefault();
		// 초기화 저장 버튼 보여주고
		$(boxMenu+'.box-btn1').hide();
		$(boxMenu+'.box-btn2').show();
		// 검은색 메뉴 사라지고 빈 박스 메뉴가 보여지고
		$(boxMenu+'.list-menu.favorite').hide();
		$(boxMenu+'.list-menu.empty').show();
		// 서비스 박스도 체크박스로 바뀐다
		$('.menu-con .service-con .box-service').addClass('display-none');
		$('.menu-con .service-con .box-service.check').removeClass('display-none');
	})

})