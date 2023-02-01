import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-item'> 
        <span className='sidebar-title'>ABOUT ME</span>
        <img src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/322735932_569433934632485_8219805130384044753_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=YT86ocs2BR8AX_7Tcoo&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBdQvgAMdf9AXSvXA4mEGowVrqdLOvjCXFDKeTazvrINA&oe=63BF7A09' alt='' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
      </div>
      <div className='sidebar-item'> 
        <span className='sidebar-title'>CATEGORIES</span>
        <ul className='sidebar-list'> 
          <li className='sidebar-list-item'>Life</li>
          <li className='sidebar-list-item'>Music</li>
          <li className='sidebar-list-item'>Style</li>
          <li className='sidebar-list-item'>Sport</li>
          <li className='sidebar-list-item'>Tech</li>
          <li className='sidebar-list-item'>Cinema</li>
        </ul>
      </div>
      <div className='sidebar-item'>
        <span className='sidebar-title'>FOLLOW US</span>
        <div className='sidebar-social'>
          <i className='sidebar-icon fa fa-facebook-official' style={{color:'#238ae6'}} aria-hidden='true'></i>
          <i className='sidebar-icon fa fa fa-phone-square' style={{color:'#39c429'}} aria-hidden='true'></i>
          <i className='sidebar-icon fa fa-github-square' style={{color:'rgb(138, 15, 190)'}} aria-hidden='true'></i>
        </div>
        </div>
    </div>
  )
}
