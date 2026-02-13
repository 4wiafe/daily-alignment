import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/LandingPage/sections/PageNotFound/PageNotFound";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}
