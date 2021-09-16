import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);
  function DropItems(props){
    return (
      <div className="dropItem">
        <span className="dropButton">{props.DropItems}</span>
        {props.children}
      </div>
    );

  };
  return (
    <div className="dropDown">
      <DropItems><a href='#' onClick={() => setOpen(!open)}><img src='icon/trash.svg'/>{open}</a></DropItems>
      <DropItems><a href='#' onClick={() => setOpen(!open)}><img src='icon/plus.svg'/>{open && props.children}</a></DropItems>

    </div>
  );
};

export default App;
