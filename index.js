const readline = require("readline");

const tasks = [];

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function addTask() {
  readLine.question("Description de la tarea: ", (description) => {
    const task = {
      id: tasks.length + 1,
      description: description,
      completed: false,
    };
    tasks.push(task);
    console.log(`Tarea ${description} agregada`);
    showMenu();
  });
}

function removeTask() {
  readLine.question("Elimnar tarea ingrese su ID: ", (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === parseInt(taskId));
    if (taskIndex !== -1) {
      const task = tasks[taskIndex];
      tasks.splice(taskIndex, 1);
      console.log(`Tarea "${task.description}" eliminada`);
    } else {
      console.log(`"${task.description}" no encontrada`);
    }
    showMenu();
  });
}

function completeTask() {
  readLine.question("Ingrese el id de la tarea a completar: ", (taskId) => {
    const task = tasks.find((el) => el.id === parseInt(taskId));
    if (task) {
      task.completed = true;
      console.log(`${task.description} completada`);
    } else {
      console.log(`${task.description} no existe`);
    }
    showMenu();
  });
}

function showTasks() {
  console.log("-----Listas de Tareas-----");
  tasks.forEach((el) => {
    console.log(`[${el.completed ? "x" : ""}] ${el.id}: ${el.description}`);
  });
  showMenu();
}

function showMenu() {
  console.log("\n -------Menu-------");
  console.log("\n 1. Agregar Tarea");
  console.log("\n 2. Eliminar tarea");
  console.log("\n 3. Completar tarea");
  console.log("\n 4. Mostrar Tareas");
  console.log("\n 5. Salir");
  console.log(
    "\n ----------------------------------------------------------------------------"
  );

  readLine.question("Ingreses una opcion: ", (option) => {
    switch (option) {
      case "1":
        addTask();
        break;
      case "2":
        removeTask();
        break;
      case "3":
        completeTask();
        break;
      case "4":
        showTasks();
        break;
      case "5":
        readLine.close();
        break;
      default:
        console.log(`${option} invalida intente nuevamente`);
        showMenu();
        break;
    }
  });
}

console.log("¡Bienvenido a la lista de Tareas!\n");
showMenu();
