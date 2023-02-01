import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <span className='login-title'>Đăng nhập</span>
        <form className='login-form'>
            <label>Email</label>
            <input className='login-input' type='email' placeholder='Nhập email của bạn...' />
            <label>Mật khẩu</label>
            <input className='login-input' type='password' placeholder='Nhập mật khẩu của bạn...' />
            <button className='login-button'>Đăng nhập</button>
        </form>
        <button className='login-register-button'>Đăng ký</button>
    </div>
  )
}
