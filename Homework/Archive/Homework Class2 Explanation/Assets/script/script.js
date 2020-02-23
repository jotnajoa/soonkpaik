// console.log("Hello");


// let myArray = [
    
//     {
//     "name":"Sven",
//     "lastname":"Travis"
// },

//     {
//     "name":"John",
//     "lastname":"Sharp"
//     }
// ]

// console.log(myArray[0].name);


let data = [

    {
        "question": "What is your favorite booze",
        "answerA": "Sake",
        "answerB": "Beer"
    },

    {
        "question": "Do you like running",
        "answerA": "Hell no",
        "answerB": "Yeah"
    },

    {
        "question": "What is your major",
        "answerA": "Data visualization",
        "answerB": "Miscellaneous"
    },
    
    {
        "question": "Do you smoke?",
        "answerA": "I'm a chimney",
        "answerB": "No"
    },
    {
        "question": "Are you on a diet?",
        "answerA": "Always",
        "answerB": "Never"
    },
    {
        "question": "What time do you normally go to bed?",
        "answerA": "Between 1~2 AM",
        "answerB": "Before 12"
    },

];

console.log(data);

document.addEventListener("DOMContentLoaded",function(){
    questionset()
});

function questionset() {

    let questionnumber = 0;

    let questions = document.getElementsByClassName("question");
    // This part, Hard to think of.

    for(let i=0; i<data.length;i++){
        let query = document.createElement("span");
        // This part, Hard to think of.
        query.className = "title"
        query.innerText = data[i].question;

        let answer1 = document.createElement("button");
        answer1.className = "btn"
        answer1.id = data[i].answerA;
        answer1.innerText=data[i].answerA;

        let answer2 = document.createElement("button");
        answer2.className="btn"
        answer2.id =data[i].answerB;
        answer2.innerText=data[i].answerB;

        questions[questionnumber].appendChild(query);
        questions[questionnumber].appendChild(answer1);
        questions[questionnumber].appendChild(answer2);

        questionnumber ++;
    }

    let firstanswer = document.getElementById("Sake");

    firstanswer.addEventListener("click", function () {

        let background = document.getElementById("box");
        background.style.backgroundColor = "pink";

        let question2 = document.getElementById("question2");
        question2.style.display = "block";

        let question1 = document.getElementById("question1");
        question1.style.display = "none";
        
        let question3 = document.getElementById("question3");
        question3.style.display = "none";
        
        let question4 = document.getElementById("question4");
        question4.style.display = "none";

        let question5 = document.getElementById("question5");
        question5.style.display = "none";

        let question6 = document.getElementById("question6");
        question6.style.display = "none";

        let pickanswer = document.getElementById("pick_answer");
        pickanswer.style.display="block";
        pickanswer.innerText="You are very Soonk"
    
    })


    let firstwrong = document.getElementById("Beer");

    firstwrong.addEventListener("click", function () {

        let background = document.getElementById("box");
        background.style.backgroundColor = "pink";

        let question2 = document.getElementById("question2");
        question2.style.display = "block";

        let question1 = document.getElementById("question1");
        question1.style.display = "none";
        
        let question3 = document.getElementById("question3");
        question3.style.display = "none";
        
        let question4 = document.getElementById("question4");
        question4.style.display = "none";

        let question5 = document.getElementById("question5");
        question5.style.display = "none";

        let question6 = document.getElementById("question6");
        question6.style.display = "none";

        let pickanswer = document.getElementById("pick_answer");
        pickanswer.style.display="block";
        pickanswer.innerText="You are not Soonk"
})

let secondanswer = document.getElementById("Hell no");

    secondanswer.addEventListener("click", function () {

        let background = document.getElementById("box");
        background.style.backgroundColor = "pink";

        let question2 = document.getElementById("question2");
        question2.style.display = "none";

        let question1 = document.getElementById("question1");
        question1.style.display = "none";
        
        let question3 = document.getElementById("question3");
        question3.style.display = "block";
        
        let question4 = document.getElementById("question4");
        question4.style.display = "none";

        let question5 = document.getElementById("question5");
        question5.style.display = "none";

        let question6 = document.getElementById("question6");
        question6.style.display = "none";

        let pickanswer = document.getElementById("pick_answer");
        pickanswer.style.display="block";
        pickanswer.innerText="You are very Soonk"
    
    })


    let secondwrong = document.getElementById("Yeah");

    secondwrong.addEventListener("click", function () {

        let background = document.getElementById("box");
        background.style.backgroundColor = "pink";

        let question2 = document.getElementById("question2");
        question2.style.display = "none";

        let question1 = document.getElementById("question1");
        question1.style.display = "none";
        
        let question3 = document.getElementById("question3");
        question3.style.display = "block";
        
        let question4 = document.getElementById("question4");
        question4.style.display = "none";

        let question5 = document.getElementById("question5");
        question5.style.display = "none";

        let question6 = document.getElementById("question6");
        question6.style.display = "none";

        let pickanswer = document.getElementById("pick_answer");
        pickanswer.style.display="block";
        pickanswer.innerText="You are not Soonk"
    })


let thirdanswer = document.getElementById("Data visualization");

    thirdanswer.addEventListener("click", function () {

        let background = document.getElementById("box");
        background.style.backgroundColor = "pink";

        let question2 = document.getElementById("question2");
        question2.style.display = "none";

        let question1 = document.getElementById("question1");
        question1.style.display = "none";
        
        let question3 = document.getElementById("question3");
        question3.style.display = "none";
        
        let question4 = document.getElementById("question4");
        question4.style.display = "block";

        let question5 = document.getElementById("question5");
        question5.style.display = "none";

        let question6 = document.getElementById("question6");
        question6.style.display = "none";

        let pickanswer = document.getElementById("pick_answer");
        pickanswer.style.display="block";
        pickanswer.innerText="You are very Soonk"
    
    })


    let thirdwrong = document.getElementById("Miscellaneous");

    thirdwrong.addEventListener("click", function () {
        console.log("Beer was chosen");

        let background = document.getElementById("box");
        background.style.backgroundColor = "pink";

        let question2 = document.getElementById("question2");
        question2.style.display = "none";

        let question1 = document.getElementById("question1");
        question1.style.display = "none";
        
        let question3 = document.getElementById("question3");
        question3.style.display = "none";
        
        let question4 = document.getElementById("question4");
        question4.style.display = "block";

        let question5 = document.getElementById("question5");
        question5.style.display = "none";

        let question6 = document.getElementById("question6");
        question6.style.display = "none";

        let pickanswer = document.getElementById("pick_answer");
        pickanswer.style.display="block";
        pickanswer.innerText="You are not Soonk"
    })

let fourthanswer = document.getElementById("I'm a chimney");

    fourthanswer.addEventListener("click", function () {
        console.log("Sake was chosen");

        let background = document.getElementById("box");
        background.style.backgroundColor = "pink";

        let question2 = document.getElementById("question2");
        question2.style.display = "none";

        let question1 = document.getElementById("question1");
        question1.style.display = "none";
        
        let question3 = document.getElementById("question3");
        question3.style.display = "none";
        
        let question4 = document.getElementById("question4");
        question4.style.display = "none";

        let question5 = document.getElementById("question5");
        question5.style.display = "block";

        let question6 = document.getElementById("question6");
        question6.style.display = "none";

        let pickanswer = document.getElementById("pick_answer");
        pickanswer.style.display="block";
        pickanswer.innerText="You are very Soonk"
    })
    


    let fourthwrong = document.getElementById("No");

    fourthwrong.addEventListener("click", function () {
        console.log("Beer was chosen");

        let background = document.getElementById("box");
        background.style.backgroundColor = "pink";

        let question2 = document.getElementById("question2");
        question2.style.display = "none";

        let question1 = document.getElementById("question1");
        question1.style.display = "none";
        
        let question3 = document.getElementById("question3");
        question3.style.display = "none";
        
        let question4 = document.getElementById("question4");
        question4.style.display = "none";

        let question5 = document.getElementById("question5");
        question5.style.display = "block";

        let question6 = document.getElementById("question6");
        question6.style.display = "none";

        let pickanswer = document.getElementById("pick_answer");
        pickanswer.style.display="block";
        pickanswer.innerText="You are not Soonk"
    })

let fifthanswer = document.getElementById("Always");

    fifthanswer.addEventListener("click", function () {
        console.log("Sake was chosen");

        let background = document.getElementById("box");
        background.style.backgroundColor = "pink";

        let question2 = document.getElementById("question2");
        question2.style.display = "none";

        let question1 = document.getElementById("question1");
        question1.style.display = "none";
        
        let question3 = document.getElementById("question3");
        question3.style.display = "none";
        
        let question4 = document.getElementById("question4");
        question4.style.display = "none";

        let question5 = document.getElementById("question5");
        question5.style.display = "none";

        let question6 = document.getElementById("question6");
        question6.style.display = "block";

        let pickanswer = document.getElementById("pick_answer");
        pickanswer.style.display="block";
        pickanswer.innerText="You are very Soonk"
    
    })


    let fifthwrong = document.getElementById("Never");

    fifthwrong.addEventListener("click", function () {
        console.log("Beer was chosen");

        let background = document.getElementById("box");
        background.style.backgroundColor = "pink";

        let question2 = document.getElementById("question2");
        question2.style.display = "none";

        let question1 = document.getElementById("question1");
        question1.style.display = "none";
        
        let question3 = document.getElementById("question3");
        question3.style.display = "none";
        
        let question4 = document.getElementById("question4");
        question4.style.display = "none";

        let question5 = document.getElementById("question5");
        question5.style.display = "none";

        let question6 = document.getElementById("question6");
        question6.style.display = "block";

        let pickanswer = document.getElementById("pick_answer");
        pickanswer.style.display="block";
        pickanswer.innerText="You are not Soonk"
    })

let sixthanswer = document.getElementById("Between 1~2 AM");

    sixthanswer.addEventListener("click", function () {
        console.log("Sake was chosen");

        let background = document.getElementById("box");
        background.style.backgroundColor = "gold";

        let question2 = document.getElementById("question2");
        question2.style.display = "none";

        let question1 = document.getElementById("question1");
        question1.style.display = "none";
        
        let question3 = document.getElementById("question3");
        question3.style.display = "none";
        
        let question4 = document.getElementById("question4");
        question4.style.display = "none";

        let question5 = document.getElementById("question5");
        question5.style.display = "none";

        let question6 = document.getElementById("question6");
        question6.style.display = "none";

        let pickanswer = document.getElementById("pick_answer");
        pickanswer.style.display="block";
        pickanswer.innerText="Are you Soonk?"
    
    })


    let sixthwrong = document.getElementById("Before 12");

    sixthwrong.addEventListener("click", function () {
        console.log("Beer was chosen");

        let background = document.getElementById("box");
        background.style.backgroundColor = "block";

        let question2 = document.getElementById("question2");
        question2.style.display = "block";

        let question1 = document.getElementById("question1");
        question1.style.display = "none";
        
        let question3 = document.getElementById("question3");
        question3.style.display = "none";
        
        let question4 = document.getElementById("question4");
        question4.style.display = "none";

        let question5 = document.getElementById("question5");
        question5.style.display = "none";

        let question6 = document.getElementById("question6");
        question6.style.display = "none";

        let pickanswer = document.getElementById("pick_answer");
        pickanswer.style.display="block";
        pickanswer.innerText="You sleep too much"
})

}
