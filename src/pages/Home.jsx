import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Programs from '../components/sections/Programs';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import VideoShowcase from '../components/sections/VideoShowcase';
import Gallery from '../components/sections/Gallery';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <WhyChooseUs />
      <VideoShowcase />
      <Gallery />
      <Contact />
    </>
  );
}
