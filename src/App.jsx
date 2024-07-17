import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Projects from './components/Projects/Projects';
import Partners from './components/Partners/Partners';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Projects />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
