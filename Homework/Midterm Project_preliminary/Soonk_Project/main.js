window.addEventListener('DOMContentLoaded',function(){
    document.createElement('h1')
    $('h1').html('Enter')
    $('h1').css({
        position:'absolute',
        left:'70%',
        top:'45%',        
    })
    
})

$('.underline').fadeIn(1500).css({
    position:'absolute',
    left:'30%',
    top:'45%'
})


$('h1').click(function(){
    $('.entryimg').fadeIn(3000)
    $(this).hide()
    $('.underline').hide()
})

$( ".entryimg" ).click(function(){
    $(this).fadeOut(1000,function(){
        console.log('fadeout')})

    $('.sidebar').animate({
        backgroundColor: "#aa0000",
        color: "#fff",
        width: 175
      }, 1000 );
    $('li').fadeIn(1200,function(){console.log('fadein')})
    $('ul').fadeIn(1200,function(){console.log('fadein')})
    })

$('li').hover(
    function(){
        $(this).append( $("<span>&#x025AE</span>"));
        $(this).css({
            color:'grey'
        })
    },function(){
        $(this).find("span").last().remove();
        $(this).css({
            color:'white'
        })
    }
)
$('li').click(function(){
    $('.roomimg').fadeIn(500,function(){
        console.log('roomshows')
    })
})