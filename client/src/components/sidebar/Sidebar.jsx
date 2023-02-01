import './sidebar.css'

function MyLink({ href, target, children }) {
  return <a href={href} target={target}>{children}</a>;
}

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-item'> 
        <span className='sidebar-title'>ABOUT ME</span>
        <img src='https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/328435903_759384045109056_472057914952073295_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=4fOXtRT3aRwAX8kl8Gd&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDb1bs-Vum41TKacqpeGoiYt14cRdwx8n5ZqbsY-csI3w&oe=63DE6F46' alt='' />
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
          <MyLink href='https://www.facebook.com/huycheeeeee' target='_blank'>
            <i className='top-icon fa fa-facebook-official' style={{color:'#238ae6'}} aria-hidden='true'/>
          </MyLink>
          <MyLink href='https://zalo.me/0939260508' target='_blank'>
            <i className='top-icon fa fa-phone-square' style={{color:'#39c429'}} aria-hidden='true'/>
          </MyLink>
          <MyLink href='https://github.com/chequanghuyca' target='_blank'>
            <i className='top-icon fa fa-github-square' style={{color:'rgb(138, 15, 190)'}} aria-hidden='true'/>
          </MyLink>
        </div>
      </div>
    </div>
  )
}
