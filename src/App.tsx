// import './App.css'

import { Routes, Route, BrowserRouter } from "react-router";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import { Login } from "./component/Login";
import { Register } from "./component/Register";
import RouteSearch from "./component/RouteSearch";
import { ServicePage } from "./component/ServicePage";
import { TrackingPage } from "./component/TrackingPage";
import ScheduleSearch from "./component/ScheduleSearch";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/schedules" element={<ScheduleSearch />}/>
          <Route path="/routes" element={<RouteSearch />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/tracker" element={<TrackingPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
