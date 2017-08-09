var times	 = 1;
var pass_fg	 = false;
var play_fg  = false;
var Game	 = {};
var countdownnumber = 4;
var pop_fg,countdownid, count;

Game.Ques = [
	'backAQ', 'back2Q',
	'back3Q', 'back4Q',
	'back5Q'
];

Game.Ques.sort(function(){
	return 0.5 - Math.random();
});

function StartGame(){	
	Game.deck = [
		'backAA', 'back2A',
		'back3A', 'back4A',
		'back5A'
	];
	Game.front = [
		'b0', 'b1',
		'b2', 'b3',
		'b4', 'b5',
		'b6', 'b7',
		'b8', 'b9'
	];

	Game.deck.sort(function(){
		return 0.5 - Math.random();
	});	
	Game.front.sort(function(){
		return 0.5 - Math.random();
	});

	for(var i=0; i<5; i++){
		$('.PokerCard:first-child').clone().appendTo('#cards');
	}

	$('#cards').children().each(function(index){
		$(this).animate({
			"left": ($(this).width()+10) * (index%3),
			"top" : ($(this).height()+10) * Math.floor(index/3)
		});
		
		var quotes = Game.Ques;
		var front_bg = Game.front.pop();
		
		
		if(index == 0){
			$(this).addClass('Question');
            $(this).find('.PokerFront').addClass('Q');
			$(this).find('.PokerBack').addClass(quotes[times-1]);
			$(this).children('.PokerBack').attr('data-pattern', quotes[times-1]);
		}else{
			var pattern = Game.deck.pop();
            $(this).find('.PokerFront').addClass(front_bg);
			$(this).find('.PokerBack').addClass(pattern);
			$(this).children('.PokerBack').attr('data-pattern', pattern);
		}
	});	
	
	if(times != 1){
		setTimeout(function(){ 
			initial();
		}, 750);
	}
}

function clickCard(){
	$('.PokerCard').unbind('click');
	$(this).addClass('PokerFlipped once Answer');
	setTimeout(checkPattern, 500);
}

function checkPattern(){
	pop_fg = '';
	if(isMatch()){

		$('.PokerFlipped.once').removeClass('once')
		$('.PokerCard').unbind('click');
		
		GetScore('+',20);
		
		if(pop_fg == 2 && 1==2){
			$('#pop1').fadeIn('fast');
		}else if(pop_fg == 3  && 1==2){
			$('#pop2').fadeIn('fast');
		}else{
			setTimeout(function(){ 
				NextGame();
			}, 2000);
		}
	}else{
		GetScore('-',5);
		
		$('.PokerFlipped.once:not(.Question)').removeClass('PokerFlipped once Answer');
		$('.PokerCard:not(.Answer)').bind('click',clickCard);
	}
}

function isMatch(){
	var pattern0 = $('.PokerFlipped.once.Question').children('.PokerBack').data('pattern').slice(4,5);
	var pattern1 = $('.PokerFlipped.once.Answer').children('.PokerBack').data('pattern').slice(4,5);
	
	if(!play_fg){
		gapage('game_ing');
		play_fg = true;
	}
	
	if(pattern0 == pattern1){
		if(pattern0 == 2){
			pop_fg = 2;
		}
		if(pattern0 == 3){
			pop_fg = 3;
		}
	}

	return (pattern0 == pattern1);
}

function GetScore(type,num){
	var score		= '';
	var msg_str		= type;
	var oldscore	= parseInt($('#score').text());

	var a_num	=	num;
	var score	=	oldscore; 
	var addtimes=	0; 
	
	if(type == '+'){
		$('.gain').show();
		setTimeout(function(){ 
			$('.gain').hide();
		}, 800);
		var clear	= setInterval(function(){
			$("#score").text(score);
			if(score < (oldscore + num)){
				score = score + getAddNum(num,addtimes);
				addtimes++;
			}else{
				clearInterval(clear);
			}
		},(25));
	}else if(type == '-'){
		if(score > (oldscore - num) && oldscore > 0 && (oldscore - num >= 0)){
			$('.lose').show();
			setTimeout(function(){ 
				$('.lose').hide();
			}, 800);
		}
		var clear	= setInterval(function(){
			$("#score").text(score);
			if(score > (oldscore - num) && oldscore > 0 && (oldscore - num >= 0)){
				score = score - getAddNum(num,addtimes);
				addtimes++;
			}else{
				clearInterval(clear);
			}
		},(25));
	}else{
		num		 = parseInt($('#score').text());
		oldscore = parseInt($('.finalscore').text());
		score	 = oldscore;
		var clear	= setInterval(function(){
			$(".finalscore").text(score);
			if(score < (oldscore + num)){
				score = score + getAddNum(num,addtimes);
				addtimes++;
			}else{
				clearInterval(clear);
			}
		},(20));
	}
}

function getAddNum(num,n){
	var len = num.toString().length;
	var sp  = 1; 
	if(len > 2){
		var J = 0;
		for(J = 0 ;J < (len - 2); J++){
			sp += "1";
		}
		sp = sp * 1;

		var v = parseInt(num / sp); 
		if(n < v){
			return sp; 
		}else{
			return (num - v * sp);
		}			
	} 
	return sp;
}

function NextGame(){
	times ++;
	if(times <= 5){
		//if(window.location.search.indexOf("test") > 0 || 1==1){
			$('.PokerCard').removeClass('PokerFlipped');
			$('.PokerCard').unbind('click');

			setTimeout(function(){ 
				$('#cards').find('.Question').each(function(index){
					var front_cnt = Math.floor(Math.random() * 10 + 1);
					var quotes = Game.Ques;
					
					$(this).find('div').eq(1).remove();
					$(this).append('<div class="face PokerBack"></div>');
					$(this).find('.PokerBack').addClass(quotes[times-1]);
					$(this).children('.PokerBack').attr('data-pattern', quotes[times-1]);
				});	
				
				$('.PokerCard.Answer').removeClass('Answer');
				
				setTimeout(function(){ 
					$('.PokerCard.Question').addClass('PokerFlipped once');
					$('.PokerCard:not(.Question)').bind('click',clickCard);
				}, 200);
			}, 400);
		/*}else{
			$('.PokerCard').removeClass('PokerFlipped');
			setTimeout(function(){ 
				$('.PokerCard').css({
					"left": 0,
					"top" : 0
				});
				
				setTimeout(function(){ 
					$('#cards').empty().append('<div class="PokerCard"><div class="face PokerFront"></div><div class="face PokerBack"></div></div>');
					setTimeout(function(){ 
						StartGame();
					}, 200);
				}, 400);
			}, 200);
		}*/
	}else{
		pass_fg = true;
		changePage();
	}
}

function changePage(){
	if(pass_fg){
		setTimeout(function(){ 
			var EndScore = $("#score").text();
			if(EndScore >= 0 && EndScore <= 20){
				gapage('result_d');
				$('.award_wrap').eq(3).show().find('.score').html('<div class="finalscore" style="display:inline;">0</div><span class="percent">%</span>');
			}else if(EndScore >= 25 && EndScore <= 75){
				gapage('result_c');
				$('.award_wrap').eq(2).show().find('.score').html('<div class="finalscore" style="display:inline;">0</div><span class="percent">%</span>');
			}else if(EndScore >= 80 && EndScore <= 95){
				gapage('result_b');
				$('.award_wrap').eq(1).show().find('.score').html('<div class="finalscore" style="display:inline;">0</div><span class="percent">%</span>');
			}else if(EndScore == 100){
				gapage('result_a');
				$('.award_wrap').eq(0).show().find('.score').html('<div class="finalscore" style="display:inline;">0</div><span class="percent">%</span>');
			}
			
			if(again_fg){
				$('.sectionfix').eq(2).css({'height': $('.section').eq(2).height()+100+'px' });
			}
			
			setTimeout(function(){ 
				$('#fullpage').fullpage.moveTo('3Page');
				setTimeout(function(){ 
					$('#footer2').hide();
					$('#footer3').show();
				}, 400);
			}, 200);
		}, 500);
	}else{
		setTimeout(function(){ 
			NextGame();
		}, 250);
	}
}

function initial(){
	//$('.PokerCard:not(.Question)').addClass('PokerFlipped once');
	countdownid = window.setInterval(countdownfunc,1000);
}

function countdownfunc(){ 
	if (countdownnumber == 0){
		clearInterval(countdownid);

		$('.PokerCard:not(.Question)').removeClass('PokerFlipped once').bind('click',clickCard);
        $('.PokerCard.Question').addClass('PokerFlipped once');
		countdownnumber = 1;
	}
	countdownnumber--;
}