
import './App.css';
import Images from './components/Images';
import NavBar from './components/meniu/meniu';
import NavItem from './components/meniu/navItem';

function App() {
  return (
    <div className="App">
      <NavBar><NavItem navIcon="icon">
        <p>Cows are literraly fart machines</p>
        </NavItem></NavBar>
      <Images />
    </div>
  );
}

export default App;
