let submitBtn = document.getElementById("submit-button");

let survContent = document.getElementById("survey-content");
let submitButton = document.getElementById("submit-button");

let trigger = submitButton.addEventListener('click', changeForm);

function changeForm(event){
    survContent.innerHTML = `<h1 class="title-font" id="survey-h1">Your form has been submitted.</h1><div class="footer-pusher"></div>`
}

//Note that this event listener is based on a click so it's possible to submit an empty form. I tried to make it work
//with an event listener looking for a "submit" event instead, but it would never seem to trigger. 