function searchUser() {
  var username = document.getElementById("github-username").value;
  var userInfoDiv = document.getElementById("user-info");
  userInfoDiv.innerHTML = "";

  if (!username) {
    userInfoDiv.innerHTML = `<div class="alert alert-danger" role="alert">Please enter a GitHub username.</div>`;
    return;
  }

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("User not found or invalid username");
      }
      return response.json();
    })
    .then((data) => {
      displayUserInfo(data);
    })
    .catch((error) => {
      userInfoDiv.innerHTML = `<div class="alert alert-danger" role="alert">${error.message}</div>`;
    });
}

function displayUserInfo(user) {
  var userInfoDiv = document.getElementById("user-info");

  userInfoDiv.innerHTML = `<div class="card"><img src="${
    user.avatar_url
  }" class="card-img-top" alt="${user.login} 
  avatar" >
    <div class="card-body">
    <h5 class="card-title">${user.name || user.login}</h5>
    <p class="card-text">${user.bio || "This profile has no bio"}</p>
    <p class="card-text">Location: ${user.location || "Not Available"}</p>
    <p class="card-text">Repos: ${user.public_repos}</p>
    <p class="card-text">Followers: ${user.followers}</p>
    <p class="card-text">Following: ${user.following}</p>
    <div class="text-center mt-3">
    <a href="${user.html_url}" class="btn btn-success" target="_blank";">View Profile</a>
    </div>
    </div>
    </div>
    `;
}
