import { useState } from 'react'
import './index.css'
import { HelloWorld, NavComponent } from './components/NavComponent'

function App() {
  const [btnHandlePage, setBtnHandlePage] = useState(false)

  if (btnHandlePage == true)
    return <NavComponent />

  return (
    <>
      <HelloWorld click={() => setBtnHandlePage(true)} />
    </>
  )
}

export default App
