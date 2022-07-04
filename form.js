
//Get data____________________________________________________________________________
const nameInput  = document.querySelector("#fullname");
const email      = document.querySelector("#email");
const message    = document.querySelector("#message");
const success    = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


//Validar data________________________________________________________________________
function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length < 1 ){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(message.value.length < 1){
        errorNodes[2].innerText = "Please enter a message";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = "Success!";
    }
}

// Limpar erro / Mensagem de sucesso__________________________________________________

function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}


//Checkar se email é válido___________________________________________________________

function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}


// POST Form data Fetch API___________________________________________________________

const form = document.getElementById('contactForm');
 
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const payload = new FormData(form);

    let myHeaders = new Headers()
    myHeaders.append("Content-type", "application/json; charset=UTF-8");

    fetch('http://localhost:6868/contactform',{
    method: 'POST',  
    headers:myHeaders,
    body: JSON.stringify(Object.fromEntries(payload)),
    })
    .then(res => res.json())
    .then(data => console.log(data))
})
//__________________________________________________________________________________

// MAP______________________________________________________________________________

let map;

 function initMap() {
   map = new google.maps.Map(document.getElementById("map"), {
     center: { lat: 41.22062, lng: -8.68652 },
     zoom: 8,
   });
 }

 window.initMap = initMap;

 //_________________________________________________________________________________
