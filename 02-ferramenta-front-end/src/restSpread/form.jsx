import React from 'react'
import Button from './button'
import Input from './input'

const Form = () => {

    const array = ['Item 1', 'Item 2']

    return (
        <form>
            <Input id="email" label="Email" required />
            <Input id="password" type="password" label="Password" />
            <Button items={array} />
        </form>
    )
}

export default Form