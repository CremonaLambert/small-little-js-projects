import {universityData} from './data.js';
// console.table(universityData);

/*
            <div class="card">
                <div class="image_container">
                    <img src="./nust.png" alt="nust">
                    <h2 class="university">namibia univesity of science and technoligy</h2>
                </div>
            
                <div class="container_faculty_likes">
                    <p class="faculty">Faculty:<span facult> engineering</span></p>
                    <p class="likes">Likes:<span class="like"> 12</span></p>
                </div>
            
                <div class="container_comments_text">
                    <p class="comments">comments:<span class="comment"> comment vous allez</span></p>
                    <p class="text">text:<span class="texts"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed labore amet magnam unde odio sequi temporibus saepe repudiandae nobis ab hic a repellat itaque deserunt, tenetur fugiat dolores suscipit dicta?</span></p>
                </div>             
            </div>

*/

for (let innerContainerDiv of universityData){

    showUnivData(innerContainerDiv)
}


function showUnivData(innerContainerDiv){

const card = document.createElement('div');      // outer most container
card.className = 'card';

//-------inner section (1)---------------------------

const imageContainer = document.createElement('div');  // image container
imageContainer.className = 'image_container';


const image = document.createElement('img');            // image
image.src = innerContainerDiv.image;
image.alt = innerContainerDiv.alt;


const university = document.createElement('h2');           // name of the university
university.className = 'university';
university.innerText = innerContainerDiv.university;
//--------end of inner section (1)--------------------



//-------------append image and name of university into -----> image container------------------->

imageContainer.append(image, university);                                    //(1)
// console.log(imageContainer);

//----------------------------------------------------------------------------------------------->



//-------inner section (2)----------------------------------
const containerFacultyLikes = document.createElement('div');                  // falculty container
containerFacultyLikes.className = 'container_faculty_likes';


const faculty = document.createElement('p');                            // faculty         
faculty.className = 'faculty';
faculty.innerText = 'faculty:';
const facult = document.createElement('span');
facult.className = 'facult'
facult.innerText = ' '+innerContainerDiv.faculty;


const likes = document.createElement('p');                                      // likes
likes.className = 'likes';
likes.innerText = 'Likes:';
const like = document.createElement('span');
like.innerText = 'like';
like.innerText = ' '+innerContainerDiv.likes;
//-----------end of section (2)--------------------


//-------append section (2)---------------------------------------------------------------------------->
faculty.append(facult);
likes.append(like);

                                                                                //(2)
containerFacultyLikes.append(faculty, likes);
// console.log(containerFacultyLikes);

//--------------------------------------------------------------------------------------------------->

const containerCommentsText = document.createElement('div');                    // comment container
containerCommentsText.className = 'container_comments_text';


const comments = document.createElement('p');                                   // comment
comments.className = 'comments';
comments.innerText = 'comments:';
const comment = document.createElement('span');
comment.className = 'comment:';
comment.innerText = ' '+innerContainerDiv.comments;


const text = document.createElement('p');                                         // text
text.className = 'text';
text.innerText = 'text:';
const texts = document.createElement('span');
texts.className = 'texts';
texts.innerText = ' '+innerContainerDiv.text;


//-----------------------append section (3)------------------------------------------------------------>
comments.append(comment);
text.append(texts);

containerCommentsText.append(comments, text);
// console.log(containerCommentsText);

card.append(imageContainer, containerFacultyLikes, containerCommentsText);
document.querySelector('.inner_container').append(card);

};





