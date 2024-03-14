import app from "./app";

function startServer() {
  app.listen(5000, () => console.log("application running in port 5000"));
}

startServer();
