function QuestionsAndConversations() {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = '';

  const h1 = document.createElement('h1');
  const h1_text = document.createTextNode('Questions And Conversations');
  h1.appendChild(h1_text);
  h1.className = 'text-center text-primary';
  mainContent.appendChild(h1);

  const contenido = document.createElement('p');
  const contenido_text = document.createTextNode('¡Hola perras!');
  contenido.classList.add('fs-4');
  contenido.classList.add('text-justify');
  contenido.appendChild(contenido_text);
  mainContent.appendChild(contenido);

  const image = document.createElement('img');
  image.src = './assets/img/Questions and conversations/Screenshot 2023-05-16 122332.png';
  image.alt = 'Descripción de la imagen';
  image.style.border = '2px solid black'; // Agrega el marco alrededor de la imagen
  mainContent.appendChild(image);

  const audio = document.createElement('audio');
  audio.src = './assets/img/Questions and conversations/y2mate.com - Efecto de sonido Yamete Kudasai xd.mp3';
  audio.controls = true;
  audio.style.marginTop = '10px'; // Agrega espacio superior entre la imagen y el audio
  audio.style.border = '2px solid black'; // Agrega el borde al elemento de audio
  mainContent.appendChild(audio);
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
