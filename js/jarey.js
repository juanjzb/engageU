function createMainContent() {

  const mainContent = document.getElementById("main-content");
mainContent.innerHTML = ""

  const h1 = document.createElement("h1");
  const h1_text = document.createTextNode("What do we do?");

  h1.appendChild(h1_text);
  h1.className = "text-center text-primary";
  mainContent.appendChild(h1);

  const div = document.createElement("div");

  const bienvenida = document.createElement("p");
  const bienvenida_text = document.createTextNode(
    "¡Bienvenido/a a EngageU! Nos complace que hayas decidido unirte a nuestra plataforma para aprender inglés de manera efectiva y amena. En EngageU, creemos que el aprendizaje debe ser interactivo y entretenido. Por eso, hemos diseñado una amplia variedad de cursos, ejercicios y juegos para que puedas aprender inglés a tu propio ritmo y de manera divertida. Con EngageU, tendrás acceso a recursos de alta calidad que te ayudarán a mejorar tus habilidades en el idioma inglés. Nuestros instructores altamente capacitados estarán allí para guiarte y apoyarte en todo momento. También podrás interactuar con otros estudiantes de todo el mundo y practicar tus habilidades de conversación en inglés. Ya sea que estés aprendiendo inglés por motivos personales o profesionales, estamos seguros de que EngageU es el lugar perfecto para ti. Así que comencemos juntos este emocionante viaje de aprendizaje."
  );

  bienvenida.appendChild(bienvenida_text);
  div.appendChild(bienvenida);
  mainContent.appendChild(bienvenida);
}

const btnHome = document.getElementById("btnHome");

btnHome.addEventListener("click", (e) => {
  e.preventDefault()
  createMainContent();
});

createMainContent()

