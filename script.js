console.log('Hello!');

let numberPage = document.getElementById("number")

let count = 0

function addOne() {
    count += 1
    numberPage.textContent = count
}


let saveText = document.getElementById("savesPrev")

function save() {
    saveText.textContent += count + " - "
    numberPage.textContent = 0
    count = 0
}

