


let modal = document.getElementById("elementModal");
let modalButton = document.getElementById("buttonModal");
let close = document.querySelector(".close");
let lu = document.getElementById("lu");

modalButton.onclick = function () {
 modal.style.display = 'block';
}
close.onclick = function () {
    modal.style.display = 'none';
   }
   

// const Livre = document.querySelector(".nomLivre");
// const Auteur= document.querySelector(".nomAuteur");
let buttonAjouter = document.querySelector(".buttonSubmit");
const titleElement = document.querySelector(".title");


buttonAjouter.addEventListener ("click", function()

{
    // const name = document.createElement("h2");

    // event.preventDefault();
    // // const titre = document.createElement("h2");
    // name.innerHTML =`<p> ${Livre.value} ${Auteur.value} </p> ` ;
    // titleElement.appendChild(name);
      
    // console.log("buttonAjouter", buttonAjouter);
    // 
let titre = document.getElementById("titre").value;
let Auteur = document.getElementById("Auteur").value;   
// alire.innerHTML += `<li>${titre}</li>`;
alire.insertAdjacentHTML("afterbegin",`<li>${titre}<i id=${titre} onClick=supprimer(this.id) class="fa-solid fa-trash"></i><i id=${titre} class="fa-solid fa-check" onClick=marquerLu(this.id)></i></li>
</li>`);

}
)

function supprimer(id)
{
    document.getElementById(id).parentElement.outerHTML="";
}

function marquerLu(id)
{
   
  supprimer(id);
lu.insertAdjacentHTML("afterbegin",`<li>${id}<i id=${id}  onClick=supprimer(this.id) class="fa-solid fa-trash"></i></li>`);
  
}