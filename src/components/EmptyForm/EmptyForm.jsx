import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DataURL from "../../Data/Data";

export default function EmptyForm(props) {
    const { users, setUsers } = props;

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");

    function createUser() {
        axios.post(DataURL, {
            name: name,
            surname: surname,
            phone: phone,
        })
        .then(resp => setUsers([...users, resp.data]))
    }

    return (
        <div className="editField">
            Name:
            {<input onChange={(e) => setName(e.target.value)} />}
            <br />
            Surname:
            {<input onChange={(e) => setSurname(e.target.value)} />}
            <br />
            Phone: {<input onChange={(e) => setPhone(e.target.value)} />}
            <div>
                <Link to ="/"><button onClick={()=>createUser()} >Create</button></Link>
                <Link to='/'><button>Cancel</button></Link>
            </div>
        </div>
    );
}
