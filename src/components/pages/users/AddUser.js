import React, {useState} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });

    const {name, username, email, phone, website} = user;
    const onInputChange = e =>{
        setUser({...user,[e.target.name] : e.target.value});
    }

    const onSubmit = async (e)  =>{
        e.preventDefault();
        await axios.post("http://localhost:3001/users", user);
        history.push("/")

    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add a User</h2>
                <form className="form-group" onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your name"
                            name="name"
                            value={name} 
                            onChange = {e => onInputChange(e)}/>
                    </div>
                    <div className="form-group mt-2">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your username"
                            name="username" 
                            value={username}
                            onChange = {e => onInputChange(e)}/>
                    </div>
                    <div className="form-group mt-2">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your E-mail address"
                            name="email" 
                            value={email}
                            onChange = {e => onInputChange(e)}/>
                    </div>
                    <div className="form-group mt-2">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your phone no."
                            name="phone"
                            value={phone} 
                            onChange = {e => onInputChange(e)}/>
                    </div>
                    <div className="form-group mt-2">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Website"
                            name="website"
                            value={website} 
                            onChange = {e => onInputChange(e)}/>
                    </div>
                    <button className="btn btn-primary btn-block mt-2">Add user</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser
