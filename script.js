// Scroll to section when a dropdown value is selected
document.querySelectorAll(".ele").forEach(select => {
    select.addEventListener("change", function () {
        const sectionId = this.value;
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});

// Reset dropdowns after scrolling
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        document.querySelectorAll(".ele").forEach(select => {
            select.selectedIndex = 0; // Reset to placeholder
        });
    }, 100); // Resets 100ms after scrolling stops
});
