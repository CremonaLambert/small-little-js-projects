fetch("https://dog.ceo/api/breed/hound/images").then(function(response){
    return response.json();
}).then(function(data){
    // console.log(data.message);
    console.table(data.message)
})