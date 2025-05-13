document.addEventListener("DOMContentLoaded", () => {
    const posts = document.querySelectorAll("article a");
    
    posts.forEach(post => {
      post.addEventListener("click", () => {
        alert("This is a demo blog post link.");
      });
    });
  });
  