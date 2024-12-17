

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

// =======================================================================================SPACE ADVENTURE
const spaceMessage = document.getElementById('spaceMessage');

// Get the modal
let modalS = document.getElementById("myModalS");

// button that opens the modal
let space = document.getElementById("space");

// element that closes the modal
let spanS = document.getElementsByClassName("closeS")[0];


// =======================================================================================HAUNTED STORY

const hauntedMessage = document.getElementById('hauntedMessage');

// Get the modal
let modalH = document.getElementById("myModalH");

// button that opens the modal
let haunted = document.getElementById("haunted");

// element that closes the modal
let spanH = document.getElementsByClassName("closeH")[0];

const submit = document.getElementById('submit-nextpage');

submit.addEventListener ('click', function() {
    window.location.href = "bradFile.html"
});
