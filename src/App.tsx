import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
