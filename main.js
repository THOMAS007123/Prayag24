document.addEventListener('DOMContentLoaded', () => {
  // Function to calculate the end time (16th October 2024, 9 AM UTC)
  function getEndTime() {
    // Check if an end time is already stored in localStorage
    let endTime = localStorage.getItem('countdownEndTime');

    // If there's no stored end time, set it to 16th October 2024, 9 AM, and store it
    if (!endTime) {
      // Set to 16th October 2024 at 9 AM (UTC)
      const targetDate = new Date('2024-10-16T09:00:00Z');
      endTime = Math.floor(targetDate.getTime() / 1000); // Unix timestamp in seconds
      console.log('New countdown end time set:', targetDate, 'Unix timestamp:', endTime);
      localStorage.setItem('countdownEndTime', endTime);
    } else {
      console.log('Using stored countdown end time:', endTime);
    }

    return parseInt(endTime, 10);
  }

  // Get end time from localStorage or set a new one
  const countdownEndTime = getEndTime();

  // Check if the countdown end time is in the past
  if (countdownEndTime < Math.floor(new Date().getTime() / 1000)) {
    console.log('The countdown end time is in the past, clearing localStorage');
    localStorage.removeItem('countdownEndTime');
    // Refresh the page to reset the countdown
    location.reload();
  }

  // Ensure the flipdown container is available
  const flipdownElement = document.getElementById('flipdown');
  if (!flipdownElement) {
    console.error('FlipDown container with ID "flipdown" not found. Ensure your HTML includes an element with this ID.');
    return;
  }

  // Set up FlipDown with the end time from localStorage
  try {
    var flipdown = new FlipDown(countdownEndTime, 'flipdown')

      // Start the countdown
      .start()

      // Do something when the countdown ends
      .ifEnded(() => {
        console.log('The countdown has ended!');
        // Optionally clear the stored countdown end time to reset
        localStorage.removeItem('countdownEndTime');
      });
  } catch (error) {
    console.error('FlipDown initialization error:', error);
  }

  // Show version number if there's a version element
  var ver = document.getElementById('ver');
  if (ver) {
    ver.innerHTML = flipdown.version;
  }
});
