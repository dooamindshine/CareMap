const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Care Map API",
      description: "API endpoints for CareMap application",
      contact: {
        name: "Dooa Ansari",
        email: "dooaansari@gmail.com",
      },
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8000/",
        description: "Local server",
      },
    ],
  },
  // looks for configuration in specified directories
  apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerJsdoc(options);
function swaggerDocs(app, port) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}
module.exports = swaggerDocs;

