import { useState, useEffect } from 'react';
import Welcome from './sections/Welcome/Welcome';
import Navbar from './components/Navbar/Navbar';
import About from './sections/About/About';




const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen w-full">
    <Navbar />
    <main>
    <Welcome />
    <About />
    </main>
    </div>
  );
};

export default App;