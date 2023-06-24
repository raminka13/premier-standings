import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Seasons from './components/Seasons';
import Standings from './components/Standings';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Seasons />} />
        <Route path="/standings" element={<Standings />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
