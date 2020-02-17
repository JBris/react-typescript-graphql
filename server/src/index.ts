import app from "./app";

const port = app.get("port");

const server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

export default server;