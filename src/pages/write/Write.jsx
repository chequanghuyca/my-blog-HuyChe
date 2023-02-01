import './write.css'

export default function Write() {
  return (
    <div className='write'>
        <img className='write-img' src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/322735932_569433934632485_8219805130384044753_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=YT86ocs2BR8AX_7Tcoo&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBdQvgAMdf9AXSvXA4mEGowVrqdLOvjCXFDKeTazvrINA&oe=63BF7A09' alt=''/>
        <form className='write-form'>
            <div className='write-form-group'>
                <label htmlFor='fileInput'>
                    <i className='write-icon fa fa-plus'></i>
                </label>
                <input type='file' id='fileInput' style={{display: 'none'}}/>
                <input type='text' placeholder='Title' className='write-input' autoFocus={true}/>
            </div>
            <div className='write-form-group'>
                <textarea placeholder='Tell your story...' type='text' className='write-input write-text'></textarea>
            </div>
            <button className='write-submit'>Đăng</button>
        </form>
    </div>
  )
}
