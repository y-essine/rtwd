import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Main from "@/views/Main";
// import Home from "@/views/Home";
// import Explore from "@/views/Explore";
// import Settings from "@/views/Settings";

import Dashboard from "@/views/Dashboard";
import Home from "@home/Home";
import Users from "@users/Users";
import Profile from "@/views/profile/Profile";
import Settings from "@/views/settings/Settings";
import Products from "@/views/products/Products";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Dashboard />}>
                    <Route path="" element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="users" element={<Users />} />
                    <Route path="products" element={<Products />} />
                </Route>
                <Route path="login" element={<h1>Login</h1>} />
                <Route path="register" element={<h1>Register</h1>} />

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
