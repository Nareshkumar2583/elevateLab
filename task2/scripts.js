document.getElementById("addBtn").addEventListener("click",function(){
    const input=document.getElementById("taskInput");
    const taskText=input.value.trim();
    if(taskText==="") return;
    const li=document.createElement("li");
    const span=document.createElement("span");
    span.textContent=taskText;
    span.addEventListener("click",function(){
        li.classList.toggle("completed");
    });
    const removeBtn=document.createElement("button");
    removeBtn.textContent="Remove";
    removeBtn.className="removeBtn";
    removeBtn.addEventListener("click",function(){
        li.remove();
    });
    li.appendChild(span);
    li.appendChild(removeBtn);

    document.getElementById("taskList").appendChild(li);
    input.value="";
})