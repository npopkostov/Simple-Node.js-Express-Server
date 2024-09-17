import colors from "colors";

const logger = (req, res, nesxt) => {
  const methodColors = {
    GET: "green",
    POST: "blue",
    PUT: "yellow",
    DELETE: "red",
  };

  const color = methodColors[req.method] || whitel;

  console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`[color]);
  nesxt();
};

export default logger;
