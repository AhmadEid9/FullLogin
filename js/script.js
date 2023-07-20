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