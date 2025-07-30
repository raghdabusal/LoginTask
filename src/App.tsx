import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import UserDetails from "./Pages/UserDetails/UserDetails";
import EditUser from "./Pages/EditUserDetails/EditUserDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/user-details" element={<UserDetails />} />
        <Route path="/dashboard/edit-user-details" element={<EditUser />} />
      </Routes>
    </Router>
  );
}

export default App;
