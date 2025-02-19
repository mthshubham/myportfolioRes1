import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './components/AppLayout';


function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      children:[
        { path:"/",element:<Home />, },
        { path:"/work",element:<Work />, },
        {path:"/about", element:<About />,},
        {path:"/contact",element:<Contact />,},

      ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default App
