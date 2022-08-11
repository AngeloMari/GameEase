const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

var userdata = [
    {
        "username": "michael",
        "password": 1234,
    },
    {
        "username": "angelo",
        "password": 619,
    },
    {
        "username": "jenner",
        "password": "sakalam",
    },
    {
        "username": "lester",
        "password": "lester123",
    }
]
                
function getInfo(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for (i =0; i < userdata.length; i++){
        if(username == userdata[i].username && password == userdata[i].password){
        	window.location.href="../Home/index.html";
            alert("Welcome"+ " "+ username);
            return
            }
   
        }
        alert("Incorrect credentials")
        window.location.href="index.html";
    }
