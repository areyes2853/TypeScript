const list = document.getElementById("list")as HTMLElement | null;
const form = document.getElementById("myform")as HTMLFormElement | null;
const input = document.getElementById("myInput") as HTMLInputElement | null;

type Task = {
  title: string
  completed:boolean
  createdAt: Date
}

form?.addEventListener("submit", e=>{
  e.preventDefault()
  if (input?.value == "" || input?.value == null) return
  const newTask: Task = {
  
    title: input.value,
    completed:false,
    createdAt: new Date()
  }

  addListItem(newTask)
  input.value = "";
})

function addListItem(task: Task){
  const iteam = document.createElement("li")
  const label = document.createElement("label")
  iteam.textContent = task.title;
  iteam.addEventListener("click", () =>{
    task.completed = !task.completed;
    iteam.classList.toggle("checked",task.completed)
  })
  list?.appendChild(iteam);

}