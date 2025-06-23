import "./style.css";

interface Todo {
  readonly id: string;
  title: string;
  isCompleted: boolean;
}

const todos: Todo[] = [];

const todosContainer = document.querySelector(
  ".todoContainer"
) as HTMLDivElement;
const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;
const myForm = document.getElementById("myForm") as HTMLFormElement;

// Handle form
myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const todo: Todo = {
    id: String(Math.random() * 100),
    title: todoInput.value,
    isCompleted: false,
  };
  todos.push(todo);
  todoInput.value = "";
  renderTodo(todos);
};

// Function to generate the todo.
const generateTodoItem = (title: string, isCompleted: boolean, id: string) => {
  const todo: HTMLDivElement = document.createElement("div");
  todo.className = "todo";

  // Creating a checkbox
  const checkBox: HTMLInputElement = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = isCompleted;
  checkBox.onchange = () => {
    todos.find((item) => {
      if (item.id === id) {
        item.isCompleted = checkBox.checked;
      }
    });
    paragraph.className = checkBox.checked ? "textCut" : "";
  };

  // Creating p tag for title.
  const paragraph: HTMLParagraphElement = document.createElement("p");
  paragraph.innerText = title;
  paragraph.className = isCompleted ? "textCut" : "";

  // Creating delete button
  const btn: HTMLButtonElement = document.createElement("button");
  btn.innerText = "Del";
  btn.className = "deleteBtn";
  btn.onclick = () => {
    deleteTodo(id);
  };

  // Append All to TodoItem.
  todo.append(checkBox, paragraph, btn);
  todosContainer.append(todo);
};

// Function to delete the todo.
const deleteTodo = (id: string) => {
  const idx = todos.findIndex((item) => item.id === id);
  todos.splice(idx, 1);
  renderTodo(todos);
};

// Function to render the todo.
const renderTodo = (todos: Todo[]) => {
  todosContainer.innerText = "";
  todos.forEach((item) => {
    generateTodoItem(item.title, item.isCompleted, item.id);
  });
};
