import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom'


const User = () => {
    const {id} = useParams();
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const {name, username, email, phone, website} = user;
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser = async () =>{

        const result = await axios.get(`http://localhost:3001/users/${id}` );
        setUser(result.data);

    }

    return (
        <div className="container">
            <Link className="btn btn-primary" to="/" >Back to Home </Link>
            <h1 className="display-4">User id: {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">name: {name}</li>
                <li className="list-group-item">user name: {username}</li>
                <li className="list-group-item">email: {email}</li>
                <li className="list-group-item">phone: {phone}</li>
                <li className="list-group-item">website: {website}</li>

            </ul>
        </div>
    )
}

export default User
