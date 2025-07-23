const question = [{
    'que':'Which of the following is a markup lanauge?',
    'a':'Html',
    'b':'Css',
    'c':'Javascript',
    'd':'Php',
    'correct':'a',
},

{
    'que':'what year was javascript launched?',
    'a':'1996',
    'b':'1995',
    'c':'1994',
    'd':'none of the above',
    'correct':'b',
},

{
    'que':'what does css stands for?',
    'a':'Hypertext markup language',
    'b':'cascading style sheet',
    'c':'jason object notation',
    'd':'helicopters terminals motorboats lamborginis',
    'correct':'b',
},
]



let index = 0;
let total = question.length;
let right = 0 , 
    wrong = 0;
const quebox = document.getElementById("quebox");
const optionsInpt = document.querySelectorAll('.options')
const loadQuestion = () => {
   if(index === total){
    return endquiz();
   }
   reset();
  const data = question[index];
  console.log(data);
  quebox.innerText =`${index+1}) ${data.que}`;
  optionsInpt[0].nextElementSibling.innerText = data.a;
  optionsInpt[1].nextElementSibling.innerText = data.b;
  optionsInpt[2].nextElementSibling.innerText = data.c;
 optionsInpt[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = question[index];
    const ans = getanswer();
    if(ans === data.correct){
           right++;
    }else{
            wrong++;
    }
    index++;
    loadQuestion();
    return;

}

const getanswer = () => {
    let answer;
    optionsInpt.forEach(
        (input) => {
            if(input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}
const reset = () => {
 optionsInpt.forEach((input)=>{
   input.checked = false ;
 });
}

const endquiz = () => {
    document.getElementById("box").innerHTML = `
    <div style=text-align:center font-weight:bold;
    <h2> Thank You For Playing </h2>
    <h1>${right} / ${total} are correct </h1>
    </div>
    `
}
loadQuestion();


