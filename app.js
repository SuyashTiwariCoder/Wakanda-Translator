var inputText = document.querySelector("#txt-area");
var button = document.querySelector("#btn");
var op = document.querySelector("#output");

button.addEventListener("click", clickHandler);

var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function clickHandler() {
  var input = inputText.value;
  fetch(getTranslationURL(input))
    .then((response) => response.json())
    .then((json) => {
      op.innerHTML=json.contents.translated;
    });
}

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}
