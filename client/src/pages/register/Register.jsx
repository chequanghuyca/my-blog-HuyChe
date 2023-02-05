import axios from '../ClientAxios';
import { useState } from 'react'
import './register.css'

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post('/auth/register', { username, email, password });
            res.data && window.location.replace('/login');
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className='register'>
            <span className='register-title'>Đăng ký</span>
            <form className='register-form' onSubmit={handleSubmit}>
                <label>Tài khoản</label>
                <input className='register-input' type='text' placeholder='Tài khoản...' onChange={e => setUsername(e.target.value)}/>
                <label>Email</label>
                <input className='register-input' type='text' placeholder='Nhập email...' onChange={e => setEmail(e.target.value)}/>
                <label>Mật khẩu</label>
                <input className='register-input' type='password' placeholder='Nhập mật khẩu...' onChange={e => setPassword(e.target.value)}/>
                <button className='register-button' type='submit'>Đăng ký</button>
                {error && <span style={{color: 'red', marginTop: '10px'}}>Đang xảy ra sự cố!</span>}
            </form>
        </div>
    )
}