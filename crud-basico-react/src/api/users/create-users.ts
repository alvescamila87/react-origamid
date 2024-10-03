import { UserRequest } from "../../interfaces/iUser";
import { API } from "../../lib/axios"

export async function createUsers(data: UserRequest) {
    try {
        const response = await API.post("/users", data);
        return response.data;        
    } catch (error) {
        console.log(error, "Ocorreu erro ao tentar cadastrar usuário.")
    }
}