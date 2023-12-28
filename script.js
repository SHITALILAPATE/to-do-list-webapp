let inputBx = document.querySelector('#inputBx');
let list = document.querySelector('#list');
let historyList = document.querySelector('#historyList');
let completedTasks = [];
let historyModal = document.getElementById('historyModal');
let closeButton = document.querySelector('.close');

inputBx.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        addItem(this.value);
        this.value = '';
    }
});

function addItem(inputValue) {
    let listItem = document.createElement('li');
    listItem.innerHTML = `${inputValue}<i></i>`;

    listItem.addEventListener('click', function () {
        this.classList.toggle('done');
        if (this.classList.contains('done')) {
            completedTasks.push(inputValue);
        } else {
            completedTasks = completedTasks.filter(task => task !== inputValue);
        }
    });

    listItem.querySelector('i').addEventListener('click', function () {
        listItem.remove();
        completedTasks = completedTasks.filter(task => task !== inputValue);
    });

    list.appendChild(listItem);
}

function toggleHistory() {
    historyModal.style.display = 'block';
    showHistory();
}

function showHistory() {
    historyList.innerHTML = '';
    completedTasks.forEach(task => {
        let historyItem = document.createElement('li');
        historyItem.textContent = task;
        historyList.appendChild(historyItem);
    });
}

closeButton.addEventListener('click', function () {
    historyModal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === historyModal) {
        historyModal.style.display = 'none';
    }
});
