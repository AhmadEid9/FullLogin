pages = {}

pages.postAPI = async (url) =>{
    try{
        return await fetch(url, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: username,
                password: user_password,
                email: user_mail
              })
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