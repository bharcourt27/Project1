// TODO: 
// User will enter in First name and be saved to local storage 
// user will enter last name and stored to local storage
// user will enter date and be stored to local storage
// Object array will be needed
// First,Last and Date will need to be shown with story once SAVE is clicked.


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
        food: food
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
    alert("This story has been distroyed.");
    this.textContent = "Distroy"; 
});

// Story options
const space = document.getElementById('space').value;
const haunted = document.getElementById('haunted').value;
const cooking = document.getElementById('cooking').value;

document.getElementById('cooking').addEventListener("click", function() {
    alert(`A ${firstName.value} chef decided to make a ${adjective.value} dish using ${pluralNoun.value}. However, the recipe called for a trip to the ${place.value} to find a rare spice.\
    While there, a ${adjectivetwo.value} ${animal.value} stole their bag of ${food.value}, leaving them scrambling to finish the meal. Somehow, it turned out delicious!`);
    
});


console.log(cooking)



// when one story is selected 
// answers from users will populate on story
// story will display to user when SAVE is clicked


// all user input will be saved to local storage
// user choices will be deleted when CLEAR is clicked 