import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { SendMoney } from './pages/SendMoney';
import { Dashboard } from './pages/Dashboard';
import { NotFound } from './pages/NotFound';
import { Profile } from './pages/Profile';
import { Update } from './pages/Update';
import{StartPage} from './pages/StartPage'

const BASE_URL = BACKEND_API;
function App() {

  
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sendMoney" element={<SendMoney />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/update" element={<Update />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
