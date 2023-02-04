fetch("https://dummyjson.com/users").then(function(response){
    return response.json();
}).then(function(data){
    // console.log(data.users);
    // console.table(data.users);

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


    const cardContainer = document.createElement('div'); // outer container
    cardContainer.className = 'card_container';          //

//-----------------------start 1st box--------------------

        /*<div class="image_and_username">
            <img src="https://robohash.org/hicveldicta.png" alt="cremona">
            <h2 class="name">cremona lambert</h2>
        </div>*/

    const imageAndUsername = document.createElement('div');  // image and username section
    imageAndUsername.className = 'image_and_username';       //


    const image = document.createElement('img');            // image only
    image.src = 'https://robohash.org/hicveldicta.png';     //
    image.alt = 'cremona';                                  //

    const userName = document.createElement('h2');         // username first and lastname
    userName.className = 'name';                           //
    userName.innerText = 'cremona lambert';                //
//---------------------end---------------------------------------->

    imageAndUsername.append(image, userName);           // image and name in one box
    console.log(imageAndUsername);                      //

//---------------------------------------------------------------->

    const iconContainer = document.createElement('div');
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
    emailSpan.innerText = 'bertierclarck@gmail.com';        //
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
    phoneSpan.innerText = '+123-123-123-123';
    //-------------------------------------------------------------------->    

    phoneContainer.append(iconPhone, phoneSpan);    // phone append (2)
    console.log(phoneContainer);

    //-------------------------------------------------------------------->
    













});