import styled from "styled-components";

export const FormContainer = styled.form`
    background-color: lightgrey;
    //width: 100%;
    //display: grid;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
`

export const FormGroup = styled.div`
    //display: flex;
    width: 300px;
    label {
        display: block; 
        margin-bottom: 4px;
    }
    input {
        width: 100%;
        padding: 8px 4px;  
        border-radius: 8px;
        border: none;
        box-sizing: border-box;
    }
`

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

`

export const FieldsetCustom = styled.fieldset`
    //width: 300px;
    padding: 1rem;
    //box-sizing: border-box;
    display: grid;
    gap: 8px;
`
export const ButtonsFormContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 5px;
    button {
        padding: 10px;
        border: none;
        border-radius: 8px;
        margin-bottom: 10px;
        cursor: pointer;
        &:hover {
        background: gray;        
    }        
    }
    /* background-color: red; */
    /* button:hover {
        background: red;        
    } */
      
`