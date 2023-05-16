var btnMudar = document.querySelector(".mudar-tema");

btnMudar.addEventListener("click" , () => {
   let elements = document.querySelectorAll(".tema-light");
   var bkgMudarTema = document.querySelector(".mudar-tema")
   bkgMudarTema.classList.toggle("active")

   for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.classList.toggle("dark-tema");
   }
   btnMudar.classList.toggle("mudar-tema.")


    const CirculoTema = document.querySelector(".circulo-mudar-tema")
   
    CirculoTema.classList.toggle("active")

    // console.log("chegou aqui")
    
})