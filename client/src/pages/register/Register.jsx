import './register.css'

export default function Register() {
    return (
        <div className='register'>
            <span className='register-title'>Đăng ký</span>
            <form className='register-form'>
                <label>Tài khoản</label>
                <input className='register-input' type='text' placeholder='Tài khoản...' />
                <label>Email</label>
                <input className='register-input' type='text' placeholder='Nhập email...' />
                <label>Mật khẩu</label>
                <input className='register-input' type='password' placeholder='Nhập mật khẩu...' />
                <button className='register-button'>Đăng ký</button>
            </form>
        </div>
    )
}