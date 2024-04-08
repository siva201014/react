
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route, Routes,BrowserRouter} from 'react-router-dom'
import './App.css'
import {useEffect, useState} from "react";
import readBillingData from "./api/readBillingData.js";
import {LoginPage} from "./pages/Login.jsx"
import {DashboardPage} from "./pages/Dashboard.jsx";
import BillingSystemPage from './pages/BillingSystem.jsx';
import { ErrorPage } from './pages/Error.jsx';
window.ENVIRONMENT = {api:'http://localhost:3000'}
function App() {

    const [data, setData] = useState([])

    useEffect(() => {
        readBillingData().then(setData)
    }, []);

  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<LoginPage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/billingsystem" element={<BillingSystemPage />} />
                  <Route path="/error" element={<ErrorPage />} />
              </Routes>
          </BrowserRouter>


      </div>
    // <>
    //   <div>
    //     <h1>Hello World!!!</h1>
    //       {data.map((dt) =>{
    //           <ViewBillingData dt={dt} key={dt._id}/>
    //       })}
    //   </div>
    //
    // </>
  )
}

export default App
