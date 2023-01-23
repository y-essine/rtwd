import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "@components/Dashboard";
import Home from "@home/Home";
import Profile from "@user/Profile";
import Settings from "@settings/Settings";
import Users from "@users/Users";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Dashboard />}>
                    <Route path="" element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="users" element={<Users />} />
                    <Route
                        path="products"
                        element={
                            <h1 className="p-6 text-3xl font-extrabold">
                                Products
                            </h1>
                        }
                    />
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
