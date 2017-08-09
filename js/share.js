$(function() {
	var current_url = 'http://' + window.location.host;	
	var appID		= '1175840809140814';
	var title		= '';
	var description	= '你的投資勝率比我高嗎?記下專家「配對」好的投資祕訣，讓好收益成雙又成對!';
	var redirect_uri= 'https://www.jpmorganam.com.tw/event/2016GI/fill.html';
	var link		= 'https://www.jpmorganam.com.tw/event/2016GI/index.html?form=FB_back';
	var picture		= '';
	
	$('.share_fb').click(function() {	
		var EndScore = $("#score").text();
		
		picture		= current_url+'/img/share/share_fb'+EndScore+'.jpg';

		if(EndScore >= 0 && EndScore <= 40){
			title		= '投資勝率'+EndScore+'%，原來零經驗也能致富！';	
            gaclick('result_share_d');
		}else if(EndScore >= 45 && EndScore <= 65){
			title		= '投資勝率'+EndScore+'%，加速收成更神準！';
            gaclick('result_share_c');
		}else if(EndScore >= 70 && EndScore <= 85){
			title		= '投資勝率'+EndScore+'%，收成超穩健！';
            gaclick('result_share_b');
		}else if(EndScore >= 90 && EndScore <= 100){
			title		= '投資勝率'+EndScore+'%，絕對收成不是夢！';
            gaclick('result_share_a');
		}
		
		var share_fb = 'https://www.facebook.com/dialog/feed?' +
			"app_id=" + appID +
			"&display=popup&caption=" +
			"&link=" + encodeURIComponent(link) +
			"&redirect_uri=" + 
			"&picture=" + encodeURIComponent(picture) +
			"&description=" + encodeURIComponent(description) +
			"&name=" + encodeURIComponent(title);
		window.open(share_fb, 'sharer');
		setTimeout(function(){ 
			location.href = redirect_uri;
		}, 200);
	});
	
	$('.play_again').click(function() {
		if(pass_fg){
            
			var EndScore = $("#score").text();
			if(EndScore >= 0 && EndScore <= 40){
				gaclick('result_re_d');
			}else if(EndScore >= 45 && EndScore <= 65){
				gaclick('result_re_c');
			}else if(EndScore >= 70 && EndScore <= 85){
				gaclick('result_re_b');
			}else if(EndScore >= 90 && EndScore <= 100){
				gaclick('result_re_a');
			}
            
			pass_fg = false;
			Second = 6;
			$('.finalscore').html(0);
			//$('.game_pop').removeClass('IsawThis');
			$('#score').html(0);
			$('#fullpage').fullpage.moveTo('2Page');
			$('.award_wrap').hide();
			$('#cards').empty().append('<div class="PokerCard"><div class="face PokerFront"></div><div class="face PokerBack"></div></div>');
			setTimeout(function(){ 
				StartGame();
			}, 750);
		}
	});
});