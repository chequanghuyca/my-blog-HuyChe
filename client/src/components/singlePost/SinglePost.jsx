import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './singlePost.css'
import axios from '../../ClientAxios'
import { Context } from '../../context/Context';

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({});
    const PF = 'https://huyche-api.onrender.com/images/';
    const { user } = useContext(Context);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get('/posts/' + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost();
    }, [path]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, { data: { username: user.username } });
            window.location.replace('/');
        } catch (err) { }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, { username: user.username, title, desc });
            setUpdateMode(false)
        } catch (err) { }
    };

    return (
        <div className='single-post'>
            <div className='single-post-wrapper'>
                {post.photo && (<img className='single-post-img' src={PF + post.photo} alt='' />)}
                <div className='single-post-info'>
                    <span className='single-post-author'>Tác giả:
                        <Link to={`/?user=${post.username}`} className='link'>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className='single-post-date'>{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? (
                    <input type='text' value={title} className='single-post-title-input' autoFocus onChange={(e) => setTitle(e.target.value)} />
                ) : (
                    <h1 className='single-post-title'>
                        {title}
                        {post.username === user?.username && (
                            <div className='single-post-edit'>
                                <i className='single-post-icon fa fa-pencil-square-o' onClick={() => setUpdateMode(true)} />
                                <i className='single-post-icon fa fa-trash' onClick={handleDelete} />
                            </div>
                        )}
                    </h1>
                )}
                {updateMode ? (
                    <textarea className='single-post-desc-input' value={desc} onChange={(e) => setDesc(e.target.value)} />
                ) : (
                    <p className='single-post-desc'>{desc}</p>
                )}
                {updateMode && (
                    <button className='single-post-button' onClick={handleUpdate}>
                        <i className='fa fa-pencil-square-o' aria-hidden='true'/>&nbsp; Cập nhật 
                    </button>
                )}
            </div>
        </div>
    );
}
