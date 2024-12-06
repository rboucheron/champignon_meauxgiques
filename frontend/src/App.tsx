import './App.css'
import { Outlet } from 'react-router-dom'


import Navbar from './components/Navbar'
import Accueil from './components/Accueil'
import Light from './components/Light'


function App() {


  return (
    <>  
    <div className="main">
      <main>
        < Navbar /> 
        <Light />
        < Accueil />
      </main>
  
      < Outlet />  
    </div>
    </>
  )
}

export default App