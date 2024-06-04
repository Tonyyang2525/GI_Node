const express = require("express");

const employees = require("./employees.json");

const app = express();
const PORT = 3000;

// const readEmployees = () => {
//   const data = fs.readFileSync("employees.json", "utf8");
//   return JSON.parse(data);
// };

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/:employeeID", (req, res) => {
  const employeeID = parseInt(req.params.employeeID, 10);

  const employee = employees.find((emp) => emp.employeeID === employeeID);

  if (!employee) {
    return res.status(404).json({ error: `employee not found` });
  }
  res.json(employee);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
