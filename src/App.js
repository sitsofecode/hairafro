import './App.css';
import {
  Route,
  // Outlet,
  createBrowserRouter, RouterProvider,
  createRoutesFromElements
} from 'react-router-dom';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import Layout from './components/Layout';
import Illustration from './components/pages/illustration/Illustration';
import IllustrationDetail from './components/pages/illustration/illustrationDetail';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='blog' element={<Blog />} />
    <Route path='illustration' element={<Illustration />} />
    <Route path='illustration/:id' element={<IllustrationDetail/>} />
  </Route>
));
function App() {
  return (
    <div className=" overflow-x-hidden bg-bg2 font-mono">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
