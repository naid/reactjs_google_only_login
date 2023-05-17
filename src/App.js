
import './App.css';
import LoginProvider from "./auth/LoginProvider";
import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import Home from './Home';
import Test from './content/Test';
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={googleApiKey}>
      <BrowserRouter>
      <LoginProvider>
        <Navbar />
        <div className="flex">
          <aside className="h-screen sticky top-0">
            <Sidebar />
          </aside>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="test/*" element={<Test />} />
            </Routes>
          </div>
        </div>
        </LoginProvider>
        </BrowserRouter>
        </GoogleOAuthProvider>
    </div>
  );
}

export default App;
