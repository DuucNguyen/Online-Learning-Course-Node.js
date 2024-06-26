const express = require("express");
const route = express.Router();
const meController = require("../app/controllers/MeController");
const authMiddleware = require("../app/middlewares/authMiddleware");

route.get(
    "/stored/courses",
    authMiddleware.authUser,
    authMiddleware.authCoursesPage("ADM", "MOD"),
    meController.storedCourses,
);
route.get("/stored/courses/sort", meController.storedCourses);
route.get("/bin/courses", meController.deletedCourses);
route.get("/stored/news", meController.storedNews);
route.get(
    "/stored/my-courses",
    authMiddleware.authUser,
    authMiddleware.authPage("STU"),
    meController.myCoursesPage,
);
module.exports = route;
