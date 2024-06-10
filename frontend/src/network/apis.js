import { requests } from "./requests";

const getUserProfile = async (email, userid, token) => {
  return requests
    .get("/api/users?userid=" + userid, {
      headers: {
        Authorization: "Bearer " + token,
        email,
      },
    })
    .then((res) => res)
    .catch((error) => error.response);
};

const getUserAddress = async (email, userid, token) => {
  return requests
    .get("/api/users/homes?userid=" + userid, {
      headers: {
        Authorization: "Bearer " + token,
        email,
      },
    })
    .then((res) => res)
    .catch((error) => error.response);
};

const getLocations = async (email, userid, token, category) => {
  return requests
    .get("/api/locations?userid=" + userid + "&" + "category=" + category, {
      headers: {
        Authorization: "Bearer " + token,
        email,
      },
    })
    .then((res) => res)
    .catch((error) => error.response);
};

const addUserAddress = async (email, userid, token, data) => {
  return requests
    .post(
      "/api/users/homes?userid=" + userid,
      { data },
      {
        headers: {
          Authorization: "Bearer " + token,
          email,
        },
      }
    )
    .then((res) => res)
    .catch((error) => error.response);
};

const deleteUserAddress = async (email, userid, token, uuid) => {
  return requests
    .delete("/api/users/homes?userid=" + userid + "&" + "uuid=" + uuid, {
      headers: {
        Authorization: "Bearer " + token,
        email,
      },
    })
    .then((res) => res)
    .catch((error) => error.response);
};

const addUserFacility = async (email, userid, token, data) => {
  return requests
    .post(
      "/api/users/facilities?userid=" + userid,
      { data },
      {
        headers: {
          Authorization: "Bearer " + token,
          email,
        },
      }
    )
    .then((res) => res)
    .catch((error) => error.response);
};

const updateUserAddress = async (email, userid, token, data) => {
  return requests
    .put(
      "/api/users/homes?userid=" + userid,
      { data },
      {
        headers: {
          Authorization: "Bearer " + token,
          email,
        },
      }
    )
    .then((res) => res)
    .catch((error) => error.response);
};

const deleteUserFacility = async (email, userid, token, id) => {
  return requests
    .delete("/api/users/facilities?userid=" + userid + "&" + "id=" + id, {
      headers: {
        Authorization: "Bearer " + token,
        email,
      },
    })
    .then((res) => res)
    .catch((error) => error.response);
};

const getUserFacilities = async (email, userid, token) => {
  return requests
    .get("/api/users/facilities?userid=" + userid, {
      headers: {
        Authorization: "Bearer " + token,
        email,
      },
    })
    .then((res) => res)
    .catch((error) => error.response);
};

const deleteUserProfile = async (email, userid, token) => {
  return requests
    .delete("/api/users?userid=" + userid, {
      headers: {
        Authorization: "Bearer " + token,
        email,
      },
    })
    .then((res) => res)
    .catch((error) => error.response);
};

const updateUserProfile = async (email, userid, token, user) => {
  return requests
    .put(
      "/api/users?userid=" + userid,
      { user },
      {
        headers: {
          Authorization: "Bearer " + token,
          email,
        },
      }
    )
    .then((res) => res)
    .catch((error) => error.response);
};

const createUserRequest = async (user) => {
  return requests
    .post("/api/users", { user })
    .then((res) => res)
    .catch((error) => error.response);
};

const signInUserRequest = async (user) => {
  return requests
    .post("/api/signin", { user })
    .then((res) => res)
    .catch((error) => error.response);
};

export const apis = {
  signInUserRequest,
  createUserRequest,
  getUserProfile,
  getUserAddress,
  addUserAddress,
  addUserFacility,
  updateUserAddress,
  updateUserProfile,
  deleteUserProfile,
  getUserFacilities,
  deleteUserFacility,
  deleteUserAddress,
  getLocations,
};
