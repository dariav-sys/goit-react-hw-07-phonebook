import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth';
import { form, label, button, input } from './Register.module.css';

const initialState = {
  name: '',
  email: '',
  password: '',
};
export default function RegisterView() {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(user));
    setUser(initialState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={form}>
        <label className={label}>
          Name
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className={input}
          />
        </label>

        <label className={label}>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className={input}
            placeholder="name@email.com"
          />
        </label>

        <label className={label}>
          Password
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className={input}
            placeholder="*********"
          />
        </label>

        <button type="submit" className={button}>
          Sign up
        </button>
      </form>
    </div>
  );
}
