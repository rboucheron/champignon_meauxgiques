
import './App.css'
import { Outlet } from 'react-router-dom'
import Quizz from './components/Quizz'
import MentionLegal from './components/mentionlegal'

function App() {


  return (
    <>
    < Outlet />

    < MentionLegal />  
    </>
  )
}

export default App
