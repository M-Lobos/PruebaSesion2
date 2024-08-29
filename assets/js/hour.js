// Get the HTML elements
const dateElement = document.getElementById('header-date');
const hourElement = document.getElementById('header-hour');

// Function to update the date and hour
function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const hour = now.toLocaleTimeString();

    dateElement.textContent = date;
    hourElement.textContent = hour;
}

// Update the date and hour every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();
