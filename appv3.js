const http = new EasyHttp();

http.get('https://jsonplaceholder.typicode.com/users')
.then(data=>console.log(data));

const data = {
    name: 'Siddharth',
    username: 'sid-1998',
};
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/1', data)
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/1', data)
    .then(data=>console.log(data))
    .catch(err=>console.log(err));