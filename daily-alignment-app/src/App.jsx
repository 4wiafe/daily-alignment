import { Routes, Route } from "react-router";
import PageNotFound from "./components/LandingPage/sections/PageNotFound/PageNotFound";
import "./App.css";

function App() {

  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
