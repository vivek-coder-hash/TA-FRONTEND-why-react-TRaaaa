import Header from './Header';
import Hero from './Hero';
import About from './About';
import Blog from './Blog';
import Work from './Work';
import Footer from './Footer';
import Contact from './Contact';

function App(props) {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Blog />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
