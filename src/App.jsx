import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Main from "@/views/Main";
// import Home from "@/views/Home";
// import Explore from "@/views/Explore";
// import Settings from "@/views/Settings";

import Dashboard from "@/views/back-office/Dashboard";
import DashboardHome from "@/views/back-office/DashboardHome";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Navigate to="/dashboard" />}>
                    {/* <Route path="" element={<Home />} />
                        <Route path="explore" element={<Explore />} />
                        <Route path="settings" element={<Settings />} /> */}
                </Route>
                <Route path="login" element={<h1>Login</h1>} />
                <Route path="register" element={<h1>Register</h1>} />
                <Route exact path="/dashboard" element={<Dashboard />}>
                    <Route path="" element={<DashboardHome />} />
                    <Route path="profile" element={<h1>DashboardProfile</h1>} />
                    <Route
                        path="settings"
                        element={<h1>DashboardSettings</h1>}
                    />
                </Route>

                <Route
                    path="*"
                    element={
                        <div className="px-8 py-5">
                            <h1>Not found.</h1>
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
