
import './App.css'
import { Outlet } from 'react-router-dom'
import Quizz from './components/Quizz'


function App() {


  return (
    <>
    < Outlet />
    < Quizz />  
  
    </>
  )
}

export default App
