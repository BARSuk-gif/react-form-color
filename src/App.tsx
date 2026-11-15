import { useState } from 'react'
import ColorConverter from './components/colorConverter'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('#9921ff')

  const handleColorChange = (hex: string | null) => {
    setBgColor(hex ?? '#9921ff')
  }

  return (
    <div 
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bgColor,
        transition: 'background-color 0.3s ease',
      }}
    >
      <ColorConverter onColorChange={handleColorChange} />
    </div>
  )
}

export default App
