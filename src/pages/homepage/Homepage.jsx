import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './homepage.css'
import { useLocation } from 'react-router';

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header/>
      <div className='homepage'>
        <Posts/>
        <Sidebar/>
      </div>
    </>
  )
}
