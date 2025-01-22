// TODO: Create a variable that selects the main element, and a variable that selects the back button element
var mainElement = document.querySelector("main");
var backBtn = document.querySelector("#back");

// TODO: Create a function that builds an element and appends it to the DOM
function buildElement(tag, text, className) {
  var element = document.createElement(tag);
  element.textContent = text;
  element.className = className;
  mainElement.appendChild(element);
}

// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
  buildElement("h3", "No blog posts yet! Please check back later.", "no-posts");
}   

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
  var data = readLocalStorage();
  if (data.length === 0) {
    noPosts();
    return;
  }
  data.forEach(function (post) {
    buildElement("h2", post.title, "post-title");
    buildElement("p", post.content, "post-content");
  });
}

// TODO: Call the `renderBlogList` function
const renderBlogList = function () {
    var data = readLocalStorage();
    if (data.length === 0) {
        noPosts();
        return;
    }
    data.forEach(function (post) {
        buildElement("h2", post.title, "post-title");
        buildElement("p", post.content, "post-content");
    });
    };
    renderBlogList();
    
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
