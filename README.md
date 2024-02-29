# Palworld Webpage

# SBA 316: The Document Object Model

## Description

The provided code is for the Palworld webpage and primarily includes JavaScript functionality to manipulate the webpage's appearance and behavior. It sets a background image, creates a navigation bar with links, defines the behavior of navigation links, sets the page title, adds event listeners for specific links, and implements a contact form with validation and submission features.

## Navbar

The navigation functionality in the Palworld webpage code involves dynamically creating a navigation bar with links using JavaScript. It starts by creating a `div` element and appending it to the element with the ID "nav-main." Inside this div, a header element is created, and within the header, an unordered list (`ul`) is added.

For each navigation item specified in the `listElements` array ("Home," "Features," "Pricing," "FAQs," "Contact," and "Palworld"), a list item (`li`) is dynamically created and appended to the unordered list. Each list item contains an anchor (`a`) element, where the `href` attribute is set based on the index of the item. The first item has a link to "index.html," the last item ("Palworld") has a link to the Palworld Steam page, and the rest have "#" as their link. The anchor elements are given the class "nav-link," with the first one marked as "active."

Additionally, for the "Palworld" link, the `target` attribute is set to "\_blank" to open the link in a new tab. The last anchor element's `rel` attribute is set to "noopener noreferrer" to enhance security.

This structure creates a responsive navigation bar with links that direct users to different sections or external pages based on the selected option.

## Event Handling

1. **Pricing Link Click:**

   - Listens for a click event on the "Pricing" link.
   - Upon click, triggers an alert notifying users that there is no pricing information yet.

   ```javascript
   pricingElement.addEventListener("click", (event) => {
     alert("No Pricing Yet!");
   });
   ```

2. **FAQs Link Click:**

   - Listens for a click event on the "FAQs" link.
   - Upon click, opens a new tab/window and navigates to the Palworld FAQ page.

   ```javascript
   faqElement.addEventListener("click", (event) => {
     window.open(
       "https://sabrunthedev.github.io/Palworld-Servers-Webpage/FAQ.html#",
       "_blank"
     );
   });
   ```

3. **Contact Link Click:**

   - Listens for a click event on the "Contact" link.
   - Upon click, dynamically creates and displays a modal overlay containing a contact form.

   ```javascript
   contactElement.addEventListener("click", (event) => {
     // ... (Code to create and display the contact form)
   });
   ```

4. **Contact Form Submission:**

   - Listens for the form submission event.
   - Prevents the default form submission behavior.
   - Calls the `submitForm` function for form validation and submission.

   ```javascript
   let contactForm = document.getElementById("contactForm");
   contactForm.addEventListener("submit", (event) => {
     event.preventDefault();
     submitForm();
   });
   ```

5. **Form Submission Handling:**

   - Inside the `submitForm` function, checks if the form is valid.
   - If valid, logs a message to the console and closes the contact form.
   - If not valid, focuses on the first invalid input.

   ```javascript
   function submitForm() {
     let form = document.getElementById("contactForm");
     if (form.checkValidity()) {
       console.log("Form submitted!");
       closeContactForm();
     } else {
       form.querySelector(":invalid").focus();
     }
   }
   ```

## Form

The contact form functionality in the Palworld webpage code involves creating a modal overlay with a form when the "Contact" link is clicked. The form includes input fields for the user's name, email, and phone number, a dropdown for selecting the type of issue, and a submit button.

1. **Contact Link Click:**

   - Listens for a click event on the "Contact" link.
   - Upon click, dynamically creates a modal overlay with a form and displays it.

   ```javascript
   contactElement.addEventListener("click", (event) => {
     // ... (Code to create and display the contact form)
   });
   ```

2. **Form Structure:**

   - The form includes input elements for name, email, and phone number.
   - It also includes a dropdown (`select`) for issue selection, populated with predefined options.
   - A submit button triggers the `submitForm` function when clicked.

   ```javascript
   let formElement = document.createElement("form");
   formElement.id = "contactForm";
   // ... (Code to append input elements, dropdown, and submit button to the form)
   ```

3. **Form Submission Handling:**

   - Listens for the form submission event.
   - Prevents the default form submission behavior.
   - Calls the `submitForm` function for form validation and submission.

   ```javascript
   let contactForm = document.getElementById("contactForm");
   contactForm.addEventListener("submit", (event) => {
     event.preventDefault();
     submitForm();
   });
   ```

4. **Form Validation and Submission:**

   - The `submitForm` function checks if the form is valid.
   - If valid, logs a message to the console, closes the contact form, and can be extended for further actions.
   - If not valid, focuses on the first invalid input.

   ```javascript
   function submitForm() {
     let form = document.getElementById("contactForm");
     if (form.checkValidity()) {
       console.log("Form submitted!");
       closeContactForm();
     } else {
       form.querySelector(":invalid").focus();
     }
   }
   ```

5. **Contact Form Closure:**

   - The `closeContactForm` function removes the modal overlay from the document.

   ```javascript
   const closeContactForm = () => {
     let modalOverlay = document.querySelector(".modal-overlay");
     document.body.removeChild(modalOverlay);
   };
   ```
