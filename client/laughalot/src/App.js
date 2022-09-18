import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
import Videos from "./Videos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/videos" element={<Videos />} />
          {/* /*<Route path="contact" element={<About />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        
      </Routes>
    </BrowserRouter>
  );
}
