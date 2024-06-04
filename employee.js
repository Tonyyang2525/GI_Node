const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

// app.use(express.json());

const readEmployees = () => {
  const data = fs.readFileSync("employees.json", "utf8");
  return JSON.parse(data);
};

app.get("/employees", (req, res) => {
  const employ = readEmployees();
  res.send(employ);
});

app.get("/employees/:employeeID", (req, res) => {
  const employ = readEmployees();
  const employId = parseInt(req.params.employeeID, 10);

  let findSpecificEmployee = employ.find((e) => e.employId === employId);

  if (findSpecificEmployee) {
    res.json(findSpecificEmployee);
  } else {
    res.status(404).json({ error: `employee not found` });
  }

  // findSpecificEmployee
  //   ? res.json(findSpecificEmployee)
  //   : res.status(404).json({ error: `employee not found` });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
