function Possesions () {
	const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''

  // Tipos de texto
  
  const parrafos = 'fw-bold fs-4'
  const tituloEjemplos = 'fw-bold fs-5'
  const ejemplos = 'fst-italic fs-5'

  // Empaquetamos los titulos de los ejemplos

  function example_titles(){
    const examplesTitle = document.createElement('p')
    const examplesTitle_text = document.createTextNode('Examples:')
    examplesTitle.appendChild(examplesTitle_text)
    examplesTitle.className = tituloEjemplos
    mainContent.appendChild(examplesTitle)
    return(examplesTitle_text)
  }

  // Espacios

  function espacio(){
    const espacios = document.createElement('br')
    mainContent.appendChild(espacios)
    return(espacios)
  }

  // Saxon Genitive Titulo

  const saxonGenitive_title = document.createElement('h1')
  const saxonGenitive_title_text = document.createTextNode('The Saxon Genitive')
  saxonGenitive_title.appendChild(saxonGenitive_title_text)
  saxonGenitive_title.className = 'fw-bold text-center text-primary'
  mainContent.appendChild(saxonGenitive_title)

  espacio()

  // Saxon Genitive Concepto

  const saxonGenitive = document.createElement('p')
  const saxonGenitive_text = document.createTextNode('The Saxon Genitive is used with the nouns for people, animals, countries, expressions of time, as well as the collective names for people and animals. It establishes a relationship of ownership or possession between two terms.')
  saxonGenitive.appendChild(saxonGenitive_text)
  saxonGenitive.className = parrafos
  mainContent.appendChild(saxonGenitive)

example_titles()

  const examples = [
    `Robin’s car is green.`,
    `Julia’s dog is a beautiful westie.`,
    `My mum’s coat is brown.`
  ]

  for (let i = 0; i < examples.length; i++){
    const example = document.createElement('p') 
    const example_text = document.createTextNode(examples[i])
    example.appendChild(example_text)
    example.className = ejemplos
    mainContent.appendChild(example)
  }

  espacio()

  // End With S

  const endWithS = document.createElement('p')
  const endWithS_text = document.createTextNode('If the name of the owner is plural, only the apostrophe is added. The same happens in the case of words that end with “s“.')
  endWithS.appendChild(endWithS_text)
  endWithS.className = parrafos
  mainContent.appendChild(endWithS)

  example_titles()

  const endWithS_examples = [
    `The sailors’ boat.`,
    `My friends’ new home.`,
    `Texas’ weather is unpredictable in the winter.`
  ]

  for (let i = 0; i < endWithS_examples.length; i++){
    const endWithS_example = document.createElement('p')
    const endWithS_example_text = document.createTextNode(endWithS_examples[i])
    endWithS_example.appendChild(endWithS_example_text)
    endWithS_example.className = ejemplos
    mainContent.appendChild(endWithS_example)
  }

  espacio()

  // Proper Names

  const properNames = document.createElement('p')
  const properNames_text = document.createTextNode('In the case of proper names both constructions can be used.')
  properNames.appendChild(properNames_text)
  properNames.className = parrafos
  mainContent.appendChild(properNames)

  example_titles()

  const properNames_examples = [
    `Mr. Jones’ cat is very old.`,
    `Mr. Jones’s cat is very old.`
  ]

  for (let i = 0; i < properNames_examples.length; i++){
    const properNames_example = document.createElement('p')
    const properNames_example_text = document.createTextNode(properNames_examples[i])
    properNames_example.appendChild(properNames_example_text)
    properNames_example.className = ejemplos
    mainContent.appendChild(properNames_example)
  }

  espacio()

  // Compound Names

  const compoundNames = document.createElement('p')
  const compoundNames_text = document.createTextNode('In compound names, the apostrophe and the “s” are added at the end of the last word.')
  compoundNames.appendChild(compoundNames_text)
  compoundNames.className = parrafos
  mainContent.appendChild(compoundNames)

  example_titles()

  const compoundNames_examples = [
    `My brother-in-law’s cousin.`,
    `My mother-in-law’s house is on the hill.`
  ]

  for (let i = 0; i < compoundNames_examples.length; i++){
    const compoundNames_example = document.createElement('p')
    const compoundNames_example_text = document.createTextNode(compoundNames_examples[i])
    compoundNames_example.appendChild(compoundNames_example_text)
    compoundNames_example.className = ejemplos
    mainContent.appendChild(compoundNames_example)
  }

  espacio()

  // Several Owners

  const severalOwners = document.createElement('p')
  const severalOwners_text = document.createTextNode('When there are several owners, the Saxon genitive rule is applied to the last name of the set.')
  severalOwners.appendChild(severalOwners_text)
  severalOwners.className = parrafos
  mainContent.appendChild(severalOwners)

  example_titles()

  const severalOwners_examples = [
    `Mario and Susan’s children attend primary school.`,
    `This is John and Jean’s car.`
  ]

  for (let i = 0; i < severalOwners_examples.length; i++){
    const severalOwners_example = document.createElement('p')
    const severalOwners_example_text = document.createTextNode(severalOwners_examples[i])
    severalOwners_example.appendChild(severalOwners_example_text)
    severalOwners_example.className = ejemplos
    mainContent.appendChild(severalOwners_example)
  }

  espacio()

  // Collective Names

  const collectiveNames = document.createElement('p')
  const collectiveNames_text = document.createTextNode('With collective names, the Saxon genitive is formed with an apostrophe and “s“.')
  collectiveNames.appendChild(collectiveNames_text)
  collectiveNames.className = parrafos
  mainContent.appendChild(collectiveNames)

  example_titles()

  const collectiveNames_examples = [
    `People’s rights.`,
    `Women’s hair.`
  ]

  for (let i = 0; i < collectiveNames_examples.length; i++){
    const collectiveNames_example = document.createElement('p')
    const collectiveNames_example_text = document.createTextNode(collectiveNames_examples[i])
    collectiveNames_example.appendChild(collectiveNames_example_text)
    collectiveNames_example.className = ejemplos
    mainContent.appendChild(collectiveNames_example)
  }
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
