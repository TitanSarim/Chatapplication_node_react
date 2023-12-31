import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import SideBar from './components/utils/SideBar';
import Chat from './components/chats/chat/Chat';
import ProtectedRoute from './components/utils/ProtectedRoute';

function App() {

  return (
    <>

    <BrowserRouter>
     
      <SideBar />
     
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Use the ProtectedRoute component */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Chat />} />
        </Route>
        
      </Routes>
    
    </BrowserRouter>
     
    </>
  )
}

export default App
