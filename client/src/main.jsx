import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Admin from './Components/Admin'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import DataTable from './Components/Admin'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={  <App />} />
        <Route path="/admin" element={ <DataTable />} />
      </Routes>
    </BrowserRouter>
  
   
  </React.StrictMode>,
)
