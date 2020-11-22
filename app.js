function newItem() {
    console.log("Inside newItem");
    let item = document.getElementById("input").value;
    console.log(item)
}

document.body.onkeyup = function(e) {
    if (e.keyCode = 13) {
        console.log("enter clicked")
        newItem();
    }
  };