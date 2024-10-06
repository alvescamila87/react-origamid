export interface UserResponse {
    id: number;
    name: string;
    age: string;
    phone: string;
    email: string;
    address: {    
      street: string;
      number: string;
      city: string;
      state: string;
      zipcode: string;
    }[];
}

export type UserRequest = Omit<UserResponse, "id">
export type UserDataBasic = Omit<UserRequest, "address">
export type UserDataAddresses = UserRequest["address"]
 
  