//your code here!
const infiList = document.getElementById("infi-list");

// Function to add new items to the list
function addNewItem() {
  const listItem = document.createElement("li");
  listItem.textContent = "New Item";
  infiList.appendChild(listItem);
}

// Function to handle the intersection observer
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // If the target is intersecting with the viewport, add a new item
      addNewItem();
    }
  });
}

// Options for the intersection observer (trigger when reaching the end of the list)
const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No margin
  threshold: 0.1, // Trigger when 10% of the target is visible
};

// Create an intersection observer instance
const observer = new IntersectionObserver(handleIntersection, options);

// Start observing the list
observer.observe(infiList);

// Initially add a few items to populate the list
for (let i = 0; i < 10; i++) {
  addNewItem();
}

