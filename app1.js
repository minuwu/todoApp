// implementation of event delegation, even bubbling, propagation

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

todoBody.addEventListener("click", (event)=>{
    let target = console.dir(event.target);
    let parentElement = console.dir(event.target.parentElement);

    if(event.target.nodeName == "BUTTON"){
        event.stopPropagation();
        console.log("button was clicked");
        event.target.parentElement.remove();
    }
    if(event.target.nodeName == "I"){
        event.stopPropagation();
        console.log("icon was clicked");
        event.target.parentElement.parentElement.remove();
    }
})
