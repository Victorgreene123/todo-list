const thing = document.querySelector("#todo");
const addbut = document.getElementById("add");
const list = document.querySelector("#list-box");

var todoarray = [];

function loadlist(arr) {
    list.innerHTML = ''; // Clear the list before loading
    arr.forEach((item, index) => {
        const listitem = document.createElement('li');
        const listid = `item${index + 1}`;
        listitem.id = listid;

        // Set the text content of the list item to the input value
        listitem.textContent = item;

        // Create remove button
        const removebtn = document.createElement("button");
        removebtn.classList.add('removebtn');
        removebtn.textContent = 'remove';
        removebtn.addEventListener('click', () => {
            removeitem(index);
        });

        // Append remove button to the list item
        listitem.appendChild(removebtn);

        // Append the new list item to the list
        list.appendChild(listitem);
    });
}

addbut.onclick = (e) => {
    if (thing.value.trim() === '') {
        alert('Please enter a valid todo item.');
        return;
    }

    // Add new item to the array
    todoarray.push(thing.value);

    // Reload the list with updated array
    loadlist(todoarray);

    // Clear the input field
    thing.value = '';

    console.log('Item added to list');
};

function removeitem(index) {
    // Remove item from the array
    todoarray = todoarray.slice(0, index).concat(todoarray.slice(index + 1));

    // Reload the list with updated array
    loadlist(todoarray);

    console.log('Item removed from list');
}
