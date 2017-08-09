var again_fg = false;
$(function() {
	var current_url = 'http://' + window.location.host;	
	var appID		= '1175840809140814';
	var title		= '';
	var description	= '你的投資勝率比我高嗎?記下專家「配對」好的投資祕訣，讓好收益成雙又成對!';
	var redirect_uri= 'https://www.jpmorganam.com.tw/event/2016GI/mobile/fill.html';
	var link		= 'https://www.jpmorganam.com.tw/event/2016GI/mobile/index.html?form=FB_back';
	var picture		= '';
	
	$('.share_fb').click(function() {	
		var EndScore = $("#score").text();

		picture		= current_url+'/mobile/img/share/share_fb'+EndScore+'.jpg';
		
		if(EndScore >= 0 && EndScore <= 20){
			title		= '投資勝率'+EndScore+'%，原來零經驗也能致富！';
			gaclick('result_share_d');
		}else if(EndScore >= 25 && EndScore <= 75){
			title		= '投資勝率'+EndScore+'%，加速收成更神準！';
			gaclick('result_share_c');
		}else if(EndScore >= 80 && EndScore <= 95){
			title		= '投資勝率'+EndScore+'%，收成超穩健！';
			gaclick('result_share_b');
		}else if(EndScore == 100){
			title		= '投資勝率'+EndScore+'%，絕對收成不是夢！';
			gaclick('result_share_a');
		}
		
		var share_fb = 'https://www.facebook.com/dialog/feed?' +
			"app_id=" + appID +
			"&display=popup&caption=" +
			"&link=" + encodeURIComponent(link) +
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
            
			Game.Ques.sort(function(){
				return 0.5 - Math.random();
			});
			
			again_fg = true;
			pass_fg = false;
			times = 1;
			countdownnumber = 4;

			$('.finalscore').html(0);
			$('#score').html(0);
            $('.award_wrap').fadeOut('normal');
            
            $('#cards').empty().append('<div class="PokerCard"><div class="face PokerFront"></div><div class="face PokerBack"></div></div>');
            StartGame();
            
			var EndScore = $("#score").text();
			if(EndScore >= 0 && EndScore <= 20){
				gaclick('result_re_d');
			}else if(EndScore >= 25 && EndScore <= 75){
				gaclick('result_re_c');
			}else if(EndScore >= 80 && EndScore <= 95){
				gaclick('result_re_b');
			}else if(EndScore == 100){
				gaclick('result_re_a');
			}

			setTimeout(function(){ 
				$('#fullpage').fullpage.moveTo('2Page');
			}, 350);
		}
	});
});