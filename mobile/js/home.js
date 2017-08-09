var porkerCount = 0;
var porkerImgs = ["mF01.png", "mF02.png", "mF03.png", "mF05.png", "mF06.png", "mF07.png", "mF08.png", "mF09.png", "mF10.png"];

function cardInit() {
	$("#card1").flip({
		trigger: 'manual'
	});
	$("#card2").flip({
		trigger: 'manual'
	});
	$("#card3").flip({
		trigger: 'manual'
	});

	$(".poker_index").css('height', '120px');
	
	$("#card1").on('flip:done', function () {
		$("#card2").flip('toggle');
	});
	$("#card2").on('flip:done', function () {
		$("#card3").flip('toggle');
	});
	$("#card3").on('flip:done', function () {
		if (porkerCount % 2 == 0) {
			setTimeout("RandomFront();$('#card1').flip('toggle');", 500);
		}
		else {
			setTimeout("RandomBack();$('#card1').flip('toggle');", 500);
		}
		porkerCount++;
	});
}

function getRandom(minNum, maxNum) {
	return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

function getRandomArray(minNum, maxNum, n) {
	var rdmArray = [n];
	for (var i = 0; i < n; i++) {
		var rdm = 0;
		do {
			var exist = false;
			rdm = getRandom(minNum, maxNum);
			if (rdmArray.indexOf(rdm) != -1) exist = true;
		} while (exist); 
		rdmArray[i] = rdm;
	}
	return rdmArray;
}

function RandomFront() {
	var numberPorker = getRandomArray(0, 8, 4);
	for (i = 1; i <= 3; i++) {
		$("#cardFront" + i).attr('src', 'img/game/card/' + porkerImgs[numberPorker[i]]);
	}
}

function RandomBack() {
	var numberPorker = getRandomArray(0, 8, 4);
	for (i = 1; i <= 3; i++) {
		$("#cardBack" + i).attr('src', 'img/game/card/' + porkerImgs[numberPorker[i]]);
	}
}

$(window).load(function() {
	RandomFront();
	cardInit();
	setTimeout("$('#card1').flip(true);", 500);
	$('.sectionfix').eq(2).css({'height': $('.section').eq(2).height()+100+'px' });
	$('.sectionfix .fp-tableCell').eq(2).css({'height': $('.section').eq(2).height()+100+'px' });
});