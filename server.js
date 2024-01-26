const express = require("express");
const path = require("path");

const app = express();
const port = 1025;

app.use(
	"/app1",
	express.static(path.join(__dirname, "app_1/dist")),
);
app.use(
	"/app2",
	express.static(path.join(__dirname, "app_2/dist")),
);

app.get("*", (req, res) => {
	res.setHeader("Content-Type", "text/html");
	res.sendFile(path.join(__dirname, "app_1/dist/index.html"));
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
