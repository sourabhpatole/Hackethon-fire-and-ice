console.log("This is Making of ICE");
document.body.innerHTML += `
<section class="user-list"></section>`;

async function getAllUsers() {
  const data = await fetch("https://www.anapioficeandfire.com/api/books", {
    method: "GET",
  });
  const users = await data.json();
  const userContainer = document.querySelector(".user-list");
  userContainer.innerHTML = "";
  users.forEach((user, index) => {
    userContainer.innerHTML += `
    <div class="container">
    <div class="row">
      <div class="col">
      
        <p  >Book ${index + 1}</p>
        <p class= "user-name">Name of Book:- <b>${user.name}</b></p>
        <p>ISBN:- <b>${user.isbn}</b></p>
        <p>No Of Pages:- <b>${user.numberOfPages} </b></p>
        <p>Author is:- <b>${user.authors}</b></p>
        <p>Publisher is:- <b>${user.publisher} </b></p>
        <p>Release Date is:- <b>${user.released}</b> </p>
      </div>
    </div>
  </div>   
   `;
  });
  // console.log(users);
}
getAllUsers();
