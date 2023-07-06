const http = require("http");
const data = require("./tareas.json");
const { addTask, showTasks, completeTask, removeTask } = require("./index");
const port = 3000;
const host = "localhost";

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;
  if (pathname === "/showTasks" && req.method === "GET") {
    const getTask = showTasks();
    res.writeHead(200, { "Content-Type": "aplication/json" });
    res.write(JSON.stringify({ data }));
  }
  res.end();
});

/* const demo = [
  { id: 1, description: "Hacer la compra", completed: false },
  { id: 2, description: "Limpiar la casa", completed: true },
  { id: 3, description: "Estudiar para el examen", completed: false },
]; */

/* server.listen(port, host, () => {
  console.log(`Servidor levantado en el puerto ${port}`);
}); */

/* const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "application/json");
  res.statusCode = 200;
  res.end(JSON.stringify(demo));
}); */

/* const server = http.createServer((req, res) => {
  if (req.url === "/add-task" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const { description } = JSON.parse(body);
      addTask(description);
      res.statusCode = 201;
      res.end("Task added successfully");
    });
  } else if (req.url === "/remove-task" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const taskId = JSON.parse(body);
      removeTask(taskId);
      res.statusCode = 200;
      res.end("Task removed successfully");
    });
  } else if (req.url === "/complete-task" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const taskId = JSON.parse(body);
      completeTask(taskId);
      res.statusCode = 200;
      res.end("Task completed successfully");
    });
  } else if (req.url === "/tasks" && req.method === "GET") {
    const tasks = showTasks();
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(tasks));
  } else if (req.url === "/menu" && req.method === "GET") {
    const menu = showMenu();
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 200;
    res.end(menu);
  } else {
    res.statusCode = 404;
    res.end("404 - Not Found");
  }
}); */

// const port = 3000;
server.listen(port, () => {
  console.log(`Servidor iniciando en el http://${host}:${port}`);
});

/* 
const server = http.createServer((req, res) => {
  const urlPonchada = req.url;
  console.log(urlPonchada);
  if (urlPonchada === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ task: ["Tv", "Soccer"] }));
  }
  res.end();
});

server.listen(port, host, () => {
  console.log("Servidor corriendo en el puerto " + port);
}); */
