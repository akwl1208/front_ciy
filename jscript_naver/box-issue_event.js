// 네이버 box-issue/box-left2
// 내가 푼거
$(function(){
	setInterval(() => {
		let boxIssue = '.box-left2 .box-issue '
		let height = -$(boxIssue+'.item-issue').first().height() + 'px';
		if($(boxIssue+'.item-issue').first().is(':animated') || $('.box-issue').is(':hover'))
			return;
		$(boxIssue+'.item-issue').first().animate(
		{
			'margin-top' : height
		},
		500,
		function(){
			$(this).detach()
						.removeAttr('style')
						.appendTo(boxIssue+'.list-issue');
		}
	)			
	}, 3000);	
})

// 선생님 풀이
/*
$(function(){
	let boxIssue = '.box-left2 .box-issue '
	let parentSelector = boxIssue+'.list-issue';
	let childSelector = boxIssue+'.item-issue'
	setInterval(() => {
		if($(childSelector).first().is(':animated') || $(parentSelector).is(':hover'))
			return;
		toUp(parentSelector,childSelector,500);
	}, 3000);	
})
*/

/** 함수 만들었을 때 해당 함수에 매개변수 타입을 지정할 때
		 * 위로 rolling
		 * 
		 * @param {string} parentSelector 부모선택자
		 * @param {string} childSelector 자식 선택자
		 * @param {number} animateTime 애니메이션 실행시간
		 * @return {void} 없음
		 * 
**/
	
	function toUp(parentSelector,childSelector, animateTime){
		let height = -$(childSelector).first().height() + 'px';
		$(childSelector).first().animate(
			{
				'margin-top' : height
			},
			animateTime,
			function(){
				$(this).detach()
							.removeAttr('style')
							.appendTo(parentSelector);
			}
		)	
}
