import { useEffect, useState } from "react";
import { getUsers } from "./api/users/get-users";
import { ListUser } from "./components/listUsers/ListUsers";
import { CreateUsers } from "./components/forms/CreateUsers";
import { UserResponse } from "./interfaces/iUser";

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
