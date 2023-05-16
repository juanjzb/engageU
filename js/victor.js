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
