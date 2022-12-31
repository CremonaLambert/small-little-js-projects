textToBeChanged = document.getElementById('textToBeChanged');
// console.log(textToBeChanged);
changer = document.getElementById('changer');
// console.log(changer);
upperButton = document.querySelector('.upper');
// console.log(upperButton);
clearButton = document.querySelector('.clear');
// console.log(clearButton);
lowerButton = document.querySelector('.lower');



//break to c#

upperButton.addEventListener('click', function(e){
    let manupulation = textToBeChanged.value
    changer.value = manupulation.toUpperCase(); 
})

// Break to C#

clearButton.addEventListener('click', function(e){
    let manupulation = textToBeChanged.value
    changer.value = "";
})

// Break to C#

lowerButton.addEventListener('click', function(e){
    let manupulation = textToBeChanged.value
    changer.value = manupulation.toLowerCase(); 
})



