function personalInformation () {
    const mainContent = document.getElementById('main-content')
    mainContent.innerHTML = ''
  
    const h1PI = document.createElement('h1')
    const h1PItext = document.createTextNode('Agreguen contenido')
        
    h1PI.appendChild(h1PItext)
    mainContent.appendChild(h1PI)
  }