function PresentContinuous () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''

  const h1 = document.createElement('h1')
  h1.className = 'text-center text-success'
  const textH1 = document.createTextNode('Present Continuous')
  h1.appendChild(textH1)
  mainContent.appendChild(h1)

  const paragrafh = document.createElement('p')
  const txtUno = document.createTextNode('The present continuous verb tense indicates that an action or condition is happening now, frequently,and may continue into the future. It generally refers to situations or actions that are being carried out at the moment and, as in Spanish, learning this tense is essential to have fluency and expression in any conversation in English.')
  paragrafh.appendChild(txtUno)
  mainContent.appendChild(paragrafh)

  const paragrafhDos = document.createElement('h3')
  paragrafhDos.innerHTML = '<br>The Present Continuous Formula:'
  mainContent.appendChild(paragrafhDos)

  const paragrafhTres = document.createElement('p')
  const txtTres = document.createTextNode(' to be [Am, Is, Are] + Verb [Present Participle]')
  paragrafhTres.appendChild(txtTres)
  mainContent.appendChild(paragrafhTres)

  const paragrafhCuatro = document.createElement('h3')
  paragrafh.className = 'align-baseline'
  const txtCuatro = document.createTextNode('Example ')
  paragrafhCuatro.appendChild(txtCuatro)
  mainContent.appendChild(paragrafhCuatro)

  const divContainer = document.createElement('div')
  divContainer.style.display = 'flex' //Esto establece el estilo para mostrar los elementos en línea
  divContainer.appendChild(paragrafhCuatro)  //Agrega el elemento original
  const paragrafhCinco = document.createElement('p')  //Agrega el nuevo elemento de bloque de texto
  paragrafhCinco.innerHTML = 'Aunt Christine is warming up the car while Scott is looking for his new leather coat, <br> they are eating at Scott’s favorite restaurant today, Polly’s Pancake Diner.'
  paragrafhCinco.style.marginLeft = '50px'
  paragrafhCinco.style.marginTop = '5px'
  divContainer.appendChild(paragrafhCinco)
  mainContent.appendChild(divContainer)

  const paragrafhSeis = document.createElement('p')
  paragrafhSeis.innerHTML = '<br>The present continuous (present progressive) tense is a way to convey any action or condition that is happening right now, frequently, and may be ongoing. It adds energy and action to writing, and its effect helps readers understand when the action is happening. Imagine Aunt Christine has surprised her nephew Scott for his birthday and is going to take him out to his favorite restaurant, Polly’s Pancake Diner. If I wanted to tell the story after it happened, I’d use the past tense.'
  mainContent.appendChild(paragrafhSeis)
  
  const paragrafhSiete = document.createElement('h3')
  paragrafhSiete.innerHTML = '<br>When to Use the Present Continuous Tense?'
  mainContent.appendChild(paragrafhSiete)
  
  const paragrafhOcho = document.createElement('p')
  const txtOcho = document.createTextNode('Use the present continuous tense with the appropriate “to be” verb and a dynamic verb. A dynamic verb shows action and/or process. For example:')
  paragrafhOcho.appendChild(txtOcho)
  mainContent.appendChild(paragrafhOcho)

  const paragrafhNueve = document.createElement('h3')
  paragrafhNueve.className = 'align-baseline'
  const txtNueve = document.createTextNode('Example')
  paragrafhNueve.appendChild(txtNueve)
  mainContent.appendChild(paragrafhNueve)

  const divContainerDos = document.createElement('div')
  divContainerDos.style.display = 'flex'
  divContainerDos.appendChild(paragrafhNueve)
  const paragrafhDiez = document.createElement('p')
  paragrafhDiez.innerHTML = 'Scott’s little sister is arriving at the diner two hours late because her <br> roller-derby team, Chicks Ahoy, won the national championships early today. <br> As she is walking into Polly’s Pancake Diner, she is yelling goodbye <br> to her friends outside, and Scott hopes she doesn’t cause a scene since she is <br> always embarrassing him in public.'
  paragrafhDiez.style.marginLeft = '50px'
  paragrafhDiez.style.marginTop = '5px'
  divContainerDos.appendChild(paragrafhDiez)
  mainContent.appendChild(divContainerDos)

  const paragrafhOnce = document.createElement('h3')
  paragrafhOnce.innerHTML = '<br>When Not to Use the Present Continuous Tense?'
  mainContent.appendChild(paragrafhOnce)

  const paragrafhDoce = document.createElement('p')
  const txtDoce = document.createTextNode('Do not use the present continuous tense with stative verbs. Stative verbs show a state of being that does not show qualities of change. These verbs can stay in the simple present. For example')
  paragrafhDoce.appendChild(txtDoce)
  mainContent.appendChild(paragrafhDoce)

  const paragrafhTrece = document.createElement('h3')
  paragrafhTrece.className = 'align-baseline'
  const txtTrece = document.createTextNode('Example')
  paragrafhTrece.appendChild(txtTrece)
  mainContent.appendChild(paragrafhTrece)
  
  const paragrafhCatorce = document.createElement('h5')
  paragrafhCatorce.className = 'align-baseline text-danger'
  paragrafhCatorce.innerHTML = 'Incorrect'
  paragrafhCatorce.style.marginLeft = '80px'
  paragrafhCatorce.style.marginBottom = '50px'
  mainContent.appendChild(paragrafhCatorce)

  const divContainerTres = document.createElement('div')
  divContainerTres.style.display = 'flex'
  divContainerTres.appendChild(paragrafhCatorce)
  const paragrafhQuince = document.createElement('p')
  paragrafhQuince.innerHTML = 'Sarah is being a tall teenager, who loves her food spicy and her sports dangerous.'
  paragrafhQuince.style.marginLeft = '50px'
  paragrafhQuince.style.marginBottom = '50px'
  divContainerTres.appendChild(paragrafhQuince)
  mainContent.appendChild(divContainerTres)
  
  const paragrafhDiezSeis = document.createElement('h5')
  paragrafhDiezSeis.className = 'align-baseline text-success'
  paragrafhDiezSeis.innerHTML = 'Correct'
  paragrafhDiezSeis.style.marginLeft = '80px'
  paragrafhDiezSeis.style.marginRight = '11px'
  paragrafhDiezSeis.style.marginBottom = '5px'

  const divContainerCuatro = document.createElement('div')
  divContainerCuatro.style.display = 'flex'
  divContainerCuatro.appendChild(paragrafhDiezSeis)
  const paragrafhDiezSiete = document.createElement('p')
  paragrafhDiezSiete.innerHTML = 'Aunt Christine prefers the maple walnut pancakes over the banana peanut butter ones that Scott loves.'
  paragrafhDiezSiete.style.marginLeft = '50px'
  paragrafhDiezSiete.style.marginBottom = '50px'
  divContainerCuatro.appendChild(paragrafhDiezSiete)
  mainContent.appendChild(divContainerCuatro)

  const paragrafhDiezOcho = document.createElement('p')
  const txtDiezOcho = document.createTextNode('Here, the stative verb to prefer shows opinion, and therefore should not be conjugated into the present continuous. Stative verb categories include emotion (to love), possession (to belong), and thoughts (to recognize), and none of these should use the present continuous form.')
  paragrafhDiezOcho.appendChild(txtDiezOcho)
  mainContent.appendChild(paragrafhDiezOcho)
 
  const mainyoContent = document.getElementById('main-content')
  let score = 0 // Variable para almacenar la puntuación
  const exerciseHeader = document.createElement('h3')
  exerciseHeader.textContent = 'Complete the sentences in Present Simple (English)'
  mainyoContent.appendChild(exerciseHeader)
  const exercises = [
  {
    sentence: 'I ___________ (play) soccer every weekend.',
    answers: ['play'],
  },
  {
    sentence: 'She ___________ (study) French at school.',
    answers: ['studies'],
  },
  {
    sentence: 'They ___________ (watch) a movie every Friday night.',
    answers: ['watch'],
  },
  {
    sentence: 'We ___________ (eat) dinner at 7 o\'clock.',
    answers: ['eat'],
  },
  {
    sentence: 'He ___________ (go) to the gym three times a week.',
    answers: ['goes'],
  },
  {
    sentence: 'You ___________ (read) a book before bed.',
    answers: ['read'],
  },
  {
    sentence: 'The dog ___________ (bark) loudly at strangers.',
    answers: ['barks'],
  },
  {
    sentence: 'My sister ___________ (work) as a teacher.',
    answers: ['works'],
  },
  {
    sentence: 'We ___________ (live) in a small town.',
    answers: ['live'],
  },
  {
    sentence: 'They ___________ (play) the guitar in a band.',
    answers: ['play'],
  },
];

  exercises.forEach((exercise, index) => {
  const exerciseDiv = document.createElement('div')
  exerciseDiv.className = 'exercise'

  const sentenceText = document.createElement('p')
  sentenceText.innerHTML = `${index + 1}. ${exercise.sentence}`
  exerciseDiv.appendChild(sentenceText)

  const input = document.createElement('input')
  input.type = 'text';
  input.placeholder = 'Enter your answer'
  exerciseDiv.appendChild(input);

  const resultText = document.createElement('div')
  resultText.id = `result-${index}`
  resultText.className = 'result-text'
  exerciseDiv.appendChild(resultText)

  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      checkAnswer(index, exercise.answers, input.value.trim())
      input.disabled = true // Deshabilita el input para evitar múltiples respuestas
    }
  })

  mainyoContent.appendChild(exerciseDiv)
})

  const scoreDiv = document.createElement('div')
  scoreDiv.className = 'score';
  scoreDiv.textContent = `Score: ${score} / 10`
  mainyoContent.appendChild(scoreDiv)

  function checkAnswer(index, answers, userInput) {
  const correctAnswers = answers.map(answer => answer.toLowerCase())
  const userAnswer = userInput.toLowerCase()
  const resultText = document.getElementById(`result-${index}`)
  
  if (correctAnswers.includes(userAnswer)) {
    resultText.textContent = 'Correct!'
    resultText.classList.remove('incorrect')
    resultText.classList.add('correct');
    score += 1 // Suma un punto si la respuesta es correcta
    scoreDiv.textContent = `Score: ${score}` // Actualiza el marcador de puntos
  } else {
    resultText.textContent = 'Incorrect. Try again!'
    resultText.classList.remove('correct')
    resultText.classList.add('incorrect')
  }
 }


}
  







function EverydayExpressions () {
  //Code Here
}
function ShortQuestions () {
  //Code Here
}

const btnPresentContinuous = document.getElementById('btnPresentContinuous')
const btnEverydayExpressions = document.getElementById('btnEverydayExpressions')
const btnShortQuestions = document.getElementById('btnShortQuestions')

btnPresentContinuous.addEventListener('click', e => {
  e.preventDefault()
  PresentContinuous()
})
btnEverydayExpressions.addEventListener('click', e => {
  e.preventDefault()
  EverydayExpressions()
})
btnShortQuestions.addEventListener('click', e => {
  e.preventDefault()
  ShortQuestions()
})
