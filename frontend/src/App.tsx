
import './App.css'
import { Outlet } from 'react-router-dom'
import Quizz from './components/Quizz'
import MentionLegal from './components/mentionlegal'

function App() {


  return (
    <>
    < Outlet />
    < Quizz />  
    < MentionLegal/>
    </>
  )
}

export default App
