
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import APIPricing from './components/APIPricing';
function App() {
  return (
    <div className="App">
      <>
  
  <BrowserRouter>
    <Routes>
      
    <Route path="/" element={<APIPricing/>}/>
    
    </Routes>
  </BrowserRouter>
  </>
    </div>
  );
}

export default App;
