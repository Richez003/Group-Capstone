import { Movies } from './resource.js';

const displayData = async () => {
  const list = document.querySelector('.list');
  const obj = new Movies();
  await obj.getData().then((response) => {
    let itemList = '';
    response.forEach((element) => {
      itemList += `<div class="container">
      <div class="movie1"></div>
          <div class="actions">
          <p>Jumong</p> 
              <button class="likes-btn">
          <span><i class="fa-regular fa-thumbs-up"></i></span>
          <span id="count">0</span>likes
      </button>
      </div>
      <div id="coment">Comment</div>
      <div id="reserve">Reservation</div>
      </div>`;
    });
    list.innerHTML = itemList;
  });
};

export default displayData;