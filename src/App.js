import React, { useEffect, useState } from "react";
import "./App.css";
import HeaderApp from "./components/header/HeaderApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UserPage from "./pages/UserPage/UserPage";
import CreateUserPage from "./pages/CreateUserPage/CraeteUserPage";
import axios from "axios";
import DataURL from "./Data/Data";

function App() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(DataURL).then((resp) => setUsers(resp.data));
    }, []);

    return (
        <BrowserRouter>
            <HeaderApp />
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/users" element={<UserPage users={users} setUsers={setUsers}/>} />
                    <Route path="/users/create" element={<CreateUserPage users={users} setUsers={setUsers} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
