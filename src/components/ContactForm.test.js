import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import ContactForm from './ContactForm';

test("Labels exist for input fields", () => {
    render(<ContactForm />);
    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const email = screen.getByLabelText(/email/i)
    const message = screen.getByLabelText(/message/i)
  
    fireEvent.change(firstName, {target: {value: "Mitch"}});
    fireEvent.change(lastName, {target: {value: "Freshwater"}});
    fireEvent.change(email, {target: {value: "emfresh2o1018@gmail.com"}});
    fireEvent.change(message, {target: {value: "New hire"}});
  
    expect(firstName.value).toBe('Mitch')
    expect(lastName.value).toBe('Freshwater')
    expect(email.value).toBe('emfresh2o1018@gmail.com')
    expect(message.value).toBe('New hire')
  })

