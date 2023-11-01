import React, { useState } from 'react';
import Card from '../common/Card';
import Input from '../Signup/SignupStyle';
import Button from '../common/Button';

interface SigninFormState {
  email: string;
  password: string
}

const Login: React.FC = () => {
  const [formValue, setFormValue] = useState<SigninFormState>({
    email: '',
    password: '',
  });

  return (
    <div data-testid="signin-wrapper">
      <Card>
        <h2>Sign in Forms</h2>
        <form>
          <div className='form-fields'>
            <Input
              name="email"
              type="email"
              placeholder='Email'
              autoComplete="off"
            />

            <Input
              name="password"
              type="password"
              placeholder='password'
              value={formValue.password}
            />
          </div>
          <Button name="Signup" type="submit" />
        </form>
      </Card>
    </div>
  );
};

export default Login;