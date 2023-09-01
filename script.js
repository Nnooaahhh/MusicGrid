// Function to update and display the timer
function updateTimer(timerId, unlockTime) {
    const timerElement = document.getElementById(timerId);
    const now = new Date().getTime();
    const timeRemaining = unlockTime - now;

    if (timeRemaining <= 0) {
        // Timer has expired, hide it
        timerElement.style.display = 'none';
    } else {
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        timerElement.innerHTML = `Next grid in ${hours}h ${minutes}m ${seconds}s`;
        setTimeout(() => updateTimer(timerId, unlockTime), 1000);
    }
}

// Calculate unlock times for each grid (in milliseconds)
const unlockTimes = [
    0,            // Grid 1 available immediately
    3600000,      // Grid 2 available after 1 hour
    7200000,      // Grid 3 available after 2 hours
    10800000,     // Grid 4 available after 3 hours
    14400000      // Grid 5 available after 4 hours
];

// Update and display timers for each grid
for (let i = 1; i <= 5; i++) {
    const timerId = `timer${i}`;
    const unlockTime = new Date().getTime() + unlockTimes[i - 1];
    updateTimer(timerId, unlockTime);
}
