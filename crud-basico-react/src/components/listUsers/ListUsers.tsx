import { UserResponse } from "../../interfaces/iUser";
import { MainCustom } from "./style";

interface ListUserProps {
    dados: UserResponse[];
}

export const ListUser = ({dados} : ListUserProps ) => {    
    
    return (
        <>                 
            <h2>LISTA DE USERS</h2>
            <MainCustom>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>IDADE</th>
                            <th>TELEFONE</th>
                            <th>E-MAIL</th>
                            <th>AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                    {dados.length > 0 ? dados.map((dado) => (
                        <tr key={dado.id}>
                            <td>{dado.id}</td>
                            <td>{dado.name}</td>
                            <td>{dado.age}</td>
                            <td>{dado.phone}</td>
                            <td>{dado.email}</td>
                            <td>
                                <button>Detalhes</button>
                                <button>Editar</button>
                                <button>Excluir</button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={6}>Nenhum dado disponível</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </MainCustom>
        </>
    )
}