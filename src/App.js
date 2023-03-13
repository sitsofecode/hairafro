import './App.css';
import { Route , Routes } from 'react-router-dom';
import AllPage from './components/pages';
function App() {
  return (
    <div className="App tracking-widest">
    <Routes>
      <Route path='/' element={   <AllPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
