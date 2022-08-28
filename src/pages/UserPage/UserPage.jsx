import React from "react";
import "./users.css";
import Users from "../../components/users/Users";
import DataURL from "../../Data/Data";
import axios from "axios";

export default function UserPage({ users, setUsers }) {
    function deleteUser(id) {
        axios.delete(DataURL + "/" + id);
        const updateUsersData = users.filter((item) => item.id !== id);
        setUsers(updateUsersData);
    }

    return (
        <div className=".user-block">
            {users.map((item) => (
                <Users
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    surname={item.surname}
                    phone={item.phone}
                    deleteUser={deleteUser}
                />
            ))}
        </div>
    );
}
