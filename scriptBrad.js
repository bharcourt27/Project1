// Retrieving story from local storage
const newPost = JSON.parse(localStorage.getItem('blogPosts'));
     console.log(newPost);
    
// Story Posted from User
    const adjective = newPost[0].adjective;
    const adjectivetwo = newPost[0].adjectivetwo;
    const animal = newPost[0].animal;
    const date = newPost[0].date;
    const firstName = newPost[0].firstName;
    const food = newPost[0].food;
    const lastName = newPost[0].lastName;
    const noun = newPost[0].noun;
    const place = newPost[0].place;
    const pluralNoun = newPost[0].pluralNoun;


//=======================================================================================COOKING STORY
const cookingMessage = document.getElementById('cookingMessage');

// modal
let modal = document.getElementById("myModal");

// button for modal
let cooking = document.getElementById("cooking");

// element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
cooking.onclick = function() {
  modal.style.display = "block";
  if (cookingMessage) {
  cookingMessage.textContent = `A ${noun} chef decided to make a ${adjective} dish using ${pluralNoun}. However, the recipe called for a trip to the ${place} to find a rare spice.\
      While there, a ${adjectivetwo} ${animal} stole their bag of ${food}, leaving them scrambling to finish the meal. Somehow, it turned out delicious!`;
}


let cookingMessageText = cookingMessage.textContent;

// // Store the cooking message in local storage
 localStorage.setItem('cookingMessage', cookingMessageText);
 };

// // To retrieve the message from local storage when needed
 window.onload = function() {
 const storedcookingMessage = localStorage.getItem('cookingMessage');
 if (storedcookingMessage) {
   document.getElementById('cookingMessage').textContent = storedcookingMessage;
 }
 };


// When the user close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


// =======================================================================================SPACE ADVENTURE
const spaceMessage = document.getElementById('spaceMessage');

// modal
let modalS = document.getElementById("myModalS");

// button for modal
let space = document.getElementById("space");

// element that closes the modal
let spanS = document.getElementsByClassName("closeS")[0];

// When the user clicks the button, open the modal 
space.onclick = function() {
  modalS.style.display = "block";
  if (spaceMessage) {
  spaceMessage.textContent = `An astronaut\'s ${noun} malfunctioned during a ${adjective} space mission. Stranded without enough ${pluralNoun}, they had to land on ${place}.
There, a ${adjectivetwo} ${animal} offered them some ${food} in exchange for their help fixing a spaceship. It was a galaxy-changing day!`;
}


let spaceMessageText = spaceMessage.textContent;

// // Store the cooking message in local storage
 localStorage.setItem('spaceMessage', spaceMessageText);
 };

// // To retrieve the message from local storage when needed
 window.onload = function() {
 const storedspaceMessage = localStorage.getItem('spaceMessage');
 if (storedspaceMessage) {
   document.getElementById('spaceMessage').textContent = storedspaceMessage;
 }
 };


// When the user close the modal
spanS.onclick = function() {
  modalS.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalS) {
    modalS.style.display = "none";
  }
};

// =======================================================================================HAUNTED STORY

const hauntedMessage = document.getElementById('hauntedMessage');

// modal
let modalH = document.getElementById("myModalH");

// button for modal
let haunted = document.getElementById("haunted");

// element that closes the modal
let spanH = document.getElementsByClassName("closeH")[0];

// When the user clicks the button, open the modal 
haunted.onclick = function() {
  modalH.style.display = "block";
  if (hauntedMessage) {
  hauntedMessage.textContent = `The brave ${noun} ventured into the ${adjective} forest in search of ${pluralNoun}. Deep in the heart of the ${place}, they stumbled upon a ${adjectivetwo} ${animal} guarding a stash of ${food}.
Will they escape with the treasure, or become part of the forest\'s legend?`;
}


let hauntedMessageText = hauntedMessage.textContent;

// // Store the cooking message in local storage
 localStorage.setItem('hauntedMessage', hauntedMessageText);
 };

// // To retrieve the message from local storage when needed
 window.onload = function() {
 const storedhauntedMessage = localStorage.getItem('hauntedMessage');
 if (storedhauntedMessage) {
   document.getElementById('hauntedMessage').textContent = storedhauntedMessage;
 }
 };


// When the user close the modal
spanH.onclick = function() {
  modalH.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalH) {
    modalH.style.display = "none";
  }
};

// =============================================================================== Story Messsage Variables
    const storedcookingMessage = localStorage.getItem('cookingMessage');
    const storedspaceMessage = localStorage.getItem('spaceMessage');
    const storedhauntedMessage = localStorage.getItem('hauntedMessage');   
   
 
// DO NOT CHANGE-CODE GIVEN FROM BRAD FOR SECOND HTML PAGE- Added variables to be called to display first, last name and date
     const stories = JSON.parse(localStorage.getItem("adlibStories")) || [
          { author: `${firstName} ${lastName}`},
     ];
 

    const storiesContainer = document.getElementById("stories");
    stories.forEach(story => {
        const storyElement = document.createElement("div");
        storyElement.classList.add("story");
        storyElement.innerHTML = `<h2>Masterpiece created by: ${story.author} on ${date}.</h2>`;
        storiesContainer.appendChild(storyElement);
    });

 
 // =================================================== Back bottom to Home page, Clears local storage.
const back = document.getElementById('back');

 back.addEventListener ('click', function() {
    window.location.href = "index.html";
    localStorage.clear();
});
