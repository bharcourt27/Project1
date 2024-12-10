document.addEventListener("DOMContentLoaded", () => {
    // Assume `selectedTopic` is passed from the first page
    const selectedTopic = localStorage.getItem("selectedTopic") || "Your Adlib Stories";
    document.getElementById("topic-title").textContent = selectedTopic;

    // Example dynamic stories data
    const stories = JSON.parse(localStorage.getItem("adlibStories")) || [
        { author: "Jane Doe", text: "Once upon a time in a faraway land, there was a giant penguin who loved to dance..." },
        { author: "John Smith", text: "In a world where dragons delivered pizzas, one heroic knight decided to make a career change..." },
    ];

    const storiesContainer = document.getElementById("stories");
    stories.forEach(story => {
        const storyElement = document.createElement("div");
        storyElement.classList.add("story");
        storyElement.innerHTML = `
            <h2>Submitted by: ${story.author}</h2>
            <p>${story.text}</p>
        `;
        storiesContainer.appendChild(storyElement);
    });
});