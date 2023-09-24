// import {useState} from 'react';

// import {Navbar} from 'reactstrap';
// import {NavbarBrand} from 'reactstrap';
// import Screenshot from '../img/Screenshot.png'


// const Header = () => {
//     // const [menuOpen, setMenuOpen] = useState(false);

//     return (<Navbar sticky='top' expand='md'>
//          <NavbarBrand className='ms-5' href='/'>
//              <img src={Screenshot} alt='logo' className='float-start'/>
             
//          </NavbarBrand>
//         </Navbar>
//         )
//     }
         


// export default Header;

import {useState} from 'react';
import {Collapse, NavbarToggler, Nav, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import {Navbar} from 'reactstrap';
import {NavbarBrand} from 'reactstrap';
import Screenshot from '../img/Screenshot.png'


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <Navbar dark color='primary' sticky='top' expand='md'>
         <NavbarBrand className='ms-5' href='/'>
             <img src={Screenshot} alt='Deep Connections logo' className='float-start'/>
             <h1 className='mt-1'>Deep Connections</h1>
         </NavbarBrand>

         <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                </Nav>

            <Nav className='ms-auto' navbar>
                <NavItem>
                    <NavLink className='nav-link' to ='/home'>
                        <i className='fa fa-home fa-lg' /> Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to ='/'>
                        <i className='fa fa-info fa-lg' /> Appointments
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to ='/about'>
                        <i className='fa fa-info fa-lg' /> About
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to ='/contact'>
                        <i className='fa fa-address-card fa-lg' /> Contact
                    </NavLink>
                </NavItem>
            </Nav>
            
         </Collapse>
 </Navbar>
 )
}

export default Header;