import { useEffect, useState } from 'react';
import './sidebar.css'
import axios from '../../ClientAxios'
import { Link } from 'react-router-dom';
import sidebar_huyche from '../../images/sidebar_huyche.png';

function MyLink({ href, target, children }) {
  return <a href={href} target={target}>{children}</a>;
}

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories');
      setCats(res.data);
    }
    getCats();
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebar-item'>
        <span className='sidebar-title'>MÌNH LÀ HUY CHE</span>
        <img src={sidebar_huyche} alt='' />
        <p>If you're trying to achieve, there will be roadblocks. I've had them, everybody has had them. But obstacles don't have to stop you. If you run into a wall, don't turn around and give up. Figure out how to climb it, go through it, or work around it.</p>
      </div>
      <div className='sidebar-item'>
        <span className='sidebar-title'>NHỮNG THỨ VỀ HUY CHE</span>
        <ul className='sidebar-list'>
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className='link'>
              <li className='sidebar-list-item'>{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='sidebar-item'>
        <span className='sidebar-title'>LIÊN HỆ VỚI HUY CHE</span>
        <div className='sidebar-social'>
          <MyLink href='https://www.facebook.com/huycheeeeee' target='_blank'>
            <i className='top-icon fa fa-facebook-official' style={{ color: '#238ae6' }} aria-hidden='true' />
          </MyLink>
          <MyLink href='https://zalo.me/0939260508' target='_blank'>
            <i className='top-icon fa fa-phone-square' style={{ color: '#39c429' }} aria-hidden='true' />
          </MyLink>
          <MyLink href='https://github.com/chequanghuyca' target='_blank'>
            <i className='top-icon fa fa-github-square' style={{ color: 'rgb(138, 15, 190)' }} aria-hidden='true' />
          </MyLink>
        </div>
      </div>
    </div>
  )
}
