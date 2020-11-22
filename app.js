function newItem() {
    console.log("Inside newItem");
    let item = document.getElementById("input").value;
    console.log(item)

    // store the unordered list as a variable (now we can refer to it as "ul")
    const ul = document.getElementById("list");

    const li = document.createElement("li");
    li.appendChild(document.createTextNode("- " + item)); // now put text in list item
    ul.appendChild(li);

    document.getElementById("input").value = ""; // erase what is currently in todo list

    li.onclick = removeItem; // run removeItem when the li is clicked
}


document.body.onkeyup = function(e) {
    if (e.keyCode = 13) {
        console.log("enter clicked")
        newItem();
    }
  };

function removeItem(e) {
    e.target.remove()
}
