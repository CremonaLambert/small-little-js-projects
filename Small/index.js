import {firstPosts} from './data.js';
console.log(firstPosts);

// function cremona (num1, num2, num3){
//     let sum = num1 + num2 + num3;
//     return sum; 
// }

// result = cremona(12, 45, 6);
// console.log(result);

// topNposts(7, "likes", POSTS)  // should return the top 7 univs if we have at least 7 posts, else return the maximum univs available

function topNposts(n, field, posts){
 let sum = n + field + posts;
 console.log(sum);
 console.table(sum)
}
topNposts(firstPosts.sort((a,b) => a.uuid - b.uuid).[0], 
    firstPosts.sort((a, b) => b.likes - a.likes), 
    firstPosts.sort((a, b) => b.comments - a.comments));
