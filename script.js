const showButton = document.getElementById('showButton');
const input = document.getElementById('input');
const output = document.getElementById('output');
const colorButton = document.getElementById("colorButton");
const highlightButton = document.getElementById("highlightButton");
const tableInput = document.getElementById("tableInput");
const addButton = document.getElementById("addButton");
const tableBody = document.getElementById("tableBody");
const colors = ["lightblue", "lightgreen", "lightcoral"];

// 設問１
showButton.addEventListener('click', function () {
    const text = input.value;

    if (text === "") {
        alert("入力値が空です。");
        return;
    }

    output.textContent = text;
});

// 設問２

let index = 0;

function changeStyle() {
    document.body.style.backgroundColor = colors[index];

    index++;

    if (index === colors.length) {
        index = 0;
    }
}

colorButton.addEventListener("click", changeStyle);

// 設問３
highlightButton.addEventListener("click", function () {
    highlightButton.classList.toggle("highlight");
});

// 設問４・５・６

addButton.addEventListener("click", function () {
    const text = tableInput.value;

    if (text === "") {
        alert("入力値が空です。");
        return;
    }

    const tr = document.createElement("tr");

    const tdText = document.createElement("td");
    tdText.textContent = text;

    const tdButton = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";

    deleteButton.addEventListener("click", function () {
        tr.remove();

        if (tableBody.children.length < 3) {
            addButton.style.display = "inline";
        }
    });

    tdButton.appendChild(deleteButton);
    tr.appendChild(tdText);
    tr.appendChild(tdButton);

    tableBody.appendChild(tr);

    if (tableBody.children.length >= 3) {
        addButton.style.display = "none";
    }

    tableInput.value = "";

//     if (tableBody.children.length > 3) {
//     tableBody.removeChild(tableBody.firstElementChild);
// }
});