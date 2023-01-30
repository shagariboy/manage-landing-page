
import './App.css';
import CTA from './components/cta/CTA';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <><Nav /><Hero />
    <Features />
    <Testimonials />
    <CTA />
    <Footer />
    </>
  );
}

export default App;
