"use strict";
const list = document.getElementById("list");
const form = document.getElementById("myform");
const input = document.getElementById("myInput");
form?.addEventListener("submit", e => {
    e.preventDefault();
    if (input?.value == "" || input?.value == null)
        return;
    const newTask = {
        title: input.value,
        completed: false,
        createdAt: new Date()
    };
    addListItem(newTask);
    input.value = "";
});
function addListItem(task) {
    const iteam = document.createElement("li");
    const label = document.createElement("label");
    iteam.textContent = task.title;
    iteam.addEventListener("click", () => {
        task.completed = !task.completed;
        iteam.classList.toggle("checked", task.completed);
    });
    list?.appendChild(iteam);
}
