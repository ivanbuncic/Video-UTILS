// Function to simulate a click on each checked checkbox with delay

function uncheck() {
  const checkboxes = document.querySelectorAll('input[data-purpose="progress-toggle-button"]');
  let delay = 1500; // 1.5 second delay between each click

  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      setTimeout(() => {
        checkbox.click();
        console.log(`Clicked checkbox with id: ${checkbox.id}`);
      }, index * delay); // Stagger the clicks to avoid spamming the server
    }
  });
}

// Call the function with delay
uncheck();
