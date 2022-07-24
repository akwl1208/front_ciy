// 네이버 box-menu/menu-con
$(function () {
	let boxMenu = '.menu-con .box-menu ';
	$(boxMenu+'.btn-more').click(function () {
		// 더보기 버튼을 클릭하면 fold 클래스를 추가하고 빼고 하는 이벤트
		$(this).toggleClass('fold');
	})
})