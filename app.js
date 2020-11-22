function newItem() {
    console.log("Inside newItem");
    let item = document.getElementById("input").value;
    console.log(item)

    const ul = document.getElementById("list");

    const li = document.createElement("li");
    li.appendChild(document.createTextNode("- " + item));
    ul.appendChild(li);

    document.getElementById("input").value = "";
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
