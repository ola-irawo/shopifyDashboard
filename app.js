// Dropdown Menu
const menu = document.querySelector(".collection-name");
const menuItemList = document.querySelector(".dropdown-menu-list");

menu.addEventListener("click", toggleMenu);
// menu.addEventListener("blur", toggleMenu);
menu.addEventListener("keydown", handleKeydown);

function toggleMenu() {
  const isClose = menuItemList.classList.contains("is-close");

  if (isClose) {
    menuItemList.classList.remove("is-close");
  } else {
    menuItemList.classList.add("is-close");
  }
}

function handleKeydown(event) {
  if (event.key === "Enter") {
    toggleMenu();
  } else if (event.key === "Escape") {
    menuItemList.classList.add("is-close");
  }
}

// Popup
const closePopup = document.querySelector(".close-popup");
const popupContainer = document.querySelector("aside.popup-container");
closePopup.addEventListener("click", hidePopup);
document.addEventListener("keydown", handlekeydownPopup);

function hidePopup() {
  if (window.innerWidth < 1000) {
    popupContainer.style.display = "none";
  }

  popupContainer.style.visibility = "hidden";
  popupContainer.style.opacity = "0";
}

function handlekeydownPopup(e) {
  e.stopPropagation();
  e.key === "Enter" && hidePopup();
}

// Store Items
const storeArticle = document.querySelector("article.store-article");
const toggleStoreBtn = document.querySelector(".toggle-store-list");
const storeContainer = document.querySelector(".store-list");

toggleStoreBtn.addEventListener("click", toggleStore);
toggleStoreBtn.addEventListener("keydown", handleKeydownStore);

function toggleStore() {
  storeArticle.classList.toggle("h");
  if (storeArticle.classList.contains("h")) {
    toggleStoreBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z" fill="#4A4A4A"/>
      </svg>
    `;
  } else {
    toggleStoreBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z" fill="#4A4A4A"/>
      </svg>
    `;
  }
}

function handleKeydownStore(e) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleStore();
  }
}

// Notifications
const notificationBtn = document.querySelector(".bell-icon");
const notificationPopup = document.querySelector(".notification-popup");
notificationBtn.addEventListener("click", openNotification);
// notificationBtn.addEventListener("blur", openNotification);

function openNotification(e) {
  e.stopPropagation();
  notificationPopup.classList.toggle("hide-notification");
}

const store = [
  {
    title: "Add your first product",
    text: "Write a description, add photos, and set pricing for the produscts you plan to sell.",
    link: "Learn more",
    btnText: "Add product",
    importBtn: "Import Product",
    img: "https://crushingit.tech/hackathon-assets/product.png",
    alt: "Illustration depicting the process of adding a product",
  },
  {
    title: "Add a custom domain",
    text: "Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store. Learn more.",
    link: "Learn more",
    btnText: "Add domain",
    img: "https://crushingit.tech/hackathon-assets/website.png",
    alt: "Illustration of adding a custom domain to your online store",
  },
  {
    title: "Name your store",
    text: "Your temporary store name is currently Davii collections. The store name appears in your admin and your online store. Learn more.",
    link: "Learn more",
    btnText: "Name store",
    img: "https://crushingit.tech/hackathon-assets/name-store.png",
    alt: "Illustration of naming your online store in the Shopify admin",
  },
  {
    title: "Set up payment provider",
    text: "Choose a payment provider to start accepting payments. You’ll need to create an account with the payment provider and set it up with your Shopify store. Learn more.",
    link: "Learn more",
    btnText: "Set up payment",
    img: "https://crushingit.tech/hackathon-assets/payment.png",
    alt: "Illustration of setting up a payment provider for your online store",
  },
];

const storeList = document.querySelector("ul.store-list");

store.forEach((item) => {
  storeList.innerHTML += `
  <li class="store-list-item setHeight">
    <div class="list-details">
      <button class="check-btn" aria-label="Click item to add to store list">

        <svg class="default" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="12" stroke="#303030" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />
        </svg>

        <svg class="hide loading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28" fill="none">
            <path
              d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
              stroke="#303030"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
        </svg>

        <svg class="hide completed" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#303030"></circle>
        <path
            d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
            fill="#fff"
        ></path>
        </svg>
      </button>


      <div class="list-content-container" >
          <h3 class="list-title">${item.title}</h3>

          <div  class="hide">
            <p class="list-text">${item.text}. <a href="">${item.link}</a></p>
            <div>
              <button class="action-btn">${item.btnText}</button>
              ${
                item.importBtn
                  ? `<button class="import-btn">${item.importBtn}</button>`
                  : ""
              }
            </div>
          </div>
      </div>

    </div>

    <div class="list-img-container is-desktop">
        <img class="list-img hide" src=${item.img} alt=${item.alt}>
    </div>
    </li>`;
});

//Steps counter
const checkBtn = document.querySelectorAll("button.check-btn");
let activeItem = null;
const steps = document.querySelector("p.steps-number");
const progressBar = document.querySelector("div.steps-progress div");

let counter = 0;
function updateNumber(value) {
  steps.innerHTML = `${value} / ${store.length + 1} completed`;
  progressBar.style.width = `${value * 20}%`;
  progressBar.style.height = "100%";
  progressBar.style.background = "#1A1A1A";
  progressBar.style.borderRadius = "2.8rem";
}

// Store buttons
let button;
function handleCheckStoreItem() {
  const checked = button.querySelector(".completed");
  const loadingSpiner = button.querySelector(".loading");
  const defaultState = button.querySelector(".default");

  defaultState.classList.add("hide");
  loadingSpiner.classList.remove("hide");

  setTimeout(() => {
    loadingSpiner.classList.add("hide");
    checked.classList.remove("hide");
  }, 1000);
  button.classList.add("checked-item");
  button.setAttribute("aria-label", "Click item to remove from store list");
  console.log("adding");
  console.log(button.getAttribute("aria-label"));
}

function handleCheck() {
  if (button.classList.contains("checked-item")) {
    removeCheckedItem();
    counter -= 1;
    updateNumber(counter);
  } else {
    handleCheckStoreItem();
    counter += 1;
    updateNumber(counter);
  }
}

function removeCheckedItem() {
  const checked = button.querySelector(".completed");
  const loadingSpiner = button.querySelector(".loading");
  const defaultState = button.querySelector(".default");

  checked.classList.add("hide");
  loadingSpiner.classList.remove("hide");

  setTimeout(() => {
    loadingSpiner.classList.add("hide");
    defaultState.classList.remove("hide");
  }, 1000);
  button.classList.remove("checked-item");
  button.setAttribute("aria-label", "Click item to add to store list");
  console.log("removing");
  console.log(button.getAttribute("aria-label"));
}

checkBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    button = this;
    handleCheck();
  });

  btn.addEventListener("click", function () {
    const listContent = this.closest(".list-details");
    const list = this.closest("li.store-list-item");
    const listImg = list.querySelector("img.list-img");
    const itemDescription = listContent.querySelector("div.hide");

    if (activeItem) {
      activeItem.classList.remove("active");
    }
    itemDescription.classList.toggle("active");

    activeItem = itemDescription;

    const listItems = document.querySelectorAll("li.store-list-item");
    listItems.forEach((item) => {
      item.classList.add("setHeight");
      item.querySelector("img.list-img").classList.add("hide");
      item.style.backgroundColor = "";
    });

    if (list.classList.contains("setHeight")) {
      list.classList.toggle("setHeight");
      listImg.classList.toggle("hide");
      list.style.backgroundColor = "#F3F3F3";
    }
  });
});
