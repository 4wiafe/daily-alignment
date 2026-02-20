import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/LandingPage/sections/PageNotFound/PageNotFound";
import LandingPage from "./components/LandingPage/LandingPage";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}
