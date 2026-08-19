import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuPage from "./pages/menu/MenuPage.jsx";
import AdminPage from "./pages/admin/AdminPage.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import RequireAuth from "./pages/admin/RequireAuth.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route element={<RequireAuth />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
