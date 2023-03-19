import logo from './logo.svg';
import './App.css';
import gif1 from '../src/imgs/picture-6-gif.gif';

const picture1x2 = "https://ucarecdn.com/3e0b15c5-4270-46e5-8104-9443b0b07d3e/Rectangle1x2.png";
const picture2x2 = "https://ucarecdn.com/353a8d60-7c9f-4564-b87c-a074bd49a928/Rectangle2x2.png";
const picture3x2 = "https://ucarecdn.com/198d104f-4b6c-4874-b43d-523bfbca0869/Rectangle3x2.png";
const picture4 = "https://ucarecdn.com/dca71d2b-4e5a-45cc-8836-527ce9f7104c/Rectangle4.png";
const picture5 = "https://ucarecdn.com/93bd6b5e-89e3-4400-bb21-17985a76031d/Rectangle5.png";
const picture6 = "https://ucarecdn.com/61423938-e55a-498b-baa2-b8558a7c385d/Rectangle16.png";
const picture7 = "https://ucarecdn.com/9a8b8215-022a-4de7-b226-1f4e7bd40e21/Rectangle17.png";
const picture8 = "https://ucarecdn.com/bc147536-13ca-4aeb-9335-2ed4302a0b5d/Rectangle18.png";
const circlepicture1 = "https://ucarecdn.com/a527d929-4928-4a88-b93b-13f77f945962/Ellipse1.png";
const circlepicture2 = "https://ucarecdn.com/ecabdf63-90f7-4c36-b00a-18a9cd2ffb14/Ellipse2.png";
const circlepicture3 = "https://ucarecdn.com/df1cf529-6838-40c9-afe4-e480f3aad664/Ellipse3.png";
const circlegroup = "https://ucarecdn.com/1df9de6d-133f-49f3-a630-89eb5a78378a/EllipseGroup.png";
const sarrahface = "https://ucarecdn.com/6cc985a6-1d9a-4308-8856-fb858a6defa5/Ellipse4.png";
const square1x1 = "https://ucarecdn.com/681d9ceb-e2b9-4038-afb2-c94b6d490041/Rectangle8.png";
const square1x2 = "https://ucarecdn.com/adc92162-12c9-4193-93ac-c3ac4a288672/Rectangle14.png";
const square1x3 = "https://ucarecdn.com/4955f730-8c1f-4e1e-9ff9-aab2d6d3fd7c/Rectangle9.png";
const square2x1 = "https://ucarecdn.com/8f8f34bb-94f2-4e73-9e6e-99493d7803ca/Rectangle10.png";
const square2x2 = "https://ucarecdn.com/8062cb2f-b274-4502-b1a5-df0c26b7b5ce/Rectangle11.png";
const square2x3 = "https://ucarecdn.com/6595cd59-8feb-4322-aff2-d134a71fd63d/Rectangle12.png";
const square3x1 = "https://ucarecdn.com/2945b9cc-4eca-46ea-a11e-d200fe66af95/Rectangle13.png";
const square3x2 = "https://ucarecdn.com/b0f5a590-8b8b-4442-904f-157dfc9496f1/Rectangle15.png";
const square3x3 = "https://ucarecdn.com/d3f682f9-d054-4de6-8b67-37cca21ee38e/Rectangle7.png";

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
      <div className="images-grid-wrapper">
        <div className="images-grid-row-1">
          <img className="image-grid grid-1-1" src={square1x1}/>
          <img className="image-grid grid-1-2" src={square1x2}/>
          <img className="image-grid grid-1-3" src={square1x3}/>
          <img className="image-grid grid-2-1-mobile" src={square2x1} />
        </div>
        <div className="images-grid-row-2">
          <img className="image-grid grid-2-1" src={square2x1}/>
          <img className="image-grid grid-2-2" src={square2x2} />
          <img className="image-grid grid-2-3" src={square2x3} />
        </div>
        <div className="images-grid-row-3">
          <img className="image-grid grid-3-1" src={square3x1} />
          <img className="image-grid grid-3-2" src={square3x2} />
          <img className="image-grid grid-3-3" src={square3x3} />
        </div>
      </div>
      <img className="image-6" src={picture6} />
      <div className="testimonial-1">
        <div className="testimonial-1-blurb">
          <div className="testimonial-1-blurb-title">Testimonial</div>
          <div className="testimonial-1-blurb-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Sed quis erat enim. Fusce metus metus, aliquam a elit ac, gravid”</div>
          <div className="testimonial-1-blurb-name">Celine wedding 2022</div>
        </div>
        <img className="testimonial-1-image" src={picture7}></img>
      </div>
      <img className="image-7" src={picture8}></img>
      <div className="testimonial-2">
        <img className="testimonial-2-image" src={circlegroup}></img>
        <div className="testimonial-2-blurb">
          <div className="testimonial-2-blurb-title">Testimonial</div>
          <div className="testimonial-2-blurb-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed quis erat enim. Fusce metus metus, aliquam a elit ac, gravid”</div>
          <div className="testimonial-2-blurb-name">Celine wedding 2022</div>
        </div>
      </div>
      <div className="gif-image-2"></div>
    </div>
  );
}

export default App;
