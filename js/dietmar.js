function Possesions () {
	const mainContent = document.getElementById('main-content')
  mainContent.innerHTML = ''

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
