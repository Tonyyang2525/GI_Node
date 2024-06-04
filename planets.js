const fs = require("fs");

fs.readFile("planets.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error!", err);
    return;
  }
  const planets = data.trim().split(",");

  console.log("Planets in the Solar System:");
  planets.forEach((planet) => {
    console.log(planet.trim());
  });
});
