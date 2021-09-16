import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import './App.css';
import Images from './components/Images';
import NavBar from './components/meniu/meniu';
import NavItem from './components/meniu/navItem';

function App() {
  return (
    <div className="App">
      <NavBar>
        <NavItem icon={<img src='icon/chewie.svg'/>}>
          <DropDown>
            </DropDown>
      </NavItem>
      </NavBar>
      <Images />
    </div>
  );
};
function DropDown(props){
  
  const [activeMenu, setActiveMenu] = useState('main');

  function DropItems(props){
    return (
      <a href='#' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
      <div className="dropItem">
        <span className="dropButton">{props.DropItems}</span>
        {props.children}
      </div>
      </a>
    );

  };
  return (
    <div className="dropDown">

      <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary">
        <div className="menu">
      <DropItems goToMenu="settings" ><img src='icon/plus.svg'/></DropItems>
      <DropItems><a href='#' ><img src='icon/trash.svg'/></a></DropItems>
        </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames="menu-secondary">
        <div className="menu">
      <DropItems><h3>Upload an Image</h3></DropItems>
      <DropItems><input id="fileUpload" type="file" className="fileInput"/></DropItems>
      <DropItems><input type="text" className="textInput"/></DropItems>
      <DropItems goToMenu="main" ><img src='icon/back.svg'/></DropItems>
        </div>
      </CSSTransition>

    </div>

    
  );
};

export default App;
