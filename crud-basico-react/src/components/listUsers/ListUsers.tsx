import { UserResponse } from "../../App"

interface ListUserProps {
    dados: UserResponse[];
}

export const ListUser = ({dados} : ListUserProps ) => {    
    
    return (
        <>
            <h2>LISTA DE USERS </h2>
            {dados.length && dados.map((dado) => (
                <div key={dado.id}>
                <div>{dado.name}</div>
                <div>{dado.age}</div>
                </div>
            ))}
        </>
    )
}