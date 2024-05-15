let q = 5;

// Function to update the inner text of the element with id "yoyo"
function updateBagCount() {
  document.getElementById("yoyo").innerText = `Your bag has ${q} items`;
}

// Initially set the text
updateBagCount();

// Increment the value and update the text when the element with id "w1" is clicked
document.getElementById("w1").onclick = function() {
  q += 1;
  updateBagCount();
};

document.getElementById("re1").onclick = function() {
    q -= 1;
    updateBagCount();
  };

