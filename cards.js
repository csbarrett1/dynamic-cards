var submit = document.getElementById("submit");
var parent = document.getElementById("parent");
var userInput = document.getElementById("input");
var card = [];

submit.addEventListener("click", function() {
  parent.innerHTML += "<div class='card'>" + userInput.value.toUpperCase() + "!!!" + "<br>" + "<button class='delete'>Delete</button>" + "</div>";
  card = document.getElementsByClassName("card"); 
  getOut();
});


function getOut() {
  var remove = document.getElementsByClassName("delete");
  for (i = 0; i < card.length; i++) {
      remove[i].addEventListener("click", function(event) {
      parent.removeChild(event.target.parentElement);
    })
  };
}