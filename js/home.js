var porkerCount = 0;
var porkerImgs = ["F01.png", "F02.png", "F03.png", "F05.png", "F06.png", "F07.png", "F08.png", "F09.png", "F10.png"];

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

	if(useragent.toLowerCase().indexOf('ipad') != -1 || useragent.toLowerCase().indexOf('ipod') != -1){
		$(".poker_index").css('height', '200px');
		$(".poker_index").css('margin-top', '-1.5%');
		$(".poker_index").css('margin-bottom', '1%');
	}else{
		$(".poker_index").css('height', '235px');
		$(".poker_index").css('margin-top', '-3%');
		$(".poker_index").css('margin-bottom', '3%');
	}
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
	setTimeout("$('#card1').flip(true);", 750);
	if($(window).height() > 687){
		$('.sectionfix').css('height',$('.sectionfix').height() - 80 + 'px');
	}
});