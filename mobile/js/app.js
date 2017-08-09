$(function () {
    $('.fbBtn').on('click', function () {
        // console.log('share fb');
//        var share_u = 'http://goright.jpm-event.tw/0812Test/game/mobile/game.html';
                var share_u = 'https://www.jpmorganam.com.tw/event/2016GI/index.html';
        window.open('http://m.facebook.com/sharer.php?u=' + encodeURIComponent(share_u), 'sharer', 'toolbar=0,status=0,width=656,height=436');
        gaclick('bar_fb_share');
    })
    $('.line').on('click', function () {
        gaclick('bar_line_share');
    })
    $('#menu').click(function () {
        $(this).toggleClass("turn");
    });
    //影片設定==========================================================
    /*var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);*/
    var player;

    function onYouTubeIframeAPIReady() {
        if (YT.Player) {
            player = new YT.Player('player', {
                height: '100%'
                , width: '100%'
                , videoId: 'cVP0gRkiVrs'
            });
        }
        else {
            setTimeout(onYouTubeIframeAPIReady, 1000);
        }
    }
    onYouTubeIframeAPIReady();

    function stopVideo() {
        player.stopVideo();
    }
    $('.mv').on('click', function () {
        gaclick('view');
        $('.tvcPop').css("display", "block");
        player.playVideo();
        // $('.filmblock').html('<iframe id="ytplayer" type="text/html" width="100%" height="100%" src="https://www.youtube.com/embed/cVP0gRkiVrs?autoplay=1&autohide=1" frameborder="0" allowfullscreen></iframe>');  
    });
    $('.tvcPop .black, .closeBtn').on('click', function () {
        $('.tvcPop').css('display', 'none');
        // $('.filmblock').html('');
        player.stopVideo();
    })
    
    
//    $('.Logo_btn').on('click', function () {
//        trackWaitJump('bar_index_back', '../../pages/index.html');
//    })
//    $('.open .game_btn_m').on('click', function () {
//        trackWaitJump('bar_game', '../../pages/index.html');
//    })
//    $('.open .btnFill').on('click', function () {
//        trackWaitJump('bar_fill', '../../pages/mobile/fill.html');
//    })
//    $('.open .btn1').on('click', function () {
//        trackWaitJump('index_back', 'index.html');
//    })
//    $('.open .btn2').on('click', function () {
//        trackWaitJump('bar_invest', '../../pages/mobile/page1.html');
//    })
//    $('.open .btn3').on('click', function () {
//        trackWaitJump('bar_reward', '../../pages/mobile/page2.html');
//    })
//    $('.open .btn4').on('click', function () {
//        trackWaitJump('bar_stable', '../../pages/mobile/page3.html');
//    })
//    $('.open .btn5').on('click', function () {
//        trackWaitJump('bar_regular', '../../pages/mobile/page4.html');
//    })
//    $('.open .btn6').on('click', function () {
//        trackWaitJump('bar_group', '../../pages/mobile/page5.html');
//    })
//    $('footer .btnFill').on('click', function () {
//        trackWaitJump('bar_fill', '../../pages/mobile/fill.html');
//    })
//    $('footer .game_btn_m').on('click', function () {
//        trackWaitJump('bar_game', '../../pages/index.html');
//    })
//    $('footer .btn1').on('click', function () {
//        trackWaitJump('index_back_1', 'index.html');
//    })
//    $('footer .btn2').on('click', function () {
//        trackWaitJump('bar_invest', '../../pages/mobile/page1.html');
//    })
//    $('footer .btn3').on('click', function () {
//        trackWaitJump('bar_reward', '../../pages/mobile/page2.html');
//    })
//    $('footer .btn4').on('click', function () {
//        trackWaitJump('bar_stable', '../../pages/mobile/page3.html');
//    })
//    $('footer .btn5').on('click', function () {
//        trackWaitJump('bar_regular', '../../pages/mobile/page4.html');
//    })
//    $('footer .btn6').on('click', function () {
//        trackWaitJump('bar_group', '../../pages/mobile/page5.html');
//    })
    
    $('.Logo_btn').on('click', function () {
        trackWaitJump('bar_index_back', 'https://www.jpmorganam.com.tw/event/2016GI/index.html');
    })
    $('.open .game_btn_m').on('click', function () {
        trackWaitJump('bar_game', 'https://www.jpmorganam.com.tw/event/2016GI/index.html');
    })
    $('.open .btnFill').on('click', function () {
        trackWaitJump('bar_fill', 'https://www.jpmorganam.com.tw/event/2016GI/mobile/fill.html');
    })
    $('.open .btn1').on('click', function () {
        trackWaitJump('index_back', 'https://www.jpmorganam.com.tw/event/2016GI/index.html');
    })
//    $('.open .btn2').on('click', function () {
//        trackWaitJump('bar_invest', 'https://www.jpmorganam.com.tw/event/2016GI/mobile/page1.html');
//    })
    $('.open .btn3').on('click', function () {
        trackWaitJump('bar_reward', 'https://www.jpmorganam.com.tw/event/2016GI/mobile/page2.html');
    })
    $('.open .btn4').on('click', function () {
        trackWaitJump('bar_stable', 'https://www.jpmorganam.com.tw/event/2016GI/mobile/page3.html');
    })
    $('.open .btn5').on('click', function () {
        trackWaitJump('bar_regular', 'https://www.jpmorganam.com.tw/event/2016GI/mobile/page4.html');
    })
    $('.open .btn6').on('click', function () {
        trackWaitJump('bar_group', 'https://www.jpmorganam.com.tw/event/2016GI/mobile/page5.html');
    })
    $('.open .btn7').on('click', function () {
        trackWaitJump('bar_good', 'https://www.jpmorganam.com.tw/event/2016GI/mobile/goodincome.html');
    })
    $('footer .btnFill').on('click', function () {
        trackWaitJump('bar_fill', 'https://www.jpmorganam.com.tw/event/2016GI/mobile/fill.html');
    })
    $('footer .game_btn_m').on('click', function () {
        trackWaitJump('bar_game', 'https://www.jpmorganam.com.tw/event/2016GI/');
    })
    $('footer .btn1').on('click', function () {
        trackWaitJump('index_back_1', 'https://www.jpmorganam.com.tw/event/2016GI/index.html');
    })
//    $('footer .btn2').on('click', function () {
//        trackWaitJump('bar_invest', 'https://www.jpmorganam.com.tw/event/2016GI/mobile/page1.html');
//    })
    $('footer .btn3').on('click', function () {
        trackWaitJump('bar_reward', 'https://www.jpmorganam.com.tw/event/2016GI/mobile/page2.html');
    })
    $('footer .btn4').on('click', function () {
        trackWaitJump('bar_stable', 'https://www.jpmorganam.com.tw/event/2016GI/mobile/page3.html');
    })
    $('footer .btn5').on('click', function () {
        trackWaitJump('bar_regular', 'https://www.jpmorganam.com.tw/event/2016GI/mobile/page4.html');
    })
    $('footer .btn6').on('click', function () {
        trackWaitJump('bar_group', 'https://www.jpmorganam.com.tw/event/2016GI/mobile/page5.html');
    })
    $('footer .btn7').on('click', function () {
        trackWaitJump('bar_good', 'https://www.jpmorganam.com.tw/event/2016GI/mobile/goodincome.html');
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
    $('.arrow').on('click', function () {
            $('body, html').animate({
                scrollTop: $('.in_02').offset().top
            }, 500);
            gaclick('more');
        })
        //檢查手持裝置是否橫向
    var checkOrientation = function () {
        var mode = Math.abs(window.orientation) == 90 ? 'landscape' : 'portrait';
        if (mode !== 'landscape') {
            $('.mobile').css('display', 'none');
        }
        else {
            $('.mobile').css('display', 'block');
        }
    };
    window.addEventListener("resize", checkOrientation, false);
    window.addEventListener("orientationchange", checkOrientation, false);
    checkOrientation();
})
window.onload = function () {
    var jw = $(window);
    jw.on('scroll', function () {
        var scrollHeight = jw.scrollTop();
        var headerH = 70;
        if (scrollHeight > headerH) {
            $('#menu').css({
                'position': 'fixed'
                , 'top': '0'
            });
        }
        else {
            $('#menu').css({
                'position': 'absolute'
                , 'top': '70px'
            });
        }
    })
}