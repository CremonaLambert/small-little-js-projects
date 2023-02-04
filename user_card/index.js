fetch("https://dummyjson.com/users").then(function(response){
    return response.json();
}).then(function(data){
    // console.log(data.users);
    // console.table(data.users);

    for (let containerDiv of data.users){

        showContainerCard(containerDiv)
    };

    function showContainerCard(containerDiv){
        /* <div class="card_container">
        <div class="image_and_username">
            <img src="https://robohash.org/hicveldicta.png" alt="cremona">
            <h2 class="name">cremona lambert</h2>
        </div>
        
        <div class="icon_container">
            <div class="envelope">
                <i class="fa-solid fa-envelope"></i>
                <span class="email">cremonalambert@gmail.com</span>
            </div>

            <div class="fa_phone">
                <i class="fa-solid fa-phone"></i>
                <span class="phone">+123-123-123-123</span>
            </div>

            <div class="venus_mars">
                <i class="fa-solid fa-venus-mars"></i>
                <span class="gender">male</span>
            </div> 
        </div> 
    </div>*/


    const cardContainer = document.createElement('div'); // outer most container
    cardContainer.className = 'card_container';          //

//-----------------------start 1st box--------------------

        /*<div class="image_and_username">
            <img src="https://robohash.org/hicveldicta.png" alt="cremona">
            <h2 class="name">cremona lambert</h2>
        </div>*/

    const imageAndUsername = document.createElement('div');  // image and username section
    imageAndUsername.className = 'image_and_username';       //


    const image = document.createElement('img');            // image only
    image.src = containerDiv.image;     //
    image.alt = containerDiv.username;                                  //

    const userName = document.createElement('h2');         // username first and lastname
    userName.className = 'name';                           //
    userName.innerText = containerDiv.firstName + ' ' + containerDiv.lastName;                //
//---------------------end---------------------------------------->

    imageAndUsername.append(image, userName);           // image and name in one box
    console.log(imageAndUsername);                      //

//---------------------------------------------------------------->

    const iconContainer = document.createElement('div');           // icon container
    iconContainer.className = 'icon_container';


//-------------------start 2nd box -----------------------------------
          /*<div class="envelope">
                <i class="fa-solid fa-envelope" id ="envelope"></i>
                <span class="email">cremonalambert@gmail.com</span>
            </div>

           <div class="fa_phone">
                <i class="fa-solid fa-phone" id ="phone"></i>
                <span class="phone">+123-123-123-123</span>
            </div>

            <div class="venus_mars">
                <i class="fa-solid fa-venus-mars" id ="venus"></i>
                <span class="gender">male</span>
            </div> */
    const envelopeContainer = document.createElement('div');  // envelope div comtainer
    envelopeContainer.className = 'envelope';                 //     


    const EnvelopeIcon = document.createElement('i');         // envelope icon 
    EnvelopeIcon.className = 'fa-solid fa-envelope';           //
    EnvelopeIcon.id = 'envelope'; 


    const emailSpan = document.createElement('span');       // email span section
    emailSpan.className = 'email';                          //
    emailSpan.innerText = containerDiv.email;        //
    //--------------------------------------------------------------------->

    envelopeContainer.append(EnvelopeIcon, emailSpan);         // envelope append (1)
    console.log(envelopeContainer);                            //
    //--------------------------------------------------------------------->

    const phoneContainer = document.createElement('div');  // phone div contenair
    phoneContainer.className = 'fa_phone';                 //

    
    const iconPhone = document.createElement('i');        // phone icon
    iconPhone.className ='fa-solid fa-phone';              //
    iconPhone.id = 'phone';

    const phoneSpan = document.createElement('span');     // phone span
    phoneSpan.className = 'phone';                         //
    phoneSpan.innerText = containerDiv.phone;
    //-------------------------------------------------------------------->    

    phoneContainer.append(iconPhone, phoneSpan);    // phone append (2)
    console.log(phoneContainer);

    //-------------------------------------------------------------------->
    /*<div class="venus_mars">
        <i class="fa-solid fa-venus-mars" id ="venus"></i>
        <span class="gender">male</span>
    </div> */

    const genderContainer = document.createElement('div');     //gender div container
    genderContainer.className = 'venus_mars';                   //

    const genderIcon = document.createElement('i');            // venus icon
    genderIcon.className = 'fa-solid fa-venus-mars';            //
    genderIcon.id = 'venus';

    const genderSpan = document.createElement('span');        // gender span
    genderSpan.className = 'gender';                          //
    genderSpan.innerText = containerDiv.gender;

    //------------------------------------------------------------------------->

    genderContainer.append(genderIcon, genderSpan);             //gender append (3)
    console.log(genderContainer);

    //------------------------------------------------------------------------->


    //-----------envelope append (1)---phone append (2)-------//gender append (3)------> in to iconContainer

    iconContainer.append(envelopeContainer, phoneContainer, genderContainer);     // icon container full
    console.log(iconContainer);
    //------------------------------------------------------------------------------------------>

    //------------------finally icon container full and image and username ------> in to the outer most container called card container

    cardContainer.append(imageAndUsername, iconContainer);
    console.log(cardContainer);

    // now i should add a queryselector in order for me to be able to call it later 

    document.querySelector('.container').append(cardContainer);




    };

   







});