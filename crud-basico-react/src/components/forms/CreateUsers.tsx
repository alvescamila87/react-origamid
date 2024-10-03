import { FormEvent } from "react"
import { ButtonsFormContainer, FieldsetCustom, FormContainer, FormContent, FormGroup } from "./style"
//import { UserRequest } from "../../interfaces/iUser"

// const initialValues = {
//     name: '',
//     age: 0,
//     phone: '',
//     email: '',
//     address: [{
//         street: '',
//         city: '',
//         state: '',
//         zipcode: '',
//     }]
// }

export const CreateUsers = () => {

    //const [values, setValues] = useState<UserRequest>(initialValues);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        console.log(event)
        event.preventDefault();

        const form = event.currentTarget;

        const formData = new FormData(form);  
        
        const data = Object.fromEntries(formData.entries())
        console.log(data)

        // const data =  Object.fromEntries(
        //     formData.entries()
        // ) as Record<string, NossaInterface>;
    }

   

    return (
        <FormContainer onSubmit={handleSubmit}>
            <h1>Cadastro de user</h1>
            <FormContent>
                <div>
                    <FieldsetCustom>
                        <legend>Dados básicos</legend>
                    <FormGroup>
                        <label htmlFor="name">Nome </label>
                        <input type="text" id="name" name="name"></input>
                           
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="age">Idade </label>
                        <input type="number" id="age" name="age"/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="phone">Tel </label>
                        <input type="text" id="phone" name="phone"/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="email">E-mail </label>
                        <input type="email"  id="email" name="email"/>
                    </FormGroup>
                    </FieldsetCustom>          

                    <FieldsetCustom>
                    <legend>Endereço</legend>
                    <FormGroup>
                        <label htmlFor="zipcode">CEP </label>
                        <input type="text" id="zipcode" name="zipcode"/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="street">Logradouro </label>
                        <input type="text" id="street" name="street"/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="city">Cidade </label>
                        <input type="text" id="city" name="city"/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="state">UF </label>
                        <input type="text" id="state" name="state"/>
                    </FormGroup>
                    </FieldsetCustom>
                </div>
                <ButtonsFormContainer>
                    <button type="submit">Salvar</button>
                    <button>Limpar</button>   
                </ButtonsFormContainer>
            </FormContent>
        </FormContainer>
    )
}