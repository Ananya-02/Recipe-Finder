import { Menu } from 'semantic-ui-react';
import { logo } from '../../constants/constant';


import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <Menu borderless fixed="top">
            <Menu.Item>
                <img src={logo} alt="logo" style={{ width: 74 }} />
            </Menu.Item>
           <Menu.Item name="Home" as={Link} to="/"  style={{ fontWeight: "900", fontSize: "25px" }} /> 
           <Menu.Item name="Recipes" as={Link} to="/recipes" style={{ fontWeight: "900", fontSize: "25px" }} /> 
        </Menu>
    )
}

export default NavBar;