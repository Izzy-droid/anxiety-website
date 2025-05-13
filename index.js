let themeButton = document.getElementById("theme-button");
// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
 // Write your code to manipulate the DOM here
 document.body.classList.toggle("dark-mode");
}
 themeButton.addEventListener("click", toggleDarkMode);



// Add your query for the sign now button here
let count = 3;
let counter= document.getElementById("counter");
let signNowButton = document.getElementById("sign-now-button")
const addSignature = () => {
  // Write your code to manipulate the DOM here
  counter.remove();
  let name = document.getElementById("name").value;
  let hometown = document.getElementById("hometown").value;
  let email= document.getElementById("email").value;
  let signature = document.createElement("p");
  signature.textContent = "🖊️ " + name + " from " + hometown + " supports this.";
  document.getElementById("sign-list").appendChild(signature);
  count = count + 1;
  counter= document.createElement("p");
  counter.textContent = "🖊️ " + count + " people have signed this petition and support this cause."
  document.getElementById("sign-list").appendChild(counter);
}

// Add a click event listener to the sign now button here 





// TODO: Remove the click event listener that calls addSignature()
// TODO: Complete validation form

const validateForm = () => {
  let containsErrors = false;
  var petitionInputs = document.getElementById("sign-petition").elements;
  let person = {
    name: petitionInputs[0].value // accesses and saves value of first input
  }
  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }
  // TODO: Validate the value of each input
  const email = document.getElementById('email');
  if (!email.value.includes('.com')) {
    containsErrors = true;
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }
  // TODO: Call addSignature() and clear fields if no errors
  if (!containsErrors) {addSignature();
                        
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
    
  }

}
signNowButton.addEventListener('click', validateForm);


let animation = {
 revealDistance: 150,
 initialOpacity: 0,
 transitionDelay: 0,
 transitionDuration: '2s',
 transitionProperty: 'all',
 timingFunction: 'ease',
}

var revealableContainers = document.querySelectorAll(".revealable");
const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++){
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } 
    else {
      revealableContainers[i].classList.remove('active');
    }
  }
}
window.addEventListener('scroll', reveal);

//TODO: make a popup for newsletter and contact us
function togglePopup(){
  document.getElementById("popup-id").classList.toggle("active");
}

function alertForm(){
  alert("Newsletter in development.");
}