import './App.css';
import Homepage from './pages/Homepage'
import Projectpage from './pages/Projectpage'
import Infopage from './pages/Infopage'
import Contactpage from './pages/Contactpage'
import Theme from './components/Theme'
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'
import { useState } from 'react';

function App() {
  let [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light'){
      setTheme('dark');
    } else {
      setTheme('light')
    }
  }

  const themes = [{id: 'light'}, {id: 'dark'}]

  return (
    <div className={`App ${theme}`}>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/project' element={<Projectpage />} />
          <Route path='/info' element={<Infopage />} />
          <Route path='/contact' element={<Contactpage />} />
        </Routes>
      </Router>
      <div className='theme-button' onClick={toggleTheme} selected={theme}>
       {themes.map((item) => (
        <Theme key={item.id} theme={item.id} selected={theme}/>
       ))}
      </div>
    </div>
  );
}

export default App;
