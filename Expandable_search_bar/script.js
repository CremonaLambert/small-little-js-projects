
const icon = document.querySelector(".icon");
const searchContainer = document.querySelector(".search_container");
icon.onclick = function(){
    searchContainer.classList.toggle("active")
}


const typeYourText = document.getElementById('wesearch');
const clear = document.querySelector('.clear');
clear.addEventListener('click', function(e){
    typeYourText.value = "";
})


