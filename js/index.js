$(document).ready(function(){
    let m_o_top = $('.banner1').offset().top
    console.log(m_o_top)
    console.log($(window).scrollTop())
    $(window).scroll(function(){
        if(m_o_top <= $(window).scrollTop()) {
            $('.top_btn').css({
                display: 'block'
            })
        }
        else {
            $('.top_btn').css({
                display: 'none'
            })
        }
    })
    $('.btn_part_total a').click(function(){
    // 태그의 기본 이벤트를 실행하지 않게 한다.
    // a태그의 경우 화면 다 지우고 새로 로드 하는걸 안하게 한다
    event.preventDefault(); 

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 1000)
})
})