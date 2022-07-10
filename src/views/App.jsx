import './App.css'
import { Routes, Route } from "react-router-dom";
import Auth from './auth'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </div>
  )
}

export default App
