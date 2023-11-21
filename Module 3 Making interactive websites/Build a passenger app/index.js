// intialise the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0;
let countEl = document.getElementById("count-el");
let entries = document.getElementById("save-el");

function incrementCount() {
  count++;
  countEl.textContent = count;
}

function save() {
  let countStr = " " + count + " -";
  entries.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}
