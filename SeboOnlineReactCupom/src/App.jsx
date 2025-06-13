import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cupons from "./pages/Cupons";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cupons" element={<Cupons />} />
        
      </Routes>
    </BrowserRouter>
  );
}
