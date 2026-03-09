import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Application from "./components/Application";
import HowWeWork from "./components/HowWeWork";
import OurAreas from "./components/OurAreas";
import DropdownList from "./components/DropdownList";
import Slider from "./components/Slider";
import Marquee from "./components/Marquee";
import SlideExpirience from "./components/SlideExpirience.jsx";
import Experience from "./components/Experience.jsx";

export default function App() {

  return (
      <>
          <Header/>
          <Hero/>
          <Experience/>
          <SlideExpirience/>
          <Marquee/>
          <div className="relative">
              <Slider/>
              <DropdownList/>
          </div>
          <OurAreas/>
          <div className="overflow-hidden">
              <HowWeWork/>
              <Application/>
          </div>
          <Footer/>
      </>
  );
}


