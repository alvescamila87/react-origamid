export interface UserResponse {
    id: number;
    name: string;
    age: number;
    phone: string;
    email: string;
    address: {    
      street: string;
      city: string;
      state: string;
      zipcode: string;
    }[];
}

export type UserRequest = Omit<UserResponse, "id">
 
  