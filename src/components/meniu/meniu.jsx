import React from "react";
import './meniu.css';

function NavBar(props){
    return(
        <nav className="meniu">
            <ul className="meniuBar">{props.children}</ul>
        </nav>
    );
}
export default NavBar;