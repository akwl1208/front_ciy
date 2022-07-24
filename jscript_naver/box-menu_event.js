// 네이버 box-menu/menu-con
$(function () {
	let boxMenu = '.menu-con .box-menu ';
	$(boxMenu+'.btn-more').click(function () {
		/* 더보기 버튼을 클릭하면 접기 버튼이 나타나고, 전체 서비스 보기 버튼과
			서비스 박스가 나타나는 이벤트.
			접기 버튼을 클릭하면 더보기 버튼이 나타나고 전체 서비스 보기와 서비스 박스가 사라짐*/
		$(this).toggleClass('fold');
		$(boxMenu+'.btn-area').toggleClass('fold');
		$('.menu-con .service-con').toggleClass('fold');
	})


})