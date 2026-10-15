import Header from './components/Header';
import Hero from './components/Hero';
import Shorten from './components/Shorten';
import Statistics from './components/Statistics';
import Boost from './components/Boost';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Shorten />
        <Statistics />
        <Boost />
      </main>
      <Footer />
    </>
  );
}

export default App;
