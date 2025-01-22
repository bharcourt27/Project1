// TODO: Create a variable that selects the form element
var formElement = document.querySelector("#form");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmit(event) {
  event.preventDefault();
  var title = document.querySelector("#title").value;
  var content = document.querySelector("#content").value;
  if (!title || !content) {
    alert("Error: Please fill out all fields.");
    return;
  }
  var blogData = {
    title: title,
    content: content,
  };
  storeLocalStorage(blogData);
  redirectPage("blog.html");
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
addEventListener("submit", handleFormSubmit);
