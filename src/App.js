
import './App.css';
import Images from './components/Images';
import NavBar from './components/meniu/meniu';
import NavItem from './components/meniu/navItem';

function App() {
  return (
    <div className="App">
      <NavBar><NavItem navIcon="icon">
        <DropDown></DropDown>
        </NavItem></NavBar>
      <Images />
    </div>
  );
};
function DropDown(props){
  function DropItems(props){
    return (
      <a href="#" className="dropItem">
        <span className="dropButton">{props.leftIcon}</span>
        {props.children}
      </a>
    );

  };
  return (
    <div className="dropDown">
      <DropItems><img src='icon/chewie.svg'/></DropItems>
      <DropItems><img src='icon/plus.svg'/></DropItems>

    </div>
  );
};

export default App;
