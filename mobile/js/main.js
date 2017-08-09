$(function() {
	
	var search = window.location.search;
	
	if(search.indexOf("FB_back") > 0){
		gaclick('FB_back');
	}
	
	$('#fullpage').fullpage({
		anchors			:	['1Page','2Page','3Page'],
		scrollOverflow: true,
		onLeave: function(index, nextIndex, direction){
			if(nextIndex == 1){
				$('header').show();
				setTimeout(function(){ 
					$('#menu').css({ 'position': 'absolute'}).animate({"top":"70px"});
				}, 200);
			}
			if(nextIndex == 2 || nextIndex == 3){
				$('header').hide();
				$('#menu').css({ 'position': 'fixed'}).animate({"top":"0px"});
			}
			if(nextIndex != 3){
				//$('.award_wrap').hide();
			}
		},
		afterLoad: function(anchorLink, index){
			if(anchorLink == '2Page' && !pass_fg){
				$('#footer2').show();
				$('#footer3').hide();   
                $('.tips2').delay(2000).fadeIn('slow',function(){
                    setTimeout(function(){ 
                        $('.PokerCard:not(.Question)').addClass('PokerFlipped once');
                        countdownnumber = 1;
                    }, 2000);
                });
			}
			if(anchorLink == '3Page' && pass_fg){
				GetScore('','');
			}
		}
	});
    
    $('#cards').empty().append('<div class="PokerCard"><div class="face PokerFront"></div><div class="face PokerBack"></div></div>');
    StartGame();

    $(".tips_btn").click(function() {
        gaclick('game_enter');
        $('.tips2').fadeOut('normal',function(){
            initial();
        });
    });
  
	$('#fullpage').fullpage.setAllowScrolling(false);
	
	$("#moblie_go").click(function() {
		gaclick('index_enter');
		gapage('game');
		$('#fullpage').fullpage.moveTo('2Page');
	});
    
	$(".award_btn").click(function() {
        location.href = 'https://www.jpmorganam.com.tw/event/2016GI/mobile/award.html';
	});
	
	$(".pop1").click(function() {
		$('#pop1').addClass('IsawThis').fadeOut('fast');
		
		changePage();
	});
	$(".pop2").click(function() {
		$('#pop2').addClass('IsawThis').fadeOut('fast');
		
		changePage();
	});
})

