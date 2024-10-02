import { FieldsetCustom, FormContainer, FormContent, FormGroup } from "./style"

export const CreateUsers = () => {
    return (
        <FormContainer>
            <h1>Cadastro de user</h1>
            <FormContent>
                <FieldsetCustom>
                    <legend>Dados básicos</legend>
                    <FormGroup>
                    <label htmlFor="id">ID </label>
                    <input type="number" name="id" disabled/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="userName">Nome </label>
                    <input type="text" name="userName"/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="age">Idade </label>
                    <input type="number" name="age"/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="phone">Tel </label>
                    <input type="text" name="phone"/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="email">E-mail </label>
                    <input type="email" name="email"/>
                </FormGroup>
                </FieldsetCustom>
            

            <FieldsetCustom>
                <legend>Endereço</legend>
                <FormGroup>
                    <label htmlFor="zipcode">CEP </label>
                    <input type="text" name="zipcode"/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="street">Logradouro </label>
                    <input type="text" name="street"/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="city">Cidade </label>
                    <input type="text" name="city"/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="state">UF </label>
                    <input type="text" name="state"/>
                </FormGroup>
                </FieldsetCustom>
            </FormContent>
            <div>
                <button>Salvar</button>
                <button>Limpar</button>                
            </div>
        </FormContainer>
    )
}