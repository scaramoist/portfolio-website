const hireMeBtn = document.getElementById("hireMeBtn");

if (hireMeBtn) {
    hireMeBtn.addEventListener("click", (event) => {
        event.preventDefault(); // This stops the page from jumping to the end
        alert("Thanks for viewing my portfolio!");
    });
}

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        console.log("Menu button clicked! 'active' class toggled.");
    });
} else {
    console.error("Could not find menuBtn or navLinks in the HTML.");
}