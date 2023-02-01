import { Link } from 'react-router-dom';
import './topbar.css'

export default function TopBar() {
    const user = true;
    return (
        <div className='top'>
            <div className='top-left'>
                <a href={'https://www.facebook.com/huycheeeeee'} title='Facebook'>
                    <i className='top-icon fa fa-facebook-official' style={{color:'#238ae6'}} aria-hidden='true'></i>
                </a>
                <a href={'https://zalo.me/0939260508'} title='Zalo'>
                    <i className='top-icon fa fa-phone-square' style={{color:'#39c429'}} aria-hidden='true'></i>
                </a>
                <a href={'https://github.com/chequanghuyca'} title='Github'>
                    <i className='top-icon fa fa-github-square' style={{color:'rgb(138, 15, 190)'}} aria-hidden='true'></i>
                </a>
            </div>
            <div className='top-center'>
                <div className='top-list'> 
                    <li className='top-list-item' >
                        <Link to='/' style={{textDecoration:'none', color:'inherit'}}>HOME</Link>
                    </li>
                    <li className='top-list-item' >ABOUT</li>
                    <li className='top-list-item' >CONTACT</li>
                    <li className='top-list-item' >WRITE</li>
                    <li className='top-list-item' >LOGOUT</li>
                </div>
            </div>
            <div className='top-right'>
                <img className='top-img' src='https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/285845860_3237378019807655_7858648806545589602_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=fjWHpef9X7AAX8L-Prh&tn=qjky9nfMM4cr9NG1&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAFx2lAETdu59bL2N8CLa5Iya9fv9j3J3lW8RCa4OHR2g&oe=63DFC956' alt=''/>
                <i className='top-search-icon fa fa-search' aria-hidden='true'></i>
            </div>
        </div>
    )
}
