import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

export default function Settings() {
  return ( 
    <>
        <div className='settings'>
            <div className='settings-wrapper'>
                <div className='settings-title'>
                    <span className='settings-update-title'>Cập nhật tài khoản</span>
                    <span className='settings-delete-title'>Xóa tài khoản</span>
                </div>
                <form className='settings-form'>
                    <label>Ảnh đại diện</label>
                    <div className='settings-profile-picture'>
                        <img src='https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/285845860_3237378019807655_7858648806545589602_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=fjWHpef9X7AAX8L-Prh&tn=qjky9nfMM4cr9NG1&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAFx2lAETdu59bL2N8CLa5Iya9fv9j3J3lW8RCa4OHR2g&oe=63DFC956' alt=''/>   
                        <label htmlFor='fileInput' title='Update file ảnh'>
                            <i className='settings-profile-picture-icon fa fa-upload'></i>
                        </label>
                        <input type='file' id='fileInput' style={{display: 'none'}}/>
                    </div>
                    <label>Tài khoản</label>
                    <input type='text' placeholder='huyche'/>
                    <label>Email</label>
                    <input type='email' placeholder='chequanghuybtt@gmail.com'/>
                    <label>Mật khẩu</label>
                    <input type='password'/>
                    <button className='settings-submit'>Cập nhật</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    </>
    
  )
}
