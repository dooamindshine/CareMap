import { NavigateFunction } from "react-router-dom";

export interface GetUser {
  navigation: NavigateFunction
}

export interface CreateUser {
  navigation: NavigateFunction
  user: UserSeverObjectPostRequest
}

export interface UserSeverObjectGetRequest {
   email: string;
   password: string;
}

export interface UserSeverObjectPostRequest {
  first_name: string;
   last_name: string;
   email: string;
   password: string;
}


export interface UserSeverObjectPostResponse {
  first_name: string;
  last_name: string;
  email: string;
}
