import { useState } from 'react'

const Profile = () => {
    const [profile, setProfile] = useState({name: "", age: "",});
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setProfile((prevProfile)=>({
            ...prevProfile, [name]: value,
        }));
    };
  return (
    <div>
        <div>
            <label>
                Nome: 
                <input type="text" name='name' value={profile.name} onChange={handleChange}/>
            </label>
        </div>
        <div>
            <label>
                Idade:
                <input type='text' name='age' value={profile.age} onChange={handleChange}/>
            </label>
        </div>
        <div>
            <h3>Info:</h3>
            <p>nome: {profile.name}</p>
            <p>idade: {profile.age}</p>
        </div>
    </div>
  )
}

export default Profile