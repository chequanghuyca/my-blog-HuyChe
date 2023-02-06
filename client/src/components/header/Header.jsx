import './header.css'
import background from '../../images/background.png'

export default function Header() {
  return (
    <div className='header'>
      <div className='header-titles'>
        <span className='header-title-lg'>Huy Che</span>
      </div>
      <img className='header-img' src={background} alt='' />
    </div>
  )
}