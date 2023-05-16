function Possesions () {
  // Code here
}

function ClassroomsObjects () {
  // Code here
}

function PersonalItems () {
  // Code here
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
