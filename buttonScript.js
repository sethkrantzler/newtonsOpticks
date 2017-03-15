var words = document.querySelectorAll("h1, h2, h3");
var button = document.getElementById("#button");

button.onclick = function(e) {

  for (var i = 0; i < words.length; i++) {
    if (words[i].className == "") {
      words[i].className += "normal";
    }
    else {
      words[i].className = "";
    }
  }
}
