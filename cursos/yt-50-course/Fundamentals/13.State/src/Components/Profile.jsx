import React, { useState } from 'react'

const Profile = () => {
    const [profile, setProfile] = useState({name:"", age: ""});
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setProfile((prevProfile) => (
            {...prevProfile, [name]: value}
        ))
    }
  return (
    <div>
        <h2>User Profile</h2>
        <label>Nome:
            <input
                type="text"
                placeholder='Digite'
                name='name'
                value={profile.name}
                onChange={handleChange}
            />
        </label>
        <label>
            Idade:
            <input
                type="text"
                placeholder='Digite'
                name='age'
                value={profile.age}
                onChange={handleChange}
            />
        </label>
        <div>
            <h3>Informações:</h3>
            <p>nome: {profile.name}</p>
            <p>idade: {profile.age}</p>
        </div>
    </div>
  )
}

export default Profile