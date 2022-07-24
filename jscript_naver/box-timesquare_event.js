// 네이버 box-timesquare/box-right2

$(function () {
	let boxTimesquare = '.box-right2 .box-timesquare ';
	let parentSelector = boxTimesquare+'.list-timesquare';
	let childSelector = boxTimesquare+'.item-timesquare';
	// 페이지가 이동하는 이벤트
	setInterval(() => {
		if($(childSelector).first().is(':animated') || $(boxTimesquare).is(':hover'))
				return;
		toLeftOrRight(parentSelector,childSelector,500,true);			
	}, 4000);
	// 선생님 풀이
	$(boxTimesquare+'.btn-nav').click(function (e) {
		e.preventDefault();
		if($(childSelector).first().is(':animated'))
			return;
		let isLeft = $(this).hasClass('btn-next');
		toLeftOrRight(parentSelector,childSelector,500,isLeft);
	})
/* <내가 푼거>
	// 이전 버튼을 누르면 이전 페이지로 이동하는 이벤트
	$(boxTimesquare+'.btn-prev').click(function (e) {
		e.preventDefault();
		toLeftOrRight(parentSelector,childSelector,500,false);
	})
	// 다음 버튼을 누르면 다음 페이지로 이동하는 이벤트
	$(boxTimesquare+'.btn-next').click(function (e) {
		e.preventDefault();
		toLeftOrRight(parentSelector,childSelector,500,true);
	})
*/
})

/** 
		 * 왼쪽 또는 오른쪽으로 rolling
		 * 
		 * @param {string} parentSelector 부모선택자
		 * @param {string} childSelector 자식 선택자
		 * @param {number} animateTime 애니메이션 실행시간
		 * @param {boolean} left면 true, 오른쪽이면 false
		 * @return {void} 없음 
**/
function toLeftOrRight(parentSelector,childSelector, animateTime, left) {
	let width = -$(childSelector).first().width() + 'px';
	if(left){ //true면 왼쪽으로 롤링
		$(childSelector).first().animate(
			{
				'margin-left' : width
			},
			animateTime,
			function(){
				$(this).detach()
							.removeAttr('style')
							.appendTo(parentSelector);
			}
		)
	}else{ //false면 오른쪽으로 롤링
		$(childSelector).last()
		.detach()
		.css('margin-left',width)
		.prependTo(parentSelector)
		.animate(
			{
				'margin-left' : '0px'
			},
			animateTime
		)				
	}	
}
