import React from 'react'
import Input from './Input'
import Button from './Button'

const Form = () => {
  return (
    <>
      <form>
        <p>
          <label htmlFor="nome">Nome</label>
          <Input />
        </p>
        <p>
          <label htmlFor="mail">Email</label>
          <Input />
        </p>
        <p>
          <Button />
        </p>        
      </form>
    </>
  )
}

export default Form