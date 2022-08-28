import React from "react";
import EmptyForm from "../../components/EmptyForm/EmptyForm";
import "./CreateUserPage.css";

export default function CreateUserPage(props) {
    const { users, setUsers } = props;

    return (
        <div>
            <h2>Create yourself</h2>
            <div className="createForm-body">
                <h3>Your data</h3>
                <EmptyForm users={users} setUsers={setUsers} />
            </div>
        </div>
    );
}
