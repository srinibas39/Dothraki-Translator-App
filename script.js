let translateButton = document.querySelector(".btn-translate");
let inputText = document.querySelector("#textArea");
let translatedArea = document.querySelector(".translatedArea");

translateButton.addEventListener("click", function (e) {
    if(inputText.value!=""){

        let inputTextValue = inputText.value;
        serverURL(inputTextValue);
    }
})

function serverURL(inputTextValue) {
    let URL = "https://api.funtranslations.com/translate/dothraki.json" + "?" + "text=" +inputTextValue;
    APIcall(encodeURI(URL));
}
function APIcall(encodedURL) {

    fetch(encodedURL)
        .then(response => response.json())
        .then(json => {

            translatedArea.innerText = json.contents.translated;
        }


        )
        .catch(function (error) {
            console.log(error);
            alert("Some error occured in the server please try after sometime")
        })
}
