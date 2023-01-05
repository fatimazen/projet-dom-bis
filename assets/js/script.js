// add a click event listener on the form submit button

//dans le document HTML, je rècuperer un elemment qui a pour id
//"comment-submit", et je le stock  dans la variable bouton.
var button = document.getElementById("comment-submit");

//j ajute un evenement eventlistener sur le bouton
//je lui passe en parametre au clic du bouton ma fonction cliconbutton
button.addEventListener("click", interception);

//créer une fonction cliconbutton avec (e)en paramètre 
//qui affiche une alerte avec message
function interception(e) {
  alert("On a cliqué sur le bouton !");

  // don't forget to "prevent" the form from being sent
  // empêcher le formulaire de changer de page 
  e.preventDefault();
  // lors du clic sur le bouton d'envoi du formulaire, cible les champs du formulaire contenant les noms de l'utilisateur et son message
  var nom = document.getElementById('comment-username').value;
  console.log(nom);
  var message = document.getElementById('comment-content').value;
  console.log(message);

  addElement(nom, message)


}
// crée un nouvel élément li,cible l'élément contenant la liste des messages et ajoute ce nouvel élément à la fin de la liste

function addElement(nom, message) {
  var newli = document.createElement("li");
  var newh5 = document.createElement("h5");
  newh5.append(nom);
  var newh6 = document.createElement("h6");
  newh6.append(new Date().toLocaleDateString());
  var newp = document.createElement("p");
  newp.append(message);
  newli.append(newh5, newh6, newp);


  var commentaire = document.getElementById('comments-list');
  commentaire.appendChild(newli);
}










