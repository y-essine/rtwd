import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "@components/Dashboard";
import Home from "@home/Home";
import Profile from "@user/Profile";
import Settings from "@settings/Settings";
import Users from "@users/Users";
import Courses from "@courses/Courses";
import CoursesList from "@courses/components/CoursesList";
import CoursesAdd from "@courses/components/CoursesAdd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
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
                        <Route path="courses" element={<Courses />}>
                            <Route path="" element={<CoursesList />} />
                            <Route path="add" element={<CoursesAdd />} />
                            <Route path="edit" element={<Courses />} />
                        </Route>
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
            <ToastContainer />
        </>
    );
}

export default App;
