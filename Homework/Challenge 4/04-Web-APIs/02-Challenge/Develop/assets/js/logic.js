// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
ToggleEvent = document.querySelector("#toggle");
ToggleEvent.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "enabled");
  } else {
    localStorage.setItem("dark-mode", "disabled");
  }
});
if (localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark");
}


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
localStorage.setItem("blogData", JSON.stringify(blogData));
function readLocalStorage() {
  let data = localStorage.getItem("blogData");
  if (!data) {
    return [];
  }
  return JSON.parse(data);
} 


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
storewLocalStorage = function (newData) {
  let data = readLocalStorage();
  data.push(newData);
  localStorage.setItem("blogData", JSON.stringify(data));
}


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

