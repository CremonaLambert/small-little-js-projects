fetch("https://dummyjson.com/users").then(function(response){
    return response.json();
}).then(function(data){
    console.log(data.users);
    console.table(data.users);

    







});