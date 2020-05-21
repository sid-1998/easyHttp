function easyHttp(){
    this.http = new XMLHttpRequest();
}

//GET method
easyHttp.prototype.get = function(url, callback){
    this.http.open('GET', url, true);
    //saving the instance to be used in the function as the scope for this will be different.
    // in ES6 we use arrow function to fix this
    let self = this;

    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null,self.http.responseText);
        }
        else{
            callback(`ERROR: ${self.http.status}`)
        }
    }
    
    this.http.send();
}

easyHttp.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);
    
    this.http.setRequestHeader('Content-type', 'application/json');
    let self = this;
    
    this.http.onload = function(){
        callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}