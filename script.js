document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    readMoreButtons.forEach((button) => {
        button.addEventListener("click", function() {
            const cardText = this.previousElementSibling; // Get the previous sibling element (card text)
            cardText.classList.toggle("expanded"); // Toggle the expanded class

            // Change the button text based on the current state
            if (cardText.classList.contains("expanded")) {
                this.textContent = "Read Less";
            } else {
                this.textContent = "Read More";
            }
        });
    });
});