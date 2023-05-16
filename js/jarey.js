function createMainContent () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''

  const h1 = document.createElement('h1')
  const h1_text = document.createTextNode('What do we do?')

  h1.appendChild(h1_text)
  h1.className = 'text-center text-primary'
  mainContent.appendChild(h1)

  const div = document.createElement('div')

  const bienvenida = document.createElement('p')
  const bienvenida_text = document.createTextNode(
    "Welcome to EngageU! We are pleased that you have decided to join our platform to learn English in an effective and enjoyable way. At EngageU, we believe that learning should be interactive and entertaining. For this reason, we have designed a wide variety of courses, exercises and games so that you can learn English at your own pace and in a fun way. With EngageU, you will have access to high-quality resources that will help you improve your English language skills. Our highly trained instructors will be there to guide and support you at all times. You will also be able to interact with other students from all over the world and practice your English conversation skills. Whether you are learning English for personal or professional reasons, we are sure that EngageU is the perfect place for you. So let's start this exciting learning journey together!."
  )

  bienvenida.classList.add('fs-4')
  bienvenida.classList.add('text-justify')
  bienvenida.classList.add('lh-lg')
  bienvenida.appendChild(bienvenida_text)
  div.appendChild(bienvenida)
  mainContent.appendChild(bienvenida)
}

const btnHome = document.getElementById('btnHome')

btnHome.addEventListener('click', e => {
  e.preventDefault()
  createMainContent()
})

createMainContent()

//////////////////////////////////////////////////////////////

let AnimalFound = []
let AnimalsNames = []
let draggableElements = ''
let droppapleElements = ''

function renderDragAndDropGame () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''

  const gameContainer = document.createElement('div')
  gameContainer.classList.add('game-container')
  const h1 = document.createElement('h1')
  const textH1 = document.createTextNode("Let's Play")
  const h5 = document.createElement('h5')
  const textH5 = document.createTextNode('Drag and Drop the Objects')

  h1.appendChild(textH1)
  h1.classList.add('text-center')
  h5.appendChild(textH5)
  h5.classList.add('text-center')

  const draggable_elements = document.createElement('div')
  draggable_elements.classList.add('draggable-elements')

  const droppable_elements = document.createElement('div')
  droppable_elements.classList.add('droppaple-elements')

  const wrongAnswer = document.createElement('div')
  const textWrong = document.createTextNode('')
  wrongAnswer.classList.add('text-danger')
  wrongAnswer.classList.add('fs-1')
  wrongAnswer.classList.add('text-center')

  wrongAnswer.classList.add('wrong')
  wrongAnswer.appendChild(textWrong)
  const correctAnswer = document.createElement('div')
  const textCorrect = document.createTextNode('')
  correctAnswer.classList.add('text-success')
  correctAnswer.classList.add('fs-1')
  correctAnswer.classList.add('text-center')

  correctAnswer.classList.add('correct')
  correctAnswer.appendChild(textCorrect)

  gameContainer.appendChild(h1)
  gameContainer.appendChild(h5)
  gameContainer.appendChild(draggable_elements)
  gameContainer.appendChild(droppable_elements)
  gameContainer.appendChild(wrongAnswer)
  gameContainer.appendChild(correctAnswer)
  mainContent.appendChild(gameContainer)
}

const getRandomId = max => {
  return Math.floor(Math.random() * max) + 1
}

const CARDS = 6
async function searchAnimalsById (id) {
  const response = await fetch(`./assets/data/dragAndDrop.json`)
  const data = await response.json()

  AnimalFound.push(data.Animals[id])
  AnimalsNames.push(data.Animals[id].name)

  AnimalsNames = AnimalsNames.sort(() => Math.random() - 0.5)

  draggableElements.innerHTML = ''
  AnimalFound.forEach(animals => {
    draggableElements.innerHTML += `<div class="Animals">
            <img id="${animals.name}"draggable="true" class="image" src="${animals.img}" alt="animal">
        </div>`
  })
  droppapleElements.innerHTML = ''

  AnimalsNames.forEach(names => {
    droppapleElements.innerHTML += `<div class="names">
            <p><b>${names}</b></p>
        </div>`
  })

  let animals = document.querySelectorAll('.image')

  animals = [...animals]
  animals.forEach(animal => {
    animal.addEventListener('dragstart', event => {
      event.dataTransfer.setData('text', event.target.id)
    })
  })
  let wrongMsg = document.querySelector('.wrong')
  let correctMsg = document.querySelector('.correct')
  let points = 0

  let names = document.querySelectorAll('.names')
  names = [...names]

  names.forEach(name => {
    name.addEventListener('dragover', event => {
      event.preventDefault()
    })

    name.addEventListener('drop', event => {
      const draggableElementData = event.dataTransfer.getData('text')
      let animalElement = document.querySelector(`#${draggableElementData}`)

      if (event.target.innerText == draggableElementData) {
        correctMsg.innerText = 'Well Done!'
        event.target.innerHTML = ''
        event.target.appendChild(animalElement)
        wrongMsg.innerText = ''
        points++
        if (points == CARDS) {
          // draggableElements.innerHTML = 'You won :D'
          correctMsg.innerText = 'You Won!'
        }
      } else {
        correctMsg.innerText = ''
        wrongMsg.innerText = 'You almost hit it!, Try again!'
      }
    })
  })
}
const btnDragAndDropGame = document.getElementById('btnDragAndDropGame')

btnDragAndDropGame.addEventListener('click', e => {
  e.preventDefault()
  renderDragAndDropGame()
  draggableElements = document.querySelector('.draggable-elements')
  droppapleElements = document.querySelector('.droppaple-elements')

  for (let c = 1; c <= CARDS; c++) {
    let id = getRandomId(12)
    searchAnimalsById(id)
  }
})

/* Boton de Personal Information */

function personalInformation () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''

  const h1PI = document.createElement('h1')
  const h1PItext = document.createTextNode('Agreguen contenido')

  h1PI.appendChild(h1PItext)
  mainContent.appendChild(h1PI)
}

//////////////////////////////////////////////////////////////////
/* Boton de Greetings */

function greetings () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''

  const h1G = document.createElement('h1')
  const h1GText = document.createTextNode('Agreguen contenido 2')

  h1G.appendChild(h1GText)
  mainContent.appendChild(h1G)
}

////////////////////////////////////////////////////////////////////
/* Boton de Introducing MySelf Vocabulary */
function mySelf () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''

  const h1MySelf = document.createElement('h1')
  const h1MySelf_text = document.createTextNode('Agreguen contenido 3')

  h1MySelf.appendChild(h1MySelf_text)
  mainContent.appendChild(h1MySelf)
}

/////////////////////////////////////////////////////////////////////
/* Boton de Names And Titles */
function namesAndTitles () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''

  const h1NamesAndTtiles = document.createElement('h1')
  const h1NamesAndTtiles_text = document.createTextNode('Agreguen contenido 4')

  h1NamesAndTtiles.appendChild(h1NamesAndTtiles_text)
  mainContent.appendChild(h1NamesAndTtiles)
}

///////////////////////////////////////////////////////////////////////
/* Boton de Aplphabet */

function alphabet () {
  const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''

  const h1Alphabet = document.createElement('h1')
  const h1Alphabet_text = document.createTextNode('Agreguen contenido 5')

  h1Alphabet.appendChild(h1Alphabet_text)
  mainContent.appendChild(h1Alphabet)
}

const btnPersonalInformation = document.getElementById('btnPersonalInformation')
const btnGreetings = document.getElementById('btnGreetings')
const btnIntroduceMySelf = document.getElementById('btnIntroduceMySelf')
const btnNamesAndTitles = document.getElementById('btnNamesAndTitles')
const btnAlphabet = document.getElementById('btnAlphabet')

btnPersonalInformation.addEventListener('click', e => {
  e.preventDefault()
  personalInformation()
})

btnGreetings.addEventListener('click', e => {
  e.preventDefault()
  greetings()
})

btnIntroduceMySelf.addEventListener('click', e => {
  e.preventDefault()
  mySelf()
})

btnNamesAndTitles.addEventListener('click', e => {
  e.preventDefault()
  namesAndTitles()
})

btnAlphabet.addEventListener('click', e => {
  e.preventDefault()
  alphabet()
})
