import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css'

export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = 'https://huyche-api.onrender.com/images/';

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    const [sticky, setSticky] = useState(false);

    

    const handleScroll = () => {
        if (window.pageYOffset > 65) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <header className={`top ${sticky ? 'sticky' : ''}`}>
            <div className='top-left' />
            <div className='top-center'>
                <ul className='top-list'>
                    <li className='top-list-item' >
                        <Link className='link' to='/' style={{ fontSize: '30px' }} title='Trang chủ'>
                            <i className='fa fa-home' aria-hidden='true' />
                        </Link>
                    </li>
                    <li className='top-list-item' >
                        <Link className='link' to='/' style={{ padding: '10px', fontWeight: 'bold' }}>THÔNG TIN VỀ TÔI</Link>
                    </li>
                    <li className='top-list-item' >
                        <Link className='link' to='/' style={{ padding: '10px', fontWeight: 'bold' }}>LIÊN HỆ VỚI TÔI</Link>
                    </li>
                    <li className='top-list-item' >
                        <Link className='link' to='/write' style={{ padding: '10px', fontWeight: 'bold' }}>VIẾT BLOG</Link>
                    </li>
                </ul>
            </div>
            <div className='top-right'>
                {
                    user ? (
                        <ul className='top-list'>
                            <li className='top-list-logout' onClick={handleLogout}>
                                {user && 'Đăng suất'}
                            </li>
                            <li className='top-list-item'>
                                <Link to='/settings'>
                                    <img className='top-img' src={PF + user.profilePic} alt='' />
                                </Link>
                            </li>
                        </ul>

                    ) : (
                        <ul className='top-list'>
                            <li className='top-list-item-right'>
                                <Link className='link' to='/login'>Đăng nhập </Link>
                            </li>
                            {/* <li className='top-list-item-right'>
                                <Link className='link' to='/register'>Đăng ký </Link>
                            </li> */}
                        </ul>
                    )
                }
                <i className='top-search-icon fa fa-search' aria-hidden='true'></i>
            </div>
        </header>
    );
}
