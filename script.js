function toggleMode() {
  /* documentElement -> acessa a tag html do arquivo*/
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector('#profile img')
  
  //substituir a imagem
  if(html.classList.contains('light')) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "")
    img.setAttribute("alt", "")
    
  } else {
    //se tiver darkmode, manter a imagem normal
    img.setAttribute("src", "")
    img.setAttribute("alt", "")
  }



} 