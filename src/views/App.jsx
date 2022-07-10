import './App.css'
import { Routes, Route } from "react-router-dom";
import Auth from './auth'
import Shop from './home'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/payment" element={<Payment />} /> */}
      </Routes>
    </div>
  )
}

export default App
