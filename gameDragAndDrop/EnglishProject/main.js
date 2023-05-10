const CARDS = 6 //Cantidad de animales que se mostraran en el juego

// peticion de animales al programa.
for(let c=1;c <= CARDS; c++){
    let id = getRandomId(20)
    searchAnimalsById(id)
}

//para que se elijan aleatoriamente
function getRandomId(max){   
    return Math.floor(Math.random()*max)+1
}

// coneccion con el html para que se muestre  en la pagina.
let draggableElements = document.querySelector('.draggable-elements')
let droppapleElements = document.querySelector('.droppaple-elements')

// arreglos donde se almacenan las imagenes y nombres de los animales que se mostraran en la pagina
let AnimalFound = []
let AnimalsNames = []

//la funcion que hace que se conecte todo y sea GOD
async function searchAnimalsById(id){
    const response = await fetch(`http://localhost:3000/Animals/${id}`) //conexion con el json
    const data = await response.json()
    AnimalFound.push(data)
    AnimalsNames.push(data.name)


    AnimalsNames = AnimalsNames.sort(()=>Math.random()-0.5)


    console.log(AnimalsNames)
    draggableElements.innerHTML = ''
    AnimalFound.forEach(animals => { //Las imagenes se generan automaticamente y de manera aleatoria con el json
        draggableElements.innerHTML += 
        `<div class="Animals">
            <img id="${animals.name}"draggable="true" class="image" src="${animals.img}" alt="animal">
        </div>`
    })

    droppapleElements.innerHTML = ''
    AnimalsNames.forEach(names => {
        droppapleElements.innerHTML +=
        `<div class="names">
            <p><b>${names}</b></p>
        </div>`
    })

    let animals = document.querySelectorAll('.image')

    animals = [...animals]
    animals.forEach(animal =>{
        animal.addEventListener('dragstart', event => {
            event.dataTransfer.setData('text', event.target.id)
        })
    })
    let wrongMsg = document.querySelector('.wrong')
    let correctMsg = document.querySelector('.correct')
    let points = 0


    let names = document.querySelectorAll('.names')
    names = [...names]
    console.log(names)
    names.forEach(name => {
        name.addEventListener('dragover', event =>{
            event.preventDefault()
        })
        name.addEventListener('drop', event =>{
            const draggableElementData = event.dataTransfer.getData('text')
            let animalElement = document.querySelector(`#${draggableElementData}`)

            if(event.target.innerText == draggableElementData) {
                console.log('si')
                correctMsg.innerText = 'que pro'
                event.target.innerHTML = ''
                event.target.appendChild(animalElement)
                wrongMsg.innerText = ''
                points++
                if(points == CARDS){
                    draggableElements.innerHTML = 'Ganaste :D'
                }
            } else{
                console.log('no')
                correctMsg.innerText = ''
                wrongMsg.innerText = 'Tas pendejo mijo'
            }
        })
    })
}

