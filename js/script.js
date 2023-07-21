const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password_confirm = document.getElementById("password-confirm")

const signup_btn = document.getElementById("signup")
const login_btn = document.getElementById("login")

pages.base_url = "http://localhost:2000/"

function validatePassword(pass, password_confirm) {
    if (password.value == password_confirm.value) {
        return true        
    } else {
        password.value = ""
        password_confirm.value = ""
    }
    
}

const user_data  = {user: username.value, email: email.value, pass: password.value}

console.log(user_data);

pages = {}

pages.postAPI = async (url, data) =>{
    try{
        return await fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }catch(error){
        console.log(error);
    }
}

// pages.getAPI = async (url) =>{
//     try{
//         return await fetch(url, {
//             method: "get",
//             headers: {
//                 'Accept': 'application/json',
//             }
//         })
//     }catch(error){
//         console.log(error);
//     }
// }

pages.home = async (url) =>{
    await fetch(url)
}

pages.signIn = async () =>{
    const url = pages.base_url + "signin.php"
    await pages.postAPI(url, user_data)
    .then((res) => { console.log(res);})
    .catch((error) => {
        console.log(error);
    })
}

signup_btn.addEventListener("click", pages.signIn)