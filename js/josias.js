function QuestionsAndConversations () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''

  const h1 = document.createElement('h1')
  const h1_text = document.createTextNode('Questions And Conversations')
  h1.appendChild(h1_text)
  h1.className = 'text-center text-primary'
  mainContent.appendChild(h1)


  const contenido = document.createElement('p')
  const contenido_text = document.createTextNode(
    "hola perras"
    




  )
  
  contenido.classList.add('fs-4')
  contenido.classList.add('text-justify')
  contenido.appendChild(contenido_text)
  mainContent.appendChild(contenido)

  

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
