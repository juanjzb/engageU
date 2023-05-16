function PresentContinuous () {
  //Code Here
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
