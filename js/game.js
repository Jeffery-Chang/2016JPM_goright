var Game	 = {};
var Second	 = 6;
var flag	 = 0;
var pass_fg	 = false;
var play_fg  = false;
var pop_fg;

function StartGame(){
	Game.deck = [
		'backAA', 'backAQ',
		'back2A', 'back2Q',
		'back3A', 'back3Q',
		'back4A', 'back4Q',
		'back5A', 'back5Q'
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

	for(var i=0; i<9; i++){
		$('.PokerCard:first-child').clone().appendTo('#cards');
	}
	
	$('#cards').children().each(function(index){
		$(this).animate({
			"left": ($(this).width()+20) * (index%5),
			"top" : ($(this).height()+20) * Math.floor(index/5)
		});

		var pattern = Game.deck.pop();
		var front_bg = Game.front.pop();
		
		$(this).find('.PokerFront').addClass(front_bg);
		$(this).find('.PokerBack').addClass(pattern);
		$(this).children('.PokerBack').attr('data-pattern', pattern);
	});
}

function clickCard(){
	$(this).addClass('PokerFlipped once');
	if($('.PokerFlipped.once').size() == 2){
		$('.PokerCard:not(.PokerFlipped once)').unbind('click');
		setTimeout(checkPattern, 500);
	}
}

function checkPattern(){
	pop_fg = '';
	if(isMatch()){
		$('.PokerFlipped.once').removeClass('once').addClass('PokerRemoved').unbind('click');
		GetScore('+',20);
		flag = 0;
		
		if(pop_fg == 2 && 1==2){
			$('#pop1').fadeIn('fast');
		}
		if(pop_fg == 3 && 1==2){
			$('#pop2').fadeIn('fast');
		}
		
		if($('.PokerRemoved').size() == 10){
			EndGame();
		}
	}else{
		$('.PokerFlipped.once').removeClass('PokerFlipped once');
		GetScore('-',5);
	}
	$('.PokerCard:not(.PokerRemoved)').bind('click',clickCard);
}

function isMatch(){
	var flippedCards = $('.PokerFlipped.once').children('.PokerBack');
	var pattern0 = $(flippedCards[0]).data('pattern').slice(4,5);
	var pattern1 = $(flippedCards[1]).data('pattern').slice(4,5);
	
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

	var addtimes=	0; 
	score		=	oldscore; 
	
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
		},(25));
        $('.play_again').click(function() {
            clearInterval(clear);
        });
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

function EndGame(){
	clearTimeout(countid);
	flag = 1;

	pass_fg = true;
	
	changePage();
}

function changePage(){
	//if(pass_fg && $('.IsawThis').size() == 2){
	if(pass_fg){
		setTimeout(function(){ 
			var EndScore = $("#score").text();
			if(EndScore >= 0 && EndScore <= 40){
				gapage('result_d');
				$('.award_wrap').eq(3).show().find('.score').html('<div class="finalscore" style="display:inline;">0</div><span class="percent">%</span>');
			}else if(EndScore >= 45 && EndScore <= 65){
				gapage('result_c');
				$('.award_wrap').eq(2).show().find('.score').html('<div class="finalscore" style="display:inline;">0</div><span class="percent">%</span>');
			}else if(EndScore >= 70 && EndScore <= 85){
				gapage('result_b');
				$('.award_wrap').eq(1).show().find('.score').html('<div class="finalscore" style="display:inline;">0</div><span class="percent">%</span>');
			}else if(EndScore >= 90 && EndScore <= 100){
				gapage('result_a');
				$('.award_wrap').eq(0).show().find('.score').html('<div class="finalscore" style="display:inline;">0</div><span class="percent">%</span>');
			}
		
			$('#fullpage').fullpage.moveTo('3Page');
		}, 700);
	}
}

function countSecond(){　
	$('.circle p').text(Second);
	Second =  Second - 1;
	countid = setTimeout("countSecond();", 1000);
	flag = 1;
}

function restart(){
	if (flag == 0){
		countSecond();
	}
}

$(function(){		
	StartGame();
});