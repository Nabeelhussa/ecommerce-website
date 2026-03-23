 // Function to toggle individual dropdown menus
function toggleDropdown(menuId) {
    const dropdown = document.getElementById(menuId);
    
    // Close any other open dropdowns before opening this one
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    allDropdowns.forEach(content => {
        if (content.id !== menuId && content.classList.contains('show')) {
            content.classList.remove('show');
        }
    });

    // Toggle the targeted dropdown
    dropdown.classList.toggle('show');
}

// Global click listener: Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});