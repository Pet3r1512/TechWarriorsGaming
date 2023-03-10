import { BrowserRouter, Routes, Route } from "react-router-dom";

// TailwindCSS
import './index.css'

// Pages
import HomePage from "./pages/homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
