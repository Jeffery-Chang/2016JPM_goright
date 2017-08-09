$(function () {
    $('#menu').click(function () {
        $(this).toggleClass("turn");
    });
})
window.onload = function () {
    //讀取網址帶的參數
    var paValue = function (par) {
        //參數字串
        var PA = location.search.split("?");
        var pas = (PA[1]) ? PA[1] : "";
        if (pas == '' || par == '') {
            return "";
        }
        pasArr = pas.split("&");
        for (var i = 0; i < pasArr.length; i++) {
            var nowVal = pasArr[i].split("=");
            if (nowVal[0] == par && nowVal[1]) {
                return decodeURI(pasArr[i].split("=")[1]);
            }
        }
        return "";
    }
    if (paValue('page') == '2') {
        $('body, html').animate({
            scrollTop: $('.page3').offset().top - 110
        }, 500);
        $('.btn1').removeClass('current');
        $('.btn2').addClass('current');
    }
    else if (paValue('page') == '1') {
        $('.btn2').removeClass('current');
        $('.btn1').addClass('current');
    }
    
    
//    $('.btnLogo').on('click', function () {
//        trackWaitJump('bar_index_back', '../pages/index.html');
//    })
//    $('.btnGame').on('click', function () {
//        trackWaitJump('bar_game', '../pages/index.html');
//    })
//     $('.btnFill').on('click', function () {
//        trackWaitJump('bar_fill', '../pages/fill.html');
//    })
//    $('.btn1').on('click', function () {
//        trackWaitJump('index_back', '../pages/index.html?page=1');
//    })
//    $('.btn2').on('click', function () {
//        if (paValue('page') == '2') {
//            return;
//        }
//        trackWaitJump('bar_invest', '../pages/index.html?page=2');
//    })
//    $('.btn3').on('click', function () {
//        trackWaitJump('bar_reward', '../pages/pursue.html');
//    })
//    $('.btn4').on('click', function () {
//        trackWaitJump('bar_stable', '../pages/stable.html');
//    })
//    $('.btn5').on('click', function () {
//        trackWaitJump('bar_regular', '../pages/regular.html');
//    })
//    $('.btn6').on('click', function () {
//        trackWaitJump('bar_group', '../pages/multiple.html');
//    })
    //0812 Morgan Test
    $('.btnLogo').on('click', function () {
        trackWaitJump('bar_index_back', 'https://www.jpmorganam.com.tw/event/2016GI/');
    })
    $('.btnGame').on('click', function () {
        trackWaitJump('bar_game', 'https://www.jpmorganam.com.tw/event/2016GI/');
    })
     $('.btnFill').on('click', function () {
        trackWaitJump('bar_fill', 'https://www.jpmorganam.com.tw/event/2016GI/fill.html');
    })
    $('.btn1').on('click', function () {
        trackWaitJump('index_back', 'https://www.jpmorganam.com.tw/event/2016GI/index.html?page=1');
    })
    $('.btn2').on('click', function () {
        if (paValue('page') == '2') {
            return;
        }
        trackWaitJump('bar_invest', 'https://www.jpmorganam.com.tw/event/2016GI/index.html?page=2');
    })
    $('.btn3').on('click', function () {
        trackWaitJump('bar_reward', 'https://www.jpmorganam.com.tw/event/2016GI/pursue.html');
    })
    $('.btn4').on('click', function () {
        trackWaitJump('bar_stable', 'https://www.jpmorganam.com.tw/event/2016GI/stable.html');
    })
    $('.btn5').on('click', function () {
        trackWaitJump('bar_regular', 'https://www.jpmorganam.com.tw/event/2016GI/regular.html');
    })
    $('.btn6').on('click', function () {
        trackWaitJump('bar_group', 'https://www.jpmorganam.com.tw/event/2016GI/multiple.html');
    })
    $('.btn7').on('click', function () {
        trackWaitJump('bar_good', 'https://www.jpmorganam.com.tw/event/2016GI/goodincome.html');
    })
    
    
    
    
    
    
    
    $('.fb').on('click', function () {
        // console.log('share fb');
        
//        var share_u = 'http://goright.jpm-event.tw/0812Test/game/mobile/game.html';
        var share_u = 'https://www.jpmorganam.com.tw/event/2016GI/index.html';
        window.open('http://www.facebook.com/sharer/sharer.php?s=100&p[url]=' + encodeURIComponent(share_u), 'sharer', 'toolbar=0,status=0,width=656,height=436');
        gaclick('bar_fb_share');
    })
    $('.play').on('click', function () {
        gaclick('view');
        $('.tvcPop').css("display", "block");
        $('.filmblock').html('<iframe id="ytplayer" type="text/html" width="100%" height="100%" src="https://www.youtube.com/embed/cVP0gRkiVrs?autoplay=1&autohide=1" frameborder="0" />');
        // brightcove.createExperiences();
    })
    $('.tvcPop .black, .tvcPop .closeBtn').on('click', function () {
        $('.tvcPop').css('display', 'none');
        $('.filmblock').html('');
    })
    $('.more1').on('click', function () {
        gaclick('member_r1');
    })
    $('.line1').on('click', function () {
        gaclick('line_r1');
    })
    $('.more2').on('click', function () {
        gaclick('member_s2');
    })
    $('.line2').on('click', function () {
        gaclick('line_s2');
    })
    $('.learnmore').on('click', function () {
        //        $('body, html').animate({
        //            scrollTop: $('.page2').offset().top - 60
        //        }, 500);
        $("#page2").css("margin-top", "70px");
        $("#page1").slideUp();
        gaclick('more');
    })
    $('.findanswer').on('click', function () {
        $('body, html').animate({
            scrollTop: $('.page3').offset().top - 110
        }, 500);
        gaclick('go');
    })
    var jw = $(window);
    if (isIndex) {
        jw.on('scroll', function () {
            var scrollHeight = jw.scrollTop();
            var tar = $('.page3').offset().top - 150;
            if (scrollHeight > tar) {
                $('.nav').slideDown();
                $('.btn1').removeClass('current');
                $('.btn2').addClass('current');
            }
            else {
                $('.nav').slideUp();
                $('.btn2').removeClass('current');
                $('.btn1').addClass('current');
            }
        })
    }
}