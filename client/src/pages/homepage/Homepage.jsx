import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './homepage.css'
import { useEffect, useState } from 'react';
import axios from '../../ClientAxios'
import { useLocation } from 'react-router';

export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts' + search)
      setPosts(res.data)
    }
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header/>
      <div className='homepage'>
        <Posts posts={posts}/>
        <Sidebar/>
      </div>
    </>
  );
}
