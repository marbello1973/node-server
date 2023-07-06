const readline = require("readline");
const tasks = require("./tareas.json");
const fs = require("fs");

// const tasks = [];

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function addTask() {
  return new Promise((resolve) => {
    readLine.question("Description de la tarea: ", (description) => {
      const task = {
        id: tasks.length + 1,
        description: description,
        completed: false,
      };
      tasks.push(task);
      console.log(`Tarea ${description} agregada`);

      // saveTask();
      showMenu();
      resolve();
    });
  });
}

function removeTask() {
  return new Promise((resolve) => {
    readLine.question("Elimnar tarea ingrese su ID: ", (taskId) => {
      const taskIndex = tasks.findIndex((task) => task.id === parseInt(taskId));
      if (taskIndex !== -1) {
        const task = tasks[taskIndex];
        tasks.splice(taskIndex, 1);
        console.log(`Tarea "${task.description}" eliminada`);
        // saveTask();
      } else {
        console.log(`"${tasks.description}" no encontrada`);
      }
      showMenu();
      resolve();
    });
  });
}

function completeTask() {
  return new Promise((resolve) => {
    readLine.question("Ingrese el id de la tarea a completar: ", (taskId) => {
      const task = tasks.find((el) => el.id === parseInt(taskId));
      if (task) {
        task.completed = true;
        console.log(`${task.description} completada`);
        // saveTask();
      } else {
        console.log(`${task.description} no existe`);
      }
      showMenu();
      resolve();
    });
  });
}

function saveTask() {
  // const data = JSON.stringify(tasks, null, 2);
  fs.readFile("tareas.json", "utf-8", (err, data) => {
    if (err) {
      console.log("error");
      return;
    }
    const existing = JSON.parse(data);

    let lastId = existing.length > 0 ? existing[existing.length - 1].id : 0;
    for (const task of tasks) {
      lastId++;
      console.log(lastId);
      task.id = lastId;
      existing.push(task);
    }

    fs.writeFile(
      "tareas.json",
      JSON.stringify(existing, null, 2),
      "utf-8",
      (err) => {
        if (err) {
          console.error("existe");
        } else {
          console.log("save sucessfully");
        }
      }
    );
  });
}
//me muestra todas las tareas
function showTasks() {
  return new Promise((resolve) => {
    console.log("-----Listas de Tareas-----");
    tasks.forEach((el) => {
      console.log(`[${el.completed ? "x" : ""}] ${el.id}: ${el.description}`);
    });
    showMenu();
    resolve();
  });
}

async function asQuestion(question) {
  return new Promise((resolve) => {
    readLine.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function showMenu() {
  console.log("\n -------Menu-------");
  console.log("\n 1. Agregar Tarea");
  console.log("\n 2. Eliminar tarea");
  console.log("\n 3. Completar tarea");
  console.log("\n 4. Mostrar Tareas");
  console.log("\n 5. Salir");
  console.log(
    "\n ----------------------------------------------------------------------------"
  );

  const option = await asQuestion("Ingreses una opcion: ");
  switch (option) {
    case "1":
      await addTask();
      break;
    case "2":
      await removeTask();
      break;
    case "3":
      await completeTask();
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
}

console.log("¡Bienvenido a la lista de Tareas!\n");
showMenu();

module.exports = {
  addTask,
  removeTask,
  completeTask,
  showTasks,
  showMenu,
};
