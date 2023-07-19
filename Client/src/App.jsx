import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import SideBar from './components/utils/SideBar';
import Chat from './components/chats/chat/Chat';


function App() {

  return (
    <>

    <BrowserRouter>

      <SideBar/>

    <Routes>

      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      
      <Route path="/" element={<Chat/>} />

    </Routes>

    </BrowserRouter>
     
    </>
  )
}

export default App
