function QuestionsAndConversations () {
  //Code Here
}

function ShortAnswers () {
  //Code Here
}

function WHQuestions () {
  //Code Here
}

const btnQuestionsAndConversations = document.getElementById(
  'btnQuestionsAndConversations'
)
const btnShortAnswers = document.getElementById('btnShortAnswers')
const btnWHQuestions = document.getElementById('btnWHQuestions')

btnQuestionsAndConversations.addEventListener('click', e => {
  e.preventDefault()
  QuestionsAndConversations()
})
btnShortAnswers.addEventListener('click', e => {
  e.preventDefault()
  ShortAnswers()
})
btnWHQuestions.addEventListener('click', e => {
  e.preventDefault()
  WHQuestions()
})
