document.querySelector("button").addEventListener("click", gradeQuiz);
displayQ2Choices();
localStorage.setItem("attempts");


function gradeQuiz(){
  let gradePercent = 0;

  let count = Number(localStorage.getItem("attempts")) + 1;
  localStorage.setItem("attempts",count);
  let answer1 = document.querySelector("input[name=Q1]:checked").value;

  let answer3 = document.querySelector("#Q3").value.toLowerCase();
  let answer4 = document.querySelector("#Q4").value;
  let answer5 = document.querySelector("#Q5").value;


  if(answer1 == "Monterey Bay"){
    gradePercent+=20;
    let q1Element = document.querySelector("#q1");
    q1Element.textContent = "Correct";       
    q1Element.style.color = "green";

    let m1Element = document.querySelector("#mark1");
    m1Element.src = "/images/png-clipart-check-mark-computer-icons-green-tick-mark-angle-text.png";
  }else{
    let q1Element = document.querySelector("#q1");
    q1Element.textContent = "Incorrect";       
    q1Element.style.color = "red";

    let m1Element = document.querySelector("#mark1");
    m1Element.src ="/images/png-clipart-check-mark-international-red-cross-and-red-crescent-movement-american-red-cross-red-cross-mark-round-red-x-logo-miscellaneous-text.png"
  }

   if (document.querySelector("#Navy-Blue").checked && document.querySelector("#Green").checked && document.querySelector("#Gold").checked) {
    gradePercent+=20
    let q1Element = document.querySelector("#q2");
    q1Element.textContent = "Correct";       
    q1Element.style.color = "green";

    let m2Element = document.querySelector("#mark2");
    m2Element.src = "/images/png-clipart-check-mark-computer-icons-green-tick-mark-angle-text.png";
   }else{
    let q1Element = document.querySelector("#q2");
    q1Element.textContent = "Incorrect";       
    q1Element.style.color = "red";

    let m2Element = document.querySelector("#mark2");
    m2Element.src ="/images/png-clipart-check-mark-international-red-cross-and-red-crescent-movement-american-red-cross-red-cross-mark-round-red-x-logo-miscellaneous-text.png"
   }

   if(answer3 == "otter"){
    gradePercent+=20
    let q1Element = document.querySelector("#q3");
    q1Element.textContent = "Correct";       
    q1Element.style.color = "green";

    let m3Element = document.querySelector("#mark3");
    m3Element.src = "/images/png-clipart-check-mark-computer-icons-green-tick-mark-angle-text.png";
   }else{
    let q1Element = document.querySelector("#q3");
    q1Element.textContent = "Incorrect";       
    q1Element.style.color = "red";

    let m3Element = document.querySelector("#mark3");
    m3Element.src ="/images/png-clipart-check-mark-international-red-cross-and-red-crescent-movement-american-red-cross-red-cross-mark-round-red-x-logo-miscellaneous-text.png"
   }

   if(answer4 == "1994"){
    gradePercent+=20
    let q1Element = document.querySelector("#q4");
    q1Element.textContent = "Correct";       
    q1Element.style.color = "green";

    let m4Element = document.querySelector("#mark4");
    m4Element.src = "/images/png-clipart-check-mark-computer-icons-green-tick-mark-angle-text.png";
   }else{
    let q1Element = document.querySelector("#q4");
    q1Element.textContent = "Incorrect";       
    q1Element.style.color = "red";

    let m4Element = document.querySelector("#mark4");
    m4Element.src ="/images/png-clipart-check-mark-international-red-cross-and-red-crescent-movement-american-red-cross-red-cross-mark-round-red-x-logo-miscellaneous-text.png"
   }

   if(answer5 == "Monte Rey"){
    gradePercent+=20
    let q1Element = document.querySelector("#q5");
    q1Element.textContent = "Correct";       
    q1Element.style.color = "green";

    let m5Element = document.querySelector("#mark5");
    m5Element.src = "/images/png-clipart-check-mark-computer-icons-green-tick-mark-angle-text.png";
   }else{
    let q1Element = document.querySelector("#q5");
    q1Element.textContent = "Incorrect";       
    q1Element.style.color = "red";

     let m5Element = document.querySelector("#mark5");
    m5Element.src ="/images/png-clipart-check-mark-international-red-cross-and-red-crescent-movement-american-red-cross-red-cross-mark-round-red-x-logo-miscellaneous-text.png"
   }

    let grade = document.querySelector("#grade");
    grade.textContent = "You grade: " + gradePercent + "%";

    let attempts = document.querySelector("#attempts");
    attempts.textContent = "Number of Attempts: " + count;
   
}

function displayQ2Choices(){
    let choices = ["Navy-Blue", "Green", "Gold", "White", "Blue"];
    let shuffledChoices = _.shuffle(choices);

    for(let choice of shuffledChoices){
        let inputElement = document.createElement("input");
        inputElement.type = "checkbox";
        inputElement.name = "Q1";
        inputElement.value = choice; 
        inputElement.id = choice;
        console.log(inputElement);
    
        let labelElement = document.createElement("label");
        labelElement.innerText = choice;
        console.log(labelElement);
    
        labelElement.prepend(inputElement);
    
        document.querySelector("#Q2Choices").append(labelElement);
    }
}

