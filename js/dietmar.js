function Possesions () {
	const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
	
  const h1 = document.createElement('h1')
  const h1Text = document.createTextNode('The Saxon Genitive')
  h1.appendChild(h1Text)
  h1.className = 'fw-bold text-center text-primary'
  mainContent.appendChild(h1)

  const saxonConcept = document.createElement('p')
  const saxonConcept_text = document.createTextNode('The Saxon Genitive is used with the nouns for people, animals, countries, expressions of time, as well as the collective names for people and animals. It establishes a relationship of ownership or possession between two terms.')
  saxonConcept.appendChild(saxonConcept_text)
  saxonConcept.className = 'text-start fs-4'
  mainContent.appendChild(saxonConcept)

function example_titles(){
  const examplesTitle = document.createElement('p')
  const examplesTitle_text = document.createTextNode('Examples:')
  examplesTitle.appendChild(examplesTitle_text)
  examplesTitle.className = 'fw-bold fs-3'
  mainContent.appendChild(examplesTitle)
  return(examplesTitle_text)
}

example_titles()

  const examples = [
    `Robin’s car is green.`,
    `Julia’s dog is a beautiful westie.`,
    `My mum’s coat is brown`
  ]

  for (let i = 0; i < examples.length; i++){
    const example = document.createElement('p') 
    const example_text = document.createTextNode(examples[i])
    example.appendChild(example_text)
    example.className = 'fst-italic fs-4'
    mainContent.appendChild(example)
  }

  const endWithS = document.createElement('p')
  const endWithS_text = document.createTextNode('If the name of the owner is plural, only the apostrophe is added. The same happens in the case of words that end with “s“.')
  endWithS.appendChild(endWithS_text)
  endWithS.className = 'fw-bold fs-4'
  mainContent.appendChild(endWithS)

  example_titles()
}

function ClassroomsObjects () {
	const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''

}

function PersonalItems () {
	const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''
}

const btnPossesions = document.getElementById('btnPossesions')
const btnClassroomsObjects = document.getElementById('btnClassroomsObjects')
const btnPersonalItems = document.getElementById('btnPersonalItems')

btnPossesions.addEventListener('click', e => {
  e.preventDefault()
  Possesions()
})

btnClassroomsObjects.addEventListener('click', e => {
  e.preventDefault()
  ClassroomsObjects()
})

btnPersonalItems.addEventListener('click', e => {
  e.preventDefault()
  PersonalItems()
})
