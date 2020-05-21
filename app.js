const http = new easyHttp();

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(posts);
//     }
// });

// get a single post 
//make a get request on https://jsonplaceholder.typicode.com/posts/1

// POST data
data = {
    title: 'custom',
    body: 'new post'
};
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(post)
//     }
// });

http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
    if(err){
        console.log(err);
    }
    else{
        console.log(post);
    }
})