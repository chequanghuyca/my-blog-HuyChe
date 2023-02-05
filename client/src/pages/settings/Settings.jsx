import axios from 'axios';
import { useContext, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import { Context } from '../../context/Context';
import './settings.css'

export default function Settings() {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);

    const { user, dispatch } = useContext(Context);
    const PF = 'https://huyche-api.onrender.com/images/'

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_START' });
        const updatedUser = { userId: user._id, username, email, password };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            updatedUser.profilePic = filename;
            try {
                await axios.post('/upload', data);
            } catch (err) { }
        }
        try {
            const res = await axios.put('/users/' + user._id, updatedUser);
            setSuccess(true);
            dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
        } catch (err) {
            dispatch({ type: 'UPDATE_FAILURE' });
        }
    };

    return (
        <>
            <div className='settings'>
                <div className='settings-wrapper'>
                    <div className='settings-title'>
                        <span className='settings-update-title'>Cập nhật tài khoản</span>
                        <span className='settings-delete-title'>Xóa tài khoản</span>
                    </div>
                    <form className='settings-form' onSubmit={handleSubmit}>
                        <label>Ảnh đại diện</label>
                        <div className='settings-profile-picture'>
                            <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt='' />
                            <label htmlFor='fileInput' title='Update file ảnh'>
                                <i className='settings-profile-picture-icon fa fa-upload' />
                            </label>
                            <input type='file' id='fileInput' style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
                        </div>
                        <label>Tài khoản</label>
                        <input type='text' placeholder={user.username} onChange={(e) => setUsername(e.target.value)} />
                        <label>Email</label>
                        <input type='email' placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Mật khẩu</label>
                        <input type='password' onChange={(e) => setPassword(e.target.value)} />
                        <button className='settings-submit' type='submit'>Cập nhật</button>
                        {success && (
                            <span style={{ color: 'green', textAlign: 'center', marginTop: '20px' }} >
                                Thông tin đã được cập nhật
                            </span>
                        )}
                    </form>
                </div>
                <Sidebar />
            </div>
        </>

    )
}
