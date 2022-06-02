$(document).ready(function(){
    $('.menu-icon-1').click(function(event){
        $('body').addClass('lock');
        $('.blur').css('display', 'block');
        $('.mobile_nav-bar').css('display', 'flex');
        setTimeout(function(){
            $('.mobile_nav-bar').css('right', '0');
          }, 100);
    });
    $('.navbar__close').click(function(event){
        $('body').removeClass('lock');
        $('.blur').css('display', 'none');
        $('.mobile_nav-bar').css('display', 'none');
        $('.mobile_nav-bar').css('right', '-320px');
        $('.features__mobile').removeClass('active');
        $('.company__mobile').removeClass('active');
    });
    $('.blur').click(function(event){
        $('body').removeClass('lock');
        $('.blur').css('display', 'none');
        $('.mobile_nav-bar').css('display', 'none');
        $('.mobile_nav-bar').css('right', '-320px');
        $('.features__mobile').removeClass('active');
        $('.company__mobile').removeClass('active');
    });
    $('#mobile_link_1').click(function(event){
        $('#mobile_link_1').toggleClass('active');
        $('.features__mobile').toggleClass('active');
    });
    $('#mobile_link_2').click(function(event){
        $('#mobile_link_2').toggleClass('active');
        $('.company__mobile').toggleClass('active');
    });
});