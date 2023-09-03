// import {useState} from 'react';

import {Navbar} from 'reactstrap';
import {NavbarBrand} from 'reactstrap';
import Screenshot from '../img/Screenshot.png'


const Header = () => {
    // const [menuOpen, setMenuOpen] = useState(false);

    return (<Navbar sticky='top' expand='md'>
         <NavbarBrand className='ms-5' href='/'>
             <img src={Screenshot} alt='logo' className='float-start'/>
             
         </NavbarBrand>
        </Navbar>
        )
    }
         


export default Header;