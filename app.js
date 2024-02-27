const input = document.querySelector(".text-input");
const btnSubmit = document.querySelector(".btn-submit");
const todoBody = document.querySelector(".todo-body");

function createTodo(){
    let todoItem = document.createElement("p");
    todoItem.classList.add("todo-item");
    todoItem.innerText = input.value;
    input.value ="";

    let btnDlt = document.createElement("button");
    btnDlt.classList.add("btn-dlt");
    btnDlt.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    let div = document.createElement("div");
    div.classList.add("todo");
    div.appendChild(todoItem);
    div.appendChild(btnDlt);

    todoBody.append(div);

    btnDlt.addEventListener("click",()=>{
        div.remove();
    })
}
input.addEventListener("keydown",(event)=>{
    if(event.key == "Enter"){
        createTodo();
    }
})
btnSubmit.addEventListener("click",()=>{
    createTodo();
})
