    //   getting all value
      let inputEl = document.getElementById("inp");
      let btnEl = document.getElementById("btn-add");
      let ulEl = document.getElementById("task-ul");
      // let delBtn = document.querySelectorAll(".del-btn");
      let taskList = [];

    //   localStorage.setItem("tasks", JSON.stringify(taskList));
    // render the item from the local storage
      let storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        taskList = JSON.parse(storedTasks);
        render(taskList);
      }


    //   adding new task
      btnEl.addEventListener("click", function () {
        let inputValue = inputEl.value;
        taskList.push(inputValue);
        localStorage.setItem("tasks", JSON.stringify(taskList));
        // console.log(taskList);
        render(taskList);
        inputEl.value = ''
      });


    //   function to render
      function render(list) {
        var tagHt = "";
        for (let i = 0; i < list.length; i++) {
          tagHt += `<li class='task-li'> ${list[i]} <button class='del-btn'  data-index = '${i}'> X </button> <button class="edit-btn" data-index='${i}'> EDIT </li >`;
        }
        // console.log(tagHt)
        ulEl.innerHTML = tagHt;
      }

    //   function to delete
      ulEl.addEventListener("click", function (e) {
        if (e.target.classList.contains("del-btn")) {
          let index = e.target.dataset.index;
          taskList.splice(index, 1);
          localStorage.setItem("tasks", JSON.stringify(taskList));
          render(taskList);
        }
      });


    //   function to edit
      ulEl.addEventListener("click",function(e) {
        if(e.target.classList.contains("edit-btn")) {
          let index = e.target.dataset.index;
          console.log("button clicked")
          let value =  prompt("Enter the updated one");
          taskList[index] = value;
          localStorage.setItem("tasks", JSON.stringify(taskList));
          render(taskList);
         }
      })
      