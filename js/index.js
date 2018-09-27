$(function(){
    $('.card').click(function(e){
        event.stopPropagation();
        $('.card').addClass('active');
    })

    $('html').click(function(){
        $('.card').removeClass('active');
    })
})