import { createBrowserRouter } from "react-router-dom"
import { Home } from './pages/Home/Home'
import { Admin } from './pages/Admin/Admin'
import { Login } from './pages/Login/Login'
import { Networks } from './pages/Networks/Networks'
import { ErrorPage } from "./pages/error"

import { Private } from './routes/Private'



  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/admin',
      element: <Private><Admin /></Private>
    },
    {
      path: '/admin/social',
      element: <Private><Networks /></Private>
    },
    {
      path: '*',
      element: <ErrorPage />
    }
  ])


export { router };
