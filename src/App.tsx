import Header from './components/Header';
import Hero from './components/Hero';
import VSL from './components/VSL';
import Curriculum from './components/Curriculum';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <VSL />
      <Curriculum />
      <About />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
