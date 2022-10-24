// Menu
$('#header .gnb ul li ul').hide();
$('#header .gnb>ul>li>a').mouseenter(function() {
    $(this).addClass('on');  
    $('#header .gnb ul li ul').stop().slideDown(500);    
});
$('#header .gnb>ul>li').mouseleave(function() {
    $('#header .gnb>ul>li>a').removeClass('on');
    $('#header .gnb ul li ul').stop().slideUp(300);
}); 

// Slider
var imgs = $('#slider > ul > li').length -1;
var h = $('#slider > ul > li').height();
var now = 0;
setInterval(function() {
    now = (now == imgs) ? 0 : now + 1;
    $('#slider > ul').animate({
        top : -(h * now)
    });
}, 2500);

// 가로 슬라이드
// var imgs = $('#slider > ul > li').length -1;
// var w = $('#slider > ul > li').width();
// var now = 0;
// setInterval(function() {
//     now = (now == imgs) ? 0 : now + 1;
//     $('#slider > ul').animate({
//         left : -(w * now)
//     });
// }, 2500);

// Tab Menu
$('.news .gallery').hide();
$('.news .title').click(function() {
    $(this).addClass('on')
        .siblings('.title').removeClass('on');
    $(this).next('ul').show()
        .siblings('ul').hide();
});

// Popup
$('.bg, .popup').hide();
$('.notice .active').click(function(e) {
    e.preventDefault();
    $('.bg, .popup').fadeIn(500);
});
$('.close').click(function() {
    $('.bg, .popup').fadeOut(300);
});