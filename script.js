let id1 = 0, id2 = 1;
function addData() {
    event.preventDefault();
    var val = document.getElementById("data")
    if (val.value == "") {
        alert("Enter the task");
        document.getElementById("data").focus();
    }
    else {
        document.getElementById("li").insertAdjacentHTML('beforeend', `<li id="item-${id1}"><input type="checkbox" onclick="check(this,'elem-${id2}')"><p id="elem-${id2}">${val.value}</p><i onclick="deleteItem('item-${id1}')" class="fa-solid fa-trash"></i></li>`)
        val.value = "";
        id1++;
        id2++;
        document.getElementById("data").focus();
    }
}
function deleteItem(itemId) {
    document.getElementById(itemId).remove();
}
function check(ele, itemId) {
    if (ele.checked) {

        document.getElementById(itemId).style.textDecoration = "line-through";
    } else {
        document.getElementById(itemId).style.textDecoration = "none";
    }
}