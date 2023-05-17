function QuestionsAndConversations() {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = '';
  const nav = document.getElementById('sexo')
  nav.innerHTML = 'Questions and conversations'
  nav.className = 'text-success'
  
  const h1 = document.createElement('h1');
  const h1_text = document.createTextNode('Unit III- Where are you from?');
  h1.appendChild(h1_text);
  h1.className = 'text-center text-primary';
  mainContent.appendChild(h1);

  const texto = document.createElement("h3")

  const contenido = document.createElement('h3');
  const contenido_text = document.createTextNode('Cities and countries');
  contenido.classList.add('text-justify');
  contenido.appendChild(contenido_text);
  mainContent.appendChild(contenido);

  const countries = [
    'Argentina',
    'Brazil',
    'Canada',
    'China',
    'Colombia',
    'India',
    'Japan',
    'Mexico',
    'South Korea',
    'Turkey',
  ];

  const countryList = document.createElement('ul');
  countryList.className = 'country-list';

  countries.forEach((country) => {
    const listItem = document.createElement('li');
    listItem.textContent = country;
    countryList.appendChild(listItem);
  });

  mainContent.appendChild(countryList);

  const activities = [
    { question: 'Delhi and Mumbai are in _______.', answer: 'India' },
    { question: 'Shanghai is in _______.', answer: 'China' },
    { question: 'Tokyo is in _______.', answer: 'Japan' },
    { question: 'Sao Paulo and Rio are in _______.', answer: 'Brazil' },
    { question: 'Seoul and Daejeon are in _______.', answer: 'South Korea' },
    { question: 'Buenos Aires is in _______.', answer: 'Argentina' },
    { question: 'Vancouver and Ottawa are in _______.', answer: 'Canada' },
    { question: 'Istanbul is in _______.', answer: 'Turkey' },
  ];

  const activityList = document.createElement('ol');
  activityList.className = 'activity-list';

  activities.forEach((activity, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = activity.question;
    activityList.appendChild(listItem);

    const inputContainer = document.createElement('div');
    inputContainer.className = 'input-container';
    listItem.appendChild(inputContainer);

    const input = document.createElement('input');
    input.type = 'text';
    input.id = `answer-${index}`;
    inputContainer.appendChild(input);

    const resultText = document.createElement('div');
    resultText.id = `result-${index}`;
    resultText.className = 'result-text';
    inputContainer.appendChild(resultText);

    input.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        checkAnswer(index, activity.answer);
      }
    });
  });

  mainContent.appendChild(activityList);

  const conversationHeader = document.createElement('h3');
  conversationHeader.textContent = "Complete the conversations with am, 'm, are, 're, is, or 's";
  mainContent.appendChild(conversationHeader);

  const conversation = document.createElement('div');
  conversation.className = 'conversation';

  const conversationText = document.createElement('p');
  conversationText.innerHTML = `1. A:  --- you and your family from South Korea? B: No, we --- not. We --- from China. A: Oh, so you --- from China. B: Yes, I --- . I --- from Shanghai.`;
  conversation.appendChild(conversationText);

  const conversationInputs = [
    { placeholder: 'Enter', answer: 'Are' },
    { placeholder: 'Enter', answer: "are" },
    { placeholder: 'Enter', answer: "are" },
    { placeholder: 'Enter', answer: 'are' },
    { placeholder: 'Enter', answer: 'am' },
    { placeholder: 'Enter', answer: "am" },
  ];

  conversationInputs.forEach((inputData, index) => {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = inputData.placeholder;
    input.id = `conversation-answer-${index}`;
    input.setAttribute('list', `conversation-options-${index}`);
    input.style.margin = "4px";
    conversation.appendChild(input);

    const dataList = document.createElement('datalist');
    dataList.id = `conversation-options-${index}`;

    ['am', "'m", 'are', "'re", 'is', "'s"].forEach((option) => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      dataList.appendChild(optionElement);
    });

    conversation.appendChild(dataList);

    const resultText = document.createElement('div');
    resultText.id = `conversation-result-${index}`;
    resultText.className = 'result-text';
    conversation.appendChild(resultText);

    input.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        checkConversationAnswer(index, inputData.answer);
      }
    });
  });

  mainContent.appendChild(conversation);

  const textoo = document.createElement("h3")
  const textotexto = document.createTextNode("2.Conversation...Are you from Seoul?")
  textoo.appendChild(textotexto)
  textoo.style.marginTop = "30px"
  mainContent.appendChild(textoo)


  const lap = document.createElement("h3")
  const laptxt = document.createTextNode("A) Listen and practice")
  lap.className = "text-center"
  lap.appendChild(laptxt)
  texto.style.marginTop = "70px"
  mainContent.appendChild(lap)

  const conversacion = document.createElement("p")
  conversacion.innerHTML = "<b>Tim:</b> Are you from California, Jessica? <br> <b>Jessica:</b> Well, my family is in California now, But we're from south Korea originally. <br> <b>Tim:</b> Oh, my mother is Korean- from Seoul!. Are you from Seoul? <br> <b>Jessica:</b> No, we're not. We're from Daejeon. <br> <b>Tim:</b> So, is your first language Korean? <br> <b>Jessicca:</b> Yes, It is."

  mainContent.appendChild(conversacion)

  

  


  
}

function checkAnswer(index, answer) {
  const userInput = document.getElementById(`answer-${index}`).value.toLowerCase();
  const correctAnswer = answer.toLowerCase();
  const resultText = document.getElementById(`result-${index}`);
  if (userInput === correctAnswer) {
    resultText.textContent = 'Correcto';
    resultText.classList.remove('incorrect');
    resultText.classList.add('correct');
  } else {
    resultText.textContent = 'Incorrecto';
    resultText.classList.remove('correct');
    resultText.classList.add('incorrect');
  }
}



function checkConversationAnswer(index, answer) {
  const userInput = document.getElementById(`conversation-answer-${index}`).value.toLowerCase();
  const correctAnswer = answer.toLowerCase();
  const resultText = document.getElementById(`conversation-result-${index}`);
  if (userInput === correctAnswer) {
    resultText.textContent = 'Correcto';
    resultText.classList.remove('incorrect');
    resultText.classList.add('correct');
  } else {
    resultText.textContent = 'Incorrecto';
    resultText.classList.remove('correct');
    resultText.classList.add('incorrect');

    
    
  }
}




















function ShortAnswers () {
  const nav = document.getElementById('sexo')
  nav.innerHTML = 'Short Answer'
  nav.className = 'text-success'
}

function WHQuestions () {
  const nav = document.getElementById('sexo')
  nav.innerHTML = 'Greetings'
  nav.className = 'text-success'
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
