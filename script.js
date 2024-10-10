function toggleSection(sectionId) {
    const content = document.getElementById(sectionId);
    const allContents = document.querySelectorAll('.content');

    // Hide all sections
    allContents.forEach((item) => {
        item.style.display = "none";
    });

    // Toggle the clicked section
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// Automatically hide all sections except the first
document.addEventListener('DOMContentLoaded', () => {
    const allContents = document.querySelectorAll('.content');
    allContents.forEach((item, index) => {
        if (index > 0) {
            item.style.display = "none"; // Hide all but the first
        } else {
            item.style.display = "block"; // Show the first section
        }
    });
});
