import axios from '../../ClientAxios'
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import './write.css'

export default function Write() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { username: user.username, title, desc };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            newPost.photo = filename;
            try {
                await axios.post('/upload', data);
            } catch (err) { }
        }
        try {
            const res = await axios.post('/posts', newPost);
            window.location.replace('/post/' + res.data._id);
        } catch (err) { }
    };

    return (
        <div className='write'>
            {file && (<img className='write-img' src={URL.createObjectURL(file)} alt='' />)}
            <form className='write-form' onSubmit={handleSubmit}>
                <div className='write-form-img'>
                    <label htmlFor='fileInput'>
                        <i className='write-icon fa fa-file-image-o' aria-hidden='true'> </i>
                    </label>
                    <i className='text-icon'>&nbsp; Thêm ảnh</i>
                    <input type='file' id='fileInput' style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <div className='write-form-group'>
                    <input type='text' placeholder='Tiêu đề...' className='write-input' autoFocus={true} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className='write-form-group'>
                    <textarea placeholder='Nội dung...' type='text' className='write-input write-text' onChange={e => setDesc(e.target.value)} />
                </div>
                <button className='write-submit' type='submit'> 
                    <i className='fa fa-paper-plane' aria-hidden='true'/>
                    &nbsp; Đăng 
                </button>
            </form>
        </div>
    )
}
