$(function() {
	
	var search = window.location.search;
	
	if(search.indexOf("FB_back") > 0){
		gaclick('FB_back');
	}
	
	$('#fullpage').fullpage({
		anchors			:	['1Page', '', '2Page', '', '3Page', ''],
		keyboardScrolling:	false,
		scrollOverflow: true,
		afterLoad: function(anchorLink, index){
			if(index == 3 && !pass_fg){
				$('.PokerCard').addClass('PokerFlipped once');
				
				countSecond();
				
				setTimeout(function(){ 
					clearTimeout(countid);
					
					if(Second == 0){
						$('.circle p').text('GO').delay(800).fadeOut('fast');
						setTimeout(function(){ 
							$('.circle p').fadeIn('fast').text(6);
						}, 1000);
					}
					
					$('.PokerFlipped.once').removeClass('PokerFlipped once').bind('click',clickCard); 
				}, 6000);
			}else if(anchorLink == '3Page' && pass_fg){
				GetScore('','');
			}
		}
	});
	
	$('#fullpage').fullpage.setAllowScrolling(false);
	
	$(".award_btn").click(function() {
        location.href = 'https://www.jpmorganam.com.tw/event/2016GI/award.html';
	});
    
	$("#pc_go").click(function() {
		gaclick('index_enter');
		gapage('game');
		$('#fullpage').fullpage.moveTo('2Page');
	});
	
	$(".pop1").click(function() {
		$('#pop1').addClass('IsawThis').fadeOut('fast');
		
		changePage();
	});
	$(".pop2").click(function() {
		$('#pop2').addClass('IsawThis').fadeOut('fast');
		
		changePage();
	});
});

