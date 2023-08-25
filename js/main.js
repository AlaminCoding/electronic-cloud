const filterBox = document.querySelector(".filter-box");
const filterDropdown = document.querySelector(".filter-dropdown");
const filterArrow = document.getElementById("filter-arrow");

//Show hide filter dropdown

// fd = filter dropdown
let fdOpen = false;

const filterOpen = () => {
  filterDropdown.classList.add("dropdown-open");
  filterArrow.classList.add("arrow-rotate");
  fdOpen = true;
};

const filterClose = () => {
  filterDropdown.classList.remove("dropdown-open");
  filterArrow.classList.remove("arrow-rotate");
  fdOpen = false;
};

function handleFd() {
  if (fdOpen) {
    filterClose();
  } else {
    filterOpen();
  }
}

const chartBars = document.querySelectorAll(".bar");
chartBars.forEach((e) => {
  const height = parseInt(e.dataset.height);
  e.style.height = height + "%";
});

// Aside nav open close

const asideToggle = document.querySelector(".aside-toggle");
const aside = document.getElementById("aside");
const asideOverlay = document.querySelector(".aside-overlay");

let asideOpen = false;

const openAside = () => {
  asideToggle.innerHTML = `<i class="fa-solid fa-outdent"></i>`;
  aside.classList.add("open-aside");
  asideOverlay.classList.add("aside-overlay-active");
  asideOpen = true;
};

const closeAside = () => {
  asideToggle.innerHTML = `<i class="fa-solid fa-indent"></i>`;
  aside.classList.remove("open-aside");
  asideOverlay.classList.remove("aside-overlay-active");
  asideOpen = false;
};

const toggleAside = () => {
  if (asideOpen) {
    closeAside();
  } else {
    openAside();
  }
};

// Search Open close

const searchBox = document.querySelector(".search-box");

const openSearch = () => {
  searchBox.classList.add("open-search");
  filterClose();
  closeUser();
};
const closeSearch = () => {
  searchBox.classList.remove("open-search");
};

// User open close

const user = document.querySelector(".user");
const userBtn = document.querySelector(".user-btn");

let userOpen = false;

const openUser = () => {
  user.classList.add("user-open");
  userOpen = true;
};

const closeUser = () => {
  user.classList.remove("user-open");
  userOpen = false;
};

const toggleUser = () => {
  if (userOpen) {
    closeUser();
  } else {
    openUser();
  }
};

document.addEventListener("click", (e) => {
  if (e.target != filterBox && !filterBox.contains(e.target)) {
    filterClose();
  }
  if (e.target != userBtn && !user.contains(e.target)) {
    closeUser();
  }
});
