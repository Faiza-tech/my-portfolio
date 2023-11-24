
import '../Navbar/NavbarStyles.css'
import { Link } from 'react-router-dom'
import { React, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!Click)
    
  }

  return (
    <nav className='Nav'>
      <Link to='/'>
        <h1 className='logo'>Portfolio</h1>
      </Link>
      <ul className={click ? 'nav-link active' : 'nav-link'}>
        <li>
          <Link to='/'> Home</Link>
        </li>
        <li>
          <Link to='/about'> About</Link>
        </li>
        <li>
          <Link to='/project'> Project</Link>
        </li>
        <li>
          <Link to='/contact'  > Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={{handleClick}}>
        {click ?
          (<FaTimes size={30} style={{ color: 'white' }} />)
          :
          (<FaBars size={30} style={{ color: 'white' }} />)
        }



      </div>
    </nav>
  )
}

export default Navbar





