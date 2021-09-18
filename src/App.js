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
function fileUpload(){

}
function SelectedFile(){
  console.log("vos")
}
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
      <DropItems goToMenu="settings"><img src='icon/plus.svg'/><h3>Upload an image</h3></DropItems>
      <DropItems><img src='icon/trash.svg'/><h3>Delete an image</h3></DropItems>
        </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames="menu-secondary">
        <div className="menu">
      <DropItems><h3>Upload an Image</h3></DropItems>
      <DropItems><input id="fileUpload" type="file" className="fileInput"/></DropItems>
      <DropItems><input type="text" className="textInput"/></DropItems>
      <div className="buttons">
      <DropItems><img src='icon/upload.svg'/></DropItems>
      <DropItems goToMenu="main" ><img src='icon/back.svg'/></DropItems>
        </div>
        </div>
      </CSSTransition>

    </div>

    
  );
};

export default App;
