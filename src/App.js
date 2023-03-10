import logo from './logo.svg';
import './App.css';

const picture1x2 = "https://ucarecdn.com/3e0b15c5-4270-46e5-8104-9443b0b07d3e/Rectangle1x2.png";
const picture2x2 = "https://ucarecdn.com/353a8d60-7c9f-4564-b87c-a074bd49a928/Rectangle2x2.png";
const picture3x2 = "https://ucarecdn.com/198d104f-4b6c-4874-b43d-523bfbca0869/Rectangle3x2.png";
const menu = "https://ucarecdn.com/4be237ac-3186-4f83-abf2-4fdd3c0ffb66/menu.png";

function App() {
  return (
    <div className="App">
      <img className="land-image-1" src={picture1x2}/>
      <img className="land-image-2" src={picture2x2}/>
      <img className="land-image-3" src={picture3x2}/>
      <img className="menu-icon" src={menu} />
      <div className="land-est">EST 2022</div>
      <div className="land-logo">SO
      <div className="land-logo-inner">CANDID</div>
      PHOTOGRAPHY</div>
      <div className="land-menu land-menu-about">ABOUT</div>
      <div className="land-menu land-menu-portfolio">PORTFOLIO</div>
      <div className="land-menu land-menu-contact">CONTACT</div>
    </div>
  );
}

export default App;
