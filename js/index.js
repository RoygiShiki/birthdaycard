$(function(){
    $('.card').click(function(e){
        // $('ul li').removeClass('active');
        event.stopPropagation();
        $('.card').addClass('active');
        console.log('yeah111');
    })

    $('html').click(function(){
        // $(this).addClass('active');
        console.log('yeah222');
        $('.card').removeClass('active');
    })
})