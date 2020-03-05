window.addEventListener('DOMContentLoaded', function () {

    // loadData();

    attachEvent();

});

attachEvent = ()=>{
    $("#search-button").click(()=>{
        loadData();

        $("#dogname").val("");

    })

    $("#dogname").keypress((e)=>{

        if(e.keyCode ==13){
            loadData();

            $("#dogname").val("");

        }

    })
}


loadData = ()=>{

    let dogname = $("#dogname").val();
    console.log(dogname)

$.getJSON("https://dog.ceo/api/breed/"+dogname+"/images/random/3" , 
(data)=>{

    console.log(data);
    let dogsrc = data.message[0];

    //K * 9/5 -459.67
    // $(".temp").append(temp.toFixed(2) * 9/5 - 459.67);


    //$(".temp").html(Math.floor(temp * 9/5 - 459.67) + " " + "°F");
    $(".dogimg").attr("src", dogsrc);
})}
