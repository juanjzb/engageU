function PresentContinuous () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''

  const h1 = document.createElement('h1')
  const textH1 = document.createTextNode('Topic: Present Continuous')

  h1.appendChild(textH1)

  mainContent.appendChild(h1)
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
