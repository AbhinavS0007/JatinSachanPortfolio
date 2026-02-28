
import './App.css';
import Header from './Header';
import Footer from './footer';
import products from './assets/products.jpeg'
import headerimager from './assets/PORTFOLIO1.jpeg'
import socialMedia from './assets/socialMedia.jpg'
import packageDesign from './assets/packageDesign.jpg'
import firstSocial from './assets/firstSocialPage.jpg'
import secondSocial from './assets/secondSocialPage.jpeg'
import package01 from './assets/package01Page.jpeg'


function App() {
  return (
    <div className="min-h-screen w-screen  flex flex-col ">
      <Header />
      <div className=" h-auto w-screen  flex justify-center items-center overflow-hidden ">
        <img src={headerimager} alt="portfolio" className=" object-contain" />
      </div>
      <div className=" w-screen  flex justify-center items-center overflow-hidden">
        <img src={products} alt="portfolio" className=" w-screen" />
      </div>
      <div className=" w-screen flex justify-center items-center overflow-hidden">
        <img src={socialMedia} alt="portfolio" className=" w-screen" />
      </div>
      <div className=" w-screen  flex justify-center items-center overflow-hidden">
        <img src={firstSocial} alt="portfolio" className=" w-screen" />
      </div>
      <div className=" w-screen  flex justify-center items-center overflow-hidden">
        <img src={secondSocial} alt="portfolio" className=" w-screen" />
      </div>
      
      <div className=" w-screen  flex justify-center items-center overflow-hidden">
        <img src={packageDesign} alt="portfolio" className=" w-screen" />
      </div>
      <div className=" w-screen  flex justify-center items-center overflow-hidden">
        <img src={package01} alt="portfolio" className=" w-screen" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
