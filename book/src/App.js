
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Main from './component/Main'
import ReadNow from './component/ReadNow';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Main/>} />
     <Route path='/disc' element={<Main/>} />
     <Route path="/readmore/:id" element={<ReadNow/>} />

       
    </Routes>
    
    </BrowserRouter>


    </div>
  );
}
 


export default App;
