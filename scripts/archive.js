const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

const cardHolder = document.querySelector("div.card-holder");

const addCard = document.querySelector("button.addCardButton");

const itemArray = [...Array(10).keys()];

const currentArrayItem = 0;

const tags = document.querySelectorAll("div.tag-inner");
const tagsOuter = document.querySelectorAll("div.tag")

const modalTitle = document.querySelector("div.modal-title");
const modalContent = document.querySelector("modal-content");
const modalBackground = document.querySelector(".modal");

let fadeTiming = 0;

let taggedColours = [];

let tagStatus = {
  newzealand: false,
  taiwan: false,
  california: false,
  italy: false,
  earth: false,
  tree: false,
  grass: false,
  dyeing: false,
  weaving: false,
  painting: false,
};

// addCard.addEventListener("click", () => {
//   createCard();
// });

function createCard(item) {
  let cardContainer = document.createElement("div");
  let cardInner = document.createElement("div");
  let cardContent = document.createElement("div");

  cardContainer.className = "card";
  cardInner.className = "card-inner";
  cardContent.className = "card-content";

  cardContent.textContent = item.place;
  cardContainer.setAttribute("id", item.number);

  cardContainer.appendChild(cardInner);
  cardContainer.appendChild(cardContent);

  cardInner.style.backgroundColor = item.background;

  cardHolder.appendChild(cardContainer);
}

function hideCards() {
  const cardsToShow = document.querySelectorAll("div.card");
  cardsToShow.forEach((card) => {
    card.classList.add("fadeOut");
  });
}

function removeCards() {
  const cardsToDelete = document.querySelectorAll("div.card");
  cardsToDelete.forEach((card) => {
    card.addEventListener("animationend", () => {
      cardHolder.removeChild(card);
    });
  });
}

function showCards() {
  const cardsToShow = document.querySelectorAll("div.card");
  cardsToShow.forEach((card) => {
    card.classList.add("fadeIn");
  });
}


tagsOuter.forEach((tag, index) => {
  tag.addEventListener("click", function () {

    console.log(index)
    if (tag.classList.contains("active")) {
      tag.classList.remove("active");
      console.log(tags[index].innerHTML)
      updateTagStatus(tags[index].innerHTML, false);
      // tagStatus[0].nz = true
      // console.log(tagStatus[0].nz)
    } else {
      tag.classList.add("active");
      console.log(tags[index].innerHTML)
      updateTagStatus(tags[index].innerHTML, true);
      // tagStatus[0].nz = false
      // console.log(tagStatus[0].nz)
    }
  });
});

function updateTagStatus(key, value) {
  const grabbedHTMLTag = key;
  const treatedHTMLTag = grabbedHTMLTag.replace(/\s/g, "");
  const loweredHTMLTag = treatedHTMLTag.toLowerCase();
  tagStatus[loweredHTMLTag] = value;
  console.log(key, "is set to", value);
  filterColours();
}

function filterColours() {
  hideCards();
  removeCards();

  let filteredColour = [];
  let bufferColour = [];

  if (tagStatus.newzealand == true) {
    let addColour = colours.filter((col) => col.place === "New Zealand");
    bufferColour = addColour;


    if (tagStatus.earth == true || tagStatus.tree == true || tagStatus.grass == true) {
      addColour = checkMaterial(addColour);
      if (addColour.length == 0) {
      }
    }

    if (tagStatus.dyeing == true || tagStatus.weaving == true || tagStatus.painting == true) {
      addColour = checkProject(addColour);
      if (addColour.length == 0) {
      }
    }

    addColour.forEach((item) => {
      filteredColour.push(item);
    });

  }

  if (tagStatus.taiwan == true) {
    let addColour = colours.filter((col) => col.place === "Taiwan");
    bufferColour = [...bufferColour, ...addColour];
    if (tagStatus.earth == true || tagStatus.tree == true || tagStatus.grass == true) {
      addColour = checkMaterial(addColour);
      if (addColour.length == 0) {
      }
    }

    if (tagStatus.dyeing == true || tagStatus.weaving == true || tagStatus.painting == true) {
      addColour = checkProject(addColour);
      if (addColour.length == 0) {
      }
    }

    addColour.forEach((item) => {
      filteredColour.push(item);
    });
  }

  if (tagStatus.california == true) {
    let addColour = colours.filter((col) => col.place === "California");
    bufferColour = [...bufferColour, ...addColour];
    if (tagStatus.earth == true || tagStatus.tree == true || tagStatus.grass == true) {
      addColour = checkMaterial(addColour);
      if (addColour.length == 0) {
      }
    }

    if (tagStatus.dyeing == true || tagStatus.weaving == true || tagStatus.painting == true) {
      addColour = checkProject(addColour);
      if (addColour.length == 0) {
      }
    }

    addColour.forEach((item) => {
      filteredColour.push(item);
    });
  }

  if (tagStatus.italy == true) {
    let addColour = colours.filter((col) => col.place === "Italy");
    bufferColour = [...bufferColour, ...addColour];
    if (tagStatus.earth == true || tagStatus.tree == true || tagStatus.grass == true) {
      addColour = checkMaterial(addColour);
      if (addColour.length == 0) {
      }
    }

    if (tagStatus.dyeing == true || tagStatus.weaving == true || tagStatus.painting == true) {
      addColour = checkProject(addColour);
      if (addColour.length == 0) {
      }
    }

    addColour.forEach((item) => {
      filteredColour.push(item);
    });
  }  

  // No countries selected
    if (
    tagStatus.newzealand == false &&
    tagStatus.taiwan == false &&
    tagStatus.california == false &&
    tagStatus.italy == false
  ) {
    filteredColour = checkMaterial(colours);

    if (tagStatus.dyeing == true || tagStatus.weaving == true || tagStatus.painting == true) {
      filteredColour = checkProject(filteredColour);
    }

  }
  
  if (
    tagStatus.newzealand == false &&
    tagStatus.taiwan == false &&
    tagStatus.california == false &&
    tagStatus.italy == false &&
    tagStatus.tree == false &&
    tagStatus.earth == false &&
    tagStatus.grass == false     
  ) { 
    filteredColour = checkProject(colours);
  }


    if (
    tagStatus.newzealand == false &&
    tagStatus.taiwan == false &&
    tagStatus.california == false &&
    tagStatus.italy == false &&

    tagStatus.tree == false &&
    tagStatus.earth == false &&
    tagStatus.grass == false &&

    tagStatus.dyeing == false &&
    tagStatus.weaving == false &&
    tagStatus.painting == false      
  ) {
    filteredColour = colours;
  }  

  // Make sure there are no cards here, before making new ones, to prevent animation jumping

  function animationCheck() {
    const cardCheck = document.querySelectorAll("div.card");
    if (cardCheck.length === 0) {
      filteredColour.forEach((colour) => {
        createCard(colour);
      });
      updateModals();
      showCards();
    } else {
      setTimeout(animationCheck, 300);
    }
  }
  
  animationCheck()
}

function checkMaterial(addColour) {
  let filteredMat = [];
  if (tagStatus.earth == true) {
    let addMat = addColour.filter((col) => col.material === "Earth");
    addMat.forEach((colour) => {
      filteredMat.push(colour);
    });
  }

  if (tagStatus.tree == true) {
    let addMat = addColour.filter((col) => col.material === "Tree");
    addMat.forEach((colour) => {
      filteredMat.push(colour);
    });
  }

  if (tagStatus.grass == true) {
    let addMat = addColour.filter((col) => col.material === "Grass");
    addMat.forEach((colour) => {
      filteredMat.push(colour);
    });
  }

  return filteredMat;
}

function checkProject(addMat) {
  let filteredProj = [];
  if (tagStatus.dyeing == true) {
    let addProj = addMat.filter((col) => col.dyeing === true);
    addProj.forEach((colour) => {
      if (!filteredProj.includes(colour)) {
        filteredProj.push(colour);
      }
      
    });
  }

  if (tagStatus.weaving == true) {
    let addProj = addMat.filter((col) => col.weaving === true);
    addProj.forEach((colour) => {
      if (!filteredProj.includes(colour)) {
        filteredProj.push(colour);
      }
    });
  }

  if (tagStatus.painting == true) {
    let addProj = addMat.filter((col) => col.painting === true);
    addProj.forEach((colour) => {
      if (!filteredProj.includes(colour)) {
        filteredProj.push(colour);
      }
    });
  }
  return filteredProj;
}

colours.forEach((colour) => {
  createCard(colour);
});

showCards();

updateModals();

// Modal

function updateModals() {
  const openModalButtons = document.querySelectorAll("[data-modal-target]");
  const closeModalButtons = document.querySelectorAll("[data-close-button]");
  const overlay = document.getElementById("overlay");
  const cardObjects = document.querySelectorAll("div.card");

  cardObjects.forEach((button) => {
    button.addEventListener("click", () => {
      updateModalContent(button.getAttribute("id"));
      openModal(modal);
    });
  });

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
}

function updateModalContent(number) {
  modalTitle.textContent = colours[number].place;
  modalBackground.style.backgroundColor = colours[number].background;
}
