// Fetch comments from the API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) // Parse the JSON from the response
  .then((data) => {
    const container = document.getElementById("comments-container"); // Get the container element

    // Loop through the data (array of comments)
    data.forEach((comment) => {
      const commentDiv = document.createElement("div");
      commentDiv.className = "comment";

      // Add HTML content for each comment
      commentDiv.innerHTML = `
        <img src="image/Screenshot 2025-01-30 131556.jpg">
        <h1>${comment.name}</h1>
        <h2 class="email">${comment.email}</h2>
        <p>${comment.body}</p>
      `;

      // Append the comment to the container
      container.appendChild(commentDiv);
    });
  })
  .catch((error) => {
    console.error("Error fetching comments:", error);
  });
