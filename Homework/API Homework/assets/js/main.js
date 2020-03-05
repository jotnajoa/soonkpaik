var clicknum =0;

window.addEventListener('DOMContentLoaded', function () {

    // loadData();

    attachEvent();

});

attachEvent = ()=>{
    $("#search-button").click(()=>{
        loadData();
        // $("#dogname").val("");

    })

    $("#dogname").keypress((e)=>{

        if(e.keyCode ==13){
            loadData();
            // $("#dogname").val("");
        }

    })
    

}


loadData = ()=>{
    clicknum ++;
    let dogname = $("#dogname").val();

$.getJSON("https://dog.ceo/api/breed/"+dogname+"/images" , 
(data)=>{
    $('#view').append('<img>')
    $('img').last().addClass('dogimg'+clicknum)
    $('img:nth-child('+clicknum+')').attr('src',data.message[clicknum])

})}

