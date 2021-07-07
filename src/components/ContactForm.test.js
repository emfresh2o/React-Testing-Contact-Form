import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

//checkibg if label and input exist and adds new contact
test("Labels exist for input fields", () => {
    render(<ContactForm />);
})

test("Form adds new contact", () => {
    const { getByLabelText, getByDisplayValue } = render(<ContactForm />); 

    const firstNameInput = getByLabelText(/first name/i)
    const lastNameInput = getByLabelText(/last name/i)
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);
  
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();

    fireEvent.change(firstNameInput, {target: {name: 'first name', value: 'Edd'}})
    fireEvent.change(lastNameInput, {target: {name: 'last name', value: 'Burke'}})
    fireEvent.change(emailInput, {target: {name: 'email', value: 'bluebill1049@hotmail.com'}})
    fireEvent.change(messageInput, {target: {name: 'message', value: ''}})

    expect(getByDisplayValue(/Edd/i)).toBeInTheDocument()
    expect(getByDisplayValue(/Burke/i)).toBeInTheDocument()
    expect(getByDisplayValue(/bluebill1049@hotmail.com/i)).toBeInTheDocument()
    // expect(getByDisplayValue(/message/i)).toBeInTheDocument()

})
