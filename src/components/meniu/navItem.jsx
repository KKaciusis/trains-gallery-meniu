import React, { useState } from "react";
import './meniu.css'
function NavItem(props){
    const [open, setOpen] = useState(false);
    return(
    <li className="navItem">
        <a href="#" className="iconButton" onClick={() => setOpen(!open)}><img src='/icon/chewie.svg'/>
        {open && props.children}
        </a>
    </li>
    );
}
export default NavItem;