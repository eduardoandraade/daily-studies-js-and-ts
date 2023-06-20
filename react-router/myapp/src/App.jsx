import './App.css'

import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar'

function App() {
  return (
      <div className='App'>
        <Navbar />
      <h1>React Router</h1>
      <Outlet />
      <span>footer</span>
      </div>
     
 
  )
}

export default App
