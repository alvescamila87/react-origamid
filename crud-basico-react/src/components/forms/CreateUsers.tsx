import { ChangeEvent, FormEvent, useState } from "react";
import {
  ButtonsFormContainer,
  FieldsetCustom,
  FormContainer,
  FormContent,
  FormGroup,
} from "./style";
import {
  UserDataAddresses,
  UserDataBasic,
  UserRequest,
} from "../../interfaces/iUser";
import { createUsers } from "../../api/users/create-users";

const INITIAL_VALUES_USER = {
  name: "",
  age: "",
  phone: "",
  email: "",
};

const INITIAL_VALUES_ADDRESSES = [
  {
    street: "",
    number: "",
    city: "",
    state: "",
    zipcode: "",
  },
];

export const CreateUsers = () => {
  // controlled: target value
  const [userValues, setUserValues] =
    useState<UserDataBasic>(INITIAL_VALUES_USER);
  const [addressesValues, setAddressesValues] = useState<UserDataAddresses>(
    INITIAL_VALUES_ADDRESSES
  );

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = event.target;
  //     //console.log(name, value)

  //     const [fieldname, index] = name.split("-");

  //     if(index !== undefined){
  //         if(fieldname in userValues.address[Number(index)]){
  //             setUserValues((previousValues) => {
  //                 const addressCopy = previousValues.address;
  //                 (addressCopy[Number(index)] as any)[fieldname]= value;
  //                 return {
  //                     ...previousValues,
  //                     address: addressCopy
  //                 }
  //             });
  //         }
  //     } else {
  //         setUserValues((previousValues) => ({
  //             ...previousValues,
  //             [name]: value,
  //         }));
  //     }

  // }

  const handleChangeUserDataBasic = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));
  };

  const handleChangeUserAddresses = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const [fieldname, index] = name.split("-") as [
      keyof UserDataAddresses[0],
      string
    ];

    if (fieldname in addressesValues[Number(index)]) {
      setAddressesValues((previousValues) => {
        const addressCopy = previousValues[Number(index)];
        addressCopy[fieldname] = value;
        return [...previousValues];
      });
    }
  };

  // const handleChangeUserAddresses2 = (position: number, field: string, item: string) => {
  //     setAddressesValues((previousValues) => {
  //         (previousValues[position] as any)[field] = item;
  //         return [...previousValues]
  //     })
  // }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const data: UserRequest = { ...userValues, address: addressesValues };
    
    console.log(event, data);
    event.preventDefault();
    
    // API
    createUsers(data)
        .then(console.log)
        //.then((response) => (response.json)) // já está feito na API
        //.then(console.log)
        .catch((error) => console.error(error))

    // uncontrolled: só sabe após salvar
    // const form = event.currentTarget;

    // const formData = new FormData(form);

    // const data = Object.fromEntries(formData.entries())
    // console.log(data)

    // const data =  Object.fromEntries(
    //     formData.entries()
    // ) as Record<string, NossaInterface>;
  }

  // const response = INITIAL_VALUES.address[0];
  // console.log("Address: ", response)

  // const response = INITIAL_VALUES.address.map((a, index) => (
  //     a.street,
  //     a.city,
  //     a.state,
  //     a.zipcode
  // ))

  const handleClean = () => {
    setUserValues(INITIAL_VALUES_USER);
    setAddressesValues(INITIAL_VALUES_ADDRESSES);
  };

  // const handleAddAddress = () => {
  //     setValues((previousValues) => {
  //         const addressCopy = previousValues.address;
  //         addressCopy.push({
  //             street: 'Rua Blumenau',
  //             number: '',
  //             city: '',
  //             state: '',
  //             zipcode: '',
  //         })
  //         return {
  //             ...previousValues,
  //             address: addressCopy
  //         }
  //     });
  // }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1>Cadastro de user</h1>
      <FormContent>
        <div>
          <FieldsetCustom>
            <legend>Dados básicos</legend>
            <FormGroup>
              <label htmlFor="name">Nome </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userValues.name}
                onChange={handleChangeUserDataBasic}
              ></input>
            </FormGroup>
            <FormGroup>
              <label htmlFor="age">Idade </label>
              <input
                type="text"
                id="age"
                name="age"
                value={userValues.age}
                onChange={handleChangeUserDataBasic}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="phone">Tel </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={userValues.phone}
                onChange={handleChangeUserDataBasic}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">E-mail </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userValues.email}
                onChange={handleChangeUserDataBasic}
              />
            </FormGroup>
          </FieldsetCustom>

          {addressesValues.map((address, index) => (
            <FieldsetCustom key={index}>
              <legend>Endereço</legend>
              <FormGroup>
                <label htmlFor="zipcode">CEP </label>
                <input
                  type="text"
                  id="zipcode"
                  name={`zipcode-${index}`}
                  value={address.zipcode}
                  // onChange={(e) => handleChangeUserAddresses2(index, "zipcode", e.target.value)}
                  onChange={handleChangeUserAddresses}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="street">Logradouro </label>
                <input
                  type="text"
                  id="street"
                  name={`street-${index}`}
                  value={address.street}
                  onChange={handleChangeUserAddresses}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="number">Número </label>
                <input
                  type="text"
                  id="number"
                  name={`number-${index}`}
                  value={address.number}
                  onChange={handleChangeUserAddresses}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="city">Cidade </label>
                <input
                  type="text"
                  id="city"
                  name={`city-${index}`}
                  value={address.city}
                  onChange={handleChangeUserAddresses}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="state">UF </label>
                <input
                  type="text"
                  id="state"
                  name={`state-${index}`}
                  value={address.state}
                  onChange={handleChangeUserAddresses}
                />
              </FormGroup>
            </FieldsetCustom>
          ))}
          {/* <button onClick={handleAddAddress}>Adicionar endereço</button> */}
        </div>
        <ButtonsFormContainer>
          <button type="submit">Salvar</button>
          <button type="button" onClick={handleClean}>
            Limpar
          </button>
        </ButtonsFormContainer>
      </FormContent>
    </FormContainer>
  );
};
