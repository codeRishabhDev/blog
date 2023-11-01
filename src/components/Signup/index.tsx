import React, { ChangeEvent, useState } from 'react';
import Button from '../common/Button';
import Input from './SignupStyle';
import Card from '../common/Card';

interface FormState {
  name?: string,
  lastName?: string,
  email?: string,
  password?: string,
  confirmPassword?: string,
}

const Signup: React.FC<FormState> = () => {
  const [formValue, setFormValue] = useState<FormState>({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErros] = useState<FormState>({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let error = '';
    if (name === 'email' && !value.match(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/)) {
      error = 'Invalid email format';
    }
    if (name === 'password' && value.length < 6) {
      error = 'Password must be at least 6 characters';
    }
    if (name === 'confirmPassword' && value !== formValue.password) {
      error = 'Passwords do not match';
    }

    setErros({
      ...errors,
      [name]: error,
    });

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate the form
    let valid = true;
    const newErrors = { ...errors };
    if (!formValue.name) {
      valid = false;
      newErrors.name = 'Name is required';
    }
    if (!formValue.lastName) {
      valid = false;
      newErrors.lastName = 'Last name is required';
    }
    if (!formValue.email) {
      valid = false;
      newErrors.email = 'Email is required';
    }
    if (!formValue.password) {
      valid = false;
      newErrors.password = 'Password is requered';
    }
    if (!formValue.confirmPassword) {
      valid = false;
      newErrors.confirmPassword = 'confirm password is required'
    }

    if (!valid) {
      setErros(newErrors);
    } else {
      console.log(formValue);
    }
  }

  return (
    <div data-testid="signin-wrapper">
      <Card>
        <h2>Signup Forms</h2>
        <form onSubmit={handleSubmit} autoComplete="off" >
          <div className='form-fields'>
            <Input
              name="name"
              type="text"
              placeholder='Name'
              value={formValue.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            <span className="error-message">{errors.name}</span>
            <Input
              name="lastName"
              type="text"
              placeholder='lastName'
              value={formValue.lastName}
              onChange={handleChange}
              className={errors.lastName ? 'error' : ''}
            />
            <span className="error-message">{errors.lastName}</span>
            <Input
              name="email"
              type="email"
              placeholder='Email'
              value={formValue.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              autoComplete="off"
            />
            <span className="error-message">{errors.email}</span>
            <Input
              name="password"
              type="password"
              placeholder='password'
              value={formValue.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
            />
            <span className="error-message">{errors.password}</span>
            <Input
              name="confirmPassword"
              type="password"
              placeholder='Confirm password'
              value={formValue.confirmPassword}
              className={errors.confirmPassword ? 'error' : ''}
              onChange={handleChange}
            />
            <span className="error-message">{errors.confirmPassword}</span>
          </div>
          <Button name="Signup" type="submit" />
          <div>
            Already have an account? Login
          </div>
          <div>or</div>
          {/* <Button name="Login with Facebook" type="button" />
          <Button name="Login with Google" type="button" /> */}
        </form>
      </Card>
    </div>
  );
};

export default Signup;