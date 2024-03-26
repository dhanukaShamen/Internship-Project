// Retrieve the Markdown content from localStorage
const markdownContent = localStorage.getItem("postsContent");

// Convert Markdown to HTML
const converter = new showdown.Converter();
const htmlContent = converter.makeHtml(markdownContent);

// Display the HTML content on the page
document.getElementById("posts-content").innerHTML = htmlContent;
