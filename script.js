
    var todo = document.getElementById("todo");
    var list = document.getElementById("list");

    function addTask() {
     if(todo.value == ""){
      alert("Enter a task to add");
     }else{
      var li = document.createElement("li");
      li.innerHTML =
        todo.value + "<button onclick='clearElement(event)'>done</button>";
      list.append(li); 
      todo.value = "";
     }
    }
   
    function clearElement(event) {
      event.target.parentElement.remove(); 
    }
    