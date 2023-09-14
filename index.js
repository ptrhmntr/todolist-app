// 1. Mengambil atau reference html element in js
const formTask = document.querySelector(".form-task");

// 2. Menambahkan event listener di element form 
formTask.addEventListener("submit", (event) => {
    event.preventDefault();

    // 3. reference html element input
    const inputForm = document.querySelector(".input-form");
    console.log(inputForm.value);

    // 4. reference html element ul / wrapper list 
    const wrapperList = document.querySelector(".task-list-wrapper");

    // 5. create <li> using js 
    const taskList = document.createElement("li");

    // 6. masukan input value ke <li> 
    taskList.innerHTML = inputForm.value;

    // 7. append <li> ke <ul>
    wrapperList.append(taskList);
});



 