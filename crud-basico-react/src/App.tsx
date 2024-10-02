import { useEffect, useState } from "react";
import { getUsers } from "./api/users/get-users";
import { ListUser } from "./components/listUsers/ListUsers";
import { CreateUsers } from "./components/forms/CreateUsers";

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

export function App() {
  const [dados, setDados] = useState<UserResponse[]>([]);  

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setDados(users);
    }
    
    fetchUsers();   
  }, []);

  return (
    <>      
      <CreateUsers />
      <ListUser dados={dados}/>
    </>
  );
}
