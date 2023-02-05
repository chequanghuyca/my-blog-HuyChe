import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css'

export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = 'https://huyche-api.onrender.com/images/';

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <div className='top'>
            <div className='top-left' />
            <div className='top-center'>
                <ul className='top-list'>
                    <li className='top-list-item' >
                        <Link className='link' to='/' style={{ padding: '10px', fontWeight: 'bold' }}>HOME</Link>
                    </li>
                    <li className='top-list-item' >
                        <Link className='link' to='/' style={{ padding: '10px', fontWeight: 'bold' }}>ABOUT</Link>
                    </li>
                    <li className='top-list-item' >
                        <Link className='link' to='/' style={{ padding: '10px', fontWeight: 'bold' }}>CONTACT</Link>
                    </li>
                    <li className='top-list-item' >
                        <Link className='link' to='/write' style={{ padding: '10px', fontWeight: 'bold' }}>WRITE</Link>
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
