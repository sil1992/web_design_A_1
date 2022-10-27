//Menu
$('#header .gnb ul li ul').hide();
//서브메뉴 숨기기
$('#header .gnb>ul>li>a').mouseenter(function() {
    $(this).addClass('on');
    //메인메뉴 리스트에 마우스를 올리면 미리 설정해둔 on클래스가 적용
    $('#header .gnb ul li ul').stop().slideDown(500);
}); //메인메뉴 리스트에 마우스를 올리면 서브메뉴가 등장(5초)
$('#header .gnb>ul>li').mouseleave(function() {
    $('#header .gnb>ul>li>a').removeClass('on');
    //메인메뉴 리스트에서 마우스를 떼면 on클래스 해지
    $('#header .gnb ul li ul').stop().slideUp(300);
    //메인메뉴 리스트에서 마우스를 떼면 서브메뉴가 사라짐(3초)
});

//Slider
var imgs = $('#slider > ul > li').length -1;
var h = $('#slider > ul > li').height();
var now = 0;
setInterval(function() {
    now = (now == imgs) ? 0 : now + 1;
    $('#slider > ul').animate({
        top : -(h * now)
    });
}, 2500);

//Tab Menu
$('.news .gallery').hide();
$('.news .title').click(function(){
    $(this).addClass('on')
        .siblings('.title').removeClass('on');
    $(this).next('ul').show()
        .siblings('ul').hide();
});

//Popup
$('.bg, .popup').hide();
$('.notice .active').click(function(e){
    e.preventDefault();
    $('.bg, .popup').fadeIn(500);
    //공지사항에 설정했던 .active를 클릭하면 배경과 팝업이 0.5초 속도로 보여짐
});
$('.close').click(function(){
    $('.bg, .popup').fadeOut(300);
    //팝업에 닫기버튼을 누르면 배경과 팝업이 0.3초 속도로 사라짐
});