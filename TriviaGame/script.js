var score=0;
function myscore(){
    score++;
    localStorage.setItem('newscore',score*10);
    console.log(score);
}

async function play(){
    try{
        let QuestionsUrl = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
        let Questions = await QuestionsUrl.json()
        var display = document.getElementById('display')
        var qNumber=0;
        var prog=0;
        var options=0;
        var optionVal=0;
        console.log(Questions.results[0]);
        Questions.results.filter(async (x)=>{
            qNumber++;
            prog+=10;
            options++;
            display.innerHTML+=`
            <div class="card row col-lg-4 col-sm-12" style="width: 20rem;">
                <div class="card-body">
                    <label for="progressBar" id="progressText">Question ${qNumber}/10</label><br>
                    <progress id="progressBar" value = "${prog}" max = "100"></progress>
                    <h6 class="card-subtitle mb-2 text-muted">${x.question}</h6>
                    <input type="radio" id="option${++optionVal}" name="options${options}" value="option1" onchange="myscore();">
                    <label for="option${optionVal}">${x.correct_answer}</label><br>
                    <input type="radio" id="option${++optionVal}" name="options${options}" value="option2">
                    <label for="option${optionVal}">${x.incorrect_answers[0]}</label><br>
                    <input type="radio" id="option${++optionVal}" name="options${options}" value="option3">
                    <label for="option${optionVal}">${x.incorrect_answers[1]}</label><br>
                    <input type="radio" id="option${++optionVal}" name="options${options}" value="option4">
                    <label for="option${optionVal}">${x.incorrect_answers[2]}</label><br>
                </div>
            </div>`
            
        })
            
    }
    catch(err){console.log(err)}
}
play()




