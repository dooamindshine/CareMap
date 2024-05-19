import { requests } from './requests';

const getUserRequest = async () => {
  return requests
    .get('/user').then((res) => res).catch((error) => console.log(error))
};


const createUserRequest = async (user) => {
  return requests
    .post('/user', {user}).then((res) => res).catch((error) => console.log(error))
};


export const apis = { createUserRequest, getUserRequest };
