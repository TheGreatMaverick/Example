const USERS_PHOTO = "https://api.slingacademy.com/v1/sample-data/photos";
const dataContainer = document.querySelector("#data-container");

// Какое значение параметра вписывать в функцию createUsersElement() ?
const createUsersElement = (photo) => {
  const userElement = document.createElement("li");
  userElement.classList.add("photo - item");
  const userElementImg = document.createElement("img");
  userElementImg.classList.add("photo-item__image"); // Как подставить значение src равное значению свойства url у фотографии?
  userElementImg.src = url; // ?
  const userElementHeader = document.createElement("h3");
  userElementHeader.classList.add("photo-item__title");
  userElementHeader.textContent = title; // Как подставить значение свойтва title у URL ?
  userElement.append(userElementImg, userElementHeader);

  return userElement;
};

const toggleLoader = () => {
  const loaderHTML = document
    .querySelector("#loader")
    .classList.toggle("hidden");
};

const getFastestLoadedPhoto = (ids) => {
  toggleLoader();
  const requests = ids.map((id) => fetch(`${USERS_PHOTO}/${id}`));
  return Promise.race(requests).then((response) => {
    return response.json();
  }).then;
};

console.log("getFastestLoadedPhoto :>>", getFastestLoadedPhoto([60, 12, 55]));
