import { Link } from 'react-router-dom';
import './topbar.css'

export default function TopBar() {
    const user = false;
    return (
        <div className='top'>
            <div className='top-left'/>
            <div className='top-center'>
                <div className='top-list'> 
                    <li className='top-list-item' >
                        <Link className='link' to='/' style={{padding:'10px', fontWeight: 'bold'}}>HOME</Link>
                    </li>
                    <li className='top-list-item' >
                        <Link className='link' to='/' style={{padding:'10px', fontWeight: 'bold'}}>ABOUT</Link>
                    </li>
                    <li className='top-list-item' >
                        <Link className='link' to='/' style={{padding:'10px', fontWeight: 'bold'}}>CONTACT</Link>
                    </li>
                    <li className='top-list-item' >
                        <Link className='link' to='/write' style={{padding:'10px', fontWeight: 'bold'}}>WRITE</Link>
                    </li>
                    <div className='dot'/>
                </div>
            </div>
            <div className='top-right'>
                {
                    user ? (
                        <img className='top-img' src='https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/285845860_3237378019807655_7858648806545589602_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=fjWHpef9X7AAX8L-Prh&tn=qjky9nfMM4cr9NG1&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAFx2lAETdu59bL2N8CLa5Iya9fv9j3J3lW8RCa4OHR2g&oe=63DFC956' alt=''/>
                    ) : (
                        <ul className='top-list'>
                            <li className='top-list-item-right'>
                                <Link className='link' to='/login'>Đăng nhập </Link>
                            </li>
                            <li className='top-list-item-right'>
                                <Link className='link' to='/register'>Đăng ký </Link>
                            </li>
                        </ul>
                    )
                }
                
                <i className='top-search-icon fa fa-search' aria-hidden='true'></i>
            </div>
        </div>
    )
}
