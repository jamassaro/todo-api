const express = require("express");
const tasksRouter = require("./private/tasks");



const router = express.Router();



router.use("/tasks", tasksRouter);

module.exports = router;