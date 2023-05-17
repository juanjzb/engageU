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
  const txtDos = document.createTextNode('The Present Continuous Formula:')
  paragrafhDos.appendChild(txtDos)
  mainContent.appendChild(paragrafhDos)

  const paragrafhTres = document.createElement('p')
  const txtTres = document.createTextNode(' to be [am, is, are] + verb [present participle]')
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
