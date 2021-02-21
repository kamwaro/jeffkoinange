import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import AppBorder from '../Border'
import './Navbar.css'


const AppNavbar  =  () =>  {

    let [clicked,setClicked] = useState(false)
    // state = { clicked: false }

    const handleClick = () => {
        setClicked( !clicked )
    }
  
  
    
        return(
            <>
          
                {clicked ? <div></div> : <AppBorder/>}
            <nav className="NavbarItems">
               
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
             \

                <ul className={clicked ? 'nav-menu activated' : 'nav-menu'} style={{width:'100vw',height:'fit-content',display:'flex',justifyContent:'space-between',alignItems:"center"}}>
                    <li style={{display:'flex'}}>
                    <li className="navLinkContainer">
                            <NavLink className='nav-links' to='/home'>
                                Home
                            </NavLink>
                    </li>
                    <li className="navLinkContainer">
                            <NavLink className='nav-links' to="/author">
                                Author
                            </NavLink>
                    </li>
                    <li className="navLinkContainer">
                            <NavLink className='nav-links' to='/book'>
                              The Book
                            </NavLink>
                    </li>
                           

                    </li>
                   
                    <li style={{display:"flex",justifyContent:"space-between"}}>
                            <NavLink className='nav-links mainLink' to='/jeff'>
                               Jeff Koinange
                            </NavLink>
                    </li>

                    <li style={{display:"flex"}} >
                    <li className="navLinkContainer">
                    <NavLink className='nav-links' to='/gallery'>
                                Gallery
                            </NavLink>

                    </li>
                    <li className="navLinkContainer">
                    <NavLink className='nav-links' to='/about'>
                                About 
                     </NavLink>
                    </li>

                    <li className="navLinkContainer">
                    <NavLink className='nav-links' to='/contact'>
                                Contact Me
                            </NavLink>

                    </li>

                    </li>
                    
                           
                            
                
                    
                </ul>
                {/* <Button>Sign Up</Button> */}
            </nav>
            </>
        )
    }


export default AppNavbar