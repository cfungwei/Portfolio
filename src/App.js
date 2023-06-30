import './App.css';
import Homepage from './pages/Homepage'
import Projectpage from './pages/Projectpage'
import Infopage from './pages/Infopage'
import Contactpage from './pages/Contactpage'
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/project' element={<Projectpage />} />
          <Route path='/info' element={<Infopage />} />
          <Route path='/contact' element={<Contactpage />} />
        </Routes>
      </Router>
      {/* <Background>test</Background> */}
    </div>
  );
}

export default App;
