import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img className='post-img' src='https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/285845860_3237378019807655_7858648806545589602_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=fjWHpef9X7AAX8L-Prh&tn=qjky9nfMM4cr9NG1&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAFx2lAETdu59bL2N8CLa5Iya9fv9j3J3lW8RCa4OHR2g&oe=63DFC956' alt=''/>
        <div className='post-info'>
          <div className='post-cats'>
              <span className='post-cat'>Music</span>
              <span className='post-cat'>Life</span>
          </div>
          <span className='post-title'>Lorem ipsum dolor sit amet.</span>
          <hr/>
          <span className='post-date'>1 hour ago</span>
        </div>
        <p className='post-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    </div>
  )
}
