import { UserSeverObjectPostRequest } from 'models/user_type';
import { requests } from './requests';

const getUserRequest = async () => {
  return requests
    .get('/user').then((res: any) => res).catch((error: any) => console.log(error))
};


const createUserRequest = async (user: UserSeverObjectPostRequest) => {
  return requests
    .post('/user', {user}).then((res: any) => res).catch((error: any) => console.log(error))
};


export const apis = { createUserRequest, getUserRequest };
