

const formEl = document.querySelector('form'); // assuming the use of form element with no class or ID

// submit when I tell you code
function handleFormSubmit(event) {
    event.preventDefault();

    // User info
    const firstName = document.getElementById('firstName').value; //id must equal #firstName in HTML
    const lastName = document.getElementById('lastName').value; //id must equal #lastName in HTML
    const date = document.getElementById('date').value; //id must equal #date in HTML
    // Fill in for Ad Lib section //
    const noun = document.getElementById('noun').value; //First noun in form
    const adjective = document.getElementById('adjective').value;
    const pluralNoun = document.getElementById('pluralNoun').value;
    const place = document.getElementById('place').value;
    const adjectivetwo = document.getElementById('adjectivetwo').value;
    const animal = document.getElementById('animal').value;
    const food = document.getElementById('food').value;
    


    // ADD ERROR MESSAGE FOR INCOMPLETE FORM //
    if (!firstName || !lastName || !date) {
        //errorElement.textContent = "Please complete all fields."; 
        return; 
    }

    // Object array will be needed
    const blogPost = {
        firstName: firstName,
        lastName: lastName,
        date: date,
        noun: noun,
        adjective: adjective,
        pluralNoun: pluralNoun,
        place: place,
        adjectivetwo: adjectivetwo,
        animal: animal,
        food: food,
    };

    // allowing object to be stored in local stoarge or to create a new array
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    // Java debugger tool thingy
    console.log(blogPost)
    // reset form
    formEl.reset();
}; 

formEl.addEventListener('submit', handleFormSubmit);

// Clear button
document.getElementById("clearButton").addEventListener("click", function() {
   formEl.reset(); 
});


//=======================================================================================COOKING STORY
const cookingMessage = document.getElementById('cookingMessage');

// Get the modal
let modal = document.getElementById("myModal");

// button that opens the modal
let cooking = document.getElementById("cooking");

// element that closes the modal
let span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// cooking.onclick = function() {
//   modal.style.display = "block";
//   if (cookingMessage) {
//   cookingMessage.textContent = `A ${noun.value} chef decided to make a ${adjective.value} dish using ${pluralNoun.value}. However, the recipe called for a trip to the ${place.value} to find a rare spice.\
//       While there, a ${adjectivetwo.value} ${animal.value} stole their bag of ${food.value}, leaving them scrambling to finish the meal. Somehow, it turned out delicious!`;
// }


// let cookingMessageText = cookingMessage.textContent;

// // // Store the cooking message in local storage
//  localStorage.setItem('cookingMessage', cookingMessageText);
//  };

// // // To retrieve the message from local storage when needed
//  window.onload = function() {
//  const storedcookingMessage = localStorage.getItem('cookingMessage');
//  if (storedcookingMessage) {
//    document.getElementById('cookingMessage').textContent = storedcookingMessage;
//  }
//  };


// // When the user close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };


// =======================================================================================SPACE ADVENTURE
const spaceMessage = document.getElementById('spaceMessage');

// Get the modal
let modalS = document.getElementById("myModalS");

// button that opens the modal
let space = document.getElementById("space");

// element that closes the modal
let spanS = document.getElementsByClassName("closeS")[0];

// When the user clicks the button, open the modal 
// space.onclick = function() {
//   modalS.style.display = "block";
//   if (spaceMessage) {
//   spaceMessage.textContent = `An astronaut\'s ${noun.value} malfunctioned during a ${adjective.value} space mission. Stranded without enough ${pluralNoun.value}, they had to land on ${place.value}.
// There, a ${adjectivetwo.value} ${animal.value} offered them some ${food.value} in exchange for their help fixing a spaceship. It was a galaxy-changing day!`;
// }


// let spaceMessageText = spaceMessage.textContent;

// // // Store the cooking message in local storage
//  localStorage.setItem('spaceMessage', spaceMessageText);
//  };

// // // To retrieve the message from local storage when needed
//  window.onload = function() {
//  const storedspaceMessage = localStorage.getItem('spaceMessage');
//  if (storedspaceMessage) {
//    document.getElementById('spaceMessage').textContent = storedspaceMessage;
//  }
//  };


// // When the user close the modal
// spanS.onclick = function() {
//   modalS.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalS) {
//     modalS.style.display = "none";
//   }
// };

// =======================================================================================HAUNTED STORY

const hauntedMessage = document.getElementById('hauntedMessage');

// Get the modal
let modalH = document.getElementById("myModalH");

// button that opens the modal
let haunted = document.getElementById("haunted");

// element that closes the modal
let spanH = document.getElementsByClassName("closeH")[0];

// When the user clicks the button, open the modal 
// haunted.onclick = function() {
//   modalH.style.display = "block";
//   if (hauntedMessage) {
//   hauntedMessage.textContent = `The brave ${noun.value} ventured into the ${adjective.value} forest in search of ${pluralNoun.value}. Deep in the heart of the ${place.value}, they stumbled upon a ${adjectivetwo.value} ${animal.value} guarding a stash of ${food.value}.
// Will they escape with the treasure, or become part of the forest\'s legend?`;
// }


// let hauntedMessageText = hauntedMessage.textContent;

// // // Store the cooking message in local storage
//  localStorage.setItem('hauntedMessage', hauntedMessageText);
//  };

// // // To retrieve the message from local storage when needed
//  window.onload = function() {
//  const storedhauntedMessage = localStorage.getItem('hauntedMessage');
//  if (storedhauntedMessage) {
//    document.getElementById('hauntedMessage').textContent = storedhauntedMessage;
//  }
//  };


// // When the user close the modal
// spanH.onclick = function() {
//   modalH.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalH) {
//     modalH.style.display = "none";
//   }
// };


const submit = document.getElementById('submit-nextpage');

submit.addEventListener ('click', function() {
    window.location.href = "file:///Users/dylanpanepucci/OSU-Bootcamp/Project1-1/Project1/Brad's%20Files/bradFile.html"
});