import { SignIn, SignUp } from "./auth";

interface params {
   page?: number;
   limit?: number;
   search?: string;
}

export interface Category {
   create: (data: string) => Promise<any>;
   get: (params: params) => Promise<any>;
   update: (id: number, data: string) => Promise<any>;
   delete: (id: number) => Promise<any>;
}

export interface Auth {
   sign_in: (data: SignIn) => Promise<any>;
   sign_up: (data: SignUp) => Promise<any>;
}
