import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PasswordPage from "./pages/Password";
import { Hero } from "./pages/Hero";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/password" element={<PasswordPage />} />
        <Route path="/" element={<Hero/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
