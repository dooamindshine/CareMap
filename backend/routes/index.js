const express = require("express");
const router = express.Router();

const signInUser = require("../controllers/signInController");
const createUser = require("../controllers/userController");
const deleteUser = require("../controllers/deleteUserController");
const getAllDeletedUsers = require("../controllers/allDeletedUsersController");
const updateUser = require("../controllers/updateUserController");
const getUserProfile = require("../controllers/profileController");
const verifyJWTToken = require("../controllers/verifyTokenController");

const getUserFavHomes = require("../controllers/favHomesController");
const addUserFavHomes = require("../controllers/createFavHomeController");
const updateUserFavHomes = require("../controllers/updateFavHomeController");
const deleteUserFavHomes = require("../controllers/deleteFavHomeController");

const getUserFavFacilities = require("../controllers/favFacilitiesController");
const addUserFavFacility = require("../controllers/createFavFacilityController");
const deleteUserFavFacility = require("../controllers/deleteFavFacilityController");

router.post("/users", createUser);
router.post("/signin", signInUser);
router.get("/users/:userid", verifyJWTToken, getUserProfile);
router.delete("/users/:userid", verifyJWTToken, deleteUser);
router.put("/users/:userid", verifyJWTToken, updateUser);
router.get("/users/all_deleted", getAllDeletedUsers);

router.get("/users/:userid/homes", verifyJWTToken, getUserFavHomes);
router.post("/users/:userid/homes", verifyJWTToken, addUserFavHomes);
router.put("/users/:id/homes", verifyJWTToken, updateUserFavHomes);
router.delete("/users/:id/homes", verifyJWTToken, deleteUserFavHomes);

router.post("/users/:userid/facilities", verifyJWTToken, addUserFavFacility);
router.get("/users/:userid/facilities", verifyJWTToken, getUserFavFacilities);
router.delete(
  "/users/:userid/facilities",
  verifyJWTToken,
  deleteUserFavFacility
);

module.exports = router;
