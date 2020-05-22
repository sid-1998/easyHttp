class EasyHttp{
    //GET method
    get(url){
        return new Promise((resolve, reject)=>{
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err=> reject(err));
        })

    }

    post(url, data){
        return new Promise((resolve, reject)=>{
            fetch(url,{
                method: 'Post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data) 
            })
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err));
        })
    }
}