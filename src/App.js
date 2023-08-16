
import './App.css';
import { BackgroundText } from './components/BackgroundText';
import AnimatedCursor from "react-animated-cursor"
import FlipCard from './components/Flipcard';
import FloatingDiv from './components/FloatingDiv';
import { Footer } from './components/Footer';
// import FlipCard from './components/Flipcard'
// import FloatButton from "./components/FloatButton"
// import RohmbusButton from "./components/TraiButton";
import NavbarComponent from './components/Navbar';
import SliderComponent from './components/SliderComponent';
import Type from './components/Type';
import { WhatsNew } from './components/WhatsNew';
import { TextAnimation } from './components/Whydare';
import ZigzagLine from './components/Zigzagline';
import { Whatwedo } from './components/Whatwedo';
import { Ourmodel } from './components/OurModel';
import { Ourservices } from './components/Ourservices';
import { Stands } from './components/Stands';
import { Previusevent } from './components/Previusevent';
import { Ourpartner } from './components/Ourpartners';
import YourComponent from './components/animatedtxt';
import XrayCursor from './components/XrayCursor';
// import EventCalendar from './components/Eventcalendar';
function App() {
  // const handleButtonClick = () => {
  //   // Handle button click action here
  //   console.log("Button clicked!");
  // };
  // const handleButtonClick1 = () => {
  //   // Handle button click action here
  //   console.log("Button clicked !");
  // };

  return (
    <div className="App">
      <AnimatedCursor innerSize={20}
      outerSize={16} color='255,51,52'/>
      <NavbarComponent/>
      <SliderComponent/>
      <ZigzagLine/>
      <WhatsNew/>
      <Whatwedo/>
      <Ourmodel/>
      <Ourservices/>
      <Stands/>
      <BackgroundText/>
      <Previusevent/>
      <XrayCursor/>
      <Ourpartner/>
     
      {/* <YourComponent/> */}
      {/* <FlipCard/>
      <FloatButton onClick={handleButtonClick} icon="+" />
      <RohmbusButton onClick={handleButtonClick1} text="Click"/>
      <EventCalendar/> */}
      <Footer/>
    </div>
  );
}

export default App;
