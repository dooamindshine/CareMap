import { requests } from "./requests";

const getUserProfile = async (email, token) => {
  return requests
    .get("/api/profile?email=" + email, {
      headers: {
        Authorization: "Bearer " + token,
        email: email,
      },
    })
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

export const apis = { signInUserRequest, createUserRequest, getUserProfile };
