let questions = [
  {
    question: "ما هو الاسم العلمي لدواء Cozaar؟",
    options: ["Losartan", "Valsartan", "Irbesartan"],
    answer: "Losartan",
    image: "cozaar.jpg",
    feedbackImage: "cozaar.jpg"
  }
];

let current = 0;
let selected = null;

const qText = document.getElementById("questionText");
const qImg = document.getElementById("questionImage");
const optBox = document.getElementById("optionsBox");
const submitBtn = document.getElementById("submitBtn");
const feedback = document.getElementById("feedbackBox");
const fImg = document.getElementById("feedbackImage");
const btnCorrect = document.getElementById("btnCorrect");
const btnWrong = document.getElementById("btnWrong");

function loadQuestion() {
  let q = questions[current];
  qText.textContent = q.question;

  if(q.image){
    qImg.src = q.image;
    qImg.classList.remove("hidden");
  }

  optBox.innerHTML = "";
  q.options.sort(()=>Math.random()-0.5);

  q.options.forEach(o=>{
    let b=document.createElement("button");
    b.textContent=o;
    b.onclick=()=> selected=o;
    optBox.appendChild(b);
  });
}

submitBtn.onclick = ()=>{
  feedback.classList.remove("hidden");
  fImg.src = questions[current].feedbackImage;
};

btnCorrect.onclick = nextQ;
btnWrong.onclick = nextQ;

function nextQ(){
  feedback.classList.add("hidden");
  current++;
  if(current >= questions.length){
    alert("انتهى الاختبار");
    return;
  }
  loadQuestion();
}

loadQuestion();
