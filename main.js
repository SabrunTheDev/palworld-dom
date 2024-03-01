const worldEl = document.querySelector("body");
console.log(worldEl);
worldEl.style.backgroundImage =
  "url('https://cdn5.idcgames.com/storage/image/1448/game_home_bg_section_2/default.jpg')";

// let palworld = document.getElementById("title-top");
// palworld.style.textAlign = "center";

const navDiv = document.createElement("div");
document.getElementById("nav-main").appendChild(navDiv);
navDiv.className = "header-center";
navDiv.setAttribute("id", "navDiv");

const navHeader = document.createElement("header");
document.getElementById("navDiv").appendChild(navHeader);
let navDivFirstChild = navDiv.firstChild;
navDivFirstChild.classList = "d-flex py-3";
navHeader.setAttribute("id", "navHeader");

const navUL = document.createElement("ul");
navUL.setAttribute("id", "navUL");
document.getElementById("navHeader").appendChild(navUL);
navUL.className = "nav nav-pills";

let getNavUL = document.getElementById("navUL");
let listElements = [
  "Home",
  "Features",
  "Pricing",
  "FAQs",
  "Contact",
  "Palworld",
];

const createNavLists = () => {
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < listElements.length; i++) {
    let newList = document.createElement("li");
    newList.setAttribute("id", listElements[i]);
    newList.classList = "nav-item";
    fragment.appendChild(newList);
  }

  getNavUL.appendChild(fragment);
};

createNavLists();

let list = document.querySelectorAll("li");

list.forEach((listItem, index) => {
  let anchorElement = document.createElement("a");
  anchorElement.className = "nav-link";

  // This is the  as the ternary operator
  // if (index === 0)same {
  //   anchorElement.href = "index.html";
  // } else if (index == 5) {
  // anchorElement.href = "https://store.steampowered.com/app/1623730/Palworld/";
  //  } else {
  //   anchorElement.href = "#";
  // }

  anchorElement.href =
    index === 0
      ? "index.html"
      : index == 5
      ? "https://store.steampowered.com/app/1623730/Palworld/"
      : "#";

  anchorElement.className = index === 0 ? "nav-link active" : "nav-link";
  anchorElement.target = index === 5 ? "_blank" : "";

  // Moved this outside to utilize lastChild
  // anchorElement.rel = index === 5 ? "noopener noreferrer" : undefined;

  anchorElement.textContent = listElements[index];
  listItem.appendChild(anchorElement);
});

let ulParentElement = navUL.lastChild;
let lastAnchorElement = ulParentElement.lastChild;
lastAnchorElement.rel = "noopener noreferrer";

let headEl = document.querySelector("head");
let headTitle = headEl.getElementsByTagName("title")[0];
headTitle.textContent = "Palworld";

let pricingElement = document.getElementById("Pricing");

pricingElement.addEventListener("click", (event) => {
  let pricingClick = () => {
    alert("No Pricing Yet!");
  };

  pricingClick();
});

let faqElement = document.getElementById("FAQs");
faqElement.addEventListener("click", (event) => {
  let openFAQ = () => {
    window.open(
      "https://sabrunthedev.github.io/Palworld-Servers-Webpage/FAQ.html#",
      "_blank"
    );
  };

  openFAQ();
});

// FORM

let contactElement = document.getElementById("Contact");
contactElement.addEventListener("click", (event) => {
  let openContactForm = () => {
    let formOverlay = document.createElement("div");
    formOverlay.className = "modal-overlay";
    document.body.appendChild(formOverlay);

    let modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    formOverlay.appendChild(modalContent);

    let contactFormSection = document.createElement("section");
    contactFormSection.className = "contact-form";
    modalContent.appendChild(contactFormSection);

    let formContainer = document.createElement("div");
    contactFormSection.appendChild(formContainer);

    let getInTouchDiv = document.createElement("div");
    getInTouchDiv.className = "getintouchdiv";
    formContainer.appendChild(getInTouchDiv);

    let h1Element = document.createElement("h1");
    h1Element.className = "getintouch";
    h1Element.textContent = "Get in touch with us! 👋";
    getInTouchDiv.appendChild(h1Element);

    let contactUsDiv = document.createElement("div");
    contactUsDiv.className = "contact-us col-7 mt-0";
    formContainer.appendChild(contactUsDiv);

    let formElement = document.createElement("form");
    formElement.id = "contactForm";
    contactUsDiv.appendChild(formElement);

    let inputElements = [
      { type: "text", placeholder: "Your Name *", id: "name", required: true },
      {
        type: "email",
        placeholder: "Your Email *",
        id: "email",
        required: true,
      },
      { type: "tel", placeholder: "Your Phone *", id: "phone", required: true },
    ];

    inputElements.forEach(({ type, placeholder, id, required }) => {
      let input = document.createElement("input");
      input.type = type;
      input.className = "form-control";
      input.placeholder = placeholder;
      input.id = id;
      if (required) {
        input.required = true;
      }
      formElement.appendChild(input);
    });

    let selectElement = document.createElement("select");
    selectElement.className = "form-control";
    formElement.appendChild(selectElement);

    let selectOptions = [
      "Your Issue Here",
      "Server Issue",
      "Payment Issue",
      "General Questions",
      "Palworld Support",
      "Others",
    ];
    selectOptions.forEach((optionText) => {
      let option = document.createElement("option");
      option.text = optionText;
      selectElement.add(option);
    });

    let submitButton = document.createElement("button");
    submitButton.className = "submit-contact btn btn-dark btn-with-ball mt-20";
    submitButton.type = "button";
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", submitForm);
    formElement.appendChild(submitButton);

    formOverlay.style.display = "flex";
  };

  openContactForm();
});

const closeContactForm = () => {
  let modalOverlay = document.querySelector(".modal-overlay");
  modalOverlay.remove();
};

const submitForm = () => {
  let form = document.getElementById("contactForm");
  if (form.checkValidity()) {
    console.log("Form submitted!");
    closeContactForm();
  } else {
    form.querySelector(":invalid").focus();
  }
};
