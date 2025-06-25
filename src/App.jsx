import { AppLayout } from '../src/components/layout/AppLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import { Home } from './pages/Home'
import { Login } from './loginsignup/Login'
import { Signup } from './loginsignup/Signup'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },{
        path:"/signup",
        element:<Signup />
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
