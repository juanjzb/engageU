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
