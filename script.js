// ===============================
// EMSTRUE COLLECTION
// JAVASCRIPT INTERACTIONS
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------
    // Contact form validation
    // -------------------------------

    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    if (contactForm && formMessage) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Check required fields
            if (name === "" || email === "" || message === "") {
                formMessage.textContent =
                    "Please complete all fields before submitting.";
                return;
            }

            // Check email format
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                formMessage.textContent =
                    "Please enter a valid email address.";
                return;
            }

            // Frontend demo success message
            formMessage.textContent =
                `Thank you, ${name}! Your message has been received.`;

            // Clear the form
            contactForm.reset();
        });
    }


    // -------------------------------
    // Header quick-action buttons
    // -------------------------------

    const targetButtons = document.querySelectorAll("[data-target]");

    targetButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const target = document.querySelector(
                button.getAttribute("data-target")
            );

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });


    // -------------------------------
    // Search interaction
    // -------------------------------

    const searchButton = document.getElementById("search-button");

    if (searchButton) {

        searchButton.addEventListener("click", () => {

            const searchTerm = window.prompt(
                "What are you looking for? Try bags, jewellery or shoes."
            );

            if (!searchTerm) {
                return;
            }

            const term = searchTerm.toLowerCase().trim();

            const productCards = document.querySelectorAll(".product-card");

            let matches = 0;

            productCards.forEach((card) => {

                const productText = card.textContent.toLowerCase();

                if (productText.includes(term)) {
                    card.classList.add("search-match");
                    matches++;
                } else {
                    card.classList.remove("search-match");
                }
            });

            if (matches > 0) {

                document
                    .getElementById("featured")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            } else {

                window.alert(
                    "No matching products were found. Try bags, jewellery or shoes."
                );
            }
        });
    }


    // -------------------------------
    // Favourite button interaction
    // -------------------------------

    const favoriteButton = document.getElementById("favorite-button");

    if (favoriteButton) {

        favoriteButton.addEventListener("click", () => {

            window.alert(
                "Your favourites area is ready for future product functionality."
            );
        });
    }


    // -------------------------------
    // Cart button interaction
    // -------------------------------

    const cartButton = document.getElementById("cart-button");

    if (cartButton) {

        cartButton.addEventListener("click", () => {

            window.alert(
                "Your shopping cart is currently empty."
            );
        });
    }


    // -------------------------------
    // Profile button interaction
    // -------------------------------

    const profileButton = document.getElementById("profile-button");

    if (profileButton) {

        profileButton.addEventListener("click", () => {

            window.alert(
                "Profile functionality can be added when a customer account system is connected."
            );
        });
    }

});
