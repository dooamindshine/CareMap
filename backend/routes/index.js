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
router.get("/users", verifyJWTToken, getUserProfile);
router.delete("/users", verifyJWTToken, deleteUser);
router.put("/users", verifyJWTToken, updateUser);
router.get("/users/all_deleted", getAllDeletedUsers);

router.get("/users/homes", verifyJWTToken, getUserFavHomes);
router.post("/users/homes", verifyJWTToken, addUserFavHomes);
router.put("/users/homes", verifyJWTToken, updateUserFavHomes);
router.delete("/users/homes", verifyJWTToken, deleteUserFavHomes);

router.post("/users/facilities", verifyJWTToken, addUserFavFacility);
router.get("/users/facilities", verifyJWTToken, getUserFavFacilities);
router.delete("/users/facilities", verifyJWTToken, deleteUserFavFacility);

module.exports = router;
