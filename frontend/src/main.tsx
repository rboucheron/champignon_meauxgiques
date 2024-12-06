import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Quizz from './components/Quizz.tsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Quizz />,
      children: [
        {
          path: "/",
          element: < Quizz />

        },
      ]
    }
  ]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < RouterProvider router={router} />
  </StrictMode>,
)
