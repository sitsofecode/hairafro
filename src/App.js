import './App.css';
import { Route , Routes } from 'react-router-dom';
import AllPage from './components/pages';
import IllustrationDetail from './components/pages/illustrationDetail';
function App() {
  return (
    <div className="App tracking-widest">
    <Routes>
      <Route path='/' element={   <AllPage/>}/>
      {/* <Route path='illsutration/:id' element ={<IllustrationDetail/>} /> */}
    </Routes>
    </div>
  );
}

export default App;
