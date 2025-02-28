function coffeeHandler(req, res, next) {
  if (req.path === "/coffee") {
    res.status(418).json({ message: "I'm a teapot" });
  } else {
    next();
  }
}

function notFoundHandler(req, res, next) {
  res.status(404).json({ message: "This route does not exist" });
}

function errorHandler(err, req, res, next) {
  console.error("ERROR:", req.method, req.path, err);

  // Personalizar el mensaje de error según el tipo de error
  if (err.type === "COHORT_RETRIEVE") {
    res.status(500).json({ error: "Failed to retrieve Cohorts" });
  } else if (err.type === "COHORT_POST") {
    res.status(500).json({ error: "Failed to posting Cohorts" });
  } else if (err.type === "COHORT_DELETE") {
    res.status(500).json({ error: "Deleting cohort failed" });
  } else {
    // Si es un error genérico
    res
      .status(500)
      .json({ message: "Internal server error. Check the server console" });
  }
}

export { coffeeHandler, notFoundHandler, errorHandler };
