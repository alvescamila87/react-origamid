import { API } from "../../lib/axios";

export async function getUsers() {
    try {
      const response = await API.get("/users");
      //console.log(response.data)
      return response.data;
      //setDados(response.data);
    } catch (error) {
      console.log(error, "Erro ao buscar dados...");
      // toast, push notification (componentes sugeridos para o lugar de console.log)
    }
  }