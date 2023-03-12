import logo from './logo.svg';
import './App.css';
import gif1 from '../src/imgs/picture-6-gif.gif';

const picture1x2 = "https://ucarecdn.com/3e0b15c5-4270-46e5-8104-9443b0b07d3e/Rectangle1x2.png";
const picture2x2 = "https://ucarecdn.com/353a8d60-7c9f-4564-b87c-a074bd49a928/Rectangle2x2.png";
const picture3x2 = "https://ucarecdn.com/198d104f-4b6c-4874-b43d-523bfbca0869/Rectangle3x2.png";
const picture4 = "https://ucarecdn.com/dca71d2b-4e5a-45cc-8836-527ce9f7104c/Rectangle4.png";
const picture5 = "https://ucarecdn.com/93bd6b5e-89e3-4400-bb21-17985a76031d/Rectangle5.png";
const circlepicture1 = "https://ucarecdn.com/a527d929-4928-4a88-b93b-13f77f945962/Ellipse1.png";
const circlepicture2 = "https://ucarecdn.com/ecabdf63-90f7-4c36-b00a-18a9cd2ffb14/Ellipse2.png";
const circlepicture3 = "https://ucarecdn.com/df1cf529-6838-40c9-afe4-e480f3aad664/Ellipse3.png";
const sarrahface = "https://ucarecdn.com/6cc985a6-1d9a-4308-8856-fb858a6defa5/Ellipse4.png";

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
      <img className="image-4" src={picture4} />
      <div className="circle-images-wrapper">
        <img className="image-5" src={picture5} />
        <div className="circle-images">
          <img className="circle-image-1" src={circlepicture1}/>
          <img className="circle-image-2" src={circlepicture2}/>
          <img className="circle-image-3" src={circlepicture3}/>
        </div>
      </div>
      <img className="gif-image-1" src={gif1}/>
      <div className="sarrah-blurb-wrapper">
        <img className="image-sarrah-face" src={sarrahface}/>
        <div className="about-header">socandidphotographer</div>
        <div className="about-name">sarrah somai</div>
        <div className="about-blurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed quis erat enim. Fusce metus metus, aliquam a elit ac, gravid
          a congue diam. Ut et est massa. Morbi rhoncus, risus a cursus ultricies,
          sapien leo malesuada mauris, id varius augue leo ullamcorper justo.
          Fusce ultricies, dui vitae tristique faucibus, arcu massa consequat dolor,
          pretium dictum est lacus finibus lorem. Donec tempor cursus felis, nec scelerisque
          mi pellentesque ac. Nulla consectetur eleifend viverra. Nunc semper nulla feugiat sem
          mollis, sed accumsan est facilisis.</div>
      </div>
    </div>
  );
}

export default App;
