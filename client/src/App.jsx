
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route, Routes,BrowserRouter} from 'react-router-dom'
import './App.css'
import {useEffect, useState} from "react";
import readBillingData from "./api/readBillingData.js";
import {LoginPage} from "./pages/Login.jsx"
import {DashboardPage} from "./pages/Dashboard.jsx";

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
