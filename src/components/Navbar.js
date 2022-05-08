import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu() {
    setShowMenu((prevState) => !prevState)
  }

  return (
    <nav>
      <Link to='/'>
        <h1>Other (Archive)</h1>
      </Link>
      <button onClick={toggleMenu}>{showMenu ? 'X' : 'Menu'}</button>
      <div className={`menu ${showMenu ? `displayMenu` : ``}`}>
        <Link to='/dialogscapes'>Maja Milic</Link>
        <Link to='/dialogscapes'>Dialogscapes</Link>
        <Link to='/dialogscapes'>Geanina Gypt & Gypt Records</Link>
        <Link to='/dialogscapes' className='nav--button_shop'>
          Shop
        </Link>
      </div>
    </nav>
  )
}
