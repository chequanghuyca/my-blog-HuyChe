import axios from 'axios';
import { useContext, useRef } from 'react';
import { Context } from '../../context/Context';
import './login.css'

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', { username: userRef.current.value, password: passwordRef.current.value });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <div className='login'>
      <span className='login-title'>Đăng nhập</span>
      <form className='login-form' onSubmit={handleSubmit}>
        <label>Tài khoản</label>
        <input className='login-input' type='text' placeholder='Nhập tài khoản của bạn...' ref={userRef} />
        <label>Mật khẩu</label>
        <input className='login-input' type='password' placeholder='Nhập mật khẩu của bạn...' ref={passwordRef} />
        <button className='login-button' type='submit' disabled={isFetching}>Đăng nhập</button>
      </form>
    </div>
  );
}
