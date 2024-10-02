import styled from "styled-components";

export const FormContainer = styled.form`
    background-color: lightgrey;
    //width: 500px;
    display: grid;
    //display: flex;
    //flex-direction: column;
    gap: 0.5rem;
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
    gap: 0.5rem;
`

export const FieldsetCustom = styled.fieldset`
    //width: 300px;
    padding: 1rem;
    //box-sizing: border-box;
    display: grid;
    gap: 8px;
`