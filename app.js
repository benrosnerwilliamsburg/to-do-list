const storage = localStorage.getItem('StorageKey');

if(storage !== null) {
    const data = JSON.parse(storage);
    loadData(data);
    const id = data.length;
}
else {
    id = 0;
    data = [];
}

function newItem(todo, trash, id) {
if (trash == true) {
    return;
}
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode("- " + todo));
    li.setAttribute("id", id);
    ul.appendChild(li);

    todo = document.getElementById("input").value = "";

    li.onclick = removeItem;
}


document.body.onkeyup = function(e) {
    if (e.keyCode == 13) {
        const todo = document.getElementById("input").value;
        newItem(todo, false, id);
        data.push({
            name: todo,
            trash: false,
            id: id
        });
        id = id + 1
       
    }
  };

function removeItem(e) {
    e.target.parentElement.removeChild(e.target);
}
