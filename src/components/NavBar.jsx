import React from 'react'
import CartWidget from './CartWidget'
import {Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <nav className='navbar bg-body-tertiary'> 
        <div className='container-fluid'>
            <h3>Brand-Commerce</h3>
            
            <Menu>
            <MenuButton>Categorias</MenuButton>
                    <MenuList>
                        <MenuItem>Categoria A</MenuItem>
                        <MenuItem>Categoria B</MenuItem>
                    </MenuList>
            </Menu>
            
            
            <CartWidget/>     

        </div>
        </nav>    
    )

}

export default NavBar