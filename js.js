let form = document.querySelector("form");
let aside = document.querySelector(".data-box");

// todo   form submit---------------------------------
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let main_input = event.target[0];
  let main_input_value = event.target[0].value;

  // todo---Create Elements-------------------------------
  let div = document.createElement("div");
  let data_input = document.createElement("input");
  data_input.setAttribute("type", "text");
  data_input.setAttribute("readonly", "readonly");
  data_input.value = main_input_value;
  let edit_btn = document.createElement("button");
  edit_btn.textContent = "edit";
  edit_btn.classList.add("ebtn");
  let delete_btn = document.createElement("button");
  delete_btn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  delete_btn.classList.add("dbtn");
  let check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  aside.appendChild(div);
  div.appendChild(check);
  div.appendChild(data_input);
  div.appendChild(edit_btn);
  div.appendChild(delete_btn);

  // todo  Delete button----------------------------------
  delete_btn.addEventListener("click", () => {
    div.remove();
  });

  // todo   Edit button ------------------------------------
  edit_btn.addEventListener("click", () => {
    if (edit_btn.textContent == "edit") {
      data_input.removeAttribute("readonly");
      data_input.classList.toggle("active"); //border-color
      data_input.focus();
      edit_btn.textContent = "update";
      if ((edit_btn.textContent = "update")) {
        edit_btn.style.backgroundColor = "blue";
      }
    } else {
      data_input.setAttribute("readonly", "readonly");
      edit_btn.textContent = "edit";
      if ((edit_btn.textContent = "edit")) {
        edit_btn.style.backgroundColor = "purple";
      }
    }
  });

  // todo----------------------------------------------------
  div.addEventListener("dblclick", () => {
    data_input.classList.add("1line");  //line-through
    div.style.backgroundColor = "lightcoral";
    data_input.style.backgroundColor = "lightcoral";
    check.setAttribute("checked", "checked"); 
    edit_btn.style.cursor="not-allowed";
    delete_btn.style.cursor="not-allowed";
  });
  div.addEventListener("click", () => {
    data_input.classList.remove("line");
    div.style.backgroundColor = "white";
    data_input.style.backgroundColor = "white";
    check.removeAttribute("checked", "checked");
    edit_btn.style.cursor="pointer";
    delete_btn.style.cursor="pointer";
  });
  event.target[0].value = "";
  main_input.focus();
});









































































































































// todo------------------------------------------------------

// let input = document.querySelector("input");
// let btn1 = document.querySelector("button");
// let aside = document.querySelector(".data-box");

// btn1.addEventListener("click", (e) => {
//   e.preventDefault();
//   let div = document.createElement("div");
//   div.classList.add("div");
//   aside.appendChild(div);
//   let h = document.createElement("h1");
//   let btn2 = document.createElement("button");
//   let btn3 = document.createElement("button");
//   let text = [];
//   text.push(input.value);
//   h.textContent = text[0];
//   btn2.textContent = "Edit";
//   btn2.classList.add("btn2");
//   btn3.textContent = "Delete";
//   btn3.classList.add("btn3");
//   div.appendChild(h);
//   div.appendChild(btn2);
//   div.appendChild(btn3);
//   h.style.cursor = "pointer";
//   input.value = " ";
//   btn3.addEventListener("click", () => {
//     div.remove();
//   });
//   h.addEventListener("click", () => {
//     h.style.textDecoration = "line-through";
//   });
//   h.addEventListener("dblclick", () => {
//     h.style.textDecoration = "none";
//   });
//   btn2.addEventListener("click", () => {
//     input.value = h.textContent;
//     btn1.textContent = "update";
//     div.remove();
//     if (btn1.textContent == "update") {
//       btn1.style.background = "blue";
//     }
//   });
//   btn1.textContent = "add";
//   if (btn1.textContent == "add") {
//     btn1.style.background = "green";
//   }
// });

// todo--------------------------------------------------------------