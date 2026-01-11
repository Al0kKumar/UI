import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PasswordPage from "./pages/Password";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/password" element={<PasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
