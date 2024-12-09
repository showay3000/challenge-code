const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const shoppingList = document.getElementById("shoppinglist");
const clearButton = document.getElementById("clearButton");

// Function to add a new item
function addItem() {
    const itemText = itemInput.value.trim();
    if (itemText === "") return;

    const listItem = document.createElement("li");

    // Add text span
    const textSpan = document.createElement("span");
    textSpan.textContent = itemText;
    textSpan.classList.add("list-item");
    listItem.appendChild(textSpan);

    // Add edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editItem(listItem));
    listItem.appendChild(editButton);

    // Add toggle purchased button
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Purchased";
    toggleButton.addEventListener("click", () => togglePurchased(listItem));
    listItem.appendChild(toggleButton);

    // Add delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteItem(listItem));
    listItem.appendChild(deleteButton);

    shoppingList.appendChild(listItem);
    itemInput.value = ""; 
    itemInput.focus(); 
}

// Function to toggle purchased state
function togglePurchased(item) {
    item.classList.toggle("purchased");
}

// Function to delete an item
function deleteItem(item) {
    shoppingList.removeChild(item);
}

// Function to edit an item
function editItem(item) {
    if (item.classList.contains("edit-mode")) {
        const inputField = item.querySelector("input");
        const textSpan = document.createElement("span");
        textSpan.textContent = inputField.value;
        textSpan.classList.add("list-item");
        item.replaceChild(textSpan, inputField);
        item.classList.remove("edit-mode");
    } else {
        const textSpan = item.querySelector(".list-item");
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.value = textSpan.textContent;
        item.replaceChild(inputField, textSpan);
        item.classList.add("edit-mode");
    }
}

// Function to clear the list
function clearList() {
    shoppingList.innerHTML = "";
    itemInput.focus(); 
}


addButton.addEventListener("click", addItem);
itemInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") addItem();
});
clearButton.addEventListener("click", clearList);