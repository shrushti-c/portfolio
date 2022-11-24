import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Sidebar } from './SideBar';
import './NavBar.css';
import { IconContext } from 'react-icons'
function Navbar() {
  const [sidebar,setSidebar]=useState(false)

  const showSidebar= ()=> setSidebar(!sidebar)
  return (
 <>
 <IconContext.Provider value={{color: '#fff'}}>
 <div className='navBar'>
    <Link to="#" className="menu-bars">
        <FaIcons.FaBars onClick={showSidebar} />
    </Link>
    </div>
<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
  <ul className='nav-menu-items' onClick={showSidebar}>
    <li className='navbar-toogle'>
      <Link to="#" className='nemu-bars'>

      </Link>
    
    </li>
    {Sidebar.map((item,index) => {
      return(
        <li key={index} className={item.className}>
          <Link to={item.path}>
            {item.icon}
            <span>{item.title}</span>
          </Link>
        </li>
      );
      })}
  </ul>
</nav>
</IconContext.Provider>
 </>
  )
}

export default Navbar
