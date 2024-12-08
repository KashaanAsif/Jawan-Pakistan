let cardDiv = document.getElementById("cardDiv");
let inputData = document.getElementById("inputField");

const searchNews = () => {
  const API_KEY = `https://newsapi.org/v2/everything?q=${inputData.value}&from=2024-11-08&sortBy=publishedAt&apiKey=25f09f5c1d67452d876631d87c5d7b15`;

  cardDiv.innerHTML = `
    <div class="d-flex justify-content-center my-3">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `;

  fetch(API_KEY)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      cardDiv.innerHTML = "";

      data.articles.forEach((e) => {
        const cardHTML = `
          <div class="card" style="width: 18rem; margin: 1rem;">
            <img src="${
              e.urlToImage || "placeholder.jpg"
            }" class="card-img-top" alt="Image"> 
            <div class="card-body">
              <h5 class="card-title">${e.title}</h5>
              <p class="card-text">${e.description}</p>
              <a href="${
                e.url
              }" class="btn btn-primary" target="_blank">Read More</a>
            </div>
          </div>
        `;
        cardDiv.innerHTML += cardHTML;
      });
    })
    .catch((error) => {
      console.error("Error occurred:", error);
      cardDiv.innerHTML = `<p>An error occurred while fetching news.</p>`;
    });
};
