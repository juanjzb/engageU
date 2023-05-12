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
    "Welcome to EngageU! We are pleased that you have decided to join our platform to learn English in an effective and enjoyable way. At EngageU, we believe that learning should be interactive and entertaining. For this reason, we have designed a wide variety of courses, exercises and games so that you can learn English at your own pace and in a fun way. With EngageU, you will have access to high-quality resources that will help you improve your English language skills. Our highly trained instructors will be there to guide and support you at all times. You will also be able to interact with other students from all over the world and practice your English conversation skills. Whether you are learning English for personal or professional reasons, we are sure that EngageU is the perfect place for you. So let's start this exciting learning journey together!!."
  )

  bienvenida.classList.add('fs-4')
  bienvenida.classList.add('text-justify')
  // bienvenida.classList.add('lh-lg')
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
