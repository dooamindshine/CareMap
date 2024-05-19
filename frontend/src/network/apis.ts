import { requests } from './requests';

const getSessionRequest = async (id: number) => {
  console.log(id)
  return requests
    .get('/session').then((res) => res).catch((error) => console.log(error))
};

export const apis = { getSessionRequest };
