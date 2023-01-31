
// function topNposts(n, field, posts) {
//     let numb = n;
//     if(typeof numb !== "number"){
//         return null;
//     }else if(typeof numb === "number"){
//         return null;
//     }
    
//     let univ = field;
//     if(typeof univ !== "string" || typeof univ === "number"){
//         return null;
//     }else if(typeof univ === "string"){
//         return univ;
//     }
    
//     let tell = posts
//     if(typeof univ !== "string"){
//         return null;
//     }else if(typeof univ === "string"){
//         return univ;
//     }
//     }
//     console.log(topNposts(2, "naerobi", never));








// describe("Testing topNposts", () => {
//     test("Should return the top n posts given the criteria", () => {
//         const response = topNposts(2, "likes", firstPosts)
//         expect(response).toEqual("Africa University-Ben Kas University")

//         const response_comments = topNposts(3,"comments", firstPosts)
//         expect(response_comments).toEqual("Random University-Africa University-Money University")
//     })

//     test("Passing a field that does not exist should return 'null'" , () => {
//         const response_null = topNposts(3,"something", firstPosts)
//         expect(response_null).toStrictEqual(null)
//     })

//     test("Asking to return more universities than we can should return the ones available", () => {
//         const response = topNposts(10, "likes", firstPosts)
//         expect(response).toEqual("Africa University-Ben Kas University-Money University-Random University-Ben Kas University")

//     })
// })





//  @param {number} n : number of posts to be returned
//   * @param {string} field : the field to base your criteria on
//   * @param {object[]} posts the list of posts



const firstPosts = [
    {
        uuid: 1,
        comments: 23,
        faculty: "engineering",
        university: "Ben Kas University",
        likes: 1132,
        text: "Would never go back"
    },
    {
        uuid: 2,
        comments: 83,
        faculty: "economics",
        university: "Money University",
        likes: 972,
        text: "I'm recommending this to anyone"
    },
    {
        uuid: 3,
        comments: 186,
        faculty: "engineering",
        university: "Random University",
        likes: 620,
        text: "The best experience"
    },
    {
        uuid: 4,
        comments: 88,
        faculty: "architecture",
        university: "Africa University",
        likes: 2551,
        text: "Something to never go through again"
    },
    {
        uuid: 5,
        comments: 8,
        faculty: "engineering",
        university: "Ben Kas University",
        likes: 23,
        text:"Well, it is what it is"
    }
];
















































//----------------------------------------------------------------------

//very important


// for loop
// for(let i=0; i < firstPosts.length; i++){
//     console.log(firstPosts[i]);
// }




//foreach
// firstPosts.forEach(function(posts){
//     // console.log(posts)
//     console.log(posts.likes)
// })



// get age of 21 years old
// filter
// const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
// let canDrinkBeer = [];
// for(let i=0; i < ages.length; i++){
//     if(ages[i] >= 21){
//         canDrinkBeer.push(ages[i]);
//     }
// }
// console.log(canDrinkBeer);

//or
// const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
// const canDrinkBeer = ages.filter(function(age){
//     if(age > 21){
//         return true;
//     }
// })
// console.log(canDrinkBeer)

//or short form
// const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
// const canDrinkBeer = ages.filter(age => age >= 21);
// console.log(canDrinkBeer); 


// filter faculties of univesity

// const universityFaculty = firstPosts.filter(function(faculte){
//     if(faculte.faculty === "engineering"){
//         return true;
//     }
// });

// console.log(universityFaculty)

// filter post-likes 
// const likesPosts = firstPosts.filter(function(aime){
//     if(typeof aime.likes === "number"){
//         return true;
//     }
// });
// console.log(likesPosts)

//or short form
// const likesPosts =firstPosts.filter(aime => typeof aime.likes === "number");
// console.log(likesPosts);




// create list of all the likes 

// const allLikes = firstPosts.map(function(jAime){
//  return jAime.likes;
// });
// console.log(allLikes)

// let newCopy = [0];

// for (i = 0; i < allLikes.length; i++) {
//     newCopy[i] = allLikes[i];
// }
// console.log(newCopy)

// let largest = Math.max.apply(Math, newCopy);
// console.log(largest)

// newCopy.splice(newCopy.indexOf(largest), 1);

// Secondelargest = Math.max.apply(Math, newCopy);
// console.log(Secondelargest);



// how to map university names

// const univList = firstPosts.map(function(masomo){
//     return masomo.university;
// });
// console.log(univList)



// const allLikes = firstPosts.map(function(jAime){
//     return `${jAime.likes}`
// })
// console.log(allLikes)


// for fun
// const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
//  squareRoot = ages.map(function(rasine){
//     return Math.sqrt(rasine);
//  })
// console.log(squareRoot)

// const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
// const divisibleBy12 = ages.map(function(by12){
//     return by12 / 12;
// })
// console.log(divisibleBy12)

 //sort

// const sortedCompanies = companies.sort(function(c1, c2){
//     if(c1.start . c2.start) {
//         return 1;
//     }else{
//         return -1
//     }
// });
// console.log(sortedCompanies);
//or shortform

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);


//sort by order

// const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
// const sortByAges = ages.sort()
// console.log(sortByAges);
//with this it is working for two number but not for one number at lenght 10 we can see 5 normally 5 was supposed to be first


//to fix that tp this instead
// const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
// const sortByAges = ages.sort((a, b) => a - b);
// console.log(sortByAges);

//to reverse it just play with b and a  (important)  <---------
// const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
// const sortByAges = ages.sort((a, b) => b - a);
// console.log(sortByAges);
// let n = sortByAges.slice(0,2);
// console.log(n)



// gonna show you the deference between for loop and reduce

// const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
// let sumOfAge = 0;

// for (let i = 0; i < ages.length; i++){
//     sumOfAge += ages[i];
// }
// console.log(sumOfAge);


// reduce
// const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
// const sumOfAge = ages.reduce(function(total, myaka){
//     return total + myaka;
// },0);
// console.log(sumOfAge);

// // reduce short form
// const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
// const sumOfAge = ages.reduce((total, myaka) => total + myaka, 0);
// console.log(sumOfAge);





























// let newArrayOfFirstPosts = firstPosts.map(firstPosts => { return{"likes": firstPosts.likes}})
// // let newCopyOfFirstPosts = [0];

// for (i = 0; i < newArrayOfFirstPosts.length; i++) {
//     newCopyOfFirstPosts[i] = newArrayOfFirstPosts[i];
// }
// console.log(newCopyOfFirstPosts)

// let largest = Math.max.apply(Math, newCopyOfFirstPosts);
// console.log(largest)

// newCopyOfFirstPosts.splice(newCopyOfFirstPosts.indexOf(largest), 1);

// Secondelargest = Math.max.apply(Math, newCopyOfFirstPosts);
// console.log(Secondelargest);

// console.log(newArrayOfFirstPosts)







// let newUser = firstPosts.map(firstPosts => { return{"likes": firstPosts.likes}})

// console.log(newUser);
// const max = firstPosts.reduce((acc, item) => acc = acc > item.likes ? acc : item.likes, 0);
// console.log(max)



// let bestLikes = firstPosts.reduce((max, curren)=> max.likes > curren.likes ? max : curren);
// console.log(bestLikes.likes);
//----------------------------------------------------------------
// let List= [{votes:4},{votes:8},{votes:7}]

// let objMax = List.reduce((max, curren) => max.votes > curren.votes ? max : curren);

// console.log(objMax)
//-----------------------------------------------------------------
// let numbers = [1,2,3,4,5,6,7,8,9];
// for (let index=0; index< numbers.length; index++){
//     console.log(index,numbers[index]);
// }
//---------------------------------------------------------------------
 

//how to get the second largest number
// const arr = [11,244,7,6,25,19,47,10];

//  const getSecondLargestNumber = (arr =[])=>{
//     let largestNumber = arr[0];
//     let secondLargestNumber = arr[0];

//     for (let index = 0; index < arr.length; index++){
//         if(arr[index] > largestNumber){
//             secondLargestNumber = largestNumber;
//             largestNumber = arr[index];
//         }else if(arr[index] > secondLargestNumber){
//             secondLargestNumber = arr[index];
//         }
//     }
//     return secondLargestNumber;
//  }
//  console.log(getSecondLargestNumber(arr));
//--------------------------------------------------

// how to get the largest number

// const numbers = [1,2,3,4,5,6,7,8,9];
// const largestNumber = (Values) => {
//     let highest = 0;
//     for(let index = 0; index < Values.length; index+=1){
//         if(Values[index] > highest){
//             highest = Values[index];
//         }
//     }
//     return highest;
// };
// // console.log(largestNumber(numbers));

// //ex6 operator

// console.log(Math.max(...numbers));

 //-----------------------------------------------------------------   

//  const array1 = [
//     {id: 1, val: 60},
//     {id: 2, val: 2},
//     {id: 3, val: 89},
//     {id: 4, val: 78}
//   ];
//   const array2 = [1,6,8,79,45,21,65,85,32,654];


//   const max = array1.reduce((acc, item) => acc = acc > item.val ? acc : item.val, 0);
//   const max2 = array2.reduce((acc, item) => acc = acc > item ? acc : item, 0);
  
//   console.log(max);
//   console.log(max2);



// Object.defineProperty(Array.prototype, 'min',
// {
//     value: function(f)
//     {
//         f = f || (v => v);
//         return this.reduce((a, b) => (f(a) < f(b)) ? a : b);
//     }
// });

// Object.defineProperty(Array.prototype, 'max',
// {
//     value: function(f)
//     {
//         f = f || (v => v);
//         return this.reduce((a, b) => (f(a) > f(b)) ? a : b);
//     }
// });

// console.log([1,2,3,4,5,6,7,8,9].max());
// // console.log([1,2,3,4,5,6,7,8,9].max(x => x*(4-x)));
// console.log([1,2,3,4,5,6,7,8,9].min());
// // console.log([1,2,3].min(x => x*(4-x)));




//-----------------------------------------------------------------------



// let arlah = [267, 306, 108, 50, 909, 200];
// let newCopy = [0];


// for (i = 0; i < arlah.length; i++) {
//     newCopy[i] = arlah[i];
// }
// console.log(newCopy)

// let largest = Math.max.apply(Math, newCopy);
// console.log(largest)

// newCopy.splice(newCopy.indexOf(largest), 1);

// Secondelargest = Math.max.apply(Math, newCopy);
// console.log(Secondelargest);

//------------------------------------------------------------