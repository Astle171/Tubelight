import logo from './logo.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'
import Counter from './components/Counter'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route path='/counter' element={<Counter />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
