const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirm = document.getElementById("password-confirm")

const signup_btn = document.getElementById("signup")
const login_btn = document.getElementById("login")

const user_data  = {user: username.value, email: email.value, pass: password.value}

console.log(user_data);

pages = {}

pages.postAPI = async (url, data) =>{
    try{
        return await fetch(url, {
            method: "post",
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

pages.getAPI = async (url) =>{
    try{
        return await fetch(url, {
            method: "post"
        })
    }catch(error){
        console.log(error);
    }
}

pages.home = async (url) =>{
    await fetch(url)
}