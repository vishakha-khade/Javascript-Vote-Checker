// const userName = document.querySelector('#name');
// const userAge = document.querySelector('#age');
// const userMob = document.querySelector('#mobile');

// const button = document.querySelector('#submit');
// const check = document.querySelector('#result');
// const check2 = document.querySelector('#result2');
// const voting = document.querySelector('#voter');


// button.addEventListener('click', function(){
//     let name = (userName.value);
//     if(name === ""){
//     console.error("Fill your name");
//     return;
//     }
//     let age = (userAge.value);
//     if(age === ""){
//     alert("fill your age")
//     return;
//     }
//     let mobile = (userMob.value);
//     if(mobile === ""){
//     alert("fill your mobile number");
//     return;
//     }
//     if(isNaN(mobile)){
//         alert("Please Enter Valid Phone no.")
//         return;
//     }
//     if(mobile.length !== 10 ){
//         alert("Enter Valid mobile number");
//         return;
//     }
//     if(age >= 60){
//         voting.textContent = userName.value + ", You are a Senior Voter";
//     }
//     else if(age >= 18){
//         voting.textContent = userName.value + ", You can vote";
//     }
//     else{
//         voting.textContent = userName.value + ", You cannot Vote";
//         check.textContent = "";
//     }
//     button.style.display = "none";
//     voting.style.display = "block";
//     resetBut.style.display = "block";
    
// });

// const resetBut = document.querySelector('#reset-button');
// resetBut.addEventListener('click', function(){
//     userName.value = "";
//     userAge.value ="";
//     userMob.value = "";
//     resetBut.style.display = "none";
//     voting.style.display = "none";

//     resetBut.style.display = "none";
//     button.style.display = "block";
// });


//IMPROVEMENT CODE
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const mobileInput = document.querySelector('#mobile');

const submitBtn = document.querySelector('#submit');
const resultMsg = document.querySelector('#result');
const errorMsg = document.querySelector('#result2');
const voterMsg = document.querySelector('#voter');
const result = document.querySelector('.result-card');
const nameError = document.querySelector('.name-error');
const ageError = document.querySelector('.age-error');
const mobileError= document.querySelector('.mobile-error');
const date = document.querySelector('#Date');

function checkVoting(){
    let name = nameInput.value.trim();

    if(name === ""){
        nameError.textContent = "Please enter your name ";
        nameInput.classList.add("input-error");
        return;
    }
     nameInput.classList.remove("input-error");
    nameError.textContent = "";

   let age = Number(ageInput.value);
    if(ageInput.value.trim() === ""){
        ageError.textContent = "Please enter your age";
        ageInput.classList.add("input-error");
        return;
    }
    ageInput.classList.remove("input-error");
    ageError.textContent = "";

    let mobile = mobileInput.value;

    if(mobile.trim() === ""){
        mobileError.textContent = "Please enter your mobile no."
        mobileInput.classList.add("input-error");
        return;
    }
        mobileInput.classList.remove("input-error");
        mobileError.textContent = "";

    if(isNaN(mobile)){
        mobileError.textContent = "Please enter valid phone number";
        mobileInput.classList.add("input-error");
        return;
    }

    if(mobile.length !== 10 ){
        mobileError.textContent = "Enter valid mobile number";
        mobileInput.classList.add("input-error");
        return;
    }

    if(!["6","7","8","9"].includes(mobile.charAt(0))){
    mobileError.textContent = "Enter valid phone no.";
    mobileInput.classList.add("input-error");
    return;
     }
    if(age < 0 || age > 150){
        ageError.textContent = "Enter valid age";
        ageInput.classList.add("input-error");
        return;
    }

    let firstName = getFirstName();
    voterMsg.className = "";
    if(age >= 60){
    //    let firstName = nameInput.value.split(" ")[0];
    //    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
       voterMsg.textContent =  firstName + ", You are a Senior Voter";
       voterMsg.classList.add("senior");
    }
    else if(age >= 18){
        // let firstName = nameInput.value.split(" ")[0];
        // firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        voterMsg.textContent =  firstName + ", You can Vote";
        // voterMsg.textContent = nameInput.value + ", You can vote";
        voterMsg.classList.add("success");
    }
    else{
    voterMsg.textContent = firstName + ", You Can not Vote";
    voterMsg.classList.add("failed");
    }
    result.style.display = "block"
    submitBtn.style.display = "none";
    voterMsg.style.display = "block";
    resetBut.style.display = "block";

    nameInput.disabled = true;
    ageInput.disabled = true;
    mobileInput.disabled = true;
}

submitBtn.addEventListener('click', checkVoting);

    
    function getFirstName(){

        let firstName = nameInput.value.split(" ")[0];
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

        
        const currDate = new Date();

        const formattedDate = currDate.toLocaleString("en-In", {
            weekday: "long",
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: "true",
            timeZone : "Asia/Kolkata"
        });

        date.textContent = formattedDate;

        return firstName;

    }

const resetBut = document.querySelector('#reset-button');

resetBut.addEventListener('click', function(){
    
    nameInput.value = "";
    ageInput.value ="";
    mobileInput.value = "";

    resetBut.style.display = "none";
    voterMsg.style.display = "none";

    voterMsg.classList.remove("senior", "success", "failed");
    voterMsg.textContent = "";

    submitBtn.style.display = "block";
    result.style.display = "none"

    nameInput.classList.remove("input-error");
    nameInput.classList.remove("input-success");

    nameError.textContent = "";
    ageError.textContent = "";
    mobileError.textContent = "";

    nameInput.disabled = false;
    ageInput.disabled = false;
    mobileInput.disabled = false;
    nameInput.focus();
});
document.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        checkVoting();
    }
})



