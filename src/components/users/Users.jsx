import React, { useState } from "react";
import DataURL from "../../Data/Data";
import axios from "axios";
import UserChange from "../UserChange/UserChange";

export default function Users(props) {
    const { name, surname, phone, id, deleteUser } = props;
    const [editing, setEditing] = useState(false);

    const [newName, setNewName] = useState(name);
    const [newSurname, setNewSurname] = useState(surname);
    const [newPhone, setNewPhone] = useState(phone);

    function editUserItem() {
        setEditing(!editing);
    }

    function saveEditing(id) {
        axios
            .put(DataURL + "/" + id, {
                name: newName,
                surname: newSurname,
                phone: newPhone,
            })
            .then((resp) => {
                setNewName(resp.data.name);
                setNewSurname(resp.data.surname);
                setNewPhone(resp.data.phone);
            });
        setEditing(!editing);
    }

    return (
        <div className="user-block-item">
            <div className="user-item-body">
                <div className="user-data">
                    name: {newName}, surname: {newSurname}, phone: {newPhone}
                </div>
                <div className="user-control">
                    {!editing ? (
                        <button onClick={() => editUserItem()}>Edit</button>
                    ) : null}
                    {editing ? (
                        <button onClick={() => saveEditing(id)}>Save</button>
                    ) : null}
                    <button onClick={() => deleteUser(id)}>Delete</button>
                </div>
            </div>
            {editing ? (
                <UserChange
                    name={name}
                    setNewName={setNewName}
                    surname={surname}
                    setNewSurname={setNewSurname}
                    phone={phone}
                    setNewPhone={setNewPhone}
                />
            ) : null}
        </div>
    );
}
