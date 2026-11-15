// data question

const qsts = [
    {
        qst:'combien de joueur dans football',
        options:[
            {answer:'11',correct:true},
            {answer:'12',correct:false},
            {answer:'10',correct:false},
            {answer:'9',correct:false},
        ]
    },
      {
        qst:'combien de joueur dans handball',
        options:[
            {answer:'7',correct:false},
            {answer:'6',correct:true},
            {answer:'8',correct:false},
            {answer:'5',correct:false},
        ]
    },
      {
        qst:'combien de joueur dans basketball',
        options:[
            {answer:'11',correct:false},
            {answer:'12',correct:false},
            {answer:'10',correct:false},
            {answer:'5',correct:true},
        ]
    },
      {
        qst:'combien de joueur dans rekby',
        options:[
            {answer:'15',correct:true},
            {answer:'12',correct:false},
            {answer:'10',correct:false},
            {answer:'9',correct:false},
        ]
    },
      {
        qst:'combien de joueur dans tennis',
        options:[
            {answer:'1',correct:true},
            {answer:'3',correct:false},
            {answer:'5',correct:false},
            {answer:'4',correct:false},
        ]
    }
]

// les variables

const start = document.getElementById('start')
const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')
const qst = document.getElementById('qst')
const score = document.getElementById('score')
const numQst = document.getElementById('num_qst')
const totalQstDetails = document.getElementById('total_qst_details')
const btns_answers = document.getElementById('btns_answers')
const child_progress = document.getElementById('child_progress')
const result = document.getElementById('result')
const total_score = document.getElementById('total_score')
const observe = document.getElementById('observe')
const totalQstResult = document.getElementById('total_qst_result')


let index = 0
let sc = 0
let val_prog = 0

// click start pour demmarer quiz

start.addEventListener('click',()=>{
   div1.classList.add('desactive')
   div2.classList.remove('desactive')
})

// fonction initial


initial = () => {
   sc = 0
   index = 0
   val_prog = 0
   child_progress.setAttribute('style',`width:${val_prog}%`)
   score.textContent = sc
   demmarer()
}

demmarer = () => {
   const current = qsts[index]
   qst.textContent = current.qst
   numQst.textContent = index+1
   totalQstDetails.textContent = qsts.length
   btns_answers.innerText = ''
   current.options.forEach((opt)=>{
     const answers = document.createElement('button')
     answers.classList.add('btns')
     answers.classList.add('btn-secondary','btn')
     answers.textContent = opt.answer
     answers.dataset.correct = opt.correct
     btns_answers.appendChild(answers)
     answers.addEventListener('click',cilckButton)
   })
}

cilckButton = (e) => {
   const isCorrect = e.target.dataset.correct == 'true'
   const selectButton = e.target
   const btnsSelect = document.querySelectorAll('.btns')  
   
   if(isCorrect){
    selectButton.classList.add('btn-success')
    selectButton.classList.remove('btn-secondary')
    sc++
    score.textContent = sc
    if(sc == 5){
       val_prog = val_prog + 28
       child_progress.setAttribute('style',`width:${val_prog}%`)
    }
    val_prog = val_prog + 20
    child_progress.setAttribute('style',`width:${val_prog}%`)
   }
   else{
      selectButton.classList.add('btn-danger')
      selectButton.classList.remove('btn-secondary')
      btnsSelect.forEach((btn)=>{
        if(btn.dataset.correct == 'true'){
            btn.classList.add('btn-success')
            btn.classList.remove('btn-secondary')
        }
      })
   }

   setTimeout(() => {
      index++
      if(index<qsts.length){
        demmarer()
      }
      else{
        resultt()
      }
   }, 1000);

}

resultt = () => {
   div1.classList.add('desactive')
   div2.classList.add('desactive')
   result.classList.remove('desactive')
  
   if(sc>=1 && sc<=2){
    observe.textContent = 'Keep Practicing!'
   }
   else if(sc>2 && sc<5){
    observe.textContent = 'Good Job!'
   }
   else{
    observe.textContent = 'Very Good!'
   }

   total_score.textContent = sc
   totalQstResult.textContent = qsts.length
}

restart = () => {
   div1.classList.remove('desactive')
   result.classList.add('desactive')
   initial()
}

initial()

