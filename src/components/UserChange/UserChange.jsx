import React from "react";

export default function UserChange(props){

    const{name, setNewName, surname, setNewSurname, phone, setNewPhone} = props;

    return (
            <div className="editField">
                name: {<input defaultValue={name} onChange={(e) => setNewName(e.target.value)}/>} <br />
                surname: {<input defaultValue={surname} onChange={(e) => setNewSurname(e.target.value)}/>} <br />
                phone: {<input defaultValue={phone} onChange={(e) => setNewPhone(e.target.value)}/>}
            </div>
    )
}