import {universityData} from './data.js';
console.table(universityData);

/*<div class="image_container">
    <img src="./nust.png" alt="nust">
    <h2 class="university">namibia univesity of science and technoligy</h2>
</div>
            
<div class="container_faculty_likes">
    <p class="faculty">Faculity:<span class ="facult"> engineering</span></p>
    <p class="likes">Likes:<span class ="like"> 12</span></p>
</div>
            
<div class="container_comments_text">
    <p class="comments">comments:<span class ="comment"> comment vous allez</span></p>
    <p class="text">text:<span class ="texts"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed labore amet magnam unde odio sequi temporibus saepe repudiandae nobis ab hic a repellat itaque deserunt, tenetur fugiat dolores suscipit dicta?</span></p>
</div>*/

for (let innerContainerDiv of universityData){

    showUnivData(innerContainerDiv)
}

function showUnivData(innerContainerDiv){
    const imageContainer = document.createElement('div');
imageContainer.className = 'image_container';

const image = document.createElement('img');
image.src = './nust.png';
image.alt = 'nust';

const university = document.createElement('h2');
university.className = 'university';
university.innerText = 'namibia univesity of science and technoligy';

imageContainer.append(image, university);
console.log(imageContainer);


const containerFacultyLikes = document.createElement('div');
containerFacultyLikes.className = 'container_faculty_likes';

const faculty = document.createElement('p');
faculty.className = 'faculty';
faculty.innerText = 'faculty:';
const facult = document.createElement('span');
facult.className = 'facult'
facult.innerText = ' engineering';

const likes = document.createElement('p');
likes.className = 'likes';
likes.innerText = 'Likes:';
const like = document.createElement('span');
like.innerText = 'like';
like.innerText = ' 12';

faculty.append(facult);
likes.append(like);


containerFacultyLikes.append(faculty, likes);
console.log(containerFacultyLikes);

const containerCommentsText = document.createElement('div');
containerCommentsText.className = 'container_comments_text';

const comments = document.createElement('p');
comments.className = 'comments';
comments.innerText = 'comments:';
const comment = document.createElement('span');
comment.className = 'comment:';
comment.innerText = ' comment vous allez';

const text = document.createElement('p');
text.className = 'text';
text.innerText = 'text:';
const texts = document.createElement('span');
texts.className = 'texts';
texts.innerText = ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed labore amet magnam unde odio sequi temporibus saepe repudiandae nobis ab hic a repellat itaque deserunt, tenetur fugiat dolores suscipit dicta?';

comments.append(comment);
text.append(texts);

containerCommentsText.append(comments, text);
console.log(containerCommentsText);

document.querySelector('.inner_container').append(imageContainer, containerFacultyLikes, containerCommentsText);

};





