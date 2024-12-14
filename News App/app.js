const input1 = document.getElementById("input");
const search = document.getElementById("src");
const card1 = document.getElementById("card");


const searchNews =() => {
  event.preventDefault();
  const API_KEY = `https://newsapi.org/v2/everything?q=${input1.value}&from=2024-11-10&sortBy=publishedAt&apiKey=25f09f5c1d67452d876631d87c5d7b15`;

  fetch(API_KEY)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      card1.innerHTML = "";
      data.articles.map((e) => {
        card1.innerHTML += `    <div class="card rounded" style="width: 15rem">
        <img src="${e.urlToImage} class="card-img-top" alt="No Image Found" />
        <div class="card-body">
          <h5 class="card-title">${e.title}</h5>
          <p class="card-text">${e.description}</p>
          <p class="text-muted">By ${e.author || "Unknown"}</p>
          <a href="${e.url}" class="btn btn-primary" target="_blank">Read more</a>
        </div>`;
      });
    })
    .catch((err) => {
      console.log("Error:", err);
    });
};
