<?php
$currentTime = time(); // Get the current timestamp
$unlockTimes = [
    0, // Grid 1 available immediately
    3600, // Grid 2 available after 1 hour (3600 seconds)
    7200, // Grid 3 available after 2 hours (7200 seconds)
    10800, // Grid 4 available after 3 hours (10800 seconds)
    14400, // Grid 5 available after 4 hours (14400 seconds)
];

$gridNumber = 1; // Default to Grid 1

// Check which grid should be unlocked
for ($i = 1; $i <= count($unlockTimes); $i++) {
    if ($currentTime >= $unlockTimes[$i - 1]) {
        $gridNumber = $i;
    }
}

// Redirect the user to the appropriate grid
header("Location: Grid$gridNumber.html");
?>
