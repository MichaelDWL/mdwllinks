function toggleMode() {
  const html = document.documentElement //linkando para funcionar no html
  html.classList.toggle("light")

  //pegar a img
  const img = document.querySelector("#profile img")
  //se tiver no light mode, adicionar a img light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/MDWLPROFILE LIGHT.png")
  }
  //se tiver sem light mode, manter img normal
  else {
    img.setAttribute("src", "./assets/MDWL PROFILE DARK.png")
  }

  //modo sem img

  // (html.classList.contains("light")) //vai verificar sem tem a palavra light na lista
  //{ html.classList.remove("light")} // se tiver a palavra light, irá remover
  //else { html.classList.add("light")} //se não tiver irá adicionar a palavra light
}
