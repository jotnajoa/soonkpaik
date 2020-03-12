var getrmname;

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


$('.inputtext').keypress(function(e){
    if(e.code=='Enter'){
        addroom()
    }
})
$( ".entryimg" ).click(function(){
    $('canvas').width(750).height(750)
    
    $(this).toggle()
    $('.sidebar').animate({
        backgroundColor: "#aa0000",
        color: "#fff",
        width: 175
      }, 1000 );
    $('li').fadeIn(1200,function(){console.log('fadein')})
    $('ul').fadeIn(1200,function(){console.log('fadein')})
    $('.ulbox').css({
        display:'none'
    })
    })

$('ul').click(function(){
    $('#container').css({display:'block'})
})

$('li').hover(
    function(){
        
        $(this).css({
            color:'grey'
        })
    },function(){
        
        $(this).css({
            color:'white'
        })
    }
)
$('li').on('click',showplan)
$('.addButton').click(addroom)

function addroom(){
    let newroomName = $('.inputtext').val()
    console.log(newroomName)
    $('ul').append('<br><li>'+newroomName+'</li>')
    $('ul').css('display','block');
    $('li').css('display','block')

    $('li').hover(
        function(){
            
            $(this).css({
                color:'grey'
            })
        },function(){
            
            $(this).css({
                color:'white'
            })
        }
    )
    $('li').on('click',showplan)
    $("[class='dg ac']").remove()
    // $('ul').last().remove()
    // $('ul').last().remove()
    
}


function showplan(){
    getrmname=$(this).text()
    console.log(getrmname)
    
}

$('#livingroom').on('click',function(){
    $('.livingroom').fadeIn(1200,function(){console.log('fadein')})
    $('.livingroomf').fadeIn(1200,function(){console.log('fadein')})
    $('canvas').hide()
    $('.sidebar').animate({
        backgroundColor: "#aa0000",
        color: "#fff",
        width: 10
      }, 1000 );
    $('.inputtext').fadeOut(1200);
    $('.addButton').fadeOut(1200);
    $('#Table1').show()
    $('#Table2').show()
    $('#Table3').show()
    $('#builderlist').hide()
    $('.fsliderbar').css('display','block')

    $('.fslidebar').show()
    $('.fslidebar').animate({
        backgroundColor:'rgba(77, 90, 84, 0.795)',
        color: "#fff",
        width: 300
      }, 1000 );
    })


    
