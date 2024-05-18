

let alire = document.querySelector("#alire");
let modal = document.getElementById("elementModal");
let modalButton = document.getElementById("buttonModal");
let close = document.querySelector(".close");
let lu = document.getElementById("lu");
let buttonAjouter = document.querySelector(".buttonSubmit");
const titleElement = document.querySelector(".title");
const livres = JSON.parse(localStorage.getItem('livres')) || [];


modalButton.onclick = function () {
  modal.style.display = 'block';
}
close.onclick = function () {
  modal.style.display = 'none';
}
buttonAjouter.onclick = function () {
  modal.style.display = 'none';
}



buttonAjouter.addEventListener("click", function () {

  let titre = document.getElementById("titre").value;
  let auteur = document.getElementById("Auteur").value;
  alire.insertAdjacentHTML("afterbegin", `<li  id="${titre}-${auteur}">${titre} ${auteur} <i  
onClick=supprimer("${titre}-${auteur}") class="fa-solid fa-trash"></i><i  class="fa-solid fa-check" 
onClick=marquerLu("${titre}-${auteur}")></i></li>
</li>`);

  const livre = {
    titre: titre,
    auteur: auteur,

  }
  livres.push(livre);

  localStorage.setItem('livres', JSON.stringify(livres));

})



function supprimer(id) {
  const el = document.getElementById(id)
  el.parentElement.removeChild(el);
}

function marquerLu(id) {

  supprimer(id);
  lu.insertAdjacentHTML("afterbegin", `<li>${id.split("-")[0]} ${id.split("-")[1]}<i id=${id}  
onClick=supprimer("${id}") class="fa-solid fa-trash"></i></li>`);

}




document.addEventListener("DOMContentLoaded", () => {

  livres.forEach(livre => {

 
  let titre = document.getElementById("titre").value;
  let auteur = document.getElementById("Auteur").value;
  alire.insertAdjacentHTML("afterbegin", `<li  id="${livre.titre}-${livre.auteur}">${livre.titre} ${livre.auteur} <i  
onClick=supprimer("${livre.titre}-${livre.auteur}") class="fa-solid fa-trash"></i><i  class="fa-solid fa-check" 
onClick=marquerLu("${livre.titre}-${livre.auteur}")></i></li>
</li>`);
})
  
})