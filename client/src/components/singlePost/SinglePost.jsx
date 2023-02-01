import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='single-post'>
        <div className='single-post-wrapper'>
            <img className='single-post-img' src='https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/323785721_537687241622798_2940213729118145423_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=IGqUn392su4AX_6zrb9&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfBm3CSaeo0uCklI3YYLLvJgquv2UTY4khjecRkTxvS23Q&oe=63DFD6C2' alt=''/>
            <h1 className='single-post-title'>
                Lorem ipsum dolor sit amet.
                <div className='single-post-edit'>
                    <i className='single-post-icon fa fa-pencil-square-o'></i>
                    <i className='single-post-icon fa fa-trash'></i>
                </div>
            </h1>
            <div className='single-post-info'>
                <span className='single-post-author'>Author: <b>HuyChe</b></span>
                <span className='single-post-date'>1 hour ago</span>
            </div>
            <p className='single-post-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
            </p>
        </div>
    </div>
  )
}
