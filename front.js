// TODO: 
// User will enter in First name and be saved to local storage 
// user will enter last name and stored to local storage
// user will enter date and be stored to local storage
// Object array will be needed
// First,Last and Date will need to be shown with story once SAVE is clicked.


const formEl = document.querySelector('form'); // assuming the use of form element with no class or ID


function handleFormSubmit(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value; //id must equal #firstName in HTML
    const lastName = document.getElementById('lastName').value; //id must equal #lastName in HTML
    const date = document.getElementById('date').value; //id must equal #date in HTML
    const errorElement = document.getElementById('error'); //id must equal #error in HTML

    errorElement.textContent=""; //clears previous error message


    if (!firstName || !lastName || !date) {
        errorElement.textContent = "Please complete all fields."; 
        return; 
    }

    // Object array will be needed
    const blogPost = {
        firstName: firstName,
        lastName: lastName,
        date: date
    };

    
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    formEl.reset();
};

formEl.addEventListener('submit', handleFormSubmit);




// Drop down menu with three options for stories 
// when one story is selected 
// answers from users will populate on story
// story will display to user when SAVE is clicked



// stories will be shown on modal of second page.
// all user input will be saved to local storage

// user choices will be deleted when CLEAR is clicked 