import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from "./Routing";
import TopNav from "./components/TopNav/TopNav";
import LeftNav from "./components/LeftNav/LeftNav";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <TopNav />
        <div className='body-content'>
          <LeftNav />
          <Routing />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
