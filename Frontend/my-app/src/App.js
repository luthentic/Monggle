import "./App.css"
import React, { useState } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"

function App() {
  const [Count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
      </BrowserRouter>
    </div>
  )
}

export default App
