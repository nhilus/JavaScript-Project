
//GET DATA____________________________________________________________________________
const nameInput  = document.querySelector("#fullname");
const email      = document.querySelector("#email");
const message    = document.querySelector("#message");
const success    = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


//VALIDATE DATA________________________________________________________________________
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

// CLEAN ERROR / SUCCESS MESSAGE_____________________________________________________

function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}


//CHECK IF EMAIL IS VALID___________________________________________________________

function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}


// POST FORMDATA FETCH API___________________________________________________________

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
    .then(res => {
        return res.json();
      }) 
      .then(data=>{
        alert(data.message);
      })
    .then(data => console.log(data))
})


// GOOGLE MAPS API__________________________________________________________________

let map;

 function initMap() {
   map = new google.maps.Map(document.getElementById("map"), {
     center: { lat: 41.22062, lng: -8.68652 },
     zoom: 18,
   });
 }

 window.initMap = initMap;


 //FETCH FROM RANDOM USER API_______________________________________________________

async function getRandomUser(){
    const users = await fetch("https://randomuser.me/api/?results=2")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

    let json = JSON.stringify(users.results);
    window.localStorage.setItem("users",json);
}

async function checkLocalStorageAndDisplay(){
    let userList = window.localStorage.getItem('users');
    if(userList==null){
        await getRandomUser();
        userList = window.localStorage.getItem('users');
    }

    userList=JSON.parse(userList);

    for(let i=0 ; i < userList.length; i++){
        displayUser(userList[i],i);
    }    
}

function displayUser(user, idx){
    const image = document.getElementById('userImg'+(idx+1));
    const name  = document.getElementById('userName'+(idx+1));
    const email = document.getElementById('usereEmail'+(idx+1));

    image.setAttribute('src', `${user.picture.large}`);
    name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
    email.innerText = `${user.email}`;
}

checkLocalStorageAndDisplay();