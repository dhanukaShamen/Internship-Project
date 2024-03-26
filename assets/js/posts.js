// Fetch news data from the server (assuming it's in JSON format)
fetch("posts.json")
  .then((response) => response.json())
  .then((postsData) => {
    // Compile Handlebars template
    const source = document.getElementById("posts-template").innerHTML;
    const template = Handlebars.compile(source);

    // Render the template with posts data
    const postsContainer = document.getElementById("posts-container");
    postsContainer.innerHTML = template({ posts: postsData });
  })
  .catch((error) => console.error("Error fetching news data:", error));

// Function to handle click event on post card
function handleClick(postId) {
  // Fetch and display news article details based on newsId
  fetch(`posts/${postId}.md`)
    .then((response) => response.text())
    .then((data) => {
      // Store the Markdown content in localStorage to access it in the new page
      localStorage.setItem("postsContent", data);

      // Redirect to the new page
      window.location.href = "posts-article.html";
    })
    .catch((error) => console.error("Error fetching posts:", error));
}
