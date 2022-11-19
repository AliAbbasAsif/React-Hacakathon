import React from 'react'
import { Provider, useSelector } from 'react-redux'
import Navbar from './Components/Navbar'
import AppRouter from './Config/AppRouter'
import store from './redux/store'

function App() {
  const dataFromStore = useSelector((state) => state.loginReducer);
  console.log(dataFromStore);
  return (
    <div>
  
      <AppRouter />
    
    </div>
  )
}

export default App
