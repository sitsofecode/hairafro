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
import Vision from './components/pages/Vision';
// import Modal from './components/Modal';
import Article from './components/pages/Article';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='blog' element={<Blog />}/>
      <Route path='article' element={<Article/>} />
    {/* </Route> */}

    <Route path='illustration' element={<Illustration />} />
    <Route path='illustration/:id' element={<IllustrationDetail />} />
    <Route path='apropos' element={<Vision />} />
  </Route>
));
function App() {
  return (
    <div className=" overflow-x-hidden bg-bg2 font-mono">
      <RouterProvider router={router} />
      {/* <Modal/> */}
    </div>
  );
}

export default App;
