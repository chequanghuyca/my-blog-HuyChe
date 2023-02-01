import './write.css'

export default function Write() {
  return (
    <div className='write'>
        <img className='write-img' src='https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/323785721_537687241622798_2940213729118145423_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=IGqUn392su4AX_6zrb9&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfBm3CSaeo0uCklI3YYLLvJgquv2UTY4khjecRkTxvS23Q&oe=63DFD6C2' alt=''/>
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
